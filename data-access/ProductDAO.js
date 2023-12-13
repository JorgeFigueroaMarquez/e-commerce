import Product from "../schemas/Product";
import mongoose from "mongoose";
import DataAccessError from "../errors/DataAccessError";

export default class ProductDAO{
    constructor(){
    }

    async create(productData){
        try {
            const product = new Product(productData)
            return await product.save()
        } catch (error) {
            throw new DataAccessError('We are sorry, There was an error creating Product in database, try again later')
        }
    }
}