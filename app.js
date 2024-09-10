
//pesquisar é a função do onclick, tudo isso será ativado ao apertar o botão de pesquisa
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
//docmument indica que as informações estão no html, o resultado da pesquisa será colocado na sessão onde o id é "resultado-pesquisa"
// console.log(section);


//utilizando a informação do campo de pesquisa
let campoPesquisa = document.getElementById
 ("campo-pesquisa").value

// se campoPesquisa for uma string sem nada
if (!campoPesquisa){
    section.innerHTML = "<p>Nada foi encontrado. O campo está vazio.</p>" 
    return

}

//tudo o que for digitado será transformado em letras minusculas
campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

//dado será cada um dos itens da lista
//para cada 'dado' dentro da lista de 'dados', looping, então para cada item daa lista
//essa estrutura irá repetir

//ao invés de usar o innerHTML (que vai repetir trocentas vezes) podemos usar uma variavel que guardará as informações
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // cria um novo elemento
    //se o titulo ou a descrição possuir o que foi pesquisado na barra de pesquisa
    if (titulo.includes(campoPesquisa) ||descricao.
    includes(campoPesquisa) || tags.includes
    (campoPesquisa)) {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
                
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                   
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                
                <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
        
    
    `;
    }
    //fazer a busca pelo titulo
    //se o titulo inclui inclui o que está no campo de pesquisa (o que for digitado)
    console.log(dado.titulo.includes(campoPesquisa))
   
//agora que foi declarado nós declaramos tudo o que precisa aparecer nós avisamos ao inner

}

//em caso de nada for digitado
if(!resultados){
    resultados = "<p>Nada foi encontrado</p>"
}

section.innerHTML = resultados
 //pega o titulo dentro de dados onde o item é o 0, $ para sinalizar que é um variaável vinda do javascript

//innerHTML para colocar este resultado dentro do HTML

}

// console.log(dados[0].titulo);

