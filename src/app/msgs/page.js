'use client';
import { use, useEffect, useState } from "react"
import styles from './page.module.css';

export default function msgs() {
    const [messages, setMessages] = useState([])
    const [nome, setNome] = useState ('')
    const [turma, setTurma] = useState ('')
    const [msg, setMsg] = useState ('')



    useEffect(() => {
        const mensagem = async () => {
            console.clear();
            console.log('buscando dados')
            fetch('https://api.front.dev.vilhena.ifro.edu.br/msgs')
                .then(response => response.json())
                .then(data => { setMessages(data) })
                .catch(error => console.error("Erro ao buscar mensagens: ", error));
        }
        mensagem();
    }, []);

    const enviarForm = async (e) => {
        e.preventDefault();
        const mensagem = {nome, turma, msg};
        const response = await fetch('https://api.front.dev.vilhena.ifro.edu.br/msg', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringifly(mensagem),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.Error || 'Erro ao enviar a mensagem');
        }
        setMessages(...msgs, mensagem)
    } catch (e) {
        alert('Erro ao enviar a mensagem: ' + e.message);
    }

    return (
        <div>

            <form className={styles.form}>
                <fieldset className={styles.fs}>
                    <legend>mensagens</legend>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id='nome' placeholder="Digite seu nome" required value={nome} onChange={(e => setNome(e.target.value))}/>
                    <label htmlFor="turma">Turma:</label>
                    <input type="text" id='turma' placeholder="Digite sua turma" required value={turma} onChange={(e => setTurma(e.target.value))}/>
                    <label htmlFor="msg">Mensagem:</label>
                    <input type="text" id='nome' placeholder="Digite sua mensagem" required value={msg} onChange={(e => setMsg(e.target.value))}/>
                    <textarea cols="30" rows="10"></textarea>
                </fieldset>
                <button>Enviar</button>
            </form>

            <table className={styles.tbl}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>TURMA</th>
                        <th>MSG</th>
                        <th>data/hora</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map(msg => (
                        <tr key={msg.id}>
                            <td>{msg.id}</td>
                            <td>{msg.nome}</td>
                            <td>{msg.turma}</td>
                            <td>{msg.msg}</td>
                            <td>{msg.dt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}