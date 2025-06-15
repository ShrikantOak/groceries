import { createClient } from '@/lib/supabase/server';

export default async function Groceries() {
  const supabase = await createClient();
  const { data: groceries } = await supabase.from("groceu6ries").select();

  return <pre>{JSON.stringify(groceries, null, 2)}</pre>
}