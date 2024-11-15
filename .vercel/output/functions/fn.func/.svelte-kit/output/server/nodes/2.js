import * as server from '../entries/pages/private/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/private/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2._Gn4_SWy.js","_app/immutable/chunks/scheduler.hKD0eBq_.js","_app/immutable/chunks/index.CuVcAe-p.js"];
export const stylesheets = [];
export const fonts = [];
