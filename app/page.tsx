import MouseMorph from "@/components/mouse-morph";

export default function Home() {
  return (
    <>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <MouseMorph />
        </div>
        <div className="w-full h-full top-0 left-0 z-50 absolute flex items-center justify-center">
          <h2 className="text-8xl text-white font-playfair pl-4 pr-4">
            creative design . creative code
          </h2>
        </div>
      </div>
    </>
  );
}
