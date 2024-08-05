import sdlLibPath from "../sdlLibPath.ts";

const lib = Deno.dlopen(sdlLibPath, {
  "SDL_GetError": { parameters: [], result: "pointer" }
});

/**
 * Retrieve a message about the last error that occurred on the current thread.
*/
function SDLGetError(): string {
  const errorPtr = lib.symbols.SDL_GetError();
  // @ts-ignore: type not compatible
  return new Deno.UnsafePointerView(errorPtr).getCString();
}

export default SDLGetError;
