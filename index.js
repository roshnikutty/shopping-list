var state = {
  items: []
};
//console.log(state);

var addItem = function(state, item) {
  return state.items.push(item);
};
/*
var getExistingInfo = function(state) {
	 $(".shopping-item").each(function() {
  		state.items.push($(this).text());
	});
  return state.items;
};
*/

var renderList = function(state, element) {
  var itemsHTML = state.items.map(function(thing) {
    return "<li><span class='shopping-item'>" + thing + "</span>" + "<div class='shopping-item-controls'>" + "<button class='shopping-item-toggle'>" + "<span class='button-label'>check</span>" + "</button>" + "<button class='shopping-item-delete'>" + "<span class='button-label'>delete</span>" + "</button>" + "</div>" + "</li>";
  })
  element.html(itemsHTML);
};

//adding item to shopping list
$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();
  event.stopPropagation();
  addItem(state, $('#shopping-list-entry').val());
  renderList(state, $(".shopping-list"));
  console.log(state);
});

//deleting item from shopping list
$(".shopping-list").on("click", ".shopping-item-delete", function(event) {
  event.preventDefault();
  event.stopPropagation();
  $(event.target).closest("li").remove();
});

//crossing off item from shopping list
$(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
  event.preventDefault();
  event.stopPropagation();
  $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
  
  //$(this).closest(".shopping-item-controls").prev(".shopping-item").toggleClass("shopping-item__checked");
  
});

$(".shopping-list").empty();