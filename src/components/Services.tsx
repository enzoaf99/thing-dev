import {PiPaintBrushLight} from "react-icons/pi";
import {PiCodeDuotone} from "react-icons/pi";
import {SlRocket} from "react-icons/sl";
import {CgSearchFound} from "react-icons/cg";
import {GrPieChart} from "react-icons/gr";
import {MdSettingsSuggest} from "react-icons/md";

export default function Services() {
    return (
        <section id="services" className="w-full md:w-400 lg:w-200 px-5 md:px-0">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-thing-primary text-3xl font-bold tracking-tighter sm:text-5xl">Nuestros
                        Servicios</h2>
                    <p className="max-w-[700px] text-thing-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Ofrecemos una amplia gama de servicios de diseño web para ayudar a tu negocio a destacar en
                        línea.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 text-white">
                <div
                    className="rounded-lg border border-black bg-thing-dark p-6 shadow-sm transition-colors hover:opacity-65 hover:border-black">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <PiPaintBrushLight className="h-10 w-10"/>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Diseño Gráfico</h3>
                            <p>Creamos diseños únicos y atractivos para tu
                                marca.</p>
                        </div>
                    </div>
                </div>
                <div
                    className="rounded-lg border border-black bg-thing-dark p-6 shadow-sm transition-colors hover:opacity-65 hover:border-black">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <PiCodeDuotone className="h-10 w-10 text-gray-500 dark:text-gray-400"/>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Desarrollo Web</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Construimos sitios web a medida con tecnologías modernas.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="rounded-lg border border-black bg-thing-dark p-6 shadow-sm transition-colors hover:opacity-65 hover:border-black">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <SlRocket className="h-10 w-10 text-gray-500 dark:text-gray-400"/>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Marketing Digital</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Impulsamos tu presencia en línea con estrategias efectivas.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="rounded-lg border border-black bg-thing-dark p-6 shadow-sm transition-colors hover:opacity-65 hover:border-black">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <CgSearchFound className="h-10 w-10 text-gray-500 dark:text-gray-400"/>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Optimización SEO</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Mejoramos la visibilidad de tu sitio web en los motores de búsqueda.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="rounded-lg border border-black bg-thing-dark p-6 shadow-sm transition-colors hover:opacity-65 hover:border-black">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <GrPieChart className="h-10 w-10 text-gray-500 dark:text-gray-400"/>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Análisis de Datos</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Proporcionamos informes detallados sobre el rendimiento de tu sitio web.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="rounded-lg border border-black bg-thing-dark p-6 shadow-sm transition-colors hover:opacity-65 hover:border-black">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <MdSettingsSuggest className="h-10 w-10 text-gray-500 dark:text-gray-400"/>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Soporte y Mantenimiento</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Brindamos soporte continuo y mantenemos tu sitio web actualizado.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
