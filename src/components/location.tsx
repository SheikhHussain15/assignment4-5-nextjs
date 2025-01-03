import Image from "next/image"
export default function Locations(){
    return(
        <div className="flex flex-col bg-slate-900 mb-24">
            <h1 className="text-center text-5xl text-white font-bold">OUR LOCATIONS</h1>
            <div className="flex mt-10 ml-5 flex-col lg:flex-row justify-around ">
                <div>
                    <Image src={'/image/Location1.jpg'} alt="" width={100} height={100} className="w-4/5 h-[300px] ml-5 rounded-lg lg:w-52"/>
                    <h1 className="text-amber-200 text-2xl text-center font-semibold mt-3">Highway</h1>
                </div>
                <div>
                    <Image src={'/image/Location2.jpg'} alt="" width={100} height={100} className="w-4/5 h-[300px] ml-5 rounded-lg lg:w-52"/>
                    <h1 className="text-amber-200 text-2xl text-center font-semibold mt-3">DO Darya</h1>
                </div>
                <div>
                    <Image src={'/image/Location3.jpg'} alt="" width={100} height={100} className="w-4/5 h-[300px] ml-5 rounded-lg lg:w-52"/>
                    <h1 className="text-amber-200 text-2xl text-center font-semibold mt-3">Lahore</h1>
                </div>
                <div>
                    <Image src={'/image/Location4.jpg'} alt="" width={100} height={100} className="w-4/5 h-[300px] ml-5 rounded-lg lg:w-52"/>
                    <h1 className="text-amber-200 text-2xl text-center font-semibold mt-3">Hyderabad</h1>
                </div>
            </div>
        </div>
    )
}