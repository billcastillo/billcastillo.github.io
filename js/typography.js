
// hljs.initHighlightingOnLoad();

$(document).ready(function() {

	// Change html brackets to unicode
	function escapeHTML(s) { 
	    return s.replace(/&/g, '&amp;')
	            .replace(/"/g, '&quot;')
	            .replace(/</g, '&lt;')
	            .replace(/>/g, '&gt;');
	}

	$('pre code').each(function(){
		$(this).html(escapeHTML($(this).html()));
	});

	hljs.configure({
	  tabReplace: '    '
	});


	var button_limit = 6;
	var button_ctr = 0;
	var button_text = ["Implement Container Paddings",
					   "Implement Visual Heirarchy",
					   "Implement Optimal Width",
					   "Add Font & Colours",
					   "Add Some Details",
					   "The End"];

	// Initialize displayed DOM
	$( '.sectionGuide' ).eq(0).toggleClass('visible');
	$( '.mainButton' ).text(button_text[button_ctr]);
	$( '.btn-next' ).prop('disabled', true);
	$('.mainButton').click(function(){
		// Disable button
		toggleProp(this);

		switch(button_ctr) {
			// ZERO: Implement margins
			case 0: {
				$('.container').toggleClass('zero');
				showNextButton(button_ctr);
				toggleProp('.showAllButton');
				// $('.first').toggleClass('visible');
				break;
			}

			case 1: {
				$('.container').toggleClass('first');
				$('body').toggleClass('first');
				$('pre code').each(function(i, block) {
					hljs.highlightBlock(block);
				});
				break;
			}

			case 2: {
				$('.container').toggleClass('second');
				break;
			}

			case 3: {
				$('.container').toggleClass('third');
				break;
			}

			case 4: {
				$('.container').toggleClass('fourth');
				break;
			}

			case 5: {
				location.reload();
				break;
			}
			default: {
				break;
			}
		} // end case

		$( '.btn-next' ).eq(button_ctr).prop('disabled', false);
		button_ctr = incrementButtonCounter(button_ctr);
	});

	$( '.showAllButton' ).click(function(){
		$( '.container' ).toggleClass('zero first second third fourth');
		$('pre code').each(function(i, block) {
			hljs.highlightBlock(block);
		});
		$( '.sectionGuide' ).show();
		$('.mainButton').hide();
		toggleProp(this);
	});

	// increment button_ctr as per guide
	function incrementButtonCounter(button_ctr) {
		button_ctr += 1;
		if( button_ctr <= button_limit ) {
			$('.mainButton').text(button_text[button_ctr]);
		}
		return button_ctr;
	}

	// Show next buttons per next guide
	function showNextButton(button_ctr){
		$( '.btn-next' ).eq(button_ctr).show();
	}

	// disable and enable button
	function toggleProp(thisButton){
		if( !$(thisButton).is(":disabled") )
			$(thisButton).prop('disabled', true);
		else
			$(thisButton).prop('disabled', false);
	}

	$('.btn-next').click(function(){
		// $(this).next().toggleClass('visible');
		$(this).next().show();
		$(this).prop('disabled', true);
		$(this).hide();
		showNextButton(button_ctr);
		// Enable .mainButton button
		toggleProp('.mainButton');
	});

	$('#pStyle').click(function(){
		// Add code style
		$('pre').each(function(){
			$(this).find('code').addClass('hljs');	
		});
	});

	// Refresh
	// location.reload();

}); // end document.ready
