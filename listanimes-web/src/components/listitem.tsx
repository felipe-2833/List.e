interface AnimeItemProps {
    anime: Anime
}

export default function ListItem({anime}:AnimeItemProps){
    return (
        <div className="flex justify-between mt-2">
            <div className="flex gap-2">
                <span>{anime.name}</span>
            </div>

            <div>
                {/* <CrudDropdown /> */}
            </div>
        </div>
    )
}