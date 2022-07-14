import Image from "next/image";
import { motion } from "framer-motion";
import landscape from "../public/images/picture_1.jpg";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div id="home" className={styles.container}>
      <motion.section
        className={styles.presentation}
        animate={{
          y: [50, 0],
          opacity: [0, 1],
        }}
        transition={{ ease: "easeOut" }}
      >
        <span>
          <h1 className={styles.name}>
            I&apos;m <strong>Ticiano Morvan</strong>
          </h1>
          <h2 className={styles.role}>
            Self taught front-end developer and student.
          </h2>
        </span>
      </motion.section>

      <motion.div
        className={styles.image_container}
        animate={{
          y: [100, 0],
          opacity: [0, 1],
        }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        <Image
          src={landscape}
          alt="A cold lake in the south of Argentina."
          className={styles.image}
        />

        <motion.p
          className={styles.image_caption}
          animate={{
            x: [0, 5, -5, 5, -5, 0],
          }}
          transition={{
            delay: 2,
            ease: "easeOut",
          }}
        >
          Also, I love to take photos!
        </motion.p>
      </motion.div>
    </div>
  );
}
