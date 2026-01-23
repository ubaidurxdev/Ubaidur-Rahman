// "use client";
// import { motion } from "framer-motion";

// const paths = [
//   // Main vertical trunk (left)
//   "M40 20 V60 Q40 80 60 80 Q78 80 78 100 V160",

//   // Right horizontal from center (slightly higher)
//   "M78 100 H108 Q128 100 128 78 Q128 58 148 58 H182",

//   // Upper branch (offset to avoid overlap)
//   "M108 100 V52 Q108 32 128 32 Q148 32 148 52 V78",

//   // Lower extension
//   "M78 100 V192",

//   // Small left branch
//   "M40 60 H18",

//   // Top right small branch
//   "M148 52 H192",

//   // Curved down-right path (shifted right)
//   "M148 78 V138 Q148 160 132 160 Q116 160 116 192",

//   // Long bottom horizontal (shifted down)
//   "M18 138 H78 Q98 138 98 156 Q98 174 120 174 H202",

//   // Upper-left vertical (shifted left)
//   "M78 138 V72 Q78 52 96 52 Q114 52 114 30",

//   // Bottom center vertical
//   "M120 174 V204",

//   // Right vertical isolated
//   "M202 78 V142",

//   // Bottom-left short horizontal
//   "M30 192 H82",
// ];

// const nodes = [
//   [40, 20],
//   [78, 100],
//   [108, 100],
//   [148, 58],
//   [182, 58],
//   [116, 192],
//   [78, 138],
//   [114, 30],
//   [202, 142],
//   [30, 192],
// ];

// export default function CircuitMini() {
//   return (
//     <div className="w-32 sm:w-48 h-32 sm:h-48 relative">
//       <svg viewBox="0 0 220 220" className="w-full h-full">
//         <defs>
//           {/* Soft glow */}
//           <filter id="glow">
//             <feGaussianBlur stdDeviation="5.5" result="blur" />
//             <feMerge>
//               <feMergeNode in="blur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>

//           {/* Light shimmer */}
//           <linearGradient id="shimmer-light" gradientUnits="userSpaceOnUse">
//             <stop offset="0%" stopColor="transparent" />
//             <stop offset="45%" stopColor="#000" stopOpacity="0.85" />
//             <stop offset="55%" stopColor="#000" stopOpacity="0.85" />
//             <stop offset="100%" stopColor="transparent" />
//           </linearGradient>

//           {/* Dark shimmer */}
//           <linearGradient id="shimmer-dark" gradientUnits="userSpaceOnUse">
//             <stop offset="0%" stopColor="transparent" />
//             <stop offset="45%" stopColor="#fff" stopOpacity="1" />
//             <stop offset="55%" stopColor="#fff" stopOpacity="1" />
//             <stop offset="100%" stopColor="transparent" />
//           </linearGradient>
//         </defs>

//         {/* Base lines */}
//         {paths.map((d, i) => (
//           <path
//             key={i}
//             d={d}
//             strokeWidth="1"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="stroke-black/30 dark:stroke-white/25"
//           />
//         ))}

//         {/* Light shimmer */}
//         {paths.map((d, i) => (
//           <motion.path
//             key={`light-${i}`}
//             d={d}
//             stroke="url(#shimmer-light)"
//             strokeWidth="2"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeDasharray="18 180"
//             animate={{ strokeDashoffset: [200, 0] }}
//             transition={{
//               duration: 2.4,
//               repeat: Infinity,
//               ease: "linear",
//               delay: i * 0.18,
//             }}
//             className="dark:hidden"
//             filter="url(#glow)"
//           />
//         ))}

//         {/* Dark shimmer */}
//         {paths.map((d, i) => (
//           <motion.path
//             key={`dark-${i}`}
//             d={d}
//             stroke="url(#shimmer-dark)"
//             strokeWidth="2.4"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeDasharray="22 200"
//             animate={{ strokeDashoffset: [220, 0] }}
//             transition={{
//               duration: 2.2,
//               repeat: Infinity,
//               ease: "linear",
//               delay: i * 0.18,
//             }}
//             className="hidden dark:block"
//             filter="url(#glow)"
//           />
//         ))}

//         {/* Nodes */}
//         {nodes.map(([cx, cy], i) => (
//           <motion.circle
//             key={i}
//             cx={cx}
//             cy={cy}
//             r="3.6"
//             className="fill-black/80 dark:fill-white/80"
//             filter="url(#glow)"
//             animate={{ scale: [1, 1.55, 1] }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               delay: i * 0.22,
//             }}
//           />
//         ))}
//       </svg>
//     </div>
//   );
// }






// "use client";
// import { motion } from "framer-motion";

// const paths = [
//   "M40 20 V70 C40 90 70 90 70 110 V160",
//   "M70 110 H120 C140 110 140 80 160 80 H180",
//   "M120 110 V40 C120 20 150 20 150 40 V80",
//   "M70 110 V190",
//   "M40 70 H20",
//   "M150 40 H190",
//   "M160 80 V150 C160 170 130 170 130 190",
//   "M20 130 H90 C110 130 110 160 140 160 H200",
//   "M90 130 V60 C90 40 110 40 110 20",
//   "M110 160 V200",
//   "M200 80 V140",
//   "M30 190 H80",
// ];

// export default function CircuitMini() {
//   return (
//     <div className="w-32 sm:w-48 h-32 sm:h-48 relative">
//       <svg viewBox="0 0 220 220" className="w-full h-full">
//         <defs>
//           {/* Multi-layer neon glow */}
//           <filter id="glow">
//             <feGaussianBlur stdDeviation="10" result="blur1" />
//             <feGaussianBlur stdDeviation="4" result="blur2" />
//             <feMerge>
//               <feMergeNode in="blur1" />
//               <feMergeNode in="blur2" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>

//           {/* Light mode neon gradient */}
//           <linearGradient id="shimmer-light" gradientUnits="userSpaceOnUse">
//             <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
//             <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
//             <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
//           </linearGradient>

//           {/* Dark mode neon gradient */}
//           <linearGradient id="shimmer-dark" gradientUnits="userSpaceOnUse">
//             <stop offset="0%" stopColor="#ff4d6d" stopOpacity="0.7" />
//             <stop offset="50%" stopColor="#ff9a3c" stopOpacity="1" />
//             <stop offset="100%" stopColor="#ff4d6d" stopOpacity="0.7" />
//           </linearGradient>
//         </defs>

//         {/* Base lines */}
//         {paths.map((d, i) => (
//           <path
//             key={i}
//             d={d}
//             className="stroke-black/20 dark:stroke-white/20"
//             strokeWidth="1"
//             fill="none"
//           />
//         ))}

//         {/* Light shimmer */}
//         {paths.map((d, i) => (
//           <motion.path
//             key={`light-${i}`}
//             d={d}
//             stroke="url(#shimmer-light)"
//             className="dark:hidden"
//             strokeWidth="2.5"
//             fill="none"
//             strokeDasharray="20 180"
//             animate={{ strokeDashoffset: [200, 0] }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "linear",
//               delay: i * 0.15,
//             }}
//             filter="url(#glow)"
//           />
//         ))}

//         {/* Dark shimmer */}
//         {paths.map((d, i) => (
//           <motion.path
//             key={`dark-${i}`}
//             d={d}
//             stroke="url(#shimmer-dark)"
//             className="hidden dark:block"
//             strokeWidth="3"
//             fill="none"
//             strokeDasharray="25 200"
//             animate={{ strokeDashoffset: [220, 0] }}
//             transition={{
//               duration: 1.8,
//               repeat: Infinity,
//               ease: "linear",
//               delay: i * 0.15,
//             }}
//             filter="url(#glow)"
//           />
//         ))}

//         {/* Nodes with neon pulse */}
//         {[
//           [40, 20],
//           [70, 110],
//           [120, 110],
//           [160, 80],
//           [180, 80],
//           [130, 190],
//           [90, 130],
//           [110, 20],
//           [200, 140],
//           [30, 190],
//         ].map(([cx, cy], i) => (
//           <motion.circle
//             key={i}
//             cx={cx}
//             cy={cy}
//             r="5"
//             className="fill-blue-400 dark:fill-pink-400"
//             filter="url(#glow)"
//             animate={{ scale: [1, 2, 1], opacity: [0.8, 1, 0.8] }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               delay: i * 0.2,
//             }}
//           />
//         ))}
//       </svg>
//     </div>
//   );
// }








"use client";
import { motion } from "framer-motion";

const paths = [
  "M40 20 V70 C40 90 70 90 70 110 V160",
  "M70 110 H120 C140 110 140 80 160 80 H180",
  "M120 110 V40 C120 20 150 20 150 40 V80",
  "M70 110 V190",
  "M40 70 H20",
  "M150 40 H190",
  "M160 80 V150 C160 170 130 170 130 190",
  "M20 130 H90 C110 130 110 160 140 160 H200",
  "M90 130 V60 C90 40 110 40 110 20",
  "M110 160 V200",
  "M200 80 V140",
  "M30 190 H80",
];

export default function CircuitMini() {
  return (
    <div className="w-32 sm:w-48 h-32 sm:h-40 relative">
      <svg viewBox="0 0 220 220" className="w-full h-full">
        <defs>
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="blur1" />
            <feGaussianBlur stdDeviation="4" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Light mode shimmer - black glow */}
          <linearGradient id="shimmer-light" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="45%" stopColor="#000000" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#000000" stopOpacity="0.9" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Dark mode shimmer - white glow */}
          <linearGradient id="shimmer-dark" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="42%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="58%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Base lines */}
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            className="stroke-black/20 dark:stroke-white/20"
            strokeWidth="1"
            fill="none"
          />
        ))}

        {/* Light shimmer */}
        {paths.map((d, i) => (
          <motion.path
            key={`light-${i}`}
            d={d}
            stroke="url(#shimmer-light)"
            className="dark:hidden"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="20 180"
            animate={{ strokeDashoffset: [200, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.15,
            }}
            filter="url(#glow)"
          />
        ))}

        {/* Dark shimmer */}
        {paths.map((d, i) => (
          <motion.path
            key={`dark-${i}`}
            d={d}
            stroke="url(#shimmer-dark)"
            className="hidden dark:block"
            strokeWidth="3"
            fill="none"
            strokeDasharray="25 200"
            animate={{ strokeDashoffset: [220, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.15,
            }}
            filter="url(#glow)"
          />
        ))}

        {/* Nodes */}
        {[
          [40, 20],
          [70, 110],
          [120, 110],
          [160, 80],
          [180, 80],
          [130, 190],
          [90, 130],
          [110, 20],
          [200, 140],
          [30, 190],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="5"
            className="fill-black dark:fill-white"
            filter="url(#glow)"
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
