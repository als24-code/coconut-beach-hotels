"use client";

import { gsap, SplitText } from "@/lib/gsap";
import CalendarDropdown from "../common/CalendarDropdown";
import StatInstance from "../common/StatInstance";
import { useLayoutEffect } from "react";
import { commonAnimation, textAnimation } from "@/animations/motion";
import { MapPin, Users, CalendarDays, Search } from "lucide-react";

export const HeroSection = ({ data, onEntranceDone }) => {
  useLayoutEffect(() => {
    textAnimation.blurTextReveal(".hero__title");
    commonAnimation.slideUp(".hero__description", 0.6);
    const anim = commonAnimation.slideRight(".hero__stats", 1);
    commonAnimation.slideUp(".hero__search", 0.6);

    anim.eventCallback("onComplete", () => {
      onEntranceDone?.();
    });
  }, []);
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__image">
          <div className="hero__image-iter"></div>
          <div className="hero__image-iter"></div>
          <div className="hero__image-iter"></div>
        </div>
        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title hero-title">{data.title}</h1>

              <p className="hero__description hero-subtitle">{data.desc}</p>
            </div>

            <div className="hero__stats">
              {data.data.map((s, i) => (
                <div key={i} className="hero__stat cursor-pointer">
                  <StatInstance
                    className="hero__stat-number stat-number font-bold text-white"
                    value={Object.values(s)[0]}
                  />
                  <p className="text-xs text-white/60 tracking-wide">
                    {s.label}
                  </p>
                  <span className=" text-sm text-white/80 tracking-wide">
                    {Object.keys(s)[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="hero__search relative z-10 h-33 mx-auto w-full "
          >
            <div className="w-full h-full my-auto bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-stretch md:items-end gap-4">
              <SearchField
                icon={<MapPin size={16} />}
                label="Location"
                placeholder="Location"
              />
              <SearchField
                icon={<Users size={16} />}
                label="Person"
                placeholder="Person"
                isSelect
              />
              <SearchField
                icon={<CalendarDays size={16} />}
                label="Check in"
                placeholder="Date"
                isSelect
              />
              <SearchField
                icon={<CalendarDays size={16} />}
                label="Check out"
                placeholder="Date"
                isSelect
              />
              <div className="h-full flex justify-around items-end pb-[0.5px]">
                <button className="max-h-12 bg-[#1A1A1A] text-white px-8 py-3 rounded-sm font-medium text-sm hover:bg-[#333] transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                  <Search size={16} />
                  Search
                </button>
              </div>
            </div>
          </div>
          <button className="hero__search-start button-text">
            Get Started
          </button>
        </div>
      </div>
      <div className=" hero__stats-mobile">
        {data.data.map((stat, i) => (
          <div className="hero__stat" key={i}>
            <StatInstance
              className="hero__stat-number text-black stat-number"
              value={Object.values(stat)[0]}
              duration={3800}
            />
            <span className="hero__stat-label text-black stat-label">
              {Object.keys(stat)[0]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

function SearchField({ icon, label, placeholder, isSelect }) {
  return (
    <div className="flex-1 min-w-0 h-full pt-2">
      <div className="flex items-center gap-1.5 text-[0.95rem] text-[#1A1A1A] font-medium mb-1.5 tracking-wide font-mont">
        {icon}
        {label}
      </div>
      {isSelect ? (
        <select className="w-full min-h-12 bg-[#F5F5F5] rounded-sm px-3 py-2.5 text-sm font-mont text-[#999] border-[1px] border-gray-100 border-0 outline-none appearance-none cursor-pointer">
          <option>{placeholder}</option>
        </select>
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="w-full min-h-12 bg-[#F5F5F5] rounded-sm px-3 py-2.5 text-sm font-mont text-[#1A1A1A] border-[1px] border-gray-100 placeholder:text-[#999] border-0 outline-none"
        />
      )}
    </div>
  );
}
