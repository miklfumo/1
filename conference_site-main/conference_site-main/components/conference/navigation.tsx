"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "О конференции" },
  { href: "#goals", label: "Цели" },
  { href: "#speakers", label: "Спикеры" },
  { href: "#schedule", label: "Программа" },
  { href: "#partners", label: "Партнёры" },
  { href: "#gallery", label: "Галерея" },
  { href: "#venue", label: "Место" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center gap-3 text-foreground"
          aria-label="ФУМО ИБ — Главная"
        >
          {/* Logo placeholder — replace src with actual FUMO IB logo */}
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card">
            <span className="text-xs font-bold text-primary leading-none">
              {"ФУ"}
              <br />
              {"МО"}
            </span>
          </div>
          <span className="hidden text-sm font-bold tracking-tight sm:inline">
            ФУМО ВО ИБ
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex" role="navigation">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#registration"
          className="hidden rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 lg:inline-block"
        >
          Регистрация
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-foreground lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-b border-border bg-background/95 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#registration"
                className="block rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground"
                onClick={() => setIsOpen(false)}
              >
                Регистрация
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
