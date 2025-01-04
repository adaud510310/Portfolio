import { useState, useCallback, useEffect, useRef } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { images } from "../utils/Data";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import gsap from "gsap";

type NewSwiperProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

function NewSwiper({ isOpen, setIsOpen }: NewSwiperProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  const closeModal = useCallback(() => setIsOpen(false), [setIsOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  const nextSlide = () => {
    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        gsap.to(imageRef.current, { opacity: 1, duration: 0.5 });
      },
    });
  };

  const prevSlide = () => {
    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
        gsap.to(imageRef.current, { opacity: 1, duration: 0.5 });
      },
    });
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={closeModal}
          >
            <IoMdCloseCircleOutline size={30} />
          </button>
          <div className="w-5/6 h-5/6 flex items-center justify-center">
            <div className="relative w-full h-full lg:w-4/5 lg:h-4/5 flex items-center justify-center">
              <button
                onClick={prevSlide}
                className="absolute left-0 p-2 text-white hover:scale-125"
              >
                <IoIosArrowBack size={32} />
              </button>
              <img
                ref={imageRef}
                src={images[currentIndex].src}
                alt={`Image ${currentIndex + 1}`}
                className="w-full h-full lg:w-3/4 lg:h-3/4 object-center object-cover rounded-lg"
              />
              <button
                onClick={nextSlide}
                className="absolute right-0 p-2 text-white hover:scale-125 "
              >
                <IoIosArrowForward size={32} />
              </button>
              <div className="absolute hidden lg:block lg:top-16 lg:left-32 bg-black bg-opacity-50 text-white p-2">
                <h3 className="text-lg font-bold">
                  {images[currentIndex].title}
                </h3>
                <p className="text-sm">{images[currentIndex].description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewSwiper;
