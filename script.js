
function scrolldown() {
    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        let st = window.clientY || document.documentElement.scrollTop;

        if (st > lastScrollTop) {
            // Scrolling down
            document.getElementById("scrollElement").classList.add("hidden");
        } else {
            // Scrolling up
            document.getElementById("scrollElement").classList.remove("hidden");
        }

        lastScrollTop = st <= 0 ? 0 : st; // For mobile or negative scrolling
    });
}

function page1_2_gsap() {

    gsap.from('.nav img', {
        y: '-500',
        duration: 1

    })

    gsap.from(' .nav-1 h1', {
        y: '-300',
        opacity: 0,
        stagger: .1,
        duration: 1

    })

    gsap.from('.sec1 h1', {
        right: '100%',
        duration: 1,

    })

    gsap.from('.sec1 h3', {
        left: '-100%',
        duration: 1,

    })

    gsap.to('.sec1 h1', {
        x: '200',
        opacity: 0,
        // duration:,
        scrollTrigger: {
            Trigger: '.sec1',
            scroller: 'body',
            // markers:true,
            start: '50% 20%',
            end: '80% 80%',
            scrub: 2

        }

    })

    gsap.to('.sec1 h3', {
        x: 200,
        opacity: 0,
        duration: .7,
        scrollTrigger: {
            Trigger: '.sec1',
            scroller: 'body',
            // markers:true,
            start: '50% 20%',
            end: '80% 80%',
            scrub: 2

        }

    })

    gsap.to('.sec2a>.black', {
        left: '100%',
        duration: 4,
        scrollTrigger: {
            Trigger: 'sec2a',
            scroller: 'body',
            // markers: true,
            start: '70% 10%',


        }

    })

    gsap.from('.sec2b>h1, .sec2b>p, .sec2b>button', {
        x: '500',
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            Trigger: 'sec2a',
            scroller: 'body',
            // markers: true,
            start: '70% 10%',


        }

    })

}

function page3_gsap() {
    gsap.to('.sec3a .black1', {
        left: '100%',
        duration: 4,
        scrollTrigger: {
            Trigger: 'sec3a',
            scroller: 'body',
            // markers: true,
            start: '170% 10%',
        }

    })

    gsap.from('.elem h1, .elem p ', {
        x: '500',
        duration: .6,
        opacity: 0,
        stagger: .2,
        scrollTrigger: {
            Trigger: 'sec3a',
            scroller: 'body',
            // markers: true,
            start: '170% 10%',


        }
    })
}

function page4_gsap() {

    gsap.from('.elema-p4 h1, .elema-p4 p', {
        y: -300,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            Trigger: '.elem-page4',
            scroller: 'body',
            // markers:true,
            start: '250% 30%'
        }
    })


   
}

function textSplit(){
    var tl = gsap.timeline({scrollTrigger:{
        trigger:".elemb-p4",
        
        // markers:true,
        start:"50% 50%",
        end:"350% 50%",
        scrub:2,
        pin:true
    }});
    tl
    .to("#center",{
       height: "100vh",
    },'a')
    .to("#top",{
        top: "-50%",
     },'a')
     .to("#bottom",{
        bottom: "-50%",
     },'a')
    .to("#top-h1",{
        bottom: "10%"
     },'a')
     .to("#bottom-h1",{
        bottom: "-30%"
     },'a')
    .to("#center-h1",{
       top: "-30%"
    },'a')
    .to(".content",{
       delay: -0.2,
       marginTop: "0%"
    })
    .to(".content",{
        opacity: 0,
        duration:1
     })
    
    
}













scrolldown();
page1_2_gsap();
page3_gsap();
page4_gsap();
textSplit();