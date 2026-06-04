"use client";

import { useEffect, useMemo, useState } from "react";

const names = ["王志文", "Wang Zhiwen", "WangZhiwen"];

function renderColoredName(value: string) {
  return value.split("").map((char, index) => {
    const shouldAccent = value === "WangZhiwen" && (char === "W" || char === "Z");

    return (
      <span
        key={`${char}-${index}`}
        className={shouldAccent ? "text-cyan-300 drop-shadow-[0_0_18px_rgba(103,232,249,0.45)]" : undefined}
      >
        {char}
      </span>
    );
  });
}

export default function TypewriterName() {
  const [nameIndex, setNameIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(names[0].length);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentName = names[nameIndex];
  const visibleName = useMemo(
    () => currentName.slice(0, visibleLength),
    [currentName, visibleLength],
  );

  useEffect(() => {
    const isComplete = visibleLength === currentName.length;
    const isEmpty = visibleLength === 0;
    const delay = isComplete && !isDeleting ? 1200 : isDeleting ? 58 : 92;

    const timer = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setNameIndex((index) => (index + 1) % names.length);
        return;
      }

      setVisibleLength((length) => length + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [currentName.length, isDeleting, visibleLength]);

  return (
    <span className="flex h-full w-full items-center whitespace-nowrap">
      <span className="inline-block min-w-[5.25ch]">{renderColoredName(visibleName)}</span>
      <span className="ml-2 h-[0.88em] w-[0.08em] animate-caret bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.75)]" />
    </span>
  );
}
