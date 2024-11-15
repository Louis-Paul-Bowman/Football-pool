import { r as redirect } from "../../../chunks/index.js";
const actions = {
  signup: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const data = {
      display_name: formData.get("displayName")
    };
    const options = { data };
    const { error } = await supabase.auth.signUp({ email, password, options });
    if (error) {
      console.error(error);
      return { success: false, reason: error.message };
    } else {
      return {
        success: true,
        reason: `An email has been sent to ${email} to validate your account.`
      };
    }
  },
  login: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error(error);
      return { success: false, reason: error.message };
    } else {
      redirect(303, "/private");
    }
  }
};
export {
  actions
};
