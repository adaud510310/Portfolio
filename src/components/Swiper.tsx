import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useCallback, useEffect } from "react";
import { images } from "../utils/Data";
import "swiper/css";
import "swiper/css/navigation";

type SwiperComponentProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

function SwiperComponent({ isOpen, setIsOpen }: SwiperComponentProps) {
  const closeModal = useCallback(() => setIsOpen(false), [setIsOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
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

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-black p-2"
            onClick={closeModal}
          >
            <IoMdCloseCircleOutline size={30} />
          </button>
          <div className="w-5/6 h-5/6 flex items-center justify-center">
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="w-full h-full lg:w-4/5 lg:h-4/5"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={image.src}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full lg:w-3/4 lg:h-3/4 object-center object-cover rounded-lg"
                    />
                    <div className="absolute hidden lg:block  lg:top-16 lg:left-32 bg-black bg-opacity-50 text-white p-2">
                      <h3 className="text-lg font-bold">{image.title}</h3>
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}

export default SwiperComponent;
