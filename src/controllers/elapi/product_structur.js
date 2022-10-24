const model = require('../../models/collector');

const selectProduct = async (item) => {
    // return {
    //     id: item.prdNo,
    //     name: item.prdNm,
    //     price: item.selPrc,
    //     stock: stockCount(item.ProductOptionDetails),
    //     imageUrl: item.ProductDetail.imageUrl,
    //     description: item.ProductDetail.detail,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    // }
    let fieldtbl =  {
            id: item.prdNo,
            name: item.prdNm,
            price: item.selPrc,
            stock: stockCount(item.ProductOptionDetails),
            imageUrl: item.ProductDetail.imageUrl,
            description: item.ProductDetail.detail,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        try{
            await model.products.create(fieldtbl)
            // .then((result)=>{
            //     console.log("\n");
            //     console.log(result);
            //     console.log("\n");
                
            // })
        } catch(error){
            console.log(error);
            return false;
        }

        return fieldtbl;
}

const stockCount = (stocks) => {
    let stock = 0
    if (stocks && Array.isArray(stocks)) {
        stocks.forEach(item => {
            stock=+ item.stckQty
        })
    } else {
        stock = stocks.stckQty
    }

    return stock
}

module.exports = {
    selectProduct,
    stockCount
}