app.filter('toCamel', function() {
  return function(input) {
    var output = input || '';
    var looping = true;
    while(looping) {
      var changes = 0;
      if (output.indexOf('-') !== -1 && output.charAt(output.indexOf('-') + 1) !== '') {
        changes++;
        output = output.split('');
        output[output.indexOf('-') + 1] = output[output.indexOf('-') + 1].toUpperCase();
        output.splice(output.indexOf('-'), 1);
        output = output.join('');
      }
      if (output.indexOf('_') !== -1 && output.charAt(output.indexOf('_') + 1) !== '') {
        changes++;
        output = output.split('');
        console.log(output[output.indexOf('_') + 1]);
        output[output.indexOf('_') + 1] = output[output.indexOf('_') + 1].toUpperCase();
        output.splice(output.indexOf('_'), 1);
        output = output.join('');
      }
      if (changes === 0) {
        looping = false;
      }
    }
    console.log(output);
    return output;
  };
});
