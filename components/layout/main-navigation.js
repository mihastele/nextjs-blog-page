import Link from "next/link"

import Logo from "./logo"
import classes from './main-navigation.module.css'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <Link href="/">
                <Logo />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link href="">Contact</Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

// Give an anchor tag to non text-only links!!!
/*
<li>
    <Link href=""></Link>
</li>
*/

export default MainNavigation