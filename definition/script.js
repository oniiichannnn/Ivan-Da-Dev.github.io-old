function check(){
    let lists = [
        {
            word: "incest",
            definition: "The love between 2 family members who share the same blood",
            type: "self-made genre"
        },
        {
            word: "harem",
            definition: "The love between one female and alot of males or one male and alot of females",
            type: "genre"
        },
        {
            word: "nudity",
            definition: "Anime where their scenes shows the nipples of females",
            type: "self-made genre"
        },
        {
            word: "creator's slice of life",
            definition: "Anime where it shows how creators (manga artists, lightnovel authors and people who work in the production of the anime) spend their day",
            type: "self-made genre"
        }
    ]

    let get = lists.find(w => w.word.toLowerCase() === decodeURL(document.URL).slice("https://oniichann.tk/definition?search=".length).toLowerCase())
    if(!get) return document.getElementsByClassName("error")[0].style.display = 'inherit'

    document.getElementsByClassName("display")[0].style.display = "inherit"
    document.getElementById("subject").innerHTML = get.word
    document.getElementById("definition").innerHTML = get.definition
    document.getElementById("type").innerHTML = get.type

    function decodeURL(url){
        return decodeURIComponent(url)
    }
}
