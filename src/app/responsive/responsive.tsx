'use client'
import Special from "@/components/special";
import Footer from "@/components/footer";
import DynamicBackgroundVideos from "@/components/video";
import Aboutdiv from "@/components/aboutdiv";
import Locations from "@/components/location";


export default function Responsive() {
  return (
    <>
      <div className="">
        <DynamicBackgroundVideos />
      </div>
      <div className='bg-slate-900 pt-5'>
        <div>
          <Aboutdiv />
        </div>

        <div className="w-[100%] mt-28 mb-24 p-5">
          <Special />
        </div>

        <div>
          <Locations />
        </div>

      <Footer />
      </div>
    </>
  );
}
