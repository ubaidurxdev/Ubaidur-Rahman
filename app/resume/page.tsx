import { Metadata } from "next";
import { resumeConfig } from "../config/resume";
import ResumeHeaader from "../components/resumeHeader/ResumeHeaader";

export const metadata: Metadata = {
  title: "Resume | Md. Ubaidur Rahman",
  description: "Resume of Md. Ubaidur Rahman",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function ResumePage() {
  return (
    <div className="pb-14">
      {/* Title */}
      <div className="border-b-2 pb-5 text-center">
        <ResumeHeaader />
      </div>
      {/* Embedded Resume */}
      <div className="mt-8">
        <iframe
          src={resumeConfig.url}
          className="w-full sm:min-h-screen h-[530px] border rounded-md"
        ></iframe>
      </div>
    </div>
  );
}
