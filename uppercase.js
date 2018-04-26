module.exports = function(params, callback) {
 // 3 secs timeout
 setTimeout(() => {
  const uppercase = params.text.toUpperCase();
  callback(null, uppercase);
 }, 3000);
};


