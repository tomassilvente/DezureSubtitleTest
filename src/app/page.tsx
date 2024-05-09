import { Audio } from "./components/Audio";
import 'animate.css'

export default function Home() {
  return (
    <main 
    style={{
      backgroundRepeat: "no-repeat",
      backgroundSize: "200px 420px",
      backgroundPosition: "left center, right center",
    }}
      className={`flex min-h-screen flex-col items-center lg:px-24 py-10 bg-[#afcedf] lg:bg-[url('/girl.png'),url('/boy.png')] w-screen `}>
      <h1 className="sombra lg:text-5xl text-3xl font-semibold animate__backInDown animate__animated text-white text-center pb-10 lg:pb-0">SUBTITLES APP</h1>
      <Audio />
    </main>
  );
}
