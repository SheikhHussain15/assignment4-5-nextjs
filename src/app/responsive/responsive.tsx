// import Header from "@/components/header"
import Link from "next/link"
import Image from "next/image";
import Deal1 from "../Deal1/page";
import Deal2 from "../Deal2/page";
import Deal3 from "../Deal3/page";
import Deal4 from "../Deal4/page";
import Deal5 from "../Deal5/page";
import Deal6 from "../Deal6/page";

export default function Responsive() {
  return ( 
    <div  className="parent-container">
      <Link href={"/Deal1"}><div className="child-container">
        <div className="image-container">
        {/* <img  src="/image/bucket.png" ></img> */}
        <Image src={"/image/deal1.png"} alt="Deal 1" width={300} height={300}/>
        </div>
        <h1 className="Rs">Krunch Chicken Combo</h1>
        <p className="description">1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken...</p>
        <h1 className="Rs">Rs 590</h1>
        <button className="btn">Read More</button>
      </div>
      </Link>

      <Link href="/Deal2"><div className="child-container"><div className="image-container">        
          <Image src={"/image/deal2.png"} alt="Deal 2" width={300} height={300}/>
        </div>
        <h1 className="Rs">Crazy Tuesday</h1>
        <p className="description">2 pieces of Hot and Crispy Fried Chicken and Fries...</p>
        <h1 className="Rs">Rs 390</h1>
        <button className="btn">Read More</button>
      </div>
      </Link>

      <Link href="/Deal3"><div className="child-container">
        <div className="image-container">
        <Image src={"/image/deal3.png"} alt="Deal 3" width={300} height={50} mb-10/>
        </div>
        <h1 className="Rs">Family Festival 3</h1>
        <p className="description">It includes 4 Zinger burgers + 4 pieces Crispy Chicken...</p>
        <h1 className="Rs">Rs 2550</h1>
        <button className="btn">Read More</button>
      </div>
      </Link>

      <Link href="/Deal4"><div className="child-container">
        <div className="image-container">
        <Image src={"/image/deal4.png"} alt="Deal 4" width={300} height={300}/>
        </div>
        <h1 className="Rs">Chicken & Chips</h1>
        <p className="description">2 pieces of Hot and Crispy Fried Chicken + Fries + ...</p>
        <h1 className="Rs">Rs 590</h1>
        <button className="btn">Read More</button>
      </div>
      </Link>

      <Link href="/Deal5"><div className="child-container">
        <div className="image-container">
        <Image src={"/image/deal5.png"} alt="Deal 5" width={300} height={300}/>
        </div>
        <h1 className="Rs">3 Pcs Chicken</h1>
        <p className="description">3 pieces of Hot and Crispy Fried Chicken + Drink...</p>
        <h1 className="Rs">Rs 670</h1>
        <button className="btn">Read More</button>
      </div>
      </Link>

      <Link href="/Deal5"><div className="child-container">
        <div className="image-container">
        <Image src={"/image/deal6.png"} alt="Deal 6" width={300} height={300}/>
        </div>
        <h1 className="Rs">Wow Box</h1>
        <p className="description">1 Signature Zinger + 1 pc Hot & Crispy Chicken +...</p>
        <h1 className="Rs">Rs 1020</h1>
        <button className="btn">Read More</button>
      </div>
      </Link>
    </div>   
  );
}
