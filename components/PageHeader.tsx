import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  lead?: string;
  action?: ReactNode;
}

export default function PageHeader({ title, lead, action }: PageHeaderProps) {
  return (
    <div className="reveal">
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="text-[28px] leading-tight">{title}</h1>
        {action}
      </div>
      {lead && <p className="mt-3 max-w-[40rem] text-pretty text-muted">{lead}</p>}
    </div>
  );
}
