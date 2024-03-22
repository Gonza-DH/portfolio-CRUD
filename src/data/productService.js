const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let productService = {
    getAll: function(){
        return products
    },

    getOneBy: function(id){
        return this.products.find(product => product.id == id)
    },

    save: function(product){
        this.products.push(product);
        fs.writeFileSync(path.resolve(__dirname, '../data/productsDataBase.json'), JSON.stringify(this.products));
    }


}

module.exports = productService;