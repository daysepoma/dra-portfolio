import { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isPointerRef = useRef(false);
  const rafRef = useRef<number>(0);

  const updateCursor = useCallback((x: number, y: number, pointer: boolean) => {
    const el = cursorRef.current;
    if (!el) return;
    el.style.left = `${x - 10}px`;
    el.style.top = `${y - 10}px`;
    if (pointer !== isPointerRef.current) {
      isPointerRef.current = pointer;
      el.style.transform = pointer ? "scale(1.5)" : "scale(1)";
      el.style.opacity = pointer ? "0.8" : "1";
    }
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const target = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
        let pointer = false;
        if (target) {
          const cursor = window.getComputedStyle(target).cursor;
          pointer = /pointer$|zoom-in$/.test(cursor);
        }
        updateCursor(e.clientX, e.clientY, pointer);
      });
    };

    const handleLeave = () => {
      updateCursor(-100, -100, false);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [updateCursor]);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] bg-accent rounded-full"
      style={{
        width: 20,
        height: 20,
        left: -100,
        top: -100,
        transition: "transform 0.15s ease, opacity 0.15s ease",
        willChange: "left, top, transform",
      }}
    />
  );
}
