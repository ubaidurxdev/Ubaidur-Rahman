"use client";
import { usePathname } from "next/navigation";
import ChatBot from "../components/chatBot/ChatBot";
export default function ChatBotController() {
  const pathname = usePathname();
  const hideOnBlogDetails = pathname.startsWith("/blogs/");
  if (hideOnBlogDetails) return null;
  return <ChatBot />;
}
