"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

const speakers = [
  {
    name: "Иванов Иван Иванович",
    role: "Профессор, д.т.н.",
    topic: "Подготовка кадров по ИБ: вызовы и перспективы",
  },
  {
    name: "Петрова Елена Сергеевна",
    role: "Директор департамента, ФСТЭК России",
    topic: "Регуляторные требования к образованию в сфере ИБ",
  },
  {
    name: "Сидоров Алексей Викторович",
    role: "Заведующий кафедрой ИБ, МИРЭА",
    topic: "Модель компетенций специалиста ИБ до 2035 года",
  },
  {
    name: "Козлова Мария Александровна",
    role: "Вице-президент по кибербезопасности",
    topic: "Взаимодействие бизнеса и образования в сфере ИБ",
  },
  {
    name: "Волков Дмитрий Николаевич",
    role: "Начальник управления, ФСБ России",
    topic: "Государственная политика в области подготовки кадров по ИБ",
  },
  {
    name: "Новикова Анна Петровна",
    role: "Ведущий исследователь, РАН",
    topic: "Кибергигиена и культура информационной безопасности",
  },
  {
    name: "Григорьев Павел Андреевич",
    role: "Декан факультета ИБ",
    topic: "Практико-ориентированное обучение в области ИБ",
  },
  {
    name: "Федорова Ольга Игоревна",
    role: "Руководитель образовательных программ",
    topic: "Непрерывное образование и повышение квалификации",
  },
];

const CARDS_VISIBLE = { mobile: 1, tablet: 2, desktop: 4 };

export function SpeakersSection() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () =>
    setStartIndex((i) => (i - 1 + speakers.length) % speakers.length);
  const next = () =>
    setStartIndex((i) => (i + 1) % speakers.length);

  const getVisibleSpeakers = (count: number) => {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(speakers[(startIndex + i) % speakers.length]);
    }
    return result;
  };

  return (
    <section
      id="speakers"
      className="border-t border-border py-24"
      aria-labelledby="speakers-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            Спикеры
          </p>
          <h2
            id="speakers-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Ключевые докладчики
          </h2>
          <p className="mt-4 text-muted-foreground">
            Представители образовательных организаций, регуляторов, органов власти и отраслевых компаний.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-16">
          {/* Navigation arrows */}
          <button
            type="button"
            onClick={prev}
            className="absolute -left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary lg:-left-5"
            aria-label="Предыдущий спикер"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute -right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary lg:-right-5"
            aria-label="Следующий спикер"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Cards grid — responsive: 1 on mobile, 2 on tablet, 4 on desktop */}
          {/* We render 4 cards but hide extras on smaller screens */}
          <div className="grid grid-cols-1 gap-6 px-8 sm:grid-cols-2 lg:grid-cols-4">
            {getVisibleSpeakers(CARDS_VISIBLE.desktop).map((speaker, idx) => (
              <article
                key={`${speaker.name}-${startIndex}-${idx}`}
                className={`group text-center transition-opacity duration-300 ${
                  idx >= 2 ? "hidden lg:block" : ""
                } ${idx >= 1 ? "hidden sm:block" : ""}`}
              >
                {/* Neutral avatar */}
                <div className="relative mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-2 border-border bg-secondary transition-colors group-hover:border-primary/60">
                  <User className="h-16 w-16 text-muted-foreground/50" />
                </div>
                <h3 className="mt-6 text-base font-semibold text-foreground">
                  {speaker.name}
                </h3>
                <p className="mt-1 text-sm text-primary">{speaker.role}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {speaker.topic}
                </p>
              </article>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {speakers.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setStartIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === startIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Перейти к спикеру ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
