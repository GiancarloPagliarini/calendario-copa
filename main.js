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
    creatCard("24/11", "quinta", creatGame('switzerland', '07:00', 'cameroon') + creatGame('uruguay', '10:00', 'southkorea') + creatGame('portugal', '13:00', 'ghana') + creatGame('brazil', '16:00', 'serbia')) 
    + creatCard("28/11", "segunda", creatGame('cameroon', '07:00', 'serbia') 
    + creatGame('southkorea', '10:00', 'ghana') + creatGame('brazil', '13:00', 'switzerland') + creatGame('portugal', '16:00', 'uruguay')) 
    + creatCard("01/12", "quinta", creatGame('croatia', '12:00', 'belgium') + creatGame('canada', '12:00', 'morocco') + creatGame('japan', '16:00', 'spain') + creatGame('costarica', '16:00', 'germany'))
    + creatCard("02/12", "sexta", creatGame('southkorea', '12:00', 'portugal') + creatGame('ghana', '12:00', 'uruguay') + creatGame('serbia', '16:00', 'switzerland') + creatGame('brazil', '16:00', 'cameroon'))
    creatCard('Link para todos os')

