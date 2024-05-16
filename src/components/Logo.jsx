
export const Logo = ({ text }) => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="auth-form-logo-container text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="Logo" style={{ width: '200px', height: 'auto' }} />
                <br />
                <span className="login__title">{text}</span>
            </div>
        </div>
    );
}