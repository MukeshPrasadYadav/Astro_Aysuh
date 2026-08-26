import { createClient } from "@supabase/supabase-js";

console.log("key superbase",process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY)

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);