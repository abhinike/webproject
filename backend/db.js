// getting-started.js
const mongoose = require('mongoose');

var uri = "mongodb+srv://abhishekssinha2003:abhinike@cluster0.ml901sz.mongodb.net/vectorvorker?retryWrites=true&w=majority";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  module.exports = function (callback) {
    mongoose.connect(uri, options, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            // var database =
            console.log("connected to mongo")
            const workercollections = await mongoose.connection.db.collection("workers");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("worker_category");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
            // listCollections({name: 'food_items'}).toArray(function (err, database) {
            // });
            //     module.exports.Collection = database;
            // });
        }
    })
};
// const mongodb = async()=> {
//     await mongoose.connect(uri, options)
//     .then(async() => {
//       console.log('Connected to MongoDB database');
//       const fetched_data = await mongoose.connection.db.collection("workers");
      
//     //   fetched_data.find({}).toArray(function(err, data){
//     //     console.log("hello")
//     //     if(err) console.log(err);
//     //     else console.log(data);
//     //   })

//     fetched_data.find({}, (err, data)=> {
//         if (err) {
//             console.error('Error fetching workers:', err);
//           } else {
//             console.log('Workers:', workers);
//           }
//     })
//       // Your code here
//     })
//     .catch((err) => {
//       console.error('Error connecting to MongoDB:', err);
//     });
// }

 

// module.exports = mongodb();


