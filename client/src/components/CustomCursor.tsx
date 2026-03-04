import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      if (el) {
        const cursor = window.getComputedStyle(el).cursor;
        // consider any value that ends with "pointer" or is "zoom-in" etc.
        setIsPointer(/pointer$|zoom-in$/.test(cursor));
      } else {
        setIsPointer(false);
      }
    };
    const handleLeave = () => {
      // when pointer leaves window hide it
      setPos({ x: -100, y: -100 });
      setIsPointer(false);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed z-[9999] bg-accent rounded-full transition-all duration-150 ${
        isPointer ? "scale-150 bg-accent/80" : "scale-100"
      }`}
      style={{
        width: 20,
        height: 20,
        transform: `translate(${pos.x - 10}px, ${pos.y - 10}px)`,
      }}
    />
  );
}
