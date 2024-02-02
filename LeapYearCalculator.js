function leapCalc(year) {
  if(year % 4 === 0){
      if (year % 100 === 0) {
          if ( year % 400 === 0) {
              return alert( year + " is a Leap Year.")
          }
          else{
              return  alert( year + "is not a Leap Year.")
          }  
      }else{
        return  alert( year + " is a Leap Year.")
      }
  }else{
     return alert( year + " is not a Leap Year.")
  }   
}
leepCalc(2024)
