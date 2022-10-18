
import './CampoTexto.css'

function CampoTexto (props) {
    const PlaceholderMod = `${props.placeholder}...`

    // let valor = 'joao vitor'
    
    function aoDigitado (evento) {
        props.aoAlterado(evento.target.value)

    }
    return (
        <div className="Campo-Texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={PlaceholderMod}/>
        </div>
    )

}

export default CampoTexto 