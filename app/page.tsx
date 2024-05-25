import Image from "next/image";
import Reviewform from "./components/Reviewform";

export default function Home() {
  return (
    <main>
      <div className="main-frame w-full min-h-screen flex justify-center items-center px-2 py-8">
      <Reviewform/>
      </div>
    </main>
  );
}
