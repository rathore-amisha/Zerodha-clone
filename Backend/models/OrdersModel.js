const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchem");

const OrdersModel = new model("order",OrdersSchema);

module.exports = { OrdersModel };