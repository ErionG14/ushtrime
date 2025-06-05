import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/shared/Button";
import CustomImage from "@/assets/images/aboutUs.jpeg";
import Card from "@/components/shared/Card";
import { Rocket, BarChart, ShieldCheck } from "lucide-react";
import useFetch from "@/hooks/useFetch";

export interface Post {
  id: string;
  title: string;
  body: string;
}

const Home = () => {
  const {data: initialPosts, loading} = useFetch<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return (
    <div className="pt-14">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Hero Section */}
        <motion.section
          className="w-full py-20 bg-yellow-600 text-black text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5x1 font-bold mb-4">
            Mire se Vini ne Aplikacionin Tone!
          </h1>
          <p className="text-xl mb-4">
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
          className="max-w-6xl py-20 px-6 text-center"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-yellow-600">
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
            className="rounded-xl"
          />
        </motion.section>
        {/* Features Section */}
        <motion.section
          className="w-full py-20 bg-gray-200 text-center"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="container m-auto">
            <h2 className="text-4xl font-bold mb-6 text-yellow-600">
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
          className="max-w-6xl py-20 px-6 text-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-yellow-600">
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
        {/* Contact Section */}
        <motion.section
          className="w-full py-20 bg-yellow-600 text-black text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6">Na Kontaktoni</h2>
          <p>E-mail: concact@mycompany.com</p>
          <p>Tel: +383 123 456 789</p>
          <p className="mb-4">Adresa: Prishtinë, Kosovë</p>
          <Button
            text="Na Kontaktoni"
            variant="secondary"
            onClick={() => alert("Opening contact form...")}
          />
        </motion.section>
      </div>
    </div>
  );
};
Home.displayName = "My Application";

export default Home;
