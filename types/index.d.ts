export interface StreamyxInstance {
  log: typeof console;
  http: Http;
  fs: FS;
  prompt: Prompt;
  browser: any;
}

export interface Http {
  fetch: typeof fetch;
}

export type PromptType = 'input' | 'confirm';
export type PromptAnswer<T> = T extends 'input' ? string : T extends 'confirm' ? boolean : never;
export interface Prompt {
  waitForInput<T extends PromptType = 'input'>(message: string, type?: T, timeout?: number): Promise<PromptAnswer<T>>;
}

export interface DrmConfig {
  server: string;
  headers: Record<string, string>;
  params?: object;
}
export interface DownloadConfig {
  provider: string;
  movie?: { title: string };
  show?: { title: string };
  season?: { number: number };
  episode?: { number: number; title: string };
  manifestUrl: string;
  drmConfig: DrmConfig | (() => Promise<DrmConfig>);
  subtitles?: any[];
  audioType: string;
  audioLanguage: string[];
}

export interface FS {
  writeJson(path: string, data: object): Promise<void>;
  readJson<T = unknown>(path: string): Promise<T>;
}
