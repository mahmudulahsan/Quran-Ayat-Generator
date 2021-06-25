
var press = document.querySelector('#press');
var verseText = document.querySelector('#verseText');
var surahAndAyah = document.querySelector('#surahAndAyah');
var arabicVerseText = document.querySelector('#arabicVerseText');
var audio = document.querySelector('#myaudio');


// form.addEventListener('submit', (e)=>{
//     e.preventDefault();




// })

press.addEventListener('click', ()=>{
    var random = Math.floor(Math.random() * 6237);

    fetch('https://api.alquran.cloud/v1/ayah/'+random)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        // document.querySelector('#arabicVerseText').innerHTML = "⌛";

        arabicVerseText.innerHTML = `
            <q>${data.data.text}</q>
        `
    });

    // https://cdn.islamic.network/quran/audio/128/ar.alafasy/${random}.mp3

    fetch("https://api.alquran.cloud/ayah/"+random+"/en.asad")
    .then(res => res.json())
    .then(data => {

        surahAndAyah.innerHTML = `
            <b>[${data.data.surah.englishName} | ${data.data.numberInSurah}]</b>
            <a href="https://cdn.islamic.network/quran/audio/128/ar.alafasy/${random}.mp3" target="_blank">🔊</a>
        `

        verseText.innerHTML = `
            <q>${data.data.text}</q>
        `
    })


})





