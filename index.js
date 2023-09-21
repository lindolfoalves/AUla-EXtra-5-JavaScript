let alunos = [
    {
        nome: 'Cesar',
        genero: 'M',
        profissao: 'desempregado',
        idade: 28
    },
    {
        nome: 'Ricardi',
        genero: 'M',
        profissao: 'consultor comercial',
        idade: 33
    },
    {
        nome: 'Walkerlan',
        genero: 'M',
        profissao: 'tec. de enfermagem',
        idade: 22
    },
    {
        nome: 'Aline',
        genero: 'F',
        profissao: 'desempregado',
        idade: 26
    },
    {
        nome: 'Samantha',
        genero: 'F',
        profissao: 'veterinaria',
        idade: 24
    },
    {
        nome: 'Isabelle',
        genero: 'F',
        profissao: 'consultor de marketing',
        idade: 22
    },
];


// map e foreach - PERCORRE O ARRAY E FAZ ALGUMA COISA OS ELEMENTOS
// alunos.map((aluno) => {
//     pessoas.innerHTML += `
//         <li>
//             <h3>${aluno.nome}</h3>
//             <h6>Profissão: ${aluno.profissao}</h6>
//             <h6>idade: ${aluno.idade}</h6>
//             <h6>genêro: ${aluno.genero}</h6>
//         </li>
//     `;
// });

// filter - PERCORRE O ARRAY E FILTRA POR UMA CONDIÇÃO
function listarAlunos(){
    pessoas.innerHTML = '';
    alunos
    // .filter((aluno) => {
    //     return aluno.idade <= 25 && aluno.genero == 'F' && aluno.nome[0].toLowerCase() == "i";
    // })
    .filter((aluno) => {
        if(generos.value == 'T'){
            if(idade.value == ''){
                return aluno;
            }else{
                return aluno.idade.toString().includes(idade.value);
            }
        }else{
            if(idade.value == ''){
                return aluno.genero == generos.value;
            }else{
                return aluno.genero == generos.value && aluno.idade == idade.value;
            }
        }
    })
    .map((aluno) => {
        
        pessoas.innerHTML += `
            <li>
                <h3>${aluno.nome}</h3>
                <h6>Profissão: ${aluno.profissao}</h6>
                <h6>idade: ${aluno.idade}</h6>
                <h6>genêro: ${aluno.genero}</h6>
            </li>
        `;
    });
} listarAlunos();

