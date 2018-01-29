$(document).ready(function() {

var chocButton = document.getElementById("choc-click-button");
var choc = Cookies.get("chocChipClicks");
var chocCount;

if (choc != undefined) {
  chocCount = parseInt(choc)
  chocButton.innerHTML = "You've Had " + chocCount + " Chocolate Chip Cookies!!";
} else {
  chocCount = 0
}

chocButton.onclick = function() {
  chocCount += 1;
  chocButton.innerHTML = "You've Had " + chocCount + " Chocolate Chip Cookies!!";
  Cookies.set("chocChipClicks", chocCount);
};

var clearChoc = document.getElementById("deleteChocCookie");

clearChoc.onclick = function() {
  Cookies.expire("chocChipClicks");
  chocCount = 0;
  chocButton.innerHTML = "Click Me To Pick a Chocolate Chip Cookie!";
};


var mmButton = document.getElementById("mm-click-button");
var mm = Cookies.get("mmClicks");
var mmCount;

if (mm != undefined) {
  mmCount = parseInt(mm);
  mmButton.innerHTML = "You've Had " + mmCount + " M&M Cookies!!"
} else {
  mmCount = 0;
}

var clearMM = document.getElementById("deleteMmCookie");

clearMM.onclick = function () {
  Cookies.expire("mmClicks");
  mmCount = 0;
  mmButton.innerHTML = "Click Me to Pick an M&M Cookie!";
};

mmButton.onclick = function() {
  mmCount += 1;
  mmButton.innerHTML = "You've Had " + mmCount + " M&M Cookies!!";
  Cookies.set("mmClicks", mmCount);
};


var oatmealButton = document.getElementById("oatmeal-click-button");
var oatmeal = Cookies.get("oatmealClicks");
var oatmealCount;

if (oatmeal != undefined) {
  oatmealCount = parseInt(oatmeal);
  oatmealButton.innerHTML = "You've Had " + oatmealCount + " Oatmeal Cookies!!";
} else {
  oatmealCount = 0;
};

oatmealButton.onclick = function() {
  oatmealCount += 1;
  oatmealButton.innerHTML = "You've Had " + oatmealCount + " Oatmeal Cookies!!";
  Cookies.set("oatmealClicks", oatmealCount);
};

var clearOatmeal = document.getElementById("deleteOatmealCookie");

clearOatmeal.onclick = function () {
  Cookies.expire("oatmealClicks");
  oatmealCount = 0;
  oatmealButton.innerHTML = "Click Me to Pick an Oatmeal Cookie!";
};



});
