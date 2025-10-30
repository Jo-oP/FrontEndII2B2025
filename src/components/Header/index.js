'use client';
import { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [show, setShow] = useState(false);
    const [icon, setIcon] = useState('/images/open.png');

    const alterarIcone = () => {
        if (show) setIcon('/images/open.png');
        else setIcon('/images/close.png')
        setShow(!show);
    }
    return (
        <>
            <header className={styles.headerMobile}>
                <div className={styles.btn} onClick={() => { alterarIcone() }}><Image src={icon} width={30} height={30} alt='Ícone menu'></Image></div>
                {show &&
                    <nav className={styles.nav}>
                        <ul className={styles.ulMenu}>
                            <li className={styles.liMenu}><Link href='/'>Home</Link ></li>
                            <li className={styles.liMenu}><Link href='/produtos'>Produtos</Link >
                                <ul className={styles.ulSubMenu}>
                                    <li className={styles.liSubMenu}><Link href='/produtos'>Cadastrar</Link ></li>
                                    <li className={styles.liSubMenu}><Link href='/produtos'>Relatório</Link > </li>
                                </ul>
                            </li>
                            <li className={styles.liMenu}><Link href='/localidades'>Localidades</Link ></li>
                        </ul>
                    </nav>
                }
            </header>

            <header className={styles.header}>
                <nav>
                    <ul className={styles.ulMenu}>
                        <li className={styles.liMenu}><Link href='/'>Home</Link ></li>
                        <li className={styles.liMenu}><Link href='/produtos'>Produtos</Link >
                            <ul className={styles.ulSubMenu}>
                                <li className={styles.liSubMenu}><Link href='/produtos'>Cadastrar</Link ></li>
                                <li className={styles.liSubMenu}><Link href='/produtos'>Relatório</Link > </li>
                            </ul>
                        </li>
                        <li className={styles.liMenu}><Link href='/localidades'>Localidades</Link ></li>

                    </ul>
                </nav>
            </header>
        </>
    );
}