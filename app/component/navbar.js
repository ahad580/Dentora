"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const go = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <div className="nav-wrap">
      <nav className="f1-navbar">
        <div className="f1-nav-left" onClick={() => go("top")} role="button" tabIndex={0}>
          <img src="/logo.png" alt="Dentora" className="f1-logo" />
        </div>

        <div className="f1-nav-center">
          <button className="f1-nav-item" onClick={() => go("top")}>Home</button>
          <button className="f1-nav-item" onClick={() => go("about")}>About</button>
          <button className="f1-nav-item" onClick={() => go("services")}>Our Services</button>
          <button className="f1-nav-item" onClick={() => go("blog")}>Blog</button>
          <button className="f1-nav-item" onClick={() => go("clinics")}>Our Clinics</button>
          <button className="f1-nav-item" onClick={() => go("location")}>Location</button>
        </div>

        <div className="f1-nav-right">
          <button className="f1-btn" onClick={() => go("book")}>Book Online</button>

          <button
            className={`f1-burger ${open ? "is-open" : ""}`}
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`f1-mmenu ${open ? "is-open" : ""}`}>
        <div className="f1-mmenu__panel">
          <button className="f1-mitem" onClick={() => go("top")}>Home</button>
          <button className="f1-mitem" onClick={() => go("about")}>About</button>
          <button className="f1-mitem" onClick={() => go("services")}>Our Services</button>
          <button className="f1-mitem" onClick={() => go("blog")}>Blog</button>
          <button className="f1-mitem" onClick={() => go("clinics")}>Our Clinics</button>
          <button className="f1-mitem" onClick={() => go("location")}>Location</button>
          <button className="f1-mcta" onClick={() => go("book")}>Book Online</button>
        </div>
      </div>
    </div>
  );
}
