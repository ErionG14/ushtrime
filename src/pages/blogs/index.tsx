import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "@/hooks/useFetch";
import { motion } from "framer-motion";
import Link from "next/link";
import { Blog } from "@/api/models/Blog";
import router from "next/router";

export interface Post {
  id: string;
  title: string;
  body: string;
}

export default function Blogs() {
  const { data: initialPosts, loading } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    if (initialPosts) {
      setPosts(initialPosts);
    }
  }, [initialPosts]);

  const handleDelete = (id: string) => {
    if (posts) {
      setPosts(posts?.filter((post) => post.id !== id));
    }
  };

  // Blog nga databaza jonë
  const {
     data: blogsData,
     loading: blogsLoading,
     remove,
    } = useFetch<Blog[]>("/api/blogs");

    const handleDeleteBlog = async (id: string) => {
      const confirmed = confirm("A jeni i sigurt që doni të fshini këtë blog?");
      if (!confirmed) return;

      try {
        await remove(`/api/blogs/${id}`);
        alert("Blogu u fshi me sukses!");
        router.reload();
      } catch (error) {
        alert("Gabim gjatë fshirjes së blogut.");
        console.error(error);
      }
    };

  return (
    <>
      <div className="p-12">
        <div className="flex flex-col items-center justify-center min-h-screen gap-y-20">
          {/* Blog Section: From our database */}
          {blogsLoading ? (
            <CircularProgress />
          ) : (
            <div className="bg-gray-200 w-full">
              <h1 className="text-4xl font-bold pt-20 pb-6 text-black text-center">
                Shfaqja e Blogut nga Databaza Jonë
              </h1>
              <div className="grid grid-cols-3">
                {blogsData && blogsData.length > 0 ? (
                  blogsData.map((post: Blog) => (
                    <motion.section
                      key={post._id}
                      className="max-w-6xl py-20 px-6 text-center"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <h2 className="text-4xl font-bold mb-6 text-yellow-600 line-clamp-2 uppercase">
                        {post.title}
                      </h2>
                      <p className="text-gray-700 mb-6">{post.body}</p>
                      <div className="mb-6">
                        <Link href={"update/blog/" + post._id}>
                          <button className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl transition">
                            Përditëso Blogun
                          </button>
                        </Link>
                      </div>
                      <button
                        onClick={() => handleDeleteBlog(post._id!)}
                        className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition"
                      >
                        Fshij Postimin
                      </button>
                    </motion.section>
                  ))
                ) : (
                  <div className="cols-span-3 py-20"> 
                    <p className="text-xl font-bold pb-10 text-black text-center">
                      Nuk ka bloge për të shfaqur.
                    </p>
                  </div>
                )}
              </div>
              <div className="text-center pb-10">
                <Link href={"/create/blog"}>
                  <button className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl transition">
                    Krijo Blog
                  </button>
                </Link>
              </div>
            </div>
          )}

          {/* Blog Section: Single Page Loading with Static Site Generation (SSG) */}

          {loading ? (
            <CircularProgress />
          ) : (
            <div className="bg-gray-200">
              <h1 className="text-4xl font-bold pt-20 pb-6 text-black text-center">
                Shfaqja e Blogut në Single Page me Static Site Generation (SSG)
              </h1>
              <div className="grid grid-cols-3">
                {posts &&
                  posts.slice(0, 3).map((post: Post) => (
                    <motion.section
                      key={post.id}
                      className="max-w-6xl py-20 px-6 text-center"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <h2 className="text-4xl font-bold mb-6 text-yellow-600 line-clamp-2 uppercase">
                        {post.title}
                      </h2>
                      <p className="text-gray-700 mb-6">{post.body}</p>
                      <div className="mb-6">
                        <Link href={"/blogs/ssg/" + post.id}>
                          <button className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl transitionp-[0-[0-[0-[0-[0-[0-[090oi888888888888888888888888888888888888888888888888888888">
                            Shiko Detajet
                          </button>
                        </Link>
                      </div>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition"
                      >
                        Fshij Postin
                      </button>
                    </motion.section>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-12">
        <div className="flex flex-col items-center justify-center min-h-screen gap-y-20">
          {/* Blog Section: Single Page Loading with Static Site Generation (SSR) */}

          {loading ? (
            <CircularProgress />
          ) : (
            <div className="bg-gray-200">
              <h1 className="text-4xl font-bold pt-20 pb-6 text-black text-center">
                Shfaqja e Blogut në Single Page me Static Site Generation (SSR)
              </h1>
              <div className="grid grid-cols-3">
                {posts &&
                  posts.slice(0, 3).map((post: Post) => (
                    <motion.section
                      key={post.id}
                      className="max-w-6xl py-20 px-6 text-center"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <h2 className="text-4xl font-bold mb-6 text-yellow-600 line-clamp-2 uppercase">
                        {post.title}
                      </h2>
                      <p className="text-gray-700 mb-6">{post.body}</p>
                      <div className="mb-6">
                        <Link href={"/blogs/ssr/" + post.id}>
                          <button className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl transitionp-[0-[0-[0-[0-[0-[0-[090oi888888888888888888888888888888888888888888888888888888">
                            Shiko Detajet
                          </button>
                        </Link>
                      </div>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition"
                      >
                        Fshij Postin
                      </button>
                    </motion.section>
                  ))}
              </div>
            </div>
          )}

          {/* Blog Section: Single Page Loading with Incremental Static Regeneration (ISR) */}

          {loading ? (
            <CircularProgress />
          ) : (
            <div className="bg-gray-200">
              <h1 className="text-4xl font-bold pt-20 pb-6 text-black text-center">
                Shfaqja e Blogut në Single Page me Incremental Static
                Regeneration (ISR)
              </h1>
              <div className="grid grid-cols-3">
                {posts &&
                  posts.slice(0, 3).map((post: Post) => (
                    <motion.section
                      key={post.id}
                      className="max-w-6xl py-20 px-6 text-center"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <h2 className="text-4xl font-bold mb-6 text-yellow-600 line-clamp-2 uppercase">
                        {post.title}
                      </h2>
                      <p className="text-gray-700 mb-6">{post.body}</p>
                      <div className="mb-6">
                        <Link href={"/blogs/isr/" + post.id}>
                          <button className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl transitionp-[0-[0-[0-[0-[0-[0-[090oi888888888888888888888888888888888888888888888888888888">
                            Shiko Detajet
                          </button>
                        </Link>
                      </div>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition"
                      >
                        Fshij Postin
                      </button>
                    </motion.section>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

Blogs.displayName = "Blogs | My Application";
