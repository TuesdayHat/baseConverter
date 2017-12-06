function convertBinary(num){
  var result = [];
  while (num >= 1){
    if (num % 2 !== 0) {
      num = num - 1
      result.unshift(1)
    } else {
      result.unshift(0)
    }

    num = num/2
  }

  console.log(result)
  return result.join('')
}
function convertDecimal(num){
  var arr = num.toString()
  // arr = arr.split('')
  // console.log(arr);
  var result = [];
  var whatever = 0;
  for(i=0;i<arr.length;i++){
    result.push(parseInt(arr[arr.length-i-1]) * Math.pow(2,i));
    console.log(result);
  }
  for(i=0;i<result.length;i++){
    whatever = whatever + result[i]
  }
  return whatever
}


//FRONTEND -----------------------------------
$(document).ready(function() {
  $("form#base").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#numbers").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "binary"){
      result = convertBinary(input);
    }else if (operator === "decimal"){
      result = convertDecimal(input);
    }else{
      alert("Thanks Adam");
    }
    $("#result").text(result);
  });
});
