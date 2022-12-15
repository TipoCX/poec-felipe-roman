import { IpcRenderer } from 'electron';
import { Channels } from 'main/preload';

declare global {
  interface Window {
    algomas:{
      minApp(): void;
      closeApp(): void;
    }
    // electron:
    // {
    //   ipcRenderer: {
    //     sendMessage(channel: Channels, args: unknown[]): void;
    //     on(
    //       channel: Channels,
    //       func: (...args: unknown[]) => void
    //     ): (() => void) | undefined;
    //     once(channel: Channels, func: (...args: unknown[]) => void): void;
    //   };
    // };
  }
}

export {};
