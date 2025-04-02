"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function NovoItem() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button 
                onClick={() => setIsOpen(true)} 
                className="  p-3 text-xl font-bold rounded-md hover:scale-110"
            >
                <FaPlus size={20} color="black" />
            </button>

            {isOpen && (
                <div 
                    className="fixed inset-0 flex justify-center items-center z-50"
                    onClick={() => setIsOpen(false)} 
                >
                    <div 
                        className="p-6 w-96 mx-auto bg-white shadow-xl rounded-lg relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="italic text-2xl font-black mb-4 text-stone-800">Novo Item</h2>
                        <form action="" className="flex flex-col gap-4">
                            <label className="flex flex-col text-stone-800">
                                Nome
                                <input type="text" className="bg-stone-600 text-white p-2 rounded mt-1 focus:outline-none border-none" />
                            </label>
                            <label className="flex flex-col text-stone-800">
                                Completo?
                                <input type="checkbox" className="w-5 h-5 " />
                            </label>
                            <label className="flex flex-col text-stone-800">
                                Gênero
                                <input type="text" className="bg-stone-600 text-white p-2 rounded mt-1 focus:outline-none border-none" />
                            </label>
                            <label className="flex flex-col text-stone-800">
                                Nota
                                <input type="number" className="bg-stone-600 text-white p-2 rounded mt-1 focus:outline-none border-none" />
                            </label>
                            <button type="submit" className="bg-stone-800 text-white p-2 rounded hover:bg-stone-600">
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
