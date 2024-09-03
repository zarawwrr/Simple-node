const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const myProfile = {
    firstname: "ZARA JEN",
    lastname: "MORANDARTE",
    age: 20,
    schoolEmail: "zaca.morandarte.swu@phinmaed.com",
};

app.get('/', (req, res) =>{
    res.send("Welcome to my server! To learn more, try putting any of the following to the URL: ('/firstname', '/lastname', '/age', '/schoolemail')")
})
app.get('/firstname', (req, res) => {
    res.send(myProfile.firstname);
});


app.get('/lastname', (req, res) => {
    res.send(myProfile.lastname);
});


app.get('/age', (req, res) => {
    res.send(myProfile.age.toString());
});


app.get('/schoolemail', (req, res) => {
    res.send(myProfile.schoolEmail);
});


app.get('/mydata', (req, res) => {
    res.send(myProfile)
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
