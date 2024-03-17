import { Logger } from './logger';
import { Http } from './http';
import { FS } from './fs';
import { Prompt } from './prompt';

export interface StreamyxInstance {
  log: Logger;
  http: Http;
  fs: FS;
  prompt: Prompt;
  browser: any;
}
