import Link from 'next/link';

const posts = [
  { id: '1', title: 'Blog Post Title 1', image: 'https://via.placeholder.com/400x250?text=Blog+Post+1' },
  { id: '2', title: 'Blog Post Title 2', image: 'https://via.placeholder.com/400x250?text=Blog+Post+2' },
  { id: '3', title: 'Blog Post Title 3', image: 'https://via.placeholder.com/400x250?text=Blog+Post+3' },
  { id: '4', title: 'Blog Post Title 4', image: 'https://via.placeholder.com/400x250?text=Blog+Post+4' },
  { id: '5', title: 'Blog Post Title 5', image: 'https://via.placeholder.com/400x250?text=Blog+Post+5' },
  { id: '6', title: 'Blog Post Title 6', image: 'https://via.placeholder.com/400x250?text=Blog+Post+6' },
];

const Blog = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-0">
          <h1 className="text-4xl font-bold text-gray-800 text-center">Our Blog</h1>
          <p className="mt-4 text-lg text-gray-600 text-center">Read the latest updates, tips, and insights from our team</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">
                  A brief excerpt from the blog post to give readers an idea of what it&apos;s about. This is a summary or snippet of the content.
                </p>
                <Link href={`/blog/${post.id}`} className="text-orange-600 hover:text-orange-800">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
