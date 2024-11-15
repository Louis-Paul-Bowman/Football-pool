import * as server from '../entries/pages/auth/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/auth/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.Chui509Q.js","_app/immutable/chunks/scheduler.hKD0eBq_.js","_app/immutable/chunks/index.CuVcAe-p.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.1kozmAgv.js","_app/immutable/chunks/index.DZrsBfdN.js","_app/immutable/chunks/Tab.BApwU2Qd.js"];
export const stylesheets = ["_app/immutable/assets/ProgressBar.Cirlo5Z8.css"];
export const fonts = [];
