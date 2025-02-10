import type { ReactNode } from "react";

interface SectionProps {
  elId: string;
  title: string;
  docLink?: string;
  children?: ReactNode;
}

export default function Section({
  elId,
  title,
  docLink,
  children,
}: SectionProps) {
  return (
    <section id={elId}>
      <div className="p-5 border-rounded flex flex-col">
        <a
          className="font-semibold text-blue-400 hover:underline"
          href={docLink}
          rel="noopener noreferrer"
        >
          {title}
        </a>
        {children}
      </div>
    </section>
  );
}
