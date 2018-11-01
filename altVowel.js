function isAlt(a) {
    a = a.split('');
    let i;
    if(a[0] == 'a'||a[0] == 'e'||a[0] == 'i'||a[0] == 'o'||a[0] == 'u'){
        i = 0;
    }else{
        i = 1;
    }
    for( i; i < a.length; i+=2){
        if(a[i] == 'a'||a[i] == 'e'||a[i] == 'i'||a[i] == 'o'||a[i] == 'u'){
            continue;
        }else{
            return false;
        }
    }
    return true;
}

console.log(isAlt('apple'));
console.log(isAlt('amazon'));
console.log(isAlt('banana'));