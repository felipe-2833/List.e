"use client";

import { useState } from "react";
import { FaBell, FaClock } from "react-icons/fa";

export default function Notificacoes() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Ícone para abrir as notificações */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white text-xl p-2 hover:text-gray-300"
            >
                <FaBell size={24} />
            </button>

            {/* Caixa de notificações posicionada abaixo do ícone */}
            {isOpen && (
                <div 
                    className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 border border-gray-300"
                >
                    <h1 className="text-stone-900 text-lg font-bold mb-3 flex justify-between">
                        Notificações
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="text-stone-800 text-lg font-bold"
                        >
                            ✖
                        </button>
                    </h1>

                    {/* Notificação */}
                    <div className="flex items-center gap-4 p-3 bg-gray-100 rounded-lg shadow-md">
                        <FaClock size={30} className="text-stone-800" />
                        <div className="flex flex-col">
                            <h3 className="text-stone-800 font-light text-md">Sua tarefa vencerá amanhã!</h3>
                            <p className="text-stone-600 text-sm">Há 8 minutos</p>
                        </div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full shadow-md"></div>
                    </div>
                </div>
            )}
        </div>
    );
}
