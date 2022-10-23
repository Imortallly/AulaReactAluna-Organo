import Colaborador from '../Colaborador/Colaborador'
import './time.css'

function Time (props) {
    const CSS = {backgroundColor: props.corSecundaria}
    const cssBorder = {borderColor: props.corPrimaria}
    return (
        (props.colaboradores.length > 0) ? <section className='time' style={CSS}>
            <h3 style={cssBorder}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} key={colaborador.nome}imagem={colaborador.imagem} corDeFundo={props.corPrimaria}/>)}
            </div>
        </section>
        : ''
    )
}

export default Time