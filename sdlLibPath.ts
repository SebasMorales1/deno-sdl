// sdlLibPath.ts

/**
 * This module exports the path of SDL library.
 * @module
*/

const libPath = {
  linux: "/usr/lib/x86_64-linux-gnu/libSDL2.so",
  darwin: "/usr/local/lib/libSDL2.dylib",
  windows: "SDL2.dll",
};

// @ts-ignore: only support 3 OS for developing.
const sdlLibPath: string = libPath[Deno.build.os];

export default sdlLibPath;
