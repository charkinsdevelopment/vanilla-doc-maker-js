function getElementBySelector(selector, debug){
  var matches = document.querySelectorAll(selector);

  if(debug){
    for (i=0; i<matches.length; i++){
      console.log(matches[i].innerHTML);
    }
  }
  
  return matches;
}

function createElement(elementType){
  var el = document.createElement(elementType);
  document.appendChild(el);
  return el;
}
