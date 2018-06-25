//get the current date
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

      var today = new Date();
      var yyyy = today.getFullYear();
      var mm = today.getMonth();
      var dd = today.getDate();
      if (mm < 10) {
        mm = '0'+mm;
      }
      if (dd < 10) {
        dd = '0' + dd;
      }
      console.log(mm + '-' + dd + '-' + yyyy);
      console.log(mm + '/' + dd + '/' + yyyy);

      console.log(dd + '-' + mm + '-' + yyyy);
      console.log(dd + '/' + mm + '/' + yyyy);
