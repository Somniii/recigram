
import NotGlass from "@/app/styles/notglass"
export default function LoginSquare(){
    return(
        <>
            <div>
                <NotGlass>
                    <form  className="flex justify-center">
                        <div>
                            <p>Username</p>
                            <input type="text"></input>
                            <p>Password</p>
                            <input type="password"></input>
                            <button>Login</button>
                            <button>Register</button>
                        </div>
                        
                    </form>
                </NotGlass>
            </div>
        </>
    )
}