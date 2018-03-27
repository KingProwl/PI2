var mongoose = require('mongoose');

var typeSchema = new mongoose.Schema({
    name : String,
    ISIN : String,
    forme_juridique : String,
    famille : String,
    AMF : String,
    numero_agrement : String,
    PEA1 : String,
    PEA2 : String,
    societe : String,
    date_creation : String,
    actif : String,
    Sharpe : String,
    P1W : String,
    P01 : String,
    P1M : String,
    P3M : String,
    P6M : String,
    P1Y : String,
    P3Y : String,
    P5Y : String,
    P10Y : String,
    color : {
        type : String,
        default : 'red'
    }
});

typeSchema.virtual('clients',{
    ref : 'Client',
    localField: '_id',
    foreignField: 'types'
});


var Type = mongoose.model('Type', typeSchema);

module.exports = Type;