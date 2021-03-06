var express = require('express');
var jobsData = require('./jobs-data.js');

var app = express();

require('./jobs-service.js')(jobsData, app);

app.set('views', __dirname);
app.set('view engine', 'jade');
app.use(express.static(__dirname+'/public'));

app.get('*', function(req, res){
    res.render('index');
});

//mongoose.connect('mongodb://localhost/jobfinder');
jobsData.connectDB('mongodb://jobfinderuser:jobfinderuser@ds015584.mlab.com:15584/jobfinder')
.then(function(){
    console.log('connection to mongodb successful.');
    //jobsModel.seedJobs();
});

app.listen(process.env.PORT, process.env.IP);