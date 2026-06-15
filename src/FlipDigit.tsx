import { motion, AnimatePresence } from "framer-motion";
import './App.css';
import './AppMobile.css';
import {isMobile} from "react-device-detect";


interface FlipDigitProps {
  value: string;
}

export function FlipDigit({ value }: FlipDigitProps) {
  return (
    <div className={isMobile ? 'timer_mobile' : 'timer'}>
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{
            rotateX: -90,
          }}
          animate={{
            rotateX: 0,
          }}
          exit={{
            rotateX: 90,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className={isMobile ? 'motionTimer_mobile' : 'motionTimer'}
        >
          {value}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}