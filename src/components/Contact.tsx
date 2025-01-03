import React, { FormEvent, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serviceId = import.meta.env.VITE_SERVICE_ID!;
const templateId = import.meta.env.VITE_TEMPLATE_ID!;
const publicKey = import.meta.env.VITE_PUBLIC_KEY!;

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null); // Ref for the button
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    // Trigger bounce effect on button
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.2,
        duration: 0.2,
        ease: "bounce.out",
        yoyo: true,
        repeat: 1,
      });
    }

    if (formRef.current) {
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
        () => {
          setLoading(false);
          setFeedback("SUCCESS!");
          formRef.current!.reset();
        },
        (error) => {
          setLoading(false);
          setFeedback(`FAILED... ${error.text}`);
        }
      );
    }
  };

  useEffect(() => {
    const inputs = gsap.utils.toArray<HTMLInputElement>(
      "#contact input, #contact textarea"
    );

    // Animation for form inputs with bounce effect
    inputs.forEach((input, index) => {
      gsap.fromTo(
        input,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: index * 0.2,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="contact" className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-lamaPurple focus:border-lamaPurple"
                  />
                </div>
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-lamaPurple focus:border-lamaPurple"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-lamaPurple focus:border-lamaPurple"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  ref={buttonRef} // Attach ref to the button
                  disabled={loading}
                  className={`px-6 py-3 bg-transparent text-black border border-gold rounded-full font-semibold transition-all duration-700 relative overflow-hidden group ${
                    loading ? "cursor-not-allowed" : ""
                  }`}
                >
                  <span className="relative z-10 group-hover:text-white">
                    {loading ? "Sending..." : "Send Message"}
                  </span>
                  <div className="absolute inset-0 bg-gold transition-transform transform translate-x-full group-hover:translate-x-0"></div>
                </button>
                {feedback && (
                  <p
                    className={`mt-4 ${
                      feedback.startsWith("SUCCESS")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {feedback}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
