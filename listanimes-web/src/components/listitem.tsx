interface AnimeItemProps {
    anime: Anime
}

export default function ListItem({anime}:AnimeItemProps){
    return (
        <div className="flex justify-between mt-2">
            <div className="flex gap-2 items-center justify-evenly bg-stone-200 shadow-xl w-250 rounded-lg p-8">
                <h1 className="text-2xl font-black text-stone-800">{anime.name}</h1>
                <p className="text-xl font-medium bg-stone-800 text-stone-200 rounded-lg border-stone-400 border-2 p-2"><strong>Nota: </strong>{anime.nota}</p>
                <p className="text-xl font-medium bg-stone-800 text-stone-200 rounded-lg border-stone-400 border-2 p-2"><strong>Gênero: </strong>{anime.genero}</p>
                <p className="italic text-lg font-black text-stone-800">Está completo: {anime.completo}</p>
            </div>

            <div>
                {/* <CrudDropdown /> */}
            </div>
        </div>
    )
}