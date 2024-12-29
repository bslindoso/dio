const funcionario = { salarioBruto: 1000, beneficios: 150 }

function salarioATransferir(funcionario) {
  const { salarioBruto, beneficios } = funcionario
  if (!salarioBruto || salarioBruto < 0 || !beneficios || beneficios < 0) throw new Error('Verificar salário e benefícios do funcionário')
  const aliquota = (salarioBruto < 1100) ? 0.05 : (salarioBruto < 2500) ? 0.1 : 0.15

  return salarioBruto * (1 - aliquota) + beneficios
}

console.log(salarioATransferir(funcionario).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))