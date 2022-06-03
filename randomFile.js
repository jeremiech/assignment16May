let userName=""
userName?console.log("hello,"+userName):console.log("hello!")
let userQuestion=""
console.log( userQuestion+""+userName)
let randonNumber=Math.floor(Math.random() * 8);
let eightBall=""

/*
switch (randonNumber) {
    case 0:
        eightBall="It is certain"
        break;
    case 1:
        eightBall="It is decidedly so"
        break;
    case 2:
        eightBall="Reply hazy try again"
        break;
    case 3:
        eightBall="Cannot predict now"
        break;
    case 4:
        eightBall="Do not count on it"
        break;
    case 5:
        eightBall="My sources say no"
        break;
    case 6:
        eightBall="Outlook not so good"
        break;
    case 7:
        eightBall="Signs point to yes"
        break;  
    default:
        break;
}
console.log(eightBall) */

if(randonNumber==0){
    eightBall="it is certain"
}
else if(randonNumber==1){
    eightBall="It is decidedly so"
}
else if(randonNumber==2){
    eightBall= "Reply hazy try again"
}
else if(randonNumber==3){
    eightBall= "Cannot predict now"
}
else if(randonNumber==4){
    eightBall= "Do not count on it"
}
else if(randonNumber==5){
    eightBall= "My sources say no"
}
else if(randonNumber==6){
    eightBall= "Outlook not so good"
}
else if(randonNumber==7){
    eightBall= "Signs point to yes"
}
console.log(eightBall)
