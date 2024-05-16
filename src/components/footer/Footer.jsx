import React from 'react'
import "../footer/Footer.css"

function Footer() {

    return (
        <div className="h-screen">
            {/* Header Section */}
            <main>
                {/* About Me */}
                <section id="about" className="sm:p-10 lg:p-20 bg-gray-50 m-0">
                    <div className="container mx-auto">
                        <div className="sm:columns-2">
                            <img
                                className="sm:w-2/2 mb-10 sm:mb-0"
                                src="../src/assets/Gp_IN6BM.jpg"
                                alt="About Me"
                            />
                            <div>
                                <h2 className="text-bold text-2xl mb-3">Bienvenido a mi blog!</h2>
                                <p className="mb-5 text-sm text-gray-400">Luis Rodrigo</p>
                                <p className="text-gray-500 text-justify leading-10">
                                    ¡Bienvenidos a mi blog! Me emociona que hayas decidido unirte a esta comunidad de entusiastas y profesionales que comparten una pasión por el mundo digital. <br />
                                    <br /> Aquí encontrarás análisis detallados, proyectos, tutoriales prácticos y reflexiones sobre las tendencias más recientes en tecnología.
                                    Mi objetivo es ofrecerte contenido valioso que te ayude a estar al día y a aprovechar al máximo las innovaciones tecnológicas. ¡Gracias por ser parte de este emocionante viaje hacia el futuro digital!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section id="services" className="sm:p-10 lg:p-20 p-5">
                    <div className="sm:container mx-auto">
                        <h2 className="text-center text-4xl font-bold pt-10 sm:pt-0 pb-10">MIS HABILIDADES</h2>
                        <div className="sm:grid grid-cols-2">
                            {[
                                { title: "Diseño Web", text: "Soy un apasionado en el tema de diseño " },
                                { title: "Pres", text: "MESSSIII" },
                                { title: "Issue Fixing", text: "MESSI" },
                                { title: "Server Management", text: "CR7" },
                            ].map((service, index) => (
                                <div key={index} className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
                                    <h3 className="text-xl mb-5 font-bold">{service.title}</h3>
                                    <p className="leading-10 text-gray-500 text-justify">
                                        {service.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <footer className="bg-indigo-900 lg:p-20 p-10 mx-auto">
                <section className="container mx-auto">
                    <div className="sm:grid justify-between sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex gap-5 flex-col">
                            <img className="h-full w-2/4" src="https://static.wixstatic.com/media/128120_7f3b9fbf981448809326f69585851cb9~mv2.jpg/v1/fill/w_640,h_486,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/128120_7f3b9fbf981448809326f69585851cb9~mv2.jpg" alt="logo" />
                            <p>Portfolio is a kind of identity of yourself</p>
                        </div>

                        <div className="mt-10 sm:mt-0">
                            <h3 className="text-xl font-bold">Enlaces</h3>
                            <ul>
                                <li className="m-3 hover:text-gray-500">
                                    <a href="#about">Acerca de</a>
                                </li>
                                <li className="m-3 hover:text-gray-500">
                                    <a href="#services">Servicios</a>
                                </li>
                                <li className="m-3 hover:text-gray-500">
                                    <a href="#portfolio">Portafolio</a>
                                </li>
                                <li className="m-3 hover:text-gray-500">
                                    <a href="#contact">Contacto</a>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-10 sm:mt-0">
                            <h3 className="text-xl font-bold">Enlaces</h3>
                            <ul>
                                <li className="m-3 hover:text-gray-500">
                                    <a href="#about">About</a>
                                </li>
                                <li className="m-3 hover:text-gray-500">
                                    <a href="#services">Services</a>
                                </li>
                                <li className="m-3 hover:text-gray-500">
                                    <a href="#portfolio">Portfolio</a>
                                </li>
                                <li className="m-3 hover:text-gray-500">
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-10 sm:mt-0">
                            <h3 className="text-xl font-bold">Quick links</h3>
                            <ul>
                                <li className="m-3 hover:text-gray-500">
                                    <a href="#about">About</a>
                                </li>
                                <li className="m-3 hover:text-gray-500">
                                    <a href="#services">Services</a>
                                </li>
                                <li className="m-3 hover:text-gray-500">
                                    <a href="#portfolio">Portfolio</a>
                                </li>
                                <li className="m-3 hover:text-gray-500">
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default Footer