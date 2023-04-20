Write a function camelize(str) that converts strings in the format of "my-short-string" to "myShortString".
In other words, hyphens are removed, and all words after them get a capital letter.

Examples:

camelize("background-color") should return 'backgroundColor'.
camelize("list-style-image") should return 'listStyleImage'.
camelize("-webkit-transition") should return 'WebkitTransition'.

--------------------

Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
