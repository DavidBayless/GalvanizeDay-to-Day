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
        output[output.indexOf('_') + 1] = output[output.indexOf('_') + 1].toUpperCase();
        output.splice(output.indexOf('_'), 1);
        output = output.join('');
      }
      if (changes === 0) {
        looping = false;
      }
    }
    return output;
  };
});

app.filter('redaction', function() {
  return function(input, param) {
    var output = input || '';
    param = param || '';
    output = output.split(' ');
    param = param.split(' ');
    output.forEach(function(elem, index) {
      for (var i = 0; i < param.length; i++) {
        if (param[i] == elem) {
          output[index] = 'REDACTED';
        }
      }
    });


    return output.join(' ');
  };
});
