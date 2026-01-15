def input_and_print():
    print(f"Hello World")
    nome = (input("Digite seu primeiro nome: " ))
    sobrenome = (input("Digite seu sobrenome: " ))
    
    print("Oi", nome, sobrenome, sep=" ", end="!")
# input_and_print()

def operadores_de_identidade():
    curso = "Curso de Python"
    nome_curso = curso
    nome_outro_curso = "Curso de Python"
    saldo, limite = 200, 200
    saldo_1, limite_1 = 200, 1000

    print(f"curso is nome_curso: {curso is nome_curso}")
    print(f"curso is nome_outro_curso: {curso is nome_outro_curso}")
# operadores_de_identidade()

def estruturas_condicionais(saldo):
    if saldo > 0:
        print("Saldo positivo")
    elif saldo < 0:
        print("Saldo negativo")
    else:
        print("Saldo zero")
# estruturas_condicionais(0)

def estrutura_ternaria(saldo):
    print("Saldo positivo" if saldo > 0 else "Saldo negativo")    
estrutura_ternaria(100)