const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/shopApp");

    const productsSchema = new mongoose.Schema({
        name: { type: String, required: true },
        price: {
            online: {
                type: Number,
                required: true,
                default: 0,
                // Custom validation error messages
                min: [
                    0,
                    "Heyoo since when did you see negative prices!! Ya bum!! Fogoff!!",
                ],
            },
            inStore: { type: Number, required: true, default: 0, min: 0 },
        },
        quantity: { type: Number, required: true },
        isOnSale: { type: Boolean, required: true, default: false },
        categories: [String],
        size: {
            type: String,
            enum: ["250ml", "300ml", "1L", "2L"],
            default: "250ml",
        },
    });

    // Instance methods
    productsSchema.methods.onSale = function () {
        console.log(
            `${this.name} is on sale. Only at $${this.price.online * 0.8}`
        );
    };

    productsSchema.methods.addCategory = function (newCat) {
        this.categories.push(newCat);
        this.save();
    };

    // Static methods
    productsSchema.statics.fireSale = async function () {
        await this.updateMany(
            {},
            {
                $set: {
                    "price.online": 10,
                    "price.inStore": 10,
                    isOnSale: true,
                    size: "1L",
                },
            },
            {
                runValidators: true,
            }
        );
    };

    productsSchema.statics.addDefaultCategories = async function (categories) {
        await this.updateMany({}, { $push: { categories: categories } });
    };

    // creating the schema model

    const Product = mongoose.model("Product", productsSchema);

    const products = await Product.find({
        name: "Nice & Lovely - Suppleness",
    });

    if (!products.length) {
        let lotion = new Product({
            name: "Nice & Lovely - Suppleness",
            quantity: 40,
            isOnSale: false,
        });

        lotion.save();

        lotion = new Product({
            name: "Nice & Lovely - Hardcore",
            quantity: 40,
            isOnSale: false,
            "price.online": 700,
            "price.inStore": 620,
            size: "2L",
        });

        lotion.save();

        lotion = new Product({
            name: "Nice & Lovely - BeachReady",
            quantity: 40,
            isOnSale: false,
            "price.online": 700,
            "price.inStore": 620,
            size: "2L",
        });

        lotion.save();
    }
    // Run validators to remind MongoDB to check validations when updating
    let update = await Product.findOneAndUpdate(
        { name: "Nice & Lovely - Suppleness" },
        { $set: { "price.online": 300, size: "300ml" } },
        { new: true, runValidators: true }
    );
    console.log(update);
    update.onSale();
    update.addCategory("Skin-care");
    Product.fireSale();
    Product.addDefaultCategories("lotion");
}
