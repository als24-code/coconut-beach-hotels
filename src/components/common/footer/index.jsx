"use client";

import { useLayoutEffect, useRef } from "react";
import { Send } from "lucide-react";
import { gsap } from "@/lib/gsap";

export default function Footer() {
  const columns = [
    { title: "Pages", links: ["Home", "Search", "Blog", "About us"] },
    { title: "Cookies", links: ["Data Collect", "Terms", "Privacy", "Laws"] },
    { title: "Features", links: ["Find Hotels", "Book Hotels", "Reviews"] },
  ];

  return (
    <>
      <NewsletterSection />
      <footer className="bg-[#FFFFFF] border-t border-[#E5E5E5] px-6 md:px-10 pt-10 pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-lg font-semibold text-[#1A1A1A] mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-md text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="text-sm font-semibold text-[#1A1A1A] mb-4">
                Social Media
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#1A1A1A]/10 flex items-center justify-center hover:bg-[#1A1A1A]/20 transition-colors"
                  aria-label="Instagram"
                >
                  {/* <Instagram size={14} className="text-[#1A1A1A]" /> */}
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#1A1A1A]/10 flex items-center justify-center hover:bg-[#1A1A1A]/20 transition-colors"
                  aria-label="Facebook"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#1A1A1A">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#1A1A1A]/10 flex items-center justify-center hover:bg-[#1A1A1A]/20 transition-colors"
                  aria-label="Twitter"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#1A1A1A">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-5 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-[#1A1A1A]/50">Contact: +44 768 878 6543</p>
            <p className="text-xs text-[#1A1A1A]/50">
              All Rights Reserved @COCONUT 2026
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function NewsletterSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.from(".gsap-title", {
      x: -30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.from(".gsap-newsletter", {
      x: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.15,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 px-6 md:px-10 bg-[#FFFFFF]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="gsap-title text-2xl md:text-3xl font-bold text-[#1A1A1A] leading-snug">
          Don't wanna <br /> miss our Offer
        </h2>

        <div className="gsap-newsletter w-full md:w-auto">
          <p className="text-sm text-[#1A1A1A]/60 mb-3 text-center md:text-left">
            Subscribe to our daily newsletter
          </p>
          <div className="relative w-full md:w-96">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#F5F5F5] border border-[#DDD] rounded-full px-5 py-3 text-sm text-[#1A1A1A] placeholder:text-[#999] outline-none focus:border-[#1A1A1A]/40 transition-colors pr-12"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1A1A1A]/10 flex items-center justify-center hover:bg-[#1A1A1A]/20 transition-colors">
              <Send size={14} className="text-[#1A1A1A]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

