import { FC } from 'react';

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    content: string;
    author: string;
    date: string;
    image: string;
  };
}

const posts = [
  { id: '1', title: 'Sample Blog Post 1', content: 'Content of the first blog post.', author: 'John Doe', date: '2024-01-01', image: 'https://via.placeholder.com/800x400?text=Blog+Post+1' },
  { id: '2', title: 'Sample Blog Post 2', content: 'Content of the second blog post.', author: 'Jane Smith', date: '2024-02-01', image: 'https://via.placeholder.com/800x400?text=Blog+Post+2' }
];

export async function generateStaticParams() {
  return posts.map(post => ({
    id: post.id
  }));
}

const BlogPost: FC<{ params: { id: string } }> = ({ params }) => {
  const post = posts.find(post => post.id === params.id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-0">
          <h1 className="text-4xl font-bold text-gray-800 text-center">{post.title}</h1>
          <p className="mt-4 text-lg text-gray-600 text-center">
            By {post.author} on {post.date}
          </p>

          <div className="mt-10">
            <img src={post.image} alt={post.title} className="w-full h-auto rounded-md shadow-lg mb-6" />
            <div className="prose max-w-none">
              <p>{post.content}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
