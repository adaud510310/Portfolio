import ServiceCard from "./ServiceCard";
import { FaLaptopCode,  } from "react-icons/fa";
import { PiShareNetwork } from "react-icons/pi";
import {  SiReact, SiSpeedtest } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";



const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<FaNetworkWired className="w-12 h-12 mx-auto" />}
            title="Network service"
            description="ach service is usually provided by a server component running on one or more computers."
          />
          <ServiceCard
            icon={<GrUserAdmin className="w-12 h-12 mx-auto" />}
            title="administrtors"
            description="An administrator is a person whose job involves helping to organize and supervise the way that an organization or institution functions. Synonyms."
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
            icon={<PiShareNetwork  className="w-12 h-12 mx-auto" />}
            title="Ubiquiti"
            description="UniFi is building the future of IT. Industry-leading products magically unified in an incredible software interface with scalable."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
