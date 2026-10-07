"use client";

import { navbar_data } from "@/data/navbar";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { commonAnimation } from "@/animations/motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [logo, setLogo] = useState("/assets/logo-Photoroom.png");
  const [menu, setMenu] = useState("/assets/menu.svg");
  const navRef = useRef(null);
  useEffect(() => {
    if (!scrolled) {
      setLogo("/assets/logo-Photoroom.png");
      setMenu("/assets/menu.svg");
    } else {
      setLogo("/assets/logo-dark-1.png");
      setMenu("/assets/menu-dark.svg");
    }
  }, [scrolled]);

  useLayoutEffect(() => {
    commonAnimation.slideDown(navRef.current, 0.3);
  }, []);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav ref={navRef} data-scrolled={scrolled} className="nav">
        <img className="nav__logo" src={logo} alt={""} />

        <div className="nav__items">
          <div className="container">
            {navbar_data.navigation.map((navItem, i) => (
              <div className="item nav-text text-white" key={i}>
                {navItem.title}
              </div>
            ))}
          </div>
          <div className="buttons">
            <button className="button-login button-text button-text--primary">
              Login
            </button>
            <button className="button-register button-text button-text--primary">
              Register
            </button>
          </div>
        </div>

        <div
          className="nav__menu"
          onClick={() => setIsOpen(true)}
          data-mobile-menu={isOpen}
        >
          <img src={menu} className="w-8 h-8" />
        </div>
      </nav>
      <div className="mobile-sidebar" data-mobile-menu={isOpen}>
        <div className="mobile-sidebar__header">
          <button
            className="mobile-sidebar__close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mobile-sidebar__items">
          {navbar_data.navigation.map((navItem, i) => (
            <div
              className="mobile-sidebar__item nav-text"
              key={i}
              style={{
                transitionDelay: isOpen ? `${i * 0.08 + 0.15}s` : "0s",
              }}
            >
              {navItem.title}
            </div>
          ))}
        </div>

        <div
          className="mobile-sidebar__buttons"
          style={{
            transitionDelay: isOpen
              ? `${navbar_data.navigation.length * 0.08 + 0.2}s`
              : "0s",
          }}
        >
          <button className="mobile-sidebar__btn mobile-sidebar__btn--login button-text button-text--secondary">
            Login
          </button>
          <button className="mobile-sidebar__btn mobile-sidebar__btn--register button-text button-text--secondary">
            Register
          </button>
        </div>
      </div>

      <div
        className="mobile-sidebar__backdrop--open"
        data-mobile-menu={isOpen}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}
