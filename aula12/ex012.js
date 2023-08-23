
now = new Date()
hour = now.getHours()

console.log(`Agora são ${hour} horas.`)

if (hour < 4) {
    console.log('É madrugada!')
} else if (hour < 12) {
    console.log('Bom dia!')
} else if (hour < 16) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}