var express = require('express');
//var jobsModel = require('./models/Job.js');
var jobsData = require('./jobs-data.js');

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');
app.use(express.static(__dirname+'/public'));

//mongoose.connect('mongodb://localhost/jobfinder');
jobsData.connectDB('mongodb://jobfinderuser:jobfinderuser@ds015584.mlab.com:15584/jobfinder')
.then(function(){
    console.log('connection to mongodb successful.');
    //jobsModel.seedJobs();
});


app.get('/api/jobs', function(req, res){
    jobsData.findJobs().then(function(collection){
        res.send(collection);
    });
});

app.get('*', function(req, res){
    res.render('index');
});



app.listen(process.env.PORT, process.env.IP);