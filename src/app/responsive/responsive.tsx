// import Header from "@/components/header"
import Link from "next/link"
import Image from "next/image";
import Styles from "./page.module.css";

export default function Responsive() {
  return ( 
    <div  className={`${Styles.parentcontainer}`} >
      <Link href={"/Deal1"} ><div className={`${Styles.childcontainer}`}>
        <div className={`${Styles.imagecontainer}`}>
        {/* <img  src="/image/bucket.png" ></img> */}
        <Image src={"/image/deal1.png"} alt="Deal 1" width={300} height={300}/>
        </div>
        <h1 className={`${Styles.Rs}`}>Krunch Chicken Combo</h1>
        <p className={`${Styles.description}`}>1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken...</p>
        <h1 className={`${Styles.Rs}`}>Rs 590</h1>
        <button className={`${Styles.btn}`}>Read More</button>
      </div>
      </Link>

      <Link href="/Deal2"><div className={`${Styles.childcontainer}`}><div className={`${Styles.imagecontainer}`}>        
          <Image src={"/image/deal2.png"} alt="Deal 2" width={300} height={300}/>
        </div>
        <h1 className={`${Styles.Rs}`}>Crazy Tuesday</h1>
        <p className={`${Styles.description}`}>2 pieces of Hot and Crispy Fried Chicken and Fries...</p>
        <h1 className={`${Styles.Rs}`}>Rs 390</h1>
        <button className={`${Styles.btn}`}>Read More</button>
      </div>
      </Link>

      <Link href="/Deal3"><div className={`${Styles.childcontainer}`}>
        <div className={`${Styles.imagecontainer}`}>
        <Image src={"/image/deal3.png"} alt="Deal 3" width={300} height={50} mb-10/>
        </div>
        <h1 className={`${Styles.Rs}`}>Family Festival 3</h1>
        <p className={`${Styles.description}`}>It includes 4 Zinger burgers + 4 pieces Crispy Chicken...</p>
        <h1 className={`${Styles.Rs}`}>Rs 2550</h1>
        <button className={`${Styles.btn}`}>Read More</button>
      </div>
      </Link>

      <Link href="/Deal4"><div className={`${Styles.childcontainer}`}>
        <div className={`${Styles.imagecontainer}`}>
        <Image src={"/image/deal4.png"} alt="Deal 4" width={300} height={300}/>
        </div>
        <h1 className={`${Styles.Rs}`}>Chicken & Chips</h1>
        <p className={`${Styles.description}`}>2 pieces of Hot and Crispy Fried Chicken + Fries + ...</p>
        <h1 className={`${Styles.Rs}`}>Rs 590</h1>
        <button className={`${Styles.btn}`}>Read More</button>
      </div>
      </Link>

      <Link href="/Deal5"><div className={`${Styles.childcontainer}`}>
        <div className={`${Styles.imagecontainer}`}>
        <Image src={"/image/deal5.png"} alt="Deal 5" width={300} height={300}/>
        </div>
        <h1 className={`${Styles.Rs}`}>3 Pcs Chicken</h1>
        <p className={`${Styles.description}`}>3 pieces of Hot and Crispy Fried Chicken + Drink...</p>
        <h1 className={`${Styles.Rs}`}>Rs 670</h1>
        <button className={`${Styles.btn}`}>Read More</button>
      </div>
      </Link>

      <Link href="/Deal5"><div className={`${Styles.childcontainer}`}>
        <div className={`${Styles.imagecontainer}`}>
        <Image src={"/image/deal6.png"} alt="Deal 6" width={300} height={300}/>
        </div>
        <h1 className={`${Styles.Rs}`}>Wow Box</h1>
        <p className={`${Styles.description}`}>1 Signature Zinger + 1 pc Hot & Crispy Chicken +...</p>
        <h1 className={`${Styles.Rs}`}>Rs 1020</h1>
        <button className={`${Styles.btn}`}>Read More</button>
      </div>
      </Link>
    </div>   
  );
}
