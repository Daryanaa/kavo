let DB = {
    1:{},
    3:{},
    2:{},
    4:{}
};
let pass = 0;
let key;
let num;
let ok=true;
let bet;
// function g() {
//     while (pass!=null) {
//         pass = prompt("pass?");
//         for(key in DB){
//             if (key==pass) {
//                 while (ok==true) {
//                     num=prompt('number?');
//                     bet=+prompt('bet?');
//                     ok=confirm('one more?');
//                     console.log(DB);
//                     console.log(Coins);
//                     
//                 }
//             }
//         }
//     }
// }

function gg() {
    pass = +prompt("your password:");
    while(pass != null){
        for(key in DB){
            if (key==pass) {
                num = +prompt('number?');
                bet = +prompt('bet?');
                ok=confirm('one more?');
                DB[key][num] = bet;
                console.log(DB);
                if (ok==false) {
                    pass = +prompt("your password:");
                    console.log(DB);
                    
                }else{
                    // g();
                    num = +prompt('number?');
                    bet = +prompt('bet?');
                    ok=confirm('one more?');
                    DB[key][num] = bet;
                    console.log(DB);
                }
                console.log(DB);
                // if (ok == true) {g();}
            }
        }
    }
}
// function g(){
//     num = +prompt('number?');
//     bet = +prompt('bet?');
//     ok=confirm('one more?');
//     DB[key][num] = bet;
//     console.log(DB);
// }
