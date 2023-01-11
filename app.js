let quoteBtn = document.getElementById("quoteBtn")
let shareBtn = document.getElementById("shareBtn")
let facebookBtn = document.getElementById("facebookBtn")
let twitterBtn = document.getElementById("twitterBtn")
let whatsappBtn = document.getElementById("whatsappBtn")
let heartBtn = document.getElementById("heartBtn")
let quoteParagraph = document.getElementById("quoteP")
let authorHead = document.getElementById("author")


// quoteBtn.addEventListener('click',()=>{
//     getApi()
// })

function getApi(){
    let url = 'https://type.fit/api/quotes'
    fetch(`${url}`)
    .then(response=>response.json())
    .then(items=>{
        let quote =items[Math.floor(Math.random()*items.length)]
        console.log(quote)
        quoteParagraph.textContent = quote.text
        authorHead.textContent = quote.author
  
       console.log(items)
    })
}

let mins = 1
let time = mins * 60
function setTimer(){
    let Smin = Math.floor(time/60)
    let Ssec = time % 60

    time++
    if(Ssec ==10 || Ssec==20 || Ssec ==30 || Ssec ==40 || Ssec ==50 || Ssec==60 ){
        getApi()
    }
    


}
setInterval(setTimer, 1000)