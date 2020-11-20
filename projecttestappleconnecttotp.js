const totp = require('@apple/appleconnect-totp');
const fs = require('fs')


let t = new totp('recovery.txt')
let v = t.get_hotp()
console.log(v)

fs.writeFile('./test.txt', v, function (err){
    if(err) throw err;
    console.log('Saved!')
});




