var should = require('should');

var Botkit = require('../lib/Botkit.js');

describe('AlexaBot', function() {
  it('should be an Object', function(done) {
    var alexa_bot = Botkit.alexabot({});
    alexa_bot.should.be.an.Object();
    done();
  });
});

