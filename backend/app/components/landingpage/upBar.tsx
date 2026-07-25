export default function UpBar(){
    return(
        <div className="flex  w-full h-12 bg-orange-500 items-center">
            <div>
                <p className="text-white">recigram</p>
            </div>
            <div className=" justify-end  flex w-full h-full ">
                <button onClick={() => alert("messi")}>
                    <div className="w-20 h-8 bg-white rounded-lg ">
                        <p>Login</p>
                    </div>
                </button>
                <button>
                    <div className="w-20 h-8 bg-white rounded-lg ">
                        <p>Register</p>
                    </div>
                </button>
            </div>
        </div>
    )
}