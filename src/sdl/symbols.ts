import { Symbol } from "../types.ts";

export interface SDL {
  SDL_Init(flags: number): number;
  SDL_Quit(): void;
};

export const symbols: Record<keyof SDL, Symbol> = {
  SDL_Init: {
    parameters: ["u32"],
    result: "i32",
  },
  SDL_Quit: {
    parameters: [],
    result: "void",
  },
};
