"use client";
import { useRef } from "react";

export default function Page() {
  const teamRef = useRef(null);
  const tRef = useRef(null);

  const scrollTeam = (dir) => {
    const el = teamRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const scrollT = (dir) => {
    const el = tRef.current;
    if (!el) return;
    const card = el.querySelector(".t-card");
    const gap = 22;
    const step = card ? card.offsetWidth + gap : Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  const TEAM = [
    { img: "/1.png", name: "Marcel Bryan", role: "Patient Services Manager" },
    { img: "/2.png", name: "John Alex", role: "Patient Services Manager" },
    { img: "/3.png", name: "Jennifer D'souza", role: "Practical Nurse" },
    { img: "/4.png", name: "Mariana Jola", role: "Dental Hygienist" },
    { img: "/1.png", name: "Ayesha Khan", role: "Dental Assistant" },
    { img: "/2.png", name: "David Miller", role: "Orthodontic Specialist" },
  ];

  const TESTIMONIALS = [
    {
      text: "The clinic is also exceptionally clean and prioritizes hygiene. They follow strict cleanliness protocols, which gives me added confidence that I am in a safe environment for dental care.",
      name: "Crysty Harly",
      role: "Product Manager",
      avatar: "/1.png",
    },
    {
      text: "The clinic is also exceptionally clean and prioritizes hygiene. They follow strict cleanliness protocols, which gives me added confidence that I am in a safe environment for dental care.",
      name: "Selina Martin",
      role: "Product Manager",
      avatar: "/2.png",
    },
    {
      text: "The clinic is also exceptionally clean and prioritizes hygiene. They follow strict cleanliness protocols, which gives me added confidence that I am in a safe environment for dental care.",
      name: "Yacob B.",
      role: "Product Manager",
      avatar: "/3.png",
    },
    {
      text: "The clinic is also exceptionally clean and prioritizes hygiene. They follow strict cleanliness protocols, which gives me added confidence that I am in a safe environment for dental care.",
      name: "Mariana Jola",
      role: "Product Manager",
      avatar: "/4.png",
    },
  ];

  const InstaIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 16.1A4.1 4.1 0 1 0 12 7.9a4.1 4.1 0 0 0 0 8.2Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17.3 6.8h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );

  const GlobeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2 12h20" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 2c2.8 2.7 4.4 6.1 4.4 10S14.8 19.3 12 22c-2.8-2.7-4.4-6.1-4.4-10S9.2 4.7 12 2Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );

  const SmileMark = () => (
    <svg width="36" height="18" viewBox="0 0 64 32" fill="none" aria-hidden="true">
      <path d="M6 8c5 10 16 16 26 16S53 18 58 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M22 7c0 2-2 4-4 4s-4-2-4-4 2-4 4-4 4 2 4 4Z" fill="currentColor" opacity="0.25" />
      <path d="M50 7c0 2-2 4-4 4s-4-2-4-4 2-4 4-4 4 2 4 4Z" fill="currentColor" opacity="0.25" />
    </svg>
  );

  return (
    <>
      <div id="top" />

      <main>
        <section className="hero">
          <div className="hero-shell">
            <div className="hero-inner">
              <div className="hero-left">
                <h1 className="hero-title">
                  Get a <span className="hero-blue">Beautiful</span>
                  <br />
                  Straight Smile
                  <br />
                  <span className="hero-blue">Quickly.</span>
                </h1>

                <p className="hero-desc">
                  Transform your smile quickly and effortlessly with our exceptional services. We understand the importance of having a beautiful, straight smile, and that’s why we offer efficient solutions tailored to your needs.
                </p>

                <button className="hero-btn">Book Now</button>

                <div className="hero-bottom">
                  <div className="hero-stat">
                    <span className="hero-stat-num">827+</span>
                  </div>
                  <p className="hero-stat-text">
                    Transform your smile quickly and effortlessly with our exceptional services.
                  </p>
                </div>
              </div>

              <div className="hero-right">
                <div className="hero-topnote">
                  <div className="hero-topnote-date">July 29, 2023</div>
                  <div>We’re Open Clinic</div>
                  <div>8 AM - 11 PM</div>
                </div>

                <div className="hero-imageWrap">
                  <img src="/braces.png" alt="Dental braces model" className="hero-image" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="hero-2">
        <div className="hero-bottom-2">
          <div className="hero-stat-2">
            <span className="hero-stat-num-2">170</span>
          </div>
          <p className="hero-stat-text">
            Performed <br />
            Surgeries
          </p>
          <div className="line-1"></div>
        </div>

        <div className="hero-bottom-2">
          <div className="hero-stat-2">
            <span className="hero-stat-num-2">85</span>
          </div>
          <p className="hero-stat-text">
            Satisfied <br />
            Patients
          </p>
          <div className="line-1"></div>
        </div>

        <div className="hero-bottom-2">
          <div className="hero-stat-2">
            <span className="hero-stat-num-2">176</span>
          </div>
          <p className="hero-stat-text">
            Staff <br />
            Members
          </p>
          <div className="line-1"></div>
        </div>

        <div className="hero-bottom-2">
          <div className="hero-stat-2">
            <span className="hero-stat-num-2">98</span>
          </div>
          <p className="hero-stat-text">
            Yearly <br />
            Surgeries
          </p>
        </div>
      </div>

      <section id="services">
        <div className="card-hero">
          <div className="card-top">
            <p className="card-cont-p1">
              We specialize in you,
              <br />
              whatever your specialty
            </p>

            <p className="card-cont-p2">
              At our company, we take pride in providing individually customized solutions that are specifically tailored to meet your unique expertise, requirements, and preferences
            </p>
          </div>

          <div className="card-cont-2">
            <div className="service-card">
              <div className="service-card-img">
                <img src="/item_4.png" alt="Vibrant Checkups" />
              </div>
              <div className="service-card-content">
                <h3>Vibrant Checkups</h3>
                <p>
                  At our dental practice, we believe that regular dental exams are the cornerstone of a healthy and radiant smile.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img">
                <img src="/item_5.png" alt="Revitalized Cleaning" />
              </div>
              <div className="service-card-content">
                <h3>Revitalized Cleaning</h3>
                <p>
                  Maintaining optimal oral health is essential for a radiant smile and overall well-being.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img">
                <img src="/item_6.png" alt="Reinforced Fillings" />
              </div>
              <div className="service-card-content">
                <h3>Reinforced Fillings</h3>
                <p>
                  Our reinforced fillings prioritize durability and functionality for a long-lasting smile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dh-wrap dh-figma" id="about">
        <div className="dh-left">
          <h2 className="dh-title">
            Your Family&apos;s Dental <br />
            Health Matters: Discover <br />
            Our Budget-Friendly <br />
            Discount Plan.
          </h2>

          <p className="dh-sub">
            Unlock Optimal Dental Wellness for Your Loved Ones:
            <br />
            Embrace Our Budget-Friendly Discount Plan for
            <br />
            Comprehensive Care and Radiant Smiles!
          </p>

          <div className="dh-ctaRow">
            <div className="dh-avatars">
              <span className="dh-dot"></span>
              <span className="dh-dot"></span>
              <span className="dh-dot"></span>
              <span className="dh-dot"></span>
            </div>
            <button className="dh-cta">Join Membership</button>
          </div>
        </div>

        <div className="dh-right">
          <div className="dh-card dh-card--big">
            <div className="dh-cardMark">
              <SmileMark />
            </div>
            <div className="dh-percent">80%</div>
            <p className="dh-card-text">
              Exclusive Member Savings: Save 30% - 80% <br />
              on Dentora Procedures, Including Oral Exams, <br />
              Cleanings, and X-Rays. <br />
              enjoy exclusive discounts on routine checkups
            </p>
          </div>

          <div className="dh-card dh-card--alt">
            <div className="dh-cardMark">
              <SmileMark />
            </div>
            <div className="dh-percent">40%</div>
            <p className="dh-card-text">
              Enhanced Member Benefits: Save 40% on All Other <br />
              Dental Services, Including Cosmetic, Restorative, and <br />
              Specialty Dental Procedures.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section" id="clinics">
        <div className="team-head">
          <h2 className="first-doc-h">
            Introducing Our <br /> Dedicated Dentists
          </h2>

          <div className="team-controls">
            <button className="team-nav team-nav--ghost" onClick={() => scrollTeam("left")} aria-label="Scroll left">
              ‹
            </button>
            <button className="team-nav" onClick={() => scrollTeam("right")} aria-label="Scroll right">
              ›
            </button>
          </div>
        </div>

        <div className="team-row" ref={teamRef}>
          {TEAM.map((m, i) => (
            <article className="team-card" key={i}>
              <div className="team-img">
                <img src={m.img} alt={m.name} />
              </div>

              <div className="team-info">
                <h4>{m.name}</h4>
                <p>{m.role}</p>

                <div className="team-socials">
                  <a className="team-social" href="#" aria-label="Instagram">
                    <InstaIcon />
                  </a>
                  <a className="team-social" href="#" aria-label="Website">
                    <GlobeIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="blog" id="blog">
        <div className="blog-head">
          <div>
            <h2 className="blog-title">
              Read Our Latest <span>Dental Tips & Articles</span>
            </h2>
            <p className="blog-sub">Stay informed with our expert advice on oral health and dental care.</p>
          </div>
        </div>

        <div className="blog-grid">
          <article className="bcard">
            <div className="bcard-media">
              <img src="/invis.jpg" alt="Brushing tips" className="bcard-img" />
            </div>

            <div className="bcard-body">
              <div className="bcard-tag">TIPS &amp; ADVICE</div>
              <h3 className="bcard-title">The Best Way to Brush Your Teeth Properly</h3>
              <div className="bcard-date">Apr 15, 2024</div>
              <p className="bcard-desc">Learn the correct technique to brush your teeth and maintain optimal oral hygiene.</p>
              <button className="bcard-btn">Read More</button>
            </div>
          </article>

          <article className="bcard">
            <div className="bcard-media">
              <img src="/brushing-tips.jpg" alt="Invisalign" className="bcard-img" />
            </div>

            <div className="bcard-body">
              <div className="bcard-tag">ORTHODONTICS</div>
              <h3 className="bcard-title">How Invisalign Can Improve Your Smile</h3>
              <div className="bcard-date">Mar 20, 2024</div>
              <p className="bcard-desc">Discover the benefits of using Invisalign for straighter, healthier teeth without brackets.</p>
              <button className="bcard-btn">Read More</button>
            </div>
          </article>

          <article className="bcard">
            <div className="bcard-media">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop"
                alt="Dental checkup"
                className="bcard-img"
              />
            </div>

            <div className="bcard-body">
              <div className="bcard-tag">DENTAL CARE</div>
              <h3 className="bcard-title">5 Signs You Should Visit the Dentist Soon</h3>
              <div className="bcard-date">Feb 28, 2024</div>
              <p className="bcard-desc">Identify important symptoms that indicate it’s time to schedule a dental checkup.</p>
              <button className="bcard-btn">Read More</button>
            </div>
          </article>
        </div>
      </section>

      <section className="t-head">
        <div className="t-head__wrap">
          <h2 className="t-head__title">
            See What Our <br />
            Clients Have to Say:
          </h2>

          <p className="t-head__desc">
            Embark on a journey through heartfelt experiences unveil the praises and testimonials from our esteemed clients, unraveling the unmatched quality of our services!
          </p>
        </div>
      </section>

      <section className="t-sec">
        <div className="t-wrap">
          <div className="t-row" ref={tRef}>
            {TESTIMONIALS.map((t, i) => (
              <article className="t-card" key={i}>
                <div className="t-quoteMark">“</div>
                <p className="t-text">{t.text}</p>

                <div className="t-bottom">
                  <div className="t-person">
                    <img className="t-avatar" src={t.avatar} alt={t.name} />
                    <div className="t-meta">
                      <div className="t-name">{t.name}</div>
                      <div className="t-role">{t.role}</div>
                    </div>
                  </div>

                  <a className="t-link" href="#">
                    Read More <span className="t-arrow">›</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="t-navWrap">
            <button className="t-navBtn t-navBtn--ghost" type="button" aria-label="Prev" onClick={() => scrollT("left")}>
              ‹
            </button>
            <button className="t-navBtn t-navBtn--primary" type="button" aria-label="Next" onClick={() => scrollT("right")}>
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="book" id="book">
        <div className="book-head">
          <div>
            <h2 className="book-title">
              Book Your <span>Dental Appointment</span>
            </h2>
            <p className="book-sub">Fill the form and our team will confirm your appointment within working hours.</p>
          </div>
        </div>

        <div className="book-grid">
          <div className="book-card">
            <h3 className="book-card-title">Book an Appointment</h3>

            <form className="book-form" onSubmit={(e) => e.preventDefault()}>
              <div className="book-row">
                <label className="book-label">
                  Full Name
                  <input className="book-input" type="text" placeholder="Your full name" />
                </label>

                <label className="book-label">
                  Email Address
                  <input className="book-input" type="email" placeholder="Email address" />
                </label>
              </div>

              <div className="book-row">
                <label className="book-label">
                  Phone Number
                  <input className="book-input" type="tel" placeholder="03xx xxxx xxx" />
                </label>

                <label className="book-label">
                  Service
                  <select className="book-input">
                    <option>General Checkup</option>
                    <option>Teeth Cleaning</option>
                    <option>Braces / Orthodontics</option>
                    <option>Whitening</option>
                    <option>Root Canal</option>
                    <option>Dental Implants</option>
                  </select>
                </label>
              </div>

              <div className="book-row">
                <label className="book-label">
                  Preferred Date
                  <input className="book-input" type="date" />
                </label>

                <label className="book-label">
                  Preferred Time
                  <select className="book-input">
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>01:00 PM</option>
                    <option>02:00 PM</option>
                    <option>03:00 PM</option>
                    <option>04:00 PM</option>
                    <option>05:00 PM</option>
                    <option>06:00 PM</option>
                  </select>
                </label>
              </div>

              <label className="book-label">
                Additional Notes
                <textarea className="book-textarea" placeholder="Any pain, preferred doctor, or notes..."></textarea>
              </label>

              <button className="book-btn" type="submit">
                Book Appointment
              </button>
            </form>
          </div>

          <div className="book-side">
            <div className="book-info">
              <div className="book-info-title">Operating Hours</div>

              <div className="book-info-row">
                <span>Monday - Friday</span>
                <span>10:00 AM - 8:00 PM</span>
              </div>
              <div className="book-info-row">
                <span>Saturday</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div className="book-info-row">
                <span>Sunday</span>
                <span>Closed</span>
              </div>

              <div className="book-divider"></div>

              <div className="book-contact">
                <div className="book-pill">
                  <span className="book-dot"></span>
                  <span>+92 300 123 4567</span>
                </div>
                <div className="book-pill">
                  <span className="book-dot"></span>
                  <span>123 Smile Avenue, City</span>
                </div>
              </div>
            </div>

            <div className="book-map">
              <div className="book-map-pin"></div>
              <div className="book-map-line"></div>
              <div className="book-map-line"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-sec">
        <div className="cta-wrap2">
          <div className="cta-card2">
            <div className="cta-left2">
              <h2 className="cta-title2">
                Seize the opportunity for a <br />
                brighter smile starting now!
              </h2>

              <p className="cta-sub2">
                Embracing the Now or Never Moment. Unlocking the Gateway to a Brighter, More Captivating Smile Beyond Your Wildest Dream!
              </p>

              <div className="cta-actions2">
                <button className="cta-btn2 cta-btn2--outline" type="button">
                  Schedule
                </button>
                <button className="cta-btn2 cta-btn2--fill" type="button">
                  Book Now <span className="cta-btnArrow2">→</span>
                </button>
              </div>
            </div>

            <div className="cta-right2">
              <img className="cta-girl2" src="/smile.png" alt="Smiling woman" />
            </div>
          </div>
        </div>
      </section>

      <section className="location" id="location">
        <div className="location__wrap">
          <div className="location__card">
            <div className="location__map">
              <div className="location__pin" aria-hidden="true">
                <div className="location__pinInner">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2c4.4 0 8 3.1 8 7.4 0 5.6-6.3 11.9-7.4 12.9a.9.9 0 0 1-1.2 0C10.3 21.3 4 15 4 9.4 4 5.1 7.6 2 12 2Z" fill="currentColor" opacity="0.18" />
                    <path d="M12 3.5c3.6 0 6.5 2.5 6.5 5.9 0 4.7-5.2 10.3-6.1 11.2-.2.2-.6.2-.8 0-.9-.9-6.1-6.5-6.1-11.2 0-3.4 2.9-5.9 6.5-5.9Z" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="location__info">
              <div className="location__head">
                <span className="location__headIcon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" fill="currentColor" opacity="0.7" />
                  </svg>
                </span>
                <h2 className="location__title">Our Location</h2>
              </div>

              <p className="location__addr">
                Jl Mojopahit II No.20, Block MJ, RT.9/RW.3 Moja <br />
                Malang Raya, South Malang City. <br />
                Malang 2397, Indonesia
              </p>

              <div className="location__divider" />

              <div className="location__subTitle">Open Days:</div>

              <div className="location__line">
                <span className="location__lineIcon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22a9 9 0 1 0-9-9 9 9 0 0 0 9 9Z" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
                <span>Monday - Sunday</span>
              </div>

              <div className="location__line">
                <span className="location__lineIcon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22a9 9 0 1 0-9-9 9 9 0 0 0 9 9Z" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 7v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M12 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
                <span>09.00 WIB - 20.00 WIB</span>
              </div>

              <div className="location__divider" />

              <button className="location__btn" type="button">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="dt-footer">
        <div className="dt-footer__wrap">
          <div className="dt-footer__top">
            <div className="dt-footer__brand">
              <div className="dt-footer__logoRow">
                <img src="/logo.png" alt="Dentixa" className="dt-footer__logo" />
              </div>

              <p className="dt-footer__desc">
                Transforming Your Family's Dental Care Experience <br />
                with Our Comprehensive One-Stop Solution!
              </p>

              <div className="dt-footer__socials">
                <a className="dt-footer__icon" href="#" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 7.3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.7-2 .8A3.2 3.2 0 0 0 12 8.4c0 .2 0 .5.1.7A9 9 0 0 1 4.2 5.2c-.3.5-.4 1-.4 1.6 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4v.1c0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-1 .1-.2 0-.4 0-.6-.1.4 1.4 1.8 2.4 3.3 2.4A6.4 6.4 0 0 1 4 18.3a9 9 0 0 0 4.9 1.4c5.9 0 9.2-5 9.2-9.3v-.4c.6-.5 1.2-1.1 1.7-1.8Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a className="dt-footer__icon" href="#" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.5 6.8a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8ZM4.8 21h3.4V9H4.8v12ZM10.2 9H13.5v1.6h.1c.5-1 1.8-2 3.6-2 3.9 0 4.6 2.5 4.6 5.8V21h-3.4v-5.1c0-1.2 0-2.8-1.8-2.8s-2 1.3-2 2.7V21h-3.4V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a className="dt-footer__icon" href="#" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M14 8.7V7.3c0-.6.4-1.1 1.1-1.1H17V3h-2.4C12.1 3 11 4.5 11 7.1v1.6H9v3h2V21h3v-9.3h2.6l.4-3H14Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a className="dt-footer__icon" href="#" aria-label="Pinterest">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3a9 9 0 0 0-3 17.5c-.1-.7-.2-1.8 0-2.6l1.3-5.4s-.3-.6-.3-1.4c0-1.3.8-2.3 1.7-2.3.8 0 1.2.6 1.2 1.3 0 .8-.5 2-0.8 3.1-.2 1 .5 1.8 1.5 1.8 1.8 0 3.1-1.9 3.1-4.6 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.6 2.2-4.6 4.4 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.1c0 .2-.2.3-.4.2-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.4 7-6.4 3.7 0 6.6 2.6 6.6 6.2 0 3.7-2.3 6.7-5.6 6.7-1.1 0-2.1-.6-2.5-1.2l-.7 2.6c-.3.9-1 2.1-1.5 2.9A9 9 0 1 0 12 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a className="dt-footer__icon" href="#" aria-label="Dribbble">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm6.9 8.6a14 14 0 0 0-3.6-.2c-.2-.5-.4-1-.6-1.5a12.6 12.6 0 0 0 3-2c.7 1.1 1.1 2.4 1.2 3.7ZM16.4 6.2a11 11 0 0 1-2.4 1.6 25 25 0 0 0-1.4-2.4c1.4.1 2.7.6 3.8.8ZM10.8 5.3c.6.8 1.1 1.6 1.6 2.5A20.5 20.5 0 0 1 6 9c.8-1.9 2.5-3.3 4.8-3.7Zm-5 5.6h.2a22.9 22.9 0 0 0 7.3-1.4c.2.4.3.8.5 1.1l-.3.1a15.8 15.8 0 0 0-6.7 5.3 6.9 6.9 0 0 1-1-5.1Zm6.2 9.2c-1.4 0-2.7-.4-3.8-1.1a13.7 13.7 0 0 1 6-4.8c.5 1.3.9 2.7 1.1 4.1a6.8 6.8 0 0 1-3.3 1.8Zm5-2.6c-.2-1.2-.5-2.5-1-3.7a12 12 0 0 1 3.1.4 7 7 0 0 1-2.1 3.3Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="dt-footer__col">
              <div className="dt-footer__label">Phone Number</div>
              <div className="dt-footer__value">(+123) 9230 821</div>

              <div className="dt-footer__label dt-footer__label--sp">Email</div>
              <div className="dt-footer__value">Dental.dentix@gmail.co</div>
            </div>

            <div className="dt-footer__col">
              <div className="dt-footer__label">About Us</div>
              <a className="dt-footer__link" href="#">
                Our Services
              </a>
              <a className="dt-footer__link" href="#">
                Our Clinics
              </a>
              <a className="dt-footer__link" href="#">
                Dentists
              </a>
            </div>

            <div className="dt-footer__col">
              <div className="dt-footer__label">Location</div>
              <a className="dt-footer__link" href="#">
                Career
              </a>
              <a className="dt-footer__link" href="#">
                Privacy Policy
              </a>
              <a className="dt-footer__link" href="#">
                Terms of Services
              </a>
            </div>

            <div className="dt-footer__col">
              <div className="dt-footer__label">Social Media</div>
              <a className="dt-footer__link" href="#">
                Twitter
              </a>
              <a className="dt-footer__link" href="#">
                Instagram
              </a>
              <a className="dt-footer__link" href="#">
                Facebook
              </a>
            </div>
          </div>

          <div className="dt-footer__mid">
            <div className="dt-footer__apps">
              <div className="dt-footer__appsTitle">Get the app</div>
              <div className="dt-footer__appsRow">
                <a className="dt-footer__store" href="#">
                  <img src="/applestore1.svg" alt="App Store" />
                </a>
                <a className="dt-footer__store" href="#">
                  <img src="/googlestore.svg" alt="Google Play" />
                </a>
              </div>
            </div>

            <div className="dt-footer__info">
              <div className="dt-footer__infoTitle">Working Days</div>
              <div className="dt-footer__infoLine">
                <span className="dt-footer__dot" />
                Monday - Sunday
              </div>
              <div className="dt-footer__infoLine">
                <span className="dt-footer__dot" />
                09.00 WIB - 20.00 WIB
              </div>
            </div>

            <div className="dt-footer__info">
              <div className="dt-footer__infoTitle">Location</div>
              <div className="dt-footer__addr">
                Block MJ, Jl Mojopahit II No.20, RT.9/RW.3 Moja, Malang Raya, South
                Malang City, Malang 2397, Indonesia
              </div>
            </div>
          </div>
        </div>
               <div className="ft__copy">
              © 2026 Ahad.io. All rights reserved ·{" "}
              <a
                href="https://github.com/ahad580"
                target="_blank"
                rel="noreferrer"
                className="ft__github"
              >
                GitHub
              </a>
            </div>
      </section> 
    </>
  );
}
