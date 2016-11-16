//require modules
const printer = require("./printer");
const parser = require("./scheduleParser");
const https = require('https');


/*Function that allows connection to Football API
  Will send all requests to get both HOME and AWAY TEAM info,
  as well as competition*/
function connect(teamID){
  // var teamID = getTeamID(teamName);// FIXME: for the next Version have a way to find all team info by just entering team name
  var fixturesPath = '/v1/teams/' + teamID + '/fixtures';
  // Make initial requests to get list of all fixtures
  sendRequest(fixturesPath, (content) => {
    // get fixture object form the content returned
    var fixtures = content.fixtures;
    //parse schedule
    parser.parseSchedule(fixtures);
  });

}

/* Function that makes custom request to API
  -- parameters is a
  -- returns a JSON object if request === 200
    else it will print out the error
*/
function sendRequest(path, content){
  //optiopns
  var options = {
    hostname: 'api.football-data.org',
    port: 443,
    path: path,
    method: 'GET',
    headers: {
      "X-Auth-Token": process.env.API_KEY
    }
  };
  // make request
  var request = https.request(options, (response) => {

    var body ="";

    response.on('data', (data) => {
      body += data;
    });
    // Add parsed info once request is complete
    response.on('end', () =>{
      if(response.statusCode === 200){
        //use try and catch for error
        try {
          //print the complete response data
          //return to callback
          return content(JSON.parse(body));
        }catch(error){
          printer.printError(error);
        }
      }else{
        // status error
        printer.printError({message: response.statusMessage });
      }
    });
  })
  request.end();
  //error handling
  request.on('error', (error) => {
    printer.printError(error);
  });

}

// create modules
module.exports.connect = connect;
