//BUDGET CONTROLLER
var budgetController = (function(){

})();

//UI CONTROLLER
var UIController = (function(){

  var DOMstrings ={
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
  };

  //Set below value public, that other parts of code have access to this value.
  return {
    getInput: function(){
      return{
        type: document.querySelector(DOMstrings.inputType).value, //will be either in or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function(){
      return DOMstrings;
    }
  };
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

  var setupEventListeners = function(){
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){ 
      if (event.keyCode === 13 || event.which === 13){
        ctrlAddItem();
      }
    });
  }

  var ctrlAddItem = function(){
    // 1. Get the filed input data
    var input = UICtrl.getInput();

    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate  the budget
    // 5. Display the budget to the UI
  };

  //function allow us to start aplication
  return {
    init: function(){
      setupEventListeners();
    }
  };

})(budgetController, UIController);

//This line of code start aplication after page load
controller.init();
