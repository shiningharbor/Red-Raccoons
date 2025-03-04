'use client'

import { useState } from "react"
import Inicio from "./inicio";
import BandPage from "./inte"
import Fechas from "./fechas"
import Momentos from "./momentos"
import Contact from "./cont"



export default function Main() {
    const [step, setStep] = useState(0);

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
            case 0:
                return <Inicio setStep={setStep} />;
            case 1:
                return <BandPage setStep={setStep} />;
            case 2:
                return <Inicio setStep={setStep} />;
            case 3:
                return <Momentos/>;
            case 4:
                return <Fechas setStep={setStep} />;
            case 5:
                return <Contact setStep={setStep} />;
            default:
                return null;
        }
    };
{/*             case 0:
                return <Inicio setStep={setStep} />;
            case 1:
                return <Form setStep={setStep} />;
            case 2:
                return <Preguntas setStep={setStep} setArchetype={setArchetype} setPlace={setPlace} />;
            case 3:
                return <VideoRecorder archetype={archetype} place={place} setStep={setStep} />;
            case 4:
                return <Maxi archetype={archetype} setStep={setStep} />;
            case 5:
                return <End archetype={archetype} setStep={setStep} />;
            default:
                return null;
        } */}
    return (
<div className="min-h-screen bg-red-500 flex flex-col">
    {/* Encabezado */}
    <header className="w-full bg-black text-red-500 p-4 flex relative">
        {/* Imagen alineada a la izquierda */}
        <img
        src="/red.png"
        alt="Logo"
        className="w-10 h-10 absolute left-4 object-cover"
        />

        {/* Contenedor de botones centrado */}
        <div className="mx-auto flex space-x-4">
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
    </header>

    {/* Contenido dinámico en el main */}
    <main className="flex-1 min-h-0 bg-red-500 flex items-center justify-center relative p-4 h-full">
        <div className="bg-transparent  w-full max-w-4xl text-center rounded-lg overflow-hidden">
            {componetStep()} {/* Renderiza el componente correspondiente al step */}

            {/*<img
                    src="/Pie.png" // Cambia esto a la ruta de tu imagen
                    alt="Descripción de la imagen"
                    className="absolute bottom-0 left-0 w-auto h-auto object-contain"
                    style={{
                        width: '450px',
                        height: 'auto',
                        marginTop: '10px',
                        marginLeft: '50px',
                        marginRight: '10px',
                        marginBottom: '50px'
                    }}
                />*/    }
        </div>
        
    </main>
    <footer className="w-full bg-black text-white text-center p-4 mt-10">
    <a href="https://www.instagram.com/red_raccoons/" target="_blank" rel="noopener noreferrer" className="text-lg underline">
        Síguenos en Instagram
    </a>
</footer>
</div>
    );
}