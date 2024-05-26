import Image from "next/image";
import localFont from 'next/font/local'
import { InputForm } from "@/components/form";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: '../public/fonts/JejuHallasan-Regular.ttf',
  display: 'swap',
})


export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
      <div className="signup-image">
        <Image
          src="/felega.webp"
          alt="Felega adventure photo"
          width={1024}
          height={1024}
          className="object-contain unselectable"
          style={{ width: '100%', height: '100%' }}
        />
        <div >
          <p className={myFont.className} id="felega-page" >Felega</p>
          <p>Discover More, Travel With Confidence!</p>
        </div>
      </div>
      <div id="form-card" >
        <h1 id="home-welcome" className={myFont.className}>Welcome</h1>
        <InputForm />
      </div>
    </div>
  );
}
