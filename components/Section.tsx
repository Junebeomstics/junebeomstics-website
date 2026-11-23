import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  id?: string;
  action?: ReactNode;
  children: ReactNode;
}

export default function Section({ title, id, action, children }: SectionProps) {
  return (
    <section id={id} className="mt-12">
      <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-line pb-2">
        <h2 className="text-[18px]">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}
