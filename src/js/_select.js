function formatState (state) {
    if (!state.id) {
      return state.text;
    }

    const stateArray = new Array(state.text).join(" - ").split(" ");
  
    var baseUrl = "images/coins";
    var $state = $(
      '<span class="coin__wrapper"><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + `
            <p class="coin__item coin-one">${stateArray[0]}</p> 
            <span class="coin__text coin__text-one"> 
              <p class="coin__item coin-two">${stateArray[1]}</p>
              <p class="coin__item coin-three">${stateArray[2]}</p> 
            </span>
            <span class="coin__text coin__text-two"> 
              <p class="coin__item coin-four">${stateArray[3]}</p>
              <p class="coin__item coin-five">${stateArray[4]}</p> 
            </span>` + '</span>'
    );
   
    return $state;
};

$(document).ready(function() {
  $('.js-example-basic-single').select2({
      templateResult: formatState,
      templateSelection: formatState,
      minimumResultsForSearch: -1,
  });
});