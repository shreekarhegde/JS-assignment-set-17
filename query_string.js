function toQueryString(a){
    let x ='';
    let y ='';
for(let property in a){
    if(Array.isArray(a[property])){
        a[property].forEach(element => {
            x = x + `${property}=${element}`+ `&`;
        })
    }else{
        y = y + `${property}=${a[property]}` ;
    }
}
return x + y;
}

console.log(toQueryString({"bar": [ 2, 3], "foo": 1 }));
console.log(toQueryString({"name": "Elie", "nums": [1,2,3,4]}));