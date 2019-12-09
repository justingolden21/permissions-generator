const targets = 'owner group others'.split(' ');
const permissions = {
	'read'    : 'r',
	'write'	  : 'w',
	'execute' : 'x'
}

function makeAnswer() {
	let output = $('#target-select').val();
	for(tIdx in targets) {
		for(permission in permissions) {
			if($('#'+targets[tIdx]+'-'+permission+'-check').is(':checked') )
				output += permissions[permission];
			else
				output += '-';
		}
	}
	$('#output').val(output);
}