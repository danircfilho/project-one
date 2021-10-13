const mongoose = require('mongoose');

/* Connect bd */
mongoose.connect(process.env.MONGO_URL_CONNECT, () => {
    console.log('Connected to MongoDB!');
});
