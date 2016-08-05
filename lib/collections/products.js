Products = new Mongo.Collection("products");

Products.featured = function(){
  var featuredSkus = ["honeymoon-mars","johnny-liftoff","one-way-reentry"];
  // return _.filter(Products, function(product) {
  //   return featuredSkus.indexOf(product.sku) > -1;
  // });

  return Products.find({sku: {$in : featuredSkus}}, {fields:{inventory:false, cost:false}});
};

// Products.findOne = function(args) {
//   // return _.find(Products, function(product) {
//   //   return product.sku == args.sku;
//   // });
//
//   return Products.find({sku: {$in : args.sku}});
// };

Products.allow({
  update: function (user, product) {
    return isAdmin();
  },
  insert: function (user, product) {
    return isAdmin();
  },
  remove: function (user, product) {
    return isAdmin();
  }
});