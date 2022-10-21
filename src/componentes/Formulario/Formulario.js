import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import './Formulario.css';
import { useState } from "react";

function Formulario(props) {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

     function aoSalvar (evento) {
         evento.preventDefault()
         props.aoColaboradorCadastrado({
             nome,
             cargo,
             imagem,
             time
         })
     }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite seu endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;