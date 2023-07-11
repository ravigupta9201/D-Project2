import Image from "next/image";

import styles from "../styles/testimonials.module.css";
import commonStyles from "@/app/styles/common_style.module.css"

const Testimonials = ({imageUrl, name, title, content}) => {
  return (

    <div data-aos="fade-up">
      <div>
          <div>
            <Image src={imageUrl} alt="testimonial-image" width={200} height={200} className={commonStyles.imageWrapper} />
            <h3> {name} </h3>
            <p> {title} </p>
          </div>
          <p> {content} </p>
        </div>
    </div>




    // <div className={styles.container} data-aos="fade-up">
    //   <div className={styles.testimonials_box}>
    //       <div className={styles.profile_box}>
    //         <Image src={imageUrl} alt="testimonial-image" width={200} height={200} className={commonStyles.imageWrapper} />
    //         <h3>{name}</h3>
    //         <p>{title}</p>
    //       </div>

    //       <p className={styles.description}>
    //         {content}
    //       </p>
    //     </div>
    // </div>

  );
};

export default Testimonials;
