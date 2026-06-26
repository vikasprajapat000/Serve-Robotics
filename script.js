const locomotiveScroll = new LocomotiveScroll();

let lastscroll = 0

window.addEventListener("scroll", () => {
    let currentscroll = window.pageYOffset
    if (currentscroll > 300) {
        if (currentscroll > lastscroll) {
            gsap.to("header", {
                y: -100
            })
        }
        else {
            gsap.to("header", {
                y: 0
            })
        }
    }
    else {
        gsap.to("header", {
            y: 0
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
    scrollTrigger: {
        trigger: ".about",
        start: "top top",
        end: "+=800",
        scrub: 2,
        pin: true,
    }
});

tl.to(".about svg", {
    scale: 0.6,
    filter: "blur(30px)",
    duration: 1
});

tl.from(".about h1 span", {
    opacity: 0,
    y: 20,
    stagger: 0.15,

}, "<50%");

let progress = gsap.timeline({
    scrollTrigger: {
        trigger: ".vision",
        start: "top top",
        end: "+=2000",
        scrub: 2,
        pin: true,

    }
})


progress
    .to(".progress-bar-line img", {
        top: "100%",
        duration: 4
    }, "harsh")

    .to(".progress-fill", {
        height: "100%",
        duration: 4
    }, "harsh")


    .to(".vtc1", {
        opacity: 0
    }, 0.4)


    .to(".vtc2", {
        y: -50,
        opacity: 1
    }, 0.4)

    .to(".image-scroll-div", {
        y: "-80vh",
        duration: 0.5,
        ease: "none"
    }, 0.4)

    .to(".vtc2", {

        opacity: 0
    }, 1.4)

    .to(".vtc3", {
        y: -50,
        opacity: 1
    }, 1.4)


    .to(".image-scroll-div", {
        y: "-160vh",
        duration: 0.5,
        ease: "none"
    }, 1.4)


    .to(".vtc3", {

        opacity: 0
    }, 2.4)

    .to(".vtc4", {
        y: -50,
        opacity: 1
    }, 2.4)


    .to(".image-scroll-div", {
        y: "-240vh",
        duration: 0.5,
        ease: "none"
    }, 2.4)


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const frameCount = 85;

const imageSeq = {
    frame: 0
};

const currentFrame = (index) =>
    `./images/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;

const images = [];

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}

images.forEach((img, i) => {
    img.onload = () => {
        console.log("Loaded:", i);


        if (i === 0) render();
    };

    img.onerror = () => {
        console.log("Error:", i, img.src);
    };
});

function render() {
    if (!images[imageSeq.frame]) return;

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(
        images[imageSeq.frame],
        0,
        0,
        canvas.width,
        canvas.height
    );
}
gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    onUpdate: render,

    scrollTrigger: {
        trigger: ".canvas-section",
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
        markers: true
    }
});