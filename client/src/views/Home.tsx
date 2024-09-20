import { FaCampground, FaCircleUser, FaHandHoldingDroplet, FaHospital } from "react-icons/fa6"
import { PiBankFill } from "react-icons/pi"

const Home = () => {
  return (
    <div className='pt-20 min-h-screen bg-[url("/Designer.png")] bg-center bg-cover bg-gray-800 bg-opacity-95 bg-blend-multiply '>
        <div className="p-12">

            <div className="flex items-center">
                <div className="text-white px-16 pb-10 flex gap-6">
                    <div className="min-h-full min-w-4 bg-white"></div>
                    <div>
                        <p className="text-9xl font-extrabold text-white">RaktSetu</p>
                        <p className="text-7xl font-extrabold mt-10 mb-4">Donate Blood Today</p>
                        <p className="text-5xl font-extrabold">And Safe a Life</p>
                    </div>
                </div>
                <div className="">
                    <img src="/hero.png" alt="" className="h-96 w-96" />
                </div>
            </div>

            {/* cards */}
            <div className="flex gap-10 text-white mt-4">
                <div className="rounded-xl shadow-lg p-8 hover:-translate-y-2 transition-transform duration-300 cursor-pointer bg-[#ff0e0e] hover:bg-[#ba1e1e]">
                    <div className="flex flex-col gap-6 items-center justify-center">
                        <FaHandHoldingDroplet size={50} />
                        <p className="text-xl text-center font-bold">Search Blood Availability</p>
                    </div>
                </div>
                <div className="rounded-xl shadow-lg p-8 hover:-translate-y-2 transition-transform duration-300 cursor-pointer bg-[#0e6eff] hover:bg-[#1e83ba]">
                    <div className="flex flex-col gap-6 items-center justify-center">
                        <FaHospital size={50} />
                        <p className="text-xl text-center font-bold">Blood Bank Directory</p>
                    </div>
                </div>
                <div className="rounded-xl shadow-lg p-8 hover:-translate-y-2 transition-transform duration-300 cursor-pointer bg-[#ffa70e] hover:bg-[#ba811e]">
                    <div className="flex flex-col gap-6 items-center justify-center">
                        <FaCampground  size={50} />
                        <p className="text-xl text-center font-bold">Blood Donation Camps</p>
                    </div>
                </div>
                <div className="rounded-xl shadow-lg p-8 hover:-translate-y-2 transition-transform duration-300 cursor-pointer bg-[#06d221fa] hover:bg-[#24872e]">
                    <div className="flex flex-col gap-6 items-center justify-center">
                        <PiBankFill  size={50} />
                        <p className="text-xl text-center font-bold">Register Your Blood Bank</p>
                    </div>
                </div>
                <div className="rounded-xl shadow-lg p-8 hover:-translate-y-2 transition-transform duration-300 cursor-pointer bg-[#cad809] hover:bg-[#b5ba1e]">
                    <div className="flex flex-col gap-6 items-center justify-center">
                        <FaCircleUser size={50} />
                        <p className="text-xl text-center font-bold">Donor Login</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home