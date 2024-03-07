'use client'
import ImagenHero from '../../public/images/hero.png'
import Typed from 'typed.js'
import React, {useEffect, useRef} from "react";
import Image from "next/image";
import {Button, Link} from "@nextui-org/react";

export default function Hero() {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Proyecto', 'Negocio'],
            startDelay: 300,
            typeSpeed: 150,
            backDelay: 750,
            backSpeed: 150,
            smartBackspace: true,
            showCursor: false,
            loop: true,
        });
    });

    return (
        <section className="flex flex-row p-8 px-16 items-center" id="hero">
            <div className='w-1/2'>
                <p className='text-lg font-semibold pb-3 text-thing-primary'>Bienvenido a Thing</p>
                <h2 className='text-3xl font-semibold text-white pb-3'>Digitaliza ahora<br/>tu <span
                    ref={el}></span></h2>
                <h3 className='text-base font-light text-white pb-3'>Somos una empresa dedicada a la inserción
                    de proyectos en el mundo digital.</h3>
                <Button as={Link} className={'font-bold'} size="md" radius="full" color="primary" href="#"
                        variant="flat">
                    Saber mas
                </Button>
            </div>
            <div className='w-1/2'>
                <Image src={ImagenHero} alt={'Hero'}></Image>
            </div>
        </section>

    );
}