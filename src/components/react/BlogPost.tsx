const BlogPost = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="blog-post" className="markdown-content max-w-4xl mx-auto py-8 px-4">
      <a title="voltar aos posts" href="/blog">Voltar aos posts</a>
      {children}
    </div>
  );
};

export default BlogPost;