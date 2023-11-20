import Post from "@/components/Post";
import prisma from "@/lib/prisma";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return posts;
}
export default async function Home() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {posts.map((post, i) => (
        <Post key={i} {...post} />
      ))}
    </main>
  );
}
