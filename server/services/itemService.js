const Item = require("../models/Item")

async function getAll() {
    return Item.find({});
}

async function getExactNumber(limit) {
    return Item.find().sort({createdAt: -1}).limit(limit);
}

async function getByOwnerId(ownerId) {
    return Item.find({ _ownerId: ownerId });
}

async function getById(id) {
    return Item.findById(id).populate("_ownerId")
}
async function create(item) {
    return Item.create(item);
}
async function update(id, item) {
    const existing = await Item.findById(id);

    existing.name = item.name;
    existing.price = item.price;
    existing.stock = item.stock;
    existing.img = item.img;
    existing.description = item.description;
    existing.category = item.category;
    existing.size = item.size;

    return existing.save();
}
async function deleteById(id) {
    return Item.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    getExactNumber,
    getByOwnerId,
    getById,
    create,
    update,
    deleteById,
}