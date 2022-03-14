// ==========================MAP===========================
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

// ======================MENU=====================

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
    el.addEventListener("click", openTabs);
});


function openTabs(el) {
    var btnTarget = el.currentTarget;
    var valuetxt = btnTarget.dataset.valuetxt;

    tabContent.forEach(function(el) {
        el.classList.remove("active");
    });

    tabLinks.forEach(function(el) {
        el.classList.remove("active");
    });

    document.querySelector("#" + valuetxt).classList.add("active");

    btnTarget.classList.add("active");
}

function menufunc() {
    var toggeler = document.getElementById("menu-list").style.display
    if (toggeler == "none") document.getElementById("menu-list").style.display = "flex";
    if (toggeler == "flex") document.getElementById("menu-list").style.display = "none";

}
// ======================MENU=====================
// ======================SEARCH_MENU==============
function myFunction() {
    document.getElementById("search-box").style.display = "block";
}

function myFunction2() {
    document.getElementById("search-box").style.display = "none";
}
// ======================SEARCH_MENU==============
// ==========================DETAILS_TAB==================

var detailstabLinks = document.querySelectorAll(".detailstablinks");
var detailstabContent = document.querySelectorAll(".detailstabcontent");


detailstabLinks.forEach(function(el) {
    el.addEventListener("click", detailsopenTabs);
});


function detailsopenTabs(el) {
    var detailsbtnTarget = el.currentTarget;
    var detailsvaluetxt = detailsbtnTarget.dataset.valuetxt;

    detailstabContent.forEach(function(el) {
        el.classList.remove("detailsactive");
    });

    detailstabLinks.forEach(function(el) {
        el.classList.remove("detailsactive");
    });

    document.querySelector("#" + detailsvaluetxt).classList.add("detailsactive");

    detailsbtnTarget.classList.add("detailsactive");
}


// ==========================DETAILS_TAB==================
//===========================slider=========================
var slideIndex = 1;
showSliders(slideIndex);

//dot-btn => image controls
function currentSlide(n) {
    showSliders(slideIndex = n);
}

function showSliders(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-item");
    var dotsBtn = document.getElementsByClassName("dot-btn");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dotsBtn.length; i++) {
        dotsBtn[i].classList.remove("slide-active");
    }
    slides[slideIndex - 1].style.display = "block";
    dotsBtn[slideIndex - 1].classList.add("slide-active");

}


//===========================slider=========================
var slideIndexDetails = 1;
showSlidersDetails(slideIndexDetails);

//dot-btn => image controls
function currentSlideDetails(n) {
    showSlidersDetails(slideIndexDetails = n);
}

function showSlidersDetails(n) {
    var i;
    var slidesDetails = document.getElementsByClassName("carousel-item");
    var dotsBtnDetails = document.getElementsByClassName("dot-btndetails");
    if (n > slidesDetails.length) { slideIndexDetails= 1 }
    if (n < 1) { slideIndexDetails = slidesDetails.length }
    for (i = 0; i < slidesDetails.length; i++) {
        slidesDetails[i].style.display = "none";
    }
    for (i = 0; i < dotsBtnDetails.length; i++) {
        dotsBtnDetails[i].classList.remove("slide-activedetails");
    }
    slidesDetails[slideIndexDetails - 1].style.display = "block";
    dotsBtnDetails[slideIndexDetails - 1].classList.add("slide-activedetails");

}

//=========================================== slider product 1 ===========================
// var pagenumberDitails = 1;
// console.log(pagenumberDitails);
// slidechengerDitails(1);


// function plusslidesDitails(n) {
//     slidechengerDitails(pagenumberDitails += n)
// }

// function currentslide1(n) {
//     slidechengerDitails(pagenumberDitails = n);
// }

// function slidechengerDitails(n) {
//     var i;
//     var pageDitails = document.getElementsByClassName("containerdetails");
//     var numberDitails = document.getElementsByClassName("dot-btndetails");
//     if (n > pageDitails.length) { pagenumberDitails = 1 }
//     if (n < 1) { pagenumberDitails = pageDitails.length }
//     for (i = 0; i < pageDitails.length; i++) {
//         pageDitails[i].style.display = "none";
//     }
//     for (i = 0; i < number.length; i++) {
//         numberDitails[i].classList.remove("slide-activedetails");
//     }
//     pageDitails[pagenumberDitails - 1].style.display = "block";
//     numberDitails[pagenumberDitails - 1].classList.add("slide-activedetails");
//     console.log(pagenumberDitails);
// }
// ===========================================



const container = document.querySelector('.rating');
const items = container.querySelectorAll('rating-item');
container.onclick = e => {
    const elClass = e.target.classList;
    if (!elClass.contain('active')) {
        items.forEach(
            item => item.classList.remove('active')
        );
        console.log(e.target.getAttribute("data-rate"));
        elClass.add('active');
    }
};

! function($) {

    var Slider = function(element, options) {
        this.element = $(element);
        this.picker = $('<div class="slider">' +
                '<div class="slider-track">' +
                '<div class="slider-selection"></div>' +
                '<div class="slider-handle"></div>' +
                '<div class="slider-handle"></div>' +
                '</div>' +
                '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>' +
                '</div>')
            .insertBefore(this.element)
            .append(this.element);
        this.id = this.element.data('slider-id') || options.id;
        if (this.id) {
            this.picker[0].id = this.id;
        }

        if (typeof Modernizr !== 'undefined' && Modernizr.touch) {
            this.touchCapable = true;
        }

        var tooltip = this.element.data('slider-tooltip') || options.tooltip;

        this.tooltip = this.picker.find('.tooltip');
        this.tooltipInner = this.tooltip.find('div.tooltip-inner');

        this.orientation = this.element.data('slider-orientation') || options.orientation;
        switch (this.orientation) {
            case 'vertical':
                this.picker.addClass('slider-vertical');
                this.stylePos = 'top';
                this.mousePos = 'pageY';
                this.sizePos = 'offsetHeight';
                this.tooltip.addClass('right')[0].style.left = '100%';
                break;
            default:
                this.picker
                    .addClass('slider-horizontal')
                    .css('width', this.element.outerWidth());
                this.orientation = 'horizontal';
                this.stylePos = 'left';
                this.mousePos = 'pageX';
                this.sizePos = 'offsetWidth';
                this.tooltip.addClass('top')[0].style.top = -this.tooltip.outerHeight() - 14 + 'px';
                break;
        }

        this.min = this.element.data('slider-min') || options.min;
        this.max = this.element.data('slider-max') || options.max;
        this.step = this.element.data('slider-step') || options.step;
        this.value = this.element.data('slider-value') || options.value;
        if (this.value[1]) {
            this.range = true;
        }

        this.selection = this.element.data('slider-selection') || options.selection;
        this.selectionEl = this.picker.find('.slider-selection');
        if (this.selection === 'none') {
            this.selectionEl.addClass('hide');
        }
        this.selectionElStyle = this.selectionEl[0].style;


        this.handle1 = this.picker.find('.slider-handle:first');
        this.handle1Stype = this.handle1[0].style;
        this.handle2 = this.picker.find('.slider-handle:last');
        this.handle2Stype = this.handle2[0].style;

        var handle = this.element.data('slider-handle') || options.handle;
        switch (handle) {
            case 'round':
                this.handle1.addClass('round left-round');
                this.handle2.addClass('round');
                break
            case 'triangle':
                this.handle1.addClass('triangle');
                this.handle2.addClass('triangle');
                break
        }

        if (this.range) {
            this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
            this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]));
        } else {
            this.value = [Math.max(this.min, Math.min(this.max, this.value))];
            this.handle2.addClass('hide');
            if (this.selection == 'after') {
                this.value[1] = this.max;
            } else {
                this.value[1] = this.min;
            }
        }
        this.diff = this.max - this.min;
        this.percentage = [
            (this.value[0] - this.min) * 100 / this.diff,
            (this.value[1] - this.min) * 100 / this.diff,
            this.step * 100 / this.diff
        ];

        this.offset = this.picker.offset();
        this.size = this.picker[0][this.sizePos];

        this.formater = options.formater;

        this.layout();

        if (this.touchCapable) {
            // Touch: Bind touch events:
            this.picker.on({
                touchstart: $.proxy(this.mousedown, this)
            });
        } else {
            this.picker.on({
                mousedown: $.proxy(this.mousedown, this)
            });
        }

        if (tooltip === 'show') {
            this.picker.on({
                mouseenter: $.proxy(this.showTooltip, this),
                mouseleave: $.proxy(this.hideTooltip, this)
            });
        } else {
            this.tooltip.addClass('hide');
        }
    };

    Slider.prototype = {
        constructor: Slider,

        over: false,
        inDrag: false,

        showTooltip: function() {
            this.tooltip.addClass('in');
            //var left = Math.round(this.percent*this.width);
            //this.tooltip.css('left', left - this.tooltip.outerWidth()/2);
            this.over = true;
        },

        hideTooltip: function() {
            if (this.inDrag === false) {
                this.tooltip.removeClass('in');
            }
            this.over = false;
        },

        layout: function() {
            this.handle1Stype[this.stylePos] = this.percentage[0] + '%';
            this.handle2Stype[this.stylePos] = this.percentage[1] + '%';
            if (this.orientation == 'vertical') {
                this.selectionElStyle.top = Math.min(this.percentage[0], this.percentage[1]) + '%';
                this.selectionElStyle.height = Math.abs(this.percentage[0] - this.percentage[1]) + '%';
            } else {
                this.selectionElStyle.left = Math.min(this.percentage[0], this.percentage[1]) + '%';
                this.selectionElStyle.width = Math.abs(this.percentage[0] - this.percentage[1]) + '%';
            }
            if (this.range) {
                this.tooltipInner.text(
                    this.formater(this.value[0]) +
                    ' : ' +
                    this.formater(this.value[1])
                );
                this.tooltip[0].style[this.stylePos] = this.size * (this.percentage[0] + (this.percentage[1] - this.percentage[0]) / 2) / 100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + 'px';
            } else {
                this.tooltipInner.text(
                    this.formater(this.value[0])
                );
                this.tooltip[0].style[this.stylePos] = this.size * this.percentage[0] / 100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + 'px';
            }
        },

        mousedown: function(ev) {

            // Touch: Get the original event:
            if (this.touchCapable && ev.type === 'touchstart') {
                ev = ev.originalEvent;
            }

            this.offset = this.picker.offset();
            this.size = this.picker[0][this.sizePos];

            var percentage = this.getPercentage(ev);

            if (this.range) {
                var diff1 = Math.abs(this.percentage[0] - percentage);
                var diff2 = Math.abs(this.percentage[1] - percentage);
                this.dragged = (diff1 < diff2) ? 0 : 1;
            } else {
                this.dragged = 0;
            }

            this.percentage[this.dragged] = percentage;
            this.layout();

            if (this.touchCapable) {
                // Touch: Bind touch events:
                $(document).on({
                    touchmove: $.proxy(this.mousemove, this),
                    touchend: $.proxy(this.mouseup, this)
                });
            } else {
                $(document).on({
                    mousemove: $.proxy(this.mousemove, this),
                    mouseup: $.proxy(this.mouseup, this)
                });
            }

            this.inDrag = true;
            var val = this.calculateValue();
            this.element.trigger({
                type: 'slideStart',
                value: val
            }).trigger({
                type: 'slide',
                value: val
            });
            return false;
        },

        mousemove: function(ev) {

            // Touch: Get the original event:
            if (this.touchCapable && ev.type === 'touchmove') {
                ev = ev.originalEvent;
            }

            var percentage = this.getPercentage(ev);
            if (this.range) {
                if (this.dragged === 0 && this.percentage[1] < percentage) {
                    this.percentage[0] = this.percentage[1];
                    this.dragged = 1;
                } else if (this.dragged === 1 && this.percentage[0] > percentage) {
                    this.percentage[1] = this.percentage[0];
                    this.dragged = 0;
                }
            }
            this.percentage[this.dragged] = percentage;
            this.layout();
            var val = this.calculateValue();
            this.element
                .trigger({
                    type: 'slide',
                    value: val
                })
                .data('value', val)
                .prop('value', val);
            return false;
        },

        mouseup: function(ev) {
            if (this.touchCapable) {
                // Touch: Bind touch events:
                $(document).off({
                    touchmove: this.mousemove,
                    touchend: this.mouseup
                });
            } else {
                $(document).off({
                    mousemove: this.mousemove,
                    mouseup: this.mouseup
                });
            }

            this.inDrag = false;
            if (this.over == false) {
                this.hideTooltip();
            }
            this.element;
            var val = this.calculateValue();
            this.element
                .trigger({
                    type: 'slideStop',
                    value: val
                })
                .data('value', val)
                .prop('value', val);
            return false;
        },

        calculateValue: function() {
            var val;
            if (this.range) {
                val = [
                    (this.min + Math.round((this.diff * this.percentage[0] / 100) / this.step) * this.step),
                    (this.min + Math.round((this.diff * this.percentage[1] / 100) / this.step) * this.step)
                ];
                this.value = val;
            } else {
                val = (this.min + Math.round((this.diff * this.percentage[0] / 100) / this.step) * this.step);
                this.value = [val, this.value[1]];
            }
            return val;
        },

        getPercentage: function(ev) {
            if (this.touchCapable) {
                ev = ev.touches[0];
            }
            var percentage = (ev[this.mousePos] - this.offset[this.stylePos]) * 100 / this.size;
            percentage = Math.round(percentage / this.percentage[2]) * this.percentage[2];
            return Math.max(0, Math.min(100, percentage));
        },

        getValue: function() {
            if (this.range) {
                return this.value;
            }
            return this.value[0];
        },

        setValue: function(val) {
            this.value = val;

            if (this.range) {
                this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
                this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]));
            } else {
                this.value = [Math.max(this.min, Math.min(this.max, this.value))];
                this.handle2.addClass('hide');
                if (this.selection == 'after') {
                    this.value[1] = this.max;
                } else {
                    this.value[1] = this.min;
                }
            }
            this.diff = this.max - this.min;
            this.percentage = [
                (this.value[0] - this.min) * 100 / this.diff,
                (this.value[1] - this.min) * 100 / this.diff,
                this.step * 100 / this.diff
            ];
            this.layout();
        }
    };

    $.fn.slider = function(option, val) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('slider'),
                options = typeof option === 'object' && option;
            if (!data) {
                $this.data('slider', (data = new Slider(this, $.extend({}, $.fn.slider.defaults, options))));
            }
            if (typeof option == 'string') {
                data[option](val);
            }
        })
    };

    $.fn.slider.defaults = {
        min: 0,
        max: 10,
        step: 1,
        orientation: 'horizontal',
        value: 5,
        selection: 'before',
        tooltip: 'show',
        handle: 'round',
        formater: function(value) {
            return value;
        }
    };

    $.fn.slider.Constructor = Slider;

}(window.jQuery);


//========================================= filter ================================
function filterbox(n) {
    var filterboxEl = document.getElementsByClassName("filter-products-box");
    var blackback = document.getElementsByClassName("background");
    if (n == 1) {
        filterboxEl[0].classList.remove("filter-products-off");
        filterboxEl[0].classList.add("filter-products");
        blackback[0].style.display = "block";
    }
    if (n == 2) {
        filterboxEl[0].classList.remove("filter-products");
        filterboxEl[0].classList.add("filter-products-off");
        blackback[0].style.display = "none";
    }
}