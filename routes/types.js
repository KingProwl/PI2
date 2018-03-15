var router = require('express').Router();
var Type = require('./../models/Type');

router.get('/:type', (req,res) => {
    Type.findOne({name:req.params.type}).populate('clients').then(type => {
        if(!type) return res.status(404).send('Type introuvable');
        res.render('types/show.html' , {
            type:type,
            clients:type.clients
        });
    });
})

module.exports = router;