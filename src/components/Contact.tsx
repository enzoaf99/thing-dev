'use client'
import emailjs from "@emailjs/browser";
import toast, {Toaster} from "react-hot-toast";
import { useRef } from "react";
import {Button} from "@nextui-org/react";

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
        <>
            <div className={"p-5"}>
                <h3 className={'text-thing-primary text-3xl text-center font-bold pb-5'}>Contacto</h3>
                <p className={'text-center pb-5'}>Puedes contactarnos por cualquiera de nuestros canales. Cuéntanos tu
                    proyecto y te guiaremos para que accedas al mejor servicio.</p>

                <form ref={form} onSubmit={sendEmail} className="text-center">
                    <input type="text" className="" required name="user_name"
                           placeholder="Tu nombre completo..." />
                    <input type="email" className="" required name="user_email"
                           placeholder="Tu Email..." />
                    <textarea name="message" className="" required placeholder="Tu mensaje..." />
                    <Button className="" type="submit" value="Enviar" />
                </form>

                <Toaster position={'bottom-center'}/>
            </div>
        </>
    );
}
