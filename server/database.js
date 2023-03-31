const mongoose = require('mongoose');

class Database {
    async connectDatabase() {
        try {
            const conn = await mongoose.connect(process.env.DATABASE, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            });

            console.log(`MongoDB Connected`);
        } catch (error) {
            console.error(`Error: ${error.message}`);
            process.exit(1);
        }
    }
}

module.exports = new Database();