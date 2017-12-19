(function()
{
	'use strict';
	function triagle(a, b)
	{
		return ((a + b)/2);
	}
	function square(a, b)
	{
		return a * b;
	}
	function rectangle(a, b)
	{
		return a * b;
	}
	
console.log('(4 + 2)/2',triagle(4, 2));
console.log('5 * 5',square(5, 5));
console.log('6 * 2',rectangle(6, 2));


function calculate()
{
	console.log('calculate called', arguments);
var Base=(document.getElementById('firstInput').value);
var Height=(document.getElementById('secondInput').value);
var result = null;
var op=document.getElementById('operation').value;
var a=parseInt(Base);
var b=parseInt(Height);
console.log('Base',a);
console.log('Height',b);
console.log('op', op);

	switch(op)
	{
	case 'triagle':
			result = triagle(a, b);
                break;
    case 'rectangle':
			result = rectangle(a, b);
                break;
    case 'square':
			result = square(a, b);
                break;
    
	}
 console.log('result', result);
 document.getElementById('result').innerHTML = result;
        return false;
}
    window.calculate = calculate;
})();