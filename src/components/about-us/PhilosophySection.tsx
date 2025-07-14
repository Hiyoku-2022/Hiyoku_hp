import * as React from "react";

interface PhilosophySectionProps {
  title?: string;
  content?: React.ReactNode;
  isTitle?: boolean;
}

export function PhilosophySection({
  title,
  content,
  isTitle,
}: PhilosophySectionProps) {
  const baseClasses =
    "self-stretch tracking-wider text-gray-600 max-md:tracking-wide max-sm:tracking-wide";

  if (isTitle && title) {
    return (
      <section
        className={`${baseClasses} text-base font-medium leading-7 max-md:text-base max-sm:text-sm`}
      >
        <h2>{title}</h2>
      </section>
    );
  }

  if (content) {
    return (
      <section
        className={`${baseClasses} text-base leading-7 max-md:text-base max-sm:text-sm max-sm:leading-6`}
      >
        <p>{content}</p>
      </section>
    );
  }

  return null;
}
