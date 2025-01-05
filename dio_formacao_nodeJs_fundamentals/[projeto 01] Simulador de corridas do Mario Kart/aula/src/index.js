const player1 = {
  NAME: "Mario",
  SPEED: 4,
  MANEUVERABILITY: 3,
  POWER: 3,
  POINTS: 0
};

const player2 = {
  NAME: "Luigi",
  SPEED: 3,
  MANEUVERABILITY: 4,
  POWER: 4,
  POINTS: 0
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // Generates random number between 1-6: Math.random() gives 0-0.99, multiply by 6 for 0-5.99, Math.floor rounds down to 0-5, add 1 for final 1-6 range
};

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA"
      break;
    case random < 0.66:
      result = "CURVA"
      break;
    case random > 0.66:
      result = "CONFRONTO"
      break;
    default:
      result = "CONFRONTO"
  }

  return result;
};

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
};

async function playRaceEngine(character1, character2) {

  for (let round = 1; round <= 5; round++) {
    console.log(`\n------------\n🏁 RODADA ${round}\n------------\n`);

    // sort block
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // roll dice
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // skill test
    let totalSkillTest1 = 0;
    let totalSkillTest2 = 0;

    if (block === "RETA") {
      totalSkillTest1 = diceResult1 + character1.SPEED;
      totalSkillTest2 = diceResult2 + character2.SPEED;

      await logRollResult(player1.NAME, "velocidade", diceResult1, character1.SPEED);
      await logRollResult(player2.NAME, "velocidade", diceResult2, character2.SPEED);
    };

    if (block === "CURVA") {
      totalSkillTest1 = diceResult1 + character1.MANEUVERABILITY;
      totalSkillTest2 = diceResult2 + character2.MANEUVERABILITY;

      await logRollResult(player1.NAME, "manobrabilidade", diceResult1, character1.MANEUVERABILITY);
      await logRollResult(player2.NAME, "manobrabilidade", diceResult2, character2.MANEUVERABILITY);

    };

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.POWER;
      let powerResult2 = diceResult2 + character2.POWER;

      console.log(`${character1.NAME} confrontou com ${character2.NAME}! 🥊`);
      await logRollResult(player1.NAME, "poder", diceResult1, character1.POWER);
      await logRollResult(player2.NAME, "poder", diceResult2, character2.POWER);

      if ((powerResult1 > powerResult2) && (character2.POINTS > 0)) {
        console.log(`${character1.NAME} venceu o confronto! ${character2.NAME} perdeu um ponto 🐢`);
        character2.POINTS--;
      };

      if ((powerResult2 > powerResult1) && (character1.POINTS > 0)) {
        console.log(`${character2.NAME} venceu o confronto! ${character1.NAME} perdeu um ponto 🐢`);
        character1.POINTS--;
      };

      if ((powerResult1 === powerResult2)) {
        console.log(`Confronto empatado! Nenhum ponto perdido.`)
      };

    };

    // check winner
    if (totalSkillTest1 > totalSkillTest2) {
      console.log(`${character1.NAME} marcou um ponto!`);
      character1.POINTS++;
    } else if (totalSkillTest2 > totalSkillTest1) {
      console.log(`${character2.NAME} marcou um ponto!`);
      character2.POINTS++;
    };

  };

};

async function declareWinner(character1, character2) {
  console.log(`\n----------------\nResultado final\n----------------`);
  console.log(`${character1.NAME}: ${character1.POINTS} ponto(s)`);
  console.log(`${character2.NAME}: ${character2.POINTS} ponto(s)`);

  if (character1.POINTS > character2.POINTS)
    console.log(`\n${character1.NAME} venceu a corrida! Parabéns! 🏆`);
  else if (character2.POINTS > character1.POINTS)
    console.log(`\n${character2.NAME} venceu a corrida! Parabéns! 🏆`);
  else
    console.log(`A corrida terminou em empate`);

};

(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.NAME} e ${player2.NAME} começou...`
  );

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2)
})();