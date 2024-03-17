export interface FS {
  writeJson(path: string, data: object): Promise<void>;
  readJson<T = unknown>(path: string): Promise<T>;
}
