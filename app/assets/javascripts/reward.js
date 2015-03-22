var ready = function() {

  var userData = [{"x": 0, "y": 150, "radius": 10},
              {"x": 2, "y": 150, "radius": 20},
              {"x": 4, "y": 150, "radius": 30},
              {"x": 6, "y": 150, "radius": 5},
              {"x": 8, "y": 150, "radius": 20},
              {"x": 10, "y": 150, "radius": 40},
              {"x": 12, "y": 150, "radius": 20},
              {"x": 14, "y": 150, "radius": 35},
              {"x": 16, "y": 150, "radius": 15},
              {"x": 18, "y": 150, "radius": 12},
              {"x": 20, "y": 150, "radius": 17},
              {"x": 22, "y": 150, "radius": 31}
              ]

  var systemData = [{"x": 0, "y": 150, "radius": 10},
              {"x": 2, "y": 150, "radius": 40},
              {"x": 4, "y": 150, "radius": 25},
              {"x": 6, "y": 150, "radius": 5},
              {"x": 8, "y": 150, "radius": 21},
              {"x": 10, "y": 150, "radius": 15},
              {"x": 12, "y": 150, "radius": 17},
              {"x": 14, "y": 150, "radius": 6},
              {"x": 16, "y": 150, "radius": 20},
              {"x": 18, "y": 150, "radius": 20},
              {"x": 20, "y": 150, "radius": 20},
              {"x": 22, "y": 150, "radius": 20}
              ]

  var margin = {top: 20, right:20, bottom:20, left:50};
  var width = $("#reward").parent().width(),
      height = 400;

  var svg = d3.select("#reward")
              .append("svg")
              .attr("height", height)
              .attr("width", width)
              .append("g")
              .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  var xScale = d3.scale.linear()
                 .range([0, width - margin.left - margin.right]);
  
  var yScale = d3.scale.linear()
                 .range([height - margin.top - margin.bottom, 0]);

  function render(){
    yScale.domain([0,3000]);
    xScale.domain([0,24]);
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

    var xAxis = d3.svg.axis()
        .scale(xScale).orient("bottom");

    if (svg.selectAll(".y.axis")[0].length < 1 ){
      svg.append("g")
         .attr("class","y axis")
         .attr("fill", "white")
         .call(yAxis);

      svg.append("g")
         .attr("class", "x axis")
         .attr("transform", "translate(0," + (height-margin.top-margin.bottom) + ")")
         .attr("fill", "white")
         .call(xAxis);

    }

    svg.selectAll('.axis .domain')
    .style({'stroke': 'white', 'fill': 'none', 'stroke-width': '1px'});
    
    for(var i=0; i<userData.length; i++){
      if(userData[i].radius <= systemData[i].radius){
        svg.append("circle")
         .attr("r", 0 )
         .transition()
         .duration(2000)
         .attr("cx", systemData[i].x/24 * (width - margin.left - margin.right))
         .attr("cy", systemData[i].y )
         .attr("r", systemData[i].radius )
         .style("fill", "#7BC2E9");

        svg.append("circle")
         .attr("r", 0 )
         .transition()
         .duration(2000)
         .attr("cx", userData[i].x/24 * (width - margin.left - margin.right))
         .attr("cy", userData[i].y )
         .attr("r", userData[i].radius )
         .style("fill", "#FFF");
      }else{
        svg.append("circle")
         .attr("r", 0 )
         .transition()
         .duration(2000)
         .attr("cx", userData[i].x/24 * (width - margin.left - margin.right))
         .attr("cy", userData[i].y )
         .attr("r", userData[i].radius )
         .style("fill", "#FFF");

        svg.append("circle")
         .attr("r", 0 )
         .transition()
         .duration(2000)
         .attr("cx", systemData[i].x/24 * (width - margin.left - margin.right))
         .attr("cy", systemData[i].y )
         .attr("r", systemData[i].radius )
         .style("fill", "#7BC2E9");
      }

    }
    // var userCircles = svg.selectAll("circle").data(userData).enter().append("circle");
    // userCircles.attr("cx", function (d) { return d.x/24 * (width - margin.left - margin.right); })
    //            .attr("cy", function (d) { return d.y; })
    //            .attr("r", function (d) { return d.radius; })
    //            .style("fill", "#7BC2E9");

    svg.append("text")      // text label for the x axis
        .attr("x", 45 )
        .attr("y", 5 )
        .style("text-anchor", "middle")
        .style("fill", "white")
        .html("m&sup3;"+"/hour");

    svg.append("text")      // text label for the x axis
          .attr("x", 825 )
          .attr("y", 350 )
          .style("text-anchor", "middle")
          .style("fill", "white")
          .html("hour");



  }
render();
}

// initial page render

// continuous page render\
$(document).ready(ready);
$(document).on('page:load', ready);
