'use client';
import { useEffect, useState } from "react"

export default function Localidades() {

    const [paises, setPaises] = useState(null);
    const [status, setStatus] = useState('Carregando lista de países...');

    const getPaises = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome');
            if (!response.ok) {
                throw new Error(`Erro ao buscar dados: ${response.statusText}`)
            }
            console.log(response);
            const dados = await response.json();
            console.log(dados);
            setStatus(null);
        } catch (e) {
            console.log(`Ocorreu um erro: ${e.message}`);
        }
    }

    useEffect(() => {
        getPaises();
    }, [])

    return (
        <div>
            <h1>Localidades</h1>
            {status && <p>{status}</p>}
        </div>
    )
}