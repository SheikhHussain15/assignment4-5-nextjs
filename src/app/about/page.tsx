
import Image from "next/image"
import Link from "next/link"

export default function About() {
    return (
        <div>
            <div className="flex items-center flex-col  bg-gray-900 lg:flex-row py-32 justify-around">
                <div className="food-btn">
                    <div className="food-pic"><Image src="/image/food-quality.jpg" alt="food-pic" width="400" height="200" /></div>
                    <h2 className="about-div-heading">Food Quality</h2>
                    <Link href={"/Food"}>
                        <button className="about-div-btn">Learn More</button>
                    </Link>
                </div>

                <div className="ingredients-btn">
                    <div className="ingredients-pic"><Image src="/image/ingredients.jpg" alt="ingredients-pic" width="400" height="200" /></div>
                    <h2 className="about-div-heading">Our Ingredients</h2>
                    <Link href={"/Ingredients"}>
                        <button className="about-div-btn">Learn More</button>
                    </Link>
                </div>

                <div className="know-btn">
                    <div className="know-pic"><Image src="/image/know.png" alt="know-pic" width="400" height="200" /></div>
                    <h2 className="about-div-heading">Your Right To Know</h2>
                    <button className="about-div-btn">Learn More</button>
                </div>
            </div>
        </div>
    )
}