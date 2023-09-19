let data = [12,43,45,67,76];


let pos = 3;
console.warn(data);
for(let i = pos; i < data.length - 1; i++){
     console.log(i);
     data[i] = data[i+1];
}
data.length = data.length - 1;
console.warn("++++++++++++++++++++++++++");
console.log(data);
// for (let i = 0 ; i < data.length ; i++){
//     console.log(data[i]);
// }