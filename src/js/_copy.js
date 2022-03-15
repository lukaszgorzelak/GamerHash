const gamercoinInput = document.querySelector("#gamercoin");
const copy = document.querySelector("#pasteSVG");

const Copy = () => {
   
    gamercoinInput.select();
    navigator.clipboard.writeText(gamercoinInput.value);
}

copy.addEventListener('click',Copy);

export { Copy }