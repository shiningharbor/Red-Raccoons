import { useState } from "react";

const members = [
  {
    id: "abraham",
    name: "Abraham",
    role: "Tecladista",
    description: 'Hola!! Soy @ab_lunna el tecladista qué tal vez algún día supere la pena y se quite la playera en público',
    ig: "https://www.instagram.com/ab_lunna/",
    image: "https://res.cloudinary.com/ddcclrs92/image/upload/v1741121949/Red-Raccoons/Integrantes/tfhumob6oizgegu3xttm.jpg" // Imagen para Abraham
  },
  {
    id: "emilio",
    name: "Emilio",
    role: "Guitarrista",
    description: "Heey! Aquí @parz17p, soy el guitarrista. Ese que siempre se equivoca en los solos.",
    ig: "https://www.instagram.com/parz1val_0_o/",
    image: "https://res.cloudinary.com/ddcclrs92/image/upload/v1741121949/Red-Raccoons/Integrantes/b2snxonohk0cn2oppkbs.jpg" // Imagen para Emilio
  },
  {
    id: "emiliano",
    name: "Emiliano",
    role: "Bajista",
    description: "Hola, soy @emiliano_gutierrezc el Bajista y comediante de #RedRaccoons 🎸🤙🏻",
    ig: "https://www.instagram.com/emiliano_gutierrezc/",
    image: "https://res.cloudinary.com/ddcclrs92/image/upload/v1741121949/Red-Raccoons/Integrantes/msrc0ug7fifbbzsh4er1.jpg" // Imagen para Emiliano
  },
  {
    id: "ivan",
    name: "Ivan",
    role: "Baterista",
    description: "¡Hola! Soy @ivan.hf02 pero tú puedes ubicarme como tu bataco bonito y naco. ❣️🥁",
    ig: "https://www.instagram.com/ivan.hf02/",
    image: "https://res.cloudinary.com/ddcclrs92/image/upload/v1741121949/Red-Raccoons/Integrantes/rl4qo6caeikk9cwmp3zy.jpg" // Imagen para Ivan
  },
];

interface BandPageProps {
  setStep: (step: number) => void;
}

export default function BandPage({ setStep }: BandPageProps) {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  return (
    <div className="relative flex flex-col flex-1 w-full bg-cover bg-center text-black bg-red-500">
      <div className="flex flex-col items-center text-center p-10 bg-transparent bg-opacity-50 flex-grow w-full">
        <h1 className="text-5xl font-bold mb-4">Bienvenidos a nuestra página</h1>
        <p className="max-w-2xl">
          Somos una banda apasionada por la música y el arte. Cada uno de nosotros trae algo único a nuestra propuesta sonora,
          buscando siempre innovar y conectar con nuestro público.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Selecciona un integrante para ver su información</h2>

        <div className="flex gap-4 mt-4 flex-wrap justify-center w-full">
          {members.map((member) => (
            <button
              key={member.id}
              className={`px-4 py-2 border ${selectedMember === member.id ? "bg-black text-red-500" : "bg-transparent border-black"} transition`}
              onClick={() => setSelectedMember(member.id)}
            >
              {member.name} ({member.role})
            </button>
          ))}
        </div>

        {/* Información del integrante seleccionado */}
        <div className="mt-6 bg-white text-black p-4 rounded shadow-md w-full max-w-lg">
          {selectedMember ? (
            <>
              <h3 className="text-xl font-semibold">
                {members.find((m) => m.id === selectedMember)?.name} ({members.find((m) => m.id === selectedMember)?.role})
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: members.find((m) => m.id === selectedMember)?.description || "",
                }}
              />
              {/* Imagen entre la descripción y el botón IG */}
              <div className="mt-4">
                <img
                  src={members.find((m) => m.id === selectedMember)?.image}
                  alt={members.find((m) => m.id === selectedMember)?.name}
                  className="rounded-full w-32 h-32 mx-auto"
                />
              </div>
              {/* Botón de Instagram */}
              <div className="mt-4">
                <a
                  href={members.find((m) => m.id === selectedMember)?.ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-full"
                >
                  Visita mi Instagram
                </a>
              </div>
            </>
          ) : (
            <p>Selecciona un integrante para ver más detalles.</p>
          )}
        </div>
      </div>
    </div>
  );
}
