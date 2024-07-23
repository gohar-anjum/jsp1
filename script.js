var arr = [
    {
        name: "Gohar", Img : "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", Status : "Stranger"
    },
    {
        name: "Bisma", Img : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", Status : "Stranger"
    },
    {
        name: "Fakhir", Img : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", Status : "Stranger"
    }
]

function display() {
    var interceptor = "";
arr.forEach(function(val, index){
    interceptor = interceptor + 
    `<div id="card">
        <div id="img">
            <img src="${val.Img}">
        </div>
            <h3>${val.name}</h3>
            <h5 id="${val.Status}">${val.Status}</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque deserunt neque ratione.</p>
            <button class="${val.Status === "Stranger" ? "Blue" : "Red"}" id="${index}">${val.Status === "Stranger" ? "Add Friend" : "Remove Friend"}</button>
    </div>`
})
document.querySelector("#main").innerHTML = interceptor;
}
display();

document.querySelector("#main")
    .addEventListener("click", function(details){
        arr[details.target.id].Status= "Friends";
        display();
    })
