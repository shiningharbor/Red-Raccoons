import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Momentos() {
  const media = [
    { url: "https://res.cloudinary.com/ddcclrs92/video/upload/v1741112690/Red-Raccoons/Momentos/ayh2i9sqt6xn16njvhyn.mp4", type: "video" },
    { url: "https://res.cloudinary.com/ddcclrs92/video/upload/v1741115435/Red-Raccoons/Momentos/c1uyiq8hhgcg99lhislk.mp4", type: "video" },
    { url: "https://res.cloudinary.com/ddcclrs92/video/upload/v1741112683/Red-Raccoons/Momentos/czpjmw7hr3leecqv1ec5.mp4", type: "video" },
  ].sort(() => Math.random() - 0.5);

  return (
    <div className="relative flex flex-col flex-1 w-full bg-cover bg-center"> 
 {/* Contenedor fijo para los videos */}
    <div className="w-full max-w-[800px] aspect-video bg-black flex items-center justify-center overflow-hidden rounded-lg shadow-lg mx-auto">
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            loop
            className="w-full h-full"
        >
            {media.map((file, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center relative">
                <video
                    controls
                    className="max-w-full max-h-full object-contain absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                    <source src={file.url} type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    </div>
  );
}
