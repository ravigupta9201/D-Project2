import styles from "@/app/about/styles/heroSection.module.css"
import Link from "next/link"

const Hero_Section = ({title, link}) => {
  return (
    <>

        <div className={styles.container} >
            <div className={styles.profile}>
                <h3>{title}</h3>
                <Link href="/about">{link}</Link>
            </div>
        </div>
    </>
  )
}

export default Hero_Section
