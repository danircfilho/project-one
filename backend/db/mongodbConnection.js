const mongoose = require('mongoose');

/*Connected to BD*/
mongoose.connect(process.env.MONGO_URL_CONNECT, () => {
    console.log('Connected to MongoDB!');
});
