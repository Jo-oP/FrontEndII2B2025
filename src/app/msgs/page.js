'use client';
import { use, useEffect, useState } from "react"
import styles from './page.module.css';

export default function msgs() {
    return (
        <table className={styles.tbl}>
        <thead>
            <tr>
            <th>ID</th>
            <th>PAÍS</th>
            <th>REGIÃO</th>
            </tr>
        </thead>
        <tbody>
            {paises.map(pais => (
                <tr key={pais.id.M49}>
                <td>{pais.id.M49}</td>
                <td>{pais.nome}</td>
                <td>{pais['sub-regiao'].regiao.nome}</td>
             </tr>
        ))}
        </tbody>
    </table>
    )
}