const URL = 'http://localhost:3000/data\n'
fetch(URL)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data[0])

        for (i = 0; i < data.length; i++) {
            item.innerHTML += `<div class="item ${data[i].club}">
<div class="items">
<a href="" class="img-foot"  data-fancybox="responsive"
  data-src="https://lipsum.app/id/5/800x600"
  data-srcset="https://lipsum.app/id/5/480x360 480w, https://lipsum.app/id/5/800x600 800w"
  data-sizes="(max-width: 600px) 480px, 800px">
<img src="${data[i].img}" alt="" class="item-img" data-fancybox="images" data-caption="My caption" >
</a>
</div>
<p class="item-desc">Имя: ${data[i].name}</p>
<p class="item-desc">Возраст: ${data[i].age}</p>
<p class="item-desc">Рост: ${data[i].height}</p>
<p class="item-desc">Клуб: ${data[i].club}</p>
<p class="item-desc">Гражданство: ${data[i].country}</p>
<a href="${data[i].goals}" class="item-link" data-fancybox="gallery" data-caption="GOALS OF GOATS">Лучшие голы</a>
</div>`

        }

    })
let item = document.querySelector('.str-1')
let str2 = document.querySelector('.str-2')
// let item = document.querySelector('.item')
let items = document.querySelector('.items')


// 


$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})




/*
let num
condition --- num > 2
if (condition) {
    do smth
} else {
    do another
}

condition ? do smth : do another

if (condition) {
    do smth
} else if(condition) {
    do smth
}

*/
