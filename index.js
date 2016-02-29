// Generated by LiveScript 1.4.0
var LS, Utils;
LS = require('livescript');
Utils = require('loader-utils');
module.exports = function(source){
  var lsRequest, jsRequest, query, result, config, e, err, ref$, ref1$, line, ref2$, first_column, first_line, offendingCharacter, map;
  if (typeof this.cacheable == 'function') {
    this.cacheable();
  }
  lsRequest = Utils.getRemainingRequest(this);
  jsRequest = Utils.getCurrentRequest(this);
  query = Utils.parseQuery(this.query);
  result = void 8;
  source = source.replace(/^[\/]{2}/g, '#');
  config = {
    filename: lsRequest,
    outputFilename: jsRequest,
    map: 'linked',
    bare: true,
    'const': false,
    header: false
  };
  import$(config, query);
  try {
    result = LS.compile(source, config);
  } catch (e$) {
    e = e$;
    err = '';
    if (!(((ref$ = e.location) != null ? ref$.first_column : void 8) != null || ((ref1$ = e.location) != null ? ref1$.first_line : void 8) != null)) {
      err += "Got an unexpected exception from the livescript compiler. The original exception was: " + e;
    } else {
      line = source.split('\n')[e.location.first_line];
      ref2$ = e.location, first_column = ref2$.first_column, first_line = ref2$.first_line;
      offendingCharacter = first_column < codeLine.length ? codeLine[first_column] : '';
      err += "" + e + "\nL: " + first_line + ": " + codeLine.substring(0) + " " + first_column + " " + offendingCharacter + " " + codeLine.substring(e.location.first_column + 1) + "\n" + new Array(first_column + 1);
    }
    throw new Error(err);
  }
  map = JSON.parse(result.map);
  return this.callback(null, result.code, map);
};
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}