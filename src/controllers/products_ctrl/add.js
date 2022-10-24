const model = require('../../models/collector');
const pgdb = require('../../databasepg');

let rescode =404;
let resstatus ='';
let resmsg ='';

const add = async function(req, res){
     
    const { 
        name, price, stock, imageUrl, description
      } = req.payload;

      const create_at = new Date().toISOString();
      const update_at = create_at;

    try{
        
        const result = await pgdb.query('INSERT INTO product(id, name, price, stock, "imageUrl", description,"createdAt", "updatedAt") VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7) RETURNING *',[name, price, stock, imageUrl, description, create_at,update_at]); // sends queries
       
        pgdb.end;

        if(result.rowCount == 1){
            rescode = 200; 
            resstatus =  'Added Product ';
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

module.exports = add;