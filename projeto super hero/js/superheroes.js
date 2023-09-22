document.addEventListener("DOMContentLoaded", function () {


    var dadosSuperHeroi = {
        "nomeEsquadrao": "Esquadrao de herois",
        "cidade": "Brasilia city",
        "formado": 2019,
        "baseSecreta": "taverna do marcos",
        "ativa": true,
        "membros": [
            {
                "nome": "Marcos pitu",
                "idade": 28,
                "identidadeSecreta": "Comentador de codigo man",
                "poderes": ["escrever boas linhas de codigo", "boleiro", "cc", "criador de conteudo"]
            },
            {
                "nome": "Breno",
                "idade": 85,
                "identidadeSecreta": "Bernardo",
                "poderes": ["Jornalismo", "investigador", "injustiçado"]
            },
            {
                "nome": "Suzana perigosa",
                "idade": 21,
                "identidadeSecreta": "CoringaGirl",
                "poderes": ["Jiu-jitsu", "turismo", "Capoeirista"]
            }
        ]
    };
    //selecionar a lista de super-herois onde a gente desena inserir os membros 
    var listaSuperHerois = document.getElementById("superheroes-list")
    //iteração  sobre os membros da equipe criando os elementos de lista para cada um
    dadosSuperHeroi.membros.forEach(function (membro) {
        var li = document.createElement("li")
        li.className = "list-group-item"
        li.innerHTML = `<strong>${membro.nome}</strong>(idade: ${membro.idade}, Identidade Secreta: ${membro.identidadeSecreta})<br>
        Poderes: ${membro.poderes.join(", ")}`
        listaSuperHerois.appendChild(li)

    })
})