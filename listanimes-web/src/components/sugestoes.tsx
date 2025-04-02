export default function Sugestoes() {
    return (
        <div className="bg-stone-800 p-6 flex flex-col w-50 gap-4 rounded-md items-center">
            <h1 className="text-stone-50 text-2xl font-black">SUGESTÕES</h1>
            <div className="bg-stone-500 flex rounded-md w-40 p-2">
                <div className="text-stone-50 rounded-lg w-12 h-12"></div>
                <div>
                    <h2 className="text-2xl font-bold">Titulo</h2>
                    <h2>Nota</h2>
                </div>
            </div>
        </div>
    );
}