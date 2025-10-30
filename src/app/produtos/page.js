'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Card from '@/components/Card';

export default function Produtos() {
    const produtos = [
        { id: 1, nome: "Notebook", preco: 4500 },
        { id: 2, nome: "Mouse", preco: 80 },
        { id: 3, nome: "Teclado", preco: 150 },
        { id: 4, nome: "Monitor", preco: 1200 },
        { id: 5, nome: "Impressora", preco: 900 },
        { id: 6, nome: "Cadeira Gamer", preco: 1800 },
        { id: 7, nome: "Headset", preco: 300 },
        { id: 8, nome: "Webcam", preco: 600 },
        { id: 9, nome: "HD Externo", preco: 400 },
        { id: 10, nome: "Mesa Digitalizadora", preco: 750 }
    ];

    const [busca, setBusca] = useState('');
    // const [show, setShow] = useState(false);
    const [produto, setProduto] = useState(null);

    const produtosFiltro = produtos.filter(prod => prod.nome.toLowerCase().includes(busca.toLowerCase()));
    console.log(produtosFiltro);

    useEffect(() => {
        alert('useEfect Executado');
    },[])


    //  cria uma div modal (que ocupe toda a view port) que seja exibida ao clicar em uma linha da tabela produtos
    return (
        <div>
            <h1>Lista de Produtos</h1>

            <input
                type="text"
                value={busca}
                onChange={ev => setBusca(ev.target.value)} // atualizando a busca para o valor digitado no input
                placeholder='Digite sua busca'
            />

            {produto && <div className={styles.modal} onClick={() => setProduto(null)}>
                <Card className={styles.cardProd}
                    nome={produto.nome}
                    id={produto.id}
                    preco={produto.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                />

            </div>}
            <table className={styles.tbl}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosFiltro.map(p => (
                        <tr key={p.id} onClick={() => setProduto(p)}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}