/**
 * Created by jong on 8/1/15.
 */

var ILabModal=(function(){
    var _data={};

    var cancel=function(){
        jQuery('#ilab-modal-container').remove();
    };

    return {
        cancel: cancel
    };
})();

jQuery(document).ready(function($){
    $(document).on('click', 'a.ilab-thickbox', function(e) {
        e.preventDefault();
        var currEl = $(this);
        var partial=currEl.hasClass('ilab-thickbox-partial');
        jQuery.get(currEl.attr('href'), function(data) {
            if (partial) {
                jQuery('#ilab-modal-window-area').empty().append(data);
            } else {
                jQuery('body').append(data);
                console.log(data);
            }
        });

        return false;
    });

    $(document).on('click', '.ilab-modal-editor-tab', function(e) {
        e.preventDefault();
        var currEl = $(this);
        jQuery.get(currEl.data('url'), function(data) {
            jQuery('#ilab-modal-window-area').empty().append(data);
        });

        return false;
    });
});