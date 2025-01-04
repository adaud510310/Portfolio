import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Image slide-in animation
      gsap.fromTo(
        imageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        }
      );

      // Content slide-in animation
      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert(); // Cleanup GSAP context on unmount
  }, []);

  return (
    <section
      id="about"
      className="py-16 bg-gray-50"
      ref={sectionRef} // Reference the section for animations
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div ref={imageRef} className="relative">
            <img
              src="/img/laptop.png"
              alt="adaud"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gold opacity-0 hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
          </div>

          {/* Content Section */}
          <div ref={contentRef}>
            <p className="text-lg text-gray-700 mb-4">
              Hi, I’m Atif! My professional journey has been shaped by two
              distinct yet complementary fields:{" "}
              <span className="font-semibold text-gold">IT Infrastructure</span>{" "}
              and{" "}
              <span className="font-semibold text-gold">Web Development</span>.
              I’m passionate about solving problems, building systems, and
              creating solutions that drive efficiency and innovation.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              In the realm of IT, I have extensive experience in managing{" "}
              <span className="font-semibold text-gold">servers</span>,
              maintaining{" "}
              <span className="font-semibold text-gold">networks</span>, and
              ensuring the smooth operation of critical infrastructure. From
              setting up secure systems to troubleshooting complex technical
              issues, I thrive on keeping systems reliable, efficient, and
              secure.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              On the web development front, I specialize in crafting beautiful,
              functional, and responsive websites. My expertise in{" "}
              <span className="font-semibold text-gold">WordPress</span> allows
              me to build and customize websites that meet unique business
              needs, while my knowledge of{" "}
              <span className="font-semibold text-gold">React</span>,{" "}
              <span className="font-semibold text-gold">HTML</span>,{" "}
              <span className="font-semibold text-gold">CSS</span>, and{" "}
              <span className="font-semibold text-gold">JavaScript</span>{" "}
              enables me to push boundaries and bring innovative ideas to life.
            </p>
            <p className="text-lg text-gray-700">
              Whether it’s managing IT systems to ensure seamless performance or
              designing user-friendly websites that leave a lasting impression,
              I bring dedication, creativity, and a commitment to excellence to
              everything I do. I’m always eager to explore new challenges, learn
              new technologies, and make a meaningful impact through my work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
