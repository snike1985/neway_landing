( function(){

    $( function(){

        $.each( $( '.slider' ), function () {
            new Slider( $(this) );
        } );

        $.each( $( '.steps' ), function () {
            new Steps( $(this) );
        } );

    } );

    var Slider = function( obj ) {

        //private properties
        var _obj = obj,
            _contentSlider = _obj.find( '.swiper-container' ),
            _pagination = _obj.find( '.swiper-pagination' ),
            _swiper = null,
            _autosliding = _obj.data('autosliding');

        //private methods
        var _initSlider = function() {

                _swiper = new Swiper(_contentSlider, {
                    pagination: _pagination,
                    paginationClickable: true,
                    loop: true,
                    autoplay: _autosliding
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

    var Steps = function( obj ) {

        //private properties
        var _obj = obj,
            _next = _obj.find( '.steps__next' ),
            _form = _obj.find( 'form' ),
            _submitBtn = _obj.find( '.steps__submit' ),
            _items = _obj.find( '.steps__item' ),
            _activeIndex = 0,
            _path = _obj.data( 'action' ),
            _request = new XMLHttpRequest();

        //private methods
        var _toNext = function() {

                _activeIndex++;
                _items.eq(_activeIndex).addClass('active');

            },
            _onEvent = function() {

                _next.on({
                    'click': function (e) {
                        e.preventDefault();
                        _toNext();
                    }
                });

                _form.on({
                    'submit': function (e) {
                        var curForm = $(this);
                        e.preventDefault();
                        _ajaxRequest(curForm.serialize());
                    }
                });

            },
            _ajaxRequest = function(data) {

            console.log(data);
                _request.abort();
                _request = $.ajax({
                    url: _path,
                    data: { action: 'post', data: data },
                    dataType: 'html',
                    timeout: 20000,
                    type: "get",
                    success: function (msg) {
                        console.log(msg);
                        _toNext();
                    },
                    error: function ( XMLHttpRequest ) {
                        if( XMLHttpRequest.statusText != "abort" ) {
                            alert( 'Error!' );
                        }
                    }
                });

            },
            _init = function() {
                _onEvent();
            };

        //public properties

        //public methods

        _init();
    };

} )();