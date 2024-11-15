import { r as redirect } from "../../chunks/index.js";
const load = () => {
  return redirect(303, "/auth");
};
const actions = {
  logout: async ({ locals: { supabase } }) => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    }
    return redirect(303, "/");
  }
};
export {
  actions,
  load
};
