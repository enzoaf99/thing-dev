'use client'
import heroimg from "../../public/images/hero.png";
import Image from "next/image";
import React from "react";

export default function Hero(){
    return(
        <section className={'flex flex-row py-7 bg-thing-repeat'}>
            <div className={'flex items-center justify-center w-1/2'}>
                <p className={'text-thing-primary font-bold text-left'}>Bienvenido a Thing</p>
            </div>
            <div className={'flex items-center justify-center w-1/2'}>
                <Image src={heroimg} alt={"Hero"}></Image>
            </div>
        </section>
    )
}