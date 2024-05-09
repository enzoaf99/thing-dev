'use client'
import Image from "next/image";
import about from '../../public/images/aboutimg.png'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function About() {
    return (
        <section id="about">
            <div className="flex flex-col items-start py-20 px-10 lg:flex-row lg:items-start lg:py-20 lg:px-36">
                <div className='w-full lg:w-1/2 lg:mr-2 xl:px-20'>
                    <Image src={about} alt={'About'}></Image>
                </div>
                <div className='w-full lg:w-1/2 lg:ml-2 mt-4 lg:mt-0'>
                    <h3 className={'text-thing-primary font-bold text-2xl pt-7 lg:text-4xl lg:pt-0 '}>Código de calidad,
                        soluciones para tu empresa</h3>
                    <p className={'py-7'}>En ThingDev nos apasiona la programación y estamos comprometidos a brindar
                        soluciones digitales de alta calidad a empresas de todos los tamaños. Con nuestra dedicación,
                        experiencia y compromiso con la innovación, puede estar seguro de que obtendrá los mejores
                        resultados.</p>
                    <Accordion defaultExpandedKeys={["1"]}>
                        <AccordionItem key="1" aria-label="Accordion 1" subtitle="Click para expandir"
                                    title="¿Que servicios ofrecemos?">
                            Tenemos 3 principales servicios, <strong>diseño
                            web</strong>, <strong>hosting</strong> y <strong>mantenimiento</strong>. Tambien
                            ofrecemos <strong>software personalizado</strong>, ya sean aplicaciones de escritorio o móviles.
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2" subtitle="Click para expandir"
                                    title="¿Cómo es el proceso con nosotros?">
                            Ya contratado el servicio se realizan las entregas acordadas, se brinda acceso al <strong>codigo
                            fuente</strong>, <strong>hosting</strong> y <strong>dominios</strong> en los casos que
                            corresponda. Entregamos <strong>manuales de
                            usuarios</strong> y <strong>diseños</strong> respectivos al proyecto. Luego, si lo desea, tendrá
                            a disposición un <strong>equipo de soporte</strong> para resolver cualquier duda post
                            implementación.
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" subtitle="Click para expandir"
                                    title="Nuestros valores">
                            Como empresa de desarrollo de software, nuestros valores fundamentales guían cada aspecto de
                            nuestra operación y reflejan nuestro compromiso con la excelencia y la satisfacción del cliente.
                            Aquí están nuestros cinco principales valores:
                            <br/>
                            <br/>
                            <strong>Innovación:</strong> Buscamos soluciones avanzadas.
                            <br/>
                            <br/>
                            <strong>Calidad:</strong> Entregamos software confiable y seguro.
                            <br/>
                            <br/>
                            <strong>Colaboración:</strong> Trabajamos en estrecha comunicación con clientes.
                            <br/>
                            <br/>
                            <strong>Responsabilidad:</strong> Cumplimos plazos y responsabilidad social.
                            <br/>
                            <br/>
                            <strong>Aprendizaje continuo:</strong> Nos mantenemos actualizados.
                            <br/>
                            <br/>
                            Estos valores definen nuestro compromiso con la excelencia y la satisfacción del cliente en cada
                            proyecto que abordamos.
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}