import { useEffect, useRef } from "react";

function SkillCard({ title, level }: { title: string; level: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (barRef.current) {
        const rect = barRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          barRef.current.style.width = `${level}%`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [level]);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="relative pt-2">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div
            ref={barRef}
            style={{ width: "0%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gold transition-width duration-500"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
