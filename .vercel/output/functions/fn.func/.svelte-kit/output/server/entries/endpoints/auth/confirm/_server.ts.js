import { r as redirect, e as error } from "../../../../chunks/index.js";
const GET = async ({ url, locals: { supabase } }) => {
  const token_hash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type");
  const next = url.searchParams.get("next") ?? "/";
  const redirectTo = new URL(url);
  redirectTo.pathname = next;
  redirectTo.searchParams.delete("token_hash");
  redirectTo.searchParams.delete("type");
  if (token_hash && type) {
    const { error: error2 } = await supabase.auth.verifyOtp({ type, token_hash });
    if (!error2) {
      redirectTo.searchParams.delete("next");
      redirect(303, redirectTo);
    }
  }
  return error(500, "Failed to validate email.");
};
export {
  GET
};
