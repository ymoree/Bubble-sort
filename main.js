function sortArray(){
	let arr = getArray()
	if (arr) {
		let sortedArr = bubbleSort(arr);
		/*Выводим результат и число елемнтов масива*/
		document.querySelector("#output").value = sortedArr.join(', ');
		document.querySelector("#numberOfElements").innerHTML = sortedArr.length;
	}
}

/*Получаем масив*/
function getArray(){
	let isValid = 1; 
	let arr = document.querySelector("#input").value.split(',');

	/*Проверка на валидность*/
	for (el of arr){
		if (isNaN(el)){
			let errorMsg = document.querySelector("#output")
				.value = "Invalid values";
				
			isValid = 0;
		}
	}

	arr.map(t => parseInt(t));
	console.log(arr);

	/*Если ввели что то неверно возвращаем undefinedd*/
	return isValid ? arr : undefined;
}


function bubbleSort(arr){
	/*Цикл для полной сортировки*/
	for (let n = 0; n < arr.length; n++){
		/*Цикл что бы привести самый большой елемент в конец*/
		for (let i = 0; i < arr.length - 1 - n; i++)
			/*Если элемент больше следуюзего меняем местами*/
			if (arr[i] > arr[i+1]){
				[arr[i], arr[i+1]] = [arr[i+1], arr[i]]
			}
	}

	return arr;
}

/*Очищаем поля*/
function clearArea(){
	document.querySelector("#input").value = '';
	document.querySelector("#output").value = '';
	document.querySelector("#numberOfElements").innerHTML = '';
}

