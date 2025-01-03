import ServiceCard from "./ServiceCard";
import { FaLaptopCode, FaHardHat } from "react-icons/fa";
import { GiConcreteBag } from "react-icons/gi";
import { SiTailwindcss, SiReact, SiSpeedtest } from "react-icons/si";

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<FaHardHat className="w-12 h-12 mx-auto" />}
            title="Site Planning and Management"
            description="Expert site planning and management for efficient project execution."
          />
          <ServiceCard
            icon={<GiConcreteBag className="w-12 h-12 mx-auto" />}
            title="Construction Supervision"
            description="Ensuring quality and safety through diligent construction supervision."
          />
          <ServiceCard
            icon={<FaLaptopCode className="w-12 h-12 mx-auto" />}
            title="Full Stack and Responsive Web Design"
            description="I create sleek, modern websites that look great on all devices."
          />

          <ServiceCard
            icon={<SiReact className="w-12 h-12 mx-auto" />}
            title="Single-Page Applications (SPAs)"
            description="Developing fast and responsive single-page applications using React."
          />
          <ServiceCard
            icon={<SiSpeedtest className="w-12 h-12 mx-auto" />}
            title="Web Performance Optimization"
            description="Optimizing web performance for faster load times and better user experience."
          />
          <ServiceCard
            icon={<SiTailwindcss className="w-12 h-12 mx-auto" />}
            title="Tailwind CSS Styling and Implementation"
            description="Implementing modern and responsive designs using Tailwind CSS."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
