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

let imgUrls = [
    "https://images.unsplash.com/photo-1582785514150-015b4c70a84a?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1745484880060-49d13176e483?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1739649913570-cb8c1b2f6f57?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1722109178543-0c967dc93d3b?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1749410347863-3aa1b4dbd027?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1559743520-7c95478709fc?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1566982160502-5dc607d396de?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1649328087396-13bb77cb279a?w=900&auto=format&fit=crop&q=60"
];

document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets)=>{
    let div = document.createElement("div");
    div.classList.add("imgHover");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    let img = document.createElement("img");
    let randomImg = Math.floor(Math.random() * imgUrls.length);
    img.src = imgUrls[randomImg];

    div.appendChild(img);
    document.body.appendChild(div);

    gsap.to(img, {
        y: "0",
        ease: Power1,
        duration: 0.3
    });

    gsap.to(img, {
        y: "100%",
        ease: Power3,
        delay: 0.5
    });

    setTimeout(() => {
        div.remove();
    }, 1000);
}, 200));
