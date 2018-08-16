
function updateOdometer() {
 
    if (level === 'state') {
 
        setTimeout(function () {
            bagsOdometer.innerHTML = vermont.stats.bagCount;
        }, 200);
        setTimeout(function () {
            teamsOdometer.innerHTML = vermont.stats.totalTeams;
        }, 400);
        setTimeout(function () {
            usersOdometer.innerHTML = vermont.stats.totalUsers;
        }, 600);
   
    } else if (level === 'county') {
   
        setTimeout(function () {
            bagsOdometer.innerHTML = vermont.countyNumber(currentCounty).stats.bagCount
        }, 200);
        setTimeout(function () {
            teamsOdometer.innerHTML = vermont.countyNumber(currentCounty).stats.totalTeams
        }, 400);
        setTimeout(function () {
            usersOdometer.innerHTML = vermont.countyNumber(currentCounty).stats.userActivity
        }, 600);
   
    } else if (level === 'town') {
       
        setTimeout(function () {
            bagsOdometer.innerHTML = 101
        }, 200);
        setTimeout(function () {
            teamsOdometer.innerHTML = 101
        }, 400);
        setTimeout(function () {
            usersOdometer.innerHTML = 101
        }, 600);
   
    }
}