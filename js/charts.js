var data = {
  // A labels array that can contain any sort of values
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [5, 2, null, 2, 5, 20, 50]
  ]
};

var options = {
	  lineSmooth: Chartist.Interpolation.cardinal({
    		fillHoles: true
	}),
	showArea: true
}

new Chartist.Line('.ct-chart', data, options);  