import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Contact from "../contact/page";

const About = () => {
   return (
      <div className={styles.container}>
         <div className={styles.imgContainer}>
            <Image
               src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
               fill={true}
               alt=""
               className={styles.img}
            />
            <div className={styles.imgText}>
               <h1 className={styles.title}>Ditial Storytellers</h1>
               <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
            </div>
         </div>
         <div className={styles.textContainer}>
            <div className={styles.item}>
               <h1 className={styles.title}>Who Are We?</h1>
               <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sit tenetur minima, quos a quasi nam
                  harum nobis voluptatum delectus ratione sequi ex debitis dolore numquam consequatur corrupti,
                  repellendus ipsum!
                  <br />
                  <br />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis rerum suscipit molestiae natus
                  maiores minima, consequatur rem necessitatibus vitae! Quis corporis earum explicabo quae illo
                  dignissimos neque facilis eos voluptates. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatum suscipit quidem reiciendis quis cupiditate nulla iusto vitae cumque itaque unde. Corporis
                  totam asperiores distinctio natus fuga quod saepe id quam.
               </p>
            </div>
            <div className={styles.item}>
               <h1 className={styles.title}>What We Do</h1>
               <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor hic facilis veritatis molestiae unde,
                  officiis dicta totam. Consequuntur alias nesciunt sequi, saepe sed dignissimos asperiores voluptatibus
                  doloremque quisquam laboriosam repellendus!
                  <br />
                  <br /> - Dynamic Website
                  <br />
                  <br /> - Fast and Handy
                  <br />
                  <br /> - Mobile Apps
               </p>
               <Button url="contact" text="Contact" />
            </div>
         </div>
      </div>
   );
};

export default About;
