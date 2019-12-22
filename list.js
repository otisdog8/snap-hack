function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}

usercreds = httpGet("https://snap.berkeley.edu/users/c")

username = usercreds.username

projects = httpGet("https://snap.berkeley.edu/projects/" + username)

projectnames = []

for (i = 0; i < projects.projects.length; i++) {
    projectnames[i] = projects.projects[i].projectname
}

projectnamesstr = ""

for (i = 0; i < projectnames.length; i++) {
    projectnamesstr += projectnames[i] + ","
}

return projectnamesstr