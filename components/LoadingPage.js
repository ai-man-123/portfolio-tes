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
                d="M22.568 29.14C20.589 29.14 18.9353 28.7738 17.5642 28.093C16.2298 27.3673 15.2031 26.3883 14.4545 25.146C14.3522 24.966 14.2567 24.7801 14.1683 24.588H36.264H37.7303L37.7636 23.1221L37.8274 20.3153C37.9177 17.7116 37.5522 15.2754 36.7085 13.0253C35.8742 10.8007 34.6616 8.85623 33.067 7.2104C31.5139 5.52068 29.6547 4.22872 27.5054 3.3389C25.3435 2.40108 23.009 1.94 20.52 1.94C17.8626 1.94 15.3619 2.42156 13.0342 3.39808C10.7543 4.32973 8.76708 5.6846 7.08593 7.45713C5.4057 9.18601 4.10795 11.2333 3.18753 13.5804C2.25843 15.9496 1.80399 18.5271 1.80399 21.296C1.80399 24.9031 2.62862 28.1589 4.31617 31.0184C5.99375 33.861 8.32793 36.0971 11.2883 37.7161C14.2761 39.35 17.7322 40.14 21.608 40.14C23.2701 40.14 24.9465 39.9321 26.6345 39.5215C28.3193 39.1117 29.956 38.5203 31.5433 37.7493L31.5588 37.7418L31.574 37.7339C33.1801 36.908 34.6516 35.8966 35.9853 34.7009L36.9859 33.8037L36.2037 32.7109L31.8517 26.6309L30.9205 25.3299L29.6821 26.3431C28.356 27.4281 27.173 28.1386 26.132 28.5335C25.085 28.9306 23.9027 29.14 22.568 29.14ZM25.3869 15.0103C25.6214 15.3328 25.8083 15.6685 25.9486 16.02H14.3064C14.8593 14.9259 15.6156 14.1301 16.5784 13.5822C17.6309 13.0074 18.9669 12.684 20.648 12.684C21.7229 12.684 22.641 12.8975 23.4332 13.2936C24.2303 13.6922 24.8659 14.2474 25.3606 14.973L25.3735 14.9918L25.3869 15.0103ZM50.6887 38.3068L50.7066 38.3181L50.7248 38.3289C52.7889 39.5576 55.198 40.14 57.892 40.14C60.0061 40.14 62.0035 39.7395 63.8674 38.927C65.0947 38.392 66.2139 37.7173 67.2201 36.9029L67.2736 38.0687L67.3392 39.5H68.772H77.412H78.912V38V4.144V2.644H77.412H68.324H66.824V4.144V24.432C66.824 25.1843 66.6882 25.8596 66.4295 26.4739C66.1603 27.1133 65.7978 27.6529 65.3433 28.1073C64.9085 28.5422 64.3688 28.8999 63.7014 29.171C63.0287 29.4024 62.2904 29.524 61.476 29.524C60.3309 29.524 59.4738 29.2752 58.8253 28.8625C58.1555 28.4363 57.6136 27.8186 57.2104 26.949C56.8028 26.0277 56.576 24.9021 56.576 23.536V4.144V2.644H55.076H45.988H44.488V4.144V25.008C44.488 28.0263 44.9831 30.7036 46.0324 32.993L46.0403 33.0103L46.0487 33.0273C47.1419 35.2614 48.6872 37.0375 50.6887 38.3068ZM109.904 38.8606L110.352 39.5H111.132H122.012H124.971L123.222 37.1135L111.304 20.8456L122.409 5.00504L124.064 2.644H121.18H110.492H109.621L109.19 3.4005L104.555 11.5216L98.7252 3.27791L98.2769 2.644H97.5005H86.4925H83.4967L85.2915 5.04266L97.0734 20.7886L85.153 37.1155L83.4121 39.5H86.3645H97.0525H97.8857L98.3259 38.7927L103.751 30.0772L109.904 38.8606ZM127.987 38V39.5H129.487H156.943H158.443V38V30.512V29.012H156.943H144.02L157.692 10.9369L157.995 10.5354V10.032V4.144V2.644H156.495H129.487H127.987V4.144V11.632V13.132H129.487H142.321L128.299 31.3243L127.987 31.729V32.24V38ZM171.263 52.1316L170.372 54.22H172.642H181.858H182.878L183.253 53.2719L189.071 38.5668L203.274 4.72445L204.147 2.644H201.89H191.522H190.464L190.109 3.64122L183.39 22.5271L175.368 3.55969L174.981 2.644H173.986H163.682H161.355L162.316 4.76344L177.337 37.8894L171.263 52.1316Z"
                strokeWidth="1"
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
