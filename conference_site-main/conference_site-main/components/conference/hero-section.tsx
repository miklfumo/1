import Image from "next/image";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Главный баннер конференции"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        aria-hidden="true"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-background/80" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Регистрация открыта
          </span>
        </div>

        <p className="text-xs font-semibold tracking-widest text-primary uppercase">
          Всероссийская конференция
        </p>

        <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-6xl">
          30-й юбилейный Пленум{" "}
          <span className="text-primary">ФУМО ВО ИБ</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
          Федеральное учебно-методическое объединение в сфере высшего образования по информационной безопасности
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4 text-primary" />
            {/* Replace with actual dates */}
            <time dateTime="2025-11-01">Ноябрь 2025</time>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{"Москва, МИРЭА"}</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#registration"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Регистрация
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#schedule"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/50 px-8 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
          >
            Программа
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/50 pt-8">
          <div>
            <p className="text-2xl font-bold text-primary sm:text-3xl">30</p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Юбилейный пленум
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary sm:text-3xl">50+</p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Спикеров
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary sm:text-3xl">
              500+
            </p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Участников
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
