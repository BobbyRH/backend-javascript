const model = require('../../models/collector');
const pgdb = require('../../databasepg');

let rescode =404;
let resstatus ='';
let resmsg ='';

const edit = async function(req, res){
    const { 
        name, price, stock, imageUrl, description
      } = req.payload;

    let id = req.params.id;
    const update_at = new Date().toISOString();

    try{        
        const result = await pgdb.query('UPDATE product SET name = $1, price = $2, stock = $3, "imageUrl" = $4, description = $5, "updatedAt" = $6 WHERE id = $7',[name, price, stock, imageUrl, description,  update_at,id]); // sends queries
       
        pgdb.end;
        
        if(result.rowCount == 1){
            rescode = 200; 
            resstatus =  'Updated Product ';
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

module.exports = edit;