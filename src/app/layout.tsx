import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "ThingDev",
    description: "Transformamos visiones en realidad digital. Nuestra empresa especializada se dedica a crear desarrollos web vanguardistas que impulsan la transformación de proyectos y negocios. Desde la conceptualización hasta la implementación, estamos comprometidos con digitalizar tus ideas en soluciones interactivas y eficientes. ¡Descubre cómo llevamos la innovación a cada rincón de la web!",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className='dark'>
        <head>
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
        </head>
        <body>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
