/* Exercise 1: Wish list */
function addToList(item) {
	$('#items').append('<li>' + item + '<span class="label pending">Pending</span></li>')
	$('span').css('class', 'label pending')
}

$(document).on('click', '#add-to-list', function() {
	var item = $('#item');
	console.log(item.val())
	addToList(item.val())
	item.val(" ")
	item.focus()
	updateTotal()

	$('.pending').click(function() {
	var li_node = $(this).parent();
	li_node.append("<span class='label success'>Done!</span>")
	$(this).remove()
	li_node.addClass('completed');
	updateTotal()
	})

	
});

function updateTotal() {
	var pending = $('.pending').length
	var completed = $('.completed').length
	$('.total').text('Pending: ' + pending + ' Completed: ' + completed)
}