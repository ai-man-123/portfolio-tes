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
                d="M25.71875,29.216796875q0.84765625,0,1.408203125,0.123046875l-0.314453125,3.91015625q-0.505859375-0.13671875-1.23046875-0.13671875q-1.99609375,0-3.1103515625,1.025390625t-1.1142578125,2.87109375l0,7.779296875l-4.169921875,0l0-15.28515625l3.158203125,0l0.615234375,2.5703125l0.205078125,0q0.7109375-1.28515625,1.9208984375-2.0712890625t2.6318359375-0.7861328125z M31.64919921875,25.552734375q0-2.037109375,2.26953125-2.037109375t2.26953125,2.037109375q0,0.970703125-0.5673828125,1.5107421875t-1.7021484375,0.5400390625q-2.26953125,0-2.26953125-2.05078125z M35.99685546875,44.7890625l-4.169921875,0l0-15.28515625l4.169921875,0l0,15.28515625z M52.9331640625,44.7890625l-12.072265625,0l0-2.4609375l7.08203125-9.638671875l-6.658203125,0l0-3.185546875l11.40234375,0l0,2.70703125l-6.890625,9.392578125l7.13671875,0l0,3.185546875z M68.51595703125,44.7890625l-12.072265625,0l0-2.4609375l7.08203125-9.638671875l-6.658203125,0l0-3.185546875l11.40234375,0l0,2.70703125l-6.890625,9.392578125l7.13671875,0l0,3.185546875z M71.27453125,29.50390625l4.56640625,0l2.884765625,8.599609375q0.369140625,1.12109375,0.505859375,2.65234375l0.08203125,0q0.150390625-1.408203125,0.587890625-2.65234375l2.830078125-8.599609375l4.470703125,0l-6.466796875,17.240234375q-0.888671875,2.392578125-2.5361328125,3.58203125t-3.8486328125,1.189453125q-1.080078125,0-2.119140625-0.232421875l0-3.30859375q0.751953125,0.177734375,1.640625,0.177734375q1.107421875,0,1.9345703125-0.6767578125t1.2919921875-2.0439453125l0.24609375-0.751953125z"
                strokeWidth="2"
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
