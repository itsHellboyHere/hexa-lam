"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();
  const prevPath = useRef(null);

  useEffect(() => {
    if (prevPath.current && prevPath.current !== pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    prevPath.current = pathname;
  }, [pathname]);

  return null;
}