let lastscroll = 0;

window.addEventListener("scroll", () => {
    let currentscroll = window.pageYOffset;

    if (currentscroll > 300) {

        if (currentscroll > lastscroll) {
            gsap.to("header", { y: -100 });
        }
         else {
            gsap.to("header", { y: 0 });
        }

    } 
    else {
        gsap.to("header", { y: 0 });
    }

    lastscroll = currentscroll;
});

let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".About",
        start:'top top',
        end:"+=800",
        scrub:2,
        pin:true,
        markers:true
    }
})

tl.to(".About svg",{
    scale:"0.6",
    filter:"blur(30px)"
})