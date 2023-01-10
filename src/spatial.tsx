import useFade from "./hooks/ useFade";
import useScroll from "./hooks/useScroll";
import './spatial.css'

function Spatial() {
    const scroll = useScroll();
    const scrollPosition = useFade();

  return(
    <div className="Spatial">
      <div className="Spatial-sticky-container">
        <header className="spatial-sticky">
          <div className="spatial-slide-container">
            <div className="spatial-slide1"><img className="img" src={`https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/large/${scroll.toString().padStart(4, '0')}.jpg`} alt="php" /></div>
            <div className="spatial-slide2"><h1 className={scrollPosition > 80 ? "scroll-text" : "scrolled-text"}>온몸을 휘감는 3차원 오디오의 <br/> 개인 맞춤형 공간 음향, </h1></div>
            {/* className을 삼항 연산자로 원하는 수치만큼 스크롤이 되면 바꿔주게 만든다 */}
          </div>
        </header>
      </div>
    </div>
  )

}

export default Spatial;
