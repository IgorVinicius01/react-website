import { Link, Outlet } from "react-router-dom";

function Home() {

    return (
        <div className="flex min-h-screen min-w-screen">
            <div className="flex flex-col bg-gradient-to-b from-[#1e3a8a] to-[#1e40af] w-[250px] p-4">
                <div className="flex w-full h-[50px] items-center justify-center pt-4">
                    <h1 className="text-white font-bold text-3xl">
                        RD Alugueis
                    </h1>
                </div>

                <div className="flex flex-col gap-1 w-full h-[500px] mt-12">
                    <Link 
                        className="
                            flex w-full h-[45px] 
                            items-center pl-4
                            text-white text-lg 
                            rounded-sm cursor-pointer 
                            hover:bg-blue-500"
                        to={"."}>
                            Home
                    </Link>
                    <Link 
                        className="
                            flex w-full h-[45px] 
                            items-center pl-4
                            text-white text-lg 
                            rounded-sm cursor-pointer 
                            hover:bg-blue-500"
                        to={"predio"}>
                            Prédio
                    </Link>
                    <Link 
                        className="
                            flex w-full h-[45px] 
                            items-center pl-4
                            text-white text-lg 
                            rounded-sm cursor-pointer 
                            hover:bg-blue-500"
                        to={"."}>
                            Kitnets
                    </Link>
                    <Link 
                        className="
                            flex w-full h-[45px] 
                            items-center pl-4
                            text-white text-lg 
                            rounded-sm cursor-pointer 
                            hover:bg-blue-500"
                        to={"."}>
                            Outros
                    </Link>

                </div>

            </div>

            <div className="flex-1 bg-gray-100">
                <Outlet/>
            </div>
        </div>
    )
}

export default Home;