$(function(){
    var i= 0,
        item= null,
        doc= $(document),
        parallax= $('.parallax');

    for(i=0; i<parallax.length; i++) {
        item= $(parallax[i]);
        item.css(
            'background-image',
            'url("' + item.attr('data-img') + '")'
        );
    }
    
    doc.on('scroll', function(e) {
        parallax.css(
            'background-position',
            '0 ' + -doc.scrollTop()/5 + 'px'
        );
    });
});