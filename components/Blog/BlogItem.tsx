import { Card, CardContent } from "../ui/card";

export const BlogItem = () => {
  return (
    <Card>
      <CardContent className="flex items-start p-6">
        <div className="flex-none hidden sm:block">
          <img
            alt="Thumbnail"
            className="aspect-square rounded-lg"
            src="https://placehold.co/200"
            width="200"
            height="200"
          />
        </div>
        <div className="grid gap-1 ml-4 overflow-auto">
          <h2 className="text-4xl font-bold">Introducing the New Blog</h2>
          <p className="text-md line-clamp-6 text-gray-500">
            This is the description for the new blog post...
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur duc
            imus corporis quisquam qui voluptates voluptate ex architecto eum similique nam,
            suscipit fugit labore aspernatur veniam doloribus. Nesciunt veritatis exercitationem
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nulla totam iusto rem qu
            isquam, dolorem odit explicabo veniam natus laborum repellendus quo nihil in cupiditate quam pariatur esse officiis optio.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
