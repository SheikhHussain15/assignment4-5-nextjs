import Image from "next/image";
import Styles from "./cards.module.css"; 
import Link from "next/link";

interface CardProps {
  link:string,
  imgsrc:string,
  title:string,
  descripton:string,
  rs:number
}

export default function CarsCard({ link,imgsrc,descripton,title,rs }:CardProps) {
  return (
    <div className="p-4">
      <Link href={link} ><div className={`${Styles.childcontainer}`}>
          <div className={`${Styles.imagecontainer}`}>
            {/* <img  src="/image/bucket.png" ></img> */}
            <Image src={imgsrc} alt="Deal 1" width={300} height={300} />
          </div>
          <div>
          <h1 className='font-mono font-bold text-xl backdrop-blur-[50px] text-slate-200 mt-3'>{title}</h1>
          <p className={`${Styles.description}`}>{descripton}</p>
          <h1 className={`${Styles.Rs}`}>Rs {rs}</h1>
          </div>
          <button className={`${Styles.btn}`}>Read More</button>
        </div>
        </Link>
    </div>
  );
}