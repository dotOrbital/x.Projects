
/************* List Pizza Size ************/
function PieSize(){
    var size = document.getElementsByName('size')
    if(size[0].checked){
      document.getElementById('PizzaArea').innerText = "Personal Pizza ($6.00)";
    }
    else if(size[1].checked){
      document.getElementById('PizzaArea').innerText = "Medium Pizza ($10.00)";
    }
    else if(size[2].checked){
      document.getElementById('PizzaArea').innerText = "Large Pizza ($14.00)";
    }
    else if(size[3].checked){
      document.getElementById('PizzaArea').innerText = "Extra Large Pizza ($16.00)";
      console.log('test')
    }
};

/************** List Meat Toppings ********/

function add_sub(el)
{

  var cbs = document.getElementById('Meats').getElementsByTagName('input');
  var textareaValue = '';
  for (var i = 0, len = cbs.length; i<len; i++) {
    if ( cbs[i].type === 'checkbox' && cbs[i].checked) {
          textareaValue += cbs[i].value + ' ';
    }
  }

   document.getElementById('MeatArea').value = textareaValue;
}

/************* List Cheese Toppings  ******************/
function cheeseSize(){
    var cheese = document.getElementsByName('Cheese')
    if(cheese[0].checked){
      document.getElementById('CheeseArea').innerText = "Regular Cheese";
    }
    else if(cheese[1].checked){
      document.getElementById('CheeseArea').innerText = "No Cheese";
    }
    else if(cheese[2].checked){
      document.getElementById('CheeseArea').innerText = "Extra Cheese (+ $3.00)";
    }
};

/************* List Crust Style  ******************/
function crustStyle(){
    var crust = document.getElementsByName('Crust')
    if(crust[0].checked){
      document.getElementById('CrustArea').innerText = "Plain Crust";
    }
    else if(crust[1].checked){
      document.getElementById('CrustArea').innerText = "Garlic Butter Crust";
    }
    else if(crust[2].checked){
      document.getElementById('CrustArea').innerText = "Cheese Stuffed Crust (+ $3.00)";
    }
    else if(crust[3].checked){
      document.getElementById('CrustArea').innerText = "Spicy Crust";
    }
    else if(crust[4].checked){
      document.getElementById('CrustArea').innerText = "House Special Crust";
    }
};

/************* List Sauce Type  ******************/
function sauceType(){
    var sauce = document.getElementsByName('Sauce')
    if(sauce[0].checked){
      document.getElementById('SauceArea').innerText = "Marinara Sauce";
    }
    else if(sauce[1].checked){
      document.getElementById('SauceArea').innerText = "White Sauce";
    }
    else if(sauce[2].checked){
      document.getElementById('SauceArea').innerText = "Barbeque Sauce";
    }
    else if(sauce[3].checked){
      document.getElementById('SauceArea').innerText = "No Sauce";
    }
};


/******* List Veggie Toppings *******/

function add_sub2(el)
{

  var cbs = document.getElementById('Veggies').getElementsByTagName('input');
  var textareaValue = '';
  for (var i = 0, len = cbs.length; i<len; i++) {
    if ( cbs[i].type === 'checkbox' && cbs[i].checked) {
          textareaValue += cbs[i].value + ' ';
    }
  }

   document.getElementById('VeggieArea').value = textareaValue;
}

/**************** Complie Pizza ***************/
function buildPizza(){
  PieSize();
  cheeseSize();
  crustStyle();
  sauceType();
}


/*****Get Sizing Price *******/
function sizeTotal() {
  var pies = document.getElementsByClassName('Pies');
  var sizeTotal = 0
  for (var i = 0, length = pies.length; i < length; i++) {
      if (pies[i].checked) {
          // do whatever you want with the checked radio
          sizeTotal = pies[i].value;
		  //parseInt(sizeTotal);
		  return sizeTotal;
		  console.log(sizeTotal);

          break;
      }
  }
}


/********** Get Meat Price ***********/

function meatTtl() {
	var meatTotal = 0;
	var selectedMeat = [];
	var mArray = document.getElementsByClassName('Meats');
	for (var j = 0; j < mArray.length; j++) {
		if (mArray[j].checked) {
			selectedMeat.push(mArray[j].value);
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	}
  else {
		meatTotal = 0;
	}
	return meatTotal;
};

/*****Get Cheese Price *******/
function cheeseTotal() {
  var cheese = document.getElementsByClassName('cheese');
  var cheeseTotal = 0;
  var selectedCheese = [];

  for (var i = 0; i < cheese.length; i++) {
      if (cheese[i].checked) {
          // do whatever you want with the checked radio
          selectedCheese = (cheese[i].value);

	   if (selectedCheese === "Regular Cheese"){
		   cheeseTotal = 0;
		   return cheeseTotal;
	   }
     if (selectedCheese === "No Cheese"){
       cheeseTotal = 0;
       return cheeseTotal;
     }
     if (selectedCheese === "Extra Cheese"){
       cheeseTotal = 3;
       return cheeseTotal;
     }
	  }

  }
  console.log(cheeseTotal)
}

/*****Get Crust Price *******/
function crustTotal() {
  var crust = document.getElementsByClassName('crust');
  var crustTotal = 0;
  var selectedCrust = [];

  for (var i = 0; i < crust.length; i++) {
      if (crust[i].checked) {
          // do whatever you want with the checked radio
          selectedCrust = (crust[i].value);

	   if (selectedCrust === "Plain Crust"){
		   crustTotal = 0;
		   return crustTotal;
	   }
     if (selectedCrust === "Garlic Butter Crust"){
       crustTotal = 0;
       return crustTotal;
     }
     if (selectedCrust === "Cheese Stuffed Crust"){
       crustTotal = 3;
       return crustTotal;
     }
     if (selectedCrust === "Spicy Crust"){
       crustTotal = 0;
       return crustTotal;
     }
     if (selectedCrust === "House Special Crust"){
       crustTotal = 0;
       return crustTotal;
     }
	  }

  }
  console.log(crustTotal)
}


/**********Get Veggie Price *********/
function vegTotal() {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var vArray = document.getElementsByClassName('Veg');
	for (var k = 0; k < vArray.length; k++) {
		if (vArray[k].checked) {
			selectedVeggie.push(vArray[k].value);
		}
	}
	var vegCount = selectedVeggie.length;
	if (vegCount > 1) {
		veggieTotal = (vegCount - 1);
	}
  else {
		veggieTotal = 0;
	}
	return veggieTotal;
};

/*********** Total Equation *********/
function sumPrice() {
  var result = (+sizeTotal()) + (+meatTtl()) + (+cheeseTotal()) + (+crustTotal()) + (+vegTotal());
    document.getElementById('FullPrice').innerText = "$" + result + ".00"
}
