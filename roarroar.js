let DB = {
    1:{},
    2:{},
    3:{},
    4:{}
};
let pass='';
let key;
let num;
let ok=true;
let bet;

function g() {
    while (pass!=null) {
        pass = prompt("pass?");
        for(key in DB){
            if (key==pass) {
                while (ok==true) {
                    num=prompt('number?');
                    bet=+prompt('bet?');
                    ok=confirm('one more?');
                    console.log(DB);
                }
            }
        }
    }
}

