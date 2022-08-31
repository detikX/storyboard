$(document).ready(function () {
	
	/* Slide variable */
		var slideIndexBis = 1;
		var sliding = false;
	
	$('#fullpage').fullpage({
		anchors: [
			'page1',
			'page2',
			'page3',
			'page4'
		],
		sectionsColor: [
			'#00B0FF',
			'#00C853',
			'#FF1744',
			'#6200ea'
		]
	});
	
});