const model = require('../../models/collector');
const pgdb = require('../../databasepg');

let rescode =404;
let resstatus ='';
let resmsg ='';


const read = async function(req, res){
    let id = req.params.id;
    try{
        const result = await pgdb.query('Select * from product WHERE id = $1',[id]);
        pgdb.end;

        if(result.rows.length > 0){  
            rescode = 200; 
            resstatus =  'Get Product ID '+id;
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

module.exports = read;