'use client'
import Image from "next/image";
import ThingDevLogo from "../../public/images/logo.png"
import Slider from "react-slick";

export default function Clients() {
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };
    return (
        <>
            <section className={"flex flex-col justify-center items-center pt-10 pb-10"}>
                <h3 className={'text-xl font-light text-center text-foreground/80 w-1/2'}>Ya son mas de 50
                    emprendimientos,
                    proyectos y empresas que confiaron en nuestros servicios</h3>
            </section>
            <Slider {...settings} className={'flex'}>
                <div className="flex justify-center div-slider">
                    <Image src={ThingDevLogo} alt="GestionApp"/>
                </div>
                <div className="flex justify-center div-slider">
                    <Image src={ThingDevLogo} alt="GestionApp"/>
                </div>
                <div className="flex justify-center div-slider">
                    <Image src={ThingDevLogo} alt="GestionApp"/>
                </div>
                <div className="flex justify-center div-slider">
                    <Image src={ThingDevLogo} alt="GestionApp"/>
                </div>
                <div className="flex justify-center div-slider">
                    <Image src={ThingDevLogo} alt="GestionApp"/>
                </div>
                <div className="flex justify-center div-slider">
                    <Image src={ThingDevLogo} alt="GestionApp"/>
                </div>
                <div className="flex justify-center div-slider">
                    <Image src={ThingDevLogo} alt="GestionApp"/>
                </div>
                <div className="flex justify-center div-slider">
                    <Image src={ThingDevLogo} alt="GestionApp"/>
                </div>
            </Slider>
        </>


    )
}