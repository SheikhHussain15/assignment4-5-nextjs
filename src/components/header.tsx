import Link from "next/link"

export default function Header(){
    return(
        <div className="header">
            <div className="logo"><h1><span>Boost UP</span></h1></div>
            <ul className="navbar">
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/services"><li>Services</li></Link>
                <Link href="/contact"><li>Contact</li></Link>
            </ul>
        </div>
    )
}