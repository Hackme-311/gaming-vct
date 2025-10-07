import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';

function App() {
 let [showContent,setShowContent] = useState(false);
  useGSAP(()=> {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group",{
      rotate: 10,
      duration:2,
      ease:"power4.easeInOut",
      transformOrigin:"50% 50%"
    })
    .to(".vi-mask-group",{
      scale:10,
      duration:2,
      delay:-1.8,
      ease:"Expo.easeInOut",
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate:function(){
        if(this.progress() >= .9){
          document.querySelector(".svg").remove();
          setShowContent(true)
          this.kill()
        }
      },
    });
  });
  useGSAP(()=>{
    if(!showContent) return;

    gsap.to(".main",{
    scale:1,
    rotate:0,
    duration:2,
    delay:-1,
    ease:"expo.easeInOut",
    
   });
     
    gsap.to(".sky",{
    scale:1,
    rotate:0,
    duration:2,
    delay:1.5,
    ease:"expo.easeInOut",
    
   });

   gsap.to(".bg",{
    scale:1,
    rotate:0,
    duration:2,
    delay:"",
    ease:"expo.easeInOut",
    
   });

   gsap.to(".girl",{
    x:"-48%",
    scale:0.80,
    rotate:0,
    duration:2,
    ease:"expo.easeInOut",
    
   });
   gsap.to(".text",{
    scale:0.80,
    x:"-48%",
    rotate:0,
    duration:2,
    delay:"1",
    ease:"expo.easeInOut",
    
   });
    const main = document.querySelector(".main");
  
    main?.addEventListener("mousemove", function(e) {
    console.log(e.clientX  / window.innerWidth - 0.5) * 40;
    gsap.to(".imagediv .text",{
      x:`${xMove * 0.4}%`
    });
    gsap.to(".sky",{
      x: xMove * 1.7,
    });
  });  
},[showContent]);
 
  return (
    <>
      <div className="svg flex item-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="/public/bg.png"  // ✅ Use `/bg.png` or full path for static assets
            width="800"
            height="600"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"  // ✅ "viMask" not "vimask" (case-sensitive)
          />
        </svg>
      </div>
      {showContent && 
      <div className="main w-full rotate-[-10deg] scale-[1.7]">
      <div className="landing overflow-hidden relative w-full h-screen bg-black">
      <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
      <div className="logo flex gap-7 ">
      <div className="lines flex flex-col gap-[5px]">
       <div className="line w-10 h-1 bg-white"></div>
       <div className="line w-8 h-1 bg-white"></div>
       <div className="line w-6 h-1 bg-white"></div>
      </div>
      <h3 className="text-4xl text-white -m-[7px] leading none ">Rockster</h3>
      </div>
      </div>
      <div className="imagediv overflow-hidden w-full h-screen relative">
      <img 
      className="sky scale-[1.5] rotate-[-15deg] absolute top-0 left-0 w-full h-screen object-cover" src="./sky.png"
      />
      <img 
      className="bg scale-[1.7] rotate-[-20deg] absolute top-0 left-0 w-full h-screen object-cover" src="./bg.png"
      />
        <div className="text absolute rotate-[20deg] text-white top-0 left-1/2 flex flex-col gap-1 -translate-x-1/2">
        <h1 className="text-[7rem] leading-none -ml-30">grand</h1>
        <h1 className="text-[7rem] leading-none ml-20">theft</h1>
        <h1 className="text-[7rem] leading-none -ml-20">auto</h1>
      </div>
      
       <img 
       className="girl absolute -bottom-[50%] left-1/2 -translate-x-1/2 scale-[2] rotate-[-20deg] " src="./girlbg.png"
       />

      </div>
      <div className="btmbar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent">
        <div className="flex gap-4 items-center">
          <i className=" text-3xl ri-arrow-down-line"></i>
          <h3 className="text-xl  font-[Helvetica_Now_Display]">Scrolldown</h3>
        </div>
        <img className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[50px]" src="./public/ps5.png"></img>
      </div>
      </div>
      <div className="w-full h-screen bg-black flex items-center justify-center ">
        <div className="cntnr flex w-full h-[80%] ">
          <div className="limg w-1/2 h-[80%] relative ">
        <img className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./imag.png" alt="" />
        </div>
        <div className="rg text-white h-full w-1/2 py-30">
          <h1 className="text-4xl">Still Running,</h1>
          <h1 className="text-4xl">not a big diel</h1>
          <p className="mt-10 font-[Helvetica]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sit. 
            Ipsum ad natus commodi dolore dolorem! Nisi, officia aliquam quae vitae, 
            amet alias beatae ab harum blanditiis nobis, sapiente labore.</p>
           <p className="mt-10 font-[Helvetica]">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Expedita atque alias provident, reprehenderit ut perspiciatis aliquam harum.
             Distinctio tempora placeat iure 
            voluptatibus ipsam nostrum voluptates quaerat fugit ducimus! Totam, sit.</p>
            <p className="mt-10 font-[Helvetica]">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Expedita atque alias provident, reprehenderit ut perspiciatis aliquam harum.
             Distinctio tempora placeat iure 
            voluptatibus ipsam nostrum voluptates quaerat fugit ducimus! Totam, sit.</p> 
            <button className="btn mt-10 bg-yellow-500 px-10 py-6 text-2xl text-black">download now</button>
        </div>
        </div> 
      </div>
      </div>}
    </>
  );
}

export default App;
