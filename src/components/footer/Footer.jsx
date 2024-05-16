import React from 'react'

function Footer() {

    return (
        <div className="h-screen">


            {/* Main Content */}
            <main>


                {/* About Me */}
                <section id="about" className="sm:p-10 lg:p-20 bg-gray-50">
                    <div className="container mx-auto">
                        <div className="sm:columns-2">
                            <img
                                className="sm:w-1/2 mb-10 sm:mb-0"
                                src= "https://scontent.fgua2-1.fna.fbcdn.net/v/t39.30808-6/399407075_1800977167026108_6477426709711141627_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WXNf4iWmwi8Q7kNvgFxYchG&_nc_ht=scontent.fgua2-1.fna&oh=00_AYDU7UtuncdRDZ_dNM5suz0tb_pJMK3zqsZMEa1Y_CUArQ&oe=664BB14F"
                                alt="About Me"
                            />
                            <div>
                                <h2 className="text-bold text-2xl mb-3">Hola mi nombre es Luis Rodrigo </h2>
                                <p className="mb-5 text-sm text-gray-400">Desarrollador Web</p>
                                <p className="text-gray-500 text-justify leading-10">
                                    Soy un joven apacionado por la tecnologia actualmente soy estudiante del centro educativo
                                    tecnico laboral Kinal, me enfoco en poder mejorar dia con dia para lograr ser el profesional
                                    que deseo pero sobre todo el poder ser una buena persona con valores eticos y morales.
                                </p>
                            </div>
                        </div>
                    </div>

                </section>
                {/* Services */}
                <section id="services" className="sm:p-10 lg:p-20 p-5">
                    <div className="sm:container mx-auto">
                        <h2 className="text-center text-4xl font-bold pt-10 sm:pt-0 pb-10">Mis Habilidades</h2>
                        <div className="sm:grid grid-cols-2">
                            {[
                                { title: "Web Design", text: "As a dedicated web design professional, I bring a creative and strategic approach to crafting visually stunning and user-centric websites. With a keen eye for aesthetics and a commitment to delivering exceptional user experiences, my goal is to translate your brand identity into a captivating online presence." },
                                { title: "Web Development", text: "As a seasoned web development professional, I offer comprehensive and tailored services to meet the diverse needs of businesses seeking a strong online presence. With a rich background in both front-end and back-end technologies, I specialize in crafting visually appealing and highly functional websites and web applications." },
                                { title: "Issue Fixing", text: "Offering dedicated issue-fixing services, I bring a meticulous and solutions-oriented approach to address and resolve a wide array of challenges that may arise in your digital landscape. With a focus on efficiency and precision, I specialize in diagnosing and remedying issues across web applications, websites, and software systems." },
                                { title: "Server Management", text: "Specializing in server management services, I offer a comprehensive solution to ensure the seamless and secure operation of your digital infrastructure. With expertise in configuring, monitoring, and optimizing server environments, I am committed to enhancing the reliability and performance of your servers." },
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

                {/* Contact */}
                <section className="sm:p-20 p-5" id="contact">
                    <div className="sm:container mx-auto">
                        <h2 className="text-center text-4xl font-bold pb-10">Contactame</h2>
                        <div className="w-full sm:flex">
                            <div className="sm:w-1/2 w-full">
                                <div className="mb-5">
                                    <h3 className="text-xl">Luis</h3>
                                    <p className="text-gray-500">Luis Rodrigo Vaquin </p>
                                </div>

                                <div className="mb-5">
                                    <h3 className="text-xl">Gmail</h3>
                                    <a className="text-gray-500" href="mailto:rir.cse.71@gmail.com">lvaquin-2022300@kinal.edu.gt</a>
                                </div>

                                <div className="mb-5">
                                    <h3 className="text-xl">Telefono</h3>
                                    <a className="text-gray-500" href="https:wa.me/01750009149">502 47242803</a>
                                </div>
                            </div>

                            <div className="sm:w-1/2 w-full bg-gray-50 p-10 rounded-md">
                                <form action="#">
                                    <div className="mt-5 grid grid-cols-1 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-4">
                                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                            <input type="text" name="username" id="username" autoComplete="username" className="block w-full outline-1 border border-1 flex-1 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Rabiul Islam" />
                                        </div>
                                    </div>

                                    <div className="mt-5 grid grid-cols-1 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-4">
                                            <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">Subject</label>
                                            <input type="text" name="subject" id="subject" autoComplete="subject" className="block w-full outline-1 border border-1 flex-1 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Hiring" />
                                        </div>
                                    </div>

                                    <div className="mt-5 grid grid-cols-1 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-4">
                                            <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
                                            <textarea name="message" id="message" autoComplete="message" className="block w-full outline-1 border border-1 flex-1 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Message"></textarea>
                                        </div>
                                    </div>

                                    <div className="mt-5 grid grid-cols-1 gap-y-8 sm:grid-cols-6">
                                        <a href="#" className="bg-gray-200 mx-auto w-32 text-center rounded-md p-2 border border-1 border-gray-100 hover:bg-white">Submit</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-50 lg:p-20 p-10">
                <section className="container mx-auto">
                    <div className="sm:grid justify-between sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex gap-5 flex-col">
                            <img className="h-6 w-1/2" src="https://rabiulislam.dev/documents/images/portfolio/portfolio.png" alt="logo" />
                            <p>Portfolio is a kind of identity of yourself</p>
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