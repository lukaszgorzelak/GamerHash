const arrow = document.querySelector('.mining_arrow' );
const scrollItem = document.querySelector(".gamerCoin");


const scrollInto = () => {
    arrow.addEventListener('click',function(){
       scrollItem.scrollIntoView({behavior: "smooth", block: "start",});
    });
}

export { scrollInto }