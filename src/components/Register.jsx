import { useState } from 'react'
import { Logo } from './Logo'
import { Input } from './Input'
import {
    emailValidationMessage,
    validationEmail,
    validatePasswordMessage,
    validatePassword,
    validateUsername,
    validateUsernameMessage,
    validateConfirmPassword,
    passwordConfirmationMessage
} from '../shared/validators'
import { useRegister } from '../shared/hooks'

export const Register = ({ switchAuthHandler }) => {
    const { register, isLoading } = useRegister();

    const [formState, setFormState] = useState({
        username: {
            value: '',
            isValid: false,
            showError: false
        },
        password: {
            value: '',
            isValid: false,
            showError: false
        },
        passwordConfirm: {
            value: '',
            isValid: false,
            showError: false
        },
        email: {
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

            case 'passwordConfirm':
                isValid = validateConfirmPassword(formState.password.value, value)
                break

            case 'username':
                isValid = validateUsername(value)
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

    const handleRegister = (event) => {
        event.preventDefault()

        register(formState.username.value, formState.password.value, formState.email.value)
    }

    const isSubmitButtonDisable = isLoading || !formState.username.isValid || !formState.email.isValid || !formState.password.isValid || !formState.passwordConfirm.isValid

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-6 py-8">
                    <div className="text-center mb-6">
                        <Logo text={'Register'} />
                    </div>
                    <form className="auth-form">
                        <div className="mb-4">
                            <Input
                                field="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                                value={formState.email.value}
                                onChangeHandler={handleInputValueChange}
                                type="text"
                                onBlurHandler={handleInputValidationOnBlur}
                                showErrorMessage={formState.email.showError}
                                validationMessage={emailValidationMessage}
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                field="username"
                                placeholder="Username"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                                value={formState.username.value}
                                onChangeHandler={handleInputValueChange}
                                type="text"
                                onBlurHandler={handleInputValidationOnBlur}
                                showErrorMessage={formState.username.showError}
                                validationMessage={validateUsernameMessage}
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                field="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                                value={formState.password.value}
                                onChangeHandler={handleInputValueChange}
                                type="password"
                                onBlurHandler={handleInputValidationOnBlur}
                                showErrorMessage={formState.password.showError}
                                validationMessage={validatePasswordMessage}
                            />
                        </div>
                        <div className="mb-6">
                            <Input
                                field="passwordConfirm"
                                placeholder="Confirm Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                                value={formState.passwordConfirm.value}
                                onChangeHandler={handleInputValueChange}
                                type="password"
                                onBlurHandler={handleInputValidationOnBlur}
                                showErrorMessage={formState.passwordConfirm.showError}
                                validationMessage={passwordConfirmationMessage}
                            />
                        </div>
                        <button
                            onClick={handleRegister}
                            disabled={isSubmitButtonDisable}
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Register
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        <span
                            onClick={switchAuthHandler}
                            className="auth-form-switch-label text-sm text-gray-600 cursor-pointer hover:underline"
                        >
                            Already have an account? Log in now!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

}