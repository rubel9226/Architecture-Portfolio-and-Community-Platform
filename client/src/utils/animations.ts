

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } }
} as const;

export const hoverLift = {
  whileHover: { y: -6, scale: 1.02, transition: { duration: 0.3, ease: 'easeOut' as const } }
};

export const imageZoom = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.4, ease: 'easeInOut' as const } }
};


// profile
export const fadeUpProfile = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
};

export const staggerContainerProfile = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.06 } },
  viewport: { once: true }
} as const;


// my projects
export const fadeUpMyProject = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }
};

export const containerStaggerMyProject = {
  initial: {},
  animate: { transition: { staggerChildren: 0.05 } }
} as const;
