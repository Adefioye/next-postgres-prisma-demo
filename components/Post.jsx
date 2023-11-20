import { User } from "@prisma/client";

// interface PostProps {
//   id: string;
//   title: string;
//   content?: string | null;
//   published: boolean;
//   author?: { name: string } | null;
//   authorId?: string;
// }

export default function Post({ id, title, content, author}) {
  return (
    <div
      style={{ border: "1px solid white", padding: "15px", margin: "10px 0px" }}
    >
      <h3>{author?.name}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
      {/* <DeletePostButton postId={id} /> */}
    </div>
  );
}
