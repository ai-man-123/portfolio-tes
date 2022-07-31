import Layouts from './Layouts';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SvgAnimation } from '@/components/Animations';

const LoadingPage = () => {
  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(false);
  }, 1100);

  return (
    <Layouts>
      <div className="relative flex h-screen w-full items-center justify-center">
        <svg width="207" height="56" viewBox="0 0 207 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <AnimatePresence>
            {show && (
              <motion.path
                {...SvgAnimation}
                d=""
                strokeWidth="3"
                className="stroke-primary-light"
              />
            )}
          </AnimatePresence>
        </svg>
      </div>
    </Layouts>
  );
};

export default LoadingPage;
