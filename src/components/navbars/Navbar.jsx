import { useNavigate } from "react-router-dom";
import logo from '../../assets/logoMini.png'
import { useUserDetails } from '../../shared/hooks'

const NavLogo = () => {
    return (
        <div className="nav-logo-container">
            <img
                className="nav-logo"
                width='100%'
                height='100%'
                src={logo}
                alt="Logo"
            />
        </div>
    )
}

const NavButton = ({ text, onClickHandler }) => {
    return (
        <span className="nav-button" onClick={onClickHandler}>
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
        <div className="bg-gray-800 p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center space-x-4">
                <NavLogo />
                <NavButton text='One Chan' onClickHandler={handleNavigateToHomePage} className="text-white hover:text-gray-300" />
            </div>
            <div>
                {!isLogger ? (
                    <div className="flex items-center space-x-2">
                        <NavButton text='Log in' onClickHandler={handleNavigateToAuthPage} className="text-white hover:text-gray-300" />
                        <i className="fa-solid fa-right-to-bracket text-white"></i>
                    </div>
                ) : (
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <i className="fa-solid fa-square-plus text-white"></i>
                            <NavButton text='New Post' onClickHandler={handleNavigateToNewPostPage} className="text-white hover:text-gray-300" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fa-solid fa-user text-white"></i>
                            <NavButton text='My account' onClickHandler={handleNavigateToSettingPage} className="text-white hover:text-gray-300" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fa-solid fa-right-from-bracket text-white"></i>
                            <NavButton text='Log out' onClickHandler={handleLogout} className="text-white hover:text-gray-300" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}