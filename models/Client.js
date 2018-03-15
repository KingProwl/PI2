var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
    name : String,
    number : Number,
    description : String,
    picture : String, // chaine de caract qui contient le path de l'image
    types : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Type'
        }
    ]
});




var Client = mongoose.model('Client', clientSchema);

module.exports = Client; // Pour eporter ce modèle dans d'autre partie de l'application. 
