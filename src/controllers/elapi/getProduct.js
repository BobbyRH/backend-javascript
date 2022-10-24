const axios = require('axios');
const { parser } = require('./parserXMLJson');
const configenv = require('dotenv').config();
const { selectProduct } = require('./product_structur');
const model = require('../../models/collector');


let URL64ENCODE = process.env.EA_URL;
// const encoded = Buffer.from(data, 'utf8').toString('base64') ;
const URL64DEC = Buffer.from(URL64ENCODE, 'base64').toString('utf8') ;

const option = {
    headers: {
        openapikey: process.env.EA_KEY1+process.env.EA_KEY2+process.env.EA_KEY3,
    }
};

const optactivity = {
    where: {
        keys: ['elapi']
    }, 
    limit: 1,
    order: [
        ['id', 'DESC']
    ]
};

const getItemProd = async (req, res) => {   
     
    let page = 1;
    let recordActivity = {};
    try {        
        await model.activitydata.findAll(optactivity)
        .then((items)=>{               
            if(items.length > 0){                  
                for (const item of items){   
                    page = parseInt(item.values)+1;
                    recordActivity =  {
                        keys: "elapi",
                        values: page
                    }
                }
            }else{  
                page = 1;
                recordActivity =  {
                    keys: "elapi",
                    values: page
                }
            } 
        })
        await model.activitydata.create(recordActivity);
        let urlProduct = URL64DEC+ '/prodservices/product/listing?page='+page;
        let {data} = await axios.get(urlProduct, option)
        let resJson =  await parser(data)
        if (!resJson && !resJson.Product) return []
        let result = await concatDetailProd(resJson.Products.product || [])     
        return result
    } catch (error) {
        console.log(error)
    }

}

const getDetailProd = async (id) => {
    
    let urlProductDetail = URL64DEC+ '/prodservices/product/details/'+id;
    try {
        let { data } = await axios.get(urlProductDetail, option)
        let dataJson = await parser(data)
        return dataJson
    } catch (error) {
        console.log(error)
    }
}

const concatDetailProd = (products) => {    
  return Promise.all(
    products.map(async (item) => {
        dataJson = await getDetailProd(item.prdNo)
        item.ProductDetail = {
            imageUrl: dataJson.Product.prdImage01,
            detail: dataJson.Product.htmlDetail
        }
        return selectProduct(item)
    })
  ).then(result => result)
}

module.exports = {
    getItemProd
}