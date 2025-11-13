'use client';
import { use, useEffect, useState } from "react"
import styles from './page.module.css';

export default function Localidades() {

    const [paises, setPaises] = useState(null);
    const [status, setStatus] = useState('Carregando lista de países...');
    const [showTblPaises, setShowTblPaises] = useState(false);

    const getPaises = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome');
            if (!response.ok) {
                setStatus(response.statusText);
                throw new Error(`Erro ao buscar dados: ${response.statusText}`)
            }
            console.log(response);
            const dados = await response.json();
            setPaises(dados);
            setStatus('Lista de países carregada');
            console.log(dados);
            // setMsgBtn('Mostrar Países');
            // setStatus(null);
        } catch (e) {
            setStatus(`Ocorreu um erro: ${e.message}`);
            console.log(`Ocorreu um erro: ${e.message}`);
        }
        // exibam id, nome do país e nome da região (subregião/região/nome) em uma tabela.
    }

    useEffect(() => {
        getPaises();
    }, [])

    return (
        <div>
            <h1>Localidades</h1>
            {status && <p>{status}</p>}
            {paises &&
                <div>
                    <button type="button" onClick={() => {setShowTblPaises(!showTblPaises)}}>{showTblPaises ? 'Ocultar Paises' : 'Mostrar Países'}</button>
                    {showTblPaises &&
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
                    }
                </div>
            }
        </div>
    )
}