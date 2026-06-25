let lastscroll = 0 

window.addEventListener("scroll",()=>{
    let currentscroll = window.pageYOffset
     if(currentscroll > 300){
        if(currentscroll > lastscroll){
            gsap.to("header",{
                y:-100
            })
        }
        else{
            gsap.to("header",{
                y:0
            })
        }
     }
     else{
        gsap.to("header",{
            y:0
        })
     }
lastscroll = currentscroll
})

let h1 = document.querySelector(".about h1")
let clutter = ""

h1.textContent.split(" ").forEach(word => {
    clutter += ` <span>${word}</span> `
});
h1.innerHTML = clutter


let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".about",
        start:"top top",
        end:"+=800",
        scrub:2,
        pin:true,
        markers:true
    }
});

tl.to(".about svg",{
    scale:0.6,
    filter:"blur(30px)",
    duration:1
});

tl.from(".about h1 span",{
    opacity:0,
    y:20,
    stagger:0.15,

}, "<50%");

// let tl = gsap.timeline({
//     scrollTrigger:{
//         trigger:".about",
//         markers:true,
//         start:"top top",
//         end:"+=500",
//         pin:true,
//         scrub:2
//     }
// })
// tl.to(".about svg",{
//     scale:0.7,
//     filter:"blur(30px)"
// })
// tl.to(".about h1",{
//     opacity:1
// },"<50%")