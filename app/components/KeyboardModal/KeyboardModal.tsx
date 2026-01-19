import React from "react";
import { motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
const shorcut = [
  {
    id: 1,
    name: "Navigation",
    allShortCut: [
      {
        icon: <IoHomeOutline size={20} color="gray" />,
        title: "Go to Home",
        description: "got to homepage",
        key: "H",
      },
      {
        icon: <IoBookOutline size={20} color="gray" />,
        title: "Go to Blogs",
        description: "browse all blogs",
        key: "B",
      },
    ],
  },
];

const KeyboardModal = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onClick={() => setShowModal(false)}
      className="flex items-center fixed inset-0 z-50 backdrop-blur-[2px] justify-center bg-black/40"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-xl h-96 bg-gray-50 dark:bg-neutral-800 p-2 rounded-md"
      >
        <div className="flex items-center gap-1 border-b pb-1">
          <IoIosSearch size={20} color="gray" />
          <input
            className="w-full py-0.5 outline-none border-none"
            placeholder="Type a command or search..."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default KeyboardModal;
