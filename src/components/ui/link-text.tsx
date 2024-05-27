"use client";
import { motion as m } from "framer-motion";
import Link from "next/link";

interface LinkTextProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function LinkText({ href, children, className = "" }: LinkTextProps) {
  const hoverVariants = {
    hidden: { scaleX: 0.8, scaleY: 0.5, opacity: 0.5, originX: 0, originY: 1 },
    visible: {
      scaleX: 1,
      scaleY: 1,
      opacity: 0.75,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <Link href={href}>
      <m.span
        className={`relative inline-block ${className}`}
        initial="hidden"
        whileHover="visible"
      >
        <span className="relative z-10 mx-2 quicksand font-extrabold">
          {children}
        </span>
        <m.span
          className="absolute bottom-0 left-0 w-full h-full rounded-sm bg-emphasis -translate-y-[2px]"
          variants={hoverVariants}
        />
      </m.span>
    </Link>
  );
}

export default LinkText;
