// code
/*
Создай программу для let str = "zzzzyzz"; используя тернарный оператор и метод includes.
    Если нашел букву "y",
    то отконсоль "нашел", если не нашел, то"заблудился"*/
let str = "zzzzyzz"
const arr = Array.from(str)
arr.includes('y')?console.log("нашел"):console.log("заблудился")
