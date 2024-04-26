import PostCreateForm from "@/components/posts/post-create-form";
// import { Divider } from "@nextui-org/react";
interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

export default function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params;

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">Slug is: {slug}</h1>
      </div>
      <div>
        <PostCreateForm slug={slug} />
        {/* <Divider className="my-2" />
        <h3 className="text-lg mb-1">Posts</h3>
        <div>Post list</div> */}
      </div>
    </div>
  );
}
