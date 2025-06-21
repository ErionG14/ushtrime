import css from "classnames";
import { motion } from "framer-motion";

interface Props {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
  type?: "button" | "submit" | "reset";
}

const Button = (props:Props) => {
    const { text, onClick, variant = "primary", type = "button" } = props;

    const buttonStyles = {
        primary: "bg-purple-700 text-white hover:bg-purple-800 shadow-lg",
        secondary: "bg-white text-purple-700 border border-purple-700 hover:bg-purple-50 shadow-md",
        tertiary: "bg-gray-200 text-white hover:bg-blue-700",
        quaternary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
    };

    return <motion.button 
    type={type} 
    className={css("px-6 py-3 rounded-full font-medium transition-all",
        buttonStyles[variant],
        "focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
    )}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
     >
        {text}
     </motion.button>;
};
export default Button;