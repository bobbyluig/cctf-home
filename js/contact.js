$(document).ready(function() {
	$('form').submit(function() {
		form = $(this)
		$.ajax({
			type: 'POST',
			url: $(this).attr('action'),
			data: $(this).serialize(),
			success: function(data)
			{
				if(data.success == 1)
				{
					form[0].reset();
					form.find('i, label').removeClass('active');
					form.find('input').blur();
				}
				toast(data.message, data.message.length * 150);
			}
		});
		return false;
	});
});