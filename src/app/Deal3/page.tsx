'use client'
import Image from "next/image";
export default function Deal3() {
    return (
        <>
            <div className="container-one">
                <div className="container-two">
                    <div className="container-image">
                        <Image src={"/image/deal3.png"} alt="left-img" width={400} height={400} />
                    </div>
                    <div className="container-text">
                        <h2 className="big-head">Family Festival 3</h2>
                        <p className="normal-text">
                            Wait no more…Introducing The Real Crispy Chicken at McDonald’s!<br />
                            When you want to taste Real Crispy Chicken, sink your teeth into our juicier, meatier Crispy Chicken. You will be surprised at the delicate breading that gives you the delightful crispiness but lets you taste the succulence of the tender chicken in every bite.
                            Choose from the Crispy or Spicy option whereas the dipping sauce will only enhance the experience.
                            It tastes so good you cannot help saying i’m lovin’ it!
                        </p>
                        <button className="order">Order on BoostUp</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .container-one {
                    display: flex;
                    justify-content: center;
                    padding: 20px;
                }

                .container-two {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    max-width: 1200px;
                    width: 100%;
                }

                .container-image {
                    flex: 1 1 300px;
                    text-align: center;
                    margin: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .container-text {
                    flex: 1 1 300px;
                    text-align: center;
                    margin: 10px;
                    max-width: 600px;
                }

                .big-head {
                    font-size: 2rem;
                    font-weight: bold;
                    margin-bottom: 20px;
                    color: #333;
                }

                .normal-text {
                    font-size: 1rem;
                    margin-bottom: 20px;
                    color: #555;
                    line-height: 1.5;
                }

                .order {
                    background-color: #f60;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    font-size: 1rem;
                    cursor: pointer;
                    border-radius: 5px;
                    transition: background-color 0.3s;
                }

                .order:hover {
                    background-color: #e55a00;
                }

                /* Tablet and below */
                @media (max-width: 768px) {
                    .big-head {
                        font-size: 1.5rem;
                    }

                    .normal-text {
                        font-size: 0.9rem;
                    }

                    .container-two {
                        flex-direction: column;
                        align-items: center;
                    }

                    .container-image {
                        margin-bottom: 20px;
                        width: 80%;  /* Limit image size for smaller devices */
                    }

                    .container-text {
                        width: 80%;
                        margin: 0 20px;
                    }

                    .order {
                        font-size: 1rem;
                        width: 100%; /* Full-width button for small devices */
                    }
                }

                /* Mobile devices */
                @media (max-width: 480px) {
                    .big-head {
                        font-size: 1.2rem;
                    }

                    .normal-text {
                        font-size: 0.85rem;
                    }

                    .order {
                        font-size: 0.9rem;
                    }

                    .container-image {
                        width: 100%; /* Full-width image */
                    }

                    .container-text {
                        width: 90%;
                        font-size: 0.85rem;
                    }

                    .order {
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </>
    );
}
