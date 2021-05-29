const express = require('express');

const app = express();
const mongoose = require('mongoose');

//Middlewares  (hitting the routes)
//app.use(auth)  //this func. is the user is authentification or not
// app.use('/posts', () => {
//     console.log('This is a middleware running');
// });



//Routes (if we send the messege then we use app.post('/', (req, res)....))
//app.delete() and in that we write logic what post we can delete
//app.patch()  it is updating the post

app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});


//Connect To DB
mongoose.connect('mongodb+srv://rest:test@cluster0.2cdt3.mongodb.net/Data', {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(console.log('Connected to Mongo DB!'))

//How to we start listing to server
app.listen(3000);