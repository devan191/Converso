import { auth } from "@clerk/nextjs/server";
import { createClient as createSupabaseServerClient } from "@/utils/supabase/server";

export const createSupabaseClient = async () => {
  const { getToken } = await auth();
  const accessToken = await getToken();

  return createSupabaseServerClient(accessToken);
};
