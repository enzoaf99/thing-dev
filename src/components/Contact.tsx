'use client'
import {Button, Link} from "@nextui-org/react";
import {FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp} from "react-icons/fa";
import {PiCalendarFill} from "react-icons/pi";
import React from "react";

export default function Contact() {

    return (
            <section id={"contact"} className="w-full py-12 px-18 lg:px-36 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div
                        className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h2 className="text-thing-primary pb-5 text-3xl text-center font-bold tracking-tighter sm:text-5xl md:text-left">Contáctanos</h2>
                                <p className="max-w-[600px] text-thing-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Si tienes alguna pregunta o quieres saber más sobre nuestros servicios, no dudes en
                                    ponerte en
                                    contacto con nosotros.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button as={Link} className={'font-bold uppercase text-md'} size="lg" radius="full"
                                        color="primary"
                                        href="https://api.whatsapp.com/send?phone=541175264661&text=Hola!"
                                        variant="flat">
                                    Escribenos<FaWhatsapp/>
                                </Button>
                                <Button as={Link} className={'font-bold uppercase text-md'} size="lg" radius="full"
                                        color="primary" href="https://calendly.com/enzo-fernandez/30min"
                                        variant="flat">
                                    Agenda<PiCalendarFill/>
                                </Button>
                            </div>
                        </div>
                        <div className="text-thing-primary lg:ml-5 flex justify-around">
                            <a href={"https://www.linkedin.com/company/thing-dev"} className={"text-5xl md:text-7xl"}><FaLinkedin/></a>
                            <a href={"https://www.instagram.com/thing.dev/"} className={"text-5xl md:text-7xl"}><FaInstagram/></a>
                            <a href={"https://www.instagram.com/thing.dev/"} className={"text-5xl md:text-7xl"}><FaFacebook/></a>
                        </div>
                    </div>
                </div>
            </section>
    );
}
