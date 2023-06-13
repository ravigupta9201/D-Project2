import Image from "next/image";

import styles from "../styles/testimonials.module.css";
import commonStyles from "@/app/styles/common_style.module.css"

const Testimonials = ({imageUrl, name, title, content}) => {
  return (
    <div className={styles.container}>
      <div className={styles.testimonials_box}>
          <div className={styles.profile_box}>
            <Image src={imageUrl} alt="testimonial-image" width={200} height={200} className={commonStyles.imageWrapper} />
            <h3>{name}</h3>
            <p>{title}</p>
          </div>

          <p className={styles.description}>
            {content}
          </p>
        </div>
    </div>
  );
};

export default Testimonials;
