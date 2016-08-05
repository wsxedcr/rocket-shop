Carts = new Mongo.Collection("carts");

Carts.getCart = function(userKey) {

    var cart = Carts.findOne({userKey:userKey});
    if (cart == null) {
        cart = {
            userKey:userKey,
            createdAt: new Date(),
            itemCount:0,
            total:0,
            items:[],
            notes:['something'],
            status: 'open'
        };
        Carts.insert(cart);
    }
    return cart;
};