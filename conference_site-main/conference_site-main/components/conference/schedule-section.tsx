"use client";

import { useState } from "react";
import { Clock, MapPin, Download } from "lucide-react";

type ScheduleDay = {
  date: string;
  label: string;
  events: {
    time: string;
    title: string;
    speaker?: string;
    location: string;
    tag?: string;
  }[];
};

const schedule: ScheduleDay[] = [
  {
    date: "2025-11-01",
    label: "День 1",
    events: [
      {
        time: "09:00",
        title: "Регистрация участников. Приветственный кофе",
        location: "Фойе",
      },
      {
        time: "10:00",
        title: "Торжественное открытие 30-го юбилейного Пленума ФУМО ВО ИБ",
        location: "Главный зал",
        tag: "Пленарное",
      },
      {
        time: "10:30",
        title: "Пленарный доклад: Состояние и перспективы подготовки кадров по ИБ",
        speaker: "Иванов И.И.",
        location: "Главный зал",
        tag: "Пленарное",
      },
      {
        time: "11:30",
        title: "Регуляторные требования к образованию в сфере информационной безопасности",
        speaker: "Петрова Е.С.",
        location: "Главный зал",
        tag: "Доклад",
      },
      {
        time: "14:00",
        title: "Секция: Образовательные стандарты и компетенции специалиста ИБ",
        location: "Зал А",
        tag: "Секция",
      },
      {
        time: "16:00",
        title: "Круглый стол: Взаимодействие вузов и работодателей",
        location: "Зал Б",
        tag: "Круглый стол",
      },
    ],
  },
  {
    date: "2025-11-02",
    label: "День 2",
    events: [
      {
        time: "09:30",
        title: "Модель непрерывного образования в области ИБ до 2035 года",
        speaker: "Сидоров А.В.",
        location: "Главный зал",
        tag: "Пленарное",
      },
      {
        time: "11:00",
        title: "Практико-ориентированное обучение: опыт ведущих вузов",
        speaker: "Григорьев П.А.",
        location: "Зал А",
        tag: "Доклад",
      },
      {
        time: "13:30",
        title: "Мастер-класс: Методика преподавания дисциплин по ИБ",
        location: "Аудитория 301",
        tag: "Мастер-класс",
      },
      {
        time: "15:30",
        title: "Кибергигиена и культура ИБ в образовательной среде",
        speaker: "Новикова А.П.",
        location: "Зал Б",
        tag: "Доклад",
      },
      {
        time: "17:00",
        title: "Дискуссия: Цифровая трансформация образования по ИБ",
        location: "Главный зал",
        tag: "Дискуссия",
      },
    ],
  },
  {
    date: "2025-11-03",
    label: "День 3",
    events: [
      {
        time: "09:30",
        title: "Развитие компетенций преподавательского состава",
        speaker: "Федорова О.И.",
        location: "Зал А",
        tag: "Доклад",
      },
      {
        time: "11:00",
        title: "Секция: Качество образовательных программ по ИБ",
        location: "Зал Б",
        tag: "Секция",
      },
      {
        time: "14:00",
        title: "Итоговое пленарное заседание. Принятие решений Пленума",
        location: "Главный зал",
        tag: "Пленарное",
      },
      {
        time: "16:00",
        title: "Торжественное закрытие Пленума",
        location: "Главный зал",
        tag: "Пленарное",
      },
    ],
  },
];

const tagColors: Record<string, string> = {
  "Пленарное": "bg-primary/15 text-primary",
  "Доклад": "bg-chart-2/15 text-chart-2",
  "Мастер-класс": "bg-chart-3/15 text-chart-3",
  "Круглый стол": "bg-chart-4/15 text-chart-4",
  "Секция": "bg-chart-5/15 text-chart-5",
  "Дискуссия": "bg-accent/30 text-accent-foreground",
};

export function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section
      id="schedule"
      className="border-t border-border bg-card py-24"
      aria-labelledby="schedule-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            Программа
          </p>
          <h2
            id="schedule-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Программа конференции
          </h2>
          <p className="mt-4 text-muted-foreground">
            Пленарные заседания, секции, мастер-классы и дискуссии на протяжении трёх дней.
          </p>
        </div>

        {/* Download button */}
        <div className="mt-8 flex justify-center">
          <a
            href="#" /* TODO: Replace with actual PDF link */
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/50 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:border-primary/40"
            download
          >
            <Download className="h-4 w-4 text-primary" />
            Скачать программу
          </a>
        </div>

        {/* Day tabs */}
        <div className="mt-8 flex justify-center gap-2" role="tablist">
          {schedule.map((day, index) => (
            <button
              key={day.date}
              type="button"
              role="tab"
              aria-selected={activeDay === index}
              className={`rounded-md px-5 py-2.5 text-sm font-medium transition-colors ${
                activeDay === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveDay(index)}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Events list */}
        <div className="mt-10 mx-auto max-w-3xl" role="tabpanel">
          <ol className="space-y-3">
            {schedule[activeDay].events.map((event, idx) => (
              <li
                key={`${event.time}-${idx}`}
                className="flex gap-4 rounded-lg border border-border bg-background p-5 transition-colors hover:border-primary/30"
              >
                <div className="flex flex-col items-center pt-0.5">
                  <time className="text-sm font-mono font-semibold text-primary">
                    {event.time}
                  </time>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start gap-2">
                    <h3 className="font-semibold text-foreground">
                      {event.title}
                    </h3>
                    {event.tag && (
                      <span
                        className={`inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                          tagColors[event.tag] ?? "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {event.tag}
                      </span>
                    )}
                  </div>
                  {event.speaker && (
                    <p className="mt-1 text-sm text-primary/80">
                      {event.speaker}
                    </p>
                  )}
                  <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Footnote */}
        <p className="mt-8 text-center text-xs text-muted-foreground italic">
          Организатор имеет право вносить изменения в программу.
        </p>
      </div>
    </section>
  );
}
