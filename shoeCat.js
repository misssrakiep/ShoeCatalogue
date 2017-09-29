//call data using jquery ajax call

//to retrieve the data from the api
// GET : /api/shoes
//show all shoes in the database

//comile all handlebars templates

var shoesText = document.querySelector('.shoeList').innerHTML;
var shoeTemplate = Handlebars.compile(shoesText);
$(document).ready(function() {

  console.log('Ready');
//get all shoes from the database
  $.ajax({
    type: "GET",
    url: "https://shoe-cat-api.herokuapp.com/api/shoes",
      dataType: "json",
    success: function(shoes) {
      console.log(shoes);
      document.querySelector('.data').innerHTML = shoeTemplate({shoes: shoes})
  }
});

var all = document.querySelector('.all');
all.addEventListener('click', function(){
  var data = document.querySelector('.data');
  $.ajax({
    type: "GET",
    url: "https://shoe-cat-api.herokuapp.com/api/shoes",
      dataType: "json",
    success: function(shoes) {
      console.log(shoes);
      document.querySelector('.data').innerHTML = shoeTemplate({shoes: shoes})
  }
});
	//show all shoes in database
});

	// GET : /api/shoes/brand/:brand
  var brandFilter = document.getElementById('brandFilter');

  brandFilter.addEventListener('keyup', function(shoes){
	$.ajax({
// var filter = document.querySelector('.filter');
		type: "GET",
		url: "https://shoe-cat-api.herokuapp.com/api/shoes/brand/" + brandFilter.value,
		dataType: "json",
		success: function (shoes) {
        document.querySelector('.data').innerHTML = shoeTemplate({shoes: shoes})
		 	}
		})
	})
// GET : /api/shoes/size/:size
var sizeFilter = document.getElementById('sizeFilter');

sizeFilter.addEventListener('keyup', function(shoes){
	$.ajax({
		type: "GET",
		url: "https://shoe-cat-api.herokuapp.com/api/shoes/size/" + sizeFilter.value,
		dataType: "json",
		success: function(shoes){
        document.querySelector('.data').innerHTML = shoeTemplate({shoes: shoes})
		}
	})
})
// GET : /api/shoes/brand/:brand/size/:size
var brandFilter = document.getElementById('brandFilter');
var sizeFilter = document.getElementById('sizeFilter');

sizeFilter.addEventListener('keyup', function(shoes){
  $.ajax({
    type: "GET",
    url: "https://shoe-cat-api.herokuapp.com/api/shoes/brand/" + brandFilter.value + "/size/" + sizeFilter.value,
    dataType: "json",
    success: function(shoes){
      if (shoes.brand == brandFilter.value && shoes.size == sizeFilter.value){
        console.log(shoes);
        document.querySelector('.data').innerHTML = shoeTemplate({shoes: shoes})
      }
      else {
        document.querySelector('.data').innerHTML = shoeTemplate({shoes: shoes})
        var initDocument = $.extend(true, {}, document);
      }
    }
  });
});

// POST  : /api/shoes/sold/:id


var buyShoe = document.getElementById("buyShoe");
var id = document.querySelector('.id');
buyShoe.addEventListener('click', function(shoes){
  console.log(id.value);
  $.ajax({
  	type: "POST",
  	url: "https://shoe-cat-api.herokuapp.com/api/shoes/sold/" + id.value,
  	dataType: "json",
    data: {
      id : id.value
    },
  	success: function(shoes){
  		console.log(arguments);
      document.querySelector('.data').innerHTML = shoeTemplate({shoes: shoes});
      var initDocument = $.extend(true, {}, document);
      
    	}
  })
})


//for sending data to the api



// POST : /api/shoes/
var addShoe = document.getElementById('addShoe');
var brand = document.querySelector('.brand');
var colour = document.querySelector('.colour');
var size = document.querySelector('.size');
var inStock = document.querySelector('.inStock');

var data = document.querySelector('.data');
var add = document.getElementById('add');
var addForm = document.querySelector('.addForm');
//
//
add.addEventListener('click', function(){
  var data = document.querySelector('.data');
  var addForm = document.querySelector('.addForm');
  //show the add form
  if (addForm.style.display === 'none' && data.style.display === 'inline-block') {
        addForm.style.display = 'block';
        data.style.display = 'none';
    } else {
        addForm.style.display = 'none';
        data.style.display = 'inline-block';
    }
});

addShoe.addEventListener('click', function(){
  $.ajax({
    type: "POST",
    url: "https://shoe-cat-api.herokuapp.com/api/shoes",
    dataType: "json",
    data: {
      brand : brand.value,
      colour : colour.value,
      size : size.value,
      inStock : inStock.value
    },
    success: function(data){
      console.log(data);
    }
  })
  })

} ) //END OF JS document
