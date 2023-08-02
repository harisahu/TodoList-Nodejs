const db = require('../config/mongoose');
const Dashboard = require('../models/dashboard');
const User = require('../models/register');
const { dashboard } = require('./dashboardController');

/*module.exports.completedtask = function(req, res){
    const data = Dashboard.find({})
    .then(function(data){
        User.findOne({email : "ankitvis609@gmail.com"})
        .then(function(user){
            console.log(`**********user`, user.name);
        return res.render('completedtask', {
            title: "Dashboard",
            name: user.name,
            dashboard: data
        });
    })
    })
    .catch(function(err){
        console.log('Error', err);
        return;
    });
}*/

module.exports.completedtask = function(req, res){
    const data =  Dashboard.find({completed: true})
    .then(function(data){
        return res.render('completedtask',{
            title: "Dashboard",
            dashboard: data
        });
    })

}
