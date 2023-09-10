import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
   const YEAR = new Date().getFullYear();

   return (
      <div className={styles.container}>
         <div>© Copyright {YEAR} Company Name. All rights reserved.</div>
         <div>
            <div className={styles.social}>
               <Image src="/1.png" alt="PDD" width={25} height={25} className={styles.icon} />
               <Image src="/2.png" alt="PDD" width={25} height={25} className={styles.icon} />
               <Image src="/3.png" alt="PDD" width={25} height={25} className={styles.icon} />
               <Image src="/4.png" alt="PDD" width={25} height={25} className={styles.icon} />
            </div>
         </div>
      </div>
   );
};

export default Footer;
