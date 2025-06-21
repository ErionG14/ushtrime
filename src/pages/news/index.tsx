import { News } from "@/api/models/News";
import useFetch from "@/hooks/useFetch";
import { useNewsContext } from "@/lib/contexts/NewsContext";
import { CircularProgress, IconButton, Tooltip } from "@mui/material";
import { Edit, Scale, Trash } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


export default function NewsPage() {
    const router = useRouter();
    const { news, setNews } = useNewsContext();
    const { data, loading, remove } = useFetch<News[]>("/api/news");

    useEffect(() => {
        if (data) {
            setNews(data);
        }
    }, [data]);

    const handleDeleteNews = async (id: string) => {
        const confirmed = confirm("A jeni i sigurtë që dëshironi ta fshini këtë lajm?");
        if (!confirmed) return;
            try {
                await remove(`/api/news/${id}`);
                alert("Lajmi u fshi me sukses!");
                router.reload();
            } catch (error) {
                alert("Ndodhi një gabim gjatë fshirjes së lajmit.");
                console.error(error);
            }
        };

        return (
          <div className="pt-14 bg-gray-50 min-h-screen flex flex-col items-center">
            {loading ? (
              <CircularProgress />
            ) : (
              <div className="bg-gradient-to-b from-gray-100 to-gray-200 w-full py-16 px-4 sm:px-6 lg:px-16">
                <h1 className="text-5xl font-extrabold mb-12 text-purple-800 text-center drop-shadow-sm">
                  Shfaqja e Lajmeve nga databaza jonë
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {news && news.length > 0 ? (
                    news.map((post: News) => (
                      <motion.section
                        key={post._id}
                        className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-between hover:shadow-xl transition duration-75"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <h2 className="text-2xl font-bold mb-4 text-purple-700 line-clamp-2 uppercase">
                          {post.title}
                        </h2>
                        <p className="text-gray-700 mb-6 line-clamp-4">
                          {post.body}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-end gap-4 mt-auto">
                          <Tooltip title="Përditso">
                            <IconButton
                              onClick={() =>
                                router.push("update/news/" + post._id)
                              }
                            >
                              <Edit className="text-gray-400" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Fshij Postimin">
                            <IconButton
                              onClick={() => handleDeleteNews(post._id)}
                            >
                              <Trash className="text-gray-400" />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </motion.section>
                    ))
                  ) : (
                    <div className="py-20 text-center text-gray-600 text-xl font-medium">
                        Nuk ka lajme në databazë
                    </div>
                  )}
                </div>
                <div className="text-center mt-16">
                  <Link href={"/create/news"}>
                    <button className="px-8 py-3 bg-purple-700 hover:bg-purple-800 text-white text-lg rounded-2xl transition">
                      + Shto Lajm të Ri
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
    }
NewsPage.displayName = "News | My Application";