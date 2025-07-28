import {Link} from "react-router-dom"
const Homepage = () =>{
    return(
        <>
         <div class="container">
        <h1 class="heading">Welcome to World of Random Jokes</h1>
        <div class="buttons">
              <Link to = "/login">
            <button class="btn btn-login" onclick="alert('Login clicked!')">
                <span>Login</span>
            </button>
            </Link>
            <Link to = "/register">
            <button class="btn btn-register" onclick="alert('Register clicked!')">
                <span>Register</span>
            </button>
            </Link>
            <Link to = "/profile">
            <button class="btn btn-jokes" onclick="alert('Here\'s a joke: Why don\'t scientists trust atoms? Because they make up everything!')">
                <span>Profile</span>
            </button>
            </Link>
        </div>
    </div>
        </>
    )
}
export default Homepage