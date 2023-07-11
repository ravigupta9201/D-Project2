import {Card} from 'react-bootstrap';
import Image from 'next/image';
import cardData from "./Card_Data";
import styles from "@/app/about/styles/testimonial.module.css"

const Testimonial = () => {
  return (
    <>
    <div className={styles.container}>
    {cardData.map((card) => (
            <div key={card.id}> 
                <Card className={styles.card_section}  >
                  <p>
                    {card.content}
                  </p>
                  <div className={styles.card_profile}>
                    <Image
                      src={card.imageUrl}
                      alt="team testimonial image"
                      width={50}
                      height={50}
                    />
                    <div>
                      <h4>{card.name}</h4>
                      <p>{card.title}</p>
                    </div>
                  </div>
                </Card>
              </div>
          ))}
          </div>
    </>
  )
}

export default Testimonial
