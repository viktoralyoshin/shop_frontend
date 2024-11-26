import { useState, useEffect } from "react";
import useEventListener from "./use-event-listener";

const useMediaQuery = (mediaQuery: string): boolean => {
  const [isMatch, setIsMatch] = useState<boolean>(false);
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(
    null
  );

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsMatch(e.matches);
    list.addEventListener("change", handleChange);

    return () => {
      list.removeEventListener("change", handleChange);
    };
  }, [mediaQuery]);

  return isMatch;
};

export default useMediaQuery;
