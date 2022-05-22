import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = ({
  root = null,
  rootMargin = "0px",
  threshold = 0
}) => {
  //Each entry describes an intersection change for one observed
  // target element:
  const [entry, setEntry] = useState(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        setEntry(target);
      },
      { root, rootMargin, threshold }
    );
    if (targetRef?.current) observer.observe(targetRef?.current);

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold]);

  return [targetRef, entry];
};

export default useIntersectionObserver;
