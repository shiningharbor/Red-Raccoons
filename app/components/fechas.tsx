import { Dispatch, SetStateAction } from "react";

export default function Fechas({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) {
    return (
<section className="flex flex-1 w-full items-center justify-center bg-red-500">

<div className="w-4/5 flex flex-col items-center text-center z-10">
    <section className="text-8xl doom-font text-Black">
        <p>PROXIMAMENTE</p>
    </section>
</div>
</section>
    )
}
