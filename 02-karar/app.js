const s1= Number(prompt("birinci sayi"));
const islem =prompt("islem giriniz");
const s2 = Number(prompt("ikinci sayi"));
let sonuc = 0;

if(islem=="+"){
    sonuc=s1+s2;
}
else if(islem=="-"){
    sonuc=s1-s2;
}
else if(islem=="*"){
    sonuc=s1*s2;
}
else if(islem=="/"){
    sonuc=s1/s2;
}
else{
    console.log("Gecerli bir islem giriniz")
}
console.log(sonuc);

//====== Ternary =================

const age = Number(prompt("Yasinizi giriniz"));
const helse = prompt("Sagliklimisiniz e/h");

age>18 && helse=="e" ? "ehliyet alabilir" : "ehliyet alamaz";

//===========For===============

const number = 10;
let asal = true;
for(let i=2; i<number; i++){
    if(number%i==0){
        asal=false;
        break;
    }
}
if(asal){
    console.log("Asal");
}else{
    console.log("Asal degil");
}

//===============While====================

