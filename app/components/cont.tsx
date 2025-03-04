import { Dispatch, SetStateAction } from "react";

export default function Contact({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) {
    return (
<section className="flex flex-1 w-full items-center justify-center bg-red-500">

<div className="flex flex-col items-center text-center z-10">
    <section className="text-8xl doom-font text-Black">
        <p>PARA CONTRATACIONES</p>
        <p>ESCRIBENOS POR INSTAGRAM</p>
        <a href="https://www.instagram.com/red_raccoons/" target="_blank" rel="noopener noreferrer" className="text-8xl underline">
        red_raccoons
        </a>
    </section>
</div>
</section>
    )
}
