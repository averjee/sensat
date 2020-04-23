# Installation Instructions

Clone Locally: <br>

`git clone https://github.com/averjee/sensat.git`

Inside cloned directory run: <br>

`npm install` <br>
`ng serve -o`

# Project Information

Since the sensor_readings.json file was a relaxed json file, Angular wasn't able to import it and <br>
therefore I had to convert it into converted.json using http://www.relaxedjson.org/docs/converter.html <br>
so that it could be properly imported where it comma separated each of the objects. <br>
<br>
As the sensor data table had thousands of records, I decided to add some pagination to the table <br>
where I show 15 records at a time on screen.  Other features include sorting headers to sort data, <br>
filtering the data using the filter input box and a graph showing the sensor readings over time which <br>
was stored in a separate graph component.
<br>
Things to improve: Updating the graph from the filter from the table so that both the table and graph <br>
are dynamic.




