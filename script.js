

// const btn = document.querySelector("#throttle");
const throttleFunction = (func, delay)=> {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay){
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets)=>{
    let div = document.createElement("div");
    div.classList.add("imgHover");
    div.style.left = dets.clientX+"px"
    div.style.top = dets.clientY+"px"

    let img = document.createElement("img");
    img.setAttribute("src", "https://images.unsplash.com/photo-1603700584787-4f331a469c7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsYXNzaWNhbHxlbnwwfDF8MHx8fDA%3D")
    div.appendChild(img);

    document.body.appendChild(div)

    gsap.to(img, {
        y: "0",
        ease: Power1,
        duration: 0.3
    })
    gsap.to(img, {
        y: "100%",
        ease: Power3,
        delay: 0.5,
    })

    setTimeout(() => {
        div.remove();
    }, 1000)
}, 200));