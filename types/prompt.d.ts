export type PromptType = 'input' | 'confirm';

export type PromptAnswer<T> = T extends 'input' ? string : T extends 'confirm' ? boolean : never;

export type Prompt = {
  waitForInput<T extends PromptType = 'input'>(message: string, type?: T, timeout?: number): Promise<PromptAnswer<T>>;
};
