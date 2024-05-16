import React from 'react'

function UserView() {
    return (
        <section className="p-10">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="flex flex-col gap-6 text-center">
                        <img
                            className="rounded-full bg-gray-50 h-52 w-56 mx-auto"
                            src="../src/assets/imgYoxd.jpg"
                            alt="Profile"
                        />
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-7xl">Luis Rodrigo</h1>
                            <p className="text-gray-500 text-sm">Programador kinalero junior</p>
                        </div>
                        <a
                            href="https://www.instagram.com/luis_roodrigoo/"
                            className="bg-gray-50 mx-auto w-32 text-center rounded-md p-2 border border-1 border-gray-100 hover:bg-white"
                        >
                            contactame
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserView