import './time.css'

function Time (props) {
    const CSS = {backgroundColor: props.corSecundaria}
    const cssBorder = {borderColor: props.corPrimaria}
    return (
        <section className='time' style={CSS}>
            <h3 style={cssBorder}>{props.nome}</h3>
        </section>
    )
}

export default Time