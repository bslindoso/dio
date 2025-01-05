const readline = require('readline')
const characters = [
  {
    NAME: "Mario",
    SPEED: 4,
    MANEUVERABILITY: 3,
    POWER: 3,
    POINTS: 0
  },
  {
    NAME: "Luigi",
    SPEED: 3,
    MANEUVERABILITY: 4,
    POWER: 4,
    POINTS: 0
  },
  {
    NAME: "Peach",
    SPEED: 3,
    MANEUVERABILITY: 4,
    POWER: 2,
    POINTS: 0
  },
  {
    NAME: "Yoshi",
    SPEED: 2,
    MANEUVERABILITY: 4,
    POWER: 3,
    POINTS: 0
  },
  {
    NAME: "Bowser",
    SPEED: 5,
    MANEUVERABILITY: 2,
    POWER: 5,
    POINTS: 0
  },
  {
    NAME: "Donkey Kong",
    SPEED: 2,
    MANEUVERABILITY: 2,
    POWER: 5,
    POINTS: 0
  }
]

/**
 * Selects a random character from the `characters` array and removes it from the array.
 * @returns {Object} The selected character object.
 */
async function getRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * characters.length)
  const selectedCharacter = characters[randomIndex]
  characters.splice(randomIndex, 1)
  return selectedCharacter
}

/**
 * Generates a random integer between 1 and 6, inclusive, simulating the roll of a standard six-sided die.
 * @returns {number} A random integer between 1 and 6.
 */
async function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // Generates random number between 1-6: Math.random() gives 0-0.99, multiply by 6 for 0-5.99, Math.floor rounds down to 0-5, add 1 for final 1-6 range
}

/**
 * Selects a random block type for a race game.
 * @returns {string} The selected block type, which can be "RETA", "CURVA", or "CONFRONTO".
 */
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
}

/**
 * Logs the result of a dice roll for a character in a race game.
 * 
 * @param {string} characterName - The name of the character.
 * @param {string} block - The type of block being rolled for (e.g. "RETA", "CURVA").
 * @param {number} diceResult - The result of the dice roll.
 * @param {number} attribute - The character's attribute value related to the block type.
 * @returns {void}
 */
async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

/**
 * Runs the race engine for a game between two characters.
 * 
 * This function simulates a race between two characters over the course of 5 rounds. Each round, a random block type is selected, and the characters roll dice to determine their skill test results based on their attributes. The character with the higher skill test result for that round scores a point. If the block type is "CONFRONTO", the characters engage in a power contest, and the winner of the confrontation may lose a point. The function logs the results of each round and pauses the game to allow the user to review the state before proceeding to the next round.
 * 
 * @param {Object} character1 - The first character object.
 * @param {Object} character2 - The second character object.
 * @returns {void}
 */
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

      await logRollResult(character1.NAME, "velocidade", diceResult1, character1.SPEED);
      await logRollResult(character2.NAME, "velocidade", diceResult2, character2.SPEED);
    }

    if (block === "CURVA") {
      totalSkillTest1 = diceResult1 + character1.MANEUVERABILITY;
      totalSkillTest2 = diceResult2 + character2.MANEUVERABILITY;

      await logRollResult(character1.NAME, "manobrabilidade", diceResult1, character1.MANEUVERABILITY);
      await logRollResult(character2.NAME, "manobrabilidade", diceResult2, character2.MANEUVERABILITY);

    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.POWER;
      let powerResult2 = diceResult2 + character2.POWER;

      console.log(`${character1.NAME} confrontou com ${character2.NAME}! 🥊`);
      await logRollResult(character1.NAME, "poder", diceResult1, character1.POWER);
      await logRollResult(character2.NAME, "poder", diceResult2, character2.POWER);

      if ((powerResult1 > powerResult2) && (character2.POINTS > 0)) {
        console.log(`${character1.NAME} venceu o confronto! ${character2.NAME} perdeu um ponto 🐢`);
        character2.POINTS--;
      }

      if ((powerResult2 > powerResult1) && (character1.POINTS > 0)) {
        console.log(`${character2.NAME} venceu o confronto! ${character1.NAME} perdeu um ponto 🐢`);
        character1.POINTS--;
      }

      if ((powerResult1 === powerResult2)) {
        console.log(`Confronto empatado! Nenhum ponto perdido.`)
      }

    }

    // check winner
    if (totalSkillTest1 > totalSkillTest2) {
      console.log(`${character1.NAME} marcou um ponto!`);
      character1.POINTS++;
    } else if (totalSkillTest2 > totalSkillTest1) {
      console.log(`${character2.NAME} marcou um ponto!`);
      character2.POINTS++;
    } else {
      if (block != "CONFRONTO") console.log(`Deu empate! Ninguém marcou ponto.`);
    }

    // pause game
    console.log('\nPressione qualquer tecla para continuar...')
    await pauseForKeypress()
  }

}

/**
 * Declares the winner of a race between two characters.
 *
 * This function takes the final points of two characters and logs the result of the race to the console.
 * If one character has more points than the other, it declares that character as the winner.
 * If both characters have the same number of points, it declares the race as a tie.
 *
 * @param {Object} character1 - The first character object.
 * @param {string} character1.NAME - The name of the first character.
 * @param {number} character1.POINTS - The final points of the first character.
 * @param {Object} character2 - The second character object.
 * @param {string} character2.NAME - The name of the second character.
 * @param {number} character2.POINTS - The final points of the second character.
 * @returns {void}
 */
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
}

/**
 * Pauses the program execution until the user presses any key.
 * This function is used to create a pause in the game loop, allowing the user to review the current state before proceeding.
 * 
 * @returns {Promise<void>} A promise that resolves when the user presses a key.
 */
async function pauseForKeypress() {
  return new Promise(resolve => {
    process.stdin.setRawMode(true)
    process.stdin.once('data', () => {
      process.stdin.setRawMode(false)
      resolve()
    })
  })
}

/**
 * The main entry point of the application.
 * This function sets up the race between two randomly generated characters, runs the race engine, and declares the winner.
 * It then exits the program.
 */
(async function main() {
  const player1 = await getRandomCharacter();
  const player2 = await getRandomCharacter();

  console.log(
    `🏁🚨 Corrida entre ${player1.NAME} e ${player2.NAME} começou...`
  );

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);

  process.exit(0)
})()