import { motion } from "framer-motion";

function MotionWrap(Component, classNames) {
  return function HOC() {
    return (
      <motion.div
        className={`${classNames} `}
        transition={{ duration: 0.5 }}
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      >
        <Component />
      </motion.div>
    );
  };
}

export default MotionWrap;
