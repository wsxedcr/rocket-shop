var assert = require('assert');

Meteor.methods({
    'test.resetDatabase': function resetDatabase(something){ return "hi"}
});


describe('String#split', function(){
    it('should return an array', function(){
        assert(Array.isArray('a,b,c'.split(',')));

        assert(true);
    });

    it('Local functions should be available', function(){
        var b = Meteor.call('test.resetDatabase', 'aa');
        assert (b == "hi")
    });

    it('Products should be available', function(){
        var b = Products.find()
        assert (b.count() > 0)
    });
})

