import { News } from "@/api/models/News";
import useFetch from "@/hooks/useFetch";
import { useNewsContext } from "@/lib/contexts/NewsContext";
import { CircularProgress } from "@mui/material";
import { Scale } from "lucide-react";
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
          <div className="pt-12">
            <div className="flex flex-col items-center justify-center min-h-screen gap-y-20">
              {loading ? (
                <CircularProgress />
              ) : (
                <div className="bg-gray-200 w-full">
                  <h1 className="text-4xl font-bold pt-20 pb-6 text-black text-center">
                    Shfaqja e Lajmeve nga databaza jonë
                  </h1>
                  <div className="grid grid-cols-3">
                    {news && news.length > 0 ? (
                      news.map((post: News) => (
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
                            <Link href={"update/news/" + post._id}>
                              <button className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl transition">
                                Përditëso
                              </button>
                            </Link>
                          </div>
                          <button
                            onClick={() => handleDeleteNews(post._id)}
                            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition"
                          >
                            Fshi Postimin
                          </button>
                        </motion.section>
                      ))
                    ) : (
                      <div className="col-span-3 py-20">
                        <p className="text-xl font-bold pb-10 text-black text-center">
                          Nuk ka lajme në databazë
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="text-center pb-10">
                    <Link href={"/create/news"}>
                      <button className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl transition">
                        Shto Lajm të Ri
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
    }
NewsPage.displayName = "News | My Application";