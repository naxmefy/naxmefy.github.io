angular.module('naxmeify')
.directive('scrollTo', function ($location, $anchorScroll) {
  return function(scope, element, attrs) {

    element.bind('click', function(event) {
        event.stopPropagation();
        var off = scope.$on('$locationChangeStart', function(ev) {
            off();
            ev.preventDefault();
        });
        var location = attrs.scrollTo;
        $location.hash(location);
        $anchorScroll();
        setTimeout(function(){ 
          window.scrollTo(window.pageXOffset, window.pageYOffset - 100);
        },0);
    });

  };
});