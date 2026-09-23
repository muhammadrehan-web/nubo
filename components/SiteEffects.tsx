"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    let alive = true;
    (async () => {
      const { initNubo } = await import("@/lib/nubo-effects");
      if (alive) initNubo();
    })();
    return () => {
      alive = false;
    };
  }, [pathname]);

  return null;
}
