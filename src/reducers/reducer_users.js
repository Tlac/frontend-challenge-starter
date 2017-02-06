export default function(){
    let htnUsers = [];
    $.getJSON('https://hackthenorth.com/fe-users.json', function(results){
        htnUsers = results;
    });
    return htnUsers
}