
    // calculate days left until next Christmas
      var d = new Date();
      var chris = new Date(d.getFullYear(),11,25);
      if (d.getMonth()===11 && d.getDate() > 25) {
        chris.setFullYear(d.getFullYear() + 1);
      }
      var oneDay = 1000*60*60*24;
      console.log(Math.ceil((chris - d)/oneDay) +' day left until next Christmas');
    
