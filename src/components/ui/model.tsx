"use client";
import React, { useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { FaSquareXmark } from "react-icons/fa6";
import Button from "./buttons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  buttonText: string;
  buttonType: "solid" | "outlined" | "ghost";
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  buttonText,
  buttonType,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <m.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-lightCol1 dark:bg-darkCol1 rounded-md shadow-lg p-6 max-w-lg mx-auto sm:mt-20 lg:mt-0"
          >
            <button
              type="button"
              className="absolute top-2 right-2 text-lightCol2 hover:text-lightCol3 dark:text-darkCol2 dark:hover:text-darkCol3 transition-colors"
              onClick={onClose}
              aria-label="Close"
            >
              <FaSquareXmark className="text-2xl" />
            </button>
            <div className="text-lightCol2 dark:text-darkCol2 mb-6">
              {children}
            </div>
            <div className="flex justify-end">
              <Button size="md" variant={buttonType}>
                {buttonText}
              </Button>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
