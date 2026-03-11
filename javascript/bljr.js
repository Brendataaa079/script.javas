let rows = 5;
for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
}


let bintangPersegi = '';

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows; j++) {
        bintangPersegi += '*';
    }
    bintangPersegi += '\n';
}
console.log(bintangPersegi);


let segitigaKebawah = '';

for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
        segitigaKebawah += '*';
    }
    segitigaKebawah += '\n';
}
console.log(segitigaKebawah);



let segitigaKeatas = '';

for (let i = 0; i < rows; i++) {
    for (let j = rows; j > i; j--) {
        segitigaKeatas += '*';
    }
    segitigaKeatas += '\n';
}
console.log(segitigaKeatas);