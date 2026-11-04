// Contenido original recuperado del proyecto. Actualiza aquí las fichas de la banda.
export type BandMember = {
  id: string;
  name: string;
  role: string;
  number: string;
  description: string;
  instagram: string;
  image: string;
};

export const members: BandMember[] = [
  {
    id: "abraham",
    number: "01",
    name: "Abraham",
    role: "Tecladista",
    description: "Hola, soy @ab_lunna, el tecladista que tal vez algún día supere la pena y se quite la playera en público.",
    instagram: "https://www.instagram.com/ab_lunna/",
    image: "https://res.cloudinary.com/ddcclrs92/image/upload/v1741121949/Red-Raccoons/Integrantes/tfhumob6oizgegu3xttm.jpg",
  },
  {
    id: "emilio",
    number: "02",
    name: "Emilio",
    role: "Guitarrista",
    description: "Hey, soy el guitarrista. Ese que siempre se equivoca en los solos.",
    instagram: "https://www.instagram.com/parz1val_0_o/",
    image: "https://res.cloudinary.com/ddcclrs92/image/upload/v1741121949/Red-Raccoons/Integrantes/b2snxonohk0cn2oppkbs.jpg",
  },
  {
    id: "emiliano",
    number: "03",
    name: "Emiliano",
    role: "Bajista",
    description: "Hola, soy @emiliano_gutierrezc, el bajista y comediante de Red Raccoons. 🎸🤙🏻",
    instagram: "https://www.instagram.com/emiliano_gutierrezc/",
    image: "https://res.cloudinary.com/ddcclrs92/image/upload/v1741121949/Red-Raccoons/Integrantes/msrc0ug7fifbbzsh4er1.jpg",
  },
  {
    id: "ivan",
    number: "04",
    name: "Iván",
    role: "Baterista",
    description: "¡Hola! Soy @ivan.hf02, pero tú puedes ubicarme como tu bataco bonito y naco. ❣️🥁",
    instagram: "https://www.instagram.com/ivan.hf02/",
    image: "https://res.cloudinary.com/ddcclrs92/image/upload/v1741121949/Red-Raccoons/Integrantes/rl4qo6caeikk9cwmp3zy.jpg",
  },
];

export type MediaItem = { id: string; url: string; type: "video" | "image"; title: string };

// Clips compartidos en el sitio original. Se usan aunque Cloudinary no esté configurado.
export const originalMoments: MediaItem[] = [
  {
    id: "clip-01",
    title: "Video 01",
    type: "video",
    url: "https://res.cloudinary.com/ddcclrs92/video/upload/v1741112690/Red-Raccoons/Momentos/ayh2i9sqt6xn16njvhyn.mp4",
  },
  {
    id: "clip-02",
    title: "Video 02",
    type: "video",
    url: "https://res.cloudinary.com/ddcclrs92/video/upload/v1741115435/Red-Raccoons/Momentos/c1uyiq8hhgcg99lhislk.mp4",
  },
  {
    id: "clip-03",
    title: "Video 03",
    type: "video",
    url: "https://res.cloudinary.com/ddcclrs92/video/upload/v1741112683/Red-Raccoons/Momentos/czpjmw7hr3leecqv1ec5.mp4",
  },
];
