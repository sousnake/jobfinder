var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String}
});

var Job = mongoose.model('Job', jobSchema);

exports.seedJobs = function(){
    Job.find({}).exec(function(err, collection){
        if(collection.length === 0){
            Job.create({title: 'Software Developer', description: 'Writing softwares for ...'});
            Job.create({title: 'Web Developer', description: 'Designing the front end and ...'});
            Job.create({title: 'Graphics Developer', description: 'Designing and giving pfd document for ...'});
            Job.create({title: 'Project Manager', description: 'Project manager for this ...'});
        }
    });
};