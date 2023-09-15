function getValue(){
let data = [12,43,45,67,76];

let serach_item = document.getElementById('element').value;
console.log(serach_item);
console.warn(data);
console.warn("++++++++++Serach the item ++++++++++++++++");
for(let i = 0; i < data.length - 1; i++){
    if(data[i] == serach_item){
        console.log("Item Is Found at Postion "+i+" and item is  "+ data[i]);
        break;
    }
}
}
