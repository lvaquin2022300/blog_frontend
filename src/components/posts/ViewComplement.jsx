import React from 'react'

function ViewComplement() {
    return (
        <section className="pb-12 bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC]">
            <div className="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
                <div className="justify-center w-full text-center lg:p-10 max-auto">
                    <div className="justify-center w-full mx-auto">

                        <div className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto lg:flex-row">
                            <img
                                className='w-32 h-32 rounded-full border border-[#E8E3F4]'
                                src='https://definicion.de/wp-content/uploads/2009/05/codigo-fuente.jpg'
                                alt="Profile"
                            />
                        </div>

                        <p className="sm:mt-8 mt-3 sm:px-44 text-[#10172A] text-4xl sm:text-6xl font-semibold tracking-tighter">
                            Failed <span className="underline leading-8 underline-offset-8 decoration-8 decoration-[#8B5CF6]">Products</span> Of Top Brands.
                        </p>

                    </div>
                </div>
            </div>

            <div className="text-center space-x-4 mt-6">
                <button className="bg-[#8B5CF6] translate-y-1 text-[#fff] sm:text-lg text-xs font-bold py-2.5 px-6 rounded-full inline-flex items-center">

                    &nbsp; &nbsp;<span> VER CODIGO </span>
                </button>
            </div>
        </section>
    );
}

export default ViewComplement