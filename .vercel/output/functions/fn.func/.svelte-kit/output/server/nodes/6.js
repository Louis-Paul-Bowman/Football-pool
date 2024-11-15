import * as server from '../entries/pages/private/scoreboard/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/private/scoreboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/private/scoreboard/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.C2DXdZgx.js","_app/immutable/chunks/scheduler.hKD0eBq_.js","_app/immutable/chunks/index.CuVcAe-p.js","_app/immutable/chunks/each.BNEHTTNV.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.1kozmAgv.js","_app/immutable/chunks/index.DZrsBfdN.js","_app/immutable/chunks/Tab.BApwU2Qd.js","_app/immutable/chunks/x.7a-Yn-t5.js"];
export const stylesheets = ["_app/immutable/assets/ProgressBar.Cirlo5Z8.css"];
export const fonts = [];
