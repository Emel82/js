//=========Fonksiyon 2. yontem=======
const tekCift = function (sayi){
    return sayi%2==0?"cift":"tek";
}
console.log(tekCift(5));

//==========================

let buyukSayi= function(a,b,c){
    
    let enBuyuk;
    
    if(a>b&&a>c){
        enBuyuk=a;
    }
    else if(b>c&&b>a){
        enBuyuk=b;
    }
    else{
        enBuyuk=c;
    }
    return enBuyuk;
}
console.log(buyukSayi(3,4,5));

// ===========3.yontem===============

const ciftMi = (num)=>{
    sayi%2==0?"cift":"tek"
}
console.log(ciftMi(7));

//==========================

const s1= prompt("sayi 1");
const s2 = prompt("sayi 2");

const usAl = (taban,us)=>taban**us;
console.log(usAl(s1,s2));