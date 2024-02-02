
var crsr=document.querySelector('#cursor')
var cr=document.querySelector('#cursor-blur')

document.addEventListener('mousemove',function(dets){
    crsr.style.left= dets.x+5+'px';
    crsr.style.top= dets.y+'px';

    cr.style.left= dets.x-200+'px';
    cr.style.top= dets.y-200+'px';
})





gsap.to('#nav',{
    backgroundColor:'gray',
    duration:3,
    height:70,

    scrollTrigger:{
        trigger:'#nav',
        scroller:'body',
        start:'top -10%',
        end:'top -11%',
        scrub:1
    }    
}) 





gsap.to('#main',{
    backgroundColor: 'rgba(0, 0, 0, 0.94)',

    scrollTrigger:{
        trigger:'#main',
        scroller:'body',
        start:'top -20%',
        end:'top -100%',
        scrub:2
    }

})


var h4all=document.querySelectorAll('#nav h4');
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale =2;
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor= "transparent";
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale =1;
        crsr.style.border = "0px solid rgba(95, 158, 160, 0.638)";
        crsr.style.backgroundColor= "rgba(95, 158, 160, 0.638)";
    })
})


gsap.from("#abou",{
    scale:0.5,
    opacity:0,
    duration:1,
    scrollTrigger:{
        scroller: "body",
        start:"top 60%",
        end:"top 55%",
        trigger: '#abou',
        scrub:1
    }
});


gsap.from("#cards-cont",{
    scale:0.6,
    opacity:0,  
    duration:2,
    scrollTrigger:{
        trigger:'#cards-cont',
        start:"top 70%",
        end:"top 65%",
        scrub:3,
        scroller:'body'
    }
});


gsap.from("#page3 #i1",{
    y:-90,
    x:-120,
    duration:1,
    scrollTrigger:{
        start:'top 50%',
        end:'top 45%',
        trigger:'#i1',
        scroller:'body',
        scrub:4
    }
});

gsap.from("#page3 #i2",{
    y:90,
    x:120,
    duration:1,
    scrollTrigger:{
        start:'top 50%',
        end:'top 45%',
        trigger:'#i1',
        scroller:'body',
        scrub:4
    }
});


gsap.from("#page4 h1",{
    y:130,
    duration:1,
    scrollTrigger:{
        trigger:"#page4 h1",
        start:"top 75%",
        end:"top 70%",
        scroller:"body",
        scrub:3,

    }
})