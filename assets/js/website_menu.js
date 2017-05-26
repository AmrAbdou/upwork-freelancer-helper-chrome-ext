$(document).ready(function() {

	var is_up_helper_menu_hidden = 0;

	if(is_up_helper_menu_hidden == 0) {


		$('header[role="banner"]').before('\
			<div id="up-helper-header-extra-menu">\
				<ul>\
					<li>\
						<i class="fa fa-paperclip" aria-hidden="true"></i> Reports\
					</li>\
					<li>\
						<i class="fa fa-file-text-o" aria-hidden="true"></i> My Proposals\
					</li>\
					<li>\
						<i class="fa fa-line-chart" aria-hidden="true"></i> My Stats\
					</li>\
					<li>\
						<i class="fa fa-clock-o" aria-hidden="true"></i> My Timesheet\
					</li>\
					<li>\
						Proposal #\
					</li>\
					<li class="up-helper-proposal-circle">\
						1\
					</li>\
					<li class="up-helper-proposal-circle">\
						2\
					</li>\
					<li class="up-helper-proposal-circle">\
						3\
					</li>\
					<li class="up-helper-proposal-circle">\
						4\
					</li>\
					<li class="up-helper-proposal-circle">\
						5\
					</li>\
				</ul>\
			</div>\
			');

	} else {

	}

});