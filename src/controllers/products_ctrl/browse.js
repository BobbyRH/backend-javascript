const model = require('../../models/collector');
const pgdb = require('../../databasepg');

let rescode =404;
let resstatus ='';
let resmsg ='';

const browse = async function(req, res){
    try{
        const result = await pgdb.query('Select * from product');
        pgdb.end;
        
        if(result.rows.length > 0){  
            rescode = 200; 
            resstatus =  'Get Product';
            resmsg = result.rows;
        }else{
            rescode = 200; 
            resstatus =  'Data Empty';
            resmsg = result.rows;
        }
        if (!result || !result.rows || !result.rows.length){            
            rescode = 404; 
            resstatus =  'Error';
            resmsg = "";
        };

        return res.response({
            status: resstatus,
            message:resmsg
        }).code(rescode); 

    } catch(error){
        console.log(error);
        return false;
    }   
}

module.exports = browse;