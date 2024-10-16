import Header from "@/components/header";
import Image from "next/image";
export default function Deal5(){
    return(
        <>    
        <Header />
        <div className="container-one">
                <div className="container-two">  
                <div className="container-image">
                    <Image src={"/image/deal5.png" } alt="left-img" width={400} height={400}/>
                </div>
                <div className="container-text">
                    <h2 className="big-head">3 Pcs Chicken</h2>
                    <p className="normal-text">Wait no more…Introducing The Real Crispy Chicken at McDonald’s!<br></br>
                    When you want to taste Real Crispy Chicken, sink your teeth into our juicier, meatier Crispy Chicken. You will be surprised at the delicate breading that gives you the delightful crispiness but lets you taste the succulence of the tender chicken in every bite.
                     Choose from the Crispy or Spicy option whereas the dipping sauce will only enhance the experience.
                    It tastes so good you cannot help saying i’m lovin’ it!</p>
                    <button className="order">Order on BoostUp</button>
                </div>
            </div>  
        </div>
        </>    
    )
}