const printer = require("./printer");
// takes in a JSON object and parses all variables to get the following data:
    // Home Team name
    // Away Team name
    // Match Date & Time
    // Competition name
    // Match status
    // result
    //   Goals- Home Team
    //   Goals - Away Team

function parseSchedule(schedule){
  // loop through all items in schedule and print each on out (use printer)
  schedule.forEach((match) => {
    //available info on fixtures JSON
    var homeTeam = match.homeTeamName;
    var awayTeam = match.awayTeamName;
    var matchday = match.matchday;
    var matchdate= new Date(match.date);
    var status= match.status;
    var score = parseResult(match.result);
    printer.printSchedule(homeTeam, awayTeam, matchday, matchdate, status, score);


  });
}

function parseResult(results){
    var score = "No Scores Yet";
    var homeScore = results.goalsHomeTeam;
    var awayScore = results.goalsAwayTeam;

    if(homeScore !== null){
      score = homeScore + " : " + awayScore;
    }
    return score;
}


//create modules
module.exports = {parseSchedule};
