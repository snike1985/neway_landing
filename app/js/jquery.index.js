( function(){

    $( function(){

        $.each( $( '.slider' ), function () {
            new Slider( $(this) );
        } );

    } );


    var Slider = function( obj ) {

        //private properties
        var _obj = obj,
            _contentSlider = _obj.find( '.swiper-container' ),
            _pagination = _obj.find( '.swiper-pagination' ),
            _swiper = null;

        //private methods
        var _initSlider = function() {

                _swiper = new Swiper(_contentSlider, {
                    pagination: _pagination,
                    paginationClickable: true
                });

            },
            _onEvent = function() {

                _obj.on('click', '.history__years-item', function() {
                    var activeElem = $(this);
                    _sliding(activeElem);
                });

            },
            _init = function() {
                _onEvent();
                _initSlider ();
            };

        //public properties

        //public methods

        _init();
    };

} )();