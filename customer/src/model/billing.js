import prisma from "../config/db-config.js";

export const createBilling = async (req, res) => {
    return await createBillingAddress(req);
}

async function createBillingAddress(req)
{
    const billing = req.body;
    billing.customer_id = req.user.id;
    const address = await prisma.customer_billing_address.create({
        data: billing, 
        });
    return address;   
}