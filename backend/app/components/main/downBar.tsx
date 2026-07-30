import SearchBar from "./searchBar"
export default function DownBar(){
    return(
        <>
            <div className="flex bg-orange-500 w-full h-[40px] justify-center items-center">
                <div >
                    <SearchBar/>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}