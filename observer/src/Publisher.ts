import Subscriber from "./Subscriber";

export enum EventType {
  Outgoing,
  Incoming,
}

export default interface Publisher<K> {
  subscribers: Map<K, Set<Subscriber>>
  subscribe(subscriber: Subscriber, eventType?: K): void;
  unsubscribe(subscriber: Subscriber, eventType?: K): boolean;
  notify(eventType?: EventType): void;
  notifyAll(): void;
}

export class ConcretePublisher implements Publisher<EventType> {
  subscribers: Map<EventType, Set<Subscriber>>

  constructor() {
    this.subscribers = new Map();
    Object.keys(EventType).map(key => this.subscribers.set(EventType[key], new Set()));
  }

  getSubscribersPerEvent(eventType: EventType = EventType.Outgoing) {
    return this.subscribers.get(eventType);
  }

  subscribe(subscriber: Subscriber, eventType?: EventType) {
    const subscribers = this.getSubscribersPerEvent(eventType)
    subscribers.add(subscriber);
  }

  unsubscribe(subscriber: Subscriber, eventType?: EventType): boolean {
    const subscribers = this.getSubscribersPerEvent(eventType)
    return subscribers.delete(subscriber);
  }

  notify(eventType?: EventType) {
    console.log(`Notifying subscribers with ${EventType[eventType] || EventType[EventType.Outgoing]}`)
    const subscribers = this.getSubscribersPerEvent(eventType)
    subscribers.forEach(subscriber => subscriber.update())
  }

  notifyAll() {
    console.log('Notifying all subscribers')
    this.subscribers.forEach(subscriberSet => {
      subscriberSet.forEach(subscriber => {
        subscriber.update();
      })
    })
  }

}