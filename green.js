var hasScrolled25 = false;
var hasScrolled50 = false;
var hasScrolled75 = false;
var hasScrolled90 = false;
	
document.addEventListener('scroll', function(){
 
    var h =  document.documentElement,
        b =  document.body,
        st =  'scrollTop',
        sh =  'scrollHeight';
 
    var percent = parseInt ( (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);

	if (percent >= 25 && !hasScrolled25)
	{
		ga('send', 'event', 'Scrolling', 'moreThan25%', window.location.href, { 'nonInteraction': 1 });
		hasScrolled25 = true;
	}
	else if (percent >= 50 && !hasScrolled50)
	{
		ga('send', 'event', 'Scrolling', 'moreThan50%', window.location.href, { 'nonInteraction': 1 });
		hasScrolled50 = true;
	}
	else if (percent >= 75 && !hasScrolled75)
	{
		ga('send', 'event', 'Scrolling', 'moreThan75%', window.location.href, { 'nonInteraction': 1 });
		hasScrolled75 = true;
	}
	else if (percent >= 90 && !hasScrolled90)
	{
		ga('send', 'event', 'Scrolling', 'moreThan90%', window.location.href, { 'nonInteraction': 1 });
		hasScrolled90 = true;
	}
	
});
 