"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const baseVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Fade + slide-up when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "figure" | "h2" | "p" | "span";
} & Omit<HTMLMotionProps<"div">, "as" | "children">) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={baseVariants}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/** Stagger children wrapper. Direct children should be `RevealItem`. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  as?: "div" | "ol" | "ul";
}) {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "figure" | "a";
}) {
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag className={className} variants={item}>
      {children}
    </MotionTag>
  );
}
