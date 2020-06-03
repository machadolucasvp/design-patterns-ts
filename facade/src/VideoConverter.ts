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

    try {
      audioMixer.mixAudio(myFile, codec);
      Compresser.compressFile(myFile);

    } catch (exception) {
      console.log(exception);

    }
  }
}