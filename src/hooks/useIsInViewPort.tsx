import React, { useEffect, useMemo, useState } from "react";

export const useIsInViewport = (ref: React.RefObject<HTMLElement | null>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  if (!ref.current) {
    return;
  }

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );
  useEffect(() => {
    ref.current && observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};
