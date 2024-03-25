'use client'
import Image from "next/image";
import Pilones from "../../public/images/piloneslanding.png";

export default function Cases(){
    return(
        <>
            <div className={"p-5"}>
                <h3 className={'text-thing-primary text-3xl text-center font-bold pb-5'}>Casos de éxito</h3>
                <p className={'text-center pb-5'}>Estos son algunos de los proyectos en los que trabajamos</p>

                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-28 justify-center lg:mx-40'}>

                    <div className="w-full md:w-400 lg:w-200 border-2 border-slate-800 rounded-lg p-5">
                        <Image src={Pilones} alt={'PilonesGYH.com.ar'} height={"600"}/>
                        <p className={'font-medium text-xl'}>PilonesGYH</p>
                        <p className={'font-light'}>PilonesGYH es una landing page destinada a informar a los visitantes de que se trata la empresa, cuales son sus servicios y un canal de contacto.</p>
                    </div>

                </div>
            </div>
        </>
    )
}
