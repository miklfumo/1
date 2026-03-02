import { GraduationCap, Target, BookOpen, ShieldCheck } from "lucide-react";

const goals = [
  {
    icon: GraduationCap,
    title: "Подготовка кадров",
    description:
      "Подготовка кадров по информационной безопасности с учётом требований государства и работодателей.",
  },
  {
    icon: Target,
    title: "Модель образования до 2035",
    description:
      "Формирование модели непрерывного образования и облика специалиста ИБ до 2035 года.",
  },
  {
    icon: BookOpen,
    title: "Компетенции преподавателей",
    description:
      "Развитие компетенций преподавателей и качества образовательных программ по информационной безопасности.",
  },
  {
    icon: ShieldCheck,
    title: "Культура ИБ и кибергигиена",
    description:
      "Формирование культуры информационной безопасности и кибергигиены в образовательной среде и обществе.",
  },
];

export function GoalsSection() {
  return (
    <section
      id="goals"
      className="border-t border-border bg-card py-24"
      aria-labelledby="goals-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            Ключевые направления
          </p>
          <h2
            id="goals-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Цели конференции
          </h2>
          <p className="mt-4 text-muted-foreground">
            Основные направления работы юбилейного Пленума ФУМО ВО ИБ.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal) => (
            <article
              key={goal.title}
              className="group rounded-lg border border-border bg-background p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                <goal.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">
                {goal.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {goal.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
