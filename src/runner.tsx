/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from "react"
import './runner.css'

function Runner() {
  // const [count, setCount] = useState(1);
  const [scrolled, setScrolled] = useState(1);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPositions, setScrollPositions] = useState(0); //scroll 수치


  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  const updateScrolled = () => {
    setScrollPositions(window.scrollY || document.documentElement.scrollTop); //scroll Top의 위치를 알아내는 구문
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScrolled); //scroll 수치 업데이트
  }, []);



  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    return () => window.removeEventListener("scroll", scrollProgress);
  }, [])

  const scrollProgress = () => {

     const scrollpx = document.documentElement.scrollTop;
     const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;

     const scrollLen = Math.ceil(scrollpx / winHeightPx * 100 / 1.0);
     setScrolled(scrollLen)
   }

  return(
    <div className="Runner">
      <div className="Runner-sticky-container">
        <header className="runner-sticky">
          <div className="runner-slide-container">
            {/* <img src={`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`} alt="pho"/> */}
            <div className="runner-slide1"><img className="img" src={`https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/runner/large/${scrolled.toString().padStart(4, '0')}.jpg`} alt="phot" /></div>
            <div className="runner-slide2"><h1 className={scrollPosition > 760 ? "scrolled-text1" : "scroll-text1"}>비가 와도, <br/> 땀이 비 오듯 해도 <br/> 끄떡없는 방수 기능까지.</h1></div>
            <div className="runner-slide3"><h1 className={scrollPositions > 810 ? "scroll-text2" : "scrolled-text2"}>사뭇 마법 같은 <br/> 경험을 선사합니다.</h1></div>
          </div>
        </header>
      </div>
    </div> 
  )

}

export default Runner;

  
  // useEffect(() => {
  //   if(count < 214) {
  //     setTimeout(() => {
  //       setCount(count + 1)
  //     }, 50);
  //   } else {
  //     setCount(1)
  //   }
  // }, [count])

