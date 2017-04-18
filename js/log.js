var log = "https://api.github.com/repos/AgenciaMonk/agenciamonk.github.io/events?per_page=1000";
d3.json(log, makeChart);


function makeChart(eventsJSON) {
  var dataArray = [],
      dataKeyVal = [],
      perDay = {};

for (item in eventsJSON) {
    var d = new Date(eventsJSON[item].created_at).getDate();

    if (perDay[d]){
        var t = perDay[d];
        perDay[d] = t+1;
    } else {
        perDay[d] = 1;
    }
    var fillColor="#eee";
    var event="";

if (eventsJSON[item].type == "WatchEvent"){
  fillColor="#29477F";
  event="starred";
}
if (eventsJSON[item].type == "ForkEvent"){
  fillColor="#0D2653";
  event="forked";
}
if (eventsJSON[item].type == "PullRequestEvent"){
  fillColor="#8F4A3F";
  event="pull request";
}
if (eventsJSON[item].type == "PushEvent"){
  fillColor="#BF4330";
  event="pushed";
}
if (eventsJSON[item].type == "IssueCommentEvent"){
  fillColor="#295E4F";
  event="commented";
}
if (eventsJSON[item].type == "CreateEvent"){
  fillColor="#252525";
  event="created";
}

    dataKeyVal.push({"date": d
                    , "type": event
                    , "fill": fillColor
                    , "avatar": eventsJSON[item].actor.avatar_url
                    , "user": eventsJSON[item].actor.login });

var ith = perDay[d];
//$('.time2').append(ith);
var details = "";
if (eventsJSON[item].payload.pull_request ){
details = eventsJSON[item].payload.pull_request. title;
}
$('#log').append("<div class='item-lista'><div class='container wrap space-between-center text-center'><div class='item-lista-1'><div class='container center-center'><img class='img-git' src='" + eventsJSON[item].actor.avatar_url+ "' width='42'/><a class='cor-principal' href='http://github.com/" + eventsJSON[item].actor.login + "' target='_blank'>" + eventsJSON[item].actor.login + " </a></div></div><div class='item-lista-1 item-commit'>" + event + " <span class='details'>" + details + "</div><div class='item-lista-1 date-git cor-principal'>" + eventsJSON[item].created_at + "</div></div></div>");

   dataArray.push(eventsJSON[item]);
}

var timeBlock = d3.select(".time")
            .selectAll("div")
            .data(perDay)
            .enter().append("div")
            .style("width", "30px")
            .text(function(b) {
              $('.time2').append("B");
                return b;});

var blocks = d3.select(".blocks")
            .selectAll("div")
            .data(dataKeyVal)
            .enter().append("div")
            .style("color", "white" )
            .style("background-color",
                   function(d){return d.fill; })
.style("background-image",
                   function(d){return "url(" + d.avatar + ")"; })
            .text(function(d) {
              return d.type });
}
