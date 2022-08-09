let a=(str)=>{
    let substr=[];
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length+1;j++){
            substr.push(str.slice(i,j));
        }
    }
    return substr;
}
console.log(a('dog'));