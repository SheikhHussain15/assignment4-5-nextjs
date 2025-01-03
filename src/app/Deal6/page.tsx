import Image from "next/image";

export default function Deal6() {
    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Image Section */}
                <div className="container-image flex-shrink-0">
                    <Image 
                        src={"/image/deal6.png"} 
                        alt="Wow Box" 
                        width={400} 
                        height={400} 
                        className="rounded-lg shadow-md object-cover w-full h-auto"
                    />
                </div>

                {/* Text Section */}
                <div className="container-text text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Wow Box</h2>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                        Wait no more…Introducing The Real Crispy Chicken at McDonald’s!<br />
                        When you want to taste Real Crispy Chicken, sink your teeth into our juicier, meatier Crispy Chicken. You will be surprised at the delicate breading that gives you the delightful crispiness but lets you taste the succulence of the tender chicken in every bite.
                        Choose from the Crispy or Spicy option whereas the dipping sauce will only enhance the experience.
                        It tastes so good you cannot help saying i’m lovin’ it!
                    </p>
                    <button className="order bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
                        Order on BoostUp
                    </button>
                </div>
            </div>
        </div>
    );
}
