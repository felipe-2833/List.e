"use client";

import { useState } from "react";

export default function ListaNova() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button 
                onClick={() => setIsOpen(true)} 
                className="bg-stone-800 text-white p-3 text-xl font-bold rounded-md hover:bg-stone-600"
            >
                Criar Nova Lista
            </button>
            {isOpen && (
                <div 
                    className="fixed inset-0 flex justify-center items-center z-50"
                    onClick={() => setIsOpen(false)} 
                >
                    <div 
                        className="p-6 w-96 mx-auto bg-stone-200 shadow-lg rounded-lg relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="italic text-2xl font-black mb-4 text-stone-800">Nova Lista</h2>
                        <form action="" className="flex flex-col items-center gap-4">
                            <label className="flex flex-col text-stone-800">
                                Qual será o nome da lista?
                                <input type="text" className="bg-stone-600 text-white p-2 rounded mt-1 focus:outline-none border-none" />
                            </label>
                            <label className="flex flex-col text-stone-800">
                                Qual será o tema?
                                <input type="text" className="bg-stone-600 text-white p-2 rounded mt-1 focus:outline-none border-none" />
                            </label>
                            <button type="submit" className="bg-stone-800 text-white p-2 rounded w-30 font-black hover:bg-stone-600">
                                CRIAR
                            </button>
                        </form>

                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="absolute top-2 right-2 text-stone-800 text-lg font-bold"
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
