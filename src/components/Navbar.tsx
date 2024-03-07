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

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    //Listado de items del navbar
    const menuItems = [
        {label: "Inicio", href: "#"},
        {label: "Servicios", href: "#servicios"},
        {label: "Nosotros", href: "#nosotros"},
        {label: "Casos de éxito", href: "#casos-de-exito"},
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
                    <Button as={Link} className={'m-1 font-bold'} size="md" radius="full" color="primary" href="#"
                            variant="flat">
                        Contacto
                    </Button>
                    <Button as={Link} className={'m-1 font-bold'} size="md" radius="full" color="primary" href="#"
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
