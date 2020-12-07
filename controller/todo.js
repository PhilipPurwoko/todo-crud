exports.getToDo = (req, res, next)=>{
    res.status(200).render('todo');
};

exports.postToDo = (req, res, next)=>{
    console.log(req.body.note);
    res.redirect('/');
};