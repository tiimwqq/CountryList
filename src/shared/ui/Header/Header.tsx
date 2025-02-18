import React from 'react';
import styles from "./Header.module.scss";
import { Container } from '../Container/Container';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
export const Header: React.FC = () => {
    const { i18n, t } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "ru" : "en";
        console.log("Switching to:", newLang); // Добавь этот лог
        i18n.changeLanguage(newLang);
    };

    console.log("Current language:", i18n.language);

    return (
        <header className={styles.header}>
            <Container className={styles.header__container}>
                {/* left side / logo*/}
                <div className={styles.header__logo} >
                    <Link to={"/"}>
                        <h2>{t('countryList')}</h2>
                    </Link>
                </div>

                {/*  right side / btns*/}
                <div className="">
                    <button onClick={toggleLanguage}>{t('changeLanguage')}</button>
                </div>
            </Container>
        </header>
    );
};