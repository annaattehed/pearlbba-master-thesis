const stripe = require('stripe')('process.env.STRIPE_KEY');

'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({strapi})=>({
  async create(ctx){
    const { products } = ctx.request.body;

    // search for frontend product in database to try to go to payment

    const lineItems = await Promise.all(
      products.map(async (product) =>
      {const item = await strapi.service("api::product.product").findOne(product.id)

        return {
          price_data:{
            currency:"sek",
            product_data:{
              name:item.title,
            },
          },
          quantity:item.quantity,
        }
    })
    )
    try{
        const session = stripe.checkout.create({
          mode: "payment",
          success_url: `${process.env.CLIENT_URL}/?success=true`,
          cancel_url: `${YOUR_DOMAIN}/?success=false`,
          line_items: lineItems,
          payment_method_types:["card"],
        });

        await strapi.service("api::order:order").create({data:{
          products,
          stripeId: session.id,
        },
      });

      return { stripeSession: session};
    } catch (err) {
      ctx.response.status = 500;
      return err;
    }
  },
}));
