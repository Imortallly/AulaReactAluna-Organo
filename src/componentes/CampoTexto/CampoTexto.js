import './CampoTexto.css'

function CampoTexto (props) {
    const PlaceholderMod = `${props.placeholder}...`
    return (
        <div className="Campo-Texto">
            <label>{props.label}</label>
            <input placeholder={PlaceholderMod}/>
        </div>
    )

}

export default CampoTexto 