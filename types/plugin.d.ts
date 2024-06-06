import { RunArgs } from './args';
import { StreamyxInstance } from './streamyx';

export type Plugin<T = unknown> = (streamyx: StreamyxInstance, options: T) => PluginInstance;

export interface PluginInstance {
  name: string;
  isValidUrl: (url: string) => boolean;
  init: () => Promise<void>;
  getConfigList: (url: string, args: RunArgs) => Promise<DownloadConfig[]>;
}

export interface DownloadConfig {
  provider: string;
  movie?: { title: string };
  show?: { title: string };
  season?: { number: number };
  episode?: { number: number; title?: string };
  manifestUrl: string;
  headers?: Record<string, string>;
  drmConfig: DrmConfig | (() => Promise<DrmConfig>);
  subtitles?: any[];
  audioType?: string;
  audioLanguage?: string[];
  http2?: boolean;
}

export interface DrmConfig {
  server: string;
  headers: Record<string, string>;
  params?: object;
}
