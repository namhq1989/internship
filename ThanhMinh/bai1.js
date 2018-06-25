/* Write a JavaScript program to display the current day and time in the following format. */
			var today=new Date();
			var day=today.getDay();
			var dayList=["SunDay","MonDay","Tuesday","Wednesday","Thursday","Firday","Saturday"];
			console.log(dayList[day]);
			var hour=today.getHours();
			var minute=today.getMinutes();
			var second=today.getSeconds();
			var perpand= (hour>=12) ? " PM":" AM";
			hour = (hour>=12)? hour-12:hour;
			if(hour==0 && perpand===" PM"){
				if(minute==0 && second==0){
					hour==12;
					perpand=" NOON";
				}else{
					hour==12;
					perpand=" PM";
				}
			}
			if(hour==0&& perpand===" AM"){
				if(minute===0 && second===0){
					hour==12;
					perpand=" Midnight";
				}else{
					hour==12;
					perpand=" AM";
				}
			}
			console.log(`${hour}${perpand}: ${minute}: ${second}`);
