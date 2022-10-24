const model = require('../../models/collector');
const pgdb = require('../../databasepg');

let rescode =404;
let resstatus ='';
let resmsg ='';

const deleted = async function(req, res){
    
    let id = req.params.id;
    try{
        const result = await pgdb.query('DELETE FROM product WHERE id = $1',[id]);
        pgdb.end;
        if(result.rowCount == 1){  
            rescode = 200; 
            resstatus =  'Deleted successfully ID '+ id;
            resmsg = result.rowCount;
        }
        if (!result){            
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

module.exports = deleted;