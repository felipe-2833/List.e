import Footer from "@/components/footer";
import Header from "@/components/header";
import { inter } from "@/styles/fonts";
import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header active="LISTAS"/>
      <main className="flex justify-center p-20">
        <div className="flex flex-col gap-10 bg-white p-16 w-300 rounded-xl justify-center items-center">
          <h1 className={`${inter.className} text-6xl font-bold text-stone-800`}>Sua Lista</h1>
          <p className={`${inter.className} text-xl font-bold text-stone-800`}>lista a ser implementada...</p>
        </div>

      </main>
      <Footer />
    </div>
  );
}
