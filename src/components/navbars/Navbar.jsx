import { useNavigate } from "react-router-dom";
import { useUserDetails } from '../../shared/hooks'

const NavLogo = () => {
    return (
        <div className="nav-logo-container ">
            <img
                className="nav-logo"
                width='200%'
                height='210%'
                src="https://images.vexels.com/media/users/3/142648/isolated/preview/93f312b27fc6f457373d902b91665eeb-isotipo-origami-letra-v.png"
                alt="Logo"
            />
        </div>
    )
}

const NavButton = ({ text, onClickHandler }) => {
    return (
        <span className="nav-button text-white text-35xl " onClick={onClickHandler}>
            {text}
        </span>
    )
}

export const Navbar = () => {
    const { isLogger, logout } = useUserDetails()

    const navigate = useNavigate()

    const handleNavigateToAuthPage = () => {
        navigate('/auth')
    }

    const handleNavigateToSettingPage = () => {
        navigate('/settings')
    }

    const handleNavigateToNewPostPage = () => {
        navigate('/newpost')
    }

    const handleNavigateToHomePage = () => {
        navigate('/')
    }

    const handleLogout = () => {
        logout()
    }

    return (
        <div className="bg-indigo-900 p-8 flex justify-between items-center shadow-lg">
            <div className="flex items-center space-x-6"> {/* Ajuste el espacio-x aquí */}
                <NavLogo />
                <NavButton
                    text='BIENVENIDO A MI BLOG LUIS VAQUIN'
                    onClickHandler={handleNavigateToHomePage}
                    className="text-white hover:text-gray-300"
                />
            </div>
            <div className="flex items-center space-x-12"> {/* Ajuste el espacio-x aquí */}
                {!isLogger ? (
                    <NavButton
                        text='Log in'
                        onClickHandler={handleNavigateToAuthPage}
                        className="text-white hover:text-gray-300"
                    />
                ) : (
                    <>
                        <div className="flex items-center space-x-1">
                            <i className="fa-solid fa-square-plus text-white"></i>
                            <NavButton
                                text='Agregar proyecto'
                                onClickHandler={handleNavigateToNewPostPage}
                                className="text-white hover:text-gray-300"
                            />
                        </div>
                        <div className="flex items-center space-x-1">
                            <i className="fa-solid fa-user text-white"></i>
                            <NavButton
                                text='Mis propios Proyectos'
                                onClickHandler={handleNavigateToSettingPage}
                                className="text-white hover:text-gray-300"
                            />
                        </div>
                        <div className="flex items-center space-x-1">
                            <i className="fa-solid fa-right-from-bracket text-white"></i>
                            <NavButton
                                text='Salir'
                                onClickHandler={handleLogout}
                                className="text-white hover:text-gray-300"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}