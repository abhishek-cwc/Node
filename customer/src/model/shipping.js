import prisma from "../config/db-config.js";

export const createShipping = async (req, res) => {
    return await createShippingAddress(req);
}

async function createShippingAddress(req)
{
    const shipping = req.body;
    shipping.customer_id = req.user.id;
    const address = await prisma.customer_shipping_address.create({
        data: shipping, 
        });
    return address;   
}