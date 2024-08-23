import Frase from './Frase';

function SayMyName(props){
    const nome = props.nome;

    return (
        <div>
            <p> Eae {nome}, de boa? </p>
        </div>
    )
}

export default SayMyName;