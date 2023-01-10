import { useEffect, useState } from "react";

export default function useFade() {
  const [scrollPosition, setScrollPosition] = useState(0); //scroll 수치

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop); //scroll Top의 위치를 알아내는 구문
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll); //scroll 수치 업데이트
  }, []);

  return scrollPosition;
}