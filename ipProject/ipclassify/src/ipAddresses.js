// let ipClasses = {
//     classA : [0,126],
//     classB : [128,191],
//     classC : [192,223],
//     classD : [224,239],
//     classD : [240,254],
//     reserved : [127]
// }
import axios from "axios";
import readlineSync from 'readline-sync';



hitAPI('https://jsonip.com')
    .then((res) => {
        console.log(ipClassifier(res.data.ip));
        if(readlineSync.keyInYN("do you have some other IP to check ? ")){
            let otherIP = readlineSync.question('Enter other IP : ');
            console.log(ipClassifier(otherIP))
        }
    })
    .catch((err) => {
        console.log(err);
    })

function hitAPI(theIP){
    return axios.get(theIP);
}

function ipClassifier (myIP){

    let ipElement = myIP.split('.')
    for(let j = 0; j < 4; j++){
        if(ipElement[j] > 255){
            return `invalid IP`;
        }
    }
    let IPs = [1,128,192,224,240,255];
    let ipclasses = ['A', 'B', 'C', 'D','E'];
    for(let i = 0; i < IPs.length; i++) {
        if(ipElement[0] >= IPs[i] && ipElement[0] < IPs[i + 1]){
            return `${myIP} belongs to Class ${ipclasses[i]}`;
        }
    }
}