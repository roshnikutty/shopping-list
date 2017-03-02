var state = {
  items: []
};
//console.log(state);

var addItem = function(state, item) {
  return state.items.push(item);
};
//console.log(addItem(state));

var getExistingInfo = function(state) {
	 $(".shopping-item").each(function() {
  		state.items.push($(this).text());
	});
  return state.items;
};


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
  //getExistingInfo(state);                         // The existing form info should be pulled in only the first time aan item is added
  addItem(state, $('#shopping-list-entry').val());
  renderList(state, $(".shopping-list"));
  console.log(state);
});

//deleting item from shopping list
$(".shopping-item-delete").click(function(event) {
  event.preventDefault();
  event.stopPropagation();
  //getExistingInfo(state);
  $(event.target).closest("li").remove();
});

//crossing off item from shopping list
$(".shopping-item-toggle").click(function(event) {
  event.preventDefault();
  event.stopPropagation();
  getExistingInfo(state);
  $(this).closest(".shopping-item").toggleClass(".shopping-item__checked");
  //console.log($(this).find(".shopping-item").toggleClass(".shopping-item__checked"));
 //console.log($(event.target).find(".shopping-item").text());
 //console.log($(this).closest("span.shopping-item").text());
});