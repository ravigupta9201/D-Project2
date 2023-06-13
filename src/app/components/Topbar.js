import React from "react";
import { MdPhone, MdRoom, MdLocationOn, MdMail, MdFacebook } from "react-icons/md";

import { BsInstagram, BsTwitter } from "react-icons/bs";
import { Container } from "react-bootstrap";
import Link from "next/link";

import styles from "../styles/topbar.module.css"

const Topbar = () => {
  return (
    <>
      <nav className={styles.main_header}>
      <Container>
        <ul className={styles.listItem}>
          <li >
            <MdLocationOn size={20}  />
            <p style={{margin:"5px 0"}}>Birgunj, Panitanki-08, Nepal</p>
          </li>

          <li >
            <MdMail size={20}  />
            <Link href="mailto:ravigupta9201@gmail.com">
              info@creativeskills.com.np
            </Link>
          </li>

          <li >
            <MdPhone size={20}  />
            <Link href="tel: +977 9840092072"> 00977-51-530225 / 527821</Link>
          </li>

          <li >
            <MdFacebook size={20}  />
            <BsInstagram size={20}  />
            <BsTwitter size={20}  />
          </li>
        </ul>
      </Container>
      </nav>
    </>
  );
};

export default Topbar;
