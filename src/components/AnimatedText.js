// components/AnimatedText.js
import { motion } from 'framer-motion';

const AnimatedText = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 900,
        damping: 30,
        mass: 3,
      }}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
