import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  videoURL,
}) => {
  return (
    <div>
      <div
        className="md:h-90 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  className="bg-[#e8e8e8] dark:bg-[#181818] rounded-t-xl md:rounded-t-xl h-3/4"
  >
    <video
      autoPlay
      playsInline
      muted
      loop
      // poster="/path/to/poster.jpg" // Path to your thumbnail image
      style={{ width:"100%", height: "auto", maxHeight: "288px" }}
      preload="none" // or "metadata" to preload just video metadata
      className="rounded-t-xl"
    >
      <source src={`${videoURL}.webm`} type="video/webm" />
      <source src={`${videoURL}.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-t-xl">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] betterhover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] betterhover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-black dark:text-white rounded-b-xl mt-3 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
