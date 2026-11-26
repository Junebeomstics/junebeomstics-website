import { DatedEntry } from '@/data/cv-data';

interface EntryListProps {
  entries: DatedEntry[];
}

/** Date gutter on the left, optional label then text on the right. */
export default function EntryList({ entries }: EntryListProps) {
  return (
    <ul>
      {entries.map((entry) => (
        <li
          key={`${entry.date}-${entry.text}`}
          className="grid gap-x-6 gap-y-0.5 border-t border-line py-3 first:border-t-0 sm:grid-cols-[8.75rem_1fr]"
        >
          <p className="text-[13px] tabular-nums text-subtle">{entry.date}</p>
          <p className="text-pretty text-muted">
            {entry.title && <span className="font-medium text-fg">{entry.title}. </span>}
            {entry.text}
          </p>
        </li>
      ))}
    </ul>
  );
}
