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
              src="/Avi.png"
              alt="Ahmed"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gold opacity-0 hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
          </div>

          {/* Content Section */}
          <div ref={contentRef}>
            <p className="text-lg text-gray-700 mb-4">
              Hello! I'm Ahmed, a passionate professional with expertise in two
              dynamic fields:{" "}
              <span className="font-semibold text-gold">Civil Engineering</span>{" "}
              and{" "}
              <span className="font-semibold text-gold">
                Front-End Development
              </span>
              . With over seven years of experience as a Senior Site Engineer,
              I’ve managed complex construction projects, ensured structural
              integrity, and optimized designs for efficiency and safety.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              In the world of technology, I specialize in crafting engaging user
              interfaces using modern tools like{" "}
              <span className="font-semibold text-gold">React</span> and{" "}
              <span className="font-semibold text-gold">Tailwind CSS</span>. My
              journey in software development began with the desire to create
              interactive applications that enhance user experiences and solve
              real-world problems.
            </p>
            <p className="text-lg text-gray-700">
              I thrive on learning new skills and merging my knowledge from both
              fields to build innovative solutions. Whether it's optimizing
              construction workflows or developing responsive web applications,
              I’m driven by a commitment to excellence and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
