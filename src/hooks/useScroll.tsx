import { useEffect, useState } from "react"

export default function useScroll() {
  const [scrolled, setScrolled] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    return () => window.removeEventListener("scroll", scrollProgress);
  }, [])

  const scrollProgress = () => {
     const scrollpx = document.documentElement.scrollTop; 
     const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;

     const scrollLen = Math.ceil(scrollpx / winHeightPx * 100 / 0.468);
     setScrolled(scrollLen)
  }  

  return scrolled;
}