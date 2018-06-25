/*Write a JavaScript program to calculate days left until next Christmas.*/
				today=new Date();
				var cmas=new Date(today.getFullYear(), 11, 25);
				if(today.getMonth() == 11 && today.getDay()>25){
					cmas.setFullYear(cmas.setFullYear()+1);
				}
				var one_day=1000*60*60*24;
				console.log(Math.ceil((cmas.getTime()-today.getTime())/one_day)+" days left until Christmas!");

