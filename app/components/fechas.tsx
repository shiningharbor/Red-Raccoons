import { Dispatch, SetStateAction } from "react";

export default function Fechas({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) {
    return (
        <section className="flex flex-1 w-full items-center justify-center bg-red-500">
            <div className="w-4/5 flex flex-col items-center text-center z-10">
                {/* Título con texto responsivo */}
                <section className="text-4xl sm:text-6xl md:text-8xl doom-font text-black">
                    <p>PROXIMAMENTE</p>
                </section>
            </div>
        </section>
    );
}
