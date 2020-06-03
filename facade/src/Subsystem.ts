type Codec = {
  type: string
}

export class VideoFile {
  name: string;
  path: string;

  constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
  }
}

export class AudioMixer {
  mixAudio(file: VideoFile, codec: Codec): void {
    console.log('Mixing audio...');
  }
}

export class CodecFactory {
  createCodec(): Codec {
    console.log('Creating a codec...');
    
    return { type: 'MP4 Codec ' }
  }
}

export class Compresser {
  static compressFile(file: VideoFile): void {
    console.log('Compressing the file...');
  }
}