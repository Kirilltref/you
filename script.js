let fruit = ["Яблоко","Банан","Груша", "Виноград", "Лимон"];
fruit.splice(4,1,"Клубника");
fruit.splice(2,0,"Киви");
fruit.unshift("*")
fruit.push("*");
alert(fruit);