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

# Geral
Existem 3 formas de definir uma string

- "Text"
- 'Text'
- \`Text\`