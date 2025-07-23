export const test2 = `<!doctype html>
<!-- Copyright 2011-2023. This service is called Visual Schedule Builder, Register, or MC Navigate
It is offered by VSB Software Inc, Digarc, and now Modern Campus. Visit: www.vsbuilder.com or www.moderncampus.com
Original authors: Sean Weeks, Alan Weeks
 -->
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" class="mdl-js">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>McMaster - MyTimetable</title>
	</head>
	<body onload="init()" class="" id="bodyNode">
		<p id="alertJAWS" role="alert" style="display: none" aria-atomic="true"></p>

		<div class="eeLoadingAnimation" style="display: none">
			<div
				class="mdl-spinner mdl-js-spinner is-active is-upgraded"
				data-upgraded=",MaterialSpinner"
			>
				<div class="mdl-spinner__layer mdl-spinner__layer-1">
					<div class="mdl-spinner__circle-clipper mdl-spinner__left">
						<div class="mdl-spinner__circle"></div>
					</div>
					<div class="mdl-spinner__gap-patch">
						<div class="mdl-spinner__circle"></div>
					</div>
					<div class="mdl-spinner__circle-clipper mdl-spinner__right">
						<div class="mdl-spinner__circle"></div>
					</div>
				</div>
				<div class="mdl-spinner__layer mdl-spinner__layer-2">
					<div class="mdl-spinner__circle-clipper mdl-spinner__left">
						<div class="mdl-spinner__circle"></div>
					</div>
					<div class="mdl-spinner__gap-patch">
						<div class="mdl-spinner__circle"></div>
					</div>
					<div class="mdl-spinner__circle-clipper mdl-spinner__right">
						<div class="mdl-spinner__circle"></div>
					</div>
				</div>
				<div class="mdl-spinner__layer mdl-spinner__layer-3">
					<div class="mdl-spinner__circle-clipper mdl-spinner__left">
						<div class="mdl-spinner__circle"></div>
					</div>
					<div class="mdl-spinner__gap-patch">
						<div class="mdl-spinner__circle"></div>
					</div>
					<div class="mdl-spinner__circle-clipper mdl-spinner__right">
						<div class="mdl-spinner__circle"></div>
					</div>
				</div>
				<div class="mdl-spinner__layer mdl-spinner__layer-4">
					<div class="mdl-spinner__circle-clipper mdl-spinner__left">
						<div class="mdl-spinner__circle"></div>
					</div>
					<div class="mdl-spinner__gap-patch">
						<div class="mdl-spinner__circle"></div>
					</div>
					<div class="mdl-spinner__circle-clipper mdl-spinner__right">
						<div class="mdl-spinner__circle"></div>
					</div>
				</div>
			</div>
			<!-- LOADING <div class="mdl-spinner mdl-js-spinner is-active"></div> -->
		</div>

		<div id="bodyContent" class="eeLoading eeLoadingDone">
			<div class="custom_header noprint" role="heading" aria-level="1">
				<h3 style="visibility: hidden; position: absolute; transition: none 0s ease 0s">
					Register - Student Scheduling by VSB
				</h3>

				<div class="reg_header">
					<div class="reg_header_inner_wrapper header-row">
						<div class="header_left header-column">
							<a href="https://brighterworld.mcmaster.ca/">
								<!-- <img style="height: 80px; margin: 10px;" src="cust/mcm/mcmaster-logo-blk.png" /> -->
								<img
									class="logo"
									src="test_loggedin_semesterselected_files/mcm_logo_grey.svg"
								/>
							</a>
						</div>
						<div class="header-column header-middle mcm-mytimetable">
							<span class="my">My</span><span class="timetable">Timetable</span>
						</div>
						<div class="header-column header-right"></div>
					</div>
				</div>
			</div>
			<div class="mainframe">
				<h1
					class="visuallyhidden"
					aria-label="Welcome to the schedule builder, the industry leading solution for generating and optimizing student class schedules. Please navigate the page headers to access the application content."
				></h1>
				<div class="header_invader header_invader_position noprint">
					<div class="autho_table">
						<span class="autho_logo_prot_cell header_invader_logo_width"> &nbsp; </span>
						<h2 class="visuallyhidden" aria-label="Header region."></h2>
						<span class="autho_text_cell">
							<span class="autho_text header_invader_text_top"> Ameya Gupta</span>
							<span class="autho_text header_invader_text_top"> </span>
							<span
								class="autho_text header_invader_text_top active-term-label"
								onclick="MENU.menuFunction()"
								style="cursor: pointer"
								title="Change term"
								>2025 Fall</span
							>
						</span>
						<span class="autho_button_cell">
							<button
								class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent sign_in_button"
								onclick="vsbTimer.doLogin();"
								data-upgraded=",MaterialButton"
								style="display: none"
							>
								Sign In
							</button>
							<input
								class="big_button sign_out_button"
								type="button"
								value="Sign Out"
								onclick="vsbTimer.doLogout('link');"
							/>
							<button
								class="nobuttonstyle main_menu_button"
								title="View menu"
								aria-label="Toggle Main Hamburger Menu"
							>
								<i class="fa fa-bars"></i>
							</button>
						</span>
					</div>

					<div class="main_menu" style="display: none">
						<a
							href="javascript:void(0)"
							class="menu_item select_term"
							onclick='UU.caseChangeTermIfOkay(3202520);$(".main_menu").hide();'
							>2025 Spring/Summer<i
								class="fa fa-check"
								id="menu-term3202520-check"
								style="display: none"
							></i> </a
						><a
							href="javascript:void(0)"
							class="menu_item select_term"
							onclick='UU.caseChangeTermIfOkay(3202530);$(".main_menu").hide();'
							>2025 Fall<i
								class="fa fa-check"
								id="menu-term3202530-check"
								style=""
							></i> </a
						><a
							href="javascript:void(0)"
							class="menu_item select_term"
							onclick='UU.caseChangeTermIfOkay(3202610);$(".main_menu").hide();'
							>2026 Winter<i
								class="fa fa-check"
								id="menu-term3202610-check"
								style="display: none"
							></i>
						</a>

						<div class="menu-item-separator"></div>
						<a
							href="https://mytimetable.mcmaster.ca/analytics/"
							class="mi_analytics analytics_link"
							style="display: none"
							><i class="fa fa-lg fa-fw fa-chart-bar" style="padding-right: 10px"></i
							>Analytics</a
						>
						<a
							href="https://mytimetable.mcmaster.ca/analytics/#ajax/enrollment-rules.jsp"
							class="mi_scheduler analytics_link"
							style="display: none"
							><i class="fa fa-lg fa-fw fa-wrench" style="padding-right: 10px"></i
							>Schedule Controls</a
						>
						<a
							href="https://mytimetable.mcmaster.ca/analytics/#ajax/settings.jsp?sets=roles"
							class="mi_settings analytics_link"
							style="display: none"
							><i class="fa fa-lg fa-fw fa-cog" style="padding-right: 10px"></i
							>Settings</a
						>
						<div class="menu-item-separator"></div>
						<a href="https://mytimetable.mcmaster.ca/criteria.jsp?src=clear"
							>Start Over</a
						>
						<div class="menu-item-separator"></div>
						<a href="javascript:void(0)" class="mi_behalf" style="display: none"
							>Advise a Student...</a
						>
						<div
							class="menu_item mi_message_box"
							style="display: none; padding-bottom: 0px"
						></div>
						<div class="menu_item mi_behalf_start" style="display: none">
							<input
								type="text"
								style="width: 100%"
								class="behalf_userid"
								placeholder="Student ID"
								title="Student ID"
							/>

							<button
								class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent behalf_start_button"
								data-upgraded=",MaterialButton,MaterialRipple"
							>
								Start Advising<span
									class="loadingAdvising"
									style="visibility: hidden"
								>
									<i class="fa fa-spinner fa-spin"></i
								></span>
								<span class="mdl-button__ripple-container"
									><span class="mdl-ripple"></span
								></span>
							</button>
							<button
								class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent behalf_cancel_button"
								data-upgraded=",MaterialButton,MaterialRipple"
							>
								Cancel<span class="mdl-button__ripple-container"
									><span class="mdl-ripple"></span
								></span>
							</button>
						</div>
						<div class="menu_item mi_behalf_change" style="display: none">
							<div style="margin: 0 0 10px 0">
								Advising for: <span class="behalf_student">null</span>
							</div>

							<button
								class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent switch_student_button"
								title="Advise a different student"
								data-upgraded=",MaterialButton,MaterialRipple"
							>
								Switch
								<span class="mdl-button__ripple-container"
									><span class="mdl-ripple"></span
								></span>
							</button>
							<button
								class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent stop_advising_button"
								style="margin-left: 6px"
								title="Stop advising this student"
								data-upgraded=",MaterialButton,MaterialRipple"
							>
								Stop Advising
								<span class="mdl-button__ripple-container"
									><span class="mdl-ripple"></span
								></span>
							</button>
						</div>

						<div id="extraLinks_menu"></div>

						<div class="menu-item-separator"></div>
						<div class="menu_item mi_sign_out">
							<button
								style="width: 100%"
								class="mdl-button mdl-js-button xmdl-button--raised white-background"
								onclick="vsbTimer.doLogout('link');"
								data-upgraded=",MaterialButton"
							>
								Sign Out
							</button>
						</div>
						<div class="menu_item mi_sign_in" style="display: none">
							<input
								style="width: 100%"
								class="big_button"
								type="button"
								value="Sign In"
								onclick="vsbTimer.doLogin();"
							/>
						</div>
					</div>
				</div>

				<div class="navigation noprint">
					<div class="navigation_buttons">
						<div style="width: 100%">
							<ul>
								<li>
									<a
										href="javascript:void(0)"
										class="accessible ak_c nav_link link_criteria title_font"
										onclick="UU.caseViewCriteria();"
										title="View the Select Courses region"
										>Select <span class="akl">C</span>ourses</a
									>
								</li>
								<li>
									<a
										href="javascript:void(0)"
										class="accessible ak_r nav_link link_results title_font navselected"
										onclick="UU.caseViewResults();"
										title="You are currently viewing the Results region"
										>Schedule <span class="akl">R</span>esults</a
									>
								</li>
								<li>
									<a
										href="javascript:void(0)"
										class="accessible ak_f nav_link link_favorites title_font"
										onclick="UU.caseViewFavorites();"
										title="View to Favourites region"
										>Favourites</a
									>
								</li>
							</ul>
						</div>
					</div>

					<div style="clear: both"></div>
				</div>

				<div style="clear: both"></div>

				<div id="under_header_wrapper">
					<div id="under_header">
						<table class="pages_table" role="presentation">
							<tbody>
								<tr>
									<td
										id="page_criteria"
										role="region"
										aria-labelledby="page_criteria_label"
										class="vsb_page disable-get-schedule noprint"
										style="width: 34.3826%"
									>
										<div
											class="page_fader"
											style="opacity: 0; display: none"
										></div>
										<div
											class="full_page_title title_font first"
											id="page_criteria_label"
										>
											Select <span class="akl">C</span>ourses
										</div>

										<div class="full_page">
											<div
												class="full_page_content"
												id="tab_degree"
												style="
													display: none;
													opacity: 1;
													width: auto;
													position: relative;
												"
											>
												<div>
													<button
														class="mdl-button mdl-js-button mdl-js-ripple-effect search-back-button"
														onclick="RR.changeSelCourseTab('tab_selected');"
														data-upgraded=",MaterialButton,MaterialRipple"
													>
														Back
														<span class="mdl-button__ripple-container"
															><span class="mdl-ripple"></span
														></span>
													</button>
												</div>
												<div class="select-course-title">Degree Plan</div>
												<div class="tab_container">
													<div class="tab_content">
														<div
															id="plan_import_container"
															style="display: block"
														></div>
													</div>
												</div>
											</div>

											<div
												class="full_page_content"
												id="tab_selected"
												style="opacity: 1; width: auto; position: relative"
											>
												<h2
													class="visuallyhidden"
													aria-label="Select Courses region; please adjust your section filters and search for courses to add to the list."
												></h2>
												<p
													class="visuallyhidden"
													style="margin-bottom: 15px"
													id="page_add_courses_desc"
												>
													Welcome to the Schedule Builder. This is the
													Select Courses region. To use this software,
													follow the steps described below. First add
													courses to the list of courses. This will cause
													the Results region to show you a list of
													possible schedules.
												</p>

												<div
													class="mobileRoom hide50"
													style="display: none"
												></div>
												<div class="accessOnly accessTermDisp">
													<h3>
														Step<span class="bubbleNb1">1</span>: Select
														Term
													</h3>
													<div>Choose a term.</div>
												</div>
												<div
													id="term_region_alt"
													style="display: none"
												></div>
												<div class="accessOnly">
													<h3>
														Step<span class="bubbleNb2a">1</span>:
														Select Campuses
													</h3>
													Select your desired course locations.
												</div>
												<div
													id="locationRegion"
													class="locationRegion-cont xhide50"
												>
													<h3
														class="visuallyhidden"
														aria-label="Course Section Filters. Adjusting these filters will impact which sections of the courses are permitted in your generated schedules."
													></h3>
													<div id="collegeSelector">
														<div class="mstitle">
															<div class="msItemR mslistitemstart">
																<div class="msItemNb li">
																	<div
																		class="msItemTb criteria_filter_title"
																	>
																		Colleges:
																	</div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		McMaster University
																	</div>
																	<div
																		class="msItemM"
																		id="collegeSelectorList0"
																		onclick='msSelect("collegeSelector",0,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msAll"
																style="display: inline-block"
															>
																<div class="msItemR">
																	<div class="msItemNb li">
																		<div class="msItemTb">
																			<span
																				class="textAll"
																				style="
																					display: inline;
																				"
																				>All</span
																			><span
																				class="textNone"
																				style="
																					display: none;
																				"
																				>None</span
																			>
																		</div>
																	</div>
																</div>
															</div>
															<div class="msItemR msSelectDot">
																<div class="msItemNb li">
																	<button
																		class="nobuttonstyle msItemTb a msActBoxShow ms_select_link disable-get-schedule"
																		title="Expand colleges filter"
																		aria-label="Expand colleges filter"
																	>
																		Select...
																	</button>
																</div>
															</div>
															<div style="clear: both"></div>
														</div>
														<div
															class="msbox"
															role="group"
															aria-label="colleges options"
															style="display: none"
														>
															<div class="msBoxCont">
																<div class="msulwrapper wcol2">
																	<ul
																		class="boxcol col0"
																		role="presentation"
																	>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked"
																					for="collegeSelectorBox0"
																					id="collegeSelectorBox0-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="collegeSelectorBox0"
																						class="mdl-checkbox__input"
																						onchange="msSelect('collegeSelector', 0,this.checked);"
																						checked="checked" /><span
																						class="mdl-checkbox__label"
																						>McMaster
																						University</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																	</ul>
																</div>
																<div class="msulwrapper wcol2">
																	<ul
																		class="boxcol col1"
																		role="presentation"
																	></ul>
																</div>
																<div
																	class="msulwrapper wcol2 textnonevisible"
																	style="display: none"
																>
																	<ul role="presentation">
																		<li>None Visible</li>
																	</ul>
																</div>
																<div style="clear: both"></div>
															</div>
															<div class="msBoxButtons accessOffOnly">
																<div class="msSelectAllDiv">
																	<button
																		class="mdl-button mdl-js-button"
																		onclick='msSelect("collegeSelector",undefined,true);'
																		title="Select all colleges"
																		aria-label="Select all colleges"
																		data-upgraded=",MaterialButton"
																	>
																		Select All
																	</button>
																	<button
																		class="mdl-button mdl-js-button"
																		onclick='msSelect("collegeSelector",undefined,false);'
																		title="Deselect all colleges"
																		aria-label="Deselect all colleges"
																		data-upgraded=",MaterialButton"
																	>
																		Select None
																	</button>
																</div>
																<div
																	class="msBoxClose accessOffOnly"
																>
																	<button
																		class="mdl-button mdl-js-button msActBoxClose"
																		title="Collapse colleges filter"
																		data-upgraded=",MaterialButton"
																	>
																		Close
																	</button>
																</div>
															</div>
														</div>
													</div>
													<div id="campusSelector">
														<div class="mstitle">
															<div class="msItemR mslistitemstart">
																<div class="msItemNb li">
																	<div
																		class="msItemTb criteria_filter_title"
																	>
																		Campuses:
																	</div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Conestoga College
																	</div>
																	<div
																		class="msItemM"
																		id="campusSelectorList0"
																		onclick='msSelect("campusSelector",0,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		McMaster University
																	</div>
																	<div
																		class="msItemM"
																		id="campusSelectorList1"
																		onclick='msSelect("campusSelector",1,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Mohawk College
																	</div>
																	<div
																		class="msItemM"
																		id="campusSelectorList2"
																		onclick='msSelect("campusSelector",2,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Off Site
																	</div>
																	<div
																		class="msItemM"
																		id="campusSelectorList3"
																		onclick='msSelect("campusSelector",3,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Six Nations Polytechnic
																	</div>
																	<div
																		class="msItemM"
																		id="campusSelectorList4"
																		onclick='msSelect("campusSelector",4,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msAll"
																style="display: inline-block"
															>
																<div class="msItemR">
																	<div class="msItemNb li">
																		<div class="msItemTb">
																			<span class="textAll"
																				>All (5)</span
																			><span
																				class="textNone"
																				style="
																					display: none;
																				"
																				>None</span
																			>
																		</div>
																	</div>
																</div>
															</div>
															<div class="msItemR msSelectDot">
																<div class="msItemNb li">
																	<button
																		class="nobuttonstyle msItemTb a msActBoxShow ms_select_link disable-get-schedule"
																		title="Expand campuses filter"
																		aria-label="Expand campuses filter"
																	>
																		Select...
																	</button>
																</div>
															</div>
															<div style="clear: both"></div>
														</div>
														<div
															class="msbox"
															role="group"
															aria-label="campuses options"
															style="display: none"
														>
															<div class="msBoxCont">
																<div class="msulwrapper wcol2">
																	<ul
																		class="boxcol col0"
																		role="presentation"
																	>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="campusSelectorBox0"
																					id="campusSelectorBox0-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="campusSelectorBox0"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('campusSelector', 0,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Conestoga
																						College</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="campusSelectorBox1"
																					id="campusSelectorBox1-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="campusSelectorBox1"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('campusSelector', 1,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>McMaster
																						University</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="campusSelectorBox2"
																					id="campusSelectorBox2-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="campusSelectorBox2"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('campusSelector', 2,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Mohawk
																						College</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																	</ul>
																</div>
																<div class="msulwrapper wcol2">
																	<ul
																		class="boxcol col1"
																		role="presentation"
																	>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="campusSelectorBox3"
																					id="campusSelectorBox3-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="campusSelectorBox3"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('campusSelector', 3,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Off
																						Site</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="campusSelectorBox4"
																					id="campusSelectorBox4-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="campusSelectorBox4"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('campusSelector', 4,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Six Nations
																						Polytechnic</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																	</ul>
																</div>
																<div
																	class="msulwrapper wcol2 textnonevisible"
																	style="display: none"
																>
																	<ul role="presentation">
																		<li>
																			A college must be
																			selected first.
																		</li>
																	</ul>
																</div>
																<div style="clear: both"></div>
															</div>
															<div class="msBoxButtons accessOffOnly">
																<div class="msSelectAllDiv">
																	<button
																		class="mdl-button mdl-js-button"
																		onclick='msSelect("campusSelector",undefined,true);'
																		title="Select all campuses"
																		aria-label="Select all campuses"
																		data-upgraded=",MaterialButton"
																	>
																		Select All
																	</button>
																	<button
																		class="mdl-button mdl-js-button"
																		onclick='msSelect("campusSelector",undefined,false);'
																		title="Deselect all campuses"
																		aria-label="Deselect all campuses"
																		data-upgraded=",MaterialButton"
																	>
																		Select None
																	</button>
																</div>
																<div
																	class="msBoxClose accessOffOnly"
																>
																	<button
																		class="mdl-button mdl-js-button msActBoxClose"
																		title="Collapse campuses filter"
																		data-upgraded=",MaterialButton"
																	>
																		Close
																	</button>
																</div>
															</div>
														</div>
													</div>
													<div id="locationSelector">
														<div class="mstitle">
															<div class="msItemR mslistitemstart">
																<div class="msItemNb li">
																	<div
																		class="msItemTb criteria_filter_title"
																	>
																		Locations:
																	</div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Automotive Resource Centre
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList0"
																		onclick='msSelect("locationSelector",0,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		CityLAB Hamilton
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList1"
																		onclick='msSelect("locationSelector",1,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Conestoga College
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList2"
																		onclick='msSelect("locationSelector",2,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Downtown Centre
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList3"
																		onclick='msSelect("locationSelector",3,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		General Hospital
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList4"
																		onclick='msSelect("locationSelector",4,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Global Knowledge - Toronto
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList5"
																		onclick='msSelect("locationSelector",5,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Juravinski Cancer Centre
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList6"
																		onclick='msSelect("locationSelector",6,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		McMaster University
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList7"
																		onclick='msSelect("locationSelector",7,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Mississauga
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList8"
																		onclick='msSelect("locationSelector",8,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Mississauga Training Centre
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList9"
																		onclick='msSelect("locationSelector",9,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Mohawk College
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList10"
																		onclick='msSelect("locationSelector",10,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Niagara
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList11"
																		onclick='msSelect("locationSelector",11,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		ONLINE
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList12"
																		onclick='msSelect("locationSelector",12,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		One James Street North
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList13"
																		onclick='msSelect("locationSelector",13,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Remit Payment to
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList14"
																		onclick='msSelect("locationSelector",14,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Ron Joyce Centre
																		(Burlington)
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList15"
																		onclick='msSelect("locationSelector",15,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Six Nations Polytechnic
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList16"
																		onclick='msSelect("locationSelector",16,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		St. Joseph's Hospital
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList17"
																		onclick='msSelect("locationSelector",17,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Unspecified
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList18"
																		onclick='msSelect("locationSelector",18,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Waterloo
																	</div>
																	<div
																		class="msItemM"
																		id="locationSelectorList19"
																		onclick='msSelect("locationSelector",19,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msAll"
																style="display: inline-block"
															>
																<div class="msItemR">
																	<div class="msItemNb li">
																		<div class="msItemTb">
																			<span class="textAll"
																				>All 20 within
																				selected
																				campuses</span
																			><span
																				class="textNone"
																				style="
																					display: none;
																				"
																				>20 of 20
																				selected</span
																			>
																		</div>
																	</div>
																</div>
															</div>
															<div class="msItemR msSelectDot">
																<div class="msItemNb li">
																	<button
																		class="nobuttonstyle msItemTb a msActBoxShow ms_select_link disable-get-schedule"
																		title="Expand locations filter"
																		aria-label="Expand locations filter"
																	>
																		Select...
																	</button>
																</div>
															</div>
															<div style="clear: both"></div>
														</div>
														<div
															class="msbox"
															role="group"
															aria-label="locations options"
															style="display: none"
														>
															<div class="msBoxCont">
																<div class="msulwrapper wcol2">
																	<ul
																		class="boxcol col0"
																		role="presentation"
																	>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox0"
																					id="locationSelectorBox0-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox0"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 0,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Automotive
																						Resource
																						Centre</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox1"
																					id="locationSelectorBox1-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox1"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 1,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>CityLAB
																						Hamilton</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox2"
																					id="locationSelectorBox2-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox2"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 2,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Conestoga
																						College</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox3"
																					id="locationSelectorBox3-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox3"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 3,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Downtown
																						Centre</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox4"
																					id="locationSelectorBox4-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox4"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 4,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>General
																						Hospital</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox5"
																					id="locationSelectorBox5-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox5"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 5,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Global
																						Knowledge -
																						Toronto</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox6"
																					id="locationSelectorBox6-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox6"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 6,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Juravinski
																						Cancer
																						Centre</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox7"
																					id="locationSelectorBox7-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox7"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 7,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>McMaster
																						University</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox8"
																					id="locationSelectorBox8-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox8"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 8,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Mississauga</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox9"
																					id="locationSelectorBox9-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox9"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 9,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Mississauga
																						Training
																						Centre</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																	</ul>
																</div>
																<div class="msulwrapper wcol2">
																	<ul
																		class="boxcol col1"
																		role="presentation"
																	>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox10"
																					id="locationSelectorBox10-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox10"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 10,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Mohawk
																						College</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox11"
																					id="locationSelectorBox11-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox11"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 11,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Niagara</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox12"
																					id="locationSelectorBox12-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox12"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 12,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>ONLINE</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox13"
																					id="locationSelectorBox13-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox13"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 13,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>One James
																						Street
																						North</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox14"
																					id="locationSelectorBox14-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox14"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 14,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Remit
																						Payment
																						to</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox15"
																					id="locationSelectorBox15-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox15"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 15,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Ron Joyce
																						Centre
																						(Burlington)</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox16"
																					id="locationSelectorBox16-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox16"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 16,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Six Nations
																						Polytechnic</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox17"
																					id="locationSelectorBox17-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox17"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 17,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>St.
																						Joseph's
																						Hospital</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox18"
																					id="locationSelectorBox18-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox18"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 18,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Unspecified</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="locationSelectorBox19"
																					id="locationSelectorBox19-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="locationSelectorBox19"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('locationSelector', 19,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Waterloo</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																	</ul>
																</div>
																<div
																	class="msulwrapper wcol2 textnonevisible"
																	style="display: none"
																>
																	<ul role="presentation">
																		<li>
																			A campus must be
																			selected first.
																		</li>
																	</ul>
																</div>
																<div style="clear: both"></div>
															</div>
															<div class="msBoxButtons accessOffOnly">
																<div class="msSelectAllDiv">
																	<button
																		class="mdl-button mdl-js-button"
																		onclick='msSelect("locationSelector",undefined,true);'
																		title="Select all locations"
																		aria-label="Select all locations"
																		data-upgraded=",MaterialButton"
																	>
																		Select All
																	</button>
																	<button
																		class="mdl-button mdl-js-button"
																		onclick='msSelect("locationSelector",undefined,false);'
																		title="Deselect all locations"
																		aria-label="Deselect all locations"
																		data-upgraded=",MaterialButton"
																	>
																		Select None
																	</button>
																</div>
																<div
																	class="msBoxClose accessOffOnly"
																>
																	<button
																		class="mdl-button mdl-js-button msActBoxClose"
																		title="Collapse locations filter"
																		data-upgraded=",MaterialButton"
																	>
																		Close
																	</button>
																</div>
															</div>
														</div>
													</div>
													<div id="instructSelector">
														<div class="mstitle">
															<div class="msItemR mslistitemstart">
																<div class="msItemNb li">
																	<div
																		class="msItemTb criteria_filter_title"
																	>
																		Instruction Modes:
																	</div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Blended (In-Person/Online)
																	</div>
																	<div
																		class="msItemM"
																		id="instructSelectorList0"
																		onclick='msSelect("instructSelector",0,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Combined In Person/Online
																	</div>
																	<div
																		class="msItemM"
																		id="instructSelectorList1"
																		onclick='msSelect("instructSelector",1,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Combined In Person/Virtual
																	</div>
																	<div
																		class="msItemM"
																		id="instructSelectorList2"
																		onclick='msSelect("instructSelector",2,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Directed Studies
																	</div>
																	<div
																		class="msItemM"
																		id="instructSelectorList3"
																		onclick='msSelect("instructSelector",3,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Distance Learning
																	</div>
																	<div
																		class="msItemM"
																		id="instructSelectorList4"
																		onclick='msSelect("instructSelector",4,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Experiential/WIL
																	</div>
																	<div
																		class="msItemM"
																		id="instructSelectorList5"
																		onclick='msSelect("instructSelector",5,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		In Person
																	</div>
																	<div
																		class="msItemM"
																		id="instructSelectorList6"
																		onclick='msSelect("instructSelector",6,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		In Person Accelerated (CCE)
																	</div>
																	<div
																		class="msItemM"
																		id="instructSelectorList7"
																		onclick='msSelect("instructSelector",7,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		In Person Components
																		Required
																	</div>
																	<div
																		class="msItemM"
																		id="instructSelectorList8"
																		onclick='msSelect("instructSelector",8,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Online
																	</div>
																	<div
																		class="msItemM"
																		id="instructSelectorList9"
																		onclick='msSelect("instructSelector",9,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Online (Self Study)
																	</div>
																	<div
																		class="msItemM"
																		id="instructSelectorList10"
																		onclick='msSelect("instructSelector",10,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Remote Option Available
																	</div>
																	<div
																		class="msItemM"
																		id="instructSelectorList11"
																		onclick='msSelect("instructSelector",11,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Research
																	</div>
																	<div
																		class="msItemM"
																		id="instructSelectorList12"
																		onclick='msSelect("instructSelector",12,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		To Be Announced
																	</div>
																	<div
																		class="msItemM"
																		id="instructSelectorList13"
																		onclick='msSelect("instructSelector",13,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Video Conferencing
																	</div>
																	<div
																		class="msItemM"
																		id="instructSelectorList14"
																		onclick='msSelect("instructSelector",14,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Virtual Classroom
																	</div>
																	<div
																		class="msItemM"
																		id="instructSelectorList15"
																		onclick='msSelect("instructSelector",15,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msAll"
																style="display: inline-block"
															>
																<div class="msItemR">
																	<div class="msItemNb li">
																		<div class="msItemTb">
																			<span class="textAll"
																				>All</span
																			><span
																				class="textNone"
																				style="
																					display: none;
																				"
																				>16 of 16
																				selected</span
																			>
																		</div>
																	</div>
																</div>
															</div>
															<div class="msItemR msSelectDot">
																<div class="msItemNb li">
																	<button
																		class="nobuttonstyle msItemTb a msActBoxShow ms_select_link disable-get-schedule"
																		title="Expand instruction modes filter"
																		aria-label="Expand instruction modes filter"
																	>
																		Select...
																	</button>
																</div>
															</div>
															<div style="clear: both"></div>
														</div>
														<div
															class="msbox"
															role="group"
															aria-label="instruction modes options"
															style="display: none"
														>
															<div class="msBoxCont">
																<div class="msulwrapper wcol2">
																	<ul
																		class="boxcol col0"
																		role="presentation"
																	>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="instructSelectorBox0"
																					id="instructSelectorBox0-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="instructSelectorBox0"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('instructSelector', 0,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Blended
																						(In-Person/Online)</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="instructSelectorBox1"
																					id="instructSelectorBox1-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="instructSelectorBox1"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('instructSelector', 1,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Combined In
																						Person/Online</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="instructSelectorBox2"
																					id="instructSelectorBox2-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="instructSelectorBox2"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('instructSelector', 2,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Combined In
																						Person/Virtual</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="instructSelectorBox3"
																					id="instructSelectorBox3-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="instructSelectorBox3"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('instructSelector', 3,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Directed
																						Studies</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="instructSelectorBox4"
																					id="instructSelectorBox4-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="instructSelectorBox4"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('instructSelector', 4,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Distance
																						Learning</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="instructSelectorBox5"
																					id="instructSelectorBox5-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="instructSelectorBox5"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('instructSelector', 5,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Experiential/WIL</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="instructSelectorBox6"
																					id="instructSelectorBox6-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="instructSelectorBox6"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('instructSelector', 6,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>In
																						Person</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="instructSelectorBox7"
																					id="instructSelectorBox7-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="instructSelectorBox7"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('instructSelector', 7,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>In Person
																						Accelerated
																						(CCE)</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																	</ul>
																</div>
																<div class="msulwrapper wcol2">
																	<ul
																		class="boxcol col1"
																		role="presentation"
																	>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="instructSelectorBox8"
																					id="instructSelectorBox8-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="instructSelectorBox8"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('instructSelector', 8,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>In Person
																						Components
																						Required</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="instructSelectorBox9"
																					id="instructSelectorBox9-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="instructSelectorBox9"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('instructSelector', 9,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Online</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="instructSelectorBox10"
																					id="instructSelectorBox10-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="instructSelectorBox10"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('instructSelector', 10,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Online
																						(Self
																						Study)</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="instructSelectorBox11"
																					id="instructSelectorBox11-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="instructSelectorBox11"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('instructSelector', 11,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Remote
																						Option
																						Available</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="instructSelectorBox12"
																					id="instructSelectorBox12-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="instructSelectorBox12"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('instructSelector', 12,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Research</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="instructSelectorBox13"
																					id="instructSelectorBox13-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="instructSelectorBox13"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('instructSelector', 13,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>To Be
																						Announced</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="instructSelectorBox14"
																					id="instructSelectorBox14-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="instructSelectorBox14"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('instructSelector', 14,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Video
																						Conferencing</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="instructSelectorBox15"
																					id="instructSelectorBox15-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="instructSelectorBox15"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('instructSelector', 15,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Virtual
																						Classroom</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																	</ul>
																</div>
																<div
																	class="msulwrapper wcol2 textnonevisible"
																	style="display: none"
																>
																	<ul role="presentation">
																		<li>
																			A college must be
																			selected first.
																		</li>
																	</ul>
																</div>
																<div style="clear: both"></div>
															</div>
															<div class="msBoxButtons accessOffOnly">
																<div class="msSelectAllDiv">
																	<button
																		class="mdl-button mdl-js-button"
																		onclick='msSelect("instructSelector",undefined,true);'
																		title="Select all instruction modes"
																		aria-label="Select all instruction modes"
																		data-upgraded=",MaterialButton"
																	>
																		Select All
																	</button>
																	<button
																		class="mdl-button mdl-js-button"
																		onclick='msSelect("instructSelector",undefined,false);'
																		title="Deselect all instruction modes"
																		aria-label="Deselect all instruction modes"
																		data-upgraded=",MaterialButton"
																	>
																		Select None
																	</button>
																</div>
																<div
																	class="msBoxClose accessOffOnly"
																>
																	<button
																		class="mdl-button mdl-js-button msActBoxClose"
																		title="Collapse instruction modes filter"
																		data-upgraded=",MaterialButton"
																	>
																		Close
																	</button>
																</div>
															</div>
														</div>
													</div>
													<div id="sessionSelector">
														<div class="mstitle">
															<div class="msItemR mslistitemstart">
																<div class="msItemNb li">
																	<div
																		class="msItemTb criteria_filter_title"
																	>
																		Session:
																	</div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Multi-term Part A
																	</div>
																	<div
																		class="msItemM"
																		id="sessionSelectorList0"
																		onclick='msSelect("sessionSelector",0,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msItemR msitem hidden"
																title=""
																style=""
															>
																<div class="msItemN">
																	<div class="msItemT">
																		Regular Academic
																	</div>
																	<div
																		class="msItemM"
																		id="sessionSelectorList1"
																		onclick='msSelect("sessionSelector",1,false);event.stopPropagation();'
																	></div>
																</div>
															</div>
															<div
																class="msAll"
																style="display: inline-block"
															>
																<div class="msItemR">
																	<div class="msItemNb li">
																		<div class="msItemTb">
																			<span class="textAll"
																				>All</span
																			><span
																				class="textNone"
																				style="
																					display: none;
																				"
																				>None</span
																			>
																		</div>
																	</div>
																</div>
															</div>
															<div class="msItemR msSelectDot">
																<div class="msItemNb li">
																	<button
																		class="nobuttonstyle msItemTb a msActBoxShow ms_select_link"
																		title="Expand session filter"
																		aria-label="Expand session filter"
																	>
																		<span class="accessOffOnly"
																			>Select...</span
																		><span class="accessOnly"
																			>Show Session</span
																		>
																	</button>
																</div>
															</div>
															<div style="clear: both"></div>
														</div>
														<div
															class="msbox"
															role="group"
															aria-label="session options"
															style="display: none"
														>
															<div class="msBoxCont">
																<div class="msulwrapper wcol2">
																	<ul
																		class="boxcol col0"
																		role="presentation"
																	>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="sessionSelectorBox0"
																					id="sessionSelectorBox0-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="sessionSelectorBox0"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('sessionSelector', 0,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Multi-term
																						Part A</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																	</ul>
																</div>
																<div class="msulwrapper wcol2">
																	<ul
																		class="boxcol col1"
																		role="presentation"
																	>
																		<div class="msItemDiv">
																			<li
																				class="msitem"
																				title=""
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="sessionSelectorBox1"
																					id="sessionSelectorBox1-label"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						id="sessionSelectorBox1"
																						checked="checked"
																						class="mdl-checkbox__input"
																						onchange="msSelect('sessionSelector', 1,this.checked);" /><span
																						class="mdl-checkbox__label"
																						>Regular
																						Academic</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</li>
																		</div>
																	</ul>
																</div>
																<div
																	class="msulwrapper wcol2 textnonevisible"
																	style="display: none"
																>
																	<ul role="presentation">
																		<li>None Visible</li>
																	</ul>
																</div>
																<div style="clear: both"></div>
															</div>
															<div class="msBoxButtons accessOffOnly">
																<div class="msSelectAllDiv">
																	<button
																		class="mdl-button mdl-js-button"
																		onclick='msSelect("sessionSelector",undefined,true);'
																		title="Select all session"
																		aria-label="Select all session"
																		data-upgraded=",MaterialButton"
																	>
																		Select All
																	</button>
																	<button
																		class="mdl-button mdl-js-button"
																		onclick='msSelect("sessionSelector",undefined,false);'
																		title="Deselect all session"
																		aria-label="Deselect all session"
																		data-upgraded=",MaterialButton"
																	>
																		Select None
																	</button>
																</div>
																<div
																	class="msBoxClose accessOffOnly"
																>
																	<button
																		class="mdl-button mdl-js-button msActBoxClose"
																		title="Collapse session filter"
																		data-upgraded=",MaterialButton"
																	>
																		Close
																	</button>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="accessOnly">
													<h3>
														Step<span class="bubbleNb2">2</span>: Select
														a Course
													</h3>
													<div>
														Begin typing a course code or name that you
														would like to take.<br /><br />Example:
														<strong>CHEM 1A03</strong>, or
														<strong>ARTHIST 2T03</strong>
													</div>
												</div>

												<div id="sel_midrange" style="min-height: 30px">
													<div class="bubble" id="step2abubble">
														<div class="tip_top">
															<i class="fa fa-caret-up"></i>
														</div>
														<div
															class="bubbletitle hide50"
															style="float: left"
														>
															Step<span class="bubbleNb2a">1</span>
														</div>
														<div>
															<img
																src="test_loggedin_semesterselected_files/step_arrow_north.png"
																style="float: right"
																alt="Up arrow for step instructions"
																class="phone step_arrow"
															/>
															<div style="float: left; clear: left">
																Select your desired course
																locations.
															</div>
															<div style="clear: both"></div>
														</div>
														<div class="tip_bottom weakhide"></div>
													</div>

													<div
														id="message_area"
														aria-live="assertive"
														aria-atomic="true"
													></div>

													<div class="bubble" id="step2bubble">
														<div class="bubbletitle hide50">
															Step<span class="bubbleNb2">2</span>
														</div>
														Begin typing a course code or name that you
														would like to take.<img
															src="test_loggedin_semesterselected_files/step_arrow_south.png"
															style="margin-top: 17px"
															alt="Down arrow for step instructions"
															class="pull-right phone step_arrow"
														/>
														<br /><br />Example:
														<strong>CHEM 1A03</strong>, or
														<strong>ARTHIST 2T03</strong>
														<div class="tip_bottom">
															<i class="fa fa-caret-down"></i>
														</div>
														<div class="clearfix"></div>
													</div>
												</div>

												<div class="plusBox">
													<h3
														class="visuallyhidden"
														aria-label="Select Course input. Please search for courses using the input element below."
													></h3>
													<div class="visuallyhidden">
														<div
															id="autocomplete-results"
															aria-live="assertive"
															aria-atomic="true"
														></div>
													</div>

													<div
														class="sdl_input plusInput"
														data-protonpass-form=""
													>
														<label
															for="code_number"
															style="color: black"
															>Select Course</label
														>
														<!-- Provide additional labelling for screen readers -->
														<label
															id="accessibilityCourseSearchLabel"
															class="visuallyhidden"
															>Search for courses by</label
														>
														<input
															class="disable-welcome disable-get-schedule"
															aria-describedby="accessibilityCourseSearchLabel"
															type="text"
															placeholder="Class Number, Title, Instructor..."
															id="code_number"
															autocomplete="off"
															role="combobox"
														/>
														<button
															class="advSearchButton disable-welcome disable-get-schedule"
															onclick="AS.openCourseBrowser()"
															style="pointer-events: auto"
														>
															<div
																class="advSearchText"
																style="color: black"
															>
																Advanced<br />Search
															</div>
															<div class="advSearchIcon">
																<i class="fa fa-search"></i>
															</div>
														</button>
													</div>

													<div style="clear: both"></div>
													<div
														class="crnListWarning importOnlyPlan"
														style="display: none"
													>
														You cannot manually select courses because
														you must follow the assigned recommendation.
													</div>
													<div
														class="crnListWarning crnListWarningInfo noSelectAlert"
														style="display: none"
													>
														You cannot manually select courses but you
														can import them from your Course Queue which
														you can fill in your My Academic
														Requirements<span
															class="noSelectAdvice"
														></span>
													</div>
													<div
														class="crnListWarning crnListWarningInfo noSelectAlertAdvisor"
														style="display: none"
													>
														Note that this student acting alone can only
														select courses from their Academic
														Requirements by importing them via the
														Course Queue<span
															class="noSelectAdvice"
														></span>
													</div>
													<div
														class="crnListWarning crnListWarningInfo noSelectAlertGuest"
														style="display: none"
													>
														Schedule Builder is currently being piloted
														for only specific users. However, we
														anticipate this new tool will be available
														to you sometime in the future.<span
															class="noSelectAdvice"
														></span>
													</div>

													<!-- Course browsing -->
													<div class="browse-courses hide50">
														<a
															class="popup-modal"
															href="javascript:AS.openCourseBrowser()"
														>
															<img
																alt="Advanced Course Search"
																src="test_loggedin_semesterselected_files/search2.gif"
																style="vertical-align: bottom"
															/>
															Advanced Course Search...
														</a>
													</div>
												</div>

												<div class="plusBoxBelow"></div>

												<div
													id="select-course-filters"
													class="hide50"
													style="margin-bottom: 10px"
												>
													<div
														style="text-align: left; width: 100%"
													></div>
													<div style="text-align: left">
														<div
															style="
																display: flex;
																align-items: center;
																height: 47px;
															"
														>
															Locations
															<button
																class="mdl-button mdl-js-button"
																id="add-location-filter"
																onclick="
		$('#add-location-filter').hide();
		$('.select-course-filters-input-container').show()"
																style="
																	width: 20px;
																	padding: 0 5px;
																	margin-left: 2px;
																	min-width: 0;
																"
																data-upgraded=",MaterialButton"
															>
																+
															</button>
															<span
																class="select-course-filters-input-container"
																style="display: none"
															>
																<input
																	style="width: 200px"
																	type="text"
																	id="select-course-filters-input"
																	aria-label="Select Location"
																	placeholder="Select Location"
																/>
															</span>
														</div>
														<div class="selected-filters-chips">
															<span
																class="mdl-chip mdl-chip--deletable"
																id="selectCourseFilterChipTemplate"
																style="display: none"
															>
																<span
																	class="mdl-chip__text chip-text"
																	>Deletable Chip</span
																>
																<button
																	type="button"
																	class="mdl-chip__action"
																>
																	<i
																		class="fa fa-times"
																		aria-hidden="true"
																	></i>
																</button>
															</span>
														</div>
													</div>
												</div>

												<div
													class="crnListWarning tooManyResults"
													style="display: none"
												>
													The generated schedule results are truncated
													because the input is too broad. To ensure all
													results are considered, pin down or toggle off
													some of your preferred classes.
												</div>

												<div id="requirements" style="position: relative">
													<h3
														class="visuallyhidden"
														aria-label="List of courses:"
													></h3>
													<div id="size-tester">
														Stay enrolled in LEC C01 - TUT T01
													</div>

													<div
														class="loadingDiv flap_loading"
														id="flap_loading"
														style="display: none"
													>
														Retrieving schedule...
													</div>

													<div
														class="requirementDiv2 rbox"
														id="templateCourse2"
														style="display: none"
													>
														<h4
															class="visuallyhidden"
															aria-label="Selected course"
														></h4>
														<div
															class="rbox-header"
															style="display: none"
														>
															<div class="rbox-header-cont clearfix2">
																<span class="rbox-wheader">
																	<span
																		class="wildcard-title requirementTitle1"
																		>Subject or Title
																	</span>
																	<span
																		class="wildcard-title requirementTitle2"
																		style="display: none"
																		>Catalog Number:
																	</span>
																	<span
																		class="wildcard-title requirementTitle3"
																		style="display: none"
																		>Attribute:
																	</span>
																</span>
																<div
																	class="clearfix2"
																	style="float: right"
																>
																	<div class="reqInfo">
																		Choose a course from the
																		following list:
																	</div>
																	<div
																		class="optionsSelect"
																	></div>
																</div>
															</div>
														</div>

														<div
															class="cbox-select-wildcard"
															style="display: none"
														>
															<div class="cbox">
																<!-- Add 'roomy' to classes to stretch content, 'expanded' to pre-expand -->
																<table
																	style="
																		width: 100%;
																		padding: 0px;
																		border-spacing: 0px;
																	"
																	class="cbox-expand-region"
																>
																	<tbody>
																		<tr>
																			<td>
																				<span
																					class="select-title"
																					><i
																						class="fa fa-exclamation-triangle"
																					></i>
																					Please select a
																					course from the
																					dropdown</span
																				>
																			</td>
																			<td
																				class="cbox-option"
																				style="width: 3%"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_trash_tip Dmdl-tooltip mdl-tooltip--top dynID"
																					for="tipTrashWildX"
																				>
																					Drop this course
																				</div>
																				<button
																					aria-label="Remove class"
																					class="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipTrashWildX"
																					data-upgraded=",MaterialButton"
																				>
																					<img
																						class="cbox-trash-icon"
																						src="test_loggedin_semesterselected_files/trash.svg"
																						alt="trash can"
																					/>
																					<img
																						class="cbox-trash-icon-open"
																						src="test_loggedin_semesterselected_files/trash_open.svg"
																						alt="empty trash can"
																					/>
																					<i
																						class="fa fa-undo cbox-trash-icon-undo"
																					></i>
																				</button>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</div>
														<div class="cbox-margin">
															<div class="cbox-toggle">
																<label
																	class="Dmdl-checkbox Dmdl-js-checkbox Dmdl-js-ripple-effect dynID"
																>
																	<input
																		type="checkbox"
																		id="cnf_toggle"
																		class="Dmdl-checkbox__input ignore_check dynID"
																		checked="checked"
																	/>
																</label>
															</div>
															<div class="cbox">
																<!-- Add 'roomy' to classes to stretch content, 'expanded' to pre-expand -->
																<table
																	style="
																		width: 100%;
																		padding: 0px;
																		border-spacing: 0px;
																	"
																	class="cbox-expand-region"
																>
																	<tbody>
																		<tr>
																			<td
																				class="cbox-codenumber"
																			>
																				<div
																					class="cbox-cn"
																				>
																					COMM<br />217
																				</div>
																			</td>
																			<td class="cbox-header">
																				<div
																					class="Dmdl-tooltip mdl-tooltip--right dynID"
																					aria-hidden="true"
																					for="tipCourseLinkX"
																				>
																					Courses with
																					this symbol must
																					be taken
																					together
																				</div>
																				<span
																					class="block_piece_indicator_cont dynID"
																					id="tipCourseLinkX"
																					><span
																						class="block_piece_indicator"
																						><i
																							class="fas fa-link"
																						></i></span
																				></span>
																				<span
																					class="leftnclear cbox-title"
																					>Financial
																					Accounting</span
																				>
																				<span
																					class="cnf_req_state"
																					>Required or
																					Recommended</span
																				>
																				<span
																					class="course_state"
																				></span>
																				<span
																					class="leftnclear cbox-subtitle"
																				>
																					<!-- <span class="cnf_consider dynID" id="tipConsiderX">Considering 3 of 5 Classes</span>&nbsp;&nbsp; -->
																					<span
																						class="cnf_campus_info"
																						>Walnut
																						Creek
																						Campus</span
																					></span
																				>

																				<span
																					class="cnf_dropdown cbox-dropdown-cont leftnclear"
																					onkeydown="return avoidChange(event);"
																					onkeypress="return avoidChange(event);"
																					onkeyup="return avoidChange(event);"
																					onclick="event.stopPropagation();"
																				>
																					<!-- <div class="dh_locker_hotspot" onclick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));">&nbsp;</div> -->
																					<!-- <img src="images/padlock.gif" style="vertical-align:middle;" class="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor"/> -->
																					<select
																						class="cbox-dropdown cbox-dropdown-normal dropdownSelect"
																						aria-label="Please select a course section from this dropdown.  If selected, course schedules will only be generated containing the selected sections for a given course."
																					>
																						<option
																							aria-label="Current selection "
																							value="al"
																							selected="selected"
																						>
																							Try all
																							classes
																						</option>
																						<!-- <option value="ig">Ignore this course</option>  -->
																						<option
																							value="ss"
																							class="cnf_specific_option"
																						>
																							Try
																							specific
																							classes...
																						</option>
																					</select>

																					<img
																						src="test_loggedin_semesterselected_files/pin.png"
																						style="
																							vertical-align: middle;
																							cursor: pointer;
																							margin: -2px
																								0px;
																						"
																						class="dropdownPinImg"
																						alt="Push Pin"
																					/>
																					<img
																						src="test_loggedin_semesterselected_files/padlock.gif"
																						style="
																							vertical-align: middle;
																							margin: -2px
																								0px;
																						"
																						class="dropdownLockImg"
																						alt="Padlock"
																						title="The specific class you are to take for this course has been assigned to you by an advisor"
																					/>
																					<div
																						class="cnf_class_lock_tip Dmdl-tooltip mdl-tooltip--top dynID"
																						aria-hidden="true"
																						for="tipClsLockX"
																					>
																						Lock this
																						class
																					</div>
																					<button
																						aria-label="lock class"
																						class="class_locker_button mdl-button mdl-js-button mdl-button--icon dynID"
																						id="tipClsLockX"
																						onclick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));"
																						style="
																							margin: -6px
																								0 -6px
																								0;
																						"
																						data-upgraded=",MaterialButton"
																					>
																						<i
																							class="class_unlocked fa fa-unlock-alt"
																						></i>
																						<i
																							class="class_locked fa fa-lock"
																						></i>
																					</button>
																				</span>
																			</td>
																			<td
																				class="cbox-option cnf_lock"
																				style="width: 3%"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_locker_tip Dmdl-tooltip mdl-tooltip--top dynID"
																					for="tipLockX"
																				>
																					Lock this course
																				</div>
																				<button
																					aria-label="lock course"
																					class="cnf_locker_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipLockX"
																					data-upgraded=",MaterialButton"
																				>
																					<i
																						class="cnf_unlocked fa fa-unlock-alt"
																					></i>
																					<i
																						class="cnf_locked fa fa-lock"
																					></i>
																				</button>
																			</td>
																			<td
																				class="cbox-option"
																				style="width: 3%"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_trash_tip Dmdl-tooltip mdl-tooltip--top dynID"
																					for="tipTrashX"
																				>
																					Drop this course
																				</div>
																				<button
																					aria-label="Remove course"
																					class="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipTrashX"
																					data-upgraded=",MaterialButton"
																				>
																					<img
																						class="cbox-trash-icon"
																						src="test_loggedin_semesterselected_files/trash.svg"
																						alt="trash can"
																					/>
																					<img
																						class="cbox-trash-icon-open"
																						src="test_loggedin_semesterselected_files/trash_open.svg"
																						alt="empty trash can"
																					/>
																					<i
																						class="fa fa-undo cbox-trash-icon-undo"
																					></i>
																				</button>
																			</td>
																			<td
																				class="cbox-option cbox-expander"
																				style="width: 3%"
																			>
																				<div
																					class="Dmdl-tooltip mdl-tooltip--top dynID cnf_tip_expand"
																					for="tipExpandX"
																				>
																					Click to {} more
																					options and
																					information on
																					{}
																				</div>
																				<button
																					aria-label="Expand course detail"
																					class="mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipExpandX"
																					data-upgraded=",MaterialButton"
																				>
																					<i
																						class="far fa-angle-down"
																					></i>
																				</button>
																			</td>
																		</tr>
																	</tbody>
																</table>
																<div class="cbox-warnings">
																	<i
																		class="fa fa-exclamation-triangle"
																	></i>
																	This course has no classes still
																	open for enrollment
																</div>
																<div
																	class="cbox-expansion"
																	style="display: none"
																>
																	<div
																		class="cbox-row clearfix2 cnf_desc"
																	>
																		<span class="cbox-row-title"
																			>Description:</span
																		>
																		<span
																			class="cbox-row-content cnf_desc_desc"
																		>
																			This course is designed
																			to familiarize the
																			students with the
																			processes involved in
																			the design, planning,
																			and construction of
																			dramatic motion picture
																			sets.
																		</span>
																		<div
																			style="clear: both"
																		></div>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_reqs"
																	>
																		<span class="cbox-row-title"
																			>Requirements:</span
																		>
																		<span
																			class="cbox-row-content cnf_req"
																		>
																			ACT English 18-19 or
																			COMPASS English 70-80.
																		</span>
																	</div>

																	<div
																		class="core_names_cont2 cbox-row clearfix2"
																	>
																		<span class="cbox-row-title"
																			>Attributes:</span
																		>
																		<span
																			class="core_names cbox-row-content"
																			>HON, CORE</span
																		>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_cross_listed"
																	>
																		<span class="cbox-row-title"
																			>Cross Listed
																			Courses:</span
																		>
																		<span
																			class="cbox-row-content cnf_cross_listed_desc"
																		>
																			MATH 101, CHEM 303
																		</span>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect selectAllNoneContainer"
																	>
																		<span class="cbox-row-title"
																			>Campuses:</span
																		>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="campus_checkboxes clearfix2"
																		>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="checkbox-X1"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="checkbox-X1"
																						class="mdl-checkbox__input"
																						checked="checked" />
																					<span
																						class="cbox-selitem-label"
																						>Sir George
																						Williams</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</span>
																		</span>
																		<div
																			class="cbox-allnone cnf_campuses_allnone"
																		>
																			<button
																				class="Dmdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="Dmdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div class="cbox-row noselect">
																		<span
																			class="cbox-row-title clearfix2"
																			>Session:</span
																		>
																		<div
																			style="clear: left"
																		></div>
																		<select
																			class="cbox-select select_period"
																			role="listbox"
																			aria-label="Period"
																		>
																			<option
																				selected="selected"
																			>
																				Period A
																			</option>
																			<option>
																				Period B
																			</option>
																		</select>
																	</div>

																	<div class="cbox-row noselect">
																		<span
																			class="cbox-row-title clearfix2"
																			>Section:</span
																		>
																		<div
																			style="clear: left"
																		></div>
																		<select
																			class="cbox-select select_usn"
																			role="listbox"
																			aria-label="USN"
																		>
																			<option
																				selected="selected"
																			>
																				Item A
																			</option>
																			<option>Item B</option>
																		</select>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect selectAllNoneContainer cnf_modes"
																	>
																		<span class="cbox-row-title"
																			>Include classes that
																			are:</span
																		>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="mode_checkboxes"
																		>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="Dmdl-checkbox Dmdl-js-checkbox Dmdl-js-ripple-effect cbox-checkbox dynID"
																					for="cb_online"
																				>
																					<input
																						type="checkbox"
																						id="cb_online"
																						class="Dmdl-checkbox__input dynID"
																						checked="checked"
																					/>
																					<span
																						class="cbox-selitem-label"
																						>Online</span
																					>
																				</label>
																			</span>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="Dmdl-checkbox Dmdl-js-checkbox Dmdl-js-ripple-effect cbox-checkbox dynID"
																					for="cb_on_camp"
																				>
																					<input
																						type="checkbox"
																						id="cb_on_camp"
																						class="Dmdl-checkbox__input dynID"
																						checked="checked"
																					/>
																					<span
																						class="cbox-selitem-label"
																						>On
																						Campus</span
																					>
																				</label>
																			</span>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="Dmdl-checkbox Dmdl-js-checkbox Dmdl-js-ripple-effect cbox-checkbox dynID"
																					for="cb_lod"
																				>
																					<input
																						type="checkbox"
																						id="cb_lod"
																						class="Dmdl-checkbox__input dynID"
																						checked="checked"
																					/>
																					<span
																						class="cbox-selitem-label"
																						>Learn on
																						demand</span
																					>
																				</label>
																			</span>
																		</span>
																		<div class="cbox-allnone">
																			<button
																				class="Dmdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="Dmdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect cnf_classes selectAllNoneContainer"
																	>
																		<span class="cbox-row-title"
																			>Classes:</span
																		>
																		<span
																			class="visuallyhidden"
																			aria-label="The following checkboxes allow you to specify which classes you want to allow as possible options for your generated schedule results. If you want to get the detail of each class now, try adding only this course to the list of courses (or deselect every course except this one). This will generate one schedule result for each unique timetable option of this course. By navigating the legend of each schedule result, you will be able to examine the detail of each class of this course."
																		></span>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="class_checkboxes"
																		>
																			<span
																				class="cbox-selitem cbox-classitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="checkbox-Y1"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="checkbox-Y1"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" />
																					<span
																						class="cbox-selitem-label full"
																						>Lec A</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																				>
																					Pin
																				</div>
																			</span>
																			<span
																				class="cbox-selitem cbox-classitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="checkbox-Y2"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="checkbox-Y2"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" />
																					<span
																						class="cbox-selitem-label waitlisted"
																						>Lec B</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																				>
																					Pin
																				</div>
																			</span>
																		</span>
																		<div class="cbox-allnone">
																			<button
																				class="Dmdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="Dmdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_subj_note"
																	>
																		<span class="cbox-row-title"
																			>Subject Notes:</span
																		>
																		<span
																			class="cbox-row-content cnf_subj_note_desc"
																		>
																			abc
																		</span>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_cattrs"
																	>
																		<span class="cbox-row-title"
																			>Course
																			Attributes:</span
																		>
																		<span
																			class="cbox-row-content cnf_cattr"
																			>Value1, Value2</span
																		>
																	</div>

																	<div class="cnf_custom_attrs">
																		<div
																			class="cbox-row clearfix2 cnf_attrs"
																		>
																			<span
																				class="cbox-row-title"
																				>Attribute1:</span
																			>
																			<span
																				class="cbox-row-content cnf_attr"
																				>Value1</span
																			>
																		</div>
																		<div
																			class="cbox-row clearfix2 cnf_attrs"
																		>
																			<span
																				class="cbox-row-title"
																				>Attribute2:</span
																			>
																			<span
																				class="cbox-row-content cnf_attr"
																				>Class1, Class3:
																				Value1</span
																			>
																			<span
																				class="cbox-row-content cnf_attr"
																				>Class2:
																				Value2</span
																			>
																		</div>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_class_notes"
																	>
																		<span class="cbox-row-title"
																			>Class Remarks:</span
																		>
																		<span
																			class="cbox-row-content cnf_class_notes_desc"
																		>
																			abc
																		</span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="requirementDiv2 rbox" style="">
														<h4
															class="visuallyhidden"
															aria-label="Selected course"
														></h4>
														<div
															class="rbox-header"
															style="display: none"
														>
															<div class="rbox-header-cont clearfix2">
																<span class="rbox-wheader">
																	<span
																		class="wildcard-title requirementTitle1"
																		>Subject or Title
																	</span>
																	<span
																		class="wildcard-title requirementTitle2"
																		style="display: none"
																		>Catalog Number:
																	</span>
																	<span
																		class="wildcard-title requirementTitle3"
																		style="display: none"
																		>Attribute:
																	</span>
																</span>
																<div
																	class="clearfix2"
																	style="float: right"
																>
																	<div class="reqInfo">
																		Choose a course from the
																		following list:
																	</div>
																	<div
																		class="optionsSelect"
																	></div>
																</div>
															</div>
														</div>

														<div
															class="cbox-select-wildcard"
															style="display: none"
														>
															<div class="cbox cbox-unlocked bd1">
																<!-- Add 'roomy' to classes to stretch content, 'expanded' to pre-expand -->
																<table
																	style="
																		width: 100%;
																		padding: 0px;
																		border-spacing: 0px;
																	"
																	class="cbox-expand-region"
																>
																	<tbody>
																		<tr>
																			<td>
																				<span
																					class="select-title"
																					><i
																						class="fa fa-exclamation-triangle"
																					></i>
																					Please select a
																					course from the
																					dropdown</span
																				>
																			</td>
																			<td
																				class="cbox-option"
																				style="width: 3%"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID"
																					for="tipTrashWildX_5"
																					data-upgraded=",MaterialTooltip"
																				>
																					Drop this
																					course...
																				</div>
																				<button
																					aria-label="Remove class"
																					class="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipTrashWildX_5"
																					data-upgraded=",MaterialButton"
																					style="
																						cursor: default;
																					"
																					tabindex="0"
																				>
																					<img
																						class="cbox-trash-icon"
																						src="test_loggedin_semesterselected_files/trash.svg"
																						alt="trash can"
																						style="
																							display: inline;
																						"
																					/>
																					<img
																						class="cbox-trash-icon-open"
																						src="test_loggedin_semesterselected_files/trash_open.svg"
																						alt="empty trash can"
																						style="
																							display: none;
																						"
																					/>
																					<i
																						class="fa fa-undo cbox-trash-icon-undo"
																						style="
																							display: none;
																						"
																					></i>
																				</button>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</div>
														<div
															class="cbox-margin"
															style="display: block"
														>
															<div class="cbox-toggle">
																<label
																	class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect dynID is-checked mdl-js-ripple-effect--ignore-events is-upgraded"
																	data-upgraded=",MaterialCheckbox,MaterialRipple"
																>
																	<input
																		type="checkbox"
																		id="cnf_toggle_5"
																		class="mdl-checkbox__input ignore_check dynID"
																		checked="checked"
																		aria-label="COMPSCI 2C03 Data Structures and Algorithms"
																		style="
																			display: inline-block;
																		" />
																	<span
																		class="mdl-checkbox__focus-helper"
																	></span
																	><span
																		class="mdl-checkbox__box-outline"
																		><span
																			class="mdl-checkbox__tick-outline"
																		></span></span
																	><span
																		class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																		data-upgraded=",MaterialRipple"
																		><span
																			class="mdl-ripple"
																		></span></span
																></label>
															</div>
															<div class="cbox cbox-unlocked bd1">
																<!-- Add 'roomy' to classes to stretch content, 'expanded' to pre-expand -->
																<table
																	style="
																		width: 100%;
																		padding: 0px;
																		border-spacing: 0px;
																	"
																	class="cbox-expand-region"
																>
																	<tbody>
																		<tr>
																			<td
																				class="cbox-codenumber"
																			>
																				<div
																					class="cbox-cn bc1"
																				>
																					COMPSCI<br />2C03
																				</div>
																			</td>
																			<td class="cbox-header">
																				<div
																					class="mdl-tooltip mdl-tooltip--right dynID"
																					aria-hidden="true"
																					for="tipCourseLinkX_5"
																					data-upgraded=",MaterialTooltip"
																				>
																					Courses with
																					this symbol must
																					be taken
																					together
																				</div>
																				<span
																					class="block_piece_indicator_cont dynID"
																					id="tipCourseLinkX_5"
																					style="
																						display: none;
																					"
																					tabindex="0"
																					><span
																						class="block_piece_indicator"
																						><i
																							class="fas fa-link"
																						></i></span
																				></span>
																				<span
																					class="leftnclear cbox-title"
																					>Data Structures
																					and
																					Algorithms</span
																				>
																				<span
																					class="cnf_req_state"
																					style="
																						display: none;
																					"
																					>Recommended</span
																				>
																				<span
																					class="course_state"
																					style="
																						display: inline;
																					"
																					>Enrolled</span
																				>
																				<span
																					class="leftnclear cbox-subtitle"
																				>
																					<!-- <span class="cnf_consider dynID" id="tipConsiderX">Considering 3 of 5 Classes</span>&nbsp;&nbsp; -->
																					<span
																						class="cnf_campus_info"
																					>
																						&nbsp;
																					</span></span
																				>

																				<span
																					class="cnf_dropdown cbox-dropdown-cont leftnclear"
																					onkeydown="return avoidChange(event);"
																					onkeypress="return avoidChange(event);"
																					onkeyup="return avoidChange(event);"
																					onclick="event.stopPropagation();"
																				>
																					<!-- <div class="dh_locker_hotspot" onclick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));">&nbsp;</div> -->
																					<!-- <img src="images/padlock.gif" style="vertical-align:middle;" class="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor"/> -->
																					<select
																						class="cbox-dropdown cbox-dropdown-normal dropdownSelect"
																						aria-label="Please select a course section from this dropdown.  If selected, course schedules will only be generated containing the selected sections for a given course."
																						style="
																							max-width: 139px;
																						"
																					>
																						<option
																							value="kp_MCMST--2259_3668-3779-"
																						>
																							Stay
																							enrolled
																							in LEC
																							C02 -
																							TUT T05
																						</option>
																						<option
																							value="dp_MCMST--2259_3668-3779-"
																						>
																							Drop
																							Course
																						</option>
																						<option
																							aria-label="Current selection "
																							value="al"
																							selected="selected"
																						>
																							Try all
																							classes
																							(6)
																						</option>
																						<!-- <option value="ig">Ignore this course</option>  -->
																						<option
																							value="ss"
																							class="cnf_specific_option"
																						>
																							Try
																							specific
																							classes
																							(6/6)
																						</option>
																						<option
																							value="us_MCMST--2259_3480-3481-"
																						>
																							LEC C01
																							- TUT
																							T01
																						</option>
																						<option
																							value="us_MCMST--2259_3480-3482-"
																						>
																							LEC C01
																							- TUT
																							T02
																						</option>
																						<option
																							value="us_MCMST--2259_3480-8958-"
																						>
																							LEC C01
																							- TUT
																							T03
																						</option>
																						<option
																							value="us_MCMST--2259_3668-3779-"
																						>
																							LEC C02
																							- TUT
																							T05
																							(Closed)
																						</option>
																						<option
																							value="us_MCMST--2259_3779-3780-"
																						>
																							LEC C02
																							- TUT
																							T06
																						</option>
																						<option
																							value="us_MCMST--2259_3779-3860-"
																						>
																							LEC C02
																							- TUT
																							T07
																						</option>
																					</select>

																					<img
																						src="test_loggedin_semesterselected_files/pin.png"
																						style="
																							vertical-align: middle;
																							cursor: pointer;
																							margin: -2px
																								0px;
																							display: none;
																						"
																						class="dropdownPinImg"
																						alt="Push Pin"
																					/>
																					<img
																						src="test_loggedin_semesterselected_files/padlock.gif"
																						style="
																							vertical-align: middle;
																							margin: -2px
																								0px;
																							display: none;
																						"
																						class="dropdownLockImg"
																						alt="Padlock"
																						title="The specific class you are to take for this course has been assigned to you by an advisor"
																					/>
																					<div
																						class="cnf_class_lock_tip mdl-tooltip mdl-tooltip--top dynID"
																						aria-hidden="true"
																						for="tipClsLockX_5"
																						data-upgraded=",MaterialTooltip"
																					>
																						Click to
																						lock this
																						class so
																						that if this
																						schedule is
																						recommended
																						to a
																						student, it
																						will force
																						the student
																						to take the
																						selected
																						class.
																					</div>
																					<button
																						aria-label="lock class"
																						class="class_locker_button mdl-button mdl-js-button mdl-button--icon dynID"
																						id="tipClsLockX_5"
																						onclick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));"
																						style="
																							margin: -6px
																								0px;
																							display: none;
																						"
																						data-upgraded=",MaterialButton"
																						tabindex="0"
																					>
																						<i
																							class="class_unlocked fa fa-unlock-alt"
																							style="
																								display: inline;
																							"
																						></i>
																						<i
																							class="class_locked fa fa-lock"
																							style="
																								display: none;
																							"
																						></i>
																					</button>
																				</span>
																			</td>
																			<td
																				class="cbox-option cnf_lock"
																				style="
																					width: 3%;
																					display: none;
																				"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_locker_tip mdl-tooltip mdl-tooltip--top dynID"
																					for="tipLockX_5"
																					data-upgraded=",MaterialTooltip"
																				>
																					Click to lock
																					this course so
																					that if this
																					schedule is
																					recommended to a
																					student, it will
																					force the
																					student to
																					include this
																					course.
																				</div>
																				<button
																					aria-label="lock course"
																					class="cnf_locker_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipLockX_5"
																					data-upgraded=",MaterialButton"
																					tabindex="0"
																				>
																					<i
																						class="cnf_unlocked fa fa-unlock-alt"
																						style="
																							display: inline;
																						"
																					></i>
																					<i
																						class="cnf_locked fa fa-lock"
																						style="
																							display: none;
																						"
																					></i>
																				</button>
																			</td>
																			<td
																				class="cbox-option"
																				style="width: 3%"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID"
																					for="tipTrashX_5"
																					data-upgraded=",MaterialTooltip"
																				>
																					Drop this
																					course...
																				</div>
																				<button
																					aria-label="Remove course"
																					class="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipTrashX_5"
																					data-upgraded=",MaterialButton"
																					style="
																						cursor: default;
																					"
																					tabindex="0"
																				>
																					<img
																						class="cbox-trash-icon"
																						src="test_loggedin_semesterselected_files/trash.svg"
																						alt="trash can"
																						style="
																							display: inline;
																						"
																					/>
																					<img
																						class="cbox-trash-icon-open"
																						src="test_loggedin_semesterselected_files/trash_open.svg"
																						alt="empty trash can"
																						style="
																							display: none;
																						"
																					/>
																					<i
																						class="fa fa-undo cbox-trash-icon-undo"
																						style="
																							display: none;
																						"
																					></i>
																				</button>
																			</td>
																			<td
																				class="cbox-option cbox-expander"
																				style="width: 3%"
																			>
																				<div
																					class="mdl-tooltip mdl-tooltip--top dynID cnf_tip_expand"
																					for="tipExpandX_5"
																					data-upgraded=",MaterialTooltip"
																				>
																					Expand detail on
																					COMPSCI 2C03
																				</div>
																				<button
																					aria-label="Expand course detail"
																					class="mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipExpandX_5"
																					data-upgraded=",MaterialButton"
																					tabindex="0"
																				>
																					<i
																						class="far fa-angle-down"
																					></i>
																				</button>
																			</td>
																		</tr>
																	</tbody>
																</table>

																<div
																	class="cbox-expansion"
																	style="display: none"
																>
																	<div
																		class="cbox-row clearfix2 cnf_desc"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Description:</span
																		>
																		<span
																			class="cbox-row-content cnf_desc_desc"
																			>Basic data structures:
																			stacks, queues, hash
																			tables, and binary
																			trees; searching and
																			sorting; graph
																			representations and
																			algorithms, including
																			minimum spanning trees,
																			traversals, shortest
																			paths; introduction to
																			algorithmic design
																			strategies; correctness
																			and performance
																			analysis.<br />Three
																			lectures, one tutorial
																			(one hour); first term;
																			may be offered also in
																			the first term<br />Prerequisite(s):
																			COMPSCI 1DM3 or 2DM3;
																			COMPSCI 1XC3 or 1XD3 or
																			1MD3 or MATH 1MP3, and
																			registration in any
																			Computer Science program
																			(see Department Note 3
																			in the course listing)
																			or in the Minor in
																			Computer Science.<br />Antirequisite(s):
																			SFWRENG 2C03, COMPENG
																			3SM4</span
																		>
																		<div
																			style="clear: both"
																		></div>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_reqs"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Requirements:</span
																		>

																		<span
																			class="cbox-row-content cnf_req"
																			><span
																				class="cbox-row-content cnf_req"
																				>Refer to course
																				Description</span
																			></span
																		>
																	</div>

																	<div
																		class="core_names_cont2 cbox-row clearfix2"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Attributes:</span
																		>
																		<span
																			class="core_names cbox-row-content"
																		></span>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_cross_listed"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Cross Listed
																			Courses:</span
																		>
																		<span
																			class="cbox-row-content cnf_cross_listed_desc"
																		></span>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect selectAllNoneContainer"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Campuses:</span
																		>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="campus_checkboxes clearfix2"
																			><span
																				class="cbox-selitem"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cam_0_020127231205661034"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cam="MCMSTiMCMST"
																						id="cam_0_020127231205661034"
																						class="mdl-checkbox__input cnf_cam_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>McMaster
																						University</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span></label></span
																		></span>
																		<div
																			class="cbox-allnone cnf_campuses_allnone"
																			style="display: none"
																		>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div
																		class="cbox-row noselect"
																		style="display: block"
																	>
																		<span
																			class="cbox-row-title clearfix2"
																			>Session:</span
																		>
																		<div
																			style="clear: left"
																		></div>
																		<select
																			class="cbox-select select_period"
																			role="listbox"
																			aria-label="Period"
																		>
																			<option
																				value=""
																				selected="selected"
																			>
																				All Sessions (1)
																			</option>
																			<option value="2259-1">
																				2025 Fall - Regular
																				Academic
																			</option>
																		</select>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect selectAllNoneContainer cnf_modes"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Include classes that
																			are:</span
																		>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="mode_checkboxes"
																		>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cb_online_5"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="cb_online_5"
																						class="mdl-checkbox__input dynID"
																						checked="checked"
																						aria-label="COMPSCI 2C03 Data Structures and Algorithms" />
																					<span
																						class="cbox-selitem-label"
																						>Online</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</span>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cb_on_camp_5"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="cb_on_camp_5"
																						class="mdl-checkbox__input dynID"
																						checked="checked"
																						aria-label="COMPSCI 2C03 Data Structures and Algorithms" />
																					<span
																						class="cbox-selitem-label"
																						>On
																						Campus</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</span>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cb_lod_5"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="cb_lod_5"
																						class="mdl-checkbox__input dynID"
																						checked="checked"
																						aria-label="COMPSCI 2C03 Data Structures and Algorithms" />
																					<span
																						class="cbox-selitem-label"
																						>Learn on
																						demand</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</span>
																		</span>
																		<div class="cbox-allnone">
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect cnf_classes selectAllNoneContainer"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Classes:</span
																		>
																		<span
																			class="visuallyhidden"
																			aria-label="The following checkboxes allow you to specify which classes you want to allow as possible options for your generated schedule results. If you want to get the detail of each class now, try adding only this course to the list of courses (or deselect every course except this one). This will generate one schedule result for each unique timetable option of this course. By navigating the legend of each schedule result, you will be able to examine the detail of each class of this course."
																		></span>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="class_checkboxes"
																			><span
																				class="cbox-selitem cbox-classitem"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="0-020127231205661034"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="0"
																						id="0-020127231205661034"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT
																						T01</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down class"
																				>
																					+
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="1-020127231205661034"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="1"
																						id="1-020127231205661034"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT
																						T02</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down class"
																				>
																					+
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="2-020127231205661034"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="2"
																						id="2-020127231205661034"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT
																						T03</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down class"
																				>
																					+
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="3-020127231205661034"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="3"
																						id="3-020127231205661034"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C02 -
																						TUT T05<span
																							style="
																								color: #cc0000;
																							"
																						>
																							(Closed)</span
																						><span
																							class="course_state"
																							title=""
																							>Enrolled</span
																						></span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down class"
																				>
																					+
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="4-020127231205661034"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="4"
																						id="4-020127231205661034"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C02 -
																						TUT
																						T06</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down class"
																				>
																					+
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="5-020127231205661034"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="5"
																						id="5-020127231205661034"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C02 -
																						TUT
																						T07</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down class"
																				>
																					+
																				</div></span
																			></span
																		>
																		<div
																			class="cbox-allnone"
																			style="display: block"
																		>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_subj_note"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Subject Notes:</span
																		>
																		<span
																			class="cbox-row-content cnf_subj_note_desc"
																		></span>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_cattrs"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Course
																			Attributes:</span
																		>
																		<span
																			class="cbox-row-content cnf_cattr"
																		></span>
																	</div>

																	<div
																		class="cnf_custom_attrs"
																		style="display: none"
																	></div>

																	<div
																		class="cbox-row clearfix2 cnf_class_notes"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Class Remarks:</span
																		>
																		<span
																			class="cbox-row-content cnf_class_notes_desc"
																		></span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="requirementDiv2 rbox" style="">
														<h4
															class="visuallyhidden"
															aria-label="Selected course"
														></h4>
														<div
															class="rbox-header"
															style="display: none"
														>
															<div class="rbox-header-cont clearfix2">
																<span class="rbox-wheader">
																	<span
																		class="wildcard-title requirementTitle1"
																		>Subject or Title
																	</span>
																	<span
																		class="wildcard-title requirementTitle2"
																		style="display: none"
																		>Catalog Number:
																	</span>
																	<span
																		class="wildcard-title requirementTitle3"
																		style="display: none"
																		>Attribute:
																	</span>
																</span>
																<div
																	class="clearfix2"
																	style="float: right"
																>
																	<div class="reqInfo">
																		Choose a course from the
																		following list:
																	</div>
																	<div
																		class="optionsSelect"
																	></div>
																</div>
															</div>
														</div>

														<div
															class="cbox-select-wildcard"
															style="display: none"
														>
															<div class="cbox cbox-unlocked bd2">
																<!-- Add 'roomy' to classes to stretch content, 'expanded' to pre-expand -->
																<table
																	style="
																		width: 100%;
																		padding: 0px;
																		border-spacing: 0px;
																	"
																	class="cbox-expand-region"
																>
																	<tbody>
																		<tr>
																			<td>
																				<span
																					class="select-title"
																					><i
																						class="fa fa-exclamation-triangle"
																					></i>
																					Please select a
																					course from the
																					dropdown</span
																				>
																			</td>
																			<td
																				class="cbox-option"
																				style="width: 3%"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID"
																					for="tipTrashWildX_1"
																					data-upgraded=",MaterialTooltip"
																				>
																					Drop this
																					course...
																				</div>
																				<button
																					aria-label="Remove class"
																					class="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipTrashWildX_1"
																					data-upgraded=",MaterialButton"
																					style="
																						cursor: default;
																					"
																					tabindex="0"
																				>
																					<img
																						class="cbox-trash-icon"
																						src="test_loggedin_semesterselected_files/trash.svg"
																						alt="trash can"
																						style="
																							display: inline;
																						"
																					/>
																					<img
																						class="cbox-trash-icon-open"
																						src="test_loggedin_semesterselected_files/trash_open.svg"
																						alt="empty trash can"
																						style="
																							display: none;
																						"
																					/>
																					<i
																						class="fa fa-undo cbox-trash-icon-undo"
																						style="
																							display: none;
																						"
																					></i>
																				</button>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</div>
														<div
															class="cbox-margin"
															style="display: block"
														>
															<div class="cbox-toggle">
																<label
																	class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect dynID is-checked mdl-js-ripple-effect--ignore-events is-upgraded"
																	data-upgraded=",MaterialCheckbox,MaterialRipple"
																>
																	<input
																		type="checkbox"
																		id="cnf_toggle_1"
																		class="mdl-checkbox__input ignore_check dynID"
																		checked="checked"
																		aria-label="MATH 2LA3 Applications of Linear Algebra"
																		style="
																			display: inline-block;
																		" />
																	<span
																		class="mdl-checkbox__focus-helper"
																	></span
																	><span
																		class="mdl-checkbox__box-outline"
																		><span
																			class="mdl-checkbox__tick-outline"
																		></span></span
																	><span
																		class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																		data-upgraded=",MaterialRipple"
																		><span
																			class="mdl-ripple"
																		></span></span
																></label>
															</div>
															<div class="cbox cbox-unlocked bd2">
																<!-- Add 'roomy' to classes to stretch content, 'expanded' to pre-expand -->
																<table
																	style="
																		width: 100%;
																		padding: 0px;
																		border-spacing: 0px;
																	"
																	class="cbox-expand-region"
																>
																	<tbody>
																		<tr>
																			<td
																				class="cbox-codenumber"
																			>
																				<div
																					class="cbox-cn bc2"
																				>
																					MATH<br />2LA3
																				</div>
																			</td>
																			<td class="cbox-header">
																				<div
																					class="mdl-tooltip mdl-tooltip--right dynID"
																					aria-hidden="true"
																					for="tipCourseLinkX_1"
																					data-upgraded=",MaterialTooltip"
																				>
																					Courses with
																					this symbol must
																					be taken
																					together
																				</div>
																				<span
																					class="block_piece_indicator_cont dynID"
																					id="tipCourseLinkX_1"
																					style="
																						display: none;
																					"
																					tabindex="0"
																					><span
																						class="block_piece_indicator"
																						><i
																							class="fas fa-link"
																						></i></span
																				></span>
																				<span
																					class="leftnclear cbox-title"
																					>Applications of
																					Linear
																					Algebra</span
																				>
																				<span
																					class="cnf_req_state"
																					style="
																						display: none;
																					"
																					>Recommended</span
																				>
																				<span
																					class="course_state"
																					style="
																						display: inline;
																					"
																					>Enrolled</span
																				>
																				<span
																					class="leftnclear cbox-subtitle"
																				>
																					<!-- <span class="cnf_consider dynID" id="tipConsiderX">Considering 3 of 5 Classes</span>&nbsp;&nbsp; -->
																					<span
																						class="cnf_campus_info"
																					>
																						&nbsp;
																					</span></span
																				>

																				<span
																					class="cnf_dropdown cbox-dropdown-cont leftnclear"
																					onkeydown="return avoidChange(event);"
																					onkeypress="return avoidChange(event);"
																					onkeyup="return avoidChange(event);"
																					onclick="event.stopPropagation();"
																				>
																					<!-- <div class="dh_locker_hotspot" onclick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));">&nbsp;</div> -->
																					<!-- <img src="images/padlock.gif" style="vertical-align:middle;" class="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor"/> -->
																					<select
																						class="cbox-dropdown dropdownSelect cbox-dropdown-normal"
																						aria-label="Please select a course section from this dropdown.  If selected, course schedules will only be generated containing the selected sections for a given course."
																						style="
																							max-width: 201px;
																						"
																					>
																						<option
																							value="kp_MCMST--2259_2105-2107-"
																							selected="selected"
																						>
																							Stay
																							enrolled
																							in LEC
																							C01 -
																							TUT T02
																						</option>
																						<option
																							value="dp_MCMST--2259_2105-2107-"
																						>
																							Drop
																							Course
																						</option>
																						<option
																							aria-label="Current selection "
																							value="al"
																						>
																							Try all
																							classes
																							(2)
																						</option>
																						<!-- <option value="ig">Ignore this course</option>  -->
																						<option
																							value="ss"
																							class="cnf_specific_option"
																						>
																							Try
																							specific
																							classes
																							(2/2)
																						</option>
																						<option
																							value="us_MCMST--2259_2105-2106-"
																						>
																							LEC C01
																							- TUT
																							T01
																						</option>
																						<option
																							value="us_MCMST--2259_2105-2107-"
																						>
																							LEC C01
																							- TUT
																							T02
																							(Closed)
																						</option>
																					</select>

																					<img
																						src="test_loggedin_semesterselected_files/pin.png"
																						style="
																							vertical-align: middle;
																							cursor: pointer;
																							margin: -2px
																								0px;
																						"
																						class="dropdownPinImg"
																						alt="Push Pin"
																						title="Click to unpin course"
																					/>
																					<img
																						src="test_loggedin_semesterselected_files/padlock.gif"
																						style="
																							vertical-align: middle;
																							margin: -2px
																								0px;
																							display: none;
																						"
																						class="dropdownLockImg"
																						alt="Padlock"
																						title="The specific class you are to take for this course has been assigned to you by an advisor"
																					/>
																					<div
																						class="cnf_class_lock_tip mdl-tooltip mdl-tooltip--top dynID"
																						aria-hidden="true"
																						for="tipClsLockX_1"
																						data-upgraded=",MaterialTooltip"
																					>
																						Click to
																						lock this
																						class so
																						that if this
																						schedule is
																						recommended
																						to a
																						student, it
																						will force
																						the student
																						to take the
																						selected
																						class.
																					</div>
																					<button
																						aria-label="lock class"
																						class="class_locker_button mdl-button mdl-js-button mdl-button--icon dynID"
																						id="tipClsLockX_1"
																						onclick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));"
																						style="
																							margin: -6px
																								0px;
																							display: none;
																						"
																						data-upgraded=",MaterialButton"
																						tabindex="0"
																					>
																						<i
																							class="class_unlocked fa fa-unlock-alt"
																							style="
																								display: inline;
																							"
																						></i>
																						<i
																							class="class_locked fa fa-lock"
																							style="
																								display: none;
																							"
																						></i>
																					</button>
																				</span>
																			</td>
																			<td
																				class="cbox-option cnf_lock"
																				style="
																					width: 3%;
																					display: none;
																				"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_locker_tip mdl-tooltip mdl-tooltip--top dynID"
																					for="tipLockX_1"
																					data-upgraded=",MaterialTooltip"
																				>
																					Click to lock
																					this course so
																					that if this
																					schedule is
																					recommended to a
																					student, it will
																					force the
																					student to
																					include this
																					course.
																				</div>
																				<button
																					aria-label="lock course"
																					class="cnf_locker_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipLockX_1"
																					data-upgraded=",MaterialButton"
																					tabindex="0"
																				>
																					<i
																						class="cnf_unlocked fa fa-unlock-alt"
																						style="
																							display: inline;
																						"
																					></i>
																					<i
																						class="cnf_locked fa fa-lock"
																						style="
																							display: none;
																						"
																					></i>
																				</button>
																			</td>
																			<td
																				class="cbox-option"
																				style="width: 3%"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID"
																					for="tipTrashX_1"
																					data-upgraded=",MaterialTooltip"
																				>
																					Drop this
																					course...
																				</div>
																				<button
																					aria-label="Remove course"
																					class="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipTrashX_1"
																					data-upgraded=",MaterialButton"
																					style="
																						cursor: default;
																					"
																					tabindex="0"
																				>
																					<img
																						class="cbox-trash-icon"
																						src="test_loggedin_semesterselected_files/trash.svg"
																						alt="trash can"
																						style="
																							display: inline;
																						"
																					/>
																					<img
																						class="cbox-trash-icon-open"
																						src="test_loggedin_semesterselected_files/trash_open.svg"
																						alt="empty trash can"
																						style="
																							display: none;
																						"
																					/>
																					<i
																						class="fa fa-undo cbox-trash-icon-undo"
																						style="
																							display: none;
																						"
																					></i>
																				</button>
																			</td>
																			<td
																				class="cbox-option cbox-expander"
																				style="width: 3%"
																			>
																				<div
																					class="mdl-tooltip mdl-tooltip--top dynID cnf_tip_expand"
																					for="tipExpandX_1"
																					data-upgraded=",MaterialTooltip"
																				>
																					Expand detail on
																					MATH 2LA3
																				</div>
																				<button
																					aria-label="Expand course detail"
																					class="mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipExpandX_1"
																					data-upgraded=",MaterialButton"
																					tabindex="0"
																				>
																					<i
																						class="far fa-angle-down"
																					></i>
																				</button>
																			</td>
																		</tr>
																	</tbody>
																</table>

																<div
																	class="cbox-expansion"
																	style="display: none"
																>
																	<div
																		class="cbox-row clearfix2 cnf_desc"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Description:</span
																		>
																		<span
																			class="cbox-row-content cnf_desc_desc"
																			>This course focuses on
																			applications of linear
																			algebra. Topics include
																			linear programming,
																			applications of matrix
																			decomposition theorems,
																			examples from data
																			science, singular value
																			decomposition and
																			applications to
																			compression.<br />Three
																			lectures, one tutorial;
																			one term<br />Prerequisite(s):
																			One of MATH 1AA3, 1LT3,
																			1NN3, 1XX3, 1ZB3,
																			ARTSSCI 1D06 A/B, ISCI
																			1A24 A/B; and one of
																			MATH 1B03, 1ZC3,
																			1ZZ5</span
																		>
																		<div
																			style="clear: both"
																		></div>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_reqs"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Requirements:</span
																		>

																		<span
																			class="cbox-row-content cnf_req"
																			><span
																				class="cbox-row-content cnf_req"
																				>Refer to course
																				Description</span
																			></span
																		>
																	</div>

																	<div
																		class="core_names_cont2 cbox-row clearfix2"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Attributes:</span
																		>
																		<span
																			class="core_names cbox-row-content"
																		></span>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_cross_listed"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Cross Listed
																			Courses:</span
																		>
																		<span
																			class="cbox-row-content cnf_cross_listed_desc"
																		></span>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect selectAllNoneContainer"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Campuses:</span
																		>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="campus_checkboxes clearfix2"
																			><span
																				class="cbox-selitem"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cam_0_008474021002909737"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cam="MCMSTiMCMST"
																						id="cam_0_008474021002909737"
																						class="mdl-checkbox__input cnf_cam_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>McMaster
																						University</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span></label></span
																		></span>
																		<div
																			class="cbox-allnone cnf_campuses_allnone"
																			style="display: none"
																		>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div
																		class="cbox-row noselect"
																		style="display: block"
																	>
																		<span
																			class="cbox-row-title clearfix2"
																			>Session:</span
																		>
																		<div
																			style="clear: left"
																		></div>
																		<select
																			class="cbox-select select_period"
																			role="listbox"
																			aria-label="Period"
																		>
																			<option
																				value=""
																				selected="selected"
																			>
																				All Sessions (1)
																			</option>
																			<option value="2259-1">
																				2025 Fall - Regular
																				Academic
																			</option>
																		</select>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect selectAllNoneContainer cnf_modes"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Include classes that
																			are:</span
																		>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="mode_checkboxes"
																		>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cb_online_1"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="cb_online_1"
																						class="mdl-checkbox__input dynID"
																						checked="checked"
																						aria-label="MATH 2LA3 Applications of Linear Algebra" />
																					<span
																						class="cbox-selitem-label"
																						>Online</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</span>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cb_on_camp_1"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="cb_on_camp_1"
																						class="mdl-checkbox__input dynID"
																						checked="checked"
																						aria-label="MATH 2LA3 Applications of Linear Algebra" />
																					<span
																						class="cbox-selitem-label"
																						>On
																						Campus</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</span>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cb_lod_1"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="cb_lod_1"
																						class="mdl-checkbox__input dynID"
																						checked="checked"
																						aria-label="MATH 2LA3 Applications of Linear Algebra" />
																					<span
																						class="cbox-selitem-label"
																						>Learn on
																						demand</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</span>
																		</span>
																		<div class="cbox-allnone">
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect cnf_classes selectAllNoneContainer"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Classes:</span
																		>
																		<span
																			class="visuallyhidden"
																			aria-label="The following checkboxes allow you to specify which classes you want to allow as possible options for your generated schedule results. If you want to get the detail of each class now, try adding only this course to the list of courses (or deselect every course except this one). This will generate one schedule result for each unique timetable option of this course. By navigating the legend of each schedule result, you will be able to examine the detail of each class of this course."
																		></span>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="class_checkboxes"
																			><span
																				class="cbox-selitem cbox-classitem cbox-faded"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="0-008474021002909737"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="0"
																						id="0-008474021002909737"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT
																						T01</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down class instead"
																				>
																					+
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="1-008474021002909737"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="1"
																						id="1-008474021002909737"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT T02<span
																							style="
																								color: #cc0000;
																							"
																						>
																							(Closed)</span
																						><span
																							class="course_state"
																							title=""
																							>Enrolled</span
																						></span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Unpin class"
																				>
																					-
																				</div></span
																			></span
																		>
																		<div
																			class="cbox-allnone"
																			style="display: block"
																		>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_subj_note"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Subject Notes:</span
																		>
																		<span
																			class="cbox-row-content cnf_subj_note_desc"
																		></span>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_cattrs"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Course
																			Attributes:</span
																		>
																		<span
																			class="cbox-row-content cnf_cattr"
																		></span>
																	</div>

																	<div
																		class="cnf_custom_attrs"
																		style="display: none"
																	></div>

																	<div
																		class="cbox-row clearfix2 cnf_class_notes"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Class Remarks:</span
																		>
																		<span
																			class="cbox-row-content cnf_class_notes_desc"
																		></span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="requirementDiv2 rbox" style="">
														<h4
															class="visuallyhidden"
															aria-label="Selected course"
														></h4>
														<div
															class="rbox-header"
															style="display: none"
														>
															<div class="rbox-header-cont clearfix2">
																<span class="rbox-wheader">
																	<span
																		class="wildcard-title requirementTitle1"
																		>Subject or Title
																	</span>
																	<span
																		class="wildcard-title requirementTitle2"
																		style="display: none"
																		>Catalog Number:
																	</span>
																	<span
																		class="wildcard-title requirementTitle3"
																		style="display: none"
																		>Attribute:
																	</span>
																</span>
																<div
																	class="clearfix2"
																	style="float: right"
																>
																	<div class="reqInfo">
																		Choose a course from the
																		following list:
																	</div>
																	<div
																		class="optionsSelect"
																	></div>
																</div>
															</div>
														</div>

														<div
															class="cbox-select-wildcard"
															style="display: none"
														>
															<div class="cbox cbox-unlocked bd3">
																<!-- Add 'roomy' to classes to stretch content, 'expanded' to pre-expand -->
																<table
																	style="
																		width: 100%;
																		padding: 0px;
																		border-spacing: 0px;
																	"
																	class="cbox-expand-region"
																>
																	<tbody>
																		<tr>
																			<td>
																				<span
																					class="select-title"
																					><i
																						class="fa fa-exclamation-triangle"
																					></i>
																					Please select a
																					course from the
																					dropdown</span
																				>
																			</td>
																			<td
																				class="cbox-option"
																				style="width: 3%"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID"
																					for="tipTrashWildX_2"
																					data-upgraded=",MaterialTooltip"
																				>
																					Drop this
																					course...
																				</div>
																				<button
																					aria-label="Remove class"
																					class="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipTrashWildX_2"
																					data-upgraded=",MaterialButton"
																					style="
																						cursor: default;
																					"
																					tabindex="0"
																				>
																					<img
																						class="cbox-trash-icon"
																						src="test_loggedin_semesterselected_files/trash.svg"
																						alt="trash can"
																						style="
																							display: inline;
																						"
																					/>
																					<img
																						class="cbox-trash-icon-open"
																						src="test_loggedin_semesterselected_files/trash_open.svg"
																						alt="empty trash can"
																						style="
																							display: none;
																						"
																					/>
																					<i
																						class="fa fa-undo cbox-trash-icon-undo"
																						style="
																							display: none;
																						"
																					></i>
																				</button>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</div>
														<div
															class="cbox-margin"
															style="display: block"
														>
															<div class="cbox-toggle">
																<label
																	class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect dynID is-checked mdl-js-ripple-effect--ignore-events is-upgraded"
																	data-upgraded=",MaterialCheckbox,MaterialRipple"
																>
																	<input
																		type="checkbox"
																		id="cnf_toggle_2"
																		class="mdl-checkbox__input ignore_check dynID"
																		checked="checked"
																		aria-label="COMPSCI 2GA3 Computer Architecture"
																		style="
																			display: inline-block;
																		" />
																	<span
																		class="mdl-checkbox__focus-helper"
																	></span
																	><span
																		class="mdl-checkbox__box-outline"
																		><span
																			class="mdl-checkbox__tick-outline"
																		></span></span
																	><span
																		class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																		data-upgraded=",MaterialRipple"
																		><span
																			class="mdl-ripple"
																		></span></span
																></label>
															</div>
															<div class="cbox cbox-unlocked bd3">
																<!-- Add 'roomy' to classes to stretch content, 'expanded' to pre-expand -->
																<table
																	style="
																		width: 100%;
																		padding: 0px;
																		border-spacing: 0px;
																	"
																	class="cbox-expand-region"
																>
																	<tbody>
																		<tr>
																			<td
																				class="cbox-codenumber"
																			>
																				<div
																					class="cbox-cn bc3"
																				>
																					COMPSCI<br />2GA3
																				</div>
																			</td>
																			<td class="cbox-header">
																				<div
																					class="mdl-tooltip mdl-tooltip--right dynID"
																					aria-hidden="true"
																					for="tipCourseLinkX_2"
																					data-upgraded=",MaterialTooltip"
																				>
																					Courses with
																					this symbol must
																					be taken
																					together
																				</div>
																				<span
																					class="block_piece_indicator_cont dynID"
																					id="tipCourseLinkX_2"
																					style="
																						display: none;
																					"
																					tabindex="0"
																					><span
																						class="block_piece_indicator"
																						><i
																							class="fas fa-link"
																						></i></span
																				></span>
																				<span
																					class="leftnclear cbox-title"
																					>Computer
																					Architecture</span
																				>
																				<span
																					class="cnf_req_state"
																					style="
																						display: none;
																					"
																					>Recommended</span
																				>
																				<span
																					class="course_state"
																					style="
																						display: inline;
																					"
																					>Enrolled</span
																				>
																				<span
																					class="leftnclear cbox-subtitle"
																				>
																					<!-- <span class="cnf_consider dynID" id="tipConsiderX">Considering 3 of 5 Classes</span>&nbsp;&nbsp; -->
																					<span
																						class="cnf_campus_info"
																					>
																						&nbsp;
																					</span></span
																				>

																				<span
																					class="cnf_dropdown cbox-dropdown-cont leftnclear"
																					onkeydown="return avoidChange(event);"
																					onkeypress="return avoidChange(event);"
																					onkeyup="return avoidChange(event);"
																					onclick="event.stopPropagation();"
																				>
																					<!-- <div class="dh_locker_hotspot" onclick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));">&nbsp;</div> -->
																					<!-- <img src="images/padlock.gif" style="vertical-align:middle;" class="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor"/> -->
																					<select
																						class="cbox-dropdown dropdownSelect cbox-dropdown-normal"
																						aria-label="Please select a course section from this dropdown.  If selected, course schedules will only be generated containing the selected sections for a given course."
																						style="
																							max-width: 180px;
																						"
																					>
																						<option
																							value="kp_MCMST--2259_2951-2952-"
																							selected="selected"
																						>
																							Stay
																							enrolled
																							in LEC
																							C01 -
																							TUT T01
																						</option>
																						<option
																							value="dp_MCMST--2259_2951-2952-"
																						>
																							Drop
																							Course
																						</option>
																						<option
																							aria-label="Current selection "
																							value="al"
																						>
																							Try all
																							classes
																							(5)
																						</option>
																						<!-- <option value="ig">Ignore this course</option>  -->
																						<option
																							value="ss"
																							class="cnf_specific_option"
																						>
																							Try
																							specific
																							classes
																							(5/5)
																						</option>
																						<option
																							value="us_MCMST--2259_2951-2952-"
																						>
																							LEC C01
																							- TUT
																							T01
																							(Closed)
																						</option>
																						<option
																							value="us_MCMST--2259_2951-2953-"
																						>
																							LEC C01
																							- TUT
																							T02 or
																							LEC C01
																							- TUT
																							T04
																						</option>
																						<option
																							value="us_MCMST--2259_2951-2954-"
																						>
																							LEC C01
																							- TUT
																							T03
																						</option>
																						<option
																							value="us_MCMST--2259_2951-3781-"
																						>
																							LEC C01
																							- TUT
																							T05
																							(Closed)
																						</option>
																					</select>

																					<img
																						src="test_loggedin_semesterselected_files/pin.png"
																						style="
																							vertical-align: middle;
																							cursor: pointer;
																							margin: -2px
																								0px;
																						"
																						class="dropdownPinImg"
																						alt="Push Pin"
																						title="Click to unpin course"
																					/>
																					<img
																						src="test_loggedin_semesterselected_files/padlock.gif"
																						style="
																							vertical-align: middle;
																							margin: -2px
																								0px;
																							display: none;
																						"
																						class="dropdownLockImg"
																						alt="Padlock"
																						title="The specific class you are to take for this course has been assigned to you by an advisor"
																					/>
																					<div
																						class="cnf_class_lock_tip mdl-tooltip mdl-tooltip--top dynID"
																						aria-hidden="true"
																						for="tipClsLockX_2"
																						data-upgraded=",MaterialTooltip"
																					>
																						Click to
																						lock this
																						class so
																						that if this
																						schedule is
																						recommended
																						to a
																						student, it
																						will force
																						the student
																						to take the
																						selected
																						class.
																					</div>
																					<button
																						aria-label="lock class"
																						class="class_locker_button mdl-button mdl-js-button mdl-button--icon dynID"
																						id="tipClsLockX_2"
																						onclick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));"
																						style="
																							margin: -6px
																								0px;
																							display: none;
																						"
																						data-upgraded=",MaterialButton"
																						tabindex="0"
																					>
																						<i
																							class="class_unlocked fa fa-unlock-alt"
																							style="
																								display: inline;
																							"
																						></i>
																						<i
																							class="class_locked fa fa-lock"
																							style="
																								display: none;
																							"
																						></i>
																					</button>
																				</span>
																			</td>
																			<td
																				class="cbox-option cnf_lock"
																				style="
																					width: 3%;
																					display: none;
																				"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_locker_tip mdl-tooltip mdl-tooltip--top dynID"
																					for="tipLockX_2"
																					data-upgraded=",MaterialTooltip"
																				>
																					Click to lock
																					this course so
																					that if this
																					schedule is
																					recommended to a
																					student, it will
																					force the
																					student to
																					include this
																					course.
																				</div>
																				<button
																					aria-label="lock course"
																					class="cnf_locker_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipLockX_2"
																					data-upgraded=",MaterialButton"
																					tabindex="0"
																				>
																					<i
																						class="cnf_unlocked fa fa-unlock-alt"
																						style="
																							display: inline;
																						"
																					></i>
																					<i
																						class="cnf_locked fa fa-lock"
																						style="
																							display: none;
																						"
																					></i>
																				</button>
																			</td>
																			<td
																				class="cbox-option"
																				style="width: 3%"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID"
																					for="tipTrashX_2"
																					data-upgraded=",MaterialTooltip"
																				>
																					Drop this
																					course...
																				</div>
																				<button
																					aria-label="Remove course"
																					class="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipTrashX_2"
																					data-upgraded=",MaterialButton"
																					style="
																						cursor: default;
																					"
																					tabindex="0"
																				>
																					<img
																						class="cbox-trash-icon"
																						src="test_loggedin_semesterselected_files/trash.svg"
																						alt="trash can"
																						style="
																							display: inline;
																						"
																					/>
																					<img
																						class="cbox-trash-icon-open"
																						src="test_loggedin_semesterselected_files/trash_open.svg"
																						alt="empty trash can"
																						style="
																							display: none;
																						"
																					/>
																					<i
																						class="fa fa-undo cbox-trash-icon-undo"
																						style="
																							display: none;
																						"
																					></i>
																				</button>
																			</td>
																			<td
																				class="cbox-option cbox-expander"
																				style="width: 3%"
																			>
																				<div
																					class="mdl-tooltip mdl-tooltip--top dynID cnf_tip_expand"
																					for="tipExpandX_2"
																					data-upgraded=",MaterialTooltip"
																				>
																					Expand detail on
																					COMPSCI 2GA3
																				</div>
																				<button
																					aria-label="Expand course detail"
																					class="mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipExpandX_2"
																					data-upgraded=",MaterialButton"
																					tabindex="0"
																				>
																					<i
																						class="far fa-angle-down"
																					></i>
																				</button>
																			</td>
																		</tr>
																	</tbody>
																</table>

																<div
																	class="cbox-expansion"
																	style="display: none"
																>
																	<div
																		class="cbox-row clearfix2 cnf_desc"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Description:</span
																		>
																		<span
																			class="cbox-row-content cnf_desc_desc"
																			>Introduction to logic
																			gates, computer
																			arithmetic,
																			instruction-set
																			architecture, assembly
																			programming, translation
																			of high-level languages
																			into assembly. Computer
																			system organization:
																			datapath and control,
																			pipelining, memory
																			hierarchies, I/O
																			systems; measures of
																			performance.<br />Three
																			lectures, one tutorial,
																			(one hour); first term;
																			may be offered also in
																			the second term<br />Prerequisite(s):
																			One of the following:<br />
																			• COMPSCI 1XC3 and 1DM3
																			and registration in any
																			Computer Science program
																			(see Department Note 3
																			in the course listing)
																			or in the Minor in
																			Computer Science.<br />Antirequisite(s):
																			COMPENG 3DR4, 4DM4,
																			SFWRENG 2GA3, 3GA3</span
																		>
																		<div
																			style="clear: both"
																		></div>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_reqs"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Requirements:</span
																		>

																		<span
																			class="cbox-row-content cnf_req"
																			><span
																				class="cbox-row-content cnf_req"
																				>Refer to course
																				Description</span
																			></span
																		>
																	</div>

																	<div
																		class="core_names_cont2 cbox-row clearfix2"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Attributes:</span
																		>
																		<span
																			class="core_names cbox-row-content"
																		></span>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_cross_listed"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Cross Listed
																			Courses:</span
																		>
																		<span
																			class="cbox-row-content cnf_cross_listed_desc"
																		></span>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect selectAllNoneContainer"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Campuses:</span
																		>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="campus_checkboxes clearfix2"
																			><span
																				class="cbox-selitem"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cam_0_029278541719467566"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cam="MCMSTiMCMST"
																						id="cam_0_029278541719467566"
																						class="mdl-checkbox__input cnf_cam_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>McMaster
																						University</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span></label></span
																		></span>
																		<div
																			class="cbox-allnone cnf_campuses_allnone"
																			style="display: none"
																		>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div
																		class="cbox-row noselect"
																		style="display: block"
																	>
																		<span
																			class="cbox-row-title clearfix2"
																			>Session:</span
																		>
																		<div
																			style="clear: left"
																		></div>
																		<select
																			class="cbox-select select_period"
																			role="listbox"
																			aria-label="Period"
																		>
																			<option
																				value=""
																				selected="selected"
																			>
																				All Sessions (1)
																			</option>
																			<option value="2259-1">
																				2025 Fall - Regular
																				Academic
																			</option>
																		</select>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect selectAllNoneContainer cnf_modes"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Include classes that
																			are:</span
																		>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="mode_checkboxes"
																		>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cb_online_2"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="cb_online_2"
																						class="mdl-checkbox__input dynID"
																						checked="checked"
																						aria-label="COMPSCI 2GA3 Computer Architecture" />
																					<span
																						class="cbox-selitem-label"
																						>Online</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</span>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cb_on_camp_2"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="cb_on_camp_2"
																						class="mdl-checkbox__input dynID"
																						checked="checked"
																						aria-label="COMPSCI 2GA3 Computer Architecture" />
																					<span
																						class="cbox-selitem-label"
																						>On
																						Campus</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</span>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cb_lod_2"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="cb_lod_2"
																						class="mdl-checkbox__input dynID"
																						checked="checked"
																						aria-label="COMPSCI 2GA3 Computer Architecture" />
																					<span
																						class="cbox-selitem-label"
																						>Learn on
																						demand</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</span>
																		</span>
																		<div class="cbox-allnone">
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect cnf_classes selectAllNoneContainer"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Classes:</span
																		>
																		<span
																			class="visuallyhidden"
																			aria-label="The following checkboxes allow you to specify which classes you want to allow as possible options for your generated schedule results. If you want to get the detail of each class now, try adding only this course to the list of courses (or deselect every course except this one). This will generate one schedule result for each unique timetable option of this course. By navigating the legend of each schedule result, you will be able to examine the detail of each class of this course."
																		></span>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="class_checkboxes"
																			><span
																				class="cbox-selitem cbox-classitem"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="0-029278541719467566"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="0"
																						id="0-029278541719467566"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT T01<span
																							style="
																								color: #cc0000;
																							"
																						>
																							(Closed)</span
																						><span
																							class="course_state"
																							title=""
																							>Enrolled</span
																						></span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Unpin class"
																				>
																					-
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem cbox-faded"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="1-029278541719467566"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="1"
																						id="1-029278541719467566"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT
																						T02</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down class instead"
																				>
																					+
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem cbox-faded"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="3-029278541719467566"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="3"
																						id="3-029278541719467566"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT
																						T03</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down class instead"
																				>
																					+
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem cbox-faded"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="2-029278541719467566"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="2"
																						id="2-029278541719467566"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT
																						T04</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down class instead"
																				>
																					+
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem cbox-faded"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="4-029278541719467566"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="4"
																						id="4-029278541719467566"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT T05<span
																							style="
																								color: #cc0000;
																							"
																						>
																							(Closed)</span
																						></span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down class instead"
																				>
																					+
																				</div></span
																			></span
																		>
																		<div
																			class="cbox-allnone"
																			style="display: block"
																		>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_subj_note"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Subject Notes:</span
																		>
																		<span
																			class="cbox-row-content cnf_subj_note_desc"
																		></span>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_cattrs"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Course
																			Attributes:</span
																		>
																		<span
																			class="cbox-row-content cnf_cattr"
																		></span>
																	</div>

																	<div
																		class="cnf_custom_attrs"
																		style="display: none"
																	></div>

																	<div
																		class="cbox-row clearfix2 cnf_class_notes"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Class Remarks:</span
																		>
																		<span
																			class="cbox-row-content cnf_class_notes_desc"
																		></span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="requirementDiv2 rbox" style="">
														<h4
															class="visuallyhidden"
															aria-label="Selected course"
														></h4>
														<div
															class="rbox-header"
															style="display: none"
														>
															<div class="rbox-header-cont clearfix2">
																<span class="rbox-wheader">
																	<span
																		class="wildcard-title requirementTitle1"
																		>Subject or Title
																	</span>
																	<span
																		class="wildcard-title requirementTitle2"
																		style="display: none"
																		>Catalog Number:
																	</span>
																	<span
																		class="wildcard-title requirementTitle3"
																		style="display: none"
																		>Attribute:
																	</span>
																</span>
																<div
																	class="clearfix2"
																	style="float: right"
																>
																	<div class="reqInfo">
																		Choose a course from the
																		following list:
																	</div>
																	<div
																		class="optionsSelect"
																	></div>
																</div>
															</div>
														</div>

														<div
															class="cbox-select-wildcard"
															style="display: none"
														>
															<div class="cbox cbox-unlocked bd4">
																<!-- Add 'roomy' to classes to stretch content, 'expanded' to pre-expand -->
																<table
																	style="
																		width: 100%;
																		padding: 0px;
																		border-spacing: 0px;
																	"
																	class="cbox-expand-region"
																>
																	<tbody>
																		<tr>
																			<td>
																				<span
																					class="select-title"
																					><i
																						class="fa fa-exclamation-triangle"
																					></i>
																					Please select a
																					course from the
																					dropdown</span
																				>
																			</td>
																			<td
																				class="cbox-option"
																				style="width: 3%"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID"
																					for="tipTrashWildX_3"
																					data-upgraded=",MaterialTooltip"
																				>
																					Drop this
																					course...
																				</div>
																				<button
																					aria-label="Remove class"
																					class="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipTrashWildX_3"
																					data-upgraded=",MaterialButton"
																					style="
																						cursor: default;
																					"
																					tabindex="0"
																				>
																					<img
																						class="cbox-trash-icon"
																						src="test_loggedin_semesterselected_files/trash.svg"
																						alt="trash can"
																						style="
																							display: inline;
																						"
																					/>
																					<img
																						class="cbox-trash-icon-open"
																						src="test_loggedin_semesterselected_files/trash_open.svg"
																						alt="empty trash can"
																						style="
																							display: none;
																						"
																					/>
																					<i
																						class="fa fa-undo cbox-trash-icon-undo"
																						style="
																							display: none;
																						"
																					></i>
																				</button>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</div>
														<div
															class="cbox-margin"
															style="display: block"
														>
															<div class="cbox-toggle">
																<label
																	class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect dynID is-checked mdl-js-ripple-effect--ignore-events is-upgraded"
																	data-upgraded=",MaterialCheckbox,MaterialRipple"
																>
																	<input
																		type="checkbox"
																		id="cnf_toggle_3"
																		class="mdl-checkbox__input ignore_check dynID"
																		checked="checked"
																		aria-label="COMPSCI 2LC3 Logical Reasoning for Computer Science"
																		style="
																			display: inline-block;
																		" />
																	<span
																		class="mdl-checkbox__focus-helper"
																	></span
																	><span
																		class="mdl-checkbox__box-outline"
																		><span
																			class="mdl-checkbox__tick-outline"
																		></span></span
																	><span
																		class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																		data-upgraded=",MaterialRipple"
																		><span
																			class="mdl-ripple"
																		></span></span
																></label>
															</div>
															<div class="cbox cbox-unlocked bd4">
																<!-- Add 'roomy' to classes to stretch content, 'expanded' to pre-expand -->
																<table
																	style="
																		width: 100%;
																		padding: 0px;
																		border-spacing: 0px;
																	"
																	class="cbox-expand-region"
																>
																	<tbody>
																		<tr>
																			<td
																				class="cbox-codenumber"
																			>
																				<div
																					class="cbox-cn bc4"
																				>
																					COMPSCI<br />2LC3
																				</div>
																			</td>
																			<td class="cbox-header">
																				<div
																					class="mdl-tooltip mdl-tooltip--right dynID"
																					aria-hidden="true"
																					for="tipCourseLinkX_3"
																					data-upgraded=",MaterialTooltip"
																				>
																					Courses with
																					this symbol must
																					be taken
																					together
																				</div>
																				<span
																					class="block_piece_indicator_cont dynID"
																					id="tipCourseLinkX_3"
																					style="
																						display: none;
																					"
																					tabindex="0"
																					><span
																						class="block_piece_indicator"
																						><i
																							class="fas fa-link"
																						></i></span
																				></span>
																				<span
																					class="leftnclear cbox-title"
																					>Logical
																					Reasoning for
																					Computer
																					Science</span
																				>
																				<span
																					class="cnf_req_state"
																					style="
																						display: none;
																					"
																					>Recommended</span
																				>
																				<span
																					class="course_state"
																					style="
																						display: inline;
																					"
																					>Enrolled</span
																				>
																				<span
																					class="leftnclear cbox-subtitle"
																				>
																					<!-- <span class="cnf_consider dynID" id="tipConsiderX">Considering 3 of 5 Classes</span>&nbsp;&nbsp; -->
																					<span
																						class="cnf_campus_info"
																					>
																						&nbsp;
																					</span></span
																				>

																				<span
																					class="cnf_dropdown cbox-dropdown-cont leftnclear"
																					onkeydown="return avoidChange(event);"
																					onkeypress="return avoidChange(event);"
																					onkeyup="return avoidChange(event);"
																					onclick="event.stopPropagation();"
																				>
																					<!-- <div class="dh_locker_hotspot" onclick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));">&nbsp;</div> -->
																					<!-- <img src="images/padlock.gif" style="vertical-align:middle;" class="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor"/> -->
																					<select
																						class="cbox-dropdown dropdownSelect cbox-dropdown-normal"
																						aria-label="Please select a course section from this dropdown.  If selected, course schedules will only be generated containing the selected sections for a given course."
																						style="
																							max-width: 180px;
																						"
																					>
																						<option
																							value="kp_MCMST--2259_3484-3485-"
																							selected="selected"
																						>
																							Stay
																							enrolled
																							in LEC
																							C01 -
																							TUT T01
																						</option>
																						<option
																							value="dp_MCMST--2259_3484-3485-"
																						>
																							Drop
																							Course
																						</option>
																						<option
																							aria-label="Current selection "
																							value="al"
																						>
																							Try all
																							classes
																							(7)
																						</option>
																						<!-- <option value="ig">Ignore this course</option>  -->
																						<option
																							value="ss"
																							class="cnf_specific_option"
																						>
																							Try
																							specific
																							classes
																							(7/7)
																						</option>
																						<option
																							value="us_MCMST--2259_3484-3485-"
																						>
																							LEC C01
																							- TUT
																							T01 or
																							LEC C01
																							- TUT
																							T03
																							(Closed)
																						</option>
																						<option
																							value="us_MCMST--2259_3484-3486-"
																						>
																							LEC C01
																							- TUT
																							T02
																						</option>
																						<option
																							value="us_MCMST--2259_3484-3488-"
																						>
																							LEC C01
																							- TUT
																							T04
																						</option>
																						<option
																							value="us_MCMST--2259_3484-3669-"
																						>
																							LEC C01
																							- TUT
																							T05 or
																							L... LEC
																							C01 -
																							TUT T07
																						</option>
																					</select>

																					<img
																						src="test_loggedin_semesterselected_files/pin.png"
																						style="
																							vertical-align: middle;
																							cursor: pointer;
																							margin: -2px
																								0px;
																						"
																						class="dropdownPinImg"
																						alt="Push Pin"
																						title="Click to unpin course"
																					/>
																					<img
																						src="test_loggedin_semesterselected_files/padlock.gif"
																						style="
																							vertical-align: middle;
																							margin: -2px
																								0px;
																							display: none;
																						"
																						class="dropdownLockImg"
																						alt="Padlock"
																						title="The specific class you are to take for this course has been assigned to you by an advisor"
																					/>
																					<div
																						class="cnf_class_lock_tip mdl-tooltip mdl-tooltip--top dynID"
																						aria-hidden="true"
																						for="tipClsLockX_3"
																						data-upgraded=",MaterialTooltip"
																					>
																						Click to
																						lock this
																						class so
																						that if this
																						schedule is
																						recommended
																						to a
																						student, it
																						will force
																						the student
																						to take the
																						selected
																						class.
																					</div>
																					<button
																						aria-label="lock class"
																						class="class_locker_button mdl-button mdl-js-button mdl-button--icon dynID"
																						id="tipClsLockX_3"
																						onclick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));"
																						style="
																							margin: -6px
																								0px;
																							display: none;
																						"
																						data-upgraded=",MaterialButton"
																						tabindex="0"
																					>
																						<i
																							class="class_unlocked fa fa-unlock-alt"
																							style="
																								display: inline;
																							"
																						></i>
																						<i
																							class="class_locked fa fa-lock"
																							style="
																								display: none;
																							"
																						></i>
																					</button>
																				</span>
																			</td>
																			<td
																				class="cbox-option cnf_lock"
																				style="
																					width: 3%;
																					display: none;
																				"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_locker_tip mdl-tooltip mdl-tooltip--top dynID"
																					for="tipLockX_3"
																					data-upgraded=",MaterialTooltip"
																				>
																					Click to lock
																					this course so
																					that if this
																					schedule is
																					recommended to a
																					student, it will
																					force the
																					student to
																					include this
																					course.
																				</div>
																				<button
																					aria-label="lock course"
																					class="cnf_locker_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipLockX_3"
																					data-upgraded=",MaterialButton"
																					tabindex="0"
																				>
																					<i
																						class="cnf_unlocked fa fa-unlock-alt"
																						style="
																							display: inline;
																						"
																					></i>
																					<i
																						class="cnf_locked fa fa-lock"
																						style="
																							display: none;
																						"
																					></i>
																				</button>
																			</td>
																			<td
																				class="cbox-option"
																				style="width: 3%"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID"
																					for="tipTrashX_3"
																					data-upgraded=",MaterialTooltip"
																				>
																					Drop this
																					course...
																				</div>
																				<button
																					aria-label="Remove course"
																					class="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipTrashX_3"
																					data-upgraded=",MaterialButton"
																					style="
																						cursor: default;
																					"
																					tabindex="0"
																				>
																					<img
																						class="cbox-trash-icon"
																						src="test_loggedin_semesterselected_files/trash.svg"
																						alt="trash can"
																						style="
																							display: inline;
																						"
																					/>
																					<img
																						class="cbox-trash-icon-open"
																						src="test_loggedin_semesterselected_files/trash_open.svg"
																						alt="empty trash can"
																						style="
																							display: none;
																						"
																					/>
																					<i
																						class="fa fa-undo cbox-trash-icon-undo"
																						style="
																							display: none;
																						"
																					></i>
																				</button>
																			</td>
																			<td
																				class="cbox-option cbox-expander"
																				style="width: 3%"
																			>
																				<div
																					class="mdl-tooltip mdl-tooltip--top dynID cnf_tip_expand"
																					for="tipExpandX_3"
																					data-upgraded=",MaterialTooltip"
																				>
																					Expand detail on
																					COMPSCI 2LC3
																				</div>
																				<button
																					aria-label="Expand course detail"
																					class="mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipExpandX_3"
																					data-upgraded=",MaterialButton"
																					tabindex="0"
																				>
																					<i
																						class="far fa-angle-down"
																					></i>
																				</button>
																			</td>
																		</tr>
																	</tbody>
																</table>

																<div
																	class="cbox-expansion"
																	style="display: none"
																>
																	<div
																		class="cbox-row clearfix2 cnf_desc"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Description:</span
																		>
																		<span
																			class="cbox-row-content cnf_desc_desc"
																			>Introduction to logic
																			and proof techniques for
																			practical reasoning:
																			propositional logic,
																			predicate logic,
																			structural induction;
																			rigorous proofs in
																			discrete mathematics and
																			programming.<br />Three
																			lectures, one tutorial
																			(two hours); first term;
																			may be offered also in
																			the second term<br />Prerequisite(s):
																			COMPSCI 1DM3, 1JC3; one
																			of COMPSCI 1MD3, 1XC3,
																			1XD3, MATH 1MP3 and
																			registration in any
																			Computer Science program
																			(see Department Note 3
																			in the course listing)
																			or in the Minor in
																			Computer Science.<br />Antirequisite(s):
																			COMPSCI 2DM3, SFWRENG
																			2DM3</span
																		>
																		<div
																			style="clear: both"
																		></div>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_reqs"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Requirements:</span
																		>

																		<span
																			class="cbox-row-content cnf_req"
																			><span
																				class="cbox-row-content cnf_req"
																				>Refer to course
																				Description</span
																			></span
																		>
																	</div>

																	<div
																		class="core_names_cont2 cbox-row clearfix2"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Attributes:</span
																		>
																		<span
																			class="core_names cbox-row-content"
																		></span>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_cross_listed"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Cross Listed
																			Courses:</span
																		>
																		<span
																			class="cbox-row-content cnf_cross_listed_desc"
																		></span>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect selectAllNoneContainer"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Campuses:</span
																		>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="campus_checkboxes clearfix2"
																			><span
																				class="cbox-selitem"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cam_0_06062323597873929"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cam="MCMSTiMCMST"
																						id="cam_0_06062323597873929"
																						class="mdl-checkbox__input cnf_cam_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>McMaster
																						University</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span></label></span
																		></span>
																		<div
																			class="cbox-allnone cnf_campuses_allnone"
																			style="display: none"
																		>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div
																		class="cbox-row noselect"
																		style="display: block"
																	>
																		<span
																			class="cbox-row-title clearfix2"
																			>Session:</span
																		>
																		<div
																			style="clear: left"
																		></div>
																		<select
																			class="cbox-select select_period"
																			role="listbox"
																			aria-label="Period"
																		>
																			<option
																				value=""
																				selected="selected"
																			>
																				All Sessions (1)
																			</option>
																			<option value="2259-1">
																				2025 Fall - Regular
																				Academic
																			</option>
																		</select>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect selectAllNoneContainer cnf_modes"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Include classes that
																			are:</span
																		>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="mode_checkboxes"
																		>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cb_online_3"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="cb_online_3"
																						class="mdl-checkbox__input dynID"
																						checked="checked"
																						aria-label="COMPSCI 2LC3 Logical Reasoning for Computer Science" />
																					<span
																						class="cbox-selitem-label"
																						>Online</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</span>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cb_on_camp_3"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="cb_on_camp_3"
																						class="mdl-checkbox__input dynID"
																						checked="checked"
																						aria-label="COMPSCI 2LC3 Logical Reasoning for Computer Science" />
																					<span
																						class="cbox-selitem-label"
																						>On
																						Campus</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</span>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cb_lod_3"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="cb_lod_3"
																						class="mdl-checkbox__input dynID"
																						checked="checked"
																						aria-label="COMPSCI 2LC3 Logical Reasoning for Computer Science" />
																					<span
																						class="cbox-selitem-label"
																						>Learn on
																						demand</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</span>
																		</span>
																		<div class="cbox-allnone">
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect cnf_classes selectAllNoneContainer"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Classes:</span
																		>
																		<span
																			class="visuallyhidden"
																			aria-label="The following checkboxes allow you to specify which classes you want to allow as possible options for your generated schedule results. If you want to get the detail of each class now, try adding only this course to the list of courses (or deselect every course except this one). This will generate one schedule result for each unique timetable option of this course. By navigating the legend of each schedule result, you will be able to examine the detail of each class of this course."
																		></span>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="class_checkboxes"
																			><span
																				class="cbox-selitem cbox-classitem"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="0-06062323597873929"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="0"
																						id="0-06062323597873929"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT T01<span
																							style="
																								color: #cc0000;
																							"
																						>
																							(Closed)</span
																						><span
																							class="course_state"
																							title=""
																							>Enrolled</span
																						></span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Unpin classes at this meeting time"
																				>
																					-
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem cbox-faded"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="2-06062323597873929"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="2"
																						id="2-06062323597873929"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT
																						T02</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down classes at this meeting time instead"
																				>
																					+
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem cbox-faded"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="1-06062323597873929"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="1"
																						id="1-06062323597873929"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT T03<span
																							style="
																								color: #cc0000;
																							"
																						>
																							(Closed)</span
																						></span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Unpin classes at this meeting time"
																				>
																					-
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem cbox-faded"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="3-06062323597873929"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="3"
																						id="3-06062323597873929"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT
																						T04</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down classes at this meeting time instead"
																				>
																					+
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem cbox-faded"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="4-06062323597873929"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="4"
																						id="4-06062323597873929"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT
																						T05</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down classes at this meeting time instead"
																				>
																					+
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem cbox-faded"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="5-06062323597873929"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="5"
																						id="5-06062323597873929"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT
																						T06</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down classes at this meeting time instead"
																				>
																					+
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem cbox-faded"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="6-06062323597873929"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="6"
																						id="6-06062323597873929"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT
																						T07</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down classes at this meeting time instead"
																				>
																					+
																				</div></span
																			></span
																		>
																		<div
																			class="cbox-allnone"
																			style="display: block"
																		>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_subj_note"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Subject Notes:</span
																		>
																		<span
																			class="cbox-row-content cnf_subj_note_desc"
																		></span>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_cattrs"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Course
																			Attributes:</span
																		>
																		<span
																			class="cbox-row-content cnf_cattr"
																		></span>
																	</div>

																	<div
																		class="cnf_custom_attrs"
																		style="display: none"
																	></div>

																	<div
																		class="cbox-row clearfix2 cnf_class_notes"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Class Remarks:</span
																		>
																		<span
																			class="cbox-row-content cnf_class_notes_desc"
																		></span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="requirementDiv2 rbox" style="">
														<h4
															class="visuallyhidden"
															aria-label="Selected course"
														></h4>
														<div
															class="rbox-header"
															style="display: none"
														>
															<div class="rbox-header-cont clearfix2">
																<span class="rbox-wheader">
																	<span
																		class="wildcard-title requirementTitle1"
																		>Subject or Title
																	</span>
																	<span
																		class="wildcard-title requirementTitle2"
																		style="display: none"
																		>Catalog Number:
																	</span>
																	<span
																		class="wildcard-title requirementTitle3"
																		style="display: none"
																		>Attribute:
																	</span>
																</span>
																<div
																	class="clearfix2"
																	style="float: right"
																>
																	<div class="reqInfo">
																		Choose a course from the
																		following list:
																	</div>
																	<div
																		class="optionsSelect"
																	></div>
																</div>
															</div>
														</div>

														<div
															class="cbox-select-wildcard"
															style="display: none"
														>
															<div class="cbox cbox-unlocked bd5">
																<!-- Add 'roomy' to classes to stretch content, 'expanded' to pre-expand -->
																<table
																	style="
																		width: 100%;
																		padding: 0px;
																		border-spacing: 0px;
																	"
																	class="cbox-expand-region"
																>
																	<tbody>
																		<tr>
																			<td>
																				<span
																					class="select-title"
																					><i
																						class="fa fa-exclamation-triangle"
																					></i>
																					Please select a
																					course from the
																					dropdown</span
																				>
																			</td>
																			<td
																				class="cbox-option"
																				style="width: 3%"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID"
																					for="tipTrashWildX_4"
																					data-upgraded=",MaterialTooltip"
																				>
																					Drop this
																					course...
																				</div>
																				<button
																					aria-label="Remove class"
																					class="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipTrashWildX_4"
																					data-upgraded=",MaterialButton"
																					style="
																						cursor: default;
																					"
																					tabindex="0"
																				>
																					<img
																						class="cbox-trash-icon"
																						src="test_loggedin_semesterselected_files/trash.svg"
																						alt="trash can"
																						style="
																							display: inline;
																						"
																					/>
																					<img
																						class="cbox-trash-icon-open"
																						src="test_loggedin_semesterselected_files/trash_open.svg"
																						alt="empty trash can"
																						style="
																							display: none;
																						"
																					/>
																					<i
																						class="fa fa-undo cbox-trash-icon-undo"
																						style="
																							display: none;
																						"
																					></i>
																				</button>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</div>
														<div
															class="cbox-margin"
															style="display: block"
														>
															<div class="cbox-toggle">
																<label
																	class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect dynID is-checked mdl-js-ripple-effect--ignore-events is-upgraded"
																	data-upgraded=",MaterialCheckbox,MaterialRipple"
																>
																	<input
																		type="checkbox"
																		id="cnf_toggle_4"
																		class="mdl-checkbox__input ignore_check dynID"
																		checked="checked"
																		aria-label="COMPSCI 2ME3 Introduction to Software Development"
																		style="
																			display: inline-block;
																		" />
																	<span
																		class="mdl-checkbox__focus-helper"
																	></span
																	><span
																		class="mdl-checkbox__box-outline"
																		><span
																			class="mdl-checkbox__tick-outline"
																		></span></span
																	><span
																		class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																		data-upgraded=",MaterialRipple"
																		><span
																			class="mdl-ripple"
																		></span></span
																></label>
															</div>
															<div class="cbox cbox-unlocked bd5">
																<!-- Add 'roomy' to classes to stretch content, 'expanded' to pre-expand -->
																<table
																	style="
																		width: 100%;
																		padding: 0px;
																		border-spacing: 0px;
																	"
																	class="cbox-expand-region"
																>
																	<tbody>
																		<tr>
																			<td
																				class="cbox-codenumber"
																			>
																				<div
																					class="cbox-cn bc5"
																				>
																					COMPSCI<br />2ME3
																				</div>
																			</td>
																			<td class="cbox-header">
																				<div
																					class="mdl-tooltip mdl-tooltip--right dynID"
																					aria-hidden="true"
																					for="tipCourseLinkX_4"
																					data-upgraded=",MaterialTooltip"
																				>
																					Courses with
																					this symbol must
																					be taken
																					together
																				</div>
																				<span
																					class="block_piece_indicator_cont dynID"
																					id="tipCourseLinkX_4"
																					style="
																						display: none;
																					"
																					tabindex="0"
																					><span
																						class="block_piece_indicator"
																						><i
																							class="fas fa-link"
																						></i></span
																				></span>
																				<span
																					class="leftnclear cbox-title"
																					>Introduction to
																					Software
																					Development</span
																				>
																				<span
																					class="cnf_req_state"
																					style="
																						display: none;
																					"
																					>Recommended</span
																				>
																				<span
																					class="course_state"
																					style="
																						display: inline;
																					"
																					>Enrolled</span
																				>
																				<span
																					class="leftnclear cbox-subtitle"
																				>
																					<!-- <span class="cnf_consider dynID" id="tipConsiderX">Considering 3 of 5 Classes</span>&nbsp;&nbsp; -->
																					<span
																						class="cnf_campus_info"
																					>
																						&nbsp;
																					</span></span
																				>

																				<span
																					class="cnf_dropdown cbox-dropdown-cont leftnclear"
																					onkeydown="return avoidChange(event);"
																					onkeypress="return avoidChange(event);"
																					onkeyup="return avoidChange(event);"
																					onclick="event.stopPropagation();"
																				>
																					<!-- <div class="dh_locker_hotspot" onclick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));">&nbsp;</div> -->
																					<!-- <img src="images/padlock.gif" style="vertical-align:middle;" class="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor"/> -->
																					<select
																						class="cbox-dropdown dropdownSelect cbox-dropdown-normal"
																						aria-label="Please select a course section from this dropdown.  If selected, course schedules will only be generated containing the selected sections for a given course."
																						style="
																							max-width: 180px;
																						"
																					>
																						<option
																							value="kp_MCMST--2259_3489-3490-"
																							selected="selected"
																						>
																							Stay
																							enrolled
																							in LEC
																							C01 -
																							TUT T01
																						</option>
																						<option
																							value="dp_MCMST--2259_3489-3490-"
																						>
																							Drop
																							Course
																						</option>
																						<option
																							aria-label="Current selection "
																							value="al"
																						>
																							Try all
																							classes
																							(5)
																						</option>
																						<!-- <option value="ig">Ignore this course</option>  -->
																						<option
																							value="ss"
																							class="cnf_specific_option"
																						>
																							Try
																							specific
																							classes
																							(5/5)
																						</option>
																						<option
																							value="us_MCMST--2259_3489-3490-"
																						>
																							LEC C01
																							- TUT
																							T01 or
																							LEC C01
																							- TUT
																							T02
																						</option>
																						<option
																							value="us_MCMST--2259_3489-3670-"
																						>
																							LEC C01
																							- TUT
																							T03
																						</option>
																						<option
																							value="us_MCMST--2259_3489-3783-"
																						>
																							LEC C01
																							- TUT
																							T04 or
																							LEC C01
																							- TUT
																							T05
																						</option>
																					</select>

																					<img
																						src="test_loggedin_semesterselected_files/pin.png"
																						style="
																							vertical-align: middle;
																							cursor: pointer;
																							margin: -2px
																								0px;
																						"
																						class="dropdownPinImg"
																						alt="Push Pin"
																						title="Click to unpin course"
																					/>
																					<img
																						src="test_loggedin_semesterselected_files/padlock.gif"
																						style="
																							vertical-align: middle;
																							margin: -2px
																								0px;
																							display: none;
																						"
																						class="dropdownLockImg"
																						alt="Padlock"
																						title="The specific class you are to take for this course has been assigned to you by an advisor"
																					/>
																					<div
																						class="cnf_class_lock_tip mdl-tooltip mdl-tooltip--top dynID"
																						aria-hidden="true"
																						for="tipClsLockX_4"
																						data-upgraded=",MaterialTooltip"
																					>
																						Click to
																						lock this
																						class so
																						that if this
																						schedule is
																						recommended
																						to a
																						student, it
																						will force
																						the student
																						to take the
																						selected
																						class.
																					</div>
																					<button
																						aria-label="lock class"
																						class="class_locker_button mdl-button mdl-js-button mdl-button--icon dynID"
																						id="tipClsLockX_4"
																						onclick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));"
																						style="
																							margin: -6px
																								0px;
																							display: none;
																						"
																						data-upgraded=",MaterialButton"
																						tabindex="0"
																					>
																						<i
																							class="class_unlocked fa fa-unlock-alt"
																							style="
																								display: inline;
																							"
																						></i>
																						<i
																							class="class_locked fa fa-lock"
																							style="
																								display: none;
																							"
																						></i>
																					</button>
																				</span>
																			</td>
																			<td
																				class="cbox-option cnf_lock"
																				style="
																					width: 3%;
																					display: none;
																				"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_locker_tip mdl-tooltip mdl-tooltip--top dynID"
																					for="tipLockX_4"
																					data-upgraded=",MaterialTooltip"
																				>
																					Click to lock
																					this course so
																					that if this
																					schedule is
																					recommended to a
																					student, it will
																					force the
																					student to
																					include this
																					course.
																				</div>
																				<button
																					aria-label="lock course"
																					class="cnf_locker_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipLockX_4"
																					data-upgraded=",MaterialButton"
																					tabindex="0"
																				>
																					<i
																						class="cnf_unlocked fa fa-unlock-alt"
																						style="
																							display: inline;
																						"
																					></i>
																					<i
																						class="cnf_locked fa fa-lock"
																						style="
																							display: none;
																						"
																					></i>
																				</button>
																			</td>
																			<td
																				class="cbox-option"
																				style="width: 3%"
																				onclick="event.stopPropagation();"
																			>
																				<div
																					class="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID"
																					for="tipTrashX_4"
																					data-upgraded=",MaterialTooltip"
																				>
																					Drop this
																					course...
																				</div>
																				<button
																					aria-label="Remove course"
																					class="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipTrashX_4"
																					data-upgraded=",MaterialButton"
																					style="
																						cursor: default;
																					"
																					tabindex="0"
																				>
																					<img
																						class="cbox-trash-icon"
																						src="test_loggedin_semesterselected_files/trash.svg"
																						alt="trash can"
																						style="
																							display: inline;
																						"
																					/>
																					<img
																						class="cbox-trash-icon-open"
																						src="test_loggedin_semesterselected_files/trash_open.svg"
																						alt="empty trash can"
																						style="
																							display: none;
																						"
																					/>
																					<i
																						class="fa fa-undo cbox-trash-icon-undo"
																						style="
																							display: none;
																						"
																					></i>
																				</button>
																			</td>
																			<td
																				class="cbox-option cbox-expander"
																				style="width: 3%"
																			>
																				<div
																					class="mdl-tooltip mdl-tooltip--top dynID cnf_tip_expand"
																					for="tipExpandX_4"
																					data-upgraded=",MaterialTooltip"
																				>
																					Expand detail on
																					COMPSCI 2ME3
																				</div>
																				<button
																					aria-label="Expand course detail"
																					class="mdl-button mdl-js-button mdl-button--icon dynID"
																					id="tipExpandX_4"
																					data-upgraded=",MaterialButton"
																					tabindex="0"
																				>
																					<i
																						class="far fa-angle-down"
																					></i>
																				</button>
																			</td>
																		</tr>
																	</tbody>
																</table>

																<div
																	class="cbox-expansion"
																	style="display: none"
																>
																	<div
																		class="cbox-row clearfix2 cnf_desc"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Description:</span
																		>
																		<span
																			class="cbox-row-content cnf_desc_desc"
																			>Classes and
																			inheritance, class
																			invariants, interface
																			specifications;
																			object-oriented design
																			patterns; exception
																			handling; tools for
																			interface documentation,
																			testing, program
																			analysis; requirements
																			documentation; quality
																			attributes; development
																			models.<br />Three
																			lectures one tutorial
																			(two hours); first term;
																			may be offered also in
																			the second term<br />Prerequisite(s):
																			<br />
																			• COMPSCI 1XC3 or 1XD3,
																			and registration in any
																			Computer Science program
																			(see Department Note 3
																			in the course listing)
																			or in the Minor in
																			Computer Science<br />Co-requisite(s):
																			COMPSCI 2LC3<br />Antirequisite(s):
																			SFWRENG 2AA4, SFWRENG
																			3K04, MECHTRON
																			3K04</span
																		>
																		<div
																			style="clear: both"
																		></div>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_reqs"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Requirements:</span
																		>

																		<span
																			class="cbox-row-content cnf_req"
																			><span
																				class="cbox-row-content cnf_req"
																				>Refer to course
																				Description</span
																			></span
																		>
																	</div>

																	<div
																		class="core_names_cont2 cbox-row clearfix2"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Attributes:</span
																		>
																		<span
																			class="core_names cbox-row-content"
																		></span>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_cross_listed"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Cross Listed
																			Courses:</span
																		>
																		<span
																			class="cbox-row-content cnf_cross_listed_desc"
																		></span>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect selectAllNoneContainer"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Campuses:</span
																		>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="campus_checkboxes clearfix2"
																			><span
																				class="cbox-selitem"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cam_0_040005670398627335"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cam="MCMSTiMCMST"
																						id="cam_0_040005670398627335"
																						class="mdl-checkbox__input cnf_cam_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>McMaster
																						University</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span></label></span
																		></span>
																		<div
																			class="cbox-allnone cnf_campuses_allnone"
																			style="display: none"
																		>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div
																		class="cbox-row noselect"
																		style="display: block"
																	>
																		<span
																			class="cbox-row-title clearfix2"
																			>Session:</span
																		>
																		<div
																			style="clear: left"
																		></div>
																		<select
																			class="cbox-select select_period"
																			role="listbox"
																			aria-label="Period"
																		>
																			<option
																				value=""
																				selected="selected"
																			>
																				All Sessions (1)
																			</option>
																			<option value="2259-1">
																				2025 Fall - Regular
																				Academic
																			</option>
																		</select>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect selectAllNoneContainer cnf_modes"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Include classes that
																			are:</span
																		>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="mode_checkboxes"
																		>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cb_online_4"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="cb_online_4"
																						class="mdl-checkbox__input dynID"
																						checked="checked"
																						aria-label="COMPSCI 2ME3 Introduction to Software Development" />
																					<span
																						class="cbox-selitem-label"
																						>Online</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</span>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cb_on_camp_4"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="cb_on_camp_4"
																						class="mdl-checkbox__input dynID"
																						checked="checked"
																						aria-label="COMPSCI 2ME3 Introduction to Software Development" />
																					<span
																						class="cbox-selitem-label"
																						>On
																						Campus</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</span>
																			<span
																				class="cbox-selitem"
																			>
																				<label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="cb_lod_4"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																				>
																					<input
																						type="checkbox"
																						id="cb_lod_4"
																						class="mdl-checkbox__input dynID"
																						checked="checked"
																						aria-label="COMPSCI 2ME3 Introduction to Software Development" />
																					<span
																						class="cbox-selitem-label"
																						>Learn on
																						demand</span
																					>
																					<span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																			</span>
																		</span>
																		<div class="cbox-allnone">
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div
																		class="cbox-row clearfix2 noselect cnf_classes selectAllNoneContainer"
																		style="display: block"
																	>
																		<span class="cbox-row-title"
																			>Classes:</span
																		>
																		<span
																			class="visuallyhidden"
																			aria-label="The following checkboxes allow you to specify which classes you want to allow as possible options for your generated schedule results. If you want to get the detail of each class now, try adding only this course to the list of courses (or deselect every course except this one). This will generate one schedule result for each unique timetable option of this course. By navigating the legend of each schedule result, you will be able to examine the detail of each class of this course."
																		></span>
																		<div
																			style="clear: both"
																		></div>
																		<span
																			class="class_checkboxes"
																			><span
																				class="cbox-selitem cbox-classitem"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="0-040005670398627335"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="0"
																						id="0-040005670398627335"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT T01<span
																							style="
																								color: #cc0000;
																							"
																						>
																							(Closed)</span
																						><span
																							class="course_state"
																							title=""
																							>Enrolled</span
																						></span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Unpin classes at this meeting time"
																				>
																					-
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem cbox-faded"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="1-040005670398627335"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="1"
																						id="1-040005670398627335"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT
																						T02</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Unpin classes at this meeting time"
																				>
																					-
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem cbox-faded"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="2-040005670398627335"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="2"
																						id="2-040005670398627335"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT
																						T03</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down classes at this meeting time instead"
																				>
																					+
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem cbox-faded"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="3-040005670398627335"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="3"
																						id="3-040005670398627335"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT
																						T04</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down classes at this meeting time instead"
																				>
																					+
																				</div></span
																			><span
																				class="cbox-selitem cbox-classitem cbox-faded"
																				><label
																					class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																					for="4-040005670398627335"
																					data-upgraded=",MaterialCheckbox,MaterialRipple"
																					><input
																						type="checkbox"
																						data-cfsi="4"
																						id="4-040005670398627335"
																						class="mdl-checkbox__input class_chk"
																						checked="checked" /><span
																						class="cbox-selitem-label"
																						>LEC C01 -
																						TUT
																						T05</span
																					><span
																						class="mdl-checkbox__focus-helper"
																					></span
																					><span
																						class="mdl-checkbox__box-outline"
																						><span
																							class="mdl-checkbox__tick-outline"
																						></span></span
																					><span
																						class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																						data-upgraded=",MaterialRipple"
																						><span
																							class="mdl-ripple"
																						></span></span
																				></label>
																				<div
																					class="cbox-hover-pin"
																					title="Pin down classes at this meeting time instead"
																				>
																					+
																				</div></span
																			></span
																		>
																		<div
																			class="cbox-allnone"
																			style="display: block"
																		>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectAll"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select All<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																			<button
																				class="mdl-button mdl-js-button mdl-js-ripple-effect selectNone"
																				data-upgraded=",MaterialButton,MaterialRipple"
																			>
																				Select None<span
																					class="mdl-button__ripple-container"
																					><span
																						class="mdl-ripple"
																					></span
																				></span>
																			</button>
																		</div>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_subj_note"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Subject Notes:</span
																		>
																		<span
																			class="cbox-row-content cnf_subj_note_desc"
																		></span>
																	</div>

																	<div
																		class="cbox-row clearfix2 cnf_cattrs"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Course
																			Attributes:</span
																		>
																		<span
																			class="cbox-row-content cnf_cattr"
																		></span>
																	</div>

																	<div
																		class="cnf_custom_attrs"
																		style="display: none"
																	></div>

																	<div
																		class="cbox-row clearfix2 cnf_class_notes"
																		style="display: none"
																	>
																		<span class="cbox-row-title"
																			>Class Remarks:</span
																		>
																		<span
																			class="cbox-row-content cnf_class_notes_desc"
																		></span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div class="reg_generate">
													<input
														title=""
														class="big_button"
														type="button"
														name="do_search"
														value="Generate Schedules"
														onclick="UU.caseViewResults();"
														id="do_search"
													/>

													<div
														style="margin-top: 9px; position: relative"
													>
														<div
															class="bubble"
															id="step3bubble"
															style="display: none"
														>
															<div class="tip_top">
																<i class="fa fa-caret-up"></i>
															</div>
															<img
																src="test_loggedin_semesterselected_files/step_arrow_north.png"
																alt="Up arrow for step instructions"
																class="pull-right phone step_arrow"
															/>
															<div class="bubbletitle hide50">
																Step<span class="bubbleNb3">3</span>
															</div>
															Once the desired courses are listed,
															click the 'Generate Schedules' button.
															<div class="clearfix"></div>
														</div>
													</div>
												</div>

												<div class="bottomAdvice noprint"></div>

												<div
													class="enrollmentEncouragement noprint"
													style="display: none"
												></div>

												<div class="bottomLinks noprint">
													<a
														href="javascript:void(0);"
														onclick="custReturnToStudentCentre();"
														id="linkReturnToStudentCentre"
														style="display: none"
													>
														<img
															id="return_icon"
															src="test_loggedin_semesterselected_files/return.gif"
															style="vertical-align: middle"
															alt="Return icon"
														/>
														Return to Student Center</a
													>
													<a
														class="hideIfDisableCart disable-get-schedule"
														href="javascript:void(0);"
														onclick="custViewMyShoppingCart();"
														style="display: none"
													>
														<img
															id="schedule_icon"
															src="test_loggedin_semesterselected_files/cart.gif"
															style="vertical-align: middle"
															alt="Cart icon"
														/>
														View My Shopping Cart</a
													>
												</div>

												<div class="bottomLinks noprint hide50">
													<a
														href="javascript:void(0)"
														onclick="clearSearch();"
														title="Reset the contents on this page"
													>
														<img
															src="test_loggedin_semesterselected_files/broom.png"
															style="vertical-align: middle"
															height="18"
															width="18"
															alt="Clear search icon"
														/>
														Start Over</a
													>
												</div>
												<div>
													<span class="fullscreen-results-total-schedules"
														>2 Schedule Results</span
													>
												</div>
												<button
													class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent welcome-search-continue"
													onclick="PAGES.exitFullScreenSearch()"
													data-upgraded=",MaterialButton,MaterialRipple"
												>
													View Schedules
													<span class="mdl-button__ripple-container"
														><span class="mdl-ripple"></span
													></span>
												</button>
											</div>

											<div
												class="full_page_content"
												id="tab_search"
												style="
													display: none;
													opacity: 1;
													width: auto;
													position: relative;
												"
											>
												<div>
													<button
														class="mdl-button mdl-js-button mdl-js-ripple-effect search-back-button"
														onclick="RR.changeSelCourseTab('tab_selected');"
														data-upgraded=",MaterialButton,MaterialRipple"
													>
														Back
														<span class="mdl-button__ripple-container"
															><span class="mdl-ripple"></span
														></span>
													</button>
												</div>
												<div class="select-course-title">
													Advanced Course Search
												</div>
												<div class="tab_container">
													<div class="tab_content">
														<div id="advanced_search_html">
															<div class="course-browsing">
																<div class="course-browsing-search">
																	<table role="presentation">
																		<tbody>
																			<tr>
																				<td colspan="2">
																					<div
																						class="cb_filter_row clearfix2"
																					>
																						<div
																							class="cb_filter_text"
																						>
																							Courses
																							available
																							online
																							only
																						</div>
																						<div
																							class="cb_filter_switch mdl-switch-nvda-fix"
																						>
																							<label
																								class="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded"
																								for="cb_online_only"
																								data-upgraded=",MaterialSwitch,MaterialRipple"
																							>
																								<span
																									class="mdl-switch__label visuallyhidden"
																									>Courses
																									available
																									online
																									only</span
																								>
																								<input
																									id="cb_online_only"
																									type="checkbox"
																									class="mdl-switch__input" />
																								<div
																									class="mdl-switch__track"
																								></div>
																								<div
																									class="mdl-switch__thumb"
																								>
																									<span
																										class="mdl-switch__focus-helper"
																									></span>
																								</div>
																								<span
																									class="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																									data-upgraded=",MaterialRipple"
																									><span
																										class="mdl-ripple"
																									></span></span
																							></label>
																						</div>
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td colspan="2">
																					<div
																						class="cb_filter_row clearfix2"
																					>
																						<div
																							class="cb_filter_text"
																						>
																							Courses
																							on-campus
																							only
																						</div>
																						<div
																							class="cb_filter_switch mdl-switch-nvda-fix"
																						>
																							<label
																								class="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded"
																								for="cb_oncampus_only"
																								data-upgraded=",MaterialSwitch,MaterialRipple"
																							>
																								<span
																									class="mdl-switch__label visuallyhidden"
																									>Courses
																									on-campus
																									only</span
																								>
																								<input
																									id="cb_oncampus_only"
																									type="checkbox"
																									class="mdl-switch__input" />
																								<div
																									class="mdl-switch__track"
																								></div>
																								<div
																									class="mdl-switch__thumb"
																								>
																									<span
																										class="mdl-switch__focus-helper"
																									></span>
																								</div>
																								<span
																									class="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																									data-upgraded=",MaterialRipple"
																									><span
																										class="mdl-ripple"
																									></span></span
																							></label>
																						</div>
																					</div>
																				</td>
																			</tr>
																			<tr
																				id="cb_acad_career_row"
																			>
																				<th>
																					Academic Career:
																				</th>
																				<td>
																					<select
																						id="cb_acad_career"
																						role="listbox"
																						aria-label="Academic career"
																					>
																						<option
																							value=""
																							label=""
																							selected="selected"
																						></option>
																						<!-- Filled by writeObjectIntoSelect -->
																					</select>
																				</td>
																			</tr>
																			<tr
																				id="cb_course_external_subject_row"
																			>
																				<th>
																					Course Subject:
																				</th>
																				<td>
																					<select
																						id="cb_course_external_subject"
																						role="listbox"
																						aria-label="Course Subject"
																					>
																						<option
																							value=""
																							label=""
																							selected="selected"
																						></option>
																						<!-- Filled by writeObjectIntoSelect -->
																					</select>
																				</td>
																			</tr>
																			<tr>
																				<th>
																					Academic Group:
																				</th>
																				<td>
																					<select
																						id="cb_academic_group"
																						role="listbox"
																						aria-label="Academic Group"
																					>
																						<option
																							value=""
																							label=""
																							selected="selected"
																						></option>
																						<!-- Filled by writeObjectIntoSelect -->
																					</select>
																				</td>
																			</tr>
																			<tr
																				id="cb_course_attribute_row"
																			>
																				<th>
																					Course
																					Attribute:
																				</th>
																				<td>
																					<select
																						id="cb_course_attribute"
																						role="listbox"
																						required=""
																						aria-label="Course Attribute"
																					>
																						<option
																							value=""
																							selected="selected"
																						></option>
																						<!-- Filled by writeObjectIntoSelect -->
																					</select>
																				</td>
																			</tr>
																			<tr>
																				<th
																					id="cb_course_attribute_label1"
																				>
																					Course Attribute
																					Value:
																				</th>
																				<td>
																					<select
																						id="cb_course_attribute_value"
																						role="listbox"
																						aria-label="Attribute Value"
																					>
																						<option
																							value=""
																							label=""
																							selected="selected"
																						></option>
																					</select>
																				</td>
																			</tr>
																			<tr
																				id="cb_requirement_designation_row"
																			>
																				<th>
																					Requirement
																					Designation:
																				</th>
																				<td>
																					<select
																						id="cb_requirement_designation"
																						role="listbox"
																						aria-label="Requirement Designation"
																					>
																						<option
																							value=""
																							selected="selected"
																						>
																							All
																							Requirement
																							Designation
																						</option>
																						<!-- Filled by writeObjectIntoSelect -->
																					</select>
																				</td>
																			</tr>
																			<tr id="cb_session_row">
																				<th>Session:</th>
																				<td>
																					<select
																						id="cb_session"
																						role="listbox"
																						aria-label="Period"
																					>
																						<option
																							value=""
																							label=""
																							selected="selected"
																						></option>
																						<!-- Filled by writeObjectIntoSelect -->
																					</select>
																				</td>
																			</tr>
																			<tr
																				id="cb_class_day_row"
																				title="Indicate the days you're available. The course must contain at least one class that occurs within the given day(s)."
																			>
																				<th>
																					Days Permitted:
																				</th>
																				<td
																					class="cb_day_checkboxes"
																				>
																					<span
																						class="cb_sel_item"
																					>
																						<label
																							class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																							data-upgraded=",MaterialCheckbox,MaterialRipple"
																						>
																							<input
																								class="mdl-checkbox__input class_chk"
																								type="checkbox"
																								name="classDay"
																								value="1"
																								checked="checked" /><span
																								class="cbox-selitem-label"
																								>Sun</span
																							>
																							<span
																								class="mdl-checkbox__focus-helper"
																							></span
																							><span
																								class="mdl-checkbox__box-outline"
																								><span
																									class="mdl-checkbox__tick-outline"
																								></span></span
																							><span
																								class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																								data-upgraded=",MaterialRipple"
																								><span
																									class="mdl-ripple"
																								></span></span
																						></label>
																					</span>
																					<span
																						class="cb_sel_item"
																					>
																						<label
																							class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																							data-upgraded=",MaterialCheckbox,MaterialRipple"
																						>
																							<input
																								class="mdl-checkbox__input class_chk"
																								type="checkbox"
																								name="classDay"
																								value="2"
																								checked="checked" /><span
																								class="cbox-selitem-label"
																								>Mon</span
																							>
																							<span
																								class="mdl-checkbox__focus-helper"
																							></span
																							><span
																								class="mdl-checkbox__box-outline"
																								><span
																									class="mdl-checkbox__tick-outline"
																								></span></span
																							><span
																								class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																								data-upgraded=",MaterialRipple"
																								><span
																									class="mdl-ripple"
																								></span></span
																						></label>
																					</span>
																					<span
																						class="cb_sel_item"
																					>
																						<label
																							class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																							data-upgraded=",MaterialCheckbox,MaterialRipple"
																						>
																							<input
																								class="mdl-checkbox__input class_chk"
																								type="checkbox"
																								name="classDay"
																								value="3"
																								checked="checked" /><span
																								class="cbox-selitem-label"
																								>Tues</span
																							>
																							<span
																								class="mdl-checkbox__focus-helper"
																							></span
																							><span
																								class="mdl-checkbox__box-outline"
																								><span
																									class="mdl-checkbox__tick-outline"
																								></span></span
																							><span
																								class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																								data-upgraded=",MaterialRipple"
																								><span
																									class="mdl-ripple"
																								></span></span
																						></label>
																					</span>
																					<span
																						class="cb_sel_item"
																					>
																						<label
																							class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																							data-upgraded=",MaterialCheckbox,MaterialRipple"
																						>
																							<input
																								class="mdl-checkbox__input class_chk"
																								type="checkbox"
																								name="classDay"
																								value="4"
																								checked="checked" /><span
																								class="cbox-selitem-label"
																								>Wed</span
																							>
																							<span
																								class="mdl-checkbox__focus-helper"
																							></span
																							><span
																								class="mdl-checkbox__box-outline"
																								><span
																									class="mdl-checkbox__tick-outline"
																								></span></span
																							><span
																								class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																								data-upgraded=",MaterialRipple"
																								><span
																									class="mdl-ripple"
																								></span></span
																						></label>
																					</span>
																					<span
																						class="cb_sel_item"
																					>
																						<label
																							class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																							data-upgraded=",MaterialCheckbox,MaterialRipple"
																						>
																							<input
																								class="mdl-checkbox__input class_chk"
																								type="checkbox"
																								name="classDay"
																								value="5"
																								checked="checked" /><span
																								class="cbox-selitem-label"
																								>Thurs</span
																							>
																							<span
																								class="mdl-checkbox__focus-helper"
																							></span
																							><span
																								class="mdl-checkbox__box-outline"
																								><span
																									class="mdl-checkbox__tick-outline"
																								></span></span
																							><span
																								class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																								data-upgraded=",MaterialRipple"
																								><span
																									class="mdl-ripple"
																								></span></span
																						></label>
																					</span>
																					<span
																						class="cb_sel_item"
																					>
																						<label
																							class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																							data-upgraded=",MaterialCheckbox,MaterialRipple"
																						>
																							<input
																								class="mdl-checkbox__input class_chk"
																								type="checkbox"
																								name="classDay"
																								value="6"
																								checked="checked" /><span
																								class="cbox-selitem-label"
																								>Fri</span
																							>
																							<span
																								class="mdl-checkbox__focus-helper"
																							></span
																							><span
																								class="mdl-checkbox__box-outline"
																								><span
																									class="mdl-checkbox__tick-outline"
																								></span></span
																							><span
																								class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																								data-upgraded=",MaterialRipple"
																								><span
																									class="mdl-ripple"
																								></span></span
																						></label>
																					</span>
																					<span
																						class="cb_sel_item"
																					>
																						<label
																							class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded"
																							data-upgraded=",MaterialCheckbox,MaterialRipple"
																						>
																							<input
																								class="mdl-checkbox__input class_chk"
																								type="checkbox"
																								name="classDay"
																								value="7"
																								checked="checked" /><span
																								class="cbox-selitem-label"
																								>Sat</span
																							>
																							<span
																								class="mdl-checkbox__focus-helper"
																							></span
																							><span
																								class="mdl-checkbox__box-outline"
																								><span
																									class="mdl-checkbox__tick-outline"
																								></span></span
																							><span
																								class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																								data-upgraded=",MaterialRipple"
																								><span
																									class="mdl-ripple"
																								></span></span
																						></label>
																					</span>
																				</td>
																			</tr>
																			<tr
																				id="cb_class_time_row"
																				title="Indicate the earliest time you're available. The course must contain at least one class that is not scheduled outside the given day(s) and start/end times."
																			>
																				<th>
																					Start After
																					Time:
																				</th>
																				<td>
																					<span
																						class="cb_sel_item"
																					>
																						<select
																							id="cb_startHour"
																							role="listbox"
																							aria-label="Start After Hour"
																						>
																							<option
																								value=""
																								label=""
																								selected="selected"
																							></option>
																							<option
																								value="0"
																								label="0"
																							></option>
																							<option
																								value="1"
																								label="1"
																							></option>
																							<option
																								value="2"
																								label="2"
																							></option>
																							<option
																								value="3"
																								label="3"
																							></option>
																							<option
																								value="4"
																								label="4"
																							></option>
																							<option
																								value="5"
																								label="5"
																							></option>
																							<option
																								value="6"
																								label="6"
																							></option>
																							<option
																								value="7"
																								label="7"
																							></option>
																							<option
																								value="8"
																								label="8"
																							></option>
																							<option
																								value="9"
																								label="9"
																							></option>
																							<option
																								value="10"
																								label="10"
																							></option>
																							<option
																								value="11"
																								label="11"
																							></option>
																							<option
																								value="12"
																								label="12"
																							></option>
																							<option
																								value="13"
																								label="13"
																							></option>
																							<option
																								value="14"
																								label="14"
																							></option>
																							<option
																								value="15"
																								label="15"
																							></option>
																							<option
																								value="16"
																								label="16"
																							></option>
																							<option
																								value="17"
																								label="17"
																							></option>
																							<option
																								value="18"
																								label="18"
																							></option>
																							<option
																								value="19"
																								label="19"
																							></option>
																							<option
																								value="20"
																								label="20"
																							></option>
																							<option
																								value="21"
																								label="21"
																							></option>
																							<option
																								value="22"
																								label="22"
																							></option>
																							<option
																								value="23"
																								label="23"
																							></option>
																						</select>
																					</span>
																					:
																					<span
																						class="cb_sel_item"
																					>
																						<select
																							id="cb_startMin"
																							role="listbox"
																							aria-label="Start After Minute"
																						>
																							<option
																								value="0"
																								label="00"
																								selected="selected"
																							></option>
																							<option
																								value="15"
																								label="15"
																							></option>
																							<option
																								value="30"
																								label="30"
																							></option>
																							<option
																								value="45"
																								label="45"
																							></option>
																						</select>
																					</span>
																				</td>
																			</tr>
																			<tr
																				id="cb_class_time_row"
																				title="Indicate the latest time you're available. The course must contain at least one class that is not scheduled outside the given day(s) and start/end times."
																			>
																				<th>
																					End Before Time:
																				</th>
																				<td>
																					<span
																						class="cb_sel_item"
																					>
																						<select
																							id="cb_endHour"
																							role="listbox"
																							aria-label="End Before Hour"
																						>
																							<option
																								value=""
																								label=""
																								selected="selected"
																							></option>
																							<option
																								value="0"
																								label="0"
																							></option>
																							<option
																								value="1"
																								label="1"
																							></option>
																							<option
																								value="2"
																								label="2"
																							></option>
																							<option
																								value="3"
																								label="3"
																							></option>
																							<option
																								value="4"
																								label="4"
																							></option>
																							<option
																								value="5"
																								label="5"
																							></option>
																							<option
																								value="6"
																								label="6"
																							></option>
																							<option
																								value="7"
																								label="7"
																							></option>
																							<option
																								value="8"
																								label="8"
																							></option>
																							<option
																								value="9"
																								label="9"
																							></option>
																							<option
																								value="10"
																								label="10"
																							></option>
																							<option
																								value="11"
																								label="11"
																							></option>
																							<option
																								value="12"
																								label="12"
																							></option>
																							<option
																								value="13"
																								label="13"
																							></option>
																							<option
																								value="14"
																								label="14"
																							></option>
																							<option
																								value="15"
																								label="15"
																							></option>
																							<option
																								value="16"
																								label="16"
																							></option>
																							<option
																								value="17"
																								label="17"
																							></option>
																							<option
																								value="18"
																								label="18"
																							></option>
																							<option
																								value="19"
																								label="19"
																							></option>
																							<option
																								value="20"
																								label="20"
																							></option>
																							<option
																								value="21"
																								label="21"
																							></option>
																							<option
																								value="22"
																								label="22"
																							></option>
																							<option
																								value="23"
																								label="23"
																							></option>
																						</select>
																					</span>
																					:
																					<span
																						class="cb_sel_item"
																					>
																						<select
																							id="cb_endMin"
																							role="listbox"
																							aria-label="End Before Minute"
																						>
																							<option
																								value="0"
																								label="00"
																								selected="selected"
																							></option>
																							<option
																								value="15"
																								label="15"
																							></option>
																							<option
																								value="30"
																								label="30"
																							></option>
																							<option
																								value="45"
																								label="45"
																							></option>
																						</select>
																					</span>
																				</td>
																			</tr>
																			<tr>
																				<th>Keywords:</th>
																				<td>
																					<input
																						id="cb_search_term"
																						type="text"
																						class="fancy-input"
																						aria-label="Course search"
																						placeholder="Class Number, Title, Instructor..."
																					/>
																				</td>
																			</tr>
																			<tr>
																				<td colspan="2">
																					<button
																						style="
																							width: 100%;
																						"
																						id="course-browsing-search-btn"
																						class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
																						data-upgraded=",MaterialButton"
																					>
																						SEARCH
																					</button>
																					<div
																						style="
																							clear: both;
																						"
																					></div>
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
																<div
																	class="course-browsing-results"
																>
																	<div
																		id="cb_search_results"
																		class="course-browsing-results-listing sdl-scrollbars"
																		aria-role="heading"
																		aria-level="5"
																		aria-label="Advanced Course Search Results"
																	>
																		<table
																			class="cb-results_table"
																			id="cb-results_table"
																		>
																			<!-- Filled with cbSearchCourses2 function -->
																		</table>
																	</div>
																	<div class="search-tab-footer">
																		<label
																			class="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-disabled is-upgraded"
																			for="cb_show_selected_only_cbx"
																			data-upgraded=",MaterialSwitch,MaterialRipple"
																		>
																			<input
																				id="cb_show_selected_only_cbx"
																				type="checkbox"
																				class="mdl-switch__input"
																				disabled="disabled" />
																			<span
																				class="mdl-switch__label cb_switch_text"
																				>View selected
																				only</span
																			>
																			<div
																				class="mdl-switch__track"
																			></div>
																			<div
																				class="mdl-switch__thumb"
																			>
																				<span
																					class="mdl-switch__focus-helper"
																				></span>
																			</div>
																			<span
																				class="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																				data-upgraded=",MaterialRipple"
																				><span
																					class="mdl-ripple"
																				></span></span
																		></label>
																	</div>
																</div>

																<div style="clear: both"></div>
															</div>
														</div>
													</div>
												</div>
												<div>
													<input
														type="button"
														class="big_button"
														id="cbSelectCourses"
														value="Select Courses"
														disabled="disabled"
													/>
												</div>
											</div>
										</div>

										<div class="page_whiteout"></div>
									</td>
									<!-- end of page_criteria -->

									<td
										id="page_results"
										role="region"
										aria-labelledby="page_results_label"
										class="vsb_page active_vsb_page"
										style="width: 63.0764%"
									>
										<div class="left_gradient nomobile"></div>
										<div class="right_gradient nomobile"></div>
										<div
											class="page_fader"
											style="opacity: 0; display: none"
										></div>

										<div class="full_page_title title_font">
											<button
												id="page_criteria_expander"
												title="Collapse the Select Courses region"
												class="nobuttonstyle expander chevron_left disable-get-schedule"
												tabindex="0"
											></button>
											<button
												id="page_favorites_expander"
												title="Expand the Favorites region"
												class="nobuttonstyle expander chevron_right disable-get-schedule collapsed"
												tabindex="0"
											></button>
											<div class="left_gradient"></div>
											<div class="right_gradient"></div>
											<span class="results_page_title" id="page_results_label"
												>Schedule <span class="akl">R</span>esults</span
											>
										</div>
										<div class="full_page">
											<div
												class="full_page_content"
												style="position: relative; opacity: 1; width: auto"
											>
												<p
													id="alertJAWSresult"
													role="alert"
													style="display: none"
													aria-atomic="true"
												></p>

												<div
													id="flap_loading2"
													class="flap_loading"
													style="display: none"
												>
													&nbsp;
													<span id="procStatus"
														>Found 3 schedule results...</span
													>
												</div>

												<div id="flap_pause_results">
													<div class="resultMax pause_max">0</div>
													<div class="pause_found">schedule results</div>
													<div class="pause_view_results" style="">
														<input
															type="button"
															class="big_button"
															value="View Results"
															onclick="UU.caseViewResults();if (fullOnViewResults) {$('.chevron_left').click();}"
														/>
													</div>
													<div
														class="pause_results_tip"
														style="display: none"
													>
														<strong>Tip:</strong>
														<span
															>Select courses to generate schedule
															results.</span
														>
														<div style="clear: both"></div>
													</div>
												</div>

												<div class="results-top noprint">
													<h2
														class="visuallyhidden"
														aria-label="Schedule Results region"
													></h2>
													<p
														class="visuallyhidden"
														id="page_results_desc"
													>
														<span
															>This is the Results region. Showing
															result</span
														>
														<span class="results-current-schedule"
															>1</span
														>
														<span>of</span>
														<span class="results-total-schedules"
															>2</span
														>. This shows you a list of all the possible
														schedules using your list of courses in the
														'Select Courses' region. Navigate through
														the results. You may sort and filter these
														results using the tools in this region. When
														you have found your preferred schedule, use
														the provided class numbers to enroll for the
														classes.
													</p>
													<h3
														class="visuallyhidden"
														aria-label="Schedule Results filter - use to limit the schedule results"
													></h3>
													<div class="results-legend">
														<div
															class="results-legend-switch-container"
															title="View detailed information on each class by showing the timetable's legend"
														>
															<label
																class="results-legend-switch-label"
																for="results-legend-switch"
																style="cursor: pointer"
																>Course Legend</label
															>
															<div class="mdl-switch-nvda-fix">
																<label
																	id="results-legend-switch-label"
																	class="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked"
																	for="results-legend-switch"
																	data-upgraded=",MaterialSwitch,MaterialRipple"
																>
																	<input
																		id="results-legend-switch"
																		type="checkbox"
																		class="mdl-switch__input focusable disable-no-crf disable-get-schedule"
																		onclick="UU.caseToggleLegend()"
																		checked="checked" />
																	<span
																		class="mdl-switch__label visuallyhidden"
																		>Course Legend</span
																	>
																	<div
																		class="mdl-switch__track"
																	></div>
																	<div class="mdl-switch__thumb">
																		<span
																			class="mdl-switch__focus-helper"
																		></span>
																	</div>
																	<span
																		class="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																		data-upgraded=",MaterialRipple"
																		><span
																			class="mdl-ripple"
																		></span></span
																></label>
															</div>
														</div>
													</div>
													<div
														class="tips-button"
														title="Display helpful tips"
														style="position: relative"
													>
														<button
															class="mdl-button mdl-js-button disable-no-crf disable-get-schedule"
															id="fortips"
															onclick="SLIDER.showTip();return false;"
															data-upgraded=",MaterialButton"
														>
															Tips
														</button>
														<div class="tips_counter">
															<span class="tips_counter_nb">6</span>
														</div>
													</div>

													<div class="results-sort-mobile mobileonly">
														<button
															class="mdl-button mdl-js-button disable-no-crf disable-get-schedule"
															id="forsort"
															data-upgraded=",MaterialButton"
														>
															Sort
														</button>
													</div>
													<div class="results-sort not-mobileonly">
														<div class="reg_sort">
															<h3 class="accessOnly">Sorting</h3>

															<span
																class="sorting-checkbox-container"
																title="Choose how to sort your schedule results"
															>
																<label
																	for="sort_by"
																	class="label_font"
																	>Sort by:</label
																>&nbsp;&nbsp;
																<select
																	class="disable-no-crf disable-get-schedule"
																	id="sort_by"
																	name="sort_by"
																	onchange="UU.caseChangeSort(this.value);"
																	onkeydown="return avoidChange(event);"
																	onkeypress="return avoidChange(event);"
																	onkeyup="return avoidChange(event);"
																>
																	<option
																		value="none"
																		selected="selected"
																	>
																		Select...
																	</option>
																	<option value="daysoff">
																		Most days off
																	</option>
																	<option value="morning">
																		Mornings
																	</option>
																	<option value="midday">
																		Mid-day classes
																	</option>
																	<option value="evening">
																		Evenings
																	</option>
																</select>
															</span>
														</div>
													</div>

													<div
														class="results-filter"
														title="Filter out schedules"
													>
														<button
															class="mdl-button mdl-js-button disable-no-crf disable-get-schedule"
															id="forfilter"
															onclick="SLIDER.showTip();return false;"
															data-upgraded=",MaterialButton"
														>
															Filters
															<span id="filtersCount">(1)</span>
														</button>
													</div>
													<div
														class="reg_filter"
														style="
															justify-content: space-evenly;
															flex-wrap: wrap;
														"
													>
														<div
															class="rowfilter reg_filter"
															id="hide_full_tip"
														>
															<div class="filteroption">
																<label for="hide_full"
																	>Closed classes</label
																>
																<span class="hide50">
																	(<img
																		class="filterElement"
																		src="test_loggedin_semesterselected_files/element_full_ps.gif"
																	/>)
																</span>
															</div>
															<div class="mdl-switch-nvda-fix">
																<label
																	id="hide_full_label"
																	class="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded"
																	for="hide_full"
																	data-upgraded=",MaterialSwitch,MaterialRipple"
																>
																	<input
																		id="hide_full"
																		type="checkbox"
																		class="mdl-switch__input focusable"
																		value="hide"
																		onclick="UU.caseChangeHideFull(this);" />
																	<span
																		class="mdl-switch__label visuallyhidden"
																		>Closed classes</span
																	>
																	<div
																		class="mdl-switch__track"
																	></div>
																	<div class="mdl-switch__thumb">
																		<span
																			class="mdl-switch__focus-helper"
																		></span>
																	</div>
																	<span
																		class="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																		data-upgraded=",MaterialRipple"
																		><span
																			class="mdl-ripple"
																		></span></span
																></label>
															</div>
														</div>
														<div
															class="mdl-tooltip"
															data-mdl-for="hide_full_tip"
															data-upgraded=",MaterialTooltip"
														>
															Allow schedule results containing full
															classes
														</div>
														<div
															class="rowfilter reg_filter"
															id="hide_waitlistable_tip"
														>
															<div class="filteroption">
																<label for="hide_waitlistable"
																	>Wait Listed classes</label
																>
																<span class="hide50">
																	(<img
																		class="filterElement"
																		src="test_loggedin_semesterselected_files/element_waitlist_ps.gif"
																	/>)
																</span>
															</div>
															<div class="mdl-switch-nvda-fix">
																<label
																	id="hide_waitlistable_label"
																	class="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked"
																	for="hide_waitlistable"
																	data-upgraded=",MaterialSwitch,MaterialRipple"
																>
																	<input
																		id="hide_waitlistable"
																		type="checkbox"
																		class="mdl-switch__input focusable"
																		value="hide"
																		onclick="UU.caseChangeHideWaitlistable(this);"
																		checked="checked" />
																	<span
																		class="mdl-switch__label visuallyhidden"
																		>Wait Listed classes</span
																	>
																	<div
																		class="mdl-switch__track"
																	></div>
																	<div class="mdl-switch__thumb">
																		<span
																			class="mdl-switch__focus-helper"
																		></span>
																	</div>
																	<span
																		class="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																		data-upgraded=",MaterialRipple"
																		><span
																			class="mdl-ripple"
																		></span></span
																></label>
															</div>
														</div>
														<div
															class="mdl-tooltip"
															data-mdl-for="hide_waitlistable_tip"
															data-upgraded=",MaterialTooltip"
														>
															Allow schedule results containing
															classes that are full but can still be
															waitlisted
														</div>
														<div
															class="rowfilter reg_filter"
															id="hide_online_tip"
														>
															<div class="filteroption">
																<label for="hide_online"
																	>Online classes</label
																>
																<span>
																	<i class="far fa-mouse"></i>
																</span>
															</div>
															<div class="mdl-switch-nvda-fix">
																<label
																	id="hide_online_label"
																	class="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked"
																	for="hide_online"
																	data-upgraded=",MaterialSwitch,MaterialRipple"
																>
																	<input
																		id="hide_online"
																		type="checkbox"
																		class="mdl-switch__input focusable"
																		value="hide"
																		onclick="UU.caseChangeHideOnline(this);"
																		checked="checked" />
																	<span
																		class="mdl-switch__label visuallyhidden"
																		>Online classes</span
																	>
																	<div
																		class="mdl-switch__track"
																	></div>
																	<div class="mdl-switch__thumb">
																		<span
																			class="mdl-switch__focus-helper"
																		></span>
																	</div>
																	<span
																		class="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																		data-upgraded=",MaterialRipple"
																		><span
																			class="mdl-ripple"
																		></span></span
																></label>
															</div>
														</div>
														<div
															class="mdl-tooltip"
															data-mdl-for="hide_online_tip"
															data-upgraded=",MaterialTooltip"
														>
															Allow schedule results containing online
															classes
														</div>
														<div
															class="rowfilter reg_filter"
															id="hide_on_campus_tip"
														>
															<div class="filteroption">
																<label for="hide_on_campus"
																	>On-ca<span class="akl">m</span
																	>pus classes</label
																>
															</div>
															<div class="mdl-switch-nvda-fix">
																<label
																	id="hide_on_campus_label"
																	class="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked"
																	for="hide_on_campus"
																	data-upgraded=",MaterialSwitch,MaterialRipple"
																>
																	<input
																		id="hide_on_campus"
																		type="checkbox"
																		class="mdl-switch__input focusable"
																		value="hide"
																		onclick="UU.caseChangeHideOnCampus(this);"
																		checked="checked" />
																	<span
																		class="mdl-switch__label visuallyhidden"
																		>On-ca<span class="akl"
																			>m</span
																		>pus classes</span
																	>
																	<div
																		class="mdl-switch__track"
																	></div>
																	<div class="mdl-switch__thumb">
																		<span
																			class="mdl-switch__focus-helper"
																		></span>
																	</div>
																	<span
																		class="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center"
																		data-upgraded=",MaterialRipple"
																		><span
																			class="mdl-ripple"
																		></span></span
																></label>
															</div>
														</div>
														<div
															class="mdl-tooltip"
															data-mdl-for="hide_on_campus_tip"
															data-upgraded=",MaterialTooltip"
														>
															Allow schedule results containing
															classes on campus
														</div>
													</div>
												</div>

												<div class="reg_parent" style="display: block">
													<div
														class="reg_row1_enroll noprint"
														style="display: none"
													>
														<h2
															class="reg_title noprint"
															aria-label="Schedule review region. Please review the actions to apply to your course schedule.  Click the Do Actions button to submit."
														>
															<span class="title_act1"
																>Getting Schedule</span
															>
															<span class="title_act2"
																>Validating Your Shopping Cart</span
															>
														</h2>
													</div>

													<div class="reg_row1 noprint noselect">
														<button
															type="button"
															id="forfilter_desktop"
															class="btn btn-mid hide50"
														>
															Filter
														</button>

														<h3
															class="visuallyhidden"
															aria-label="Schedule Result selection - use the navigation buttons to move between the different schedule results - each having a unique timetable."
														></h3>
														<div class="reg_flip">
															<table class="flip_table">
																<tbody>
																	<tr>
																		<td>
																			<a
																				class="results-action-first results-nava-disabled"
																				title="First Result"
																			>
																				<i
																					class="nav-first results-nav-btn results-nav-disabled"
																					aria-hidden="true"
																				></i>
																			</a>
																		</td>
																		<td>
																			<a
																				class="results-action-previous results-nava-disabled"
																				title="Previous Result"
																			>
																				<i
																					class="nav-prev results-nav-btn results-nav-disabled"
																					aria-hidden="true"
																				></i>
																			</a>
																		</td>
																		<td class="results-nav">
																			<div
																				class="results-with-schedules"
																			>
																				<div>Result</div>
																				<div
																					aria-live="assertive"
																					aria-atomic="true"
																				>
																					<span
																						class="results-current-schedule"
																						>1</span
																					>
																					of
																					<span
																						class="results-total-schedules"
																						>2</span
																					>
																				</div>
																			</div>
																		</td>
																		<td>
																			<a
																				class="results-action-next"
																				title="Next Result"
																				href="javascript:void(0);"
																				onclick="UU.caseNextResult()"
																			>
																				<i
																					class="nav-next results-nav-btn"
																					aria-hidden="true"
																				></i>
																			</a>
																		</td>
																		<td>
																			<a
																				class="results-action-last"
																				title="Last Result"
																				href="javascript:void(0);"
																				onclick="UU.caseLastResult()"
																			>
																				<i
																					class="nav-last results-nav-btn"
																					aria-hidden="true"
																				></i>
																			</a>
																		</td>
																	</tr>
																	<tr
																		id="result_page_message"
																		style="display: none"
																	>
																		<td
																			colspan="5"
																			style="
																				font-weight: bold;
																				color: #00bb00;
																			"
																		>
																			<div
																				role="alert"
																				tabindex="0"
																				id="favalert"
																				aria-atomic="true"
																			>
																				Saved to Favorites
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>
															<span class="cohort_info"></span>
														</div>
													</div>

													<div class="reg_flip_results">
														<div
															class="reg_row2 printable"
															id="flip_area"
															style="display: block"
														>
															<div class="reg_schedule half">
																<div class="reg_schedule1 noselect">
																	<h3
																		class="visuallyhidden"
																		style="padding-left: 62px"
																	>
																		Schedule
																	</h3>
																	<div class="visuallyhidden">
																		If you are using a screen
																		reader, the contents of this
																		heading will not be useful.
																		Visual content represented
																		here on the timetable is
																		repeated verbally under the
																		Legend heading.
																	</div>
																	<div
																		style="position: relative"
																		class="timetable_part"
																		aria-hidden="true"
																	>
																		<div class="weekName">
																			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
																				class="timetable_title"
																				>&nbsp;</span
																			>
																		</div>
																		<div class="timezoneAbbr">
																			&nbsp;
																		</div>
																		<div
																			class="timetable table_container"
																		>
																			<div
																				style="
																					position: relative;
																				"
																			>
																				<div
																					class="weekArea"
																				>
																					<table
																						cellpadding="0"
																						cellspacing="0"
																					>
																						<tbody>
																							<tr
																								class="header tall"
																							>
																								<td>
																									Mon<span
																										class="day_2_date"
																										><br />Sep
																										8</span
																									>
																									<div
																										class="holl_2 holiday_label"
																										style="
																											display: none;
																										"
																									></div>
																								</td>
																								<td>
																									Tue<span
																										class="day_3_date"
																										><br />Sep
																										9</span
																									>
																									<div
																										class="holl_3 holiday_label"
																										style="
																											display: none;
																										"
																									></div>
																								</td>
																								<td>
																									Wed<span
																										class="day_4_date"
																										><br />Sep
																										10</span
																									>
																									<div
																										class="holl_4 holiday_label"
																										style="
																											display: none;
																										"
																									></div>
																								</td>
																								<td>
																									Thu<span
																										class="day_5_date"
																										><br />Sep
																										11</span
																									>
																									<div
																										class="holl_5 holiday_label"
																										style="
																											display: none;
																										"
																									></div>
																								</td>
																								<td>
																									Fri<span
																										class="day_6_date"
																										><br />Sep
																										12</span
																									>
																									<div
																										class="holl_6 holiday_label"
																										style="
																											display: none;
																										"
																									></div>
																								</td>
																							</tr>
																							<tr
																								class="even"
																							>
																								<td>
																									<div
																										class="left_fade"
																									>
																										<div
																											class="hour_marker"
																										>
																											8
																										</div>
																										<div
																											class="min_marker"
																										>
																											am
																										</div>
																									</div>
																								</td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="odd"
																							>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="even"
																							>
																								<td>
																									<div
																										class="left_fade"
																									>
																										<div
																											class="hour_marker"
																										>
																											9
																										</div>
																										<div
																											class="min_marker"
																										>
																											am
																										</div>
																									</div>
																								</td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="odd"
																							>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="even"
																							>
																								<td>
																									<div
																										class="left_fade"
																									>
																										<div
																											class="hour_marker"
																										>
																											10
																										</div>
																										<div
																											class="min_marker"
																										>
																											am
																										</div>
																									</div>
																								</td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="odd"
																							>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="even"
																							>
																								<td>
																									<div
																										class="left_fade"
																									>
																										<div
																											class="hour_marker"
																										>
																											11
																										</div>
																										<div
																											class="min_marker"
																										>
																											am
																										</div>
																									</div>
																								</td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="odd"
																							>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="even"
																							>
																								<td>
																									<div
																										class="left_fade"
																									>
																										<div
																											class="hour_marker"
																										>
																											12
																										</div>
																										<div
																											class="min_marker"
																										>
																											pm
																										</div>
																									</div>
																								</td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="odd"
																							>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="even"
																							>
																								<td>
																									<div
																										class="left_fade"
																									>
																										<div
																											class="hour_marker"
																										>
																											1
																										</div>
																										<div
																											class="min_marker"
																										>
																											pm
																										</div>
																									</div>
																								</td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="odd"
																							>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="even"
																							>
																								<td>
																									<div
																										class="left_fade"
																									>
																										<div
																											class="hour_marker"
																										>
																											2
																										</div>
																										<div
																											class="min_marker"
																										>
																											pm
																										</div>
																									</div>
																								</td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="odd"
																							>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="even"
																							>
																								<td>
																									<div
																										class="left_fade"
																									>
																										<div
																											class="hour_marker"
																										>
																											3
																										</div>
																										<div
																											class="min_marker"
																										>
																											pm
																										</div>
																									</div>
																								</td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="odd"
																							>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="even"
																							>
																								<td>
																									<div
																										class="left_fade"
																									>
																										<div
																											class="hour_marker"
																										>
																											4
																										</div>
																										<div
																											class="min_marker"
																										>
																											pm
																										</div>
																									</div>
																								</td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="odd"
																							>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="even"
																							>
																								<td>
																									<div
																										class="left_fade"
																									>
																										<div
																											class="hour_marker"
																										>
																											5
																										</div>
																										<div
																											class="min_marker"
																										>
																											pm
																										</div>
																									</div>
																								</td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="odd"
																							>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="even"
																							>
																								<td>
																									<div
																										class="left_fade"
																									>
																										<div
																											class="hour_marker"
																										>
																											6
																										</div>
																										<div
																											class="min_marker"
																										>
																											pm
																										</div>
																									</div>
																								</td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																							<tr
																								class="odd"
																							>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																								<td></td>
																							</tr>
																						</tbody>
																					</table>
																				</div>
																				<div
																					class="currentBusyBlocks"
																					style="
																						position: absolute;
																						display: block;
																						top: 0px;
																						left: 0px;
																						width: 100%;
																						height: 100%;
																					"
																				>
																					&nbsp;
																				</div>
																				<div
																					class="weekTimes"
																					style="
																						position: absolute;
																						display: block;
																						top: 0px;
																						left: 0px;
																						width: 100%;
																						height: 100%;
																					"
																					title="Click and drag to choose where you don't want classes"
																				>
																					<div
																						class="time_block bc1 bd1 bh1 tb_fstate_green"
																						classname="time_block bc1 bd1 bh1 tb_fstate_green"
																						title="Click to pin down course section."
																						onmouseover="RR.highlightClass(1,true)"
																						onmouseout="RR.highlightClass(1,false)"
																						style="
																							left: 20%;
																							top: 265px;
																							width: 19.7222%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>1</span
																						><span
																							class="nonmobile"
																							>COMPSCI
																							2C03<br />LEC</span
																						>
																					</div>
																					<div
																						class="time_block bc1 bd1 bh1 tb_fstate_green"
																						classname="time_block bc1 bd1 bh1 tb_fstate_green"
																						title="Click to pin down course section."
																						onmouseover="RR.highlightClass(1,true)"
																						onmouseout="RR.highlightClass(1,false)"
																						style="
																							left: 60%;
																							top: 265px;
																							width: 19.7222%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>1</span
																						><span
																							class="nonmobile"
																							>COMPSCI
																							2C03<br />LEC</span
																						>
																					</div>
																					<div
																						class="time_block bc1 bd1 bh1 tb_fstate_green"
																						classname="time_block bc1 bd1 bh1 tb_fstate_green"
																						title="Click to pin down course section."
																						onmouseover="RR.highlightClass(1,true)"
																						onmouseout="RR.highlightClass(1,false)"
																						style="
																							left: 80%;
																							top: 265px;
																							width: 19.7222%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>1</span
																						><span
																							class="nonmobile"
																							>COMPSCI
																							2C03<br />LEC</span
																						>
																					</div>
																					<div
																						class="time_block bc1 bd1 bh1 tb_fstate_green"
																						classname="time_block bc1 bd1 bh1 tb_fstate_green"
																						title="Click to pin down course section."
																						onmouseover="RR.highlightClass(1,true)"
																						onmouseout="RR.highlightClass(1,false)"
																						style="
																							left: 0.277778%;
																							top: 85px;
																							width: 19.5%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>1</span
																						><span
																							class="nonmobile"
																							>COMPSCI
																							2C03<br />TUT</span
																						>
																					</div>
																					<div
																						class="time_block bc2 bd2 bh2 bcpin tb_fstate_green"
																						classname="time_block bc2 bd2 bh2 bcpin tb_fstate_green"
																						title="Click to unpin course"
																						onmouseover="RR.highlightClass(2,true)"
																						onmouseout="RR.highlightClass(2,false)"
																						style="
																							left: 20%;
																							top: 157px;
																							width: 19.7222%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>2</span
																						><span
																							class="nonmobile"
																							>MATH
																							2LA3<br />LEC</span
																						>
																					</div>
																					<div
																						class="time_block bc2 bd2 bh2 bcpin tb_fstate_green"
																						classname="time_block bc2 bd2 bh2 bcpin tb_fstate_green"
																						title="Click to unpin course"
																						onmouseover="RR.highlightClass(2,true)"
																						onmouseout="RR.highlightClass(2,false)"
																						style="
																							left: 60%;
																							top: 157px;
																							width: 19.7222%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>2</span
																						><span
																							class="nonmobile"
																							>MATH
																							2LA3<br />LEC</span
																						>
																					</div>
																					<div
																						class="time_block bc2 bd2 bh2 bcpin tb_fstate_green"
																						classname="time_block bc2 bd2 bh2 bcpin tb_fstate_green"
																						title="Click to unpin course"
																						onmouseover="RR.highlightClass(2,true)"
																						onmouseout="RR.highlightClass(2,false)"
																						style="
																							left: 80%;
																							top: 157px;
																							width: 19.7222%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>2</span
																						><span
																							class="nonmobile"
																							>MATH
																							2LA3<br />LEC</span
																						>
																					</div>
																					<div
																						class="time_block bc2 bd2 bh2 bcpin tb_fstate_red"
																						classname="time_block bc2 bd2 bh2 bcpin tb_fstate_red"
																						title="Click to unpin course"
																						onmouseover="RR.highlightClass(2,true)"
																						onmouseout="RR.highlightClass(2,false)"
																						style="
																							left: 60%;
																							top: 193px;
																							width: 19.7222%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>2</span
																						><span
																							class="nonmobile"
																							>MATH
																							2LA3<br />TUT</span
																						>
																					</div>
																					<div
																						class="time_block bc3 bd3 bh3 bcpin tb_fstate_green"
																						classname="time_block bc3 bd3 bh3 bcpin tb_fstate_green"
																						title="Click to unpin course"
																						onmouseover="RR.highlightClass(3,true)"
																						onmouseout="RR.highlightClass(3,false)"
																						style="
																							left: 20%;
																							top: 301px;
																							width: 19.7222%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>3</span
																						><span
																							class="nonmobile"
																							>COMPSCI
																							2GA3<br />LEC</span
																						>
																					</div>
																					<div
																						class="time_block bc3 bd3 bh3 bcpin tb_fstate_green"
																						classname="time_block bc3 bd3 bh3 bcpin tb_fstate_green"
																						title="Click to unpin course"
																						onmouseover="RR.highlightClass(3,true)"
																						onmouseout="RR.highlightClass(3,false)"
																						style="
																							left: 40%;
																							top: 301px;
																							width: 19.7222%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>3</span
																						><span
																							class="nonmobile"
																							>COMPSCI
																							2GA3<br />LEC</span
																						>
																					</div>
																					<div
																						class="time_block bc3 bd3 bh3 bcpin tb_fstate_green"
																						classname="time_block bc3 bd3 bh3 bcpin tb_fstate_green"
																						title="Click to unpin course"
																						onmouseover="RR.highlightClass(3,true)"
																						onmouseout="RR.highlightClass(3,false)"
																						style="
																							left: 80%;
																							top: 301px;
																							width: 19.7222%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>3</span
																						><span
																							class="nonmobile"
																							>COMPSCI
																							2GA3<br />LEC</span
																						>
																					</div>
																					<div
																						class="time_block bc3 bd3 bh3 bcpin tb_fstate_red"
																						classname="time_block bc3 bd3 bh3 bcpin tb_fstate_red"
																						title="Click to unpin course"
																						onmouseover="RR.highlightClass(3,true)"
																						onmouseout="RR.highlightClass(3,false)"
																						style="
																							left: 60%;
																							top: 229px;
																							width: 19.7222%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>3</span
																						><span
																							class="nonmobile"
																							>COMPSCI
																							2GA3<br />TUT</span
																						>
																					</div>
																					<div
																						class="time_block bc4 bd4 bh4 bcpin tb_fstate_green"
																						classname="time_block bc4 bd4 bh4 bcpin tb_fstate_green"
																						title="Click to unpin course"
																						onmouseover="RR.highlightClass(4,true)"
																						onmouseout="RR.highlightClass(4,false)"
																						style="
																							left: 0.277778%;
																							top: 301px;
																							width: 19.5%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>4</span
																						><span
																							class="nonmobile"
																							>COMPSCI
																							2LC3<br />LEC</span
																						>
																					</div>
																					<div
																						class="time_block bc4 bd4 bh4 bcpin tb_fstate_green"
																						classname="time_block bc4 bd4 bh4 bcpin tb_fstate_green"
																						title="Click to unpin course"
																						onmouseover="RR.highlightClass(4,true)"
																						onmouseout="RR.highlightClass(4,false)"
																						style="
																							left: 20%;
																							top: 337px;
																							width: 19.7222%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>4</span
																						><span
																							class="nonmobile"
																							>COMPSCI
																							2LC3<br />LEC</span
																						>
																					</div>
																					<div
																						class="time_block bc4 bd4 bh4 bcpin tb_fstate_green"
																						classname="time_block bc4 bd4 bh4 bcpin tb_fstate_green"
																						title="Click to unpin course"
																						onmouseover="RR.highlightClass(4,true)"
																						onmouseout="RR.highlightClass(4,false)"
																						style="
																							left: 60%;
																							top: 301px;
																							width: 19.7222%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>4</span
																						><span
																							class="nonmobile"
																							>COMPSCI
																							2LC3<br />LEC</span
																						>
																					</div>
																					<div
																						class="time_block bc4 bd4 bh4 bcpin tb_fstate_red"
																						classname="time_block bc4 bd4 bh4 bcpin tb_fstate_red"
																						title="Click to unpin course"
																						onmouseover="RR.highlightClass(4,true)"
																						onmouseout="RR.highlightClass(4,false)"
																						style="
																							left: 80%;
																							top: 193px;
																							width: 19.7222%;
																							height: 65px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>4</span
																						><span
																							class="nonmobile"
																							>COMPSCI
																							2LC3<br />TUT</span
																						>
																					</div>
																					<div
																						class="time_block bc5 bd5 bh5 bcpin tb_fstate_green"
																						classname="time_block bc5 bd5 bh5 bcpin tb_fstate_green"
																						title="Click to unpin course"
																						onmouseover="RR.highlightClass(5,true)"
																						onmouseout="RR.highlightClass(5,false)"
																						style="
																							left: 0.277778%;
																							top: 265px;
																							width: 19.5%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>5</span
																						><span
																							class="nonmobile"
																							>COMPSCI
																							2ME3<br />LEC</span
																						>
																					</div>
																					<div
																						class="time_block bc5 bd5 bh5 bcpin tb_fstate_green"
																						classname="time_block bc5 bd5 bh5 bcpin tb_fstate_green"
																						title="Click to unpin course"
																						onmouseover="RR.highlightClass(5,true)"
																						onmouseout="RR.highlightClass(5,false)"
																						style="
																							left: 40%;
																							top: 265px;
																							width: 19.7222%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>5</span
																						><span
																							class="nonmobile"
																							>COMPSCI
																							2ME3<br />LEC</span
																						>
																					</div>
																					<div
																						class="time_block bc5 bd5 bh5 bcpin tb_fstate_green"
																						classname="time_block bc5 bd5 bh5 bcpin tb_fstate_green"
																						title="Click to unpin course"
																						onmouseover="RR.highlightClass(5,true)"
																						onmouseout="RR.highlightClass(5,false)"
																						style="
																							left: 80%;
																							top: 337px;
																							width: 19.7222%;
																							height: 29px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>5</span
																						><span
																							class="nonmobile"
																							>COMPSCI
																							2ME3<br />LEC</span
																						>
																					</div>
																					<div
																						class="time_block bc5 bd5 bh5 bcpin tb_fstate_red"
																						classname="time_block bc5 bd5 bh5 bcpin tb_fstate_red"
																						title="Click to unpin course"
																						onmouseover="RR.highlightClass(5,true)"
																						onmouseout="RR.highlightClass(5,false)"
																						style="
																							left: 40%;
																							top: 337px;
																							width: 19.7222%;
																							height: 65px;
																						"
																					>
																						<span
																							class="mobile_nb"
																							>5</span
																						><span
																							class="nonmobile"
																							>COMPSCI
																							2ME3<br />TUT</span
																						>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="timetableMsg"></div>
																	<div
																		class="monthscalc"
																		aria-hidden="true"
																	>
																		<div
																			class="sliderdiv timetable_part"
																			aria-hidden="true"
																			style="
																				position: relative;
																			"
																		>
																			<div
																				style="
																					text-align: center;
																					padding: 4px 0
																						12px 0;
																				"
																			>
																				<label>
																					<span
																						class="disp_days"
																						>September 7
																						- 13,
																						2025</span
																					></label
																				>
																			</div>
																			<div
																				class="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
																				data-begin="1"
																				data-end="20"
																				aria-disabled="false"
																				style="
																					left: 22.2581%;
																					width: 60%;
																				"
																			>
																				<div
																					class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min"
																					style="
																						width: 7.69231%;
																					"
																				></div>
																				<a
																					class="ui-slider-handle ui-state-default ui-corner-all"
																					href="#"
																					style="
																						left: 7.69231%;
																						width: 4.51613%;
																					"
																					tabindex="-1"
																					><span
																						style="
																							height: 120px;
																						"
																					></span
																				></a>
																			</div>
																			<button
																				class="sliderleft disable-no-results"
																				title="Previous Week"
																				style="right: 80%"
																				aria-label="go to week August 31 - September 6, 2025"
																			>
																				<i
																					class="nav-prev results-week-nav"
																					aria-hidden="true"
																				></i>
																			</button>
																			<button
																				class="sliderright disable-no-results"
																				title="Next Week"
																				style="
																					left: 84.5161%;
																				"
																				aria-label="go to week September 14 - 20, 2025"
																			>
																				<i
																					class="nav-next results-week-nav"
																					aria-hidden="true"
																				></i>
																			</button>
																		</div>
																		<div
																			class="dateGridHolder"
																			style="
																				position: relative;
																			"
																		>
																			<div
																				class="dateGridTable"
																			>
																				<table
																					class="dateGrid"
																					style="
																						border-spacing: 0px;
																						padding: 0px;
																					"
																				>
																					<tbody>
																						<tr>
																							<td
																								style="
																									width: 20%;
																								"
																								class="mo"
																							>
																								Aug
																							</td>
																							<td
																								style="
																									width: 20%;
																								"
																								class="mo"
																							>
																								Sep
																							</td>
																							<td
																								style="
																									width: 20%;
																								"
																								class="mo"
																							>
																								Oct
																							</td>
																							<td
																								style="
																									width: 20%;
																								"
																								class="mo"
																							>
																								Nov
																							</td>
																							<td
																								style="
																									width: 20%;
																								"
																								class="mo"
																							>
																								Dec
																							</td>
																						</tr>
																						<tr>
																							<td
																								class="sp-listing-1"
																							>
																								<div
																									class="schedule-period bc1 bd1 bh1"
																									classname="schedule-period bc1 bd1 bh1"
																									onmouseover="RR.highlightClass(1,true)"
																									onmouseout="RR.highlightClass(1,false)"
																									onclick="addPin(event,5,'MCMST--2259_3779-3860-',true,'no');"
																									title="Click to pin down course section."
																									style="
																										margin-left: calc(
																											106.452% +
																												1px
																										);
																										width: calc(
																											306.452% +
																												3px
																										);
																									"
																								>
																									<span
																										class="mobileNUmber"
																										>1-</span
																									>Data
																									Structures
																									and
																									Algorithms
																								</div>
																							</td>
																							<td></td>
																							<td></td>
																							<td></td>
																							<td></td>
																						</tr>
																						<tr>
																							<td
																								class="sp-listing-2"
																							>
																								<div
																									class="schedule-period bc2 bd2 bh2"
																									classname="schedule-period bc2 bd2 bh2"
																									onmouseover="RR.highlightClass(2,true)"
																									onmouseout="RR.highlightClass(2,false)"
																									onclick="addPin(event,1,'MCMST--2259_2105-2107-',false,'no');"
																									title="Click to unpin course"
																									style="
																										margin-left: calc(
																											106.452% +
																												1px
																										);
																										width: calc(
																											306.452% +
																												3px
																										);
																									"
																								>
																									<span
																										class="mobileNUmber"
																										>2-</span
																									>Applications
																									of
																									Linear
																									Algebra
																								</div>
																							</td>
																							<td></td>
																							<td></td>
																							<td></td>
																							<td></td>
																						</tr>
																						<tr>
																							<td
																								class="sp-listing-3"
																							>
																								<div
																									class="schedule-period bc3 bd3 bh3"
																									classname="schedule-period bc3 bd3 bh3"
																									onmouseover="RR.highlightClass(3,true)"
																									onmouseout="RR.highlightClass(3,false)"
																									onclick="addPin(event,2,'MCMST--2259_2951-2952-',false,'no');"
																									title="Click to unpin course"
																									style="
																										margin-left: calc(
																											106.452% +
																												1px
																										);
																										width: calc(
																											306.452% +
																												3px
																										);
																									"
																								>
																									<span
																										class="mobileNUmber"
																										>3-</span
																									>Computer
																									Architecture
																								</div>
																							</td>
																							<td></td>
																							<td></td>
																							<td></td>
																							<td></td>
																						</tr>
																						<tr>
																							<td
																								class="sp-listing-4"
																							>
																								<div
																									class="schedule-period bc4 bd4 bh4"
																									classname="schedule-period bc4 bd4 bh4"
																									onmouseover="RR.highlightClass(4,true)"
																									onmouseout="RR.highlightClass(4,false)"
																									onclick="addPin(event,3,'MCMST--2259_3484-3485-',false,'no');"
																									title="Click to unpin course"
																									style="
																										margin-left: calc(
																											106.452% +
																												1px
																										);
																										width: calc(
																											306.452% +
																												3px
																										);
																									"
																								>
																									<span
																										class="mobileNUmber"
																										>4-</span
																									>Logical
																									Reasoning
																									for
																									Computer
																									Science
																								</div>
																							</td>
																							<td></td>
																							<td></td>
																							<td></td>
																							<td></td>
																						</tr>
																						<tr>
																							<td
																								class="sp-listing-5"
																							>
																								<div
																									class="schedule-period bc5 bd5 bh5"
																									classname="schedule-period bc5 bd5 bh5"
																									onmouseover="RR.highlightClass(5,true)"
																									onmouseout="RR.highlightClass(5,false)"
																									onclick="addPin(event,4,'MCMST--2259_3489-3490-',false,'no');"
																									title="Click to unpin course"
																									style="
																										margin-left: calc(
																											106.452% +
																												1px
																										);
																										width: calc(
																											306.452% +
																												3px
																										);
																									"
																								>
																									<span
																										class="mobileNUmber"
																										>5-</span
																									>Introduction
																									to
																									Software
																									Development
																								</div>
																							</td>
																							<td></td>
																							<td></td>
																							<td></td>
																							<td></td>
																						</tr>
																					</tbody>
																				</table>
																			</div>
																			<div
																				class="dateGridBlocks"
																			></div>
																			<div
																				class="scheduleWarning"
																			></div>
																		</div>
																	</div>
																	<h3
																		class="bubbletitle visuallyhidden timetable_part"
																	>
																		Add Personal Times
																	</h3>
																	<div
																		class="timesToAvoid noprint timetable_part"
																	>
																		<div
																			style="
																				display: flex;
																				justify-content: flex-start;
																				align-items: center;
																			"
																		>
																			<button
																				class="mdl-button mdl-js-button manual-time-expand expand-button"
																				aria-label="expand manual time input"
																				data-upgraded=",MaterialButton"
																			>
																				Add Personal Times<i
																					class="far fa-angle-down"
																				></i>
																			</button>
																		</div>
																		<div
																			class="timesToAvoidContent"
																			style="
																				text-align: left;
																				display: none;
																			"
																		>
																			<div
																				class="bubble"
																				style="width: auto"
																			>
																				Click and drag on
																				the schedule above,
																				or enter a time
																				range here to add it
																				manually. Schedule
																				results that avoid
																				personal times will
																				be prioritized.
																			</div>
																			<div
																				style="
																					margin: 0 -5px;
																					display: flex;
																					justify-content: flex-start;
																					flex-wrap: wrap;
																				"
																			>
																				<div
																					style="
																						margin: 5px;
																					"
																				>
																					<input
																						type="text"
																						aria-label="Personal Time Entry. For example, enter Friday 5 dash 7 PM and press enter."
																						class="add_avoid_time"
																						style="
																							width: 300px;
																							font-size: 120%;
																						"
																					/>
																					<br />Examples:
																					Friday 2-9pm, MW
																					8-10, Fri 15-17
																				</div>
																				<input
																					style="
																						margin: 5px;
																					"
																					type="button"
																					class="add_avoid_time_button big_button"
																					value="Add Time"
																				/>
																				<input
																					style="
																						margin: 5px;
																					"
																					type="button"
																					class="big_button clearAvoidTimesButton"
																					value="Clear all Personal Times"
																				/>
																			</div>
																			<div
																				class="avoidNotice"
																				role="alert"
																			></div>
																		</div>
																	</div>
																</div>
																<div
																	class="reg_schedule2 noselect"
																	style="display: none"
																>
																	<!-- Filled by schedule.js -->
																</div>
																<div
																	class="reg_legend-container mobile"
																>
																	<div class="mobile-legend">
																		<button
																			class="mdl-button mdl-js-button mobile-legend-button"
																			onclick="RR.toggleLegend()"
																			data-upgraded=",MaterialButton"
																		>
																			<span
																				>Course Legend</span
																			>
																			<span
																				style="
																					display: flex;
																				"
																				><i
																					class="far fa-angle-down mobile-legend-icon expanded"
																				></i
																			></span>
																		</button>
																	</div>
																</div>
																<div class="buttonsUnderTimetable">
																	<h3
																		class="visuallyhidden"
																		aria-label="Schedule actions. Select an action to perform on the currently selected course schedule."
																	></h3>
																	<div class="reg_row2_2">
																		<div
																			class="reg-info"
																			style="
																				margin-bottom: 10px;
																			"
																		>
																			<div
																				id="crnListWarnings"
																				class="noprint"
																			>
																				<div
																					class="crnListWarning crnListWarningInfo not_already_have"
																				>
																					You are not
																					enrolled for
																					this schedule.
																				</div>
																				<div
																					class="crnListWarning crnListWarningGood already_have"
																					style="
																						display: none;
																					"
																				>
																					You are already
																					enrolled for
																					this schedule
																				</div>
																				<div
																					class="crnListWarning crnListWarningBad not_meet_compulsory"
																					style="
																						display: none;
																					"
																				>
																					This schedule
																					does not follow
																					the mandatory
																					plan assigned
																					for this term.
																					To proceed,
																					<span
																						class="more_than_permitted"
																						style="
																							display: none;
																						"
																						>toggle off
																						courses that
																						are not
																						permitted,
																						or
																					</span>
																					<a
																						href="javascript:void(0)"
																						onclick="clearSearch();"
																						style="
																							text-decoration: underline;
																						"
																						>start
																						over</a
																					>
																					and select the
																					plan.
																				</div>
																			</div>
																			<div
																				id="crnListInfos"
																				class="noprint"
																			>
																				<div
																					class="crnListInfo credits_block"
																				>
																					Total Units:
																					<span
																						title="Units"
																						>15.0</span
																					>/<span
																						title="Academic Progress Units"
																						>15.0</span
																					>
																				</div>
																			</div>
																			<div
																				id="crnListCrns"
																			></div>
																			<div
																				id="crnListHelp"
																				class="noprint"
																			></div>
																		</div>
																		<div
																			class="bottom-buttons-2 noprint"
																		>
																			<button
																				class="mdl-button mdl-js-button mdl-button--raised white-background disable-no-results disable-no-crf"
																				onclick="UU.caseFavoriteResult();"
																				aria-label="Save as Favourite"
																				data-upgraded=",MaterialButton"
																			>
																				Save as Favourite
																			</button>
																			<div
																				class="schedule-buttons"
																			>
																				<div
																					id="crnListButtons"
																					class="noprint"
																				>
																					<div
																						style="
																							text-align: center;
																							position: relative;
																						"
																					>
																						<input
																							class="button_validate_cart mdl-button mdl-js-button mdl-button--raised white-background"
																							value="Validate Shopping Cart"
																							type="button"
																							onclick="getScheduleClick(true);"
																							disabled="disabled"
																							title="Your cart is empty"
																							data-upgraded=",MaterialButton"
																						/><button
																							class="button_get_schedule mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
																							type="button"
																							onclick="requestScheduleCheckPromissory();"
																							title="Go to the confirmation page to review details"
																							data-upgraded=",MaterialButton"
																						>
																							Get this
																							Schedule
																						</button>
																						<div
																							class="not_signed_in_message"
																							style="
																								display: none;
																							"
																						>
																							You are
																							not
																							signed
																							in
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div
																			class="bottom-buttons noprint"
																		>
																			<div>
																				<button
																					class="mdl-button mdl-js-button disable-no-results disable-no-crf"
																					onclick="clickPrint()"
																					data-upgraded=",MaterialButton"
																				>
																					Print
																				</button>
																				<span
																					id="createShareLink"
																				>
																					<button
																						class="mdl-button mdl-js-button disable-no-results disable-no-crf"
																						onclick="UU.caseShareLink();//ShareLinkController.createLink();"
																						data-upgraded=",MaterialButton"
																					>
																						Share
																					</button>
																				</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div
																class="reg_legend-container desktop"
															>
																<div
																	class="reg_legend"
																	style="display: block"
																>
																	<h3
																		class="visuallyhidden"
																		aria-label="Legend - list of course sections in your currently selected schedule."
																	>
																		Course Legend
																	</h3>

																	<div
																		class="printed_by printonly"
																	>
																		Printed by:
																		<span class="alt_autho_text"
																			>Ameya Gupta</span
																		>
																	</div>

																	<div
																		class="legend_box /*mdc-elevation--z1*/"
																		id="legend_box"
																	>
																		<div
																			class="course_box show-books block_animation show_extras be0"
																			style=""
																			data-atomicid="null"
																		>
																			<div
																				class="legend_table computer-only table"
																				style="
																					padding: 0px;
																					border-spacing: 0px;
																					border: 0px;
																				"
																			>
																				<div class="tr">
																					<div
																						class="td course_cell_legend one_col"
																					>
																						<div
																							class="course_header bc1 bh1"
																							role="checkbox"
																							aria-checked="false"
																							aria-label="Click to pin down course section. Pinning a section will filter the schedule results to only contain schedules containing the pinned section until the pin is removed."
																							title="Click to pin down course section."
																							tabindex="0"
																							onkeydown="if(event.keyCode == 32){addPin(event,5,'MCMST--2259_3779-3860-',true,'bc1');}"
																							onclick="addPin(event,5,'MCMST--2259_3779-3860-',true,'bc1');"
																							onmouseout="RR.highlightClass(1,false);"
																							onmouseover="RR.highlightClass(1,true);"
																						>
																							<div
																								class="header_cell"
																							>
																								<h4
																									style="
																										float: left;
																									"
																									class="course_title"
																									aria-label="COMPSCI 2C03 Data Structures and Algorithms running from Sep 2  to  Dec 4 on Tue, Thu, Fri from 2:30 PM to 3:20 PMMon : 9:30 AM to 10:20 AM&lt;br&gt;&lt;/h4&gt;. Given this timetable schedule result, there may be one or more sections that occur at this time below. Click to pin down course section."
																								>
																									COMPSCI
																									2C03
																								</h4>
																								<div
																									style="
																										float: right;
																									"
																									title="Session Code: 1"
																								>
																									<span
																										class="term_label"
																										>2025
																										Fall: </span
																									>Sep
																									2
																									-
																									Dec
																									4
																								</div>
																								<div
																									style="
																										float: right;
																										clear: right;
																									"
																									class="session_label"
																								>
																									Regular
																									Academic
																									&nbsp;&nbsp;
																								</div>
																								<div
																									style="
																										float: left;
																										clear: left;
																									"
																								>
																									<span
																										class="mobileNUmber"
																										>1-</span
																									><span
																										>Data
																										Structures
																										and
																										Algorithms</span
																									>
																								</div>
																								<div
																									style="
																										clear: both;
																									"
																								></div>
																								<div
																									id="hoursInLegend"
																								>
																									Tue,
																									Thu,
																									Fri
																									:
																									2:30
																									PM
																									to
																									3:20
																									PM<br />Mon
																									:
																									9:30
																									AM
																									to
																									10:20
																									AM<br />
																								</div>
																							</div>
																						</div>
																						<label
																							class="vsbselectionnew"
																							><h5
																								class="visuallyhidden"
																							>
																								LEC
																								C02
																								-
																								TUT
																								T07
																							</h5>
																							<div
																								class="selection_row"
																								data-cnfid="5"
																								data-selkey="MCMST--2259_3779-3860-"
																								data-inst="MCMST"
																								data-ac="UGRD"
																							>
																								<div
																									class="selection_table"
																								>
																									<table
																										class="inner_legend_table"
																										style="
																											padding: 0px;
																											border-spacing: 0px;
																											width: 100%;
																										"
																									>
																										<tbody>
																											<tr>
																												<td
																													rowspan="4"
																													valign="middle"
																													align="center"
																													width="25"
																													title="Class is open"
																													class="legendSelect bg_green empty is-checked"
																												>
																													<span
																														class="sel_radio"
																														data-cnfid="5"
																														data-selkey="MCMST--2259_3779-3860-"
																														data-crns="3779 (3860)"
																														data-color="green"
																													></span>
																												</td>
																												<td>
																													<strong
																														class="leftnclear type_block"
																														>LEC
																														C02</strong
																													><label
																														for="rad_MCMST--2259_3779-3860-"
																														><span
																															class="leftnclear"
																															><span
																																class="crn_label"
																																>Class
																																Number:&nbsp;</span
																															></span
																														><span
																															class="crn_value"
																															style="
																																float: left;
																															"
																															>3779</span
																														></label
																													>
																													<table
																														class="leftnclear nowrap full_table"
																													>
																														<tbody>
																															<tr>
																																<td
																																	class="bg_green full_indic"
																																></td>
																																<td>
																																	<span
																																		class="leftnclear seats_available nowrap"
																																		>Seats:
																																		<span
																																			class="seatText"
																																			>Available</span
																																		></span
																																	>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																												</td>
																												<td
																													align="right"
																												>
																													<div
																														title="Campus: McMaster University"
																														class="campus_block rightnclear"
																													>
																														McMaster
																														University
																													</div>
																													<div
																														class="instructional_method_block rightnclear"
																														title="Instruction Mode"
																													>
																														In
																														Person
																													</div>
																													<div
																														class="rightnclear"
																													>
																														<span
																															class="location_block"
																															title="Building and Room Number"
																															>Michael
																															G.
																															DeGroote
																															Cntr
																															-
																															MDCL_1105<br
																														/></span>
																													</div>
																													<div
																														class="rightnclear"
																														title="Instructor(s)"
																													>
																														Vincent
																														Maccio
																													</div>
																													<div
																														class="credits_block rightnclear"
																													>
																														<span
																															title="Units"
																															>3.0</span
																														>/<span
																															title="Academic Progress Units"
																															>3.0</span
																														>
																														Units
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td
																													colspan="2"
																													class="notes"
																												>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													>
																														Refer
																														to
																														course
																														Description.<br />
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td>
																													<strong
																														class="leftnclear type_block"
																														>TUT
																														T07</strong
																													><label
																														for="rad_MCMST--2259_3779-3860-"
																														><span
																															class="leftnclear"
																															><span
																																class="crn_label"
																																>Class
																																Number:&nbsp;</span
																															></span
																														><span
																															class="crn_value"
																															style="
																																float: left;
																															"
																															>3860</span
																														></label
																													>
																													<table
																														class="leftnclear nowrap full_table"
																													>
																														<tbody>
																															<tr>
																																<td
																																	class="bg_green full_indic"
																																></td>
																																<td>
																																	<span
																																		class="leftnclear seats_available nowrap"
																																		>Seats:
																																		<span
																																			class="seatText"
																																			>Available</span
																																		></span
																																	>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																												</td>
																												<td
																													align="right"
																												>
																													<div
																														title="Campus: McMaster University"
																														class="campus_block rightnclear"
																													>
																														McMaster
																														University
																													</div>
																													<div
																														class="instructional_method_block rightnclear"
																														title="Instruction Mode"
																													>
																														In
																														Person
																													</div>
																													<div
																														class="rightnclear"
																													>
																														<span
																															class="location_block"
																															title="Building and Room Number"
																															>A.N.
																															Bourns
																															Bldg
																															-
																															ABB_166<br
																														/></span>
																													</div>
																													<div
																														class="rightnclear"
																														title="Instructor(s)"
																													>
																														Staff
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td
																													colspan="2"
																													class="notes"
																												>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													></div>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</div>
																								<div
																									style="
																										clear: both;
																									"
																								></div></div
																						></label>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div
																			class="course_box show-books block_animation show_extras be0"
																			style=""
																			data-atomicid="null"
																		>
																			<div
																				class="legend_table computer-only table"
																				style="
																					padding: 0px;
																					border-spacing: 0px;
																					border: 0px;
																				"
																			>
																				<div class="tr">
																					<div
																						class="td course_cell_legend one_col"
																					>
																						<div
																							class="course_header bc2 bh2 bcpin"
																							role="checkbox"
																							aria-checked="false"
																							aria-label=""
																							title="Click to unpin course"
																							tabindex="0"
																							onkeydown="if(event.keyCode == 32){addPin(event,1,'MCMST--2259_2105-2107-',false,'bc2');}"
																							onclick="addPin(event,1,'MCMST--2259_2105-2107-',false,'bc2');"
																							onmouseout="RR.highlightClass(2,false);"
																							onmouseover="RR.highlightClass(2,true);"
																						>
																							<div
																								class="header_cell"
																							>
																								<h4
																									style="
																										float: left;
																									"
																									class="course_title"
																									aria-label="MATH 2LA3 Applications of Linear Algebra running from Sep 2  to  Dec 4 on Tue, Thu, Fri from 11:30 AM to 12:20 PMThu : 12:30 PM to 1:20 PM&lt;br&gt;&lt;/h4&gt;. Given this timetable schedule result, there may be one or more sections that occur at this time below. Click to unpin course"
																								>
																									MATH
																									2LA3
																								</h4>
																								<div
																									style="
																										float: right;
																									"
																									title="Session Code: 1"
																								>
																									<span
																										class="term_label"
																										>2025
																										Fall: </span
																									>Sep
																									2
																									-
																									Dec
																									4
																								</div>
																								<div
																									style="
																										float: right;
																										clear: right;
																									"
																									class="session_label"
																								>
																									Regular
																									Academic
																									&nbsp;&nbsp;
																								</div>
																								<div
																									style="
																										float: left;
																										clear: left;
																									"
																								>
																									<span
																										class="mobileNUmber"
																										>2-</span
																									><span
																										>Applications
																										of
																										Linear
																										Algebra</span
																									>
																								</div>
																								<div
																									style="
																										clear: both;
																									"
																								></div>
																								<div
																									id="hoursInLegend"
																								>
																									Tue,
																									Thu,
																									Fri
																									:
																									11:30
																									AM
																									to
																									12:20
																									PM<br />Thu
																									:
																									12:30
																									PM
																									to
																									1:20
																									PM<br />
																								</div>
																							</div>
																						</div>
																						<label
																							class="vsbselectionnew"
																							><h5
																								class="visuallyhidden"
																							>
																								LEC
																								C01
																								-
																								TUT
																								T02
																							</h5>
																							<div
																								class="selection_row"
																								data-cnfid="1"
																								data-selkey="MCMST--2259_2105-2107-"
																								data-inst="MCMST"
																								data-ac="UGRD"
																							>
																								<div
																									class="selection_table"
																								>
																									<table
																										class="inner_legend_table"
																										style="
																											padding: 0px;
																											border-spacing: 0px;
																											width: 100%;
																										"
																									>
																										<tbody>
																											<tr>
																												<td
																													rowspan="4"
																													valign="middle"
																													align="center"
																													width="25"
																													title="Class is closed"
																													class="legendSelect bg_red empty is-checked"
																												>
																													<span
																														class="sel_radio"
																														data-cnfid="1"
																														data-selkey="MCMST--2259_2105-2107-"
																														data-crns="2105 (2107)"
																														data-color="red"
																													></span>
																												</td>
																												<td>
																													<strong
																														class="leftnclear type_block"
																														>LEC
																														C01</strong
																													><span
																														class="course_state"
																														title=""
																														>Enrolled</span
																													><label
																														for="rad_MCMST--2259_2105-2107-"
																														><span
																															class="leftnclear"
																															><span
																																class="crn_label"
																																>Class
																																Number:&nbsp;</span
																															></span
																														><span
																															class="crn_value"
																															style="
																																float: left;
																															"
																															>2105</span
																														></label
																													>
																													<table
																														class="leftnclear nowrap full_table"
																													>
																														<tbody>
																															<tr>
																																<td
																																	class="bg_green full_indic"
																																></td>
																																<td>
																																	<span
																																		class="leftnclear seats_available nowrap"
																																		>Seats:
																																		<span
																																			class="seatText"
																																			>Available</span
																																		></span
																																	>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																												</td>
																												<td
																													align="right"
																												>
																													<div
																														title="Campus: McMaster University"
																														class="campus_block rightnclear"
																													>
																														McMaster
																														University
																													</div>
																													<div
																														class="instructional_method_block rightnclear"
																														title="Instruction Mode"
																													>
																														In
																														Person
																													</div>
																													<div
																														class="rightnclear"
																													>
																														<span
																															class="location_block"
																															title="Building and Room Number"
																															>Togo
																															Salmon
																															Hall
																															-
																															TSH_B128<br
																														/></span>
																													</div>
																													<div
																														class="rightnclear"
																														title="Instructor(s)"
																													>
																														Brett
																														Nasserden
																													</div>
																													<div
																														class="credits_block rightnclear"
																													>
																														<span
																															title="Units"
																															>3.0</span
																														>/<span
																															title="Academic Progress Units"
																															>3.0</span
																														>
																														Units
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td
																													colspan="2"
																													class="notes"
																												>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													>
																														Refer
																														to
																														course
																														Description.<br />
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td>
																													<strong
																														class="leftnclear type_block"
																														>TUT
																														T02</strong
																													><span
																														class="course_state"
																														title=""
																														>Enrolled</span
																													><label
																														for="rad_MCMST--2259_2105-2107-"
																														><span
																															class="leftnclear"
																															><span
																																class="crn_label"
																																>Class
																																Number:&nbsp;</span
																															></span
																														><span
																															class="crn_value"
																															style="
																																float: left;
																															"
																															>2107</span
																														></label
																													>
																													<table
																														class="leftnclear nowrap full_table"
																													>
																														<tbody>
																															<tr>
																																<td
																																	class="bg_red full_indic"
																																></td>
																																<td>
																																	<span
																																		class="leftnclear nowrap"
																																		title="All 90 seats are taken"
																																		>Seats:
																																		<span
																																			class="fullText"
																																			>Full</span
																																		></span
																																	><span
																																		class="legend_waitlist leftnclear nowrap"
																																		><span
																																			title="There is no wait list for this class"
																																			>Wait
																																			List:
																																			<span
																																				class="fullText"
																																				>None</span
																																			></span
																																		></span
																																	>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																												</td>
																												<td
																													align="right"
																												>
																													<div
																														title="Campus: McMaster University"
																														class="campus_block rightnclear"
																													>
																														McMaster
																														University
																													</div>
																													<div
																														class="instructional_method_block rightnclear"
																														title="Instruction Mode"
																													>
																														In
																														Person
																													</div>
																													<div
																														class="rightnclear"
																													>
																														<span
																															class="location_block"
																															title="Building and Room Number"
																															>Burke
																															Science
																															Bldg.
																															-
																															BSB_119<br
																														/></span>
																													</div>
																													<div
																														class="rightnclear"
																														title="Instructor(s)"
																													>
																														Staff
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td
																													colspan="2"
																													class="notes"
																												>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													></div>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</div>
																								<div
																									style="
																										clear: both;
																									"
																								></div></div
																						></label>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div
																			class="course_box show-books block_animation show_extras be0"
																			style=""
																			data-atomicid="null"
																		>
																			<div
																				class="legend_table computer-only table"
																				style="
																					padding: 0px;
																					border-spacing: 0px;
																					border: 0px;
																				"
																			>
																				<div class="tr">
																					<div
																						class="td course_cell_legend one_col"
																					>
																						<div
																							class="course_header bc3 bh3 bcpin"
																							role="checkbox"
																							aria-checked="false"
																							aria-label=""
																							title="Click to unpin course"
																							tabindex="0"
																							onkeydown="if(event.keyCode == 32){addPin(event,2,'MCMST--2259_2951-2952-',false,'bc3');}"
																							onclick="addPin(event,2,'MCMST--2259_2951-2952-',false,'bc3');"
																							onmouseout="RR.highlightClass(3,false);"
																							onmouseover="RR.highlightClass(3,true);"
																						>
																							<div
																								class="header_cell"
																							>
																								<h4
																									style="
																										float: left;
																									"
																									class="course_title"
																									aria-label="COMPSCI 2GA3 Computer Architecture running from Sep 2  to  Dec 4 on Tue, Wed, Fri from 3:30 PM to 4:20 PMThu : 1:30 PM to 2:20 PM&lt;br&gt;&lt;/h4&gt;. Given this timetable schedule result, there may be one or more sections that occur at this time below. Click to unpin course"
																								>
																									COMPSCI
																									2GA3
																								</h4>
																								<div
																									style="
																										float: right;
																									"
																									title="Session Code: 1"
																								>
																									<span
																										class="term_label"
																										>2025
																										Fall: </span
																									>Sep
																									2
																									-
																									Dec
																									4
																								</div>
																								<div
																									style="
																										float: right;
																										clear: right;
																									"
																									class="session_label"
																								>
																									Regular
																									Academic
																									&nbsp;&nbsp;
																								</div>
																								<div
																									style="
																										float: left;
																										clear: left;
																									"
																								>
																									<span
																										class="mobileNUmber"
																										>3-</span
																									><span
																										>Computer
																										Architecture</span
																									>
																								</div>
																								<div
																									style="
																										clear: both;
																									"
																								></div>
																								<div
																									id="hoursInLegend"
																								>
																									Tue,
																									Wed,
																									Fri
																									:
																									3:30
																									PM
																									to
																									4:20
																									PM<br />Thu
																									:
																									1:30
																									PM
																									to
																									2:20
																									PM<br />
																								</div>
																							</div>
																						</div>
																						<label
																							class="vsbselectionnew"
																							><h5
																								class="visuallyhidden"
																							>
																								LEC
																								C01
																								-
																								TUT
																								T01
																							</h5>
																							<div
																								class="selection_row"
																								data-cnfid="2"
																								data-selkey="MCMST--2259_2951-2952-"
																								data-inst="MCMST"
																								data-ac="UGRD"
																							>
																								<div
																									class="selection_table"
																								>
																									<table
																										class="inner_legend_table"
																										style="
																											padding: 0px;
																											border-spacing: 0px;
																											width: 100%;
																										"
																									>
																										<tbody>
																											<tr>
																												<td
																													rowspan="4"
																													valign="middle"
																													align="center"
																													width="25"
																													title="Class is closed"
																													class="legendSelect bg_red empty is-checked"
																												>
																													<span
																														class="sel_radio"
																														data-cnfid="2"
																														data-selkey="MCMST--2259_2951-2952-"
																														data-crns="2951 (2952)"
																														data-color="red"
																													></span>
																												</td>
																												<td>
																													<strong
																														class="leftnclear type_block"
																														>LEC
																														C01</strong
																													><span
																														class="course_state"
																														title=""
																														>Enrolled</span
																													><label
																														for="rad_MCMST--2259_2951-2952-"
																														><span
																															class="leftnclear"
																															><span
																																class="crn_label"
																																>Class
																																Number:&nbsp;</span
																															></span
																														><span
																															class="crn_value"
																															style="
																																float: left;
																															"
																															>2951</span
																														></label
																													>
																													<table
																														class="leftnclear nowrap full_table"
																													>
																														<tbody>
																															<tr>
																																<td
																																	class="bg_green full_indic"
																																></td>
																																<td>
																																	<span
																																		class="leftnclear seats_available nowrap"
																																		>Seats:
																																		<span
																																			class="seatText"
																																			>Available</span
																																		></span
																																	>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																												</td>
																												<td
																													align="right"
																												>
																													<div
																														title="Campus: McMaster University"
																														class="campus_block rightnclear"
																													>
																														McMaster
																														University
																													</div>
																													<div
																														class="instructional_method_block rightnclear"
																														title="Instruction Mode"
																													>
																														In
																														Person
																													</div>
																													<div
																														class="rightnclear"
																													>
																														<span
																															class="location_block"
																															title="Building and Room Number"
																															>John
																															Hodgins
																															Engineer
																															Bldg
																															-
																															JHE_376<br
																														/></span>
																													</div>
																													<div
																														class="rightnclear"
																														title="Instructor(s)"
																													>
																														Staff
																													</div>
																													<div
																														class="credits_block rightnclear"
																													>
																														<span
																															title="Units"
																															>3.0</span
																														>/<span
																															title="Academic Progress Units"
																															>3.0</span
																														>
																														Units
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td
																													colspan="2"
																													class="notes"
																												>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													>
																														Refer
																														to
																														course
																														Description.<br />
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td>
																													<strong
																														class="leftnclear type_block"
																														>TUT
																														T01</strong
																													><span
																														class="course_state"
																														title=""
																														>Enrolled</span
																													><label
																														for="rad_MCMST--2259_2951-2952-"
																														><span
																															class="leftnclear"
																															><span
																																class="crn_label"
																																>Class
																																Number:&nbsp;</span
																															></span
																														><span
																															class="crn_value"
																															style="
																																float: left;
																															"
																															>2952</span
																														></label
																													>
																													<table
																														class="leftnclear nowrap full_table"
																													>
																														<tbody>
																															<tr>
																																<td
																																	class="bg_red full_indic"
																																></td>
																																<td>
																																	<span
																																		class="leftnclear nowrap"
																																		title="All 50 seats are taken"
																																		>Seats:
																																		<span
																																			class="fullText"
																																			>Full</span
																																		></span
																																	><span
																																		class="legend_waitlist leftnclear nowrap"
																																		><span
																																			title="There is no wait list for this class"
																																			>Wait
																																			List:
																																			<span
																																				class="fullText"
																																				>None</span
																																			></span
																																		></span
																																	>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																												</td>
																												<td
																													align="right"
																												>
																													<div
																														title="Campus: McMaster University"
																														class="campus_block rightnclear"
																													>
																														McMaster
																														University
																													</div>
																													<div
																														class="instructional_method_block rightnclear"
																														title="Instruction Mode"
																													>
																														In
																														Person
																													</div>
																													<div
																														class="rightnclear"
																													>
																														<span
																															class="location_block"
																															title="Building and Room Number"
																															>Building
																															T13
																															-
																															T13_106<br
																														/></span>
																													</div>
																													<div
																														class="rightnclear"
																														title="Instructor(s)"
																													>
																														Staff
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td
																													colspan="2"
																													class="notes"
																												>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													></div>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</div>
																								<div
																									style="
																										clear: both;
																									"
																								></div></div
																						></label>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div
																			class="course_box show-books block_animation show_extras be0"
																			style=""
																			data-atomicid="null"
																		>
																			<div
																				class="legend_table computer-only table"
																				style="
																					padding: 0px;
																					border-spacing: 0px;
																					border: 0px;
																				"
																			>
																				<div class="tr">
																					<div
																						class="td course_cell_legend one_col"
																					>
																						<div
																							class="course_header bc4 bh4 bcpin"
																							role="checkbox"
																							aria-checked="false"
																							aria-label=""
																							title="Click to unpin course"
																							tabindex="0"
																							onkeydown="if(event.keyCode == 32){addPin(event,3,'MCMST--2259_3484-3485-',false,'bc4');}"
																							onclick="addPin(event,3,'MCMST--2259_3484-3485-',false,'bc4');"
																							onmouseout="RR.highlightClass(4,false);"
																							onmouseover="RR.highlightClass(4,true);"
																						>
																							<div
																								class="header_cell"
																							>
																								<h4
																									style="
																										float: left;
																									"
																									class="course_title"
																									aria-label="COMPSCI 2LC3 Logical Reasoning for Computer Science running from Sep 2  to  Dec 4 on Mon, Thu from 3:30 PM to 4:20 PMTue : 4:30 PM to 5:20 PM&lt;br&gt;&lt;/h4&gt;Fri : 12:30 PM to 2:20 PM&lt;br/&gt;. Given this timetable schedule result, there may be one or more sections that occur at this time below. Click to unpin course"
																								>
																									COMPSCI
																									2LC3
																								</h4>
																								<div
																									style="
																										float: right;
																									"
																									title="Session Code: 1"
																								>
																									<span
																										class="term_label"
																										>2025
																										Fall: </span
																									>Sep
																									2
																									-
																									Dec
																									4
																								</div>
																								<div
																									style="
																										float: right;
																										clear: right;
																									"
																									class="session_label"
																								>
																									Regular
																									Academic
																									&nbsp;&nbsp;
																								</div>
																								<div
																									style="
																										float: left;
																										clear: left;
																									"
																								>
																									<span
																										class="mobileNUmber"
																										>4-</span
																									><span
																										>Logical
																										Reasoning
																										for
																										Computer
																										Science</span
																									>
																								</div>
																								<div
																									style="
																										clear: both;
																									"
																								></div>
																								<div
																									id="hoursInLegend"
																								>
																									Mon,
																									Thu
																									:
																									3:30
																									PM
																									to
																									4:20
																									PM<br />Tue
																									:
																									4:30
																									PM
																									to
																									5:20
																									PM<br />Fri
																									:
																									12:30
																									PM
																									to
																									2:20
																									PM<br />
																								</div>
																							</div>
																						</div>
																						<label
																							class="vsbselectionnew"
																							><h5
																								class="visuallyhidden"
																							>
																								LEC
																								C01
																								-
																								TUT
																								T01
																							</h5>
																							<div
																								class="selection_row"
																								data-cnfid="3"
																								data-selkey="MCMST--2259_3484-3485-"
																								data-inst="MCMST"
																								data-ac="UGRD"
																							>
																								<div
																									class="selection_table"
																								>
																									<table
																										class="inner_legend_table"
																										style="
																											padding: 0px;
																											border-spacing: 0px;
																											width: 100%;
																										"
																									>
																										<tbody>
																											<tr>
																												<td
																													rowspan="4"
																													valign="middle"
																													align="center"
																													width="25"
																													title="Class is closed"
																													class="legendSelect bg_red empty is-checked"
																												>
																													<span
																														class="sel_radio"
																														data-cnfid="3"
																														data-selkey="MCMST--2259_3484-3485-"
																														data-crns="3484 (3485)"
																														data-color="red"
																													></span>
																												</td>
																												<td>
																													<strong
																														class="leftnclear type_block"
																														>LEC
																														C01</strong
																													><span
																														class="course_state"
																														title=""
																														>Enrolled</span
																													><label
																														for="rad_MCMST--2259_3484-3485-"
																														><span
																															class="leftnclear"
																															><span
																																class="crn_label"
																																>Class
																																Number:&nbsp;</span
																															></span
																														><span
																															class="crn_value"
																															style="
																																float: left;
																															"
																															>3484</span
																														></label
																													>
																													<table
																														class="leftnclear nowrap full_table"
																													>
																														<tbody>
																															<tr>
																																<td
																																	class="bg_green full_indic"
																																></td>
																																<td>
																																	<span
																																		class="leftnclear seats_available nowrap"
																																		>Seats:
																																		<span
																																			class="seatText"
																																			>Available</span
																																		></span
																																	>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																												</td>
																												<td
																													align="right"
																												>
																													<div
																														title="Campus: McMaster University"
																														class="campus_block rightnclear"
																													>
																														McMaster
																														University
																													</div>
																													<div
																														class="instructional_method_block rightnclear"
																														title="Instruction Mode"
																													>
																														In
																														Person
																													</div>
																													<div
																														class="rightnclear"
																													>
																														<span
																															class="location_block"
																															title="Building and Room Number"
																															>John
																															Hodgins
																															Engineer
																															Bldg
																															-
																															JHE_376<br
																														/></span>
																													</div>
																													<div
																														class="rightnclear"
																														title="Instructor(s)"
																													>
																														Wolfram
																														Kahl
																													</div>
																													<div
																														class="credits_block rightnclear"
																													>
																														<span
																															title="Units"
																															>3.0</span
																														>/<span
																															title="Academic Progress Units"
																															>3.0</span
																														>
																														Units
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td
																													colspan="2"
																													class="notes"
																												>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													>
																														Refer
																														to
																														course
																														Description.<br />
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td>
																													<strong
																														class="leftnclear type_block"
																														>TUT
																														T01</strong
																													><span
																														class="course_state"
																														title=""
																														>Enrolled</span
																													><label
																														for="rad_MCMST--2259_3484-3485-"
																														><span
																															class="leftnclear"
																															><span
																																class="crn_label"
																																>Class
																																Number:&nbsp;</span
																															></span
																														><span
																															class="crn_value"
																															style="
																																float: left;
																															"
																															>3485</span
																														></label
																													>
																													<table
																														class="leftnclear nowrap full_table"
																													>
																														<tbody>
																															<tr>
																																<td
																																	class="bg_red full_indic"
																																></td>
																																<td>
																																	<span
																																		class="leftnclear nowrap"
																																		title="All 40 seats are taken"
																																		>Seats:
																																		<span
																																			class="fullText"
																																			>Full</span
																																		></span
																																	><span
																																		class="legend_waitlist leftnclear nowrap"
																																		><span
																																			title="There is no wait list for this class"
																																			>Wait
																																			List:
																																			<span
																																				class="fullText"
																																				>None</span
																																			></span
																																		></span
																																	>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																												</td>
																												<td
																													align="right"
																												>
																													<div
																														title="Campus: McMaster University"
																														class="campus_block rightnclear"
																													>
																														McMaster
																														University
																													</div>
																													<div
																														class="instructional_method_block rightnclear"
																														title="Instruction Mode"
																													>
																														In
																														Person
																													</div>
																													<div
																														class="rightnclear"
																													>
																														<span
																															class="location_block"
																															title="Building and Room Number"
																															>John
																															Hodgins
																															Engineer
																															Bldg
																															-
																															JHE_210<br
																														/></span>
																													</div>
																													<div
																														class="rightnclear"
																														title="Instructor(s)"
																													>
																														Staff
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td
																													colspan="2"
																													class="notes"
																												>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													></div>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</div>
																								<div
																									style="
																										clear: both;
																									"
																								></div></div
																						></label>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div
																			class="course_box show-books block_animation show_extras be0"
																			style=""
																			data-atomicid="null"
																		>
																			<div
																				class="legend_table computer-only table"
																				style="
																					padding: 0px;
																					border-spacing: 0px;
																					border: 0px;
																				"
																			>
																				<div class="tr">
																					<div
																						class="td course_cell_legend one_col"
																					>
																						<div
																							class="course_header bc5 bh5 bcpin"
																							role="checkbox"
																							aria-checked="false"
																							aria-label=""
																							title="Click to unpin course"
																							tabindex="0"
																							onkeydown="if(event.keyCode == 32){addPin(event,4,'MCMST--2259_3489-3490-',false,'bc5');}"
																							onclick="addPin(event,4,'MCMST--2259_3489-3490-',false,'bc5');"
																							onmouseout="RR.highlightClass(5,false);"
																							onmouseover="RR.highlightClass(5,true);"
																						>
																							<div
																								class="header_cell"
																							>
																								<h4
																									style="
																										float: left;
																									"
																									class="course_title"
																									aria-label="COMPSCI 2ME3 Introduction to Software Development running from Sep 2  to  Dec 4 on Mon, Wed from 2:30 PM to 3:20 PMFri : 4:30 PM to 5:20 PM&lt;br&gt;&lt;/h4&gt;Wed : 4:30 PM to 6:20 PM&lt;br/&gt;. Given this timetable schedule result, there may be one or more sections that occur at this time below. Click to unpin course"
																								>
																									COMPSCI
																									2ME3
																								</h4>
																								<div
																									style="
																										float: right;
																									"
																									title="Session Code: 1"
																								>
																									<span
																										class="term_label"
																										>2025
																										Fall: </span
																									>Sep
																									2
																									-
																									Dec
																									4
																								</div>
																								<div
																									style="
																										float: right;
																										clear: right;
																									"
																									class="session_label"
																								>
																									Regular
																									Academic
																									&nbsp;&nbsp;
																								</div>
																								<div
																									style="
																										float: left;
																										clear: left;
																									"
																								>
																									<span
																										class="mobileNUmber"
																										>5-</span
																									><span
																										>Introduction
																										to
																										Software
																										Development</span
																									>
																								</div>
																								<div
																									style="
																										clear: both;
																									"
																								></div>
																								<div
																									id="hoursInLegend"
																								>
																									Mon,
																									Wed
																									:
																									2:30
																									PM
																									to
																									3:20
																									PM<br />Fri
																									:
																									4:30
																									PM
																									to
																									5:20
																									PM<br />Wed
																									:
																									4:30
																									PM
																									to
																									6:20
																									PM<br />
																								</div>
																							</div>
																						</div>
																						<label
																							class="vsbselectionnew"
																							><h5
																								class="visuallyhidden"
																							>
																								LEC
																								C01
																								-
																								TUT
																								T01
																							</h5>
																							<div
																								class="selection_row"
																								data-cnfid="4"
																								data-selkey="MCMST--2259_3489-3490-"
																								data-inst="MCMST"
																								data-ac="UGRD"
																							>
																								<div
																									class="selection_table"
																								>
																									<table
																										class="inner_legend_table"
																										style="
																											padding: 0px;
																											border-spacing: 0px;
																											width: 100%;
																										"
																									>
																										<tbody>
																											<tr>
																												<td
																													rowspan="4"
																													valign="middle"
																													align="center"
																													width="25"
																													title="Class is closed"
																													class="legendSelect bg_red empty is-checked"
																												>
																													<span
																														class="sel_radio"
																														data-cnfid="4"
																														data-selkey="MCMST--2259_3489-3490-"
																														data-crns="3489 (3490)"
																														data-color="red"
																													></span>
																												</td>
																												<td>
																													<strong
																														class="leftnclear type_block"
																														>LEC
																														C01</strong
																													><span
																														class="course_state"
																														title=""
																														>Enrolled</span
																													><label
																														for="rad_MCMST--2259_3489-3490-"
																														><span
																															class="leftnclear"
																															><span
																																class="crn_label"
																																>Class
																																Number:&nbsp;</span
																															></span
																														><span
																															class="crn_value"
																															style="
																																float: left;
																															"
																															>3489</span
																														></label
																													>
																													<table
																														class="leftnclear nowrap full_table"
																													>
																														<tbody>
																															<tr>
																																<td
																																	class="bg_green full_indic"
																																></td>
																																<td>
																																	<span
																																		class="leftnclear seats_available nowrap"
																																		>Seats:
																																		<span
																																			class="seatText"
																																			>Available</span
																																		></span
																																	>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																												</td>
																												<td
																													align="right"
																												>
																													<div
																														title="Campus: McMaster University"
																														class="campus_block rightnclear"
																													>
																														McMaster
																														University
																													</div>
																													<div
																														class="instructional_method_block rightnclear"
																														title="Instruction Mode"
																													>
																														In
																														Person
																													</div>
																													<div
																														class="rightnclear"
																													>
																														<span
																															class="location_block"
																															title="Building and Room Number"
																															>Togo
																															Salmon
																															Hall
																															-
																															TSH_B128<br
																														/></span>
																													</div>
																													<div
																														class="rightnclear"
																														title="Instructor(s)"
																													>
																														Ye
																														Yuan
																													</div>
																													<div
																														class="credits_block rightnclear"
																													>
																														<span
																															title="Units"
																															>3.0</span
																														>/<span
																															title="Academic Progress Units"
																															>3.0</span
																														>
																														Units
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td
																													colspan="2"
																													class="notes"
																												>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													>
																														Refer
																														to
																														course
																														Description.<br />
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td>
																													<strong
																														class="leftnclear type_block"
																														>TUT
																														T01</strong
																													><span
																														class="course_state"
																														title=""
																														>Enrolled</span
																													><label
																														for="rad_MCMST--2259_3489-3490-"
																														><span
																															class="leftnclear"
																															><span
																																class="crn_label"
																																>Class
																																Number:&nbsp;</span
																															></span
																														><span
																															class="crn_value"
																															style="
																																float: left;
																															"
																															>3490</span
																														></label
																													>
																													<table
																														class="leftnclear nowrap full_table"
																													>
																														<tbody>
																															<tr>
																																<td
																																	class="bg_red full_indic"
																																></td>
																																<td>
																																	<span
																																		class="leftnclear nowrap"
																																		title="All 50 seats are taken"
																																		>Seats:
																																		<span
																																			class="fullText"
																																			>Full</span
																																		></span
																																	><span
																																		class="legend_waitlist leftnclear nowrap"
																																		><span
																																			title="There is no wait list for this class"
																																			>Wait
																																			List:
																																			<span
																																				class="fullText"
																																				>None</span
																																			></span
																																		></span
																																	>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																												</td>
																												<td
																													align="right"
																												>
																													<div
																														title="Campus: McMaster University"
																														class="campus_block rightnclear"
																													>
																														McMaster
																														University
																													</div>
																													<div
																														class="instructional_method_block rightnclear"
																														title="Instruction Mode"
																													>
																														In
																														Person
																													</div>
																													<div
																														class="rightnclear"
																													>
																														<span
																															class="location_block"
																															title="Building and Room Number"
																															>Michael
																															G.
																															DeGroote
																															Cntr
																															-
																															MDCL_1010<br
																														/></span>
																													</div>
																													<div
																														class="rightnclear"
																														title="Instructor(s)"
																													>
																														Staff
																													</div>
																												</td>
																											</tr>
																											<tr>
																												<td
																													colspan="2"
																													class="notes"
																												>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													></div>
																													<div
																														class="leftnclear"
																													></div>
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</div>
																								<div
																									style="
																										clear: both;
																									"
																								></div></div
																						></label>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div
																			id="xcrnListInfos"
																			class="hide50"
																		></div>
																		<div
																			id="xcrnListWarnings"
																			class="hide50"
																		></div>
																	</div>

																	<div
																		id="legend_checkout"
																		class="clearfix2 noprint"
																	>
																		<input
																			class="big_button button_cancel_schedule"
																			type="button"
																			onclick="cancelScheduleClick();"
																			value="◀ Cancel"
																		/>
																		<input
																			class="big_button button_enter_pin"
																			type="button"
																			onclick="userPinPopup();"
																			value="Enter Pin"
																		/>
																		<input
																			class="big_button button_do_actions"
																			type="button"
																			onclick="if(validateCourseEnrollOptions()){confirmAction();}"
																			title="Review actions before proceeding. Click to perform all the actions listed above"
																			value="Do Actions"
																		/>
																		<input
																			class="big_button button_return"
																			type="button"
																			onclick="returnAfterEnroll();"
																			value="Return to 'Select Courses'"
																		/>

																		<div
																			class="reg_final_bubble"
																			style="
																				display: none;
																				clear: both;
																				text-align: right;
																			"
																		>
																			<div
																				style="
																					display: inline-block;
																				"
																			>
																				<div class="bubble">
																					<div
																						class="tip_top"
																					>
																						<i
																							class="fa fa-caret-up"
																						></i>
																					</div>
																					<img
																						src="test_loggedin_semesterselected_files/step_arrow_north.png"
																						alt="Up arrow for step instructions"
																						class="pull-right phone step_arrow"
																					/>
																					Click this
																					button to view
																					the latest state
																					of your courses.
																					<div
																						class="tip_bottom"
																						style="
																							display: none;
																						"
																						id="post_checkout_tip"
																					>
																						<i
																							class="fa fa-caret-down"
																						></i>
																					</div>
																					<div
																						class="clearfix"
																					></div>
																				</div>
																			</div>
																		</div>

																		<input
																			class="big_button button_post_checkout"
																			onclick="custButtonPostCheckout();"
																			type="button"
																			value="Proceed to Shopping Cart"
																		/>
																	</div>

																	<div
																		id="legend_headers"
																		class="noprint"
																	>
																		<div
																			class="course_legend_header"
																		>
																			Class
																		</div>
																		<div
																			class="course_action_header"
																		>
																			<span class="title_act1"
																				>Action</span
																			>
																			<span class="title_act2"
																				>Result</span
																			>
																		</div>
																		<div
																			class="course_option_header"
																		>
																			Options
																		</div>
																		<div
																			class="course_result_header"
																		>
																			Result
																		</div>
																	</div>
																</div>
															</div>

															<div style="clear: both"></div>
														</div>
													</div>

													<div
														id="no_results_message_div"
														aria-atomic="true"
													>
														<span
															role="alert"
															aria-live="assertive"
															aria-atomic="true"
															style="font-size: 20px; color: #cc3333"
															>No Results</span
														><br />
														<br />There are no schedule combination(s)
														with the selected courses. <br /><br />
														<div class="noResultsIdea">
															<table>
																<tbody>
																	<tr>
																		<td>
																			<img
																				src="test_loggedin_semesterselected_files/lightbulb_yl.svg"
																				height="48"
																				width="48"
																				alt="Light bulb icon"
																			/>
																		</td>
																		<td>
																			<strong>Tip:</strong>
																			<span
																				class="noResultsIdeaText"
																				>TEMP</span
																			>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
													<div id="no_cnfs_div">
														<span
															role="alert"
															aria-atomic="true"
															style="font-size: 20px; color: #cc3333"
															>No Courses Selected</span
														><br />
														<br />Select at least one course to see
														potential schedules here.
													</div>
												</div>

												<div class="reg_welcome">
													<div class="welcome_holder">
														<div class="welcome_title">Welcome</div>
														<div class="welcome_subtext">
															<span class="hi_greeting hide50"
																>Hi, Ameya Gupta.</span
															>
															<p>
																MY TIMETABLE is a self-service tool
																that enables you to generate your
																schedule conflict free and enroll
																you directly into Mosaic. To learn
																about this tool please go to
																<br /><a
																	href="http://registrar.mcmaster.ca/mytimetable/"
																	><strong
																		>http://registrar.mcmaster.ca/mytimetable/</strong
																	></a
																>
															</p>
															<p>
																<font color="”#4B0082”&lt;b"
																	>University Policy on
																	Supplementary Fees:</font
																>
																If, at any time during a fall/winter
																session, you enroll in 18 units or
																more, you become an MSU student. You
																are then entitled to the services of
																an MSU student and are responsible
																for the MSU supplementary fees, even
																if you later drop back below 18
																units in the same fall/winter
																session. Please visit the
																<a href="http://www.msumcmaster.ca/"
																	><strong>MSU website</strong></a
																>
																regarding any inquiries regarding
																part-time vs. full-time fees.
															</p>
														</div>
													</div>
													<div class="welcome_cont_but mobileRegularOnly">
														<input
															type="button"
															class="big_button"
															value="Continue"
															onclick="UU.caseWelcomeContinue();"
														/>
													</div>
												</div>

												<div class="reg_term">
													<h2 class="visuallyhidden">
														This is the select term menu, please select
														your term from the options below.
													</h2>
													<button
														class="mdl-button mdl-js-button welcome-back"
														onclick="UU.caseWelcomeBack();"
														data-upgraded=",MaterialButton"
														style="display: none"
													>
														BACK
													</button>
													<div class="welcome_holder">
														<div class="welcome_title">Welcome</div>
														<div class="welcome_subtext">
															<span class="hi_greeting hide50"
																>Hi, Ameya Gupta.</span
															>
															<p>
																MY TIMETABLE is a self-service tool
																that enables you to generate your
																schedule conflict free and enroll
																you directly into Mosaic. To learn
																about this tool please go to
																<br /><a
																	href="http://registrar.mcmaster.ca/mytimetable/"
																	><strong
																		>http://registrar.mcmaster.ca/mytimetable/</strong
																	></a
																>
															</p>
															<p>
																<font color="”#4B0082”&lt;b"
																	>University Policy on
																	Supplementary Fees:</font
																>
																If, at any time during a fall/winter
																session, you enroll in 18 units or
																more, you become an MSU student. You
																are then entitled to the services of
																an MSU student and are responsible
																for the MSU supplementary fees, even
																if you later drop back below 18
																units in the same fall/winter
																session. Please visit the
																<a href="http://www.msumcmaster.ca/"
																	><strong>MSU website</strong></a
																>
																regarding any inquiries regarding
																part-time vs. full-time fees.
															</p>
														</div>
													</div>
													<div
														class="welcome_title2"
														style="display: none"
													>
														Select Term
													</div>
													<div class="welcome_term_input_notice"></div>
													<div id="welcomeActions"></div>
													<div class="welcome_term_subtext">
														Select a term:
													</div>
													<div
														class="sorry_msg sorry_no_terms"
														style="display: none"
													>
														<i class="fa fa-exclamation-triangle"></i>
														Sorry, there are no terms available to you
														at this time.
													</div>
													<div
														class="sorry_msg sorry_wrong_campus"
														style="display: none"
													>
														<i class="fa fa-exclamation-triangle"></i>
														Sorry, your campus is not presently enabled
														for this system.
													</div>
													<div class="sorry_msg sorry_blocked_user">
														<i class="fa fa-exclamation-triangle"></i>
														Your schedule is unavailable for viewing at
														this time.
													</div>
													<div id="welcomeTerms">
														<div
															class="demo-card-wide mdl-card mdl-shadow--2dp term-card"
															data-term="3202520"
														>
															<a
																class="term-card-title"
																href="javascript:UU.caseTermContinue(3202520);"
																>2025 Spring/Summer</a
															>
														</div>
														<div
															class="demo-card-wide mdl-card mdl-shadow--2dp term-card"
															data-term="3202530"
														>
															<a
																class="term-card-title"
																href="javascript:UU.caseTermContinue(3202530);"
																>2025 Fall</a
															>
														</div>
														<div
															class="demo-card-wide mdl-card mdl-shadow--2dp term-card"
															data-term="3202610"
														>
															<a
																class="term-card-title"
																href="javascript:UU.caseTermContinue(3202610);"
																>2026 Winter</a
															>
														</div>
													</div>
												</div>

												<div class="reg_recommendation">
													<button
														class="mdl-button mdl-js-button welcome-back"
														onclick="UU.caseWelcomeBack();"
														data-upgraded=",MaterialButton"
													>
														BACK
													</button>
													<h2
														class="visuallyhidden"
														aria-label="You have a Recommendation/Plan/Assigned Blocks"
													></h2>
													<button
														class="mdl-button mdl-js-button welcome-back welcome-doubleback"
														onclick="UU.caseWelcomeDoubleBack();"
														style="display: none"
														data-upgraded=",MaterialButton"
													>
														BACK
													</button>
													<div class="welcome_holder"></div>
													<div class="welcome_title2">
														You have a Recommendation/Plan/Assigned
														Blocks
													</div>
													<div
														class="welcome_subtext courseCount"
														id="recommendedShow"
														style="display: none"
													>
														Your advisor has
														<span id="recommendedCount">a</span>
														recommendation for you:
													</div>
													<div id="suggestedResult"></div>
													<div class="skip-rec-div">
														<button
															class="mdl-button mdl-js-button"
															id="skip_rec"
															onclick="UU.caseWelcomeDone(false, true);"
															data-upgraded=",MaterialButton"
														>
															Skip
														</button>
													</div>
												</div>
											</div>
										</div>
									</td>
									<!-- end of page_results -->

									<td
										id="page_favorites"
										role="region"
										aria-labelledby="page_favorites_label"
										class="vsb_page disable-get-schedule noprint"
										style="width: 2.39095%"
									>
										<div
											class="page_fader"
											style="display: block; opacity: 1"
										></div>
										<div
											class="full_page_title title_font collapsed"
											id="page_favorites_label"
											style="background-color: rgb(255, 255, 255)"
										>
											Favourites<span id="favCount">(2)</span>
										</div>
										<div class="full_page">
											<div
												class="full_page_content invisible_widescreen"
												style="position: absolute; width: 0px; opacity: 0"
											>
												<div id="tab_favorites">
													<h2
														class="visuallyhidden"
														aria-label="Favourites region. This region contains your saved favorite course schedules you can load."
													></h2>
													<p
														class="accessOnly"
														style="margin-bottom: 15px"
													>
														This is the Favourites region. If you select
														a favourite you can rename it, load it, or
														delete it.
													</p>
													<h3 class="visuallyhidden">
														List of Favourites
													</h3>

													<div class="thumbnail_window">
														<a
															href="javascript:void(0)"
															tabindex="0"
															id="thumbtest1_0"
															title="Untitled 1 (favorite 1 of 2)"
															class="thumbContainer"
															><div
																class="thumbnail_mask"
																id="delete_btn0"
															></div>
															<canvas
																class="thumbnail"
																id="thumbtest_0"
																width="100"
																height="100"
															></canvas></a
														><a
															href="javascript:void(0)"
															tabindex="0"
															id="thumbtest1_1"
															title="Untitled 2 (favorite 2 of 2)"
															class="thumbContainer"
															><div
																class="thumbnail_mask"
																id="delete_btn1"
															></div>
															<canvas
																class="thumbnail"
																id="thumbtest_1"
																width="100"
																height="100"
															></canvas
														></a>
													</div>

													<table style="width: 100%; margin: 6px 0px">
														<tbody>
															<tr>
																<td class="tab-col">
																	<button
																		class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent load_button"
																		aria-label="Load favourite into Select Courses region"
																		onclick="UU.caseLoadFavorite();UU.caseViewResults();"
																		disabled="disabled"
																		data-upgraded=",MaterialButton"
																	>
																		◄ Load
																	</button>
																</td>
																<td class="tab-col">
																	<div
																		class="fav_title_edit"
																		style="display: none"
																	>
																		<div
																			class="editable_text_div"
																			id="editable_text"
																		>
																			&nbsp;
																		</div>
																		<label
																			for="text_editor"
																			class="visuallyhidden"
																			>Title of
																			Favorite</label
																		>
																		<input
																			type="text"
																			class="text_editor_div"
																			id="text_editor"
																			maxlength="20"
																			style="display: none"
																		/>
																		<a
																			href="javascript:void(0);"
																			class="edit_pencil"
																			id="pencil1"
																			title="Click to edit title"
																		></a>
																		<div
																			class="favorite_date_time"
																			id="fav-date-time1"
																		>
																			Feb. 20, 3:45
																		</div>
																	</div>
																</td>
																<td class="tab-col">
																	<button
																		class="mdl-button mdl-js-button mdl-button--raised white-background delete_button"
																		style="float: right"
																		onclick="UU.caseDeleteFavorite();"
																		title="Delete favourite"
																		disabled="disabled"
																		data-upgraded=",MaterialButton"
																	>
																		Delete
																	</button>
																	<div style="clear: both"></div>
																</td>
															</tr>
														</tbody>
													</table>

													<div
														class="preview_schedule"
														aria-hidden="true"
														style="display: none"
													>
														<h3
															class="visuallyhidden"
															style="padding-left: 62px"
														>
															Schedule
														</h3>
														<div class="visuallyhidden">
															If you are using a screen reader, the
															contents of this heading will not be
															useful. To read this favorite you must
															load it, then read the details under the
															legend heading found on the schedule
															result region.
														</div>
														<div
															style="position: relative"
															class="timetable_part"
															aria-hidden="true"
														>
															<div class="weekName">
																&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
																	class="timetable_title"
																	>&nbsp;</span
																>
															</div>
															<div class="timezoneAbbr">&nbsp;</div>
															<div class="timetable table_container">
																<div style="position: relative">
																	<div class="weekArea">
																		<table
																			cellpadding="0"
																			cellspacing="0"
																		>
																			<tbody>
																				<tr class="header">
																					<td>
																						Mon<span
																							class="day_2_date"
																						></span>
																						<div
																							class="holl_2 holiday_label"
																						></div>
																					</td>
																					<td>
																						Tue<span
																							class="day_3_date"
																						></span>
																						<div
																							class="holl_3 holiday_label"
																						></div>
																					</td>
																					<td>
																						Wed<span
																							class="day_4_date"
																						></span>
																						<div
																							class="holl_4 holiday_label"
																						></div>
																					</td>
																					<td>
																						Thu<span
																							class="day_5_date"
																						></span>
																						<div
																							class="holl_5 holiday_label"
																						></div>
																					</td>
																					<td>
																						Fri<span
																							class="day_6_date"
																						></span>
																						<div
																							class="holl_6 holiday_label"
																						></div>
																					</td>
																				</tr>
																				<tr class="even">
																					<td>
																						<div
																							class="left_fade"
																						>
																							<div
																								class="hour_marker"
																							>
																								9
																							</div>
																							<div
																								class="min_marker"
																							>
																								am
																							</div>
																						</div>
																					</td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																				<tr class="odd">
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																				<tr class="even">
																					<td>
																						<div
																							class="left_fade"
																						>
																							<div
																								class="hour_marker"
																							>
																								10
																							</div>
																							<div
																								class="min_marker"
																							>
																								am
																							</div>
																						</div>
																					</td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																				<tr class="odd">
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																				<tr class="even">
																					<td>
																						<div
																							class="left_fade"
																						>
																							<div
																								class="hour_marker"
																							>
																								11
																							</div>
																							<div
																								class="min_marker"
																							>
																								am
																							</div>
																						</div>
																					</td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																				<tr class="odd">
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																				<tr class="even">
																					<td>
																						<div
																							class="left_fade"
																						>
																							<div
																								class="hour_marker"
																							>
																								12
																							</div>
																							<div
																								class="min_marker"
																							>
																								pm
																							</div>
																						</div>
																					</td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																				<tr class="odd">
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																				<tr class="even">
																					<td>
																						<div
																							class="left_fade"
																						>
																							<div
																								class="hour_marker"
																							>
																								1
																							</div>
																							<div
																								class="min_marker"
																							>
																								pm
																							</div>
																						</div>
																					</td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																				<tr class="odd">
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																				<tr class="even">
																					<td>
																						<div
																							class="left_fade"
																						>
																							<div
																								class="hour_marker"
																							>
																								2
																							</div>
																							<div
																								class="min_marker"
																							>
																								pm
																							</div>
																						</div>
																					</td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																				<tr class="odd">
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																				<tr class="even">
																					<td>
																						<div
																							class="left_fade"
																						>
																							<div
																								class="hour_marker"
																							>
																								3
																							</div>
																							<div
																								class="min_marker"
																							>
																								pm
																							</div>
																						</div>
																					</td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																				<tr class="odd">
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																				<tr class="even">
																					<td>
																						<div
																							class="left_fade"
																						>
																							<div
																								class="hour_marker"
																							>
																								4
																							</div>
																							<div
																								class="min_marker"
																							>
																								pm
																							</div>
																						</div>
																					</td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																				<tr class="odd">
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																				<tr class="even">
																					<td>
																						<div
																							class="left_fade"
																						>
																							<div
																								class="hour_marker"
																							>
																								5
																							</div>
																							<div
																								class="min_marker"
																							>
																								pm
																							</div>
																						</div>
																					</td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																				<tr class="odd">
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																					<td></td>
																				</tr>
																			</tbody>
																		</table>
																	</div>
																	<div
																		class="currentBusyBlocks"
																		style="
																			position: absolute;
																			display: block;
																			top: 0px;
																			left: 0px;
																			width: 100%;
																			height: 100%;
																		"
																	>
																		&nbsp;
																	</div>
																	<div
																		class="weekTimes"
																		style="
																			position: absolute;
																			display: block;
																			top: 0px;
																			left: 0px;
																			width: 100%;
																			height: 100%;
																		"
																		title=""
																	></div>
																</div>
															</div>
														</div>
														<div class="timetableMsg"></div>
														<div
															class="monthscalc"
															aria-hidden="true"
															style="display: none"
														>
															<div
																class="sliderdiv timetable_part"
																aria-hidden="true"
																style="position: relative"
															>
																<div
																	style="
																		text-align: center;
																		padding: 4px 0 12px 0;
																	"
																>
																	<label>
																		<span class="disp_days"
																			>---</span
																		></label
																	>
																</div>
																<div
																	class="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
																	data-begin="1"
																	data-end="20"
																	aria-disabled="false"
																	style="
																		left: 31.0484%;
																		width: 45.9677%;
																	"
																>
																	<div
																		class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min"
																		style="width: 0%"
																	></div>
																	<a
																		class="ui-slider-handle ui-state-default ui-corner-all"
																		href="#"
																		style="
																			left: 0%;
																			width: 5.64516%;
																		"
																		tabindex="-1"
																		><span
																			style="height: 50px"
																		></span
																	></a>
																</div>
																<button
																	class="sliderleft disable-no-results"
																	title="Previous Week"
																	style="right: 71.7742%"
																>
																	<i
																		class="nav-prev results-week-nav"
																		aria-hidden="true"
																	></i>
																</button>
																<button
																	class="sliderright disable-no-results"
																	title="Next Week"
																	style="left: 79.8387%"
																>
																	<i
																		class="nav-next results-week-nav"
																		aria-hidden="true"
																	></i>
																</button>
															</div>
															<div
																class="dateGridHolder"
																style="position: relative"
															>
																<div class="dateGridTable">
																	<table
																		class="dateGrid larger"
																		style="
																			border-spacing: 0px;
																			padding: 0px;
																		"
																	>
																		<tbody>
																			<tr>
																				<td
																					style="
																						width: 25%;
																					"
																					class="mo"
																				>
																					Oct
																				</td>
																				<td
																					style="
																						width: 25%;
																					"
																					class="mo"
																				>
																					Nov
																				</td>
																				<td
																					style="
																						width: 25%;
																					"
																					class="mo"
																				>
																					Dec
																				</td>
																				<td
																					style="
																						width: 25%;
																					"
																					class="mo"
																				>
																					Jan '08
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
																<div class="dateGridBlocks"></div>
																<div class="scheduleWarning"></div>
															</div>
														</div>
													</div>
													<div
														class="preview_message do_select saved_notice"
													>
														No Favourite Selected
													</div>
												</div>
												<!-- Recommendations tab -->
												<div
													id="tab_recommendations"
													style="display: none; min-height: 700px"
												>
													<div id="page_rec_list">
														<div class="rec_container">
															<div class="rec_container">
																<div class="sdl_input rec_search">
																	<label for="rec_search_input"
																		>Search for
																		Recommendation</label
																	>
																	<input
																		type="text"
																		id="rec_search_input"
																		placeholder="Title, Description, Student ID..."
																		title="Search by Recommendation ID, Student ID, Advisor, Title, Course..."
																	/>
																</div>
															</div>

															<div class="switch-field">
																<input
																	type="radio"
																	id="switch_left"
																	name="switch_2"
																	value="all"
																	checked="checked"
																/>
																<label
																	for="switch_left"
																	tabindex="0"
																	>All</label
																>
																<input
																	type="radio"
																	id="switch_center"
																	name="switch_2"
																	value="created"
																/>
																<label
																	for="switch_center"
																	tabindex="0"
																	>Created by me</label
																>
																<input
																	type="radio"
																	id="switch_right"
																	name="switch_2"
																	value="modified"
																/>
																<label
																	for="switch_right"
																	tabindex="0"
																	>Modified by me</label
																>
															</div>
															<div class="rec-advising-warning">
																Only displaying recommendations in
																<span class="active-term-label"
																	>2025 Fall</span
																>
															</div>
														</div>
														<div class="rec_results_top"></div>
														<div
															class="rec_results_noterm saved_notice"
														>
															No Term Selected
														</div>
														<div class="rec_results">
															<div
																class="rec_result"
																style="display: none"
																title="Edit Recommendation"
															>
																<div class="rec_icon">
																	<i
																		class="fa fa-calendar"
																		aria-hidden="true"
																	></i>
																</div>
																<div class="rec_info">
																	<div
																		class="rec_info_item recr-id"
																	>
																		R-2124
																	</div>
																	<div
																		class="rec_info_item recr-created"
																	>
																		Mar 31
																	</div>
																</div>
																<div class="rec_result_details">
																	<div
																		class="rec_detail_item recr-advisor"
																	>
																		Advisor Name
																	</div>
																	<div
																		class="rec_detail_item recr-students"
																	>
																		Assigned Students
																	</div>
																	<div
																		class="rec_detail_item recr-title"
																	>
																		Title
																	</div>
																</div>
																<div class="rec_search_highlight">
																	<div
																		class="rec_search_highlight_title"
																	></div>
																	<div
																		class="rec_search_highlight_text"
																	></div>
																</div>
															</div>
														</div>
														<div class="rec_results_count"></div>

														<div class="rec-bot-tools">
															<button
																class="small_button rec-but-new"
																title="Send current schedule as a recommendation to one or more students"
															>
																Create Recommendation
															</button>
															<button
																class="rec-import-csv small_button"
																title="Import Recommendations by CSV"
																style="padding: 5px; height: 33px"
															>
																<img
																	src="test_loggedin_semesterselected_files/csv.gif"
																	height="16"
																	width="16"
																	alt="Import from CSV"
																/>
															</button>
														</div>
													</div>
													<div id="page_rec_edit" style="display: none">
														<div class="rec-top-buttons">
															<button
																class="rec-top-btn small_button rec-but-back"
																title="Back to list of recommendations"
															>
																<i
																	class="fa fa-reply"
																	aria-hidden="true"
																></i>
															</button>
															<!--
			  <div class='top-rt-btns'>
			    <button class='rec-top-btn small_button rec-but-prev'><i class="far fa-angle-left" aria-hidden="true" title="View previous recommendation"></i>
			    </button>
			    <button class='rec-top-btn small_button rec-but-next'><i class="far fa-angle-right" aria-hidden="true" title="View next recommendation"></i>
			    </button>
			  </div>
			   -->
															<div class="top-rt-btns">
																<h3 class="rec-header">
																	Recommendation
																</h3>
															</div>
															<div style="clear: both"></div>
														</div>

														<div id="page_rec_edit_form">
															<!--
			<div class="rec-row">
			  <div class="rec-row-label">
			    ID
			  </div>
			  <div class="rec-row-desc rec-row-desc-wide">
			    <span class="recf-id">R-1001</span>
			  </div>
			</div>
			 -->

															<div class="rec-row">
																<div
																	class="rec-row-label rec-label"
																>
																	From
																	<!-- <i class="fa fa-user" aria-hidden="true"></i> -->
																</div>
																<div class="rec-row-desc">
																	<span class="recf-creator"
																		>---</span
																	>
																</div>
															</div>

															<div class="rec-tbl-cont">
																<div
																	class="rec-row-label rec-label"
																>
																	To
																</div>

																<div
																	class="rec-row-desc fancy-input rec-scrol-div"
																	style="padding: 0"
																>
																	<div class="rec-name-item">
																		<label
																			class="rec-student-tooltip"
																			title=""
																		>
																			<input
																				type="checkbox"
																			/>Jill Smith March
																			31</label
																		>
																	</div>
																</div>
															</div>

															<div class="rec-row rec-row-users">
																<div class="rec-add">
																	<input
																		type="text"
																		class="rec-add-input"
																		placeholder="Student ID"
																		title="You may add multiple IDs"
																	/>
																</div>
																<div class="rec-add-button">
																	<button
																		class="small_button"
																		title="Add Student ID(s)"
																	>
																		Add
																	</button>
																</div>

																<div class="rec-grp-button">
																	<button
																		class="small_button"
																		title="Select from Student Group"
																		style="padding: 5px"
																	>
																		<i
																			class="fas fa-users-class"
																		></i>
																	</button>
																</div>
																<div class="rec-csv-button">
																	<button
																		class="small_button"
																		title="Import Student IDs from CSV"
																		style="padding: 5px"
																	>
																		<img
																			src="test_loggedin_semesterselected_files/csv.gif"
																			height="16"
																			width="16"
																			alt="Import from CSV"
																		/>
																	</button>
																</div>
															</div>
															<div id="recAddWarning"></div>

															<div class="rec-row">
																<div class="rec-row-desc">
																	<table
																		class="rec-user-actions zero_padding_spacing"
																	>
																		<tbody>
																			<tr>
																				<td>
																					<button
																						class="small_button recb-select-all"
																						title="Select/Deselect all students"
																					>
																						Select All
																					</button>
																				</td>
																				<td>
																					<button
																						class="small_button recb-remove"
																						title="Remove selected students from list"
																					>
																						Remove
																					</button>
																				</td>
																				<td>
																					<button
																						class="small_button recb-splice"
																						title="Duplicate this recommendation and move the selected students to the new recommendation"
																					>
																						Splice to
																						New
																					</button>
																				</td>
																				<!--
			        <td>
			          <button class="small_button recb-advise">Advise</button>
			        </td>
			         -->
																			</tr>
																		</tbody>
																	</table>
																</div>
															</div>

															<div class="rec-row-label rec-label">
																Title
															</div>
															<div class="rec-row-desc">
																<input
																	class="rec-title fancy-input"
																	type="text"
																	aria-label="Recommendation"
																	placeholder="Title of Recommendation"
																/>
															</div>

															<div class="rec-row-label rec-label">
																Message
															</div>
															<div class="rec-row-desc">
																<textarea
																	rows="4"
																	class="rec-message fancy-input"
																	maxlength="1000"
																	aria-label="Message to the students..."
																	placeholder="Message to the students..."
																></textarea>
															</div>
															<div
																class="rec-recent"
																style="display: none"
															>
																<table class="zero_padding_spacing">
																	<tbody>
																		<tr>
																			<td
																				class="rec-label-cell"
																				style="
																					padding-left: 5px;
																				"
																			>
																				Recent
																			</td>
																			<td>
																				<select
																					role="listbox"
																					aria-label="Recent"
																				>
																					<option
																						selected="selected"
																					>
																						Once
																					</option>
																					<option>
																						Twice
																					</option>
																				</select>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>

															<div
																class="rec-option"
																title="Force the students using this software to follow this recommendation"
															>
																<label>
																	<input
																		type="checkbox"
																		class="recf-compulsory"
																	/>Mandatory</label
																>
															</div>

															<div
																class="rec-option"
																title="Allow students to select courses beyond those in this recommendation"
															>
																<label>
																	<input
																		type="checkbox"
																		class="recf-lock-select"
																	/>Permit additional
																	courses</label
																>
															</div>
															<div class="rec-tags">
																<table class="zero_padding_spacing">
																	<tbody>
																		<tr>
																			<td
																				class="rec-label-cell rec-label"
																				title="Add tags to help categorize or organize recommendations"
																			>
																				Tags
																			</td>
																			<td>
																				<input
																					id="input-rec-tags-add"
																					type="text"
																					aria-label="Recommendation tag"
																					class="recf-tags"
																				/>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>

															<div class="rec-tags rec-groups-row">
																<table class="zero_padding_spacing">
																	<tbody>
																		<tr>
																			<td
																				class="rec-label-cell rec-label"
																				title="Advisors must belong to at least one of the specified security groups to have permission to modify/delete this recommendation. Groups and their user assignments can be changed in VSB Settings."
																			>
																				Groups
																			</td>
																			<td>
																				<input
																					id="input-rec-groups-add"
																					type="text"
																					aria-label="Recommendation group"
																					class="recf-groups"
																				/>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>

															<div class="rec-disabled-message">
																You do not have permission to edit
																this recommendation.
															</div>
															<div class="rec-bottom">
																<button
																	class="small_button rec-but-save"
																>
																	Save
																</button>
																<button
																	class="small_button rec-but-duplicate"
																>
																	Duplicate
																</button>
																<button
																	class="small_button rec-but-delete"
																>
																	Delete
																</button>
																<button
																	class="small_button rec-but-cancel"
																>
																	Cancel
																</button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="page_whiteout"></div>
										<div
											class="fav-bottom"
											style="position: absolute; top: 100%"
										></div>
									</td>
								</tr>
							</tbody>
						</table>

						<div id="guidance_wrapper">
							<div id="guidance">
								<span class="guidanceText"></span>
							</div>
						</div>

						<div style="clear: both"></div>
					</div>
					<!-- end of under_header -->
				</div>
				<!-- end of under_header_wrapper -->

				<!--<div>
<canvas id="thumbtest" width="100" height="100" style="border:0px solid #000000;display:none;">
</canvas>
</div> -->
			</div>
			<!-- mainframe. Opened in the header -->
			<div class="custom_footer noprint">
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
			</div>

			<!-- Active sessions: 326 -->
		</div>

		<!-- Added by prakash start for mobile sort -->
		<div class="centerparent">
			<div
				id="popupsort"
				class="popup-wrapper center hide"
				style="
					max-width: 96%;
					max-height: 96%;
					overflow-wrap: break-word;
					min-width: 250px;
					height: auto;
					z-index: 999;
				"
			>
				<div class="popup-content">
					<div class="popup-title">
						<button type="button" class="filteconfrim popup-close hide50">X</button>
						<h3>Sort by:</h3>
					</div>
					<div class="popup-body">
						<input
							type="radio"
							id="nonemobile"
							onclick="UU.caseChangeSort(this.value);"
							name="sb"
							value="none"
							checked="checked"
						/><label class="under" for="nonemobile">None</label>
						<input
							type="radio"
							id="daysoffmobile"
							onclick="UU.caseChangeSort(this.value);"
							name="sb"
							value="daysoff"
						/><label class="under" for="daysoffmobile">Most days off</label>
						<input
							type="radio"
							id="morningmobile"
							onclick="UU.caseChangeSort(this.value);"
							name="sb"
							value="morning"
						/><label class="under" for="morningmobile">Mornings</label>
						<input
							type="radio"
							id="middaymobile"
							onclick="UU.caseChangeSort(this.value);"
							name="sb"
							value="midday"
						/><label class="under" for="middaymobile">Mid-day classes</label>
						<input
							type="radio"
							id="eveningmobile"
							onclick="UU.caseChangeSort(this.value);"
							name="sb"
							value="evening"
						/><label class="under" for="eveningmobile">Evenings</label>
					</div>
				</div>
			</div>

			<div
				id="popuptips"
				class="popup-wrapper center hide"
				style="
					max-width: 96%;
					max-height: 96%;
					overflow-wrap: break-word;
					min-width: 250px;
					height: auto;
					z-index: 999;
				"
			>
				<div class="popup-content">
					<div class="tips-previous nomobile">
						<button
							class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
							onclick="SLIDER.sliderChange(false);"
							aria-label="Previous Tip"
							data-upgraded=",MaterialButton,MaterialRipple"
						>
							<i class="fa fa-arrow-left"></i>
							<span class="mdl-button__ripple-container"
								><span class="mdl-ripple"></span
							></span>
						</button>
					</div>
					<div class="popup-body">
						<div class="tips-image">
							<img
								id="slider_tip_img"
								src="test_loggedin_semesterselected_files/tip_drag.png"
								alt="Tiny screenshot to accompany tip text"
							/>
						</div>
						<div class="popup-title">Block out times</div>
						<div class="popup-subtitle">
							<span class="slider_tip_text"> Loading... </span>
						</div>
						<div class="filter-popup-buttons">
							<button
								class="mdl-button mdl-js-button mdl-button--accent popup-close"
								data-upgraded=",MaterialButton"
							>
								Close
							</button>
							<button
								class="mdl-button mdl-js-button mdl-button--accent popup-close"
								onclick="SLIDER.sliderChange(true);"
								data-upgraded=",MaterialButton"
							>
								Next
							</button>
						</div>
						<div class="tips-carousel"></div>
					</div>
					<div class="tips-next nomobile">
						<button
							class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
							onclick="SLIDER.sliderChange(true);"
							aria-label="Next Tip"
							data-upgraded=",MaterialButton,MaterialRipple"
						>
							<i class="fa fa-arrow-right"></i>
							<span class="mdl-button__ripple-container"
								><span class="mdl-ripple"></span
							></span>
						</button>
					</div>
				</div>
			</div>

			<div
				id="popupfilter"
				class="popup-wrapper center hide"
				style="
					max-width: 96%;
					max-height: 96%;
					overflow-wrap: break-word;
					min-width: 250px;
					height: auto;
					z-index: 999;
				"
			>
				<div class="popup-content">
					<h4 class="visuallyhidden">Filter options. Show me schedules containing:</h4>
					<div class="popup-title">
						<button type="button" class="filteconfrim xpopup-close hide50">X</button>
						Filters
					</div>
					<div class="popup-body">
						<div class="popup-subtitle">Show me schedules containing:</div>
						<div class="rowfilter">
							<div class="filteroption">
								<label
									for="hide_fullmobile"
									title="Allow schedule results containing full classes"
									>Closed classes</label
								>
								<span class="hide50">
									(<img
										class="filterElement"
										src="test_loggedin_semesterselected_files/element_full_ps.gif"
									/>)
								</span>
							</div>
							<div class="mdl-switch-nvda-fix">
								<label
									id="hide_fullmobile_label"
									class="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded"
									for="hide_fullmobile"
									data-upgraded=",MaterialSwitch,MaterialRipple"
								>
									<input
										id="hide_fullmobile"
										type="checkbox"
										class="mdl-switch__input focusable"
										value="hide"
										onclick="UU.caseChangeHideFull(this);" />
									<span class="mdl-switch__label visuallyhidden"
										>Closed classes</span
									>
									<div class="mdl-switch__track"></div>
									<div class="mdl-switch__thumb">
										<span class="mdl-switch__focus-helper"></span>
									</div>
									<span
										class="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center"
										data-upgraded=",MaterialRipple"
										><span class="mdl-ripple"></span></span
								></label>
							</div>
						</div>
						<div class="rowfilter">
							<div class="filteroption">
								<label
									for="hide_waitlistablemobile"
									title="Allow schedule results containing classes that are full but can still be waitlisted"
									>Wait Listed classes</label
								>
								<span class="hide50">
									(<img
										class="filterElement"
										src="test_loggedin_semesterselected_files/element_waitlist_ps.gif"
									/>)
								</span>
							</div>
							<div class="mdl-switch-nvda-fix">
								<label
									id="hide_waitlistablemobile_label"
									class="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked"
									for="hide_waitlistablemobile"
									data-upgraded=",MaterialSwitch,MaterialRipple"
								>
									<input
										id="hide_waitlistablemobile"
										type="checkbox"
										class="mdl-switch__input focusable"
										value="hide"
										onclick="UU.caseChangeHideWaitlistable(this);"
										checked="checked" />
									<span class="mdl-switch__label visuallyhidden"
										>Wait Listed classes</span
									>
									<div class="mdl-switch__track"></div>
									<div class="mdl-switch__thumb">
										<span class="mdl-switch__focus-helper"></span>
									</div>
									<span
										class="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center"
										data-upgraded=",MaterialRipple"
										><span class="mdl-ripple"></span></span
								></label>
							</div>
						</div>
						<div class="rowfilter">
							<div class="filteroption">
								<label
									for="hide_onlinemobile"
									title="Allow schedule results containing online classes"
									>Online classes</label
								>
								<span>
									<i class="far fa-mouse"></i>
								</span>
							</div>
							<div class="mdl-switch-nvda-fix">
								<label
									id="hide_onlinemobile_label"
									class="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked"
									for="hide_onlinemobile"
									data-upgraded=",MaterialSwitch,MaterialRipple"
								>
									<input
										id="hide_onlinemobile"
										type="checkbox"
										class="mdl-switch__input focusable"
										value="hide"
										onclick="UU.caseChangeHideOnline(this);"
										checked="checked" />
									<span class="mdl-switch__label visuallyhidden"
										>Online classes</span
									>
									<div class="mdl-switch__track"></div>
									<div class="mdl-switch__thumb">
										<span class="mdl-switch__focus-helper"></span>
									</div>
									<span
										class="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center"
										data-upgraded=",MaterialRipple"
										><span class="mdl-ripple"></span></span
								></label>
							</div>
						</div>
						<div class="rowfilter">
							<div class="filteroption">
								<label
									for="hide_on_campusmobile"
									title="Allow schedule results containing classes on campus"
									>On-ca<span class="akl">m</span>pus classes</label
								>
							</div>
							<div class="mdl-switch-nvda-fix">
								<label
									id="hide_on_campusmobile_label"
									class="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked"
									for="hide_on_campusmobile"
									data-upgraded=",MaterialSwitch,MaterialRipple"
								>
									<input
										id="hide_on_campusmobile"
										type="checkbox"
										class="mdl-switch__input focusable"
										value="hide"
										onclick="UU.caseChangeHideOnCampus(this);"
										checked="checked" />
									<span class="mdl-switch__label visuallyhidden"
										>On-ca<span class="akl">m</span>pus classes</span
									>
									<div class="mdl-switch__track"></div>
									<div class="mdl-switch__thumb">
										<span class="mdl-switch__focus-helper"></span>
									</div>
									<span
										class="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center"
										data-upgraded=",MaterialRipple"
										><span class="mdl-ripple"></span></span
								></label>
							</div>
						</div>
						<div class="filter-popup-buttons">
							<button
								class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent popup-close focusable"
								style="min-width: 60%"
								data-upgraded=",MaterialButton"
							>
								Done
							</button>
						</div>
					</div>
				</div>
			</div>

			<div style="clear: both"></div>
		</div>

		<div
			id="aarPopup"
			class="popup-wrapper center hide"
			style="
				max-width: 96%;
				max-height: 96%;
				overflow-wrap: break-word;
				min-width: 250px;
				height: auto;
				z-index: 999;
			"
		>
			<div class="popup-content">
				<div class="popup-title">
					<h3>Notice</h3>
				</div>
				<div class="popup-body">
					<!-- Content will get put here -->
				</div>
				<div class="popupNoticeButtons"></div>
			</div>
		</div>

		<div
			id="sharePopup"
			class="popup-wrapper center hide"
			style="position: absolute; z-index: 999"
		>
			<div class="popup-content">
				<div class="popup-title">
					<button type="button" class="filteconfrim popup-close hide50">X</button>
					<h3>Export to Calendar</h3>
				</div>
				<div class="popup-body">
					<div style="padding: 0px 5px 5px 5px">
						This will send all the events of the schedule your are currently viewing to
						your Calendar.<br /><br />
						<span style="font-weight: 500">Warning:</span> If you need to change or
						remove these events you will need to do it manually using your Calendar
					</div>
					<div id="notificationCal" style="display: none">
						Your schedule has been saved to the calendar.
					</div>
					<div id="calenderbutton" style="text-align: center; padding-top: 10px">
						<button
							id="googleShare"
							class="mdl-button mdl-js-button"
							onclick="vsbTimer.doLogin();"
							data-upgraded=",MaterialButton"
						>
							Google Calendar
						</button>
						<button
							id="outLookShare"
							class="mdl-button mdl-js-button"
							onclick="vsbTimer.doLogin();"
							data-upgraded=",MaterialButton"
						>
							Outlook Calendar
						</button>
						<button
							id="iCal"
							class="mdl-button mdl-js-button"
							onclick="vsbTimer.doLogin();"
							style="text-transform: none"
							data-upgraded=",MaterialButton"
						>
							iCal
						</button>
					</div>
				</div>
			</div>
		</div>

		<div
			style="
				position: absolute;
				top: 0px;
				left: 0px;
				color: black;
				background-color: white;
				display: none;
			"
			id="console"
		>
			Hello
		</div>
		<div
			style="
				position: absolute;
				top: 40px;
				left: 0px;
				color: black;
				background-color: white;
				display: none;
			"
			id="console2"
		>
			Hello
		</div>

		<!-- SUGGESTION CONTAINER -->
		<div
			id="suggestion_box"
			class="accessible ak_o"
			role="listbox"
			aria-label="course search suggestion list"
			style="top: 331.25px; left: 0px; min-width: 248px"
		>
			<div
				id="suggestion_container"
				style="max-height: 300px; overflow-y: auto"
				class="sdl-scrollbars"
			></div>
		</div>
		<!-- END SUGGESTION CONTAINER -->

		<div class="popupl-overlay"></div>
		<div class="check_media" style=""></div>
		<!-- <canvas id="thumbtest" width="100" height="100" style="border:0px solid #000000;"> -->

		<protonpass-root-6769
			data-protonpass-role="root"
			data-protonpass-theme="dark"
		></protonpass-root-6769>
	</body>
</html>
`;
