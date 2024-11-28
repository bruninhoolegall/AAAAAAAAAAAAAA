function criarCartao(cat, quest, res){
    let cont = document.getElementById("cont")
    let card = document.createElement("article")
    card.className = "card"

    card.innerHTML = `
                <div class="card_cont">
                    <h3>${cat}</h3>
                    <div class="card_cont_quest"><p>${quest}</p></div>
                    <div class="card_cont_resposta"><p>${res}</p></div>
                </div>`

            let respostaEstaVisible = false

            function viraCard(){
                respostaEstaVisible = !respostaEstaVisible
                card.classList.toggle('active', respostaEstaVisible)
            }
            card.addEventListener('click', viraCard)

            cont.appendChild(card)
}