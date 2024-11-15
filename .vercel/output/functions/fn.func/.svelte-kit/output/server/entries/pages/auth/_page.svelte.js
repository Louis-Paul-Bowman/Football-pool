import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../chunks/ssr.js";
import { g as getToastStore } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as TabGroup, a as Tab } from "../../../chunks/Tab.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  const toastStore = getToastStore();
  let passwordVisibility = false;
  if (form?.success === false) {
    toastStore.trigger({
      message: `Failed. ${form?.reason}`,
      timeout: 3e3,
      background: "variant-filled-error"
    });
  }
  if (form?.success === true) {
    toastStore.trigger({
      message: `${form?.reason ?? "Success!"}`,
      timeout: 3e3,
      background: "variant-filled-success"
    });
  }
  let tabSet = 0;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="h-screen flex items-center justify-center sm:mx-auto sm:w-full sm:max-w-md"><div class="input-group-shim shadow rounded-lg"><div class="flex flex-col w-full items-center space-y-4"><p data-svelte-h="svelte-1bu0mu9">Please login</p> ${validate_component(TabGroup, "TabGroup").$$render($$result, { justify: "justify-center" }, {}, {
      panel: () => {
        return ` <form class="select w-full" method="post" action="?/login" autocomplete="off">${tabSet === 1 ? `<label class="label block" data-svelte-h="svelte-69fy7r"><span>Display name</span> <input class="input w-full rounded-lg variant-filled-surface" type="text" id="displayName" name="displayName"></label>` : ``} <label class="label block" data-svelte-h="svelte-yc6640"><span>Email</span> <input class="input w-full rounded-lg variant-filled-surface" type="text" id="email" name="email"></label> <label class="label block"><span data-svelte-h="svelte-1kvjhoz">Password</span> <span class="flex w-full items-center gap-2"><input required class="input w-full rounded-lg variant-filled-surface"${add_attribute("type", "password", 0)} id="password" name="password"> <input type="checkbox" name="passwordVisibility" id="passwordVisibility" class="hidden"${add_attribute("checked", passwordVisibility, 1)}> <label for="passwordVisibility" class="cursor-pointer">${`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" class="fill-surface-400"><path d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"></path></svg>`}</label></span></label> <span class="w-full flex justify-between">${tabSet === 0 ? `<button class="btn w-1/4 rounded-lg variant-outline-surface" data-svelte-h="svelte-7d04sx">Log in</button>` : ``} ${tabSet === 1 ? `<button class="btn w-1/4 rounded-lg variant-outline-surface" formaction="?/signup" data-svelte-h="svelte-u5j3dt">Register</button>` : ``}</span></form> `;
      },
      default: () => {
        return `${validate_component(Tab, "Tab").$$render(
          $$result,
          { name: "Login", value: 0, group: tabSet },
          {
            group: ($$value) => {
              tabSet = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Login`;
            }
          }
        )} ${validate_component(Tab, "Tab").$$render(
          $$result,
          {
            name: "Register",
            value: 1,
            group: tabSet
          },
          {
            group: ($$value) => {
              tabSet = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Register`;
            }
          }
        )} `;
      }
    })}</div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
