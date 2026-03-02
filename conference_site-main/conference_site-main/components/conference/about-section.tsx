export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-border py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            О конференции
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            30-й юбилейный Пленум ФУМО ВО ИБ
          </h2>
          <p className="mt-6 text-pretty text-muted-foreground leading-relaxed">
            Пленум Федерального учебно-методического объединения в сфере высшего
            образования по информационной безопасности — ключевое ежегодное
            мероприятие, объединяющее представителей образовательных организаций,
            федеральных органов исполнительной власти, отраслевых компаний
            и экспертного сообщества.
          </p>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            В 2025 году Пленум проводится в юбилейном, 30-м формате. За три
            десятилетия ФУМО ВО ИБ внесло значительный вклад в формирование
            системы подготовки кадров в области информационной безопасности,
            развитие образовательных стандартов и методического обеспечения
            учебного процесса.
          </p>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            Пленум является площадкой для обсуждения актуальных вопросов
            подготовки специалистов по информационной безопасности, обмена опытом
            между вузами, взаимодействия с работодателями и регуляторами.
          </p>
        </div>
      </div>
    </section>
  );
}
