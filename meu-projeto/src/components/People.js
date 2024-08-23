function People({nome, idade, cargo, foto}){
    return (
        <div>
            <img src={foto} alt={nome}></img>
            <h2>Nome: {nome} </h2>
            <p>Idade: {idade} </p>
            <p>Cargo: {cargo} </p>
        </div>
    )
}

export default People;