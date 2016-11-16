require('dotenv').config(); //load API keys
const footballAPI = require('./apiConnection');// connect to API
const API_KEY = process.env.API_KEY;

//user variables
  // these values can change depending on the team
  /// WEB Version will include a drop down menu where team name can be selected and associated with team ID
var leagueID = "436";// La Liga - Primera Division
var teamID = "81";// Team ID - Barcelona FC ()

// Starts Connection to http://api.football-data.org/ to retrieve data
footballAPI.connect(teamID);
