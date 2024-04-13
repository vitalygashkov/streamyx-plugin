import { AudioCodec, DynamicRange, VideoCodec } from 'dasha';

export type RunArgs = {
  urls: string[];

  videoQuality?: number;
  videoCodec?: VideoCodec;
  videoRange?: DynamicRange;
  videoBitrate?: number;
  videoDimension?: '2D' | '3D';

  audioCodec?: AudioCodec;
  audioChannels?: number;
  audioBitrate?: number;

  subtitleFormat: string;
  subtitleLanguages: string[];

  languages: string[];

  skipVideo: boolean;
  skipAudio: boolean;
  skipSubtitles: boolean;
  skipMux: boolean;

  episodes: number[];
  retry: number;
  connections: number;

  seasons: number[];

  movieTemplate: string;
  episodeTemplate: string;
  hardsub: boolean;
  trimBegin?: string;
  trimEnd?: string;
  pssh?: string;
  header?: Record<string, string>;
  http2: boolean;
  debug: boolean;
  version: boolean;
  help: boolean;
};
