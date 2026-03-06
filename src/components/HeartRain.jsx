import { motion } from "framer-motion";
import { FaHeart,FaGift, FaLock } from "react-icons/fa";
import { useMemo } from "react";

const hearts = Array.from({ length: 30 });

export default function HeartRain() {
  const heartData = useMemo(() => 
    hearts.map(() => ({
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      duration: 5 + Math.random() * 5
    }))
  , []);

  return (
    <div style={{
      position: "fixed",
      top:0,
      left:0,
      width:"100%",
      height:"100%",
      pointerEvents:"none",
      overflow:"hidden"
    }}>
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, x: heartData[i].x }}
          animate={{ y: "100vh" }}
          transition={{
            duration: heartData[i].duration,
            repeat: Infinity
          }}
          style={{
            position:"absolute",
            fontSize:"30px"
          }}
        >
          <FaHeart color="red"/>
        </motion.div>
      ))}
    </div>
  );
}