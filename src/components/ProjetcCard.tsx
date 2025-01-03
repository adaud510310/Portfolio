import React, { useState } from "react";
import SwiperComponent from "./Swiper";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  projectLink?: string;
  useSwiper?: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectLink,
  useSwiper = false,
}) => {
  const [isSwiperOpen, setIsSwiperOpen] = useState(false);

  const openSwiper = () => setIsSwiperOpen(true);

  return (
    <div className="relative group w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
      {/* Project Image */}
      <img
        src={imageUrl}
        alt={title}
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      {/* Hover Overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-white 
      opacity-0 group-hover:opacity-100 transition-opacity duration-300 before:absolute before:inset-0 before:bg-gold-dark  before:bg-opacity-90
      before:origin-right before:scale-x-0 group-hover:before:scale-x-100 before:transition-transform before:duration-500 before:ease-in-out"
      >
        <h3 className="relative text-lg font-bold z-10">{title}</h3>
        <p className="relative mt-2 text-sm text-center px-4 z-10">
          {description}
        </p>
        {useSwiper ? (
          <>
            <button
              onClick={openSwiper}
              className="mt-8 inline-block px-6 py-3 rounded-full text-lg font-semibold transition-all duration-700 relative overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-white">
                View Projects
              </span>
              <div className="absolute inset-0 bg-gold transition-transform transform translate-x-full group-hover:translate-x-0"></div>
            </button>
            {isSwiperOpen && (
              <SwiperComponent
                isOpen={isSwiperOpen}
                setIsOpen={setIsSwiperOpen}
              />
            )}
          </>
        ) : (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-6 py-3 rounded-full text-lg font-semibold transition-all duration-700 relative overflow-hidden group"
          >
            <span className="relative z-10 group-hover:text-white">
              View Projects
            </span>
            <div className="absolute inset-0 bg-gold transition-transform transform translate-x-full group-hover:translate-x-0"></div>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
