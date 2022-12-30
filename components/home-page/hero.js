import classes from './hero.module.css'
import Image from 'next/image'

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="images/site/logo.svg" alt="logo" width={300} height={300} />
            </div>
            <h1>Hi, I'm Miha</h1>
            <p>Hello hello hello hello hello hello hello hello hello hello hello</p>
        </section>)
}

export default Hero