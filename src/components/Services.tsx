'use client'
import {Button, Card, CardFooter, CardBody, Link} from "@nextui-org/react";
import {CardHeader} from "@nextui-org/card";
import { GiWorld } from "react-icons/gi";
import { SlScreenSmartphone } from "react-icons/sl";
import { GiMagicBroom } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";

export default function Services(){
    return(
        <div className={"p-5"}>
            <h3 className={'text-thing-primary text-3xl text-center font-bold pb-5'}>Nuestros servicios</h3>
            <p className={'text-center pb-5'}>En búsqueda de un solución práctica e innovadora para los proyectos de cualquier tipo de empresa o emprendimiento</p>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-28 justify-center lg:mx-40'}>

                <div className="w-full md:w-400 lg:w-200">
                    <Card isFooterBlurred radius="lg" className="border-none bg-white m-4 p-5 min-h-[300px]">
                        <CardHeader className={"text-thing-primary inline-block"}>
                            <LuBrainCircuit className={"text-3xl mb-2"}/>
                            <h4 className={"text-2xl"}>Desarrollos para empresas</h4>
                        </CardHeader>
                        <CardBody>
                            <p className={'text-black pb-3'}><strong>Potencia y optimiza tu trabajo con un software a la
                                medida de tus necesidades.</strong> Contamos con un equipo de profesionales con basta
                                experiencia con el que te ayudaremos a desarrollar el sistema que necesita tu empresa
                            </p>
                        </CardBody>
                        <Button as={Link} className={'font-bold w-[calc(100%_-_8px)]'} size="md" radius="full"
                                color="primary" href="#"
                                variant="flat">
                            Mas información
                        </Button>
                    </Card>
                </div>

                <div className="w-full md:w-400 lg:w-200">
                    <Card isFooterBlurred radius="lg" className="border-none bg-white m-4 p-5 min-h-[300px]">
                        <CardHeader className={"text-thing-primary inline-block"}>
                            <SlScreenSmartphone className={"text-3xl mb-2"}/>
                            <h4 className={"text-2xl"}>Apps personalizadas</h4>
                        </CardHeader>
                        <CardBody>
                            <p className={'text-black pb-3'}><strong>No todo es una página web, lleva tu idea al
                                dispositivo que necesites.</strong> Contamos con experiencia en desarrollo de Apps de
                                escritorio o para móviles.</p>
                        </CardBody>
                        <Button as={Link} className={'font-bold w-[calc(100%_-_8px)]'} size="md" radius="full"
                                color="primary" href="#"
                                variant="flat">
                            Mas información
                        </Button>
                    </Card>
                </div>

                <div className="w-full md:w-400 lg:w-200">
                    <Card isFooterBlurred radius="lg" className="border-none bg-white m-4 p-5 min-h-[300px]">
                        <CardHeader className={"text-thing-primary inline-block"}>
                            <GiWorld className={"text-3xl mb-2"}/>
                            <h4 className={"text-2xl"}>Landing Page</h4>
                        </CardHeader>
                        <CardBody>
                            <p className={'text-black pb-3'}><strong>Haz que todos conozcan tu producto o proyecto y
                                consigue convertir tus visitas en contactos.</strong> Contarás con asesoramiento de
                                nuestro equipo para que tu página se adapte a tus necesidades y objetivos.</p>
                        </CardBody>
                        <Button as={Link} className={'font-bold w-[calc(100%_-_8px)]'} size="md" radius="full"
                                color="primary" href="#"
                                variant="flat">
                            Mas información
                        </Button>
                    </Card>
                </div>

                <div className="w-full md:w-400 lg:w-200">
                    <Card isFooterBlurred radius="lg" className="border-none bg-white m-4 p-5 min-h-[300px]">
                        <CardHeader className={"text-thing-primary inline-block"}>
                            <GiMagicBroom className={"text-3xl mb-2"}/>
                            <h4 className={"text-2xl"}>Mantenimiento y mejoras</h4>
                        </CardHeader>
                        <CardBody>
                            <p className={'text-black pb-3'}><strong>Manten tu web sin fallos fallos con mantenimiento y
                                optimizacion.</strong> Nos hacemos cargo de tu proyecto ya iniciado y nos encargamos de
                                mantenerlo y mejorarlo para que tengas el mejor producto posible de cara a tus clientes.
                            </p>
                        </CardBody>
                        <Button as={Link} className={'font-bold w-[calc(100%_-_8px)]'} size="md" radius="full"
                                color="primary" href="#"
                                variant="flat">
                            Mas información
                        </Button>
                    </Card>
                </div>

            </div>
        </div>
    )
}
