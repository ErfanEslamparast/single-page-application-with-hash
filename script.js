window.addEventListener("hashchange",router)

function router(){
    switch (location.hash) {
        case "#home":
            update({title:"HOME",color:"red",href:"#home"})
            break;
        case "#search":
            update({title:"SEARCH",color:"green",href:"#search"})
            break;
        case "#likes":
            update({title:"LIKES",color:"yellow",href:"#likes"})
            break;
        default:
            update({title:"PROFILE",color:"pink",href:"#profile"})
            break;
    }
}

function update(data){
    document.querySelector("h1").innerText=data.title;
    document.querySelector("main").style.backgroundColor=data.color;
    document.querySelectorAll("a").forEach((element)=>{
        if(element.href.includes(data.href)) element.style.color="#000"
        else element.style.color="#444"
    }
)}