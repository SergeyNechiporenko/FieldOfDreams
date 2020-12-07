let words = ['апельсин','клубника','шиповник','земляника','абрикос','персик','вкусовщина','гравитация',
'дельтаплан','единодушие','километраж','литература','подготовка','фигуристый','решение','мероприятие',
'секунда','функция','свойство','праздник','пространство','журналист','производство','сотрудничество'];

let word = words[Math.floor(Math.random() * words.length)];
let guesses = 0;
let ansverArr = []

for (var i = 0; i < word.length; i++) {
	ansverArr[i] = "_";
}
let remainingLetters = word.length;

while (remainingLetters > 0 && guesses <= word.length + 5){
	alert(ansverArr.join(" "));
	let guess = prompt("Введите букву или нажмите 'Отмена' для выхода из игры:");
 	if (guess === null){
		alert("Игра прервана.");
		break;
	} else if (guess.length !== 1) { 
		alert("Введите корректное значение, т.е. только одну букву!");
	} else {guess = guess.toLowerCase();
		for (var j = 0; j < word.length; j++){
			if (guess === word[j] && ansverArr[j] == "_") {
			ansverArr[j] = guess;
			remainingLetters--;
		}		
	} 
}
guesses += 1;
if (guesses > word.length + 5) {
	alert("Количество доступных попыток исчерпано.");
}
}

let result = Math.round(word.length/guesses*100);
if (remainingLetters <= 0) {
alert("Поздравляем! Слово \"" + word + "\" отгадано!\nТочность отгадывания: " + result + "%");
};