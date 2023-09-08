// tanpa arrow
// function gretting(message ='selamat pagi') {
//     return alert(`${message} Cantik !`);
// }
// gretting();
// mendefinisikan fungsi `gretting` menggunakan function


// menggunakan arrow function (=>)
let gretting = message => alert(`${message} cantik !`);
// fungsi `gretting` menerima satu argumen yaitu `message`
gretting(`selamat pagi`);
