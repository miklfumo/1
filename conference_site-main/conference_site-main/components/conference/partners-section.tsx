import React from "react"
import { Shield, Building2, Landmark, BookOpen, Server, GraduationCap, Cpu, Globe, Database, Lock } from "lucide-react";

type PartnerItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

const organizers: PartnerItem[] = [
  { name: "ФУМО ВО ИБ", icon: Shield },
  { name: "МИРЭА", icon: GraduationCap },
  { name: "Минобрнауки России", icon: Landmark },
];

const partners: PartnerItem[] = [
  { name: "Positive Technologies", icon: Server },
  { name: "Лаборатория Касперского", icon: Cpu },
  { name: "InfoWatch", icon: Lock },
  { name: "Код Безопасности", icon: Database },
];

const withParticipation: PartnerItem[] = [
  { name: "ФСТЭК России", icon: Building2 },
  { name: "ФСБ России", icon: Shield },
  { name: "АПКИТ", icon: Globe },
  { name: "РАН", icon: BookOpen },
];

function PartnerGrid({ items }: { items: PartnerItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex flex-col items-center justify-center gap-3 rounded-lg border border-border bg-background/50 p-5 transition-colors hover:border-primary/40"
        >
          <item.icon className="h-7 w-7 text-muted-foreground" />
          <span className="text-center text-sm font-medium text-muted-foreground">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="border-t border-border py-24"
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            Партнёры и организаторы
          </p>
          <h2
            id="partners-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Организаторы и партнёры
          </h2>
        </div>

        {/* Organizers */}
        <div className="mt-16">
          <h3 className="mb-6 text-center text-sm font-semibold tracking-wider text-foreground uppercase">
            Организаторы
          </h3>
          <PartnerGrid items={organizers} />
        </div>

        {/* Partners */}
        <div className="mt-12">
          <h3 className="mb-6 text-center text-sm font-semibold tracking-wider text-foreground uppercase">
            Партнёры
          </h3>
          <PartnerGrid items={partners} />
        </div>

        {/* With participation */}
        <div className="mt-12">
          <h3 className="mb-6 text-center text-sm font-semibold tracking-wider text-foreground uppercase">
            При участии
          </h3>
          <PartnerGrid items={withParticipation} />
        </div>

        <div className="mt-12 text-center">
          <a
            href="#registration"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Стать партнёром
          </a>
        </div>
      </div>
    </section>
  );
}
