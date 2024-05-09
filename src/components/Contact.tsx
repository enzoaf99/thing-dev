'use client'
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import React, { useRef } from "react";
import {Button} from "@nextui-org/react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Contact() {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm("service_zcata9c", "template_3lqxno8", form.current, "-gvj7bfTf187INtVz").then(
                (result) => {
                    console.log(result.text);
                    toast.success("Enviado!");
                    form.current?.reset();
                },
                (error) => {
                    console.log(error.text);
                    toast.error("Error al enviar el correo.");
                }
            );
        }
    };

    return (
        <section id="contact">
            <h3 className="text-thing-primary text-3xl text-center font-bold pb-5">Contacto</h3>
            <p className="text-center pb-5">Puedes contactarnos por cualquiera de nuestros canales. Cuéntanos tu
                proyecto y te guiaremos para que accedas al mejor servicio.</p>
            <div className="ps-10 pe-10 pb-20 lg:ps-20 lg:pe-20 lg:pt-10 lg:flex">
                <div className="lg:w-1/2 mx-auto lg:mr-5">
                    <h4 className={"text-center pb-3 font-bold"}>Déjanos tu mensaje</h4>
                    <form ref={form} onSubmit={sendEmail} className="text-center">
                        <div className="mb-4">
                            <input type="text" className="w-full px-3 py-2 text-gray-700 rounded" required
                                   name="user_name" placeholder="Tu nombre completo..."/>
                        </div>
                        <div className="mb-4">
                            <input type="email" className="w-full px-3 py-2 text-gray-700 rounded" required
                                   name="user_email" placeholder="Tu Email..."/>
                        </div>
                        <div className="mb-4">
                            <textarea name="message" className="w-full h-32 px-3 py-2 rounded"
                                      required placeholder="Tu mensaje..."></textarea>
                        </div>
                        <Button className={'font-bold'} size="md" type="submit" radius="full" color="primary" href="#"
                                variant="flat">
                            Enviar
                        </Button>
                    </form>
                </div>
                <div className="pt-10 pb-10 lg:pt-0 lg:pb-0 lg:w-1/2 mx-auto lg:ml-5">
                    <h4 className={"text-center pb-3 font-bold"}>Nuestras redes sociales</h4>
                    <div className="mx-auto lg:ml-5 flex items-center justify-around" style={{ color: 'rgb(59, 59, 59)' }}>
                        <a href={""} className={"text-7xl"} ><FaLinkedin/></a>
                        <a href={""} className={"text-7xl"}><FaInstagram/></a>
                        <a href={""} className={"text-7xl"}><FaFacebook/></a>
                    </div>

                </div>
            </div>

            <Toaster position={'bottom-center'}/>
        </section>
    );
}
