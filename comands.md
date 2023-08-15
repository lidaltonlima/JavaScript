# Geral
Existem 3 formas de definir uma string

- "Text"
- 'Text'
- \`Text\`

# Principais Comandos

`typeof`: mostra o tipo da variável

# Definir Variáveis
use `var` ou `let`. Exemplo:  
```JavaScript
var number = 25.4
let name = "Nome"
const pi = 3.14 // Usado para definir constantes
```

# Tipos de Dados
- number
    - Infinity
    - NaN
- string
- boolean
- null
- undefined
- object
    - Array
- function

# Tipos de Operadores
- Atribuição:
    - =: recebe
    - +=: recebe ela mais
    - -=: recebe ela menos
    - *=: recebe ela vezes
    - /=: recebe ela divido por
    - %=: recebe ela resto da divisão por
    - **=: recebe ela elevado a
- Incremento:
    - ++: incremento
        - var++: pós incremento
        - --var: pré incremento
    - \--: decremento
- Aritiméticos:
    - +: soma
    - -: subtração
    - *: multiplicação
    - /: divisão
    - %: resto da divisão
    - **: exponenciação
- Relacionais:
    - \>: maior que
    - <: menor que
    - \>=: maior ou igual a
    - <=: menor ou igual a
    - ==: igual a
    - ===: identico a
    - !=: diferente de
    - !==: diferente restrito de
- Lógicos:
    - !: negação
    - &&: Conjunção (and)
    - ||: disjunção (or)
- Ternário:
    ```JavaScript
    teste ? verdadeiro : falso
    ```

# Corversão de Dados
## Números
```JavaScript
var num1 = Number.parseInt('25')
var num2 = Number.parseFloat('5.5')
var num3 = Number('11.3')
```

## Strings
```JavaScript
var text1 = String(10)

text.toString()
```

# Trabalhando com Dados
## Strings
### Template String
```JavaScript
s = 'JavaScript'
`Estou aprendendo ${s}` // ${} - Place Holder
```

### Métodos e Funções
```JavaScript
var s = 'Java script'

s.length
s.toUpperCase()
s.toLowerCase()
```

## Números
### Métodos e funções
```JavaScript
var n1 = 55.3

n1.toFixed(2)
n1.toFixed(2).replace('.', ',')
n1.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL')
```