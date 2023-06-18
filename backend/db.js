const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://shop_aman:shop_aman_hack@cluster0.gwfzmbo.mongodb.net/SHOP?retryWrites=true&w=majority"
const connectTomongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('connected to mongo')
        const fetched_data = mongoose.connection.db.collection("Products");
        const data = await fetched_data.find({}).toArray();
        global.shop_items = data;
        // console.log(global.shop_products);
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectTomongo;