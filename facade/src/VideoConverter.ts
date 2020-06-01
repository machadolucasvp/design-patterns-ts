import {
  VideoFile,
  AudioMixer,
  CodecFactory,
  Compresser,
} from './Subsystem';

export default class VideoConverter {

  static convertVideo(fileName: string, path: string): void {
    const myFile = new VideoFile(fileName, path);
    const audioMixer = new AudioMixer();
    const codec = new CodecFactory().createCodec();
    const compresser = new Compresser();

    try {
      audioMixer.mixAudio(myFile, codec);
      compresser.compressFile(myFile);

    } catch (exception) {
      console.log(exception);

    }
  }
}