import Image from "next/image";
import { Geist, Geist_Mono} from "next/font/google";
import { motion } from "framer-motion";

const Home = () => {
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
            <p className="text-xl">
                Ndertoni aplikacione te fuqishme dhe te shpejta me Next.js
            </p>
        </motion.section>
    </div>
</div>
)
}
Home.displayName = "My Application";

export default Home;
