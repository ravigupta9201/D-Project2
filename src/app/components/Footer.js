import Image from "next/image"
import Link from "next/link"
import styles from "../styles/footer.module.css"
// import { Container } from "react-bootstrap"


const Footer = () => {
  return (
    <>
      <footer className={styles.footer_container}>
        <div className={styles.container}>
            <div className={styles.f_about}>
                <Image src="/logo2.svg" alt="dynamic-logo" width={250} height={50} />
                <p>Lorem ipsum dolor sit amet consectetur. Viverra morbi a eu amet. Amet ut quis sed cursus gravida eu. Amet tellus eget massa eget velit ac. Nisi et tellus integer faucibus sollicitudin faucibus.Lorem ipsum dolor sit amet consectetur. Viverra morbi a eu amet. Amet ut quis sed cursus gravida eu. Amet tellus eget massa eget velit ac. Nisi et tellus integer faucibus sollicitudin faucibus.</p>
            </div>

            <div className={styles.f_links}>
                <div>   
                    <h3>QUICK LINKS</h3>
                    <p></p>
                </div>

                <div>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/placement">Placement</Link></li>
                        <li><Link href="/training">Training</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>                
                </div>
            </div>

            <div className={styles.f_info}>
                <div>
                    <h3>INFORMATION</h3>
                    <p></p>
                </div>
                <div>
                    <ul>
                        <li><address> Birgunj, Panitanki-08, Nepal</address></li>
                        <li><Link href="mailto:info@creativeskills.com.np"> info@creativeskills.com.np</Link></li>
                        <li><Link href="tel: +977 9840092472"> 00977-51-530225 / 527821</Link></li>
                    </ul>     
                </div>
            </div>
        </div>

        <div className={styles.wave_svg}>
            <p>© Copyright 2022, Dynamicskills</p>
            <Image src="/bottomstick.svg" alt="bottom stick" width={1420} height={10} />
        </div>
      </footer>

    </>
  )
}

export default Footer
