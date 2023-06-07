import Image from "next/image"

import styles from "../styles/why_dynamic_card.module.css"

const WhyDymamicCard = ({heading}) => {
  return (
    <>
      <div className={styles.card_section}>
      <div className={styles.container}>
        <div className={styles.heading}>
            <Image src="/badge.svg" alt="my-logo" width={25} height={25} />
            <h3>{heading}</h3>
        </div>
        <div className={styles.paragraph}>
            <p>Lorem ipsum dolor sit amet consectetur. Nec augu egestas etiam tempor fringilla. Imperdiet faucibus volutpat nisi neque arcu odio enim non. Laoreet dis sed nisi diam urna. Quis adipiscing facilisis ut lorem sollicitudin interdum.etiam tempor fringilla. Imperdiet faucibus</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default WhyDymamicCard
