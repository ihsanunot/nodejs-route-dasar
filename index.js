const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send(`ini halaman home`)
})

app.get('/cats', (req,res) => {
    res.send(`ini respon dari halaman cats`)
});

app.post('/cats', (req, res) => {
    res.send(`ini lagi coba nge post`)
});


app.get('/blog/:judul', (req,res) => {
    const { judul } = req.params
    res.send(`ini contoh blog dgn parameter judul ${judul}`)
})

app.get('/blog/:judul/:penulis/:kategori', (req,res)=>{
    const { judul, penulis, kategori } = req.params
    res.send(`ini contoh judul ${judul} dan ${penulis} dan ${kategori}`)
});

app.get('/search', (req,res) => {
    // query string http://localhost:8080/search?q=nodejs
    const {q} = req.query;
    if(!q){
        res.send(`data yg anda cari tidak ada`)
    }
    res.send(`<h1>Search Keyword: ${q}</h1>`); 

});

app.get('*', (req, res) => {
    res.send(`halaman tidak ditemukan`)
});


app.listen(8080, () => {
    console.log(`berjalan di http://localhost:8080`);
})