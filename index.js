'use strict';
function *datesBetween(startDate, endDate) {
	startDate = startDate || new Date();
	endDate = endDate || startDate;
	const current = incrementDate(cloneDate(startDate), -1);
	
	while (current < endDate) {
		const todayTime = cloneDate(incrementDate(current));
	    	const month = todayTime .getMonth() + 1;
	    	const day = todayTime .getDate();
	    	const year = todayTime .getFullYear();
		

		yield year + "-" + (month<10?"0"+month:month) + "-" + (day<10?"0"+day:day);
	}
}

function cloneDate(date) {
	return new Date(date.valueOf());
}

function incrementDate(date, amount) {
	date.setDate(date.getDate() + defaultValue(amount, 1));
	return date;
}

function defaultValue(value, valueDefault) {
	return (typeof value === 'undefined' ? valueDefault : value);
}

//const datesBetween = require('..');

const startDate = new Date('2018-01-22');
const endDate = new Date('2018-01-30');

const dates = Array.from(datesBetween(startDate, endDate));

console.log(dates);
