var sp = 67.83643
var rj = 36.67866
var mg = 29.22988
var es = 27.16548
var out = 19.84953
var total = (sp + rj + mg + es + out)
console.log(`Total: R$${total}`)
var porcentagemSp = ((sp/total)*100)
var porcentagemRj = ((rj/total)*100)
var porcentagemMg = ((mg/total)*100)
var porcentagemEs = ((es/total)*100)
var porcentagemOut = ((out/total)*100)

console.log(`Porcentagem de SP: R$${porcentagemSp}`)
console.log(`Porcentagem de RJ: R$${porcentagemRj}`)
console.log(`Porcentagem de MG: R$${porcentagemMg}`)
console.log(`Porcentagem de ES: R$${porcentagemEs}`)
console.log(`Porcentagem de OUT: R$${porcentagemOut}`)