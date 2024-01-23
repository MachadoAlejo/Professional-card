import react from "react"
import linkedinLogo from "../images/linkedin.png"
import githubLogo from "../images/GitHub Icon.png"

export default function Main() {
    return (
        <div className="main--container">
            <h3 className="main--heading main--content">
                David Alejandro Machado Vergara
            </h3>
            <h4 className="main--h4--one main--content">
                Desarrollador FullStack
            </h4>

            <span className="main--span--two main--content">
                Mas acerca de mis proyectos
            </span>


            <div className="btn--class">
            <button className="main--btn btn--github" onClick={redirectToGitHub}>
                <img src={githubLogo} alt="" className= 'github'/>GitHub 
            </button>
            <button className="main--btn btn--linkedin" onClick={redirectToLinkedIn}> 
                <img src={linkedinLogo} className="linkedin"/>LinkedIn
            </button>
            </div>


            <div className="main--about--interest">
                <h3>Sobre mi..</h3>
                <p>Soy un joven desarrollador web con conocimientos basicos en leguajes de programacion como Html, Css, JavaScript, Java; Lenguajes de consulta como: SQL, noSQL, GraphQl; Y una gran capacidad de aprendizaje que me permite asimilar grandes cantidades de informacion</p>
                <h3>Intereses..</h3>
                <p>Me gusta mucho la paz de la naturaleza, prefiero lo rural, mas que lo urbano; Me visualizo aportando mi energia en proyectos grandes, que sean dirigidos a regalar tecnologia que nos ayude a mejorar la humanidad.
                </p>
            </div>

        </div>
    )
    function redirectToGitHub() {
        window.location.href = 'https://github.com/MachadoAlejo';
    }
    function redirectToLinkedIn() {
        window.location.href = 'https://www.linkedin.com/in/alejandro-machado-939295290/';
    }
}