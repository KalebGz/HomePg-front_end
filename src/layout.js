// Create layout
document.addEventListener('DOMContentLoaded', () => {
    
    // Date at the top
    let today = new Date();
    var mon = today.toLocaleString('default', { month: 'long' })
    // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const h1 = ce("h1")
    h1.className = 'title'
    h1.innerText = `${mon} ${today.getDate()}, ${today.getFullYear()}`
    document.body.append(h1)

    // Top (weather + events)
    const top = ce('div')
    top.className = "top"
    const weatherDiv = ce('div')
    weatherDiv.className = 'left'
    const eventDiv = ce('div')
    eventDiv.className = 'right'
    top.append(weatherDiv, eventDiv)

    const middle = ce('div')
    middle.className = "middle"


    const bottom = ce('div')
    bottom.className = "bottom"

    document.body.append(top, middle, bottom)

    function ce(ele){
        return document.createElement(ele)
    }
})