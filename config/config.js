/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'hyuna',
			position: 'middle_center', // This can be any of the regions.
		},
		{
			module: 'alert',
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'US Holidays',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'lower_third'
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Seoul',
				locationID: '1835847',  //ID from http://www.openweathermap.org
				appid: '697ea02046705574571e242a06b0fe65'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
	            location: 'Seoul',
							locationID: '5128581',  //ID from http://www.openweathermap.org
	            appid: '697ea02046705574571e242a06b0fe65'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "Chosun Ilbo",
						url: "http://www.chosun.com/site/data/rss/rss.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
