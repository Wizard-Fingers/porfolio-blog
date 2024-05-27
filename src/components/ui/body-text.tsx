"use client";
import { motion as m } from "framer-motion";

interface BodyTextProps {
  children: React.ReactNode;
  className?: string;
}

function BodyText({ children, className = "" }: BodyTextProps) {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <m.div
      className={`text-balance nunito font-semibold text-lg lg:text-xl track antialiased decoration-auto leading-4 ${className}`}
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <p>{children}</p>
    </m.div>
  );
}

export default BodyText;
