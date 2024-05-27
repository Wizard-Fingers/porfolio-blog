"use client";
import React, { ReactNode } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

interface TooltipProps {
  content: ReactNode;
  direction: "left" | "right" | "up" | "down";
  children: ReactNode;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  direction,
  children,
  className = "",
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  const getPositionStyles = () => {
    switch (direction) {
      case "left":
        return "left-0 -translate-x-full";
      case "right":
        return "right-0 translate-x-full";
      case "up":
        return "top-0 -translate-y-full";
      case "down":
        return "bottom-0 translate-y-full";
      default:
        return "";
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <m.div
            className={`absolute z-10 px-3 py-2 bg-lightCol1 dark:bg-darkCol1 text-lightCol2 dark:text-darkCol2 text-sm font-semibold rounded-md shadow-md ${getPositionStyles()} ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {content}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
