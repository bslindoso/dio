# Documentação do utils.js

## Visão Geral
Este arquivo contém funções utilitárias para geração de dados aleatórios e impressão formatada, usado no projeto dio_formacao_javascript.

## Constantes
- `NAMES`: Array com 30 nomes brasileiros comuns, alternando entre masculinos e femininos.

## Funções

### generateLoremIpsum(paragraphs = 1)
Gera texto Lorem Ipsum aleatório.
- **Parâmetros**: 
  - paragraphs (número): Quantidade de parágrafos desejada (padrão: 1)
- **Retorno**: String contendo o texto Lorem Ipsum gerado

### gets(type, range)
Gera dados aleatórios baseado no tipo especificado.
- **Parâmetros**:
  - type (string): Tipo de dado a ser gerado ('texto', 'inteiro', 'decimal', 'nome', 'lista numerica', 'lista de nomes')
  - range (número/string): Valor opcional para configurar o intervalo ou especificação
- **Tipos suportados**:
  - 'texto': Gera Lorem Ipsum
  - 'inteiro': Número inteiro aleatório
  - 'decimal': Número decimal aleatório
  - 'nome': Nome aleatório (pode ser filtrado por gênero)
  - 'lista numerica': Array de números aleatórios
  - 'lista de nomes': Array de nomes aleatórios

### print(referencia, texto)
Imprime dados no console de forma formatada.
- **Parâmetros**:
  - referencia: Valor principal a ser impresso
  - texto (opcional): Texto adicional para impressão

## Exportação
O módulo exporta duas funções principais:
- gets
- print
