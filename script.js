function creatGame(player1, hour, player2){
  return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="" />
    </li>
  `
}
function creatCard(date, day, games){
  return `
       <div class="card" style="animation-delay: 0.3s ;">
        <h2>${date}<span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
      </div>
  `
}
document.querySelector('#cards').innerHTML = 
        creatCard("24/11", "quinta",
          creatGame('suica', '07:00', 'camaroes') +
          creatGame('portugal', '13:00', 'gana') +
          creatGame('brasil', '16:00', 'servia') 
        ) +
        creatCard('28/11', 'segunda', 
          creatGame('brasil', '13:00', 'suica') +
          creatGame('coreiaS', '10:00', 'gana') +
          creatGame('portugal', '16:00', 'uruguai')
        ) +
        creatCard('21/11', 'segunda',
         creatGame('brasil', '08:00', 'camaroes') +
         creatGame('hungria', '13:00', 'argentina') +
         creatGame('colombia', '20:00', 'japao') 
        ) +
        creatCard("22/11", "terça",
          creatGame('argentina', '07:00', 'arabia') +
          creatGame('mexico', '13:00', 'polonia') +
          creatGame('franca', '16:00', 'australia') 
        )