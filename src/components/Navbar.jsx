
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.href.slice(1)))
        .filter(Boolean);

      const marker = window.scrollY + 150;
      let current = sections[0]?.id || "home";

      for (const section of sections) {
        if (section.offsetTop <= marker) {
          current = section.id;
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
      ) {
        current = "contact";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="navbar">
      <a className="logo" href="#home">
        Portfolio<span className="highlight">.</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={
              activeSection === item.href.slice(1) ? "active" : ""
            }
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
