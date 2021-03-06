history.scrollRestoration = 'manual';

const waifu_lists = [
    {
        name: "Yuuki Mikan",
        anime: "To Love Ru",
        img: "yuuki_mikan.jpg",
        bg: "yuuki_mikan_bg.jpg"
    },
    {
        name: "Satori Tamaba",
        anime: "Busou Shoujo Machiavellianism",
        img: "satori_img.gif",
        bg: "satori_bg.jpg"
    },
    {
        name: "Kei Shirogane",
        anime: "love is war",
        img: "kei_img.jpg",
        bg: "kei_bg.jpg"
    },
    {
        name: "Kanzaki H. Aria",
        anime: "hidan no aria",
        img: "aria_img.jpeg",
        bg: "aria_bg.jpg"
    },
    {
        name: "Kai Nayuta",
        anime: "a sister's all you need",
        img: "kani_img.jpg",
        bg: "kani_bg.png"
    },
    {
        name: "kurumi tokisaki",
        anime: "date a live",
        img: "kurumi_img.jpg",
        bg: "kurumi_bg.jpg"
    },
    {
        name: "sagiri izumi",
        anime: "eromanga sensei",
        img: "sagiri_img.jpg",
        bg: "sagiri_bg.jpg"
    },
    {
        name: "Satanichia Kurumizawa McDowell",
        anime: "gabriel dropout",
        img: "satania_img.png",
        bg: "satania_bg.png"
    },
    {
        name: "Raphiel Ainsworth Shiraha",
        anime: "gabriel dropout",
        img: "raphi_img.png",
        bg: "raphi_bg.png"
    },
    {
        name: "Gabriel White Tenma",
        anime: "gabriel dropout",
        img: "gab_img.png",
        bg: "gab_bg.png"
    }
]

const emojis = [
    {
        name: 'hehe',
        img: 'https://cdn.discordapp.com/emojis/792645345216823306.png?v=1'
    },
    {
        name: "nani",
        img: "https://cdn.discordapp.com/emojis/792658889602367538.png?v=1"
    },
    {
        name: "ah",
        img: "https://cdn.discordapp.com/emojis/753937617258545202.png?v=1"
    },
    {
        name: "ded",
        img: "https://cdn.discordapp.com/emojis/806987341889273866.gif?v=1"
    },
    {
        name: "woa",
        img: "https://cdn.discordapp.com/emojis/798246206706417704.png?v=1"
    },
    {
        name: "kaosHehe",
        img: "https://cdn.discordapp.com/emojis/444565473665875990.png?v=1"
    }
]

const linkReg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g

function load_waifus(){    
    waifu_lists.sort().forEach(waifu => {
        let card = document.createElement("div")
        let h1 = document.createElement("h1")
        let img = document.createElement("img")
        // let bg = document.createElement("img")
        // let layer = document.createElement("div")
        // let h2 = document.createElement("h2")

        img.src = `./images/${waifu.img}`
        // bg.src = `./images/${waifu.bg}`
        h1.innerHTML = waifu.name.replace(/(\b\w)/gi, w => w.toUpperCase())
        // h2.innerHTML = `${waifu.nsfw === true ? "NSFW" : ""}`

        document.body.appendChild(card)
        document.body.appendChild(h1)
        document.body.appendChild(img)
        // document.body.appendChild(bg)
        // document.body.appendChild(layer)
        // document.body.appendChild(h2)

        // background: url("https://oniichann.tk/waifus/images/bg.jpg");
        card.style.backgroundImage = `url(./images/${waifu.bg})`

        card.classList.add("card")
        card.id = waifu.name.replace(/ /g,'_')
        card.appendChild(h1)
        // card.appendChild(h2)
        card.appendChild(img)
        // card.appendChild(bg)
        // card.appendChild(layer)

        img.classList.add("card_img")
        h1.classList.add("card_name")
        // bg.classList.add("card_bg")
        // layer.classList.add("card_bg_layer")
        // h2.classList.add("card_nsfw")

        
        document.getElementsByClassName("body")[0]
        .appendChild(card)
    })

    if(window.innerWidth < 1031){
        if(document.getElementById("Yuuki_Mikan").style.backgroundImage === 'none') return
        waifu_lists.forEach(waifu => {
            document.getElementById(waifu.name.replace(/ /g,'_')).style.backgroundImage = 'none'
        })

        window.scrollTo(0,0)
    } else {
        if(document.getElementById("Yuuki_Mikan").style.backgroundImage !== 'none') return
        waifu_lists.forEach(waifu => {
        let id = waifu.name.replace(/ /g,'_')
        document.getElementById(id).style.backgroundImage = `url(./images/${waifu.bg})`
        })

        window.scrollTo(0,0)
    }
}

// document.addEventListener("click", function(element){
//     if(element.path[1].id === 'view_animes'){
//         window.location.replace(`https://oniichann.tk/reviews?anime=${element.path[1].innerHTML.split('<strong id="anime_name">')[1].split('</strong>')[0].trim().toLowerCase()}`)
//     }

//     if(element.path[1].id === 'view') return
//     if(!element.path[1].id && !element.path[0].id) return
//     let name = element.path[1].id.replace(/\_/g,' ') || element.path[0].id.replace(/\_/g,' ')
//     let waifu = waifu_lists.find(a => a.name === name)
//     if(!waifu) return

//     let getPage = document.getElementById("view")
//     document.getElementById("view_name").innerHTML = toPropercase(waifu.name)

//     document.getElementById("view_animes").innerHTML = `Anime: <strong id='anime_name'>${toPropercase(waifu.anime)}</strong>`
//     document.getElementById("view_age").innerHTML = `Age: <strong id='age'>${waifu.age}</strong>`

//     document.getElementById("view_img").src = `./images/${waifu.img}`
//     document.getElementById("view_birthday").innerHTML = `Birthday: <strong id='birthday'>${waifu.bday}</strong>`

//     getPage.style.display = 'inherit'
//     document.getElementsByClassName('body')[0].style.display = 'none'
//     document.getElementsByClassName('head')[0].style.display = 'none'
//     // document.body.style.backgroundImage = `url(${waifu.bg})`
//     document.getElementById('comments_script').text =
//     `
//      var disqus_config = function () {
//      this.page.url = "https://oniichann.tk/waifus";  // Replace PAGE_URL with your page's canonical URL variable
//      this.page.identifier = ${waifu.name.replace(/ /g,'_')}; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
//      };
//      (function() { // DON'T EDIT BELOW THIS LINE
//      var d = document, s = d.createElement('script');
//      s.src = 'https://oniichann-tk.disqus.com/embed.js';
//      s.setAttribute('data-timestamp', +new Date());
//      (d.head || d.body).appendChild(s);
//      })();
//     `
//     document.getElementsByClassName("nav_bar")[0].style.display = 'none'
//     window.scrollTo(0,0)
// })

function toPropercase(string){
    return string.replace(/(\b\w)/gi, w => w.toUpperCase())
}

function back(){
    // document.body.style.backgroundColor = '#28282B'
    document.getElementsByClassName('body')[0].style.display = 'inherit'
    document.getElementsByClassName('head')[0].style.display = 'inherit'

    let getPage = document.getElementById("view")
    getPage.style.display = 'none'
    document.getElementsByClassName("nav_bar")[0].style.display = 'inherit'
    // document.body.style.backgroundImage = `none`
}

window.addEventListener("resize", function(){
    if(window.innerWidth < 1031){
        if(document.getElementById("Yuuki_Mikan").style.backgroundImage === 'none') return
        waifu_lists.forEach(waifu => {
            let id = waifu.name.replace(/ /g,'_')
            document.getElementById(id).style.backgroundImage = `none`
        })
    } else {
        if(document.getElementById("Yuuki_Mikan").style.backgroundImage !== 'none') return
        waifu_lists.forEach(waifu => {
        let id = waifu.name.replace(/ /g,'_')
        document.getElementById(id).style.backgroundImage = `url(./images/${waifu.bg})`
        })
    }
})

function go_back(){
    window.location.replace(`https://oniichann.tk/`)
}

function proceed(){
    document.getElementById("nsfw_layer").style.display = 'none'
    document.body.style.overflow = 'visible'
}