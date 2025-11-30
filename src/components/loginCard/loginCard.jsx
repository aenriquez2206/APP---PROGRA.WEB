import './loginCard.css'

const LoginCard = ({ children }) =>
    {
        return(
            <>
            <section id="loginScreen">
            <div id="lC">
                {children}
            </div>
            </section>
            </>
        )
    }

export default LoginCard