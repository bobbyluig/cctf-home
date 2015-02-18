$(document).ready(function() {
	$('form').submit(function() {
		form = $(this);
		$('button').toggleClass('disabled indigo darken-2 waves-effect waves-light').attr('disabled', true);
		$.ajax({
			type: 'POST',
			url: $(this).attr('action'),
			data: $(this).serialize(),
			success: function(data) {
				if (data.success == 1) {
					form[0].reset();
					form.find('i, label').removeClass('active');
					form.find('input').blur();
				}
				toast(data.message, data.message.length * 150);
				setTimeout(function() {
					$('button').toggleClass('disabled indigo darken-2 waves-effect waves-light').attr('disabled', false);
				}, 500);
			}
		});
		return false;
	});
});