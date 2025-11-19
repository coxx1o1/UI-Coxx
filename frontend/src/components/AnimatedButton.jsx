import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import './AnimatedButton.css';

const AnimatedButton = ({ 
  text = "Click Me", 
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary: {
      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      color: "#ffffff"
    },
    secondary: {
      background: "linear-gradient(135deg, #64748b, #94a3b8)",
      color: "#ffffff"
    },
    accent: {
      background: "linear-gradient(135deg, #f59e0b, #f97316)",
      color: "#ffffff"
    }
  };

  const sizes = {
    small: {
      padding: "0.5rem 1rem",
      fontSize: "0.875rem"
    },
    medium: {
      padding: "0.75rem 1.5rem",
      fontSize: "1rem"
    },
    large: {
      padding: "1rem 2rem",
      fontSize: "1.125rem"
    }
  };

  return (
    <Motion.button
      className={`animated-button ${variant} ${size}`}
      style={{
        ...variants[variant],
        ...sizes[size],
        border: "none",
        borderRadius: "12px",
        fontWeight: "600",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        position: "relative",
        overflow: "hidden"
      }}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Ripple Effect */}
      <Motion.span
        className="ripple"
        initial={{ scale: 0, opacity: 0 }}
        animate={isHovered ? { scale: 2, opacity: 0.3 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      
      {/* Glow Effect */}
      <Motion.div
        className="glow"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <span className="button-text" style={{ position: "relative", zIndex: 2 }}>
        {text}
      </span>
    </Motion.button>
  );
};

export default AnimatedButton;