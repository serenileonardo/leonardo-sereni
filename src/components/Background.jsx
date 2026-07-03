import { motion } from "framer-motion";

export default function Background() {
  return (
    <>
      <motion.div
        className="orb orb1"
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="orb orb2"
        animate={{
          x: [0, -120, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />
    </>
  );
}