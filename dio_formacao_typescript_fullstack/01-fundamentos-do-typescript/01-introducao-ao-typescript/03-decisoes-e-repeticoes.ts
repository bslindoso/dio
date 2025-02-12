export default () => {

  // estrutura de decisão if else
  const num: number = 16;

  if (num > 15) {
    console.log('O número é maior que 15');
  } else if (num === 15) {
    console.log('O número é igual a 15');
  } else {
    console.log('O número é menor que 15');
  }

  // utilizando um objeto literal para tomada de decisão
  const typeUser = {
    admin: "Seja bem vindo administrador",
    student: "Você está na área do aluno",
    viewer: "Você está na área de visualização"
  }

  function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser]);
  }

  const usuario = 'admin';

  validateUser(usuario);

  // estrutura de repetição for

}