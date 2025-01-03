import Image from "next/image";

export default function Aboutdiv() {
  return (
    <div className="bg-slate-900 flex flex-col lg:flex-row p-10 justify-around items-center lg:items-start">
      {/* Text Section */}
      <div className="flex flex-col w-full lg:w-5/12 mb-10 lg:mb-0">
        <h1 className="text-white text-2xl md:text-3xl font-semibold mb-5 text-center lg:text-left">
          ABOUT US
        </h1>
        <p className="text-sm md:text-base text-slate-400 text-center lg:text-left">
          We welcome you to explore our taste of the world, in continental and 
          Chinese delights and that's even before you get to the variety and excellence 
          of our barbecue grill. With warmth service rarely experienced, it is a 
          perfect place of rejoice with family, to soak in the relaxing decor and with deep 
          desire to revisit for once, in never enough! Now with our network of four branches 
          across the city of lights, it is possible to experience the magic, 
          whilst collect the best of memories much more close to home.<br />
          Now you can have the goodness of Kababjees delivered at home by just 
          ringing us a bell. Call 111-666-111 for more information.
        </p>
      </div>
      {/* Image Section */}
      <div className="w-full lg:w-5/12">
        <Image
          src={'/image/highway1.jpg'}
          width={1000}
          height={1000}
          alt="About Us Image"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
