import { motion } from "framer-motion";

const PF = () => {
    return (
        <motion.div
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <img src="/images/hack.jpg" alt="snake" className=" max-900:mx-auto rounded-full  max-900:mb-[50px] max-w-[90%] snake  p-[12px] relative z-20" />


        </motion.div>
    );
};

export default PF;
