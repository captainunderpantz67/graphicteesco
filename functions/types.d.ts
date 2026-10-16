/// <reference types="@cloudflare/workers-types" />
// Pages Functions bundle .wasm files as WebAssembly modules.
declare module '*.wasm' {
  const mod: WebAssembly.Module;
  export default mod;
}
