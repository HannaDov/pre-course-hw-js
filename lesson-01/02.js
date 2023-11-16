// code


/*
let number1 = Math.floor(Math.random() * 100)
 а затем проверь их выводя в консоль: «[вставь сюда полученное число] :Это четное число» или «[вставь сюда полученное число] :Это нечетное число».*/
let number = Math.floor(Math.random() * 100)
if (number % 2=== 0){
    console.log(number, ":Это четное число")
}
if(number % 2!== 0){
    console.log(number, ":Это нечетное число")
}
