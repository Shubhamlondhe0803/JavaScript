 //+++++++++++ Number ++++++++++++++
 const score = 100
 console.log(score);

 const balance = new Number(100)
 console.log(balance);

 console.log(balance.toString().length);

 const otherNumber = 123.456
 console.log(otherNumber.toPrecision(3));

 const hundreds = 1000000

 console.log(hundreds.toLocaleString('en-IN'));

 console.log("++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++")

 //++++++++++++++++++ Maths +++++++++++++++++++++

 console.log(Math);
 console.log(Math.abs(-4)) // abs stands for absolute value

 console.log(Math.round(4.5)); // It will create the roundof of the value
 console.log(Math.ceil(4.5)); // will take the top most value from the input

 console.log(Math.floor(4.6)); //will take bottom most value

 console.log(Math.min(3, 4, 5, 7, 2, 5, 9, 6)); //It will find the minimum value from the list...

 console.log(Math.max(3, 5, 8, 2, 9, 0, 8)); //It will find the maximum value from the list...
 console.log(Math.random()); //It will the value in between 0 & 1.
 console.log(Math.random() * 10 + 1);