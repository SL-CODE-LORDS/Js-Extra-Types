var extra_types = require('./index')
extra_types.init()

// ----------------String----------------
console.log('{} I {} Ravindu {}'.bind('Hello','Am','Manoj')) // => Hello I Am Ravindu Manoj
console.log('Hello I Am Ravindu Manoj'.cut('Am')) // => [ 'Hello I ', ' Ravindu Manoj' ]
console.log('Hello I Am Ravindu Manoj'.cut('Sl')) // => [ 'Hello I Am Ravindu Manoj' ]
console.log('Hello I Am Ravindu Manoj'.have('Ravindu')) // => true
console.log('Hello I Am Ravindu Manoj'.reverse()) // => jonaM udnivaR mA I olleH
console.log('Hello I Am Ravindu Manoj'.replacer('Hello%hi',' Ravindu % ')) // => hi I Am Manoj
console.log('{Hello} {I Am} {Ravindu} {Manoj}'.getBetween('{','}')) // => [ 'Hello', 'I Am', 'Ravindu', 'Manoj' ]
console.log('Hello I Am Ravindu Manoj'.encrypt('Ravindu1234')) // => U2FsdGVkX18IWCpLQUxEeNU1O/vZqBAZMebwpLEGk8J9xWGzAKJ1oif1QkOfe3U/
console.log('U2FsdGVkX18IWCpLQUxEeNU1O/vZqBAZMebwpLEGk8J9xWGzAKJ1oif1QkOfe3U/'.decrypt('Ravindu1234')) // => Hello I Am Ravindu Manoj
console.log('Hello I Am Ravindu Manoj'.base(true)) // => SGVsbG8gSSBBbSBSYXZpbmR1IE1hbm9q
console.log('SGVsbG8gSSBBbSBSYXZpbmR1IE1hbm9q'.base()) // => Hello I Am Ravindu Manoj
console.log('Hello @ I Am Ravindu Manoj'.tourl()) // => Hello%20%40%20I%20Am%20Ravindu%20Manoj
// ---------------------------------------

// ----------------Array------------------
console.log(['banana','mango','apple','orange'].sample()) // => mango
console.log(['banana','mango','apple','orange'].have('apple')) // => true
console.log(['banana','mango','apple','orange'].difference(['apple','mango','rambutan','pine-apple'])) // => [ 'banana', 'orange', 'rambutan', 'pine-apple' ]
console.log(['banana','mango','apple','orange'].diff(['apple','mango','rambutan','pine-apple'])) // => [ 'banana', 'orange' ]
console.log(['banana','mango','apple','orange'].common(['apple','mango','rambutan','pine-apple'])) // => [ 'mango', 'apple' ]
console.log(['banana','mango','apple','orange'].last()) // => orange
console.log(['banana','mango','apple','orange'].rm((item)=> item.have('ng'))) // => [ 'banana', 'apple' ]
console.log(['banana','mango','apple','orange'].remove('mango','apple')) // => [ 'banana', 'orange' ]
console.log([null,'banana',undefined,'mango','','apple','orange'].fix()) // => [ 'banana', 'mango', 'apple', 'orange' ]
console.log(['banana','mango','apple','mango','apple'].fixDuplicate()) // => [ 'banana', 'mango', 'apple' ]
console.log(['banana','mango','apple','orange'].encrypt('Ravindu1234')) // => U2FsdGVkX18bN6nFeZZx0UrOaeP0smRjAHkY3g2st7zWRT6Fdz/tgZRKc6eh23/1VtoIommjbygCbNdDqiYTzA==

// ---------------------------------------

// ----------------Object-----------------
console.log({name:'Ravindu',country : 'sri lanka',age : 21}.encrypt('Ravindu1234')) // => U2FsdGVkX18u/7Y6j8tX/ZA2tDTQzzce0Zs87Saw5gUBQAOhIfyATR2nLQH0oflaxAVuTGYLXjVXLkbuC9VhFsJj8h6RLmWvGUlY2fVTx30=
console.log({name:'Ravindu',country : 'sri lanka',age : 21}.length()) // => 3
console.log({name:'Ravindu',country : 'sri lanka',age : 21}.getKeyByValue('sri lanka')) // => country
console.log({name:{full : { cap : {sir : 'JAYASUNDARA'}}}}.go('name','full','cap','sir')) // => JAYASUNDARA
// ---------------------------------------

// ----------------Number----------------
console.log(Number(123456789).have('2')) // => true
console.log(Number(123456789).reverse()) // => 987654321
console.log(Number(123456789).cut('2')) // => [ 1, 3456789 ]
console.log(Number(123456789).encrypt('Ravindu1234')) // => U2FsdGVkX18Ly1ll+3fZuaOMtXjy2oVj/Nds09b1f1Y=
// --------------------------------------