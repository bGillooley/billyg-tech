"use client";

import { useRef, useEffect } from "react";

export default function MouseMorph() {
  const mousey = useRef<HTMLDivElement>(null);
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;
  useEffect(() => {
    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (mousey.current) {
        mousey.current.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(() => {
        move();
      });
    }
    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });
    move();
  }, []);

  return <div ref={mousey} className="interactive"></div>;
}
