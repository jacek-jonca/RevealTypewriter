/*****************************************************************
** Author: TBD
**
** A plugin adding Typed.js typerwriter text effect to Reveal.js presentations.
**
** Version: 0.1
** 
******************************************************************/
window.RevealTypewriter = window.RevealTypewriter || {
    id: 'RevealTypewriter',
    init: function(deck) {
        initRevealTypewriter(deck);
    }
};

const initRevealTypewriter = function(Reveal){
	var config = Reveal.getConfig().typewriter || {};

    var typed = new Typed('#typed', {
        stringsElement: '#typewriter-text', config
    });

	return this;
};
