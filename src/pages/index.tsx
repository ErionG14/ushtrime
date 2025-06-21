import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/shared/Button";
import CustomImage from "@/assets/images/aboutUs.jpeg";
import Card from "@/components/shared/Card";
import { Rocket, BarChart, ShieldCheck, Trash } from "lucide-react";
import useFetch from "@/hooks/useFetch";
import { use, useEffect, useState } from "react";
import { CircularProgress, IconButton, Tooltip } from "@mui/material";

export interface Post {
  id: string;
  title: string;
  body: string;
}

const Home = () => {
  const {data: initialPosts, loading} = useFetch<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const [posts, setPosts] = useState<Post[] | null>(null);
  useEffect(() => {
    if (initialPosts) {
      setPosts(initialPosts);
    }
  } , [initialPosts]);
  
  const handleDelete = (id: string) => {
    if (posts) {
      setPosts(posts.filter(post => post.id !== id));
    }
  }
  return (
    <div className="pt-14 bg-gradient-to-b from-purple-50 to-purple-100 min-h-screen">
        {/* Hero Section */}
        <motion.section
          className="w-full py-20 bg-purple-700 text-white text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5x1 text-primary font-extrabold mb-4">
            Mire se Vini ne Aplikacionin Tone!
          </h1>
          <p className="text-xl mb-6">
            Ndertoni aplikacione te fuqishme dhe te shpejta me Next.js
          </p>
          <Button
            text="Mëso më shumë"
            variant="secondary"
            onClick={() => alert("Redirecting...")}
          />
        </motion.section>

        {/* About Section */}
        <motion.section
          className="max-w-6xl mx-auto py-20 px-6 text-center"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-purple-700">
            Rreth Nesh
          </h2>
          <p className="text-gray-700 mb-6">
            Ne krijojmë aplikacione të avancuara duke përdorur teknologjitë më
            të fundit. Funksionimi ynë kryesorë është të ofrojmë produkte të
            optimizuara dhe SEO-friendly.
          </p>
          <Image
            src={CustomImage}
            alt="About Us"
            width={500}
            height={300}
            className="rounded-xl shadow-lg mx-auto"
          />
        </motion.section>
        {/* Features Section */}
        <motion.section
          className="w-full py-20 bg-white text-center"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="container m-auto px-6">
            <h2 className="text-4xl font-bold mb-6 text-purple-700">
              Karakteristikat Kryesore
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card
                title="Shpejtësi & Performancë"
                description="Aplikacionet më të shpejta me optimizim të avancuar"
                icon={Rocket}
              />
              <Card
                title="SEO e Avancuar"
                description="Rankimi më i mirë në motorë e kërkimit"
                icon={BarChart}
              />
              <Card
                title="Siguri Maksimale"
                description="Mbrojtje e të dhënave dhe siguri e lartë për përdoruesit"
                icon={ShieldCheck}
              />
            </div>
          </div>
        </motion.section>
        {/* Services Section */}
        <motion.section
          className="max-w-6xl mx-auto py-20 px-6 text-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-purple-700">
            Shërbimet tona
          </h2>
          <p className="text-gray-700 mb-6">
            Ne ofrojmë një gamë të gjerë shërbimesh duke përfshirë zhvillimin e
            aplikacioneve web, optimizimin e SEO integrimin me API të jashtme.
          </p>
          <Button
            text="Shikoni shërbimet"
            onClick={() => alert("Redirecting...")}
          />
        </motion.section>
        {/* Blog Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-20 px-6 bg-purple-50">
          {loading ?
          <CircularProgress/> 
          
          :
          <>
          {posts && posts.map((post) => (
            <motion.section
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-md text-left flex flex-col"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold text-purple-700 line-clamp-2 mb-2">
                {post.title}
                </h3>
              <p className="text-gray-600 mb-4 flex-1">{post.body}</p>
              <div className="flex items-end justify-end">
                <Tooltip title="Fshij Postin">
                  <IconButton onClick={() => handleDelete(post.id)}>
                  <Trash className="text-gray-400" />
                  </IconButton>
                </Tooltip>
              </div>
            </motion.section>
          ))}
          </>
        }
        </div>
        {/* Contact Section */}
        <motion.section
          className="w-full py-20 bg-purple-700 text-white text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6">Na Kontaktoni</h2>
          <p className="mb-1">E-mail: concact@mycompany.com</p>
          <p className="mb-1">Tel: +383 123 456 789</p>
          <p className="mb-6">Adresa: Prishtinë, Kosovë</p>
          <Button
            text="Na Kontaktoni"
            variant="secondary"
            onClick={() => alert("Opening contact form...")}
          />
        </motion.section>
      </div>
  );
};
Home.displayName = "My Application";

export default Home;
