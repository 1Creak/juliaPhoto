import React from "react";
import styles from "../../styles/About.module.css";
import juliaPhoto from "../../img/about.png"

function About(){
    return(
        <div className={styles.about}>
           <div className="box">
                <div className="relative">
                    <div className={styles.title}>
                           <h1>Про мене</h1> 
                    </div>
                </div>
                <div className={styles.about_block}>
                    <div>
                        <img className={styles.about_img} src={juliaPhoto} alt="face" />
                    </div>
                    <div className={styles.about_info}>
                        <h2 className={styles.about_info_title}>
                            Юлія Скрипник
                        </h2>
                        <ul className={styles.about_info_list}>
                            <li className={styles.about_list_item}>Багато років займаюсь фотографією</li>
                            <li className={styles.about_list_item}>Пройшла не одні курси для покращення якості</li>
                            <li className={styles.about_list_item}>Живу с фотоапаратом у руках</li>
                            <li className={styles.about_list_item}>Працюю у місті Полтава та на виїзд</li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
        
    )
}

export default About;