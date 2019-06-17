const tUbahWarna = document.getElementById('tUbahWarna');

tUbahWarna.addEventListener('click', function () {
    document.body.classList.toggle('biru-muda');
    document.body.classList.toggle('text-putih');
    document.body.removeAttribute("style");
});


const tAcakWarna = document.createElement('button');
const textTombol = document.createTextNode('Acak warna');

tAcakWarna.appendChild(textTombol);

tUbahWarna.after(tAcakWarna);
// function tombol acak warna
tAcakWarna.addEventListener('click', function () {
    // ambil nilai acak
    function ambilNilaiAcak(min, max) {
        return Math.round(Math.random() * (max - min + 1) + min);
    }
    var r = ambilNilaiAcak(0, 255);
    var g = ambilNilaiAcak(0, 255);
    var b = ambilNilaiAcak(0, 255);;
    console.log(r + '-' + g + '-' + b);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

// function slide rang

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');



sMerah.addEventListener('input', function () {
    var r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    const kotak = document.getElementsByClassName('kotak-merah')[0];

    kotak.style.backgroundColor = 'rgb(' + r + ',0,0)';
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';


});

sHijau.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    const kotak = document.getElementsByClassName('kotak-hijau')[0];

    kotak.style.backgroundColor = 'rgb(0 ,' + g + ',0)';
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

});

sBiru.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    const kotak = document.getElementsByClassName('kotak-biru')[0];

    kotak.style.backgroundColor = 'rgb(0 ,0,' + b + ')';
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

});