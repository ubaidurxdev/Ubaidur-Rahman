"use client";
import React, { useState } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ChatBot = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed right-3 bottom-3 sm:right-6 sm:bottom-7 z-50 bg-black dark:bg-white text-white dark:text-black p-4 sm:p-5 rounded-full shadow-lg"
      >
        <FiMessageCircle size={22} />
      </button>

      {/* Chat Box */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed right-3 bottom-20 sm:right-6 sm:bottom-24 z-50 w-[320px] h-[430px] bg-black dark:bg-white text-white dark:text-black border border-gray-700 dark:border-gray-300 rounded-xl shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-gray-700 dark:border-gray-300">
              <span className="font-semibold">AI Assistant</span>
              <button onClick={() => setShowChat(false)}>
                <FiX size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-3 overflow-y-auto text-sm">
              <div className="bg-gray-800 dark:bg-gray-200 dark:text-black p-2 rounded-lg w-fit">
                Hi 👋 How can I help you?
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-700 dark:border-gray-300">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full px-3 py-2 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-black outline-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
