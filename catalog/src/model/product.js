import prisma from "../config/db-config.js";

export const createProductService = async (name, sku, price, qty) => {
    const product = prisma.product.create({
        data: {name, price, sku, qty},
    })
    return product;
}


export const getAllProductService = async () => {

    const products= prisma.product.findMany();
    return products;
    
}