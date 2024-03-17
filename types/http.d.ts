import { RequestInit, Response } from 'undici';

export interface Http {
  headers: Record<string, string>;
  cookies: string[];
  fetch(resource: string | URL | Request, options?: RequestInit): Promise<Response>;
  appendCookies(setCookie: string | string[]): void;
  setCookies(cookies: string[]): void;
  setHeader(name: string, value: string): void;
  setHeaders(headers: Record<string, string>): void;
  removeHeader(name: string): void;
}
