function minMaxKeyInObject(a){
    let array = Object.keys(a);
        return [Math.min(...array),Math.max(...array)];
    }

    console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));