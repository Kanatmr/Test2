const express = require("express");
const app = express();
const port = 3000;

app.get('/',((req, res) => {
    res.sendFile(__dirname+'/index.html')
}))

app.get('/main',((req, res) => {
    res.sendFile(__dirname+'/main.css')
}))

app.get('/logo',((req, res) => {
    res.sendFile(__dirname+'/img/logo/logo.ico')
}))

app.get('/libs',((req, res) => {
    res.sendFile(__dirname+'/libs/bootstrap/css/bootstrap.min.css')
}))

app.get('/product-img',((req, res) => {
    res.sendFile(__dirname+'/img/clothes/1.webp')
}))

app.get('/product-img2',((req, res) => {
    res.sendFile(__dirname+'/img/clothes/1.webp')
}))
app.get('/product-img3',((req, res) => {
    res.sendFile(__dirname+'/img/clothes/2.webp')
}))
app.get('/product-img4',((req, res) => {
    res.sendFile(__dirname+'/img/clothes/3.webp')
}))
app.get('/product-img5',((req, res) => {
    res.sendFile(__dirname+'/img/clothes/4.webp')
}))

app.get('/calcCartPrice',((req, res) => {
    res.sendFile(__dirname+'/js/calcCartPrice.js')
}))

app.get('/toggleCartStatus',((req, res) => {
    res.sendFile(__dirname+'/js/toggleCartStatus.js')
}))

app.get('/counter-2',((req, res) => {
    res.sendFile(__dirname+'/js/counter-2.js')
}))

app.get('/card-2',((req, res) => {
    res.sendFile(__dirname+'/js/card-2.js')
}))

app.get('/sales',((req, res) => {
    res.sendFile(__dirname+'/css/sales.css')
}))

app.get('/googleFonts',((req, res) => {
    res.sendFile(__dirname+'https://fonts.googleapis.com/css?family=Merriweather:300,400,400i,700&amp;subset=cyrillic-ext" rel="stylesheet"')
}))

app.get('/pht',((req, res) => {
    res.sendFile(__dirname+'/img/logo/pht (2).png')
}))

app.get('/type_image',((req, res) => {
    res.sendFile('/images/png')
}))

app.get('/about',((req, res) => {
    res.sendFile(__dirname+'/about.html')
}))

app.get('/home',((req, res) => {
    res.sendFile(__dirname+'/home.html')
}))

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

/*
 * in order to fix errors:
 * 1) add a route '/home' with get method which will send 'home.html' as a response
 * 2) go to the file "index.html" and change <a href="home.html"> to <a href="home.html">
 */