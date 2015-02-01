$(document).ready(function() {
	$('#crypt').click(function() {
		$('#solutions h4').text('Cryptography Solution');
		$('#s_content').html('<p>This is a simple ROT13 cipher. Using the decoder found <a href="http://rot13.com"><b>here</b></a>, the message can be deciphered.</p><p><b>Flag: {rot_in_13}</b></p>');
		$('#solutions').openModal();
		return false;
	});	
	$('#expl').click(function() {
		$('#solutions h4').text('Exploitation Solution');
		$('#s_content').html('<p>A basic web exploitation technique is to look at the <b>source code</b>. Viewing the source code around the word "<b>here</b>" shows the flag commented out.</p><p><b>Flag: {sup3r_s3cr3t_f1ag}</b></p>');
		$('#solutions').openModal();
		return false;
	});
	$('#fore').click(function() {
		$('#solutions h4').text('Exploitation Solution');
		$('#s_content').html('<p>Most file types have a <b>header</b> and a <b>trailer</b>. Image displaying software will only read to the trailer. Thus, it is possible to conceal information in the binary content of the file after the trailer. Open up the image in a hex editor such as <b>HxD</b> and look at the end to find the flag.</p><p><b>Flag: {searching_inside}</b></p>');
		$('#solutions').openModal();
		return false;
	});
	$('#prog').click(function() {
		$('#solutions h4').text('Programming Solution');
		$('#s_content').html('<p>After calling the function, view its source. Notice that the flag is represented as an integer array. The function iterates through each character of the input and compares its <b>JS Char Code</b> to the respective integer in the array. A one-liner solution is shown below.</p><p><pre>console.log(String.fromCharCode.apply(null, flag));</pre></p><p><b>Flag: {char_c0des_eh?}</b></p>');
		$('#solutions').openModal();
		return false;
	});
	$('#recon').click(function() {
		$('#solutions h4').text('Reconnaissance Solution');
		$('#s_content').html('<p>If you perform a google search for <b>RMS</b>, you will find <a href="https://stallman.org/"><b>Richard Stallman&apos;s Personal Site</b></a>. Entering Richard Stallman along with his email of rms@gnu.org into the contact page will give you the flag.</p><p><b>Flag: {i_is_StAlLmAn}</b></p>');
		$('#solutions').openModal();
		return false;
	});
});