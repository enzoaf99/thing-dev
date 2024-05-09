'use client'
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button
} from "@nextui-org/react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import {PiCalendarFill} from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    //Listado de items del navbar
    const menuItems = [
        {label: "Inicio", href: "#hero"},
        {label: "Nosotros", href: "#about"},
        {label: "Servicios", href: "#services"},
        {label: "Contacto", href: "#contact"},
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image src={logo} alt={"ThingDev"}></Image>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4 font-medium" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link color='foreground' className={'font-light px-1'} href={item.href}>
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} className={'m-1 font-bold'} size="sm" radius="full" color="primary" href="https://api.whatsapp.com/send?phone=541175264661&text=Hola!"
                            variant="flat">
                        Escribenos<FaWhatsapp/>
                    </Button>
                    <Button as={Link} className={'m-1 font-bold'} size="sm" radius="full" color="primary" href="https://calendly.com/enzo-fernandez/30min"
                            variant="flat">
                        Agenda <PiCalendarFill/>
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link color='foreground' className="w-full" href={item.href} size="lg">
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
