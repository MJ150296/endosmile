import React, { ReactNode, useEffect, useCallback, useRef } from "react";
import { X } from "lucide-react";
import cn from "classnames";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: "sm" | "md" | "lg";
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

// Global modal stack to handle Escape key properly
let globalModalStack: (() => void)[] = [];

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  size = "md",
  closeOnOverlayClick = true,
  closeOnEscape = true,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle Escape key properly with modal stacking
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && closeOnEscape) {
      // Only close if this is the TOPMOST modal in stack
      if (globalModalStack[globalModalStack.length - 1] === onClose) {
        e.stopImmediatePropagation();
        e.preventDefault();
        onClose();
      }
    }
  }, [onClose, closeOnEscape]);

  useEffect(() => {
    if (isOpen) {
      // Add this modal to global stack
      globalModalStack.push(onClose);
      window.addEventListener("keydown", handleEscape, true);
      document.body.style.overflow = "hidden";
      
      // Focus trap
      setTimeout(() => contentRef.current?.focus(), 10);
    }

    return () => {
      if (isOpen) {
        // Remove from stack when closing
        globalModalStack = globalModalStack.filter(fn => fn !== onClose);
        window.removeEventListener("keydown", handleEscape, true);
        if (globalModalStack.length === 0) {
          document.body.style.overflow = "unset";
        }
      }
    };
  }, [isOpen, handleEscape, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      e.stopPropagation();
      onClose();
    }
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={handleOverlayClick}
    >
      <div
        ref={contentRef}
        tabIndex={-1}
        className={cn(
          "bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto transform transition-all duration-300 animate-scaleIn",
          {
            "sm:max-w-sm": size === "sm",
            "sm:max-w-md": size === "md",
            "md:max-w-[80vw] max-w-[95vw]": size === "lg",
          }
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-3xl">
          {title && (
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 m-0">
                {title}
              </h2>
              <button
                onClick={handleCloseClick}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>
          )}
          
          <div className={cn({ "p-6": !title })}>
            {children}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0; 
            transform: scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Modal;