import { useState } from "react"
import { Logo } from './Logo'
import { Input } from './Input'
import {
    emailValidationMessage,
    validationEmail,
    validatePasswordMessage,
    validatePassword
} from '../shared/validators'
import { useLogin } from "../shared/hooks"

export const Login = ({ switchAuthHandler }) => {
    const { login, isLoading } = useLogin();

    const [formState, setFormState] = useState({
        email: {
            value: '',
            isValid: false,
            showError: false
        },
        password: {
            value: '',
            isValid: false,
            showError: false
        },
    })

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false
        switch (field) {
            case 'email':
                isValid = validationEmail(value)
                break

            case 'password':
                isValid = validatePassword(value)
                break

            default:
                break
        }

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleLogin = (event) => {
        event.preventDefault()

        login(formState.email.value, formState.password.value)
    }

    const isSubmitButtonDisable = isLoading || !formState.email.isValid || !formState.password.isValid

    /* return (
         <div className="login-container">
             <form className="auth-form">
                 <Logo text={'Log in'} />
                 <div className="input-box">
                     <Input
                         field='email'
                         placeholder='Email'
                         className='login-input'
                         value={formState.email.value}
                         onChangeHandler={handleInputValueChange}
                         type='text'
                         onBlurHandler={handleInputValidationOnBlur}
                         showErrorMessage={formState.email.showError}
                         validationMessage={emailValidationMessage}
                     />
                     <i class="fa-solid fa-envelope"></i>
                 </div>
                 <div className="input-box">
                     <Input
                         field='password'
                         placeholder='Password'
                         className='login-input'
                         value={formState.password.value}
                         onChangeHandler={handleInputValueChange}
                         type='password'
                         onBlurHandler={handleInputValidationOnBlur}
                         showErrorMessage={formState.password.showError}
                         validationMessage={validatePasswordMessage}
                     />
                     <i class="fa-solid fa-lock"></i>
                 </div>
                 <button onClick={handleLogin} disabled={isSubmitButtonDisable} className="login__button">
                     Log in
                 </button>
                 <div onClick={switchAuthHandler} className="auth-form-switch-label">
                     Don't have an acount? register now!
                 </div>
             </form>
         </div>
     )*/

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
                <form className="auth-form">
                    <div className="text-center mb-8">
                        <Logo text={'Log in'} />
                    </div>
                    <div className="mb-6 relative">
                        <Input
                            field='email'
                            placeholder='Email'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500'
                            value={formState.email.value}
                            onChangeHandler={handleInputValueChange}
                            type='text'
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.email.showError}
                            validationMessage={emailValidationMessage}
                        />
                        <i className="fa-solid fa-envelope absolute right-3 top-3 text-gray-400"></i>
                    </div>
                    <div className="mb-6 relative">
                        <Input
                            field='password'
                            placeholder='Password'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500'
                            value={formState.password.value}
                            onChangeHandler={handleInputValueChange}
                            type='password'
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.password.showError}
                            validationMessage={validatePasswordMessage}
                        />
                        <i className="fa-solid fa-lock absolute right-3 top-3 text-gray-400"></i>
                    </div>
                    <button
                        onClick={handleLogin}
                        disabled={isSubmitButtonDisable}
                        className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition-colors disabled:bg-indigo-300"
                    >
                        Log in
                    </button>
                    <div onClick={switchAuthHandler} className="mt-4 text-center text-gray-600 cursor-pointer hover:underline">
                        No tienes cuenta aun? Registrate ahora!
                    </div>
                </form>
            </div>
        </div>
    );
}