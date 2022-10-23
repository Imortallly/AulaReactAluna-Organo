import Colaborador from '../Colaborador/Colaborador'
import './time.css'

function Time (props) {
    const CSS = {backgroundColor: props.corSecundaria}
    const cssBorder = {borderColor: props.corPrimaria}
    return (
        <section className='time' style={CSS}>
            <h3 style={cssBorder}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time