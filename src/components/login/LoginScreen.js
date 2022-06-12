import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        // navigate('/marvel');

        // al pasarle un objeto con la propiedad "replace" en true remplaza en el historial de navegacion 
        // la pagina actual por la nueva pagina, de esta forma una vez logueados ya no vamos a poder 
        // regresar al login si presionamos el boton de retroceso del historial
        navigate('/marvel', {
            replace: true
        })
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
  