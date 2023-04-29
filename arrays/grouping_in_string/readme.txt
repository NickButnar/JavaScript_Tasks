Description:

In this kata you have to find whether same elements of the string are grouped together.

Example

Input	Output
112233	true
11223311	false

Explanation
In first example same elements are grouped together: (11)(22)(33), hence it should return true
In the second example there are two different groups of 1's: (11)2233(11), hence it should return false

---------------------

Solution:

Inside the loop, the function checks whether there is a character in the remaining part of the string (starting from index i) that matches the previous character (i.e., the character at position i-1). If such a character is found, the function returns false, which means that the string is not consecutive.

If no repeating character is found on the current iteration of the loop, the function continues to execute until the end of the loop and returns true, which means that all characters in the string are consecutive.
