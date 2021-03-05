import Image from 'next/image';
import React from 'react';
import styles from '../styles/components/Header.module.css';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <Image src={'/logo.svg'} width={150} height={130}/>
        </header>
    )
}
