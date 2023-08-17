import React from "react";
import styles from "../../styles/Header.module.css";

function Header(){
    return(
        <div className={styles.header}>
            <div className="box">
                <div className={styles.header_container}>
                    <ul className={styles.list}>
                        <li><a href="#">Галерея</a></li>
                        <li><a href="#">Про мене</a></li>
                        <li><a href="#">Відгуки від клієнтів</a></li>
                        <li><a href="#">Контакти</a></li>
                    </ul>
                    <h1 className={styles.title}>Юлія Скрипник</h1>
                    <p className={styles.text}>Залишу вашу пам’ять<br/>На фотографії</p>
                </div>
            </div>
        </div>
    )
}

export default Header;