import Image from "next/image"

export default function Ingredients() {
    return (
        <div>

            <div className="ingredients">
                <h2 className="heading1">Our Ingredients </h2>

                <div className="Our-ingredients">
                    <Image src={'/image/Our-Ingredients1.png'} alt="" width={1200} height={1000} />
                </div>

                <div className="div">
                    <div className="pic overflow-clip"><Image src="/image/card-1-1.png" alt="card1-pic" width="550" height="200" /></div>
                    <div className="dis">
                        <h3 className="heading2">Pure HALAL Beef</h3>
                        <p>McDonald's meat patties are produced from 100% pure halal beef with no additives, preservatives or flavour enhancers. The beef patties are prepared and packaged at McDonald's approved meat plants. In addition to inspections carried out before the beef arrives at the plants, our suppliers undertake several separate quality checks on every batch. All our beef is grilled to perfection, without the addition of fats or oils, on a double sided hotplate, and we make sure that the specified temperature is maintained during the whole 
                        beef-grilling process to ensure safety while guaranteeing juicy tasty patties.
                        </p>
                    </div>
                </div>

                <div className="div">
                    <div className="pic overflow-clip"><Image src="/image/card-2-1.png" alt="card2-pic" width="550" height="300" /></div>
                    <div className="dis">
                        <h3 className="heading2">HALAL Farm-FRESH Chicken</h3>
                        <p>All our chicken sandwiches and McNuggets are made from manually deboned chicken breast meat. 
                            No additives or preservatives are added during any stage of preparation.
                        </p>
                    </div>
                </div>

                <div className="div">
                    <div className="pic overflow-clip"><Image src="/image/card-3-1.png" alt="card3-pic" width="550" height="300" /></div>
                    <div className="dis">
                        <h3 className="heading2">Potatoes</h3>
                        <p>Our fries are crispy and far from the ordinary. The secret lies in the harvesting
                            of high quality potatoes that come from trusted suppliers. The potatoes are then cooked using only 
                            100% vegetable oil with no fats or flavours, and only some salt is added after cooking.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}