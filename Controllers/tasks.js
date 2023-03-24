const Task = require('../Models/tasks');

module.exports = {
    index: (req, res) => {
        Task.find({}).then((tasks) => {
            res.render('Todo.ejs', {todotasks: tasks});
        })}
         ,
    create: (req, res) => {
            const FristTask = new Task({title: req.body.title}); // Object
            FristTask.save().then(() => res.redirect('/'));
        } ,
    edit: async (req, res) =>{
            Task.find({}).then((tasks) => {
             res.render('editTask.ejs', {todotasks: tasks , Task_id: req.params.id})
         })}
         ,
    update: async (req, res) =>{
            await Task.findByIdAndUpdate(req.params.id, {title:req.body.title})
            res.redirect('/');
        }
     ,    
    delete: async (req, res) => {
        await Task.deleteOne({_id: req.params.id})
        res.redirect('/')
        }  
        

}