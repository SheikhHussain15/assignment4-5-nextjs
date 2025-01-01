import Link from "next/link"
import Styles from './header.module.css'

export default function Header() {
    return (
        <div className={`${Styles.header}`}>
            <div className={`${Styles.logo}`}><h1><span>Boost UP</span></h1></div>
            <ul className={`${Styles.navbar}`}>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/menu"><li>Menu</li></Link>
                <Link href="/contact"><li>Contact</li></Link>
            </ul>
        </div>
    )
}