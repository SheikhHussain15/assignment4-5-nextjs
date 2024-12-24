import Image from "next/image"

export default function Food() {
    return (
        <div>

            <div className="food">
                <h2 className="heading1">Food Quality</h2>

                <div className="div">
                    <div className="pic"><Image src="/image/meats.png" alt="meat-pic" width="550" height="300" /></div>
                    <div className="dis">
                        <h3 className="heading2">Meat 100% Purity</h3>
                        <p>100% purity is the reason why all our beef sandwiches taste so delicious. They are made from halal beef cuts with no additives or preservatives. Chicken that we serve is carefully deboned breast meat only, with seasoned batter and a choice of sauce portions, while our Spicy McCrispy Chicken Deluxe uses only muscle cuts.
                            All relevant authorities monitor our high quality standards of halal chicken.
                        </p>
                    </div>
                </div>

                <div className="div">
                    <div className="pic"><Image src="/image/buns.png" alt="buns-pic" width="550" height="300" /></div>
                    <div className="dis">
                        <h3 className="heading2">High Quality Baked Buns</h3>
                        <p>We source our buns from suppliers who use only high quality wheat.
                            All the buns are subject to strict quality and safety controls all through the production process.
                        </p>
                    </div>
                </div>

                <div className="div">
                    <div className="pic"><Image src="/image/vegetables.png" alt="vegetables-pic" width="550" height="300" /></div>
                    <div className="dis">
                        <h3 className="heading2">Crunchy Farm-fresh Vegetables</h3>
                        <p>We select the best of the best vegetables that are continuously monitored for freshness, high nutrients and safety,
                            to maintain top quality standards. We use regional/local suppliers to ensure that the freshness and high quality are delivered to you in all our products.
                        </p>
                    </div>
                </div>

                <div className="div">
                    <div className="-pic"><Image src="/image/milk.png" alt="milk-pic" width="550" height="300" /></div>
                    <div className="dis">
                        <h3 className="heading2">High Energy Wholesome Dairies</h3>
                        <p>To maintain the high quality standards of the world famous McDonald’s cheese, shakes, Mcflurry and Sundaes, we ensure that the fresh milk comes from the approved regional and local suppliers. Quality control procedures are followed throughout the supply chain – from freshness of the milk,
                            all the way to handling, processing and transportation to ensure the quality of the end product.
                        </p>
                    </div>
                </div>

                <div className="div">
                    <div className="pic"><Image src="/image/potato.png" alt="potato-pic" width="550" height="300" /></div>
                    <div className="dis">
                        <h3 className="heading2">Fries Naturally Crisp</h3>
                        <p>Our fries are crispy and far from the ordinary. The secret lies in the harvesting of high quality potatoes that come from trusted suppliers. The potatoes are then cooked using only 100% vegetable oil with no fats or flavours and only some salt is added after cooking.
                        </p>
                    </div>
                </div>

                <div className="div">
                    <div className="pic"><Image src="/image/safe.png" alt="safe-pic" width="550" height="300" /></div>
                    <div className="dis">
                        <h3 className="heading2">All Safe 'n' Sound</h3>
                        <p>applied system to keep food safety absolute from point zero till the point it is served to our customers. This ensures the quality from our regional suppliers’ production lines down to the kitchens of our restaurants.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}