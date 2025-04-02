"use client";

import { createAnime } from "@/actions/animes-actions";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

const initialState = {
    values: {
        name: "",
        nota: 0,
        genero: "",
        completo: false
    },
    errors: {
        name: "",
        nota: "",
        genero: "",
        completo: ""
    }
};

export default function NovoItem() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const router = useRouter(); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [name]: type === "checkbox" ? checked : value
            }
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const form = new FormData();
        form.append("name", formData.values.name);
        form.append("nota", String(formData.values.nota));
        form.append("genero", formData.values.genero);
        form.append("completo", String(formData.values.completo));

        const result = await createAnime(initialState, form);

        if (result?.errors) {
            setFormData((prev) => ({
                ...prev,
                errors: result.errors
            }));
        } else {
            setIsOpen(false);
            alert("Anime criado com sucesso!");
            router.refresh(); 
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="p-3 text-xl font-bold rounded-md hover:scale-110"
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
                        <h2 className="italic text-2xl font-black mb-4 text-stone-800">
                            Novo Item
                        </h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <label className="flex flex-col text-stone-800">
                                Nome
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.values.name}
                                    onChange={handleChange}
                                    className="bg-stone-600 text-white p-2 rounded mt-1 focus:outline-none border-none"
                                />
                                {formData.errors.name && (
                                    <span className="text-red-600">{formData.errors.name}</span>
                                )}
                            </label>
                            <label className="flex flex-col text-stone-800">
                                Completo?
                                <input
                                    type="checkbox"
                                    name="completo"
                                    checked={formData.values.completo}
                                    onChange={handleChange}
                                    className="w-5 h-5"
                                />
                            </label>
                            <label className="flex flex-col text-stone-800">
                                Gênero
                                <input
                                    type="text"
                                    name="genero"
                                    value={formData.values.genero}
                                    onChange={handleChange}
                                    className="bg-stone-600 text-white p-2 rounded mt-1 focus:outline-none border-none"
                                />
                                {formData.errors.genero && (
                                    <span className="text-red-600">{formData.errors.genero}</span>
                                )}
                            </label>
                            <label className="flex flex-col text-stone-800">
                                Nota
                                <input
                                    type="number"
                                    name="nota"
                                    value={formData.values.nota}
                                    onChange={handleChange}
                                    className="bg-stone-600 text-white p-2 rounded mt-1 focus:outline-none border-none"
                                />
                                {formData.errors.nota && (
                                    <span className="text-red-600">{formData.errors.nota}</span>
                                )}
                            </label>
                            <button
                                type="submit"
                                className="bg-stone-800 text-white p-2 rounded hover:bg-stone-600"
                            >
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
