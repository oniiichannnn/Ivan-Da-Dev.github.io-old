const waifu_lists = [
    {
        name: "Yuuki Mikan",
        anime: "To Love Ru",
        img: "https://i.pinimg.com/originals/40/69/9e/40699eafbfbeec0589debf03179f8db4.jpg",
        rating: 10,
        bg: "https://images3.alphacoders.com/673/673962.jpg"
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

function load_animes(){
    waifu_lists.sort().forEach(waifu => {
        let card = document.createElement("div")
        let img = document.createElement("img")
        let h1 = document.createElement("h1")
        let h2 = document.createElement("h2")

        img.src = waifu.img
        h1.innerHTML = waifu.name.replace(/(\b\w)/gi, w => w.toUpperCase())
        h2.innerHTML = `<strong id='card_rating_bigger'>${waifu.rating}</strong> / 10`

        document.body.appendChild(card)
        document.body.appendChild(img)
        document.body.appendChild(h1)
        document.body.appendChild(h2)

        card.classList.add("card")
        card.id = waifu.name.replace(/ /g,'_')
        card.appendChild(h1)
        card.appendChild(h2)
        card.appendChild(img)

        img.classList.add("card_img")
        h1.classList.add("card_name")
        h2.classList.add("card_ratings")

        Array.from(document.getElementsByClassName("waifu_list")).find(e => e.id === waifu.name.substring(0,1).toUpperCase())
        .appendChild(card)
    })
}

document.addEventListener("click", function(element){
    if(element.path[1].id === 'view') return
    if(!element.path[1].id) return
    let waifu = waifu_lists.find(a => a.name === element.path[1].id.replace(/\_/g,' '))
    if(!waifu) return

    let getPage = document.getElementById("view")
    document.getElementById("view_name").innerHTML = toPropercase(waifu.name)

    document.getElementById("view_animes").innerHTML = toPropercase(waifu.anime)
    document.getElementById("view_rating").innerHTML = `<strong id='card_rating_bigger'>${waifu.rating}</strong> / 10`

    document.getElementById("view_img").src = waifu.img

    getPage.style.display = 'inherit'
    document.getElementsByClassName('body')[0].style.display = 'none'
    document.getElementsByClassName('head')[0].style.display = 'none'
    document.body.style.backgroundImage = `url(${waifu.bg})`
})

function toPropercase(string){
    return string.replace(/(\b\w)/gi, w => w.toUpperCase())
}

function back(){
    document.body.style.backgroundColor = '#28282B'
    document.getElementsByClassName('body')[0].style.display = 'inherit'
    document.getElementsByClassName('head')[0].style.display = 'inherit'

    let getPage = document.getElementById("view")
    getPage.style.display = 'none'
    document.body.style.backgroundImage = `none`
}