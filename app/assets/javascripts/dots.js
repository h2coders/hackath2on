var ready;


ready = function() {

            var arraydates;

            d3.json("/weather/date.json", function(error, datad) {
           
            var array = [];
      

            for(var i in datad)
                array.push( new Date(datad[i].date.replace(/-/g,"/")));
                arraydates=array.slice(1,10);                
         

            slide = 0
            var weather = $("#weather");

            function travelTime(ahead) {
                if (ahead) {
                    slide += 1
                } else {
                    slide -= 1
                }


             d3.json("/weather/wind.json?city=" + weather.data("city"), function(error, json) {
                beginning = slide * 10 + 1
                end = beginning + 9
                dataw = json.slice(beginning, end);
                
               

                windgroup.selectAll("circle").remove();
                windgroup.selectAll("circle").data(dataw)
                    .enter()
                    .append("circle")
                    .attr("r", 0)
                    .attr("cy", 40)
                    .attr("cx", function(d, i) {
                        return 90 * i
                    })
                    .style('fill', 'deeppink')
                    .attr("height", 10)
                    .attr("width", 20)
                    .attr("transform", "translate(75, 0)")
                    .transition()
                    .duration(1000)
                    .delay(100)
                    .attr("r", function(d, i) {
                        return xscale(d.speed / 50) + 20

                    });

                windgroup.selectAll("text").remove();
                windgroup.selectAll("text").data(dataw)
                    .enter()
                    .append("text")
                    .attr("width", 50)
                    .attr("height", 20)
                    .attr("fill", "white")
                    .style("opacity", 0)
                    .attr("y", 40)
                    .on('mouseover', function(d) {
                        d3.select(this).style({
                            opacity: '1.0'
                        })
                    })
                    .on('mouseout', function(d) {
                        d3.select(this).style({
                            opacity: '0.0'
                        })
                    })
                    .attr("x", function(d, i) {
                        return 90 * i
                    })
                    .text(function(d, i) {
                        return d3.round(d.speed) + " mps"
                    })
                    .attr("class", "labels");

            })



                d3.json("/weather/temperature.json?city=" + weather.data("city"), function(error, json) {
                    beginning = slide * 10 + 1
                    end = beginning + 9
                    datat = json.slice(beginning, end);

                    temperaturegroup.selectAll("circle").remove();
                    temperaturegroup.selectAll("circle").data(datat)
                        .enter()
                        .append("circle")
                        .attr("cy", 170)
                        .attr("r", 0)
                        .attr("cx", function(d, i) {
                            return 90 * i
                        })
                        .style("fill", "gold")
                        .attr("height", 10)
                        .attr("width", 20)
                        .attr("transform", "translate(75, 0)")
                        .transition()
                        .duration(1000)
                        .delay(100)
                        .attr("r", function(d, i) {
                            return xscale(d.temperature / 200)
                        });

                    temperaturegroup.selectAll("text").remove();
                    temperaturegroup.selectAll("text").data(datat)
                    .enter()
                    .append("text")
                    .attr("width", 50)
                    .attr("height", 20)
                    .attr("fill", "white")
                    .style("opacity", 0)
                    .attr("y", 170)
                    .on('mouseover', function(d) {
                        d3.select(this).style({
                            opacity: '1.0'
                        })
                    })
                    .on('mouseout', function(d) {
                        d3.select(this).style({
                            opacity: '0.0'
                        })
                    })
                    .attr("x", function(d, i) {
                        return 90 * i 
                    })
                    .text(function(d, i) {
                        return d3.round((d.temperature - 273.15)) + "°C";
                    })
                    .on()
                    .attr("class", "labels");
                  
                })

                d3.json("/weather/humidity.json?city=" + weather.data("city"), function(error, json) {

                    beginning = slide * 10 + 1
                    end = beginning + 9
                    datah = json.slice(beginning, end);
                    

                    humiditygroup.selectAll("circle").remove();
                    humiditygroup.selectAll("circle").data(datah)
                        .enter()
                        .append("circle")
                        .attr("r", 0)
                        .attr("cy", 290)
                        .attr("cx", function(d, i) {
                            return 90 * i
                        })
                        .style("fill", "dodgerblue")
                        .attr("height", 10)
                        .attr("width", 20)
                        .attr("transform", "translate(75, 0)")
                        .transition()
                        .duration(1000)
                        .delay(100)
                        .attr("r", function(d, i) {
                            return xscale(d.hum / 10)
                        });

                })
                    humiditygroup.selectAll("text").remove();
                    humiditygroup.selectAll("text").data(datah)
                        .enter()
                        .append("text")
                        .attr("width", 50)
                        .attr("height", 20)
                        .attr("fill", "white")
                        .style("opacity", 0)
                        .attr("y", 290)
                        .on('mouseover', function(d) {
                            d3.select(this).style({
                                opacity: '1.0'
                            })
                        })
                        .on('mouseout', function(d) {
                            d3.select(this).style({
                                opacity: '0.0'
                            })
                        })
                        .attr("x", function(d, i) {
                            return 90 * i 
                        })
                        .text(function(d, i) {
                            return d.hum + "%"
                        })
                        .attr("class", "labels");


            }



            window.travelAhead = function travelAhead() {
       
                travelTime(true);
            }

             window.travelBack = function travelBack() {
               
                travelTime(false);
            }


            var margin = {
                top: 50,
                right: 50,
                bottom: 50,
                left: 50
            };

           

            var width = 960 - margin.left - margin.right,
                height = 500 - margin.top - margin.bottom;

            var svg = d3.select("body")
                .select(".grid")
                .attr("width", width)
                .attr("height", height);

            

            var axisscale = d3.scale.ordinal()
                .domain(arraydates)
                .rangeRoundBands([0, 960]);
                
             
                

            var xscale = d3.scale.linear()
                .domain([0, 100])
                .range([0, width]);
           
                       
                            

            var xAxis = d3.svg.axis()
                .scale(axisscale)
                .tickValues(arraydates)
                .tickFormat(function(d){                 
                               return d.toLocaleTimeString("en-US");
                            })
                .tickSize(6, 0)
                .orient("top");

           

            var gx = svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis)
                .selectAll("text")  
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", width)
                .attr("dy", ".0em")
                .attr("dx", ".5em")
                .style("text-anchor", "start")
                .attr("fill", "grey")
                .text("hours");


            var d = [{
                x: 0,
                y: 0
            }];

            var g1 = d3.select("body")
                .select(".grid")
                .data(d)
                .append("g")
                .attr("transform", function(d) {
                    return "translate(" + d.x + "," + d.y + ")";
                })
                .call(onDragDrop(dragmove, dropHandler));



            var g2 = d3.select("body")
                .select(".grid")
                .data(d)
                .append("g")
                .attr("transform", function(d) {
                    return "translate(" + d.x + "," + d.y + ")";
                })
                .call(onDragDrop(dragmove, dropHandler));


            var g3 = d3.select("body")
                .select(".grid")
                .data(d)
                .append("g")
                .attr("transform", function(d) {
                    return "translate(" + d.x + "," + d.y + ")";
                })
                .call(onDragDrop(dragmove, dropHandler));


            var windgroup = g1.append("svg")
                .attr("id", "windsvg");



            var temperaturegroup = g2.append("svg")
                .attr("id", "temperaturesvg");


            var humiditygroup = g3.append("svg")
                .attr("id", "humiditysvg");

            var rect = windgroup.selectAll("div")



            function onDragDrop(dragHandler, dropHandler) {
                var drag = d3.behavior.drag();

                drag.on("drag", dragHandler)
                    .on("dragend", dropHandler);
                return drag;
            }

            function dropHandler(d) {
                
                
            }

            d3.selection.prototype.moveToFront = function() { 
                return this.each(function() { 
                  this.parentNode.appendChild(this); 
                }); 
              }; 

            function dragmove() {
                
                if (d3.event.y < 0) return;
                
                var d = this;
                
                if (!d.y) d.y = 0;


                d.y += d3.event.dy;
                d3.select(this).attr("transform", "translate(0," + d.y + ")");
                //console.log(this);
                d3.select(this).moveToFront();
           
                 

                
            }

        




            d3.json("/weather/wind.json?city=" + weather.data("city"), function(error, json) {
                beginning = slide * 10 + 1
                end = beginning + 9
                dataw = json.slice(beginning, end);


                windgroup.selectAll("circle").data(dataw)
                    .enter()
                    .append("circle")
                    .attr("r", 0)
                    .attr("cy", 50)
                    .attr("cx", function(d, i) {
                        return 90 * i 
                    })
                    .style('fill', 'deeppink')
                    .attr("height", 10)
                    .attr("width", 20)
                    .attr("transform", "translate(75, 0)")
                    .transition()
                    .duration(1000)
                    .delay(100)
                    .attr("r", function(d, i) {
                        return xscale(d.speed / 50) + 20
                    });

                    windgroup.selectAll("text").data(dataw)
                    .enter()
                    .append("text")
                    .attr("width", 50)
                    .attr("height", 20)
                    .attr("fill", "white")
                    .style("opacity", 0)
                    .attr("y", 45)
                    .on('mouseover', function(d) {
                        d3.select(this).style({
                            opacity: '1.0'
                        })
                    })
                    .on('mouseout', function(d) {
                        d3.select(this).style({
                            opacity: '0.0'
                        })
                    })
                    .attr("x", function(d, i) {
                        return 90 * i
                    })
                    .text(function(d, i) {
                        return d3.round(d.speed) + " mps"
                    })
                    .attr("class", "labels");


                

            });

            d3.json("/weather/temperature.json?city=" + weather.data("city"), function(error, json) {


                beginning = slide * 10 + 1
                end = beginning + 9
                datat = json.slice(beginning, end);


                temperaturegroup.selectAll("circle").data(datat)
                    .enter()
                    .append("circle")
                    .attr("cy", 175)
                    .attr("r", 0)
                    .attr("cx", function(d, i) {
                        return 90 * i 
                    })
                    .style("fill", "gold")
                    .attr("height", 10)
                    .attr("width", 20)
                    .attr("transform", "translate(75, 0)")
                    .transition()
                    .duration(1000)
                    .delay(100)
                    .attr("r", function(d, i) {
                        return xscale(d.temperature / 200)
                    });


                temperaturegroup.selectAll("text").data(datat)
                    .enter()
                    .append("text")
                    .attr("width", 50)
                    .attr("height", 20)
                    .attr("fill", "white")
                    .style("opacity", 0)
                    .attr("y", 175)
                    .on('mouseover', function(d) {
                        d3.select(this).style({
                            opacity: '1.0'
                        })
                    })
                    .on('mouseout', function(d) {
                        d3.select(this).style({
                            opacity: '0.0'
                        })
                    })
                    .attr("x", function(d, i) {
                        return 90 * i 
                    })
                    .text(function(d, i) {
                        return d3.round((d.temperature - 273.15)) + "°C";
                    })
                    .on()
                    .attr("class", "labels");


                

            });

            d3.json("/weather/humidity.json?city=" + weather.data("city"), function(error, json) {


                beginning = slide * 10 + 1
                end = beginning + 9
                datah = json.slice(beginning, end);

               
                humiditygroup.selectAll("circle").data(datah)
                    .enter()
                    .append("circle")
                    .attr("r", 0)
                    .attr("cy", 295)
                    .attr("cx", function(d, i) {
                        return 90 * i
                    })
                    .style("fill", "dodgerblue")
                    .attr("height", 10)
                    .attr("width", 20)
                    .attr("transform", "translate(75, 0)")
                    .transition()
                    .duration(1000)
                    .delay(100)
                    .attr("r", function(d, i) {
                        return xscale(d.hum / 10)
                    });


                 humiditygroup.selectAll("text").data(datah)
                        .enter()
                        .append("text")
                        .attr("width", 50)
                        .attr("height", 20)
                        .attr("fill", "white")
                        .style("opacity", 0)
                        .attr("y", 295)
                        .on('mouseover', function(d) {
                            d3.select(this).style({
                                opacity: '1.0'
                            })
                        })
                        .on('mouseout', function(d) {
                            d3.select(this).style({
                                opacity: '0.0'
                            })
                        })
                        .attr("x", function(d, i) {
                            return 90 * i 
                        })
                        .text(function(d, i) {
                            return d.hum + "%"
                        })
                        .attr("class", "labels");
       

            });

      $("img.arrow").css('opacity', 0); 

      $(".grid").hover(function(){

              $("img.arrow").fadeTo('slow',1);            
            },
            function(){
               $("img.arrow").fadeOut(); 
            }); 

      

      $(".icon1").click(function(){
              $("#windsvg").toggle();
              
             

            });

      $(".icon2").click(function(){
              $("#temperaturesvg").toggle();
             
            });

      $(".icon3").click(function(){
              $("#humiditysvg").toggle();

            });

       

 

       
       $("#ahead").click(function(){
             
              if ( $("#time").html() === "Today" ){
                   $("#time").html("Tomorrow");
              } else if ( $("#time").html() === "Tomorrow"){
                   $("#time").html("The day after tomorrow");
              } else if ( $("#time").html() === "The day after tomorrow"){
                    $("#time").html("No more forecast.")
              }

            });

        $("#back").click(function(){
             
              if ( $("#time").html() === "Tomorrow" ){
                   $("#time").html("Today");
              } else if ( $("#time").html() === "The day after tomorrow"){
                   $("#time").html("Tomorrow"); 
              } else if ( $("#time").html() === "No more forecast." ){
                    $("#time").html("The day after tomorrow");
              }

            });

         });


} 

         

$(document).ready(ready);
$(document).on('page:load', ready);