let a = +prompt ("Введите число");

if (isNaN(a) === true) {
    alert ("Упс, кажется, вы ошиблись");
} 
else if (typeof a !== "number") {
    alert ("Упс, кажется, вы ошиблись");
}
else if (a % 2 == 0) alert ("Четное");
else alert ("Нечетное");