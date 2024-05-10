'use client'
import ImagenHero from '../../public/images/hero.png'
import Typed from 'typed.js'
import React, {useEffect, useRef} from "react";
import Image from "next/image";
import {Button, Link} from "@nextui-org/react";
import Slider from "react-slick";
import BlueAppLogo from "../../public/images/blueapplogo.png";
import InstJaimLogo from "../../public/images/instjaimlogo.png";
import GestionAppLogo from "../../public/images/gestionapplogo.png";
import AquorLogo from "../../public/images/aquorlogo.png";
import AtentoLogo from "../../public/images/atentomusicologo.png";
import PilonesLogo from "../../public/images/pilonesgyhlogo.png";
import { TbClick } from "react-icons/tb";


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

    function SampleNextArrow(props: any) {
        const {className, style, onClick} = props;
        return <div className={className} style={{...style, display: "none"}} onClick={onClick}/>;
    }

    function SampleBackArrow(props: any) {
        const {className, style, onClick} = props;
        return <div className={className} style={{...style, display: "none"}} onClick={onClick}/>;
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SampleBackArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };
    return (
        <section id="hero">
            <div className="flex flex-col items-center px-10 py-20 lg:flex-row lg:items-center lg:pt-36 lg:pb-20 lg:px-36">
                <div className='w-full lg:w-1/2 lg:mr-2'>
                    <h1 className='font-semibold pb-6 text-thing-primary text-xl md:text-2xl'>Agencia de desarrollo de software</h1>
                    <h2 className='text-4xl font-bold text-thing-dark pb-6 md:text-6xl'>Digitaliza ahora<br/>tu <span
                        ref={el}></span>
                    </h2>
                    <h3 className='text-lg md:text-lg font-light text-black pb-6'>Somos una empresa dedicada a la inserción de
                        proyectos y negocios en el mundo digital.</h3>
                    <Button as={Link} className={'font-bold uppercase text-lg md:text-2xl'} size="md" radius="full" color="primary" href="https://api.whatsapp.com/send?phone=541175264661&text=Hola!#"
                            variant="flat">
                        asesoramiento gratis <TbClick />
                    </Button>
                </div>
                <div className='w-full lg:w-1/2 lg:ml-2 mt-4 lg:mt-0'>
                    <Image src={ImagenHero} alt={'Hero'}></Image>
                </div>
            </div>

            <div className="">
                <section className={"flex flex-col justify-center items-center pt-10 pb-10"}>
                    <h3 className={'text-base md:text-xl font-light text-center text-foreground/80 w-3/4 md:w-1/2'}>Ya
                        son
                        mas de <strong className={'text-thing-primary font-bold'}>50</strong> los
                        emprendimientos,
                        proyectos y empresas que confiaron en nuestros servicios</h3>
                </section>
                <Slider {...settings} className={'flex pb-10'}>
                    <div className="flex justify-center div-slider">
                        <Image src={BlueAppLogo} height={'40'} alt="BlueApp"/>
                    </div>
                    <div className="flex justify-center div-slider">
                        <Image src={InstJaimLogo} height={'40'} alt="InstJaim"/>
                    </div>
                    <div className="flex justify-center div-slider">
                        <Image src={GestionAppLogo} height={'40'} alt="GestionApp"/>
                    </div>
                    <div className="flex justify-center div-slider">
                        <Image src={AquorLogo} height={'40'} alt="Aquor"/>
                    </div>
                    <div className="flex justify-center div-slider">
                        <Image src={AtentoLogo} height={'40'} alt="Atento"/>
                    </div>
                    <div className="flex justify-center div-slider">
                        <Image src={PilonesLogo} height={'40'} alt="Pilones"/>
                    </div>
                </Slider>
            </div>
        </section>
    );
}
