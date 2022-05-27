const URL = 'http://localhost:3000/data\n'
fetch(URL)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data[0])
        for (i = 0; i < data.length; i++)
        str1.innerHTML += `<div class="item">
<div class="items">${data[0].img}</div>
</div>`
    })
let str1 = document.querySelector('.str-1')
let str2 = document.querySelector('.str-2')


// $('.str-1, .str-2').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:10
//         },
//         1000:{
//             items:10
//         }
//     }
// })



