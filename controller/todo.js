const Database = require('../model').database;

exports.getToDo = (req, res, next)=>{
    Database.getList(notes=>{
        res.status(200).render('todo',{
            hasList: notes.length > 0 ? true : false,
            notes: notes
        });
    });
};

exports.postToDo = (req, res, next)=>{
    const data = new Database(req.body.note);
    data.push(d => {
        console.log(d);
        res.redirect('/');
    });
};

exports.postDel = (req, res, next)=>{
    Database.deleteList(req.body.id, notes=>{
        res.redirect('/');
    });
}

exports.postEdit = (req, res, next)=>{
    Database.updateList(req.body.id,req.body.note, notes=>{
        res.redirect('/');
    })
}