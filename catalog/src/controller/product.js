import {createProductService, getAllProductService} from "../model/product.js"

const handelResponse = (res, status, msg, data = null) => {
    res.status(status).json({
        data:data,
        message: msg
    });
}

export const getAllProduct = async (req, res) => {
    const products = await getAllProductService();
    handelResponse(res, 201, 'success', products)

}

export const createProduct = async (req, res) => {
    const {name, sku, price, qty} = req.body;
    const product = await createProductService(name, sku, price, qty);
    handelResponse(res, 201, 'success', product)
}