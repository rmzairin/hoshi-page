"use client";

import { useEffect } from "react";

export default function CursorTrail() {
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const star = document.createElement("span");
      star.textContent = "★";
      star.className = "cursor-star";
      star.style.left = `${e.pageX}px`;
      star.style.top = `${e.pageY}px`;

      document.body.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 600);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}