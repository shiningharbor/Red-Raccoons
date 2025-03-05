'use client'

import { useState } from "react";
import Inicio from "./inicio";
import BandPage from "./inte";
import Fechas from "./fechas";
import Momentos from "./momentos";
import Contact from "./cont";

export default function Main() {
    const [step, setStep] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú desplegable

    const tabs = [
        { id: 0, label: "INICIO" },
        { id: 1, label: "INTEGRANTES" },
        { id: 2, label: "MUSICA" },
        { id: 3, label: "MOMENTOS" },
        { id: 4, label: "PROXIMAS FECHAS" },
        { id: 5, label: "CONTRATACIÓNES" },
    ];

    const componetStep = () => {
        switch (step) {
            case 0: return <Inicio setStep={setStep} />;
            case 1: return <BandPage setStep={setStep} />;
            case 2: return <Inicio setStep={setStep} />;
            case 3: return <Momentos />;
            case 4: return <Fechas setStep={setStep} />;
            case 5: return <Contact setStep={setStep} />;
            default: return null;
        }
    };

    return (
        <div className="min-h-screen bg-red-500 flex flex-col">
            {/* Encabezado */}
            <header className="w-full bg-black text-red-500 p-4 flex items-center relative z-50">
                {/* Logo alineado a la izquierda */}
                <img
                    src="/red.png"
                    alt="Logo"
                    className="w-10 h-10 object-cover"
                />

                {/* Menú en computadoras: Centrado */}
                <div className="hidden md:flex flex-1 justify-center space-x-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`px-4 py-2 font-formaDisplay ${step === tab.id ? "underline" : ""}`}
                            onClick={() => setStep(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Botón hamburguesa (solo en móviles) */}
                <button
                    className="md:hidden text-3xl ml-auto"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {/* Menú desplegable en móviles */}
                {menuOpen && (
                    <nav className="absolute top-full left-0 w-full bg-black text-red-500 shadow-md flex flex-col items-center z-50">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className="w-full px-4 py-2 text-center hover:bg-gray-800"
                                onClick={() => { 
                                    setStep(tab.id); 
                                    setMenuOpen(false); // Cierra el menú
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                )}
            </header>

            {/* Contenido dinámico en el main */}
            <main className="flex-1 min-h-0 bg-red-500 flex items-center justify-center relative p-4 h-full">
                <div className="bg-transparent w-full max-w-4xl text-center rounded-lg overflow-hidden">
                    {componetStep()} {/* Renderiza el componente correspondiente al step */}
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full bg-black text-white text-center p-4 mt-10">
                <a href="https://www.instagram.com/red_raccoons/" target="_blank" rel="noopener noreferrer" className="text-lg underline">
                    Síguenos en Instagram
                </a>
            </footer>
        </div>
    );
}