import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-14 bg-gray-50 min-h-screen flex flex-col items-center">
      <motion.section
        className="w-full py-24 bg-purple-700 text-white text-center shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5x1 text-primary font-extrabold mb-4">
          Mirë se Vini në Aplikacionin Tonë!
        </h1>
        <p className="text-xl mb-6">
          Ndërtoni aplikacione të fuqishme dhe të shpejta me Next.js
        </p>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="max-w-6xl py-20 px-6 text-center"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-extrabold mb-4 tracking-wide text-purple-700">
          Rreth Nesh
        </h2>
        <p className="text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed mb-6">
          Ne krijojmë aplikacione të avancuara duke përdorur teknologjitë më të
          fundit. Fokusi ynë kryesor është të ofrojmë produkte të optimizuara
          dhe SEO-friendly.
        </p>
        <Image
          src="/assets/images/aboutUs.jpeg"
          alt="Imazh Rreth Nesh"
          width={500}
          height={300}
          className="rounded-xl shadow-lg mx-auto"
        />
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="max-w-5xl py-20 px-6 text-center"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-purple-400">
            Karakteristikat Kryesore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-white rounded-xl shadow-lg border-2 border-bg-purple-400 text-purple-900 font-semibold text-lg">
              Shpejtësi & Performancë
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg border-2 border-bg-purple-400 text-purple-900 font-semibold text-lg">
              SEO e Avancuar
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg border-2 border-bg-purple-400 text-purple-900 font-semibold text-lg">
              Renderim dinamik & statik
            </div>
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
        <h2 className="text-4xl font-bold mb-6 text-purple-700">
          Shërbimet tona
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Ofrojmë një gamë të gjerë shërbimesh duke përfshirë zhvillimin e
          aplikacioneve web, optimizimin për SEO, dhe integrimin me API të
          jashtme.
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="w-full py-20 bg-purple-700 text-white text-center shadow-inner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-6">Kontaktoni me ne</h2>
        <p className="mb-1">Email: contact@mycompany.com</p>
        <p className="mb-1">Tel: +383 123 456 789</p>
        <p>Adresa: Prishtinë, Kosovë</p>
      </motion.section>
    </div>
  );
};
export default About;
