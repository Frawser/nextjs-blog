import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const post = await res.json();
  if (!post) {
    return notFound();
  }

  return (
    <div className="text-center pt-12">
      <h1 className="text-3xl capitalize font-bold">{post.title}</h1>
      <p className="whitespace-pre-wrap mt-4">{post.body}</p>
    </div>
  );
}
