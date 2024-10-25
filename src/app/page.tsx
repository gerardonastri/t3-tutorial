import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import { createClient } from "~/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
  // const cookieStore = await cookies();
  // const supabase = createClient(cookieStore);
  // const { data: todos, error } = await supabase.from("todos").select();

  const { data } = api.post.getAll;

  console.log(data);

  return (
    <HydrateClient>
      {data?.map((post) => <div key={post.id}>{post.content}</div>)}
    </HydrateClient>
  );
}
