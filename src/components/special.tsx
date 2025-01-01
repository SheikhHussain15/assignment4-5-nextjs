'use client'
import SpecialtiesSlider from "@/components/slider2"
export default function Special(){
    return(
        <div className="flex flex-col items-center justify-center mb-10 h-screen bg-[url('/image/bg-3.jpg')] bg-cover bg-center bg-fixed ">
            <div className="flex flex-col items-center text-white">
            <h1 className="font-bold font-[sans] text-5xl mt-16 mb-2">Our Specialities</h1>
            <div className="w-[60%] h-[3px] bg-amber-300 my-2 "></div>
            <p className="font-semi text-yellow-700 text-stroke bold font-[mono] text-3xl mt-1">Some of our best Specialities menu</p>
            </div>
            
            <SpecialtiesSlider />
        </div>
    )
}