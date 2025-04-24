import { getAnimes } from "@/actions/animes-actions";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ListItem from "@/components/listitem";
import NovoItem from "@/components/novoitem";
import Sugestoes from "@/components/sugestoes";
import { inter } from "@/styles/fonts";

export default async function AnimesPage() {
  const response = await getAnimes();
  const data: Anime[] = response.content;



  return (
    <div className="min-h-screen flex flex-col">
      <Header active="LISTAS" />

      <main className="flex gap-16 justify-center items-center p-20">
        <div className="flex flex-col gap-10 bg-stone-200 p-16 w-300 rounded-xl justify-center items-center">
          <div className="flex items-center gap-10 justify-between">
            <h1 className={` text-4xl font-black text-stone-800`}>SUA LISTA</h1>
            <NovoItem />
          </div>
          {data.length == 0 ?
            <p className={`${inter.className} text-xl font-bold text-stone-800`}>lista a ser implementada...</p> :
            data.map(anime => <ListItem key={anime.id} anime={anime} />)
          }
        </div>
        <Sugestoes />
      </main>
      <Footer />
    </div>
  )
}
