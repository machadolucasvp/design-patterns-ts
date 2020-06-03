import Subscriber, { ConcreteSubscriber } from './src/Subscriber';
import Publisher, { ConcretePublisher, EventType } from './src/Publisher';

(function main() {
  const subscribersMock =
    [new ConcreteSubscriber(1),
    new ConcreteSubscriber(2),
    new ConcreteSubscriber(3)]
  const publisher = new ConcretePublisher();

  function SubscribePeople<K>(subscriber: Subscriber,
    publisher: Publisher<K>, eventType?: K) {
    publisher.subscribe(subscriber, eventType);

  }
  subscribersMock.forEach(subscriber => {
    const randomEventType = Math.floor(Math.random() * 2) === 0
      ? EventType.Incoming : EventType.Outgoing;

    SubscribePeople<EventType>(subscriber, publisher, randomEventType);
  });

  publisher.notify(EventType.Incoming)
  publisher.notify(EventType.Outgoing)
  publisher.notifyAll();

})();
