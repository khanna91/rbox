;(function(global, $) {
    var rBox = function() {
        var timeout;
        var openHelp = function() {
            $('.help-button').removeClass('open');
            $('.detail-section').addClass('open');
        }

        var closeHelp = function() {
            $('.detail-section').removeClass('open');
            $('.help-button').addClass('open');
        }

        var submitForm = function(e) {
            e.preventDefault();
            $('#mail-section .alert').addClass('open');
            if(timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(function() {
                $('#mail-section .alert').removeClass('open');
            }, 15 * 1000);
        }
        return {
            openHelpDialog : openHelp,
            closeHelpDialog : closeHelp,
            sendMessage : submitForm
        }
    }
    global.rbox = rBox();
})(window, $);
