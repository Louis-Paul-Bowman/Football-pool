export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","img/avatar/jacoby.jpg","img/avatar/kermit_mahomes.jfif","img/avatar/peyton_balaclava.jpeg","img/avatar/sean_al_quada.jpg","img/logos/png/-1.png","img/logos/png/-2.png","img/logos/png/1.png","img/logos/png/10.png","img/logos/png/11.png","img/logos/png/12.png","img/logos/png/13.png","img/logos/png/14.png","img/logos/png/15.png","img/logos/png/16.png","img/logos/png/17.png","img/logos/png/18.png","img/logos/png/19.png","img/logos/png/2.png","img/logos/png/20.png","img/logos/png/21.png","img/logos/png/22.png","img/logos/png/23.png","img/logos/png/24.png","img/logos/png/25.png","img/logos/png/26.png","img/logos/png/27.png","img/logos/png/28.png","img/logos/png/29.png","img/logos/png/3.png","img/logos/png/30.png","img/logos/png/33.png","img/logos/png/34.png","img/logos/png/4.png","img/logos/png/5.png","img/logos/png/6.png","img/logos/png/7.png","img/logos/png/8.png","img/logos/png/9.png","img/logos/svg/-1.svg","img/logos/svg/-2.svg","img/logos/svg/1.svg","img/logos/svg/10.svg","img/logos/svg/11.svg","img/logos/svg/12.svg","img/logos/svg/13.svg","img/logos/svg/14.svg","img/logos/svg/15.svg","img/logos/svg/16.svg","img/logos/svg/17.svg","img/logos/svg/18.svg","img/logos/svg/19.svg","img/logos/svg/2.svg","img/logos/svg/20.svg","img/logos/svg/21.svg","img/logos/svg/22.svg","img/logos/svg/23.svg","img/logos/svg/24.svg","img/logos/svg/25.svg","img/logos/svg/26.svg","img/logos/svg/27.svg","img/logos/svg/28.svg","img/logos/svg/29.svg","img/logos/svg/3.svg","img/logos/svg/30.svg","img/logos/svg/33.svg","img/logos/svg/34.svg","img/logos/svg/4.svg","img/logos/svg/5.svg","img/logos/svg/6.svg","img/logos/svg/7.svg","img/logos/svg/8.svg","img/logos/svg/9.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".jpeg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.D3bKGJHM.js","app":"_app/immutable/entry/app.DmWsAMR8.js","imports":["_app/immutable/entry/start.D3bKGJHM.js","_app/immutable/chunks/entry.BrVQtyW_.js","_app/immutable/chunks/scheduler.hKD0eBq_.js","_app/immutable/chunks/index.DZrsBfdN.js","_app/immutable/entry/app.DmWsAMR8.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.hKD0eBq_.js","_app/immutable/chunks/index.CuVcAe-p.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/auth/confirm",
				pattern: /^\/auth\/confirm\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/auth/confirm/_server.ts.js'))
			},
			{
				id: "/private",
				pattern: /^\/private\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/private/import",
				pattern: /^\/private\/import\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/private/import/_server.ts.js'))
			},
			{
				id: "/private/picks",
				pattern: /^\/private\/picks\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/private/picks/_server.ts.js'))
			},
			{
				id: "/private/scoreboard",
				pattern: /^\/private\/scoreboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/private/test",
				pattern: /^\/private\/test\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/private/test/_server.ts.js'))
			},
			{
				id: "/private/updates",
				pattern: /^\/private\/updates\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/private/updates/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
