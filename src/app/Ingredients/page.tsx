import Image from "next/image";

export default function Ingredients() {
    return (
        <div className="ingredients-container p-4 md:p-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800">Our Ingredients</h2>
            </div>

            <div className="our-ingredients mb-12 flex justify-center">
                <Image 
                    src={'/image/Our-Ingredients1.png'} 
                    alt="Our Ingredients" 
                    width={1200} 
                    height={1000} 
                    className="rounded-lg shadow-lg max-w-full"
                />
            </div>

            <div className="ingredient-section grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="pic overflow-hidden rounded-lg shadow-md">
                    <Image 
                        src="/image/card-1-1.png" 
                        alt="Pure HALAL Beef" 
                        width={550} 
                        height={200} 
                        className="object-cover w-full h-auto"
                    />
                </div>
                <div className="dis text-gray-700">
                    <h3 className="text-2xl font-semibold mb-4">Pure HALAL Beef</h3>
                    <p className="leading-relaxed">
                        McDonald&apos;s meat patties are produced from 100% pure halal beef with no additives, 
                        preservatives or flavour enhancers. The beef patties are prepared and packaged at McDonald&apos;s approved meat plants. In addition to inspections carried out before the beef arrives at the plants, our suppliers undertake several separate quality checks on every batch. All our beef is grilled to perfection, without the addition of fats or oils, on a double sided hotplate, and we make sure that the specified temperature is maintained during the whole beef-grilling process to ensure safety while guaranteeing juicy tasty patties.
                    </p>
                </div>
            </div>

            <div className="ingredient-section grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="pic overflow-hidden rounded-lg shadow-md">
                    <Image 
                        src="/image/card-2-1.png" 
                        alt="HALAL Farm-FRESH Chicken" 
                        width={550} 
                        height={300} 
                        className="object-cover w-full h-auto"
                    />
                </div>
                <div className="dis text-gray-700">
                    <h3 className="text-2xl font-semibold mb-4">HALAL Farm-FRESH Chicken</h3>
                    <p className="leading-relaxed">
                        All our chicken sandwiches and McNuggets are made from manually deboned chicken breast meat. 
                        No additives or preservatives are added during any stage of preparation.
                    </p>
                </div>
            </div>

            <div className="ingredient-section grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="pic overflow-hidden rounded-lg shadow-md">
                    <Image 
                        src="/image/card-3-1.png" 
                        alt="Potatoes" 
                        width={550} 
                        height={300} 
                        className="object-cover w-full h-auto"
                    />
                </div>
                <div className="dis text-gray-700">
                    <h3 className="text-2xl font-semibold mb-4">Potatoes</h3>
                    <p className="leading-relaxed">
                        Our fries are crispy and far from the ordinary. The secret lies in the harvesting of high quality potatoes that come from trusted suppliers. The potatoes are then cooked using only 100% vegetable oil with no fats or flavours, and only some salt is added after cooking.
                    </p>
                </div>
            </div>
        </div>
    );
}
