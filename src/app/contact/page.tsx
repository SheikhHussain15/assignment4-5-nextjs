'use client'
import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
    return (
        <>
            <div className="contact-container">
                <div className="contact-header">
                    <h1>Contact Us</h1>
                    <p>We would love to hear from you! Reach out to us using the form below or through our contact details.</p>
                </div>

                <div className="contact-content">
                    {/* Left Section: Contact Form */}
                    <div className="contact-form">
                        <h2>Send Us a Message</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" placeholder="Your Message"  required></textarea>
                            </div>
                            <button type="submit" className="contact-btn">Send Message</button>
                        </form>
                    </div>

                    {/* Right Section: Contact Details */}
                    <div className="contact-details">
                        <h2>Our Contact Details</h2>
                        <div className="details-item">
                            <Image src="/image/location.png" alt="location-icon" width={30} height={30} />
                            <p>123 FastFood Lane, Foodie City, FC 12345</p>
                        </div>
                        <div className="details-item">
                            <Image src="/image/phone.png" alt="phone-icon" width={30} height={30} />
                            <p>(123) 456-7890</p>
                        </div>
                        <div className="details-item">
                            <Image src="/image/email.png" alt="email-icon" width={30} height={30} />
                            <p>contact@fastfood.com</p>
                        </div>
                        <h2>Follow Us</h2>
                        <div className="social-links">
                            <Link href="https://facebook.com"><Image src="/image/facebook.png" alt="facebook-icon" width={40} height={40} /></Link>
                            <Link href="https://twitter.com"><Image src="/image/twitter.png" alt="twitter-icon" width={40} height={40} /></Link>
                            <Link href="https://instagram.com"><Image src="/image/instagram.png" alt="instagram-icon" width={40} height={40} /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .contact-container {
                    padding: 20px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .contact-header {
                    text-align: center;
                    margin-bottom: 40px;
                }

                .contact-header h1 {
                    font-size: 2.5rem;
                    color: #f60;
                }

                .contact-header p {
                    font-size: 1.2rem;
                    color: #333;
                }

                .contact-content {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 40px;
                }

                .contact-form, .contact-details {
                    flex: 1 1 45%;
                    background: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                .contact-form h2, .contact-details h2 {
                    font-size: 1.8rem;
                    color: #f60;
                    margin-bottom: 20px;
                }

                .form-group {
                    margin-bottom: 20px;
                }

                .form-group label {
                    display: block;
                    font-size: 1rem;
                    margin-bottom: 5px;
                }

                .form-group input, .form-group textarea {
                    width: 100%;
                    padding: 10px;
                    font-size: 1rem;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }

                .contact-btn {
                    background-color: #f60;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    font-size: 1rem;
                    cursor: pointer;
                    border-radius: 5px;
                    transition: background-color 0.3s;
                }

                .contact-btn:hover {
                    background-color: #e55a00;
                }

                .details-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                }

                .details-item p {
                    margin-left: 10px;
                }

                .social-links {
                    display: flex;
                    gap: 10px;
                    margin-top: 20px;
                }

                @media (max-width: 768px) {
                    .contact-content {
                        flex-direction: column;
                    }

                    .contact-form, .contact-details {
                        flex: 1 1 100%;
                    }

                    .contact-header h1 {
                        font-size: 2rem;
                    }

                    .contact-header p {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </>
    );
}
