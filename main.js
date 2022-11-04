function creatGame (player1, hour, player2) {
    return `
    <li>
                        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
                        <strong>${hour}</strong>
                        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
                    </li>
    `
}

let delay = 1
function creatCard (date, day, games) {
    delay += 0.25
    return `
        <div class="card" style="animation: appear ${delay}s">
            <h2>${date} <span>${day}</span></h2> 
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML = 
    creatCard("24/11", "quinta", creatGame('brazil', '16:00', 'serbia')) 
    + creatCard("28/11", "segunda", creatGame('brazil', '13:00', 'switzerland') 
    + creatGame('portugal', '16:00', 'uruguay')) 
    + creatCard("02/12", "sexta", creatGame('brazil', '16:00', 'cameroon'))
