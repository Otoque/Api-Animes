async function searchWaifu(){
const response = await fetch("https://api.waifu.im/images?included_tags=waifu")
const data = await response.json()
document.getElementById("waifuImg").src = data.items[0].url
document.getElementById("waifuName").innerHTML = data.items[0].tags[0].name
}