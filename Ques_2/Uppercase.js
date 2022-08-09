function uppercase(str)
{
  var arr = str.split(' ');
  var newarr = [];
    
  for(var x = 0; x < arr.length; x++){
      newarr.push(arr[x].charAt(0).toUpperCase()+arr[x].slice(1));
  }
  return newarr.join(' ');
}
console.log(uppercase("the quick brown fox"));