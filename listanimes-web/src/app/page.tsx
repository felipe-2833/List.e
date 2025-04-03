import Footer from "@/components/footer";
import Header from "@/components/header";
import ListaNova from "@/components/novalista";
import { inter } from "@/styles/fonts";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <Header active="HOME" />

      <main className="flex flex-col gap-16 justify-center items-center p-20">


        <div className="flex flex-col gap-10 bg-white p-16 w-300 rounded-xl justify-center items-center">
          <h1 className={`${inter.className} text-6xl font-bold text-stone-800`}>Bem-vindo ao seu Hub de Animes favorito! </h1>
          <p className={`${inter.className} text-xl font-medium text-stone-800`}>Se você é fã de animes e quer organizar suas séries, descobrir novas recomendações ou simplesmente compartilhar suas impressões com outros fãs, este é o lugar certo para você. No nosso site, você pode criar listas personalizadas, acompanhar seu progresso nas séries e encontrar animes que combinam com seu gosto. Junte-se à nossa comunidade e comece sua jornada pela cultura otaku de uma maneira única e interativa!</p>
          <ListaNova />
        </div>
        <div className="flex flex-col gap-2 bg-white p-8 w-80 rounded-xl justify-center items-center">
          <h3 className="text-stone-800 font-black">Procurando novos animes?</h3>
          <Link className="bg-stone-800 text-stone-50 p-3 text-2xl font-bold rounded-md hover:bg-stone-600" href={"/descubra"}>DESCUBRA</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
