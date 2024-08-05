/**
 * This module exports the main library.
 *
 * Exports functions for initialize or quit sdl.
 *
 * @module
*/

import { symbols, SDL } from "./symbols.ts";
import { SDL_INIT_VIDEO } from "../constants.ts";
import sdlLibPath from "../../sdlLibPath.ts";
import SDLGetError from "../SDLGetError.ts";

// @ts-ignore: type not compatible with ForeignFunction
const lib = Deno.dlopen(sdlLibPath, symbols) as unknown as { symbols: SDL  };

/**
* Initialize the SDL library.
*/
export function Init() {
  if (lib.symbols.SDL_Init(SDL_INIT_VIDEO) !== 0) {
    const err = SDLGetError();
    throw new Error(`Failed to initialize SDL: ${err}`);
  }
}

/**
 * Clean up all initialize subsystems.
*/
export function Quit() {
  lib.symbols.SDL_Quit();
}
