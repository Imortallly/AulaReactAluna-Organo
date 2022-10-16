import './botao.css'

function botao(props) {
    return (
        <button className='botao'>
            {props.children}</button>
    )
}

export default botao;