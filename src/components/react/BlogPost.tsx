const BlogPost = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="blog-post" className="max-w-4xl mx-auto py-8 px-4">
      {children}
    </div>
  );
};

export default BlogPost;