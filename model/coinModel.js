import mongoose from "mongoose";


const myCoin = new mongoose.Schema({


    coinID : {

        type : "String"

    },

    name : {
        
        type: String
    }

});


const coinModel = new mongoose.model('myCoin',myCoin);

export default coinModel;