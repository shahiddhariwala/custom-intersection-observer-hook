import { useEffect } from "react";
import "./styles.css";
import useIntersectionObserver from "./useIntersectionObserver";

export default function App() {
  const [targetRef, entry] = useIntersectionObserver({
    root: document,
    threshold: 0.5
  });

  useEffect(() => {
    if (!entry) return;
    if (entry?.isIntersecting) {
      document.getElementById("appId").style.backgroundColor = "yellow";
    } else {
      document.getElementById("appId").style.backgroundColor = "green";
    }
  }, [entry?.isIntersecting]);
  return (
    <div className="App" id="appId">
      <h1>Intersection Observer Demo!</h1>
      <div ref={targetRef}>Hello World</div>
    </div>
  );
}
