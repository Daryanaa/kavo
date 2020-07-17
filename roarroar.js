const db = {
    1:{},
    2:{}
}

function play() {
    let pass="";
    let numb="";
    let bet="";
    while (pass!=null) {
        pass=prompt("Your pass?");
        for(let key in db){
            if(pass=key){
                while(true){
                    numb=prompt("Your number?");
                    if(numb==null){
                        break;
                    }

                    bet=prompt("Your bet?")

                    db[key][number]=bet;
                }
                break;
            }
        }
    }
    let a =Math.floor(Math.random()*37);
    for(let key1 in db){
        if(typeof(db[key1])=='object'){
            for(let d in db[key]){
                if(a==d){
                    console.log(`player ${key} won ${db[key][d]*36}`);
                }else{
                    console.log(`player ${key} lost. Number was ${a}`);
                }
            }
        }

    }


}