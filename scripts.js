/**
 * Created by Shawn on 8/18/15.
 */
var primes = [2, 3, 5, 7, 11, 13, 17, 19];
var nonPrimes = [1, 4, 6, 8, 9, 10, 12, 14];

// step 1

// add arrays together: primes in order, non-primes in reverse order. return to new array
function addArrays(primeArray, nonPrimeArray)
{
	var newArray = [];
	nonPrimeArray.reverse();
	for(var i = 0; i < primeArray.length; i++)
	{
		newArray.push(primeArray[i] + nonPrimeArray[i]);
	}
	return newArray;
}

addedArray = addArrays(primes, nonPrimes);

console.log(addedArray);

// step 2

var numbers1 = [4, 1, 6, 5, 8];
var numbers2 = [7, 3, 2, 9, 10];

// function merges 2 arrays together in order. returns a new array, argument for sort places in order, absolute value style, not alphanumeric style ordering (1, 2 - not 1, 10, 2)
function arrayMerge(firstArray, secondArray)
{
	return firstArray.concat(secondArray).sort(function(a,b)
	{
		if(a < b)
	{
		return -1;
	}else if(a > b)
	{
		return 1;
	}else
	{
		return 0;
	}
	});
}

// merges array and function sorts in abs order asc
var sortedArray = arrayMerge(numbers1, numbers2);
console.log(sortedArray);

// step 3
// right angle triangle object, a, b, and degree set at init
var RightAngle = function(a, b)
{
	this.a = a;
	this.b = b;
	this.c;
	this.degrees = 90;
};

// checks if it's a right angle triangle by degrees property, and calculates the length of side c
RightAngle.prototype.hypotenuse = function ()
{
	if(this.degrees == 90)
	{
		this.c = Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2));
	}
};

var triangle = new RightAngle(3, 4);
triangle.hypotenuse();
console.log(triangle);

// step 4
// function calls itself and returns from 1 to the argument (calculating in reverse order)
function numRecursion(num)
{
	if(num == 0)
	{
		return 0;
	}else
	{
		return num + numRecursion(num - 1);
	}
}

console.log(numRecursion(5));