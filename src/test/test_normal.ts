export const test0 = `<!doctype html>
<html lang="en" class="mdl-js">
	<head>
		<title>McMaster - MyTimetable</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="robots" content="noindex" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
		<style>
			#logout {
				display: none;
			}
		</style>
	</head>
	<body onload="init()" class="login_body" id="bodyContent">
		<div class="reg_header">
			<div class="reg_header_inner_wrapper header-row">
				<div class="header_left header-column">
					<a href="https://brighterworld.mcmaster.ca/">
						<!-- <img style="height: 80px; margin: 10px;" src="cust/mcm/mcmaster-logo-blk.png" /> -->
						<img class="logo" src="test_files/mcm_logo_grey.svg" />
					</a>
				</div>
				<div class="header-column header-middle mcm-mytimetable">
					<span class="my">My</span><span class="timetable">Timetable</span>
				</div>
				<div class="header-column header-right"></div>
			</div>
		</div>

		<div class="bad_links_message" style="display: none">
			Oops, you must log into this application before loading that link.
		</div>

		<div class="form_wrapper">
			<h2
				class="visuallyhidden"
				aria-label="Please enter your user name and password and click the sign in button below to login."
			></h2>
			<div class="login_form" style="">
				<p class="pslogininfo">Sign out successful.</p>
				<div class="loginButton" style="display: none">
					<button
						class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent sign_in_button"
						onclick="custDoLogin();"
						style="display: inline-block"
						data-upgraded=",MaterialButton"
					>
						Sign In
					</button>
				</div>
				<form action="login.jsp" method="post" class="loginForm">
					<div class="sdl_input">
						<label for="word1" aria-label="Please enter your User ID ">User ID</label>
						<input id="word1" name="word1" type="text" size="15" />
					</div>
					<br />
					<div class="sdl_input">
						<label for="word2" aria-label="Please enter your password">Password</label>
						<input
							id="word2"
							name="word2"
							type="password"
							size="15"
							autocomplete="off"
						/>
					</div>

					<button
						name="login"
						type="submit"
						class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent psloginbutton"
						data-upgraded=",MaterialButton"
					>
						Sign In
					</button>
				</form>
				<form action="criteria.jsp">
					<button
						type="submit"
						name="guest"
						value="1"
						class="mdl-button mdl-js-button psguestbutton"
						data-upgraded=",MaterialButton"
					>
						Use as Guest
					</button>
				</form>
			</div>
		</div>

		<div class="contentArea_bottom noprint"></div>
		<div class="mcm-footer">
			<div class="mcm-footer-banner"></div>
			<div class="mcm-footer-social">
				<div class="mcm-footer-address">
					<span>1280 Main Street West.</span>
					<span>Hamilton, Ontario L8S 4L8.</span>
					<span class="mcm-footer-phone">(905) 525-9140</span>
				</div>
				<div class="mcm-footer-copyright">© McMaster University</div>
			</div>
		</div>

		<protonpass-root-1e44
			data-protonpass-role="root"
			data-protonpass-theme="dark"
		></protonpass-root-1e44>
	</body>
</html>
`;
