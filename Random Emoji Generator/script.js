const btnComp = document.getElementById("btn")
const emojiNameComp = document.getElementById("emoji-name")

const emoji = []

async function getEmoji() {
    let response =  await fetch("https://emoji-api.com/emojis?access_key=8581297c51d97ec2b04574dc7aaa5b8fa4ee97a2")

    data = await response.json()
    
    for (let index = 0; index < 1500; index++) {
        emoji.push({
            emojiName: data[index].character,
            emojiCode: data[index].unicodeName,
        })
        
    }
}
getEmoji()

btnComp.addEventListener("click", () =>{
    const randomNum = Math.floor(Math.random() * emoji.length)
    btnComp.innerText = emoji[randomNum].emojiName
    emojiNameComp.innerText = emoji[randomNum].emojiCode
})
