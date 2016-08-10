describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));
    it('should filter on favoriteFood correctly', function () {
       var mockedList = [{
           name: 'Sean',
           favoriteFood: 'Pizza'
       }, {
           name: 'Erin',
           favoriteFood: 'Pasta'
       }, {
           name: 'John',
           favoriteFood: 'Indian'
       }];

        var results = $filter('favoriteFood')(mockedList, 'Pizza');

        expect(results.length).toBe(1);
        expect(results[0].name).toBe('Sean');
    });
	
});
