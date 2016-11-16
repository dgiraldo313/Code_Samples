function printSchedule(homeTeam, awayTeam, matchday, matchdate, status, score ){
  console.log("\n");
  console.log("****************************************");
  console.log("*************** Game " + matchday + "*****************");
  console.log("****************************************");
  console.log("   " + homeTeam  + " VS. " + awayTeam);
  console.log("\n");
  console.log( "   " + matchdate);
  console.log("\n");
  console.log("   " + score);
  console.log("\n");
  console.log("   " + status);
}

// print out error messages
function printError(error){
  console.error(error.message);
}

// create modules
module.exports= { printSchedule, printError};
// module.exports= printError;
