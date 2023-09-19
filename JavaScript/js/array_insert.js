let data = [12,43,45,67,76];

let newEle = 98;
let pos = 3;
console.warn(data);
for(let i = data.length - 1; i >= 0 ; i--){
    // console.log(data[i]);
    if(i >= pos){
     data[i + 1] = data[i];
    }
    if(pos == i){
    data[i] = newEle;
    }
}
console.warn("++++++++++++++++++++++++++");
console.log(data);
// for (let i = 0 ; i < data.length ; i++){
//     console.log(data[i]);
// }