import { useState } from "react";

export default function Test() {
	const [testNumber, setTestNumber] = useState(0);

	return (
		<div>
      <div style={{paddingTop: '4rem',backgroundColor: 'black', width: '640px', height:'fit-content', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>

			<button className="bg-yellow" type="button" onClick={(e) => {e.preventDefault(); setTestNumber(0)}}>
				MacCal Test (not logged in)
			</button>
			<button className="bg-yellow" type="button" onClick={(e) => {e.preventDefault(); setTestNumber(1)}}>
				MacCal Test (logged in, error occurs, semester unselected)
			</button>
			<button className="bg-yellow" type="button" onClick={(e) => {e.preventDefault(); setTestNumber(2)}}>
				MacCal Test (logged in, success)
			</button>
      </div>
			{testNumber === 0 && (
				<body className="login_body" id="bodyContent">
					<div className="reg_header">
						<div className="reg_header_inner_wrapper header-row">
							<div className="header_left header-column">
								<a href="https://brighterworld.mcmaster.ca/">
									{/* <!-- <img src="cust/mcm/mcmaster-logo-blk.png" /> --> */}
									<img className="logo" src="test_files/mcm_logo_grey.svg" />
								</a>
							</div>
							<div className="header-column header-middle mcm-mytimetable">
								<span className="my">My</span>
								<span className="timetable">Timetable</span>
							</div>
							<div className="header-column header-right"></div>
						</div>
					</div>

					<div className="bad_links_message">
						Oops, you must log into this application before loading that link.
					</div>

					<div className="form_wrapper">
						<h2
							className="visuallyhidden"
							aria-label="Please enter your user name and password and click the sign in button below to login."
						></h2>
						<div className="login_form">
							<p className="pslogininfo">Sign out successful.</p>
							<div className="loginButton">
								<button
									className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent sign_in_button"
									onClick="custDoLogin();"
									data-upgraded=",MaterialButton"
								>
									Sign In
								</button>
							</div>
							<form action="login.jsp" method="post" className="loginForm">
								<div className="sdl_input">
									<label htmlFor="word1" aria-label="Please enter your User ID ">
										User ID
									</label>
									<input id="word1" name="word1" type="text" size={15} />
								</div>
								<br />
								<div className="sdl_input">
									<label htmlFor="word2" aria-label="Please enter your password">
										Password
									</label>
									<input
										id="word2"
										name="word2"
										type="password"
										size={15}
										autoComplete="off"
									/>
								</div>

								<button
									name="login"
									type="submit"
									className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent psloginbutton"
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
									className="mdl-button mdl-js-button psguestbutton"
									data-upgraded=",MaterialButton"
								>
									Use as Guest
								</button>
							</form>
						</div>
					</div>

					<div className="contentArea_bottom noprint"></div>
					<div className="mcm-footer">
						<div className="mcm-footer-banner"></div>
						<div className="mcm-footer-social">
							<div className="mcm-footer-address">
								<span>1280 Main Street West.</span>
								<span>Hamilton, Ontario L8S 4L8.</span>
								<span className="mcm-footer-phone">(905) 525-9140</span>
							</div>
							<div className="mcm-footer-copyright">© McMaster University</div>
						</div>
					</div>
				</body>
			)}
			{testNumber === 1 && 
			<>
			<div>
  <p id="alertJAWS" role="alert" style={{display: 'none'}} aria-atomic="true" />
  <div className="eeLoadingAnimation" style={{display: 'none'}}>
    <div className="mdl-spinner mdl-js-spinner is-active is-upgraded" data-upgraded=",MaterialSpinner"><div className="mdl-spinner__layer mdl-spinner__layer-1"><div className="mdl-spinner__circle-clipper mdl-spinner__left"><div className="mdl-spinner__circle" /></div><div className="mdl-spinner__gap-patch"><div className="mdl-spinner__circle" /></div><div className="mdl-spinner__circle-clipper mdl-spinner__right"><div className="mdl-spinner__circle" /></div></div><div className="mdl-spinner__layer mdl-spinner__layer-2"><div className="mdl-spinner__circle-clipper mdl-spinner__left"><div className="mdl-spinner__circle" /></div><div className="mdl-spinner__gap-patch"><div className="mdl-spinner__circle" /></div><div className="mdl-spinner__circle-clipper mdl-spinner__right"><div className="mdl-spinner__circle" /></div></div><div className="mdl-spinner__layer mdl-spinner__layer-3"><div className="mdl-spinner__circle-clipper mdl-spinner__left"><div className="mdl-spinner__circle" /></div><div className="mdl-spinner__gap-patch"><div className="mdl-spinner__circle" /></div><div className="mdl-spinner__circle-clipper mdl-spinner__right"><div className="mdl-spinner__circle" /></div></div><div className="mdl-spinner__layer mdl-spinner__layer-4"><div className="mdl-spinner__circle-clipper mdl-spinner__left"><div className="mdl-spinner__circle" /></div><div className="mdl-spinner__gap-patch"><div className="mdl-spinner__circle" /></div><div className="mdl-spinner__circle-clipper mdl-spinner__right"><div className="mdl-spinner__circle" /></div></div></div>
    {/* LOADING <div class="mdl-spinner mdl-js-spinner is-active"></div> */}
  </div>
  <div id="bodyContent" className="eeLoading eeLoadingDone">
    <div className="custom_header noprint" role="heading" aria-level={1}>
      <h3 style={{visibility: 'hidden', position: 'absolute', transition: 'none 0s ease 0s'}}>Register - Student Scheduling by VSB</h3>
      <div className="reg_header">
        <div className="reg_header_inner_wrapper header-row">
          <div className="header_left header-column">
            <a href="https://brighterworld.mcmaster.ca/">
              {/* <img style="height: 80px; margin: 10px;" src="cust/mcm/mcmaster-logo-blk.png" /> */}
              <img className="logo" src="test_loggedin_files/mcm_logo_grey.svg" />
            </a>
          </div>
          <div className="header-column header-middle mcm-mytimetable">
            <span className="my">My</span><span className="timetable">Timetable</span>
          </div>
          <div className="header-column header-right" />
        </div>
      </div>
    </div>
    <div className="mainframe">
      <h1 className="visuallyhidden" aria-label="Welcome to the schedule builder, the industry leading solution for generating and optimizing student class schedules. Please navigate the page headers to access the application content." />
      <div className="header_invader header_invader_position noprint">
        <div className="autho_table">
          <span className="autho_logo_prot_cell header_invader_logo_width">
            &nbsp;
          </span>
          <h2 className="visuallyhidden" aria-label="Header region." />
          <span className="autho_text_cell">
            <span className="autho_text header_invader_text_top">
              Ameya Gupta</span>
            <span className="autho_text header_invader_text_top">
            </span>
            <span className="autho_text header_invader_text_top active-term-label" onclick="MENU.menuFunction()" style={{cursor: 'pointer'}} title="Change term" />
          </span>
          <span className="autho_button_cell">
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent sign_in_button " onclick="vsbTimer.doLogin();" data-upgraded=",MaterialButton" style={{display: 'none'}}>
              Sign In</button>
            <input className="big_button sign_out_button" type="button" defaultValue="Sign Out" onclick="vsbTimer.doLogout('link');" />
            <button className="nobuttonstyle main_menu_button" title="View menu" aria-label="Toggle Main Hamburger Menu">
              <i className="fa fa-bars" />
            </button>
          </span>
        </div>
        <div className="main_menu" style={{display: 'none'}}><a href="javascript:void(0)" className="menu_item select_term" onclick="UU.caseChangeTermIfOkay(3202520);$(&quot;.main_menu&quot;).hide();">2025 Spring/Summer<i className="fa fa-check" id="menu-term3202520-check" style={{display: 'none'}} /> </a><a href="javascript:void(0)" className="menu_item select_term" onclick="UU.caseChangeTermIfOkay(3202530);$(&quot;.main_menu&quot;).hide();">2025 Fall<i className="fa fa-check" id="menu-term3202530-check" style={{display: 'none'}} /> </a><a href="javascript:void(0)" className="menu_item select_term" onclick="UU.caseChangeTermIfOkay(3202610);$(&quot;.main_menu&quot;).hide();">2026 Winter<i className="fa fa-check" id="menu-term3202610-check" style={{display: 'none'}} /> </a>
          <div className="menu-item-separator" />
          <a href="https://mytimetable.mcmaster.ca/analytics/" className="mi_analytics analytics_link" style={{display: 'none'}}><i className="fa fa-lg fa-fw fa-chart-bar" style={{paddingRight: '10px'}} />Analytics</a>
          <a href="https://mytimetable.mcmaster.ca/analytics/#ajax/enrollment-rules.jsp" className="mi_scheduler analytics_link" style={{display: 'none'}}><i className="fa fa-lg fa-fw fa-wrench" style={{paddingRight: '10px'}} />Schedule Controls</a>
          <a href="https://mytimetable.mcmaster.ca/analytics/#ajax/settings.jsp?sets=roles" className="mi_settings analytics_link" style={{display: 'none'}}><i className="fa fa-lg fa-fw fa-cog" style={{paddingRight: '10px'}} />Settings</a>
          <div className="menu-item-separator" />
          <a href="https://mytimetable.mcmaster.ca/criteria.jsp?src=clear">Start Over</a>
          <div className="menu-item-separator" />
          <a href="javascript:void(0)" className="mi_behalf" style={{display: 'none'}}>Advise a Student...</a>
          <div className="menu_item mi_message_box" style={{display: 'none', paddingBottom: '0px'}}>
          </div>
          <div className="menu_item mi_behalf_start" style={{display: 'none'}}>
            <input type="text" style={{width: '100%'}} className="behalf_userid" placeholder="Student ID" title="Student ID" />
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent behalf_start_button" data-upgraded=",MaterialButton,MaterialRipple">
              Start Advising<span className="loadingAdvising" style={{visibility: 'hidden'}}> <i className="fa fa-spinner fa-spin" /></span>
              <span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent behalf_cancel_button" data-upgraded=",MaterialButton,MaterialRipple">
              Cancel<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
          </div>
          <div className="menu_item mi_behalf_change" style={{display: 'none'}}>
            <div style={{margin: '0 0 10px 0'}}>Advising for: <span className="behalf_student">null</span></div>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent switch_student_button" title="Advise a different student" data-upgraded=",MaterialButton,MaterialRipple">
              Switch
              <span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent stop_advising_button" style={{marginLeft: '6px'}} title="Stop advising this student" data-upgraded=",MaterialButton,MaterialRipple">
              Stop Advising
              <span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
          </div>
          <div id="extraLinks_menu" />
          <div className="menu-item-separator" />
          <div className="menu_item mi_sign_out">
            <button style={{width: '100%'}} className="mdl-button mdl-js-button xmdl-button--raised white-background" onclick="vsbTimer.doLogout('link');" data-upgraded=",MaterialButton">
              Sign Out</button>
          </div>
          <div className="menu_item mi_sign_in" style={{display: 'none'}}>
            <input style={{width: '100%'}} className="big_button" type="button" defaultValue="Sign In" onclick="vsbTimer.doLogin();" />
          </div>
        </div>
      </div>
      <div className="navigation noprint"><div className="navigation_buttons">
          <div style={{width: '100%'}}>
            <ul>
              <li><a href="javascript:void(0)" className="accessible ak_c nav_link link_criteria title_font" onclick="UU.caseViewCriteria();" title="View the Select Courses region">Select <span className="akl">C</span>ourses</a></li>
              <li><a href="javascript:void(0)" className="accessible ak_r nav_link link_results title_font" onclick="UU.caseViewResults();" title="You are currently viewing the Results region">Schedule <span className="akl">R</span>esults</a></li>
              <li><a href="javascript:void(0)" className="accessible ak_f nav_link link_favorites title_font" onclick="UU.caseViewFavorites();" title="View to Favourites region">Favourites</a></li>
            </ul>
          </div></div>
        <div style={{clear: 'both'}} />
      </div>
      <div style={{clear: 'both'}} />
      <div id="under_header_wrapper">
        <div id="under_header">
          <table className="pages_table" role="presentation">
            <tbody><tr>
                <td id="page_criteria" role="region" aria-labelledby="page_criteria_label" className="vsb_page disable-get-schedule noprint" style={{width: '34.3826%'}} aria-hidden="true">
                  <div className="page_fader" style={{opacity: 0, display: 'none'}} />
                  <div className="full_page_title title_font first" id="page_criteria_label">
                    Select <span className="akl">C</span>ourses</div>
                  <div className="full_page">
                    <div className="full_page_content" id="tab_degree" style={{display: 'none', opacity: 1, width: 'auto', position: 'relative'}}>
                      <div>
                        <button className="mdl-button mdl-js-button mdl-js-ripple-effect search-back-button" onclick="RR.changeSelCourseTab('tab_selected');" data-upgraded=",MaterialButton,MaterialRipple">
                          Back
                          <span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                      </div>
                      <div className="select-course-title">
                        Degree Plan</div>
                      <div className="tab_container">
                        <div className="tab_content">
                          <div id="plan_import_container" style={{display: 'block'}} />
                        </div>
                      </div>
                    </div>
                    <div className="full_page_content" id="tab_selected" style={{opacity: 1, width: 'auto', position: 'relative'}}>
                      <h2 className="visuallyhidden" aria-label="Select Courses region; please adjust your section filters and search for courses to add to the list." />
                      <p className="visuallyhidden" style={{marginBottom: '15px'}} id="page_add_courses_desc">
                        Welcome to the Schedule Builder. This is the Select Courses region. To 
                        use this software, follow the steps described below. First add courses 
                        to the list of courses. This will cause the Results region to show you a
                        list of possible schedules.</p>
                      <div className="mobileRoom hide50" style={{display: 'block'}} />
                      <div className="accessOnly accessTermDisp"><h3>Step<span className="bubbleNb1">1</span>: Select Term</h3><div>Choose a term.</div></div>
                      <div id="term_region_alt" style={{display: 'none'}} />
                      <div className="accessOnly"><h3>Step<span className="bubbleNb2a">1</span>: Select Campuses</h3>Select your desired course locations.</div>
                      <div id="locationRegion" className="locationRegion-cont xhide50">
                        <h3 className="visuallyhidden" aria-label="Course Section Filters. Adjusting these filters will impact which sections of the courses are permitted in your generated schedules." />
                        <div id="collegeSelector"><div className="mstitle"><div className="msItemR mslistitemstart"><div className="msItemNb li"><div className="msItemTb criteria_filter_title">Colleges:</div></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">McMaster University</div><div className="msItemM" id="collegeSelectorList0" onclick="msSelect(&quot;collegeSelector&quot;,0,false);event.stopPropagation();" /></div></div><div className="msAll" style={{display: 'inline-block'}}><div className="msItemR"><div className="msItemNb li"><div className="msItemTb"><span className="textAll" style={{display: 'inline'}}>All</span><span className="textNone" style={{display: 'none'}}>None</span></div></div></div></div><div className="msItemR msSelectDot"><div className="msItemNb li"><button className="nobuttonstyle msItemTb a msActBoxShow ms_select_link disable-get-schedule disableClick" title="Expand colleges filter" aria-label="Expand colleges filter">Select...</button></div></div><div style={{clear: 'both'}} /></div><div className="msbox" role="group" aria-label="colleges options" style={{display: 'none'}}><div className="msBoxCont"><div className="msulwrapper wcol2"><ul className="boxcol col0" role="presentation"><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked" htmlFor="collegeSelectorBox0" id="collegeSelectorBox0-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="collegeSelectorBox0" className="mdl-checkbox__input" onchange="msSelect('collegeSelector', 0,this.checked);" defaultChecked="checked" /><span className="mdl-checkbox__label">McMaster University</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div></ul></div><div className="msulwrapper wcol2"><ul className="boxcol col1" role="presentation" /></div><div className="msulwrapper wcol2 textnonevisible" style={{display: 'none'}}><ul role="presentation"><li>None Visible</li></ul></div><div style={{clear: 'both'}} /></div><div className="msBoxButtons accessOffOnly"><div className="msSelectAllDiv"><button className="mdl-button mdl-js-button" onclick="msSelect(&quot;collegeSelector&quot;,undefined,true);" title="Select all colleges" aria-label="Select all colleges" data-upgraded=",MaterialButton">Select All</button> <button className="mdl-button mdl-js-button" onclick="msSelect(&quot;collegeSelector&quot;,undefined,false);" title="Deselect all colleges" aria-label="Deselect all colleges" data-upgraded=",MaterialButton">Select None</button></div><div className="msBoxClose accessOffOnly"><button className="mdl-button mdl-js-button msActBoxClose" title="Collapse colleges filter" data-upgraded=",MaterialButton">Close</button></div></div></div></div>
                        <div id="campusSelector"><div className="mstitle"><div className="msItemR mslistitemstart"><div className="msItemNb li"><div className="msItemTb criteria_filter_title">Campuses:</div></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Conestoga College</div><div className="msItemM" id="campusSelectorList0" onclick="msSelect(&quot;campusSelector&quot;,0,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">McMaster University</div><div className="msItemM" id="campusSelectorList1" onclick="msSelect(&quot;campusSelector&quot;,1,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Mohawk College</div><div className="msItemM" id="campusSelectorList2" onclick="msSelect(&quot;campusSelector&quot;,2,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Off Site</div><div className="msItemM" id="campusSelectorList3" onclick="msSelect(&quot;campusSelector&quot;,3,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Six Nations Polytechnic</div><div className="msItemM" id="campusSelectorList4" onclick="msSelect(&quot;campusSelector&quot;,4,false);event.stopPropagation();" /></div></div><div className="msAll" style={{display: 'inline-block'}}><div className="msItemR"><div className="msItemNb li"><div className="msItemTb"><span className="textAll">All (5)</span><span className="textNone" style={{display: 'none'}}>None</span></div></div></div></div><div className="msItemR msSelectDot"><div className="msItemNb li"><button className="nobuttonstyle msItemTb a msActBoxShow ms_select_link disable-get-schedule disableClick" title="Expand campuses filter" aria-label="Expand campuses filter">Select...</button></div></div><div style={{clear: 'both'}} /></div><div className="msbox" role="group" aria-label="campuses options" style={{display: 'none'}}><div className="msBoxCont"><div className="msulwrapper wcol2"><ul className="boxcol col0" role="presentation"><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="campusSelectorBox0" id="campusSelectorBox0-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="campusSelectorBox0" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('campusSelector', 0,this.checked);" /><span className="mdl-checkbox__label">Conestoga College</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="campusSelectorBox1" id="campusSelectorBox1-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="campusSelectorBox1" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('campusSelector', 1,this.checked);" /><span className="mdl-checkbox__label">McMaster University</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="campusSelectorBox2" id="campusSelectorBox2-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="campusSelectorBox2" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('campusSelector', 2,this.checked);" /><span className="mdl-checkbox__label">Mohawk College</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div></ul></div><div className="msulwrapper wcol2"><ul className="boxcol col1" role="presentation"><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="campusSelectorBox3" id="campusSelectorBox3-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="campusSelectorBox3" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('campusSelector', 3,this.checked);" /><span className="mdl-checkbox__label">Off Site</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="campusSelectorBox4" id="campusSelectorBox4-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="campusSelectorBox4" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('campusSelector', 4,this.checked);" /><span className="mdl-checkbox__label">Six Nations Polytechnic</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div></ul></div><div className="msulwrapper wcol2 textnonevisible" style={{display: 'none'}}><ul role="presentation"><li>A college must be selected first.</li></ul></div><div style={{clear: 'both'}} /></div><div className="msBoxButtons accessOffOnly"><div className="msSelectAllDiv"><button className="mdl-button mdl-js-button" onclick="msSelect(&quot;campusSelector&quot;,undefined,true);" title="Select all campuses" aria-label="Select all campuses" data-upgraded=",MaterialButton">Select All</button> <button className="mdl-button mdl-js-button" onclick="msSelect(&quot;campusSelector&quot;,undefined,false);" title="Deselect all campuses" aria-label="Deselect all campuses" data-upgraded=",MaterialButton">Select None</button></div><div className="msBoxClose accessOffOnly"><button className="mdl-button mdl-js-button msActBoxClose" title="Collapse campuses filter" data-upgraded=",MaterialButton">Close</button></div></div></div></div>
                        <div id="locationSelector"><div className="mstitle"><div className="msItemR mslistitemstart"><div className="msItemNb li"><div className="msItemTb criteria_filter_title">Locations:</div></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Automotive Resource Centre</div><div className="msItemM" id="locationSelectorList0" onclick="msSelect(&quot;locationSelector&quot;,0,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">CityLAB Hamilton</div><div className="msItemM" id="locationSelectorList1" onclick="msSelect(&quot;locationSelector&quot;,1,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Conestoga College</div><div className="msItemM" id="locationSelectorList2" onclick="msSelect(&quot;locationSelector&quot;,2,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Downtown Centre</div><div className="msItemM" id="locationSelectorList3" onclick="msSelect(&quot;locationSelector&quot;,3,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">General Hospital</div><div className="msItemM" id="locationSelectorList4" onclick="msSelect(&quot;locationSelector&quot;,4,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Global Knowledge - Toronto</div><div className="msItemM" id="locationSelectorList5" onclick="msSelect(&quot;locationSelector&quot;,5,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Juravinski Cancer Centre</div><div className="msItemM" id="locationSelectorList6" onclick="msSelect(&quot;locationSelector&quot;,6,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">McMaster University</div><div className="msItemM" id="locationSelectorList7" onclick="msSelect(&quot;locationSelector&quot;,7,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Mississauga</div><div className="msItemM" id="locationSelectorList8" onclick="msSelect(&quot;locationSelector&quot;,8,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Mississauga Training Centre</div><div className="msItemM" id="locationSelectorList9" onclick="msSelect(&quot;locationSelector&quot;,9,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Mohawk College</div><div className="msItemM" id="locationSelectorList10" onclick="msSelect(&quot;locationSelector&quot;,10,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Niagara</div><div className="msItemM" id="locationSelectorList11" onclick="msSelect(&quot;locationSelector&quot;,11,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">ONLINE</div><div className="msItemM" id="locationSelectorList12" onclick="msSelect(&quot;locationSelector&quot;,12,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">One James Street North</div><div className="msItemM" id="locationSelectorList13" onclick="msSelect(&quot;locationSelector&quot;,13,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Remit Payment to</div><div className="msItemM" id="locationSelectorList14" onclick="msSelect(&quot;locationSelector&quot;,14,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Ron Joyce Centre (Burlington)</div><div className="msItemM" id="locationSelectorList15" onclick="msSelect(&quot;locationSelector&quot;,15,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Six Nations Polytechnic</div><div className="msItemM" id="locationSelectorList16" onclick="msSelect(&quot;locationSelector&quot;,16,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">St. Joseph's Hospital</div><div className="msItemM" id="locationSelectorList17" onclick="msSelect(&quot;locationSelector&quot;,17,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Unspecified</div><div className="msItemM" id="locationSelectorList18" onclick="msSelect(&quot;locationSelector&quot;,18,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Waterloo</div><div className="msItemM" id="locationSelectorList19" onclick="msSelect(&quot;locationSelector&quot;,19,false);event.stopPropagation();" /></div></div><div className="msAll" style={{display: 'inline-block'}}><div className="msItemR"><div className="msItemNb li"><div className="msItemTb"><span className="textAll">All 20 within selected campuses</span><span className="textNone" style={{display: 'none'}}>20 of 20 selected</span></div></div></div></div><div className="msItemR msSelectDot"><div className="msItemNb li"><button className="nobuttonstyle msItemTb a msActBoxShow ms_select_link disable-get-schedule disableClick" title="Expand locations filter" aria-label="Expand locations filter">Select...</button></div></div><div style={{clear: 'both'}} /></div><div className="msbox" role="group" aria-label="locations options" style={{display: 'none'}}><div className="msBoxCont"><div className="msulwrapper wcol2"><ul className="boxcol col0" role="presentation"><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox0" id="locationSelectorBox0-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox0" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 0,this.checked);" /><span className="mdl-checkbox__label">Automotive Resource Centre</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox1" id="locationSelectorBox1-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox1" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 1,this.checked);" /><span className="mdl-checkbox__label">CityLAB Hamilton</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox2" id="locationSelectorBox2-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox2" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 2,this.checked);" /><span className="mdl-checkbox__label">Conestoga College</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox3" id="locationSelectorBox3-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox3" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 3,this.checked);" /><span className="mdl-checkbox__label">Downtown Centre</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox4" id="locationSelectorBox4-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox4" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 4,this.checked);" /><span className="mdl-checkbox__label">General Hospital</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox5" id="locationSelectorBox5-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox5" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 5,this.checked);" /><span className="mdl-checkbox__label">Global Knowledge - Toronto</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox6" id="locationSelectorBox6-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox6" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 6,this.checked);" /><span className="mdl-checkbox__label">Juravinski Cancer Centre</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox7" id="locationSelectorBox7-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox7" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 7,this.checked);" /><span className="mdl-checkbox__label">McMaster University</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox8" id="locationSelectorBox8-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox8" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 8,this.checked);" /><span className="mdl-checkbox__label">Mississauga</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox9" id="locationSelectorBox9-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox9" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 9,this.checked);" /><span className="mdl-checkbox__label">Mississauga Training Centre</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div></ul></div><div className="msulwrapper wcol2"><ul className="boxcol col1" role="presentation"><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox10" id="locationSelectorBox10-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox10" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 10,this.checked);" /><span className="mdl-checkbox__label">Mohawk College</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox11" id="locationSelectorBox11-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox11" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 11,this.checked);" /><span className="mdl-checkbox__label">Niagara</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox12" id="locationSelectorBox12-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox12" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 12,this.checked);" /><span className="mdl-checkbox__label">ONLINE</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox13" id="locationSelectorBox13-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox13" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 13,this.checked);" /><span className="mdl-checkbox__label">One James Street North</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox14" id="locationSelectorBox14-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox14" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 14,this.checked);" /><span className="mdl-checkbox__label">Remit Payment to</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox15" id="locationSelectorBox15-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox15" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 15,this.checked);" /><span className="mdl-checkbox__label">Ron Joyce Centre (Burlington)</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox16" id="locationSelectorBox16-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox16" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 16,this.checked);" /><span className="mdl-checkbox__label">Six Nations Polytechnic</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox17" id="locationSelectorBox17-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox17" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 17,this.checked);" /><span className="mdl-checkbox__label">St. Joseph's Hospital</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox18" id="locationSelectorBox18-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox18" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 18,this.checked);" /><span className="mdl-checkbox__label">Unspecified</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox19" id="locationSelectorBox19-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox19" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 19,this.checked);" /><span className="mdl-checkbox__label">Waterloo</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div></ul></div><div className="msulwrapper wcol2 textnonevisible" style={{display: 'none'}}><ul role="presentation"><li>A campus must be selected first.</li></ul></div><div style={{clear: 'both'}} /></div><div className="msBoxButtons accessOffOnly"><div className="msSelectAllDiv"><button className="mdl-button mdl-js-button" onclick="msSelect(&quot;locationSelector&quot;,undefined,true);" title="Select all locations" aria-label="Select all locations" data-upgraded=",MaterialButton">Select All</button> <button className="mdl-button mdl-js-button" onclick="msSelect(&quot;locationSelector&quot;,undefined,false);" title="Deselect all locations" aria-label="Deselect all locations" data-upgraded=",MaterialButton">Select None</button></div><div className="msBoxClose accessOffOnly"><button className="mdl-button mdl-js-button msActBoxClose" title="Collapse locations filter" data-upgraded=",MaterialButton">Close</button></div></div></div></div>
                        <div id="instructSelector"><div className="mstitle"><div className="msItemR mslistitemstart"><div className="msItemNb li"><div className="msItemTb criteria_filter_title">Instruction Modes:</div></div></div><div className="msAll" style={{display: 'inline-block'}}><div className="msItemR"><div className="msItemNb li"><div className="msItemTb"><span className="textAll" style={{display: 'none'}}>All</span><span className="textNone" style={{display: 'none'}}>None</span></div></div></div></div><div className="msItemR msSelectDot"><div className="msItemNb li"><button className="nobuttonstyle msItemTb a msActBoxShow ms_select_link disable-get-schedule disableClick" title="Expand instruction modes filter" aria-label="Expand instruction modes filter">Select...</button></div></div><div style={{clear: 'both'}} /></div><div className="msbox" role="group" aria-label="instruction modes options" style={{display: 'none'}}><div className="msBoxCont"><div className="msulwrapper wcol2"><ul className="boxcol col0" role="presentation" /></div><div className="msulwrapper wcol2"><ul className="boxcol col1" role="presentation" /></div><div className="msulwrapper wcol2 textnonevisible" style={{display: 'block'}}><ul role="presentation"><li>A college must be selected first.</li></ul></div><div style={{clear: 'both'}} /></div><div className="msBoxButtons accessOffOnly"><div className="msSelectAllDiv"><button className="mdl-button mdl-js-button" onclick="msSelect(&quot;instructSelector&quot;,undefined,true);" title="Select all instruction modes" aria-label="Select all instruction modes" data-upgraded=",MaterialButton">Select All</button> <button className="mdl-button mdl-js-button" onclick="msSelect(&quot;instructSelector&quot;,undefined,false);" title="Deselect all instruction modes" aria-label="Deselect all instruction modes" data-upgraded=",MaterialButton">Select None</button></div><div className="msBoxClose accessOffOnly"><button className="mdl-button mdl-js-button msActBoxClose" title="Collapse instruction modes filter" data-upgraded=",MaterialButton">Close</button></div></div></div></div>
                        <div id="sessionSelector"><div className="mstitle"><div className="msItemR mslistitemstart"><div className="msItemNb li"><div className="msItemTb criteria_filter_title">Session:</div></div></div><div className="msAll" style={{display: 'inline-block'}}><div className="msItemR"><div className="msItemNb li"><div className="msItemTb"><span className="textAll" style={{display: 'none'}}>All</span><span className="textNone" style={{display: 'none'}}>None</span></div></div></div></div><div className="msItemR msSelectDot"><div className="msItemNb li"><button className="nobuttonstyle msItemTb a msActBoxShow ms_select_link disableClick" title="Expand session filter" aria-label="Expand session filter"><span className="accessOffOnly">Select...</span><span className="accessOnly">Show Session</span></button></div></div><div style={{clear: 'both'}} /></div><div className="msbox" role="group" aria-label="session options" style={{display: 'none'}}><div className="msBoxCont"><div className="msulwrapper wcol2"><ul className="boxcol col0" role="presentation" /></div><div className="msulwrapper wcol2"><ul className="boxcol col1" role="presentation" /></div><div className="msulwrapper wcol2 textnonevisible" style={{display: 'block'}}><ul role="presentation"><li>None Visible</li></ul></div><div style={{clear: 'both'}} /></div><div className="msBoxButtons accessOffOnly"><div className="msSelectAllDiv"><button className="mdl-button mdl-js-button" onclick="msSelect(&quot;sessionSelector&quot;,undefined,true);" title="Select all session" aria-label="Select all session" data-upgraded=",MaterialButton">Select All</button> <button className="mdl-button mdl-js-button" onclick="msSelect(&quot;sessionSelector&quot;,undefined,false);" title="Deselect all session" aria-label="Deselect all session" data-upgraded=",MaterialButton">Select None</button></div><div className="msBoxClose accessOffOnly"><button className="mdl-button mdl-js-button msActBoxClose" title="Collapse session filter" data-upgraded=",MaterialButton">Close</button></div></div></div></div>
                      </div>
                      <div className="accessOnly">
                        <h3>Step<span className="bubbleNb2">2</span>: Select a Course</h3>
                        <div>
                          Begin typing a course code or name that you would like to take.<br /><br />Example: <strong>CHEM 1A03</strong>, or <strong>ARTHIST 2T03</strong></div>
                      </div>
                      <div id="sel_midrange" style={{minHeight: '30px'}}>
                        <div className="bubble" id="step2abubble">
                          <div className="tip_top"><i className="fa fa-caret-up" /></div>
                          <div className="bubbletitle hide50" style={{float: 'left'}}>Step<span className="bubbleNb2a">1</span></div>
                          <div>
                            <img src="test_loggedin_files/step_arrow_north.png" style={{float: 'right'}} alt="Up arrow for step instructions" className="phone step_arrow" />
                            <div style={{float: 'left', clear: 'left'}}>Select your desired course locations.</div>
                            <div style={{clear: 'both'}} />
                          </div>
                          <div className="tip_bottom weakhide" />
                        </div>
                        <div id="message_area" aria-live="assertive" aria-atomic="true">
                        </div>
                        <div className="bubble" id="step2bubble">
                          <div className="bubbletitle hide50">Step<span className="bubbleNb2">2</span></div>
                          Begin typing a course code or name that you would like to take.<img src="test_loggedin_files/step_arrow_south.png" style={{marginTop: '17px'}} alt="Down arrow for step instructions" className="pull-right phone step_arrow" />
                          <br /><br />Example: <strong>CHEM 1A03</strong>, or <strong>ARTHIST 2T03</strong><div className="tip_bottom"><i className="fa fa-caret-down" /></div>
                          <div className="clearfix" />
                        </div>
                      </div>
                      <div className="plusBox">
                        <h3 className="visuallyhidden" aria-label="Select Course input. Please search for courses using the input element below." />
                        <div className="visuallyhidden">
                          <div id="autocomplete-results" aria-live="assertive" aria-atomic="true">
                          </div>
                        </div>
                        <div className="sdl_input plusInput" data-protonpass-form>
                          <label htmlFor="code_number" style={{color: 'black'}}>Select Course</label>
                          {/* Provide additional labelling for screen readers */}
                          <label id="accessibilityCourseSearchLabel" className="visuallyhidden">Search for courses by</label>
                          <input className="disable-welcome disable-get-schedule" aria-describedby="accessibilityCourseSearchLabel" type="text" placeholder="Class Number, Title, Instructor..." id="code_number" autoComplete="off" role="combobox" />
                          <button className="advSearchButton disable-welcome disable-get-schedule" onclick="AS.openCourseBrowser()" style={{pointerEvents: 'auto'}}>
                            <div className="advSearchText" style={{color: 'black'}}>Advanced<br />Search</div>
                            <div className="advSearchIcon"><i className="fa fa-search" /></div>
                          </button>
                        </div>
                        <div style={{clear: 'both'}} />
                        <div className="crnListWarning importOnlyPlan">
                          You cannot manually select courses because you must follow the assigned recommendation.</div>
                        <div className="crnListWarning crnListWarningInfo noSelectAlert" style={{display: 'none'}}>
                          You cannot manually select courses but you can import them from your 
                          Course Queue which you can fill in your My Academic Requirements<span className="noSelectAdvice" />
                        </div>
                        <div className="crnListWarning crnListWarningInfo noSelectAlertAdvisor" style={{display: 'none'}}>
                          Note that this student acting alone can only select courses from their
                          Academic Requirements by importing them via the Course Queue<span className="noSelectAdvice" />
                        </div>
                        <div className="crnListWarning crnListWarningInfo noSelectAlertGuest" style={{display: 'none'}}>
                          Schedule Builder is currently being piloted for only specific users. 
                          However, we anticipate this new tool will be available to you sometime 
                          in the future.<span className="noSelectAdvice" />
                        </div>
                        {/* Course browsing */}
                        <div className="browse-courses hide50">
                          <a className="popup-modal" href="javascript:AS.openCourseBrowser()">
                            <img alt="Advanced Course Search" src="test_loggedin_files/search2.gif" style={{verticalAlign: 'bottom'}} />
                            Advanced Course Search...
                          </a>
                        </div>
                      </div>
                      <div className="plusBoxBelow">
                      </div>
                      <div id="select-course-filters" className="hide50" style={{marginBottom: '10px'}}>
                        <div style={{textAlign: 'left', width: '100%'}}>
                        </div>
                        <div style={{textAlign: 'left'}}>
                          <div style={{display: 'flex', alignItems: 'center', height: '47px'}}>
                            Locations
                            <button className="mdl-button mdl-js-button" id="add-location-filter" onclick="
		$('#add-location-filter').hide();
		$('.select-course-filters-input-container').show()" style={{width: '20px', padding: '0 5px', marginLeft: '2px', minWidth: 0}} data-upgraded=",MaterialButton">+</button>
                            <span className="select-course-filters-input-container" style={{display: 'none'}}>
                              <input style={{width: '200px'}} type="text" id="select-course-filters-input" aria-label="Select Location" placeholder="Select Location" />
                            </span>
                          </div>
                          <div className="selected-filters-chips">
                            <span className="mdl-chip mdl-chip--deletable" id="selectCourseFilterChipTemplate" style={{display: 'none'}}>
                              <span className="mdl-chip__text chip-text">Deletable Chip</span>
                              <button type="button" className="mdl-chip__action">
                                <i className="fa fa-times" aria-hidden="true" />
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="crnListWarning tooManyResults" style={{display: 'none'}}>
                        The generated schedule results are truncated because the input is too 
                        broad. To ensure all results are considered, pin down or toggle off some
                        of your preferred classes.</div>
                      <div id="requirements" style={{position: 'relative'}}>
                        <h3 className="visuallyhidden" aria-label="List of courses:" />
                        <div id="size-tester">Sample Sizer</div>
                        <div className="loadingDiv flap_loading" id="flap_loading">Retrieving schedule...</div>
                        <div className="requirementDiv2 rbox" id="templateCourse2" style={{display: 'none'}}>
                          <h4 className="visuallyhidden" aria-label="Selected course" />
                          <div className="rbox-header" style={{display: 'none'}}>
                            <div className="rbox-header-cont clearfix2">
                              <span className="rbox-wheader">
                                <span className="wildcard-title requirementTitle1">Subject or Title </span>
                                <span className="wildcard-title requirementTitle2" style={{display: 'none'}}>Catalog Number: </span>
                                <span className="wildcard-title requirementTitle3" style={{display: 'none'}}>Attribute: </span>
                              </span>
                              <div className="clearfix2" style={{float: 'right'}}>
                                <div className="reqInfo">Choose a course from the following list:</div>
                                <div className="optionsSelect" />
                              </div>
                            </div>
                          </div>
                          <div className="cbox-select-wildcard" style={{display: 'none'}}>
                            <div className="cbox"> {/* Add 'roomy' to classes to stretch content, 'expanded' to pre-expand */}
                              <table style={{width: '100%', padding: '0px', borderSpacing: '0px'}} className="cbox-expand-region">
                                <tbody><tr>
                                    <td>
                                      <span className="select-title"><i className="fa fa-exclamation-triangle" /> Please select a course from the dropdown</span>
                                    </td>
                                    <td className="cbox-option" style={{width: '3%'}} onclick="event.stopPropagation();">
                                      <div className="cnf_trash_tip Dmdl-tooltip mdl-tooltip--top dynID" htmlFor="tipTrashWildX">Drop this course</div>
                                      <button aria-label="Remove class" className="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipTrashWildX" data-upgraded=",MaterialButton">
                                        <img className="cbox-trash-icon" src="test_loggedin_files/trash.svg" alt="trash can" />
                                        <img className="cbox-trash-icon-open" src="test_loggedin_files/trash_open.svg" alt="empty trash can" />
                                        <i className="fa fa-undo cbox-trash-icon-undo" />
                                      </button>
                                    </td>
                                  </tr>
                                </tbody></table>
                            </div>
                          </div>
                          <div className="cbox-margin">
                            <div className="cbox-toggle">
                              <label className="Dmdl-checkbox Dmdl-js-checkbox Dmdl-js-ripple-effect dynID">
                                <input type="checkbox" id="cnf_toggle" className="Dmdl-checkbox__input ignore_check dynID" defaultChecked="checked" />
                              </label>
                            </div>
                            <div className="cbox"> {/* Add 'roomy' to classes to stretch content, 'expanded' to pre-expand */}
                              <table style={{width: '100%', padding: '0px', borderSpacing: '0px'}} className="cbox-expand-region">
                                <tbody><tr>
                                    <td className="cbox-codenumber">
                                      <div className="cbox-cn">
                                        COMM<br />217
                                      </div>
                                    </td>
                                    <td className="cbox-header">
                                      <div className="Dmdl-tooltip mdl-tooltip--right dynID" aria-hidden="true" htmlFor="tipCourseLinkX">Courses with this symbol must be taken together</div>
                                      <span className="block_piece_indicator_cont dynID" id="tipCourseLinkX"><span className="block_piece_indicator"><i className="fas fa-link" /></span></span>
                                      <span className="leftnclear cbox-title">Financial Accounting</span>
                                      <span className="cnf_req_state">Required or Recommended</span>
                                      <span className="course_state" />
                                      <span className="leftnclear cbox-subtitle">
                                        {/* <span class="cnf_consider dynID" id="tipConsiderX">Considering 3 of 5 Classes</span>&nbsp;&nbsp; */}
                                        <span className="cnf_campus_info">Walnut Creek Campus</span></span>
                                      <span className="cnf_dropdown cbox-dropdown-cont leftnclear" onkeydown="return avoidChange(event);" onkeypress="return avoidChange(event);" onkeyup="return avoidChange(event);" onclick="event.stopPropagation();">
                                        {/* <div class="dh_locker_hotspot" onclick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));">&nbsp;</div> */}
                                        {/* <img src="images/padlock.gif" style="vertical-align:middle;" class="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor"/> */}
                                        <select className="cbox-dropdown cbox-dropdown-normal dropdownSelect" aria-label="Please select a course section from this dropdown.  If selected, course schedules will only be generated containing the selected sections for a given course.">
                                          <option aria-label="Current selection " value="al" selected="selected">Try all classes</option>
                                          {/* <option value="ig">Ignore this course</option>  */}
                                          <option value="ss" className="cnf_specific_option">Try specific classes...</option></select>
                                        <img src="test_loggedin_files/pin.png" style={{verticalAlign: 'middle', cursor: 'pointer', margin: '-2px 0px'}} className="dropdownPinImg" alt="Push Pin" />
                                        <img src="test_loggedin_files/padlock.gif" style={{verticalAlign: 'middle', margin: '-2px 0px'}} className="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor" />
                                        <div className="cnf_class_lock_tip Dmdl-tooltip mdl-tooltip--top dynID" aria-hidden="true" htmlFor="tipClsLockX">Lock this class</div>
                                        <button aria-label="lock class" className="class_locker_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipClsLockX" onclick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));" style={{margin: '-6px 0 -6px 0'}} data-upgraded=",MaterialButton">
                                          <i className="class_unlocked fa fa-unlock-alt" />
                                          <i className="class_locked fa fa-lock" />
                                        </button>
                                      </span>
                                    </td>
                                    <td className="cbox-option cnf_lock" style={{width: '3%'}} onclick="event.stopPropagation();">
                                      <div className="cnf_locker_tip Dmdl-tooltip mdl-tooltip--top dynID" htmlFor="tipLockX">Lock this course</div>
                                      <button aria-label="lock course" className="cnf_locker_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipLockX" data-upgraded=",MaterialButton">
                                        <i className="cnf_unlocked fa fa-unlock-alt" />
                                        <i className="cnf_locked fa fa-lock" />
                                      </button>
                                    </td>
                                    <td className="cbox-option" style={{width: '3%'}} onclick="event.stopPropagation();">
                                      <div className="cnf_trash_tip Dmdl-tooltip mdl-tooltip--top dynID" htmlFor="tipTrashX">Drop this course</div>
                                      <button aria-label="Remove course" className="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipTrashX" data-upgraded=",MaterialButton">
                                        <img className="cbox-trash-icon" src="test_loggedin_files/trash.svg" alt="trash can" />
                                        <img className="cbox-trash-icon-open" src="test_loggedin_files/trash_open.svg" alt="empty trash can" />
                                        <i className="fa fa-undo cbox-trash-icon-undo" />
                                      </button>
                                    </td>
                                    <td className="cbox-option cbox-expander" style={{width: '3%'}}>
                                      <div className="Dmdl-tooltip mdl-tooltip--top dynID cnf_tip_expand" htmlFor="tipExpandX">Click to {'{'}{'}'} more options and information on {'{'}{'}'}</div>
                                      <button aria-label="Expand course detail" className="mdl-button mdl-js-button mdl-button--icon dynID" id="tipExpandX" data-upgraded=",MaterialButton">
                                        <i className="far fa-angle-down" />
                                      </button>
                                    </td>
                                  </tr>
                                </tbody></table>
                              <div className="cbox-warnings">
                                <i className="fa fa-exclamation-triangle" /> This course has no classes still open for enrollment
                              </div>
                              <div className="cbox-expansion" style={{display: 'none'}}>
                                <div className="cbox-row clearfix2 cnf_desc">
                                  <span className="cbox-row-title">Description:</span>
                                  <span className="cbox-row-content cnf_desc_desc"> This course is designed to familiarize the students with the processes
                                    involved in the design, planning, and construction of dramatic motion picture sets. </span>
                                  <div style={{clear: 'both'}} />
                                </div>
                                <div className="cbox-row clearfix2 cnf_reqs">
                                  <span className="cbox-row-title">Requirements:</span>
                                  <span className="cbox-row-content cnf_req"> ACT English 18-19 or COMPASS English 70-80. </span>
                                </div>
                                <div className="core_names_cont2 cbox-row clearfix2">
                                  <span className="cbox-row-title">Attributes:</span>
                                  <span className="core_names cbox-row-content">HON, CORE</span>
                                </div>
                                <div className="cbox-row clearfix2 cnf_cross_listed">
                                  <span className="cbox-row-title">Cross Listed Courses:</span>
                                  <span className="cbox-row-content cnf_cross_listed_desc"> MATH 101, CHEM 303 </span>
                                </div>
                                <div className="cbox-row clearfix2 noselect selectAllNoneContainer">
                                  <span className="cbox-row-title">Campuses:</span>
                                  <div style={{clear: 'both'}} />
                                  <span className="campus_checkboxes clearfix2">
                                    <span className="cbox-selitem">
                                      <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="checkbox-X1" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                        <input type="checkbox" id="checkbox-X1" className="mdl-checkbox__input" defaultChecked="checked" />
                                        <span className="cbox-selitem-label">Sir George Williams</span>
                                        <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                    </span>
                                  </span>
                                  <div className="cbox-allnone cnf_campuses_allnone">
                                    <button className="Dmdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                    <button className="Dmdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                  </div>
                                </div>
                                <div className="cbox-row noselect">
                                  <span className="cbox-row-title clearfix2">Session:</span>
                                  <div style={{clear: 'left'}} />
                                  <select className="cbox-select select_period" role="listbox" aria-label="Period">
                                    <option selected="selected">Period A</option>
                                    <option>Period B</option>
                                  </select>
                                </div>
                                <div className="cbox-row noselect">
                                  <span className="cbox-row-title clearfix2">Section:</span>
                                  <div style={{clear: 'left'}} />
                                  <select className="cbox-select select_usn" role="listbox" aria-label="USN">
                                    <option selected="selected">Item A</option>
                                    <option>Item B</option>
                                  </select>
                                </div>
                                <div className="cbox-row clearfix2 noselect selectAllNoneContainer cnf_modes">
                                  <span className="cbox-row-title">Include classes that are:</span>
                                  <div style={{clear: 'both'}} />
                                  <span className="mode_checkboxes">
                                    <span className="cbox-selitem">
                                      <label className="Dmdl-checkbox Dmdl-js-checkbox Dmdl-js-ripple-effect cbox-checkbox dynID" htmlFor="cb_online">
                                        <input type="checkbox" id="cb_online" className="Dmdl-checkbox__input dynID" defaultChecked="checked" />
                                        <span className="cbox-selitem-label">Online</span>
                                      </label>
                                    </span>
                                    <span className="cbox-selitem">
                                      <label className="Dmdl-checkbox Dmdl-js-checkbox Dmdl-js-ripple-effect cbox-checkbox dynID" htmlFor="cb_on_camp">
                                        <input type="checkbox" id="cb_on_camp" className="Dmdl-checkbox__input dynID" defaultChecked="checked" />
                                        <span className="cbox-selitem-label">On Campus</span>
                                      </label>
                                    </span>
                                    <span className="cbox-selitem">
                                      <label className="Dmdl-checkbox Dmdl-js-checkbox Dmdl-js-ripple-effect cbox-checkbox dynID" htmlFor="cb_lod">
                                        <input type="checkbox" id="cb_lod" className="Dmdl-checkbox__input dynID" defaultChecked="checked" />
                                        <span className="cbox-selitem-label">Learn on demand</span>
                                      </label>
                                    </span>
                                  </span>
                                  <div className="cbox-allnone">
                                    <button className="Dmdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                    <button className="Dmdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                  </div>
                                </div>
                                <div className="cbox-row clearfix2 noselect cnf_classes selectAllNoneContainer">
                                  <span className="cbox-row-title">Classes:</span>
                                  <span className="visuallyhidden" aria-label="The following checkboxes allow you to specify which classes you want to allow as possible options for your generated schedule results. If you want to get the detail of each class now, try adding only this course to the list of courses (or deselect every course except this one). This will generate one schedule result for each unique timetable option of this course. By navigating the legend of each schedule result, you will be able to examine the detail of each class of this course." />
                                  <div style={{clear: 'both'}} />
                                  <span className="class_checkboxes">
                                    <span className="cbox-selitem cbox-classitem">
                                      <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="checkbox-Y1" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                        <input type="checkbox" id="checkbox-Y1" className="mdl-checkbox__input class_chk" defaultChecked="checked" />
                                        <span className="cbox-selitem-label full">Lec A</span>
                                        <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                      <div className="cbox-hover-pin">Pin</div>
                                    </span>
                                    <span className="cbox-selitem cbox-classitem">
                                      <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="checkbox-Y2" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                        <input type="checkbox" id="checkbox-Y2" className="mdl-checkbox__input class_chk" defaultChecked="checked" />
                                        <span className="cbox-selitem-label waitlisted">Lec B</span>
                                        <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                      <div className="cbox-hover-pin">Pin</div>
                                    </span>
                                  </span>
                                  <div className="cbox-allnone">
                                    <button className="Dmdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                    <button className="Dmdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                  </div>
                                </div>
                                <div className="cbox-row clearfix2 cnf_subj_note">
                                  <span className="cbox-row-title">Subject Notes:</span>
                                  <span className="cbox-row-content cnf_subj_note_desc"> abc </span>
                                </div>
                                <div className="cbox-row clearfix2 cnf_cattrs">
                                  <span className="cbox-row-title">Course Attributes:</span>
                                  <span className="cbox-row-content cnf_cattr">Value1, Value2</span>
                                </div>
                                <div className="cnf_custom_attrs">
                                  <div className="cbox-row clearfix2 cnf_attrs">
                                    <span className="cbox-row-title">Attribute1:</span>
                                    <span className="cbox-row-content cnf_attr">Value1</span>
                                  </div>
                                  <div className="cbox-row clearfix2 cnf_attrs">
                                    <span className="cbox-row-title">Attribute2:</span>
                                    <span className="cbox-row-content cnf_attr">Class1, Class3: Value1</span>
                                    <span className="cbox-row-content cnf_attr">Class2: Value2</span>
                                  </div>
                                </div>
                                <div className="cbox-row clearfix2 cnf_class_notes">
                                  <span className="cbox-row-title">Class Remarks:</span>
                                  <span className="cbox-row-content cnf_class_notes_desc"> abc </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="reg_generate">
                        <input title className="big_button" type="button" name="do_search" defaultValue="Generate Schedules" onclick="UU.caseViewResults();" id="do_search" />
                        <div style={{marginTop: '9px', position: 'relative'}}>
                          <div className="bubble" id="step3bubble" style={{display: 'none'}}>
                            <div className="tip_top"><i className="fa fa-caret-up" /></div>
                            <img src="test_loggedin_files/step_arrow_north.png" alt="Up arrow for step instructions" className="pull-right phone step_arrow" />
                            <div className="bubbletitle hide50">Step<span className="bubbleNb3">3</span></div>
                            Once the desired courses are listed, click the 'Generate Schedules' button.<div className="clearfix" />
                          </div>
                        </div>
                      </div>
                      <div className="bottomAdvice noprint" />
                      <div className="enrollmentEncouragement noprint" style={{display: 'none'}} />
                      <div className="bottomLinks noprint">
                        <a href="javascript:void(0);" onclick="custReturnToStudentCentre();" id="linkReturnToStudentCentre" style={{display: 'none'}}>
                          <img id="return_icon" src="test_loggedin_files/return.gif" style={{verticalAlign: 'middle'}} alt="Return icon" /> Return to Student Center</a>
                        <a className="hideIfDisableCart disable-get-schedule" href="javascript:void(0);" onclick="custViewMyShoppingCart();" style={{display: 'none'}}>
                          <img id="schedule_icon" src="test_loggedin_files/cart.gif" style={{verticalAlign: 'middle'}} alt="Cart icon" /> View My Shopping Cart</a>
                      </div>
                      <div className="bottomLinks noprint hide50">
                        <a href="javascript:void(0)" onclick="clearSearch();" title="Reset the contents on this page">
                          <img src="test_loggedin_files/broom.png" style={{verticalAlign: 'middle'}} height={18} width={18} alt="Clear search icon" /> Start Over</a>
                      </div>
                      <div><span className="fullscreen-results-total-schedules">0 Schedule Result</span></div>
                      <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent welcome-search-continue" onclick="PAGES.exitFullScreenSearch()" disabled="disabled" data-upgraded=",MaterialButton,MaterialRipple">
                        View Schedules
                        <span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                    </div>
                    <div className="full_page_content" id="tab_search" style={{display: 'none', opacity: 1, width: 'auto', position: 'relative'}}>
                      <div>
                        <button className="mdl-button mdl-js-button mdl-js-ripple-effect search-back-button" onclick="RR.changeSelCourseTab('tab_selected');" data-upgraded=",MaterialButton,MaterialRipple">
                          Back
                          <span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                      </div>
                      <div className="select-course-title">
                        Advanced Course Search
                      </div>
                      <div className="tab_container">
                        <div className="tab_content">
                          <div id="advanced_search_html">
                            <div className="course-browsing">
                              <div className="course-browsing-search">
                                <table role="presentation">
                                  <tbody>
                                    <tr>
                                      <td colSpan={2}>
                                        <div className="cb_filter_row clearfix2">
                                          <div className="cb_filter_text">
                                            Courses available online only</div>
                                          <div className="cb_filter_switch mdl-switch-nvda-fix">
                                            <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded" htmlFor="cb_online_only" data-upgraded=",MaterialSwitch,MaterialRipple">
                                              <span className="mdl-switch__label visuallyhidden">Courses available online only</span>
                                              <input id="cb_online_only" type="checkbox" className="mdl-switch__input" />
                                              <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>
                                        <div className="cb_filter_row clearfix2">
                                          <div className="cb_filter_text">
                                            Courses on-campus only</div>
                                          <div className="cb_filter_switch mdl-switch-nvda-fix">
                                            <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded" htmlFor="cb_oncampus_only" data-upgraded=",MaterialSwitch,MaterialRipple">
                                              <span className="mdl-switch__label visuallyhidden">Courses on-campus only</span>
                                              <input id="cb_oncampus_only" type="checkbox" className="mdl-switch__input" />
                                              <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr id="cb_acad_career_row">
                                      <th>Academic Career:</th>
                                      <td>
                                        <select id="cb_acad_career" role="listbox" aria-label="Academic career">
                                          <option value label selected="selected" />
                                          {/* Filled by writeObjectIntoSelect */}
                                        </select>
                                      </td>
                                    </tr>
                                    <tr id="cb_course_external_subject_row">
                                      <th>Course Subject:</th>
                                      <td>
                                        <select id="cb_course_external_subject" role="listbox" aria-label="Course Subject">
                                          <option value label selected="selected" />
                                          {/* Filled by writeObjectIntoSelect */}
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>Academic Group:</th>
                                      <td>
                                        <select id="cb_academic_group" role="listbox" aria-label="Academic Group">
                                          <option value label selected="selected" />
                                          {/* Filled by writeObjectIntoSelect */}
                                        </select>
                                      </td>
                                    </tr>
                                    <tr id="cb_course_attribute_row">
                                      <th>Course Attribute:</th>
                                      <td>
                                        <select id="cb_course_attribute" role="listbox" required aria-label="Course Attribute">
                                          <option value selected="selected" />
                                          {/* Filled by writeObjectIntoSelect */}
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th id="cb_course_attribute_label1">Course Attribute Value:</th>
                                      <td>
                                        <select id="cb_course_attribute_value" role="listbox" aria-label="Attribute Value">
                                          <option value label selected="selected" />
                                        </select>
                                      </td>
                                    </tr>
                                    <tr id="cb_requirement_designation_row">
                                      <th>Requirement Designation:</th>
                                      <td>
                                        <select id="cb_requirement_designation" role="listbox" aria-label="Requirement Designation">
                                          <option value selected="selected">All Requirement Designation</option>
                                          {/* Filled by writeObjectIntoSelect */}
                                        </select>
                                      </td>
                                    </tr>
                                    <tr id="cb_session_row">
                                      <th>Session:</th>
                                      <td>
                                        <select id="cb_session" role="listbox" aria-label="Period">
                                          <option value label selected="selected" />
                                          {/* Filled by writeObjectIntoSelect */}
                                        </select>
                                      </td>
                                    </tr>
                                    <tr id="cb_class_day_row" title="Indicate the days you're available. The course must contain at least one class that occurs within the given day(s).">
                                      <th>Days Permitted:</th>
                                      <td className="cb_day_checkboxes">
                                        <span className="cb_sel_item">
                                          <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                            <input className="mdl-checkbox__input class_chk" type="checkbox" name="classDay" defaultValue={1} defaultChecked="checked" /><span className="cbox-selitem-label">Sun</span>
                                            <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                        </span>
                                        <span className="cb_sel_item">
                                          <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                            <input className="mdl-checkbox__input class_chk" type="checkbox" name="classDay" defaultValue={2} defaultChecked="checked" /><span className="cbox-selitem-label">Mon</span>
                                            <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                        </span>
                                        <span className="cb_sel_item">
                                          <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                            <input className="mdl-checkbox__input class_chk" type="checkbox" name="classDay" defaultValue={3} defaultChecked="checked" /><span className="cbox-selitem-label">Tues</span>
                                            <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                        </span>
                                        <span className="cb_sel_item">
                                          <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                            <input className="mdl-checkbox__input class_chk" type="checkbox" name="classDay" defaultValue={4} defaultChecked="checked" /><span className="cbox-selitem-label">Wed</span>
                                            <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                        </span>
                                        <span className="cb_sel_item">
                                          <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                            <input className="mdl-checkbox__input class_chk" type="checkbox" name="classDay" defaultValue={5} defaultChecked="checked" /><span className="cbox-selitem-label">Thurs</span>
                                            <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                        </span>
                                        <span className="cb_sel_item">
                                          <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                            <input className="mdl-checkbox__input class_chk" type="checkbox" name="classDay" defaultValue={6} defaultChecked="checked" /><span className="cbox-selitem-label">Fri</span>
                                            <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                        </span>
                                        <span className="cb_sel_item">
                                          <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                            <input className="mdl-checkbox__input class_chk" type="checkbox" name="classDay" defaultValue={7} defaultChecked="checked" /><span className="cbox-selitem-label">Sat</span>
                                            <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                        </span>
                                      </td>
                                    </tr>
                                    <tr id="cb_class_time_row" title="Indicate the earliest time you're available. The course must contain at least one class that is not scheduled outside the given day(s) and start/end times.">
                                      <th>Start After Time:</th>
                                      <td>
                                        <span className="cb_sel_item">
                                          <select id="cb_startHour" role="listbox" aria-label="Start After Hour">
                                            <option value label selected="selected" />
                                            <option value={0} label={0} />
                                            <option value={1} label={1} />
                                            <option value={2} label={2} />
                                            <option value={3} label={3} />
                                            <option value={4} label={4} />
                                            <option value={5} label={5} />
                                            <option value={6} label={6} />
                                            <option value={7} label={7} />
                                            <option value={8} label={8} />
                                            <option value={9} label={9} />
                                            <option value={10} label={10} />
                                            <option value={11} label={11} />
                                            <option value={12} label={12} />
                                            <option value={13} label={13} />
                                            <option value={14} label={14} />
                                            <option value={15} label={15} />
                                            <option value={16} label={16} />
                                            <option value={17} label={17} />
                                            <option value={18} label={18} />
                                            <option value={19} label={19} />
                                            <option value={20} label={20} />
                                            <option value={21} label={21} />
                                            <option value={22} label={22} />
                                            <option value={23} label={23} />
                                          </select>
                                        </span> :
                                        <span className="cb_sel_item">
                                          <select id="cb_startMin" role="listbox" aria-label="Start After Minute">
                                            <option value={0} label={0} selected="selected" />
                                            <option value={15} label={15} />
                                            <option value={30} label={30} />
                                            <option value={45} label={45} />
                                          </select>
                                        </span>
                                      </td>
                                    </tr>
                                    <tr id="cb_class_time_row" title="Indicate the latest time you're available. The course must contain at least one class that is not scheduled outside the given day(s) and start/end times.">
                                      <th>End Before Time:</th>
                                      <td>
                                        <span className="cb_sel_item">
                                          <select id="cb_endHour" role="listbox" aria-label="End Before Hour">
                                            <option value label selected="selected" />
                                            <option value={0} label={0} />
                                            <option value={1} label={1} />
                                            <option value={2} label={2} />
                                            <option value={3} label={3} />
                                            <option value={4} label={4} />
                                            <option value={5} label={5} />
                                            <option value={6} label={6} />
                                            <option value={7} label={7} />
                                            <option value={8} label={8} />
                                            <option value={9} label={9} />
                                            <option value={10} label={10} />
                                            <option value={11} label={11} />
                                            <option value={12} label={12} />
                                            <option value={13} label={13} />
                                            <option value={14} label={14} />
                                            <option value={15} label={15} />
                                            <option value={16} label={16} />
                                            <option value={17} label={17} />
                                            <option value={18} label={18} />
                                            <option value={19} label={19} />
                                            <option value={20} label={20} />
                                            <option value={21} label={21} />
                                            <option value={22} label={22} />
                                            <option value={23} label={23} />
                                          </select>
                                        </span> :
                                        <span className="cb_sel_item">
                                          <select id="cb_endMin" role="listbox" aria-label="End Before Minute">
                                            <option value={0} label={0} selected="selected" />
                                            <option value={15} label={15} />
                                            <option value={30} label={30} />
                                            <option value={45} label={45} />
                                          </select>
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>Keywords:</th>
                                      <td>
                                        <input id="cb_search_term" type="text" className="fancy-input" aria-label="Course search" placeholder="Class Number, Title, Instructor..." />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}>
                                        <button style={{width: '100%'}} id="course-browsing-search-btn" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" data-upgraded=",MaterialButton">
                                          SEARCH
                                        </button>
                                        <div style={{clear: 'both'}} />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="course-browsing-results">
                                <div id="cb_search_results" className="course-browsing-results-listing sdl-scrollbars" aria-role="heading" aria-level={5} aria-label="Advanced Course Search Results">
                                  <table className="cb-results_table" id="cb-results_table">
                                    {/* Filled with cbSearchCourses2 function */}
                                  </table>
                                </div>
                                <div className="search-tab-footer">
                                  <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-disabled is-upgraded" htmlFor="cb_show_selected_only_cbx" data-upgraded=",MaterialSwitch,MaterialRipple">
                                    <input id="cb_show_selected_only_cbx" type="checkbox" className="mdl-switch__input" disabled="disabled" />
                                    <span className="mdl-switch__label cb_switch_text">View selected only</span>
                                    <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                </div>
                              </div>
                              <div style={{clear: 'both'}} />
                            </div>
                          </div></div>
                      </div>
                      <div>
                        <input type="button" className="big_button" id="cbSelectCourses" defaultValue="Select Courses" disabled="disabled" />
                      </div>
                    </div>
                  </div>
                  <div className="page_whiteout" />
                </td> {/* end of page_criteria */}
                <td id="page_results" role="region" aria-labelledby="page_results_label" className="vsb_page active_vsb_page" style={{width: '63.0764%'}}>
                  <div className="left_gradient nomobile" />
                  <div className="right_gradient nomobile" />
                  <div className="page_fader" style={{opacity: 0, display: 'none'}} />
                  <div className="full_page_title title_font">
                    <button id="page_criteria_expander" title="Collapse the Select Courses region" className="nobuttonstyle expander chevron_left disable-get-schedule" tabIndex={0} />
                    <button id="page_favorites_expander" title="Expand the Favorites region" className="nobuttonstyle expander chevron_right disable-get-schedule collapsed" tabIndex={0} />
                    <div className="left_gradient">
                    </div>
                    <div className="right_gradient">
                    </div>
                    <span className="results_page_title" id="page_results_label">Schedule <span className="akl">R</span>esults</span>
                  </div>
                  <div className="full_page">
                    <div className="full_page_content" style={{position: 'relative', opacity: 1, width: 'auto'}}>
                      <p id="alertJAWSresult" role="alert" style={{display: 'none'}} aria-atomic="true" />
                      <div id="flap_loading2" className="flap_loading" style={{display: 'none'}}>
                        &nbsp;
                        <span id="procStatus">Generating Schedules...</span>
                      </div>
                      <div id="flap_pause_results">
                        <div className="resultMax pause_max">0</div>
                        <div className="pause_found" style={{display: 'none'}}>schedule results</div>
                        <div className="pause_view_results" style={{display: 'none'}}>
                          <input type="button" className="big_button" defaultValue="View Results" onclick="UU.caseViewResults();if (fullOnViewResults) {$('.chevron_left').click();}" />
                        </div>
                        <div className="pause_results_tip">
                          <strong>Tip:</strong> <span>Select courses to generate schedule results.</span>
                          <div style={{clear: 'both'}} />
                        </div>
                      </div>
                      <div className="results-top noprint">
                        <h2 className="visuallyhidden" aria-label="Schedule Results region" />
                        <p className="visuallyhidden" id="page_results_desc">
                          <span>This is the Results region. Showing result</span>
                          <span className="results-current-schedule">0</span> <span>of</span> <span className="results-total-schedules">0</span>.
                          This shows you a list of all the possible schedules using your list of
                          courses in the 'Select Courses' region. Navigate through the results. 
                          You may sort and filter these results using the tools in this region. 
                          When you have found your preferred schedule, use the provided class 
                          numbers to enroll for the classes.</p>
                        <h3 className="visuallyhidden" aria-label="Schedule Results filter - use to limit the schedule results" />
                        <div className="results-legend">
                          <div className="results-legend-switch-container" title="View detailed information on each class by showing the timetable's legend">
                            <label className="results-legend-switch-label" htmlFor="results-legend-switch" style={{cursor: 'pointer'}}>Course Legend</label>
                            <div className="mdl-switch-nvda-fix">
                              <label id="results-legend-switch-label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked" htmlFor="results-legend-switch" data-upgraded=",MaterialSwitch,MaterialRipple">
                                <input id="results-legend-switch" type="checkbox" className="mdl-switch__input focusable disable-no-crf disable-get-schedule" onclick="UU.caseToggleLegend()" disabled="disabled" defaultChecked="checked" />
                                <span className="mdl-switch__label visuallyhidden">Course Legend</span>
                                <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                            </div>
                          </div>
                        </div>
                        <div className="tips-button" title="Display helpful tips" style={{position: 'relative'}}>
                          <button className="mdl-button mdl-js-button disable-no-crf disable-get-schedule" id="fortips" onclick="SLIDER.showTip();return false;" data-upgraded=",MaterialButton" disabled="disabled">
                            Tips
                          </button>
                          <div className="tips_counter"><span className="tips_counter_nb">6</span></div>
                        </div>
                        <div className="results-sort-mobile mobileonly">
                          <button className="mdl-button mdl-js-button disable-no-crf disable-get-schedule" id="forsort" data-upgraded=",MaterialButton" disabled="disabled">
                            Sort
                          </button>
                        </div>
                        <div className="results-sort not-mobileonly">
                          <div className="reg_sort">
                            <h3 className="accessOnly">Sorting</h3>
                            <span className="sorting-checkbox-container" title="Choose how to sort your schedule results">
                              <label htmlFor="sort_by" className="label_font">Sort by:</label>&nbsp;&nbsp;
                              <select className="disable-no-crf disable-get-schedule" id="sort_by" name="sort_by" onchange="UU.caseChangeSort(this.value);" onkeydown="return avoidChange(event);" onkeypress="return avoidChange(event);" onkeyup="return avoidChange(event);" disabled="disabled">
                                <option value="none" selected="selected">Select...</option><option value="daysoff">Most days off</option><option value="morning">Mornings</option><option value="midday">Mid-day classes</option><option value="evening">Evenings</option></select>
                            </span>
                          </div>
                        </div>
                        <div className="results-filter" title="Filter out schedules">
                          <button className="mdl-button mdl-js-button disable-no-crf disable-get-schedule" id="forfilter" onclick="SLIDER.showTip();return false;" data-upgraded=",MaterialButton" disabled="disabled">
                            Filters <span id="filtersCount">(1)</span>
                          </button>
                        </div>
                        <div className="reg_filter" style={{justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                          <div className="rowfilter reg_filter" id="hide_full_tip" tabIndex={0}>
                            <div className="filteroption">
                              <label htmlFor="hide_full">Closed classes</label>
                              <span className="hide50">
                                (<img className="filterElement" src="test_loggedin_files/element_full_ps.gif" />)
                              </span>
                            </div>
                            <div className="mdl-switch-nvda-fix">
                              <label id="hide_full_label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded" htmlFor="hide_full" data-upgraded=",MaterialSwitch,MaterialRipple">
                                <input id="hide_full" type="checkbox" className="mdl-switch__input focusable" defaultValue="hide" onclick="UU.caseChangeHideFull(this);" />
                                <span className="mdl-switch__label visuallyhidden">Closed classes</span>
                                <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                            </div>
                          </div>
                          <div className="mdl-tooltip" data-mdl-for="hide_full_tip" data-upgraded=",MaterialTooltip">Allow schedule results containing full classes</div>
                          <div className="rowfilter reg_filter" id="hide_waitlistable_tip" tabIndex={0}>
                            <div className="filteroption">
                              <label htmlFor="hide_waitlistable">Wait Listed classes</label>
                              <span className="hide50">
                                (<img className="filterElement" src="test_loggedin_files/element_waitlist_ps.gif" />)
                              </span>
                            </div>
                            <div className="mdl-switch-nvda-fix">
                              <label id="hide_waitlistable_label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked" htmlFor="hide_waitlistable" data-upgraded=",MaterialSwitch,MaterialRipple">
                                <input id="hide_waitlistable" type="checkbox" className="mdl-switch__input focusable" defaultValue="hide" onclick="UU.caseChangeHideWaitlistable(this);" defaultChecked="checked" />
                                <span className="mdl-switch__label visuallyhidden">Wait Listed classes</span>
                                <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                            </div>
                          </div>
                          <div className="mdl-tooltip" data-mdl-for="hide_waitlistable_tip" data-upgraded=",MaterialTooltip">Allow schedule results containing classes that are full but can still be waitlisted</div>
                          <div className="rowfilter reg_filter" id="hide_online_tip" tabIndex={0}>
                            <div className="filteroption">
                              <label htmlFor="hide_online">Online classes</label>
                              <span>
                                <i className="far fa-mouse" />
                              </span>
                            </div>
                            <div className="mdl-switch-nvda-fix">
                              <label id="hide_online_label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked" htmlFor="hide_online" data-upgraded=",MaterialSwitch,MaterialRipple">
                                <input id="hide_online" type="checkbox" className="mdl-switch__input focusable" defaultValue="hide" onclick="UU.caseChangeHideOnline(this);" defaultChecked="checked" />
                                <span className="mdl-switch__label visuallyhidden">Online classes</span>
                                <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                            </div>
                          </div>
                          <div className="mdl-tooltip" data-mdl-for="hide_online_tip" data-upgraded=",MaterialTooltip">Allow schedule results containing online classes</div>
                          <div className="rowfilter reg_filter" id="hide_on_campus_tip" tabIndex={0}>
                            <div className="filteroption">
                              <label htmlFor="hide_on_campus">On-ca<span className="akl">m</span>pus classes</label>
                            </div>
                            <div className="mdl-switch-nvda-fix">
                              <label id="hide_on_campus_label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked" htmlFor="hide_on_campus" data-upgraded=",MaterialSwitch,MaterialRipple">
                                <input id="hide_on_campus" type="checkbox" className="mdl-switch__input focusable" defaultValue="hide" onclick="UU.caseChangeHideOnCampus(this);" defaultChecked="checked" />
                                <span className="mdl-switch__label visuallyhidden">On-ca<span className="akl">m</span>pus classes</span>
                                <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                            </div>
                          </div>
                          <div className="mdl-tooltip" data-mdl-for="hide_on_campus_tip" data-upgraded=",MaterialTooltip">Allow schedule results containing classes on campus</div>
                        </div>
                      </div>
                      <div className="reg_parent" style={{display: 'none'}}>
                        <div className="reg_row1_enroll noprint" style={{display: 'none'}}>
                          <h2 className="reg_title noprint" aria-label="Schedule review region. Please review the actions to apply to your course schedule.  Click the Do Actions button to submit.">
                            <span className="title_act1">Getting Schedule</span>
                            <span className="title_act2">Validating Your Shopping Cart</span>
                          </h2>
                        </div>
                        <div className="reg_row1 noprint noselect">
                          <button type="button" id="forfilter_desktop" className="btn btn-mid hide50">Filter</button>
                          <h3 className="visuallyhidden" aria-label="Schedule Result selection - use the navigation buttons to move between the different schedule results - each having a unique timetable." />
                          <div className="reg_flip">
                            <table className="flip_table">
                              <tbody><tr>
                                  <td>
                                    <a className="results-action-first results-nava-disabled" title="First Result">
                                      <i className="nav-first results-nav-btn results-nav-disabled" aria-hidden="true" />
                                    </a>
                                  </td>
                                  <td>
                                    <a className="results-action-previous results-nava-disabled" title="Previous Result">
                                      <i className="nav-prev results-nav-btn results-nav-disabled" aria-hidden="true" />
                                    </a>
                                  </td>
                                  <td className="results-nav">
                                    <div className="results-with-schedules">
                                      <div>
                                        Result</div>
                                      <div aria-live="assertive" aria-atomic="true">
                                        <span className="results-current-schedule">0</span>
                                        of <span className="results-total-schedules">0</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <a className="results-action-next results-nava-disabled" title="Next Result">
                                      <i className="nav-next results-nav-btn results-nav-disabled" aria-hidden="true" />
                                    </a>
                                  </td>
                                  <td>
                                    <a className="results-action-last results-nava-disabled" title="Last Result">
                                      <i className="nav-last results-nav-btn results-nav-disabled" aria-hidden="true" />
                                    </a>
                                  </td>
                                </tr>
                                <tr id="result_page_message" style={{display: 'none'}}>
                                  <td colSpan={5} style={{fontWeight: 'bold', color: '#00BB00'}}><div role="alert" tabIndex={0} id="favalert" aria-atomic="true">Saved to Favorites</div></td>
                                </tr>
                              </tbody></table>
                            <span className="cohort_info" />
                          </div>
                        </div>
                        <div className="reg_flip_results">
                          <div className="reg_row2 printable" id="flip_area" style={{display: 'block'}}>
                            <div className="reg_schedule half" style={{display: 'none'}}>
                              <div className="reg_schedule1 noselect"><h3 className="visuallyhidden" style={{paddingLeft: '62px'}}>Schedule</h3><div className="visuallyhidden">If
                                  you are	using a screen reader, the contents of this heading will not be
                                  useful. Visual content represented here on the timetable is repeated 
                                  verbally under the Legend heading.</div><div style={{position: 'relative'}} className="timetable_part" aria-hidden="true">	<div className="weekName">		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="timetable_title">&nbsp;</span>	</div>	<div className="timezoneAbbr">&nbsp;</div>	<div className="timetable table_container">		<div style={{position: 'relative'}}>			<div className="weekArea"><table cellPadding={0} cellSpacing={0}><tbody><tr className="header tall"><td>Mon<span className="day_2_date"><br />Nov 5</span><div className="holl_2 holiday_label" style={{display: 'none'}} /></td><td>Tue<span className="day_3_date"><br />Nov 6</span><div className="holl_3 holiday_label" style={{display: 'none'}} /></td><td>Wed<span className="day_4_date"><br />Nov 7</span><div className="holl_4 holiday_label" style={{display: 'none'}} /></td><td>Thu<span className="day_5_date"><br />Nov 8</span><div className="holl_5 holiday_label" style={{display: 'none'}} /></td><td>Fri<span className="day_6_date"><br />Nov 9</span><div className="holl_6 holiday_label" style={{display: 'none'}} /></td></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">9</div><div className="min_marker">am</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">10</div><div className="min_marker">am</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">11</div><div className="min_marker">am</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">12</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">1</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">2</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">3</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">4</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">5</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr></tbody></table></div>			<div className="currentBusyBlocks" style={{position: 'absolute', display: 'block', top: '0px', left: '0px', width: '100%', height: '100%'}}>				&nbsp;</div>			<div className="weekTimes" style={{position: 'absolute', display: 'block', top: '0px', left: '0px', width: '100%', height: '100%'}} title="Click and drag to choose where you don't want classes">			</div>		</div>	</div></div><div className="timetableMsg" /><div className="monthscalc" aria-hidden="true" style={{display: 'none'}}>	<div className="sliderdiv timetable_part" aria-hidden="true" style={{position: 'relative'}}>		<div style={{textAlign: 'center', padding: '4px 0 12px 0'}}>			<label>				<span className="disp_days">November 4 - 10, 2007</span></label>		</div>		<div className="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-begin={1} data-end={20} aria-disabled="false" style={{left: '31.0484%', width: '45.9677%'}}><div className="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min" style={{width: '0%'}} /><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{left: '0%', width: '5.64516%'}} tabIndex={-1}><span style={{height: '50px'}} /></a></div>		<button className="sliderleft disable-no-results" title="Previous Week" style={{right: '71.7742%'}} aria-label="go to week October 28 - November 3, 2007">			<i className="nav-prev results-week-nav" aria-hidden="true" />		</button>		<button className="sliderright disable-no-results" title="Next Week" style={{left: '79.8387%'}} aria-label="go to week November 11 - 17, 2007">			<i className="nav-next results-week-nav" aria-hidden="true" />		</button>	</div>	<div className="dateGridHolder" style={{position: 'relative'}}>		<div className="dateGridTable"><table className="dateGrid larger" style={{borderSpacing: '0px', padding: '0px'}}><tbody><tr><td style={{width: '25%'}} className="mo">Oct</td><td style={{width: '25%'}} className="mo">Nov</td><td style={{width: '25%'}} className="mo">Dec</td><td style={{width: '25%'}} className="mo">Jan '08</td></tr></tbody></table></div>		<div className="dateGridBlocks" />		<div className="scheduleWarning" />	</div></div><h3 className="bubbletitle visuallyhidden timetable_part">Add Personal Times</h3><div className="timesToAvoid noprint timetable_part"><div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>		<button className="mdl-button mdl-js-button manual-time-expand expand-button" aria-label="expand manual time input">			Add Personal Times<i className="far fa-angle-down" />		</button></div>	<div className="timesToAvoidContent" style={{textAlign: 'left', display: 'none'}}> <div className="bubble" style={{width: 'auto'}}>Click
                                      and drag on the schedule above, or enter a time range here to add it 
                                      manually. Schedule results that avoid personal times will be 
                                      prioritized.</div>	<div style={{margin: '0 -5px', display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap'}}>	  <div style={{margin: '5px'}}>		<input type="text" aria-label="Personal Time Entry. For example, enter Friday 5 dash 7 PM and press enter." className="add_avoid_time" style={{width: '300px', fontSize: '120%'}} />	    <br />Examples: Friday 2-9pm, MW 8-10, Fri 15-17	</div>	  <input style={{margin: '5px'}} type="button" className="add_avoid_time_button big_button" defaultValue="Add Time" />	  <input style={{margin: '5px'}} type="button" className="big_button clearAvoidTimesButton" defaultValue="Clear all Personal Times" />	</div>	<div className="avoidNotice" role="alert" />	</div></div></div>
                              <div className="reg_schedule2 noselect" style={{display: 'none'}}>
                                {/* Filled by schedule.js */}
                              </div>
                              <div className="reg_legend-container mobile">
                                <div className="mobile-legend">
                                  <button className="mdl-button mdl-js-button mobile-legend-button" onclick="RR.toggleLegend()" data-upgraded=",MaterialButton">
                                    <span>Course Legend</span>
                                    <span style={{display: 'flex'}}><i className="far fa-angle-down mobile-legend-icon expanded" /></span>
                                  </button>
                                </div>
                              </div>
                              <div className="buttonsUnderTimetable">
                                <h3 className="visuallyhidden" aria-label="Schedule actions. Select an action to perform on the currently selected course schedule." />
                                <div className="reg_row2_2">
                                  <div className="reg-info" style={{marginBottom: '10px'}}>
                                    <div id="crnListWarnings" className="noprint"><div className="crnListWarning crnListWarningInfo not_already_have" style={{display: 'none'}}>You are not enrolled for this schedule.</div><div className="crnListWarning crnListWarningGood already_have">You are already enrolled for this schedule</div><div className="crnListWarning crnListWarningBad not_meet_compulsory" style={{display: 'none'}}>This schedule does not follow the mandatory plan assigned for this term. To proceed, <span className="more_than_permitted" style={{display: 'none'}}>toggle off courses that are not permitted, or </span> <a href="javascript:void(0)" onclick="clearSearch();" style={{textDecoration: 'underline'}}>start over</a> and select the plan.</div></div>
                                    <div id="crnListInfos" className="noprint" />
                                    <div id="crnListCrns" />
                                    <div id="crnListHelp" className="noprint" />
                                  </div>
                                  <div className="bottom-buttons-2 noprint">
                                    <button className="mdl-button mdl-js-button mdl-button--raised white-background disable-no-results disable-no-crf" onclick="UU.caseFavoriteResult();" aria-label="Save as Favourite" data-upgraded=",MaterialButton">
                                      Save as Favourite</button>
                                    <div className="schedule-buttons"><div id="crnListButtons" className="noprint" style={{display: 'none'}}><div style={{textAlign: 'center', position: 'relative'}}> <input className="button_validate_cart mdl-button mdl-js-button mdl-button--raised white-background" defaultValue="Validate Shopping Cart" type="button" onclick="getScheduleClick(true);" disabled="disabled" title="Your cart is empty" /><button className="button_get_schedule mdl-button mdl-js-button mdl-button--raised mdl-button--accent" type="button" onclick="requestScheduleCheckPromissory();" disabled="disabled" title="You are already enrolled for this schedule">Get this Schedule</button><div className="not_signed_in_message" style={{display: 'none'}}>You are not signed in</div></div></div></div>
                                  </div>
                                  <div className="bottom-buttons noprint">
                                    <div>
                                      <button className="mdl-button mdl-js-button disable-no-results disable-no-crf" onclick="clickPrint()" data-upgraded=",MaterialButton">
                                        Print
                                      </button>
                                      <span id="createShareLink">
                                        <button className="mdl-button mdl-js-button disable-no-results disable-no-crf" onclick="UU.caseShareLink();//ShareLinkController.createLink();" data-upgraded=",MaterialButton">
                                          Share</button>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="reg_legend-container desktop">
                              <div className="reg_legend" style={{display: 'block'}}>
                                <h3 className="visuallyhidden" aria-label="Legend - list of course sections in your currently selected schedule.">Course Legend</h3>
                                <div className="printed_by printonly">Printed by: <span className="alt_autho_text">Ameya Gupta</span></div>
                                <div className="legend_box /*mdc-elevation--z1*/" id="legend_box"><div className="empty_warning warningNoteBad">The schedule is blank because<br /> there are no courses selected.</div><div id="xcrnListInfos" className="hide50" /></div>
                                <div id="legend_checkout" className="clearfix2 noprint">
                                  <input className="big_button button_cancel_schedule" type="button" onclick="cancelScheduleClick();" defaultValue="◀ Cancel" />
                                  <input className="big_button button_enter_pin" type="button" onclick="userPinPopup();" defaultValue="Enter Pin" />
                                  <input className="big_button button_do_actions" type="button" onclick="if(validateCourseEnrollOptions()){confirmAction();}" title="Review actions before proceeding. Click to perform all the actions listed above" defaultValue="Do Actions" />
                                  <input className="big_button button_return" type="button" onclick="returnAfterEnroll();" defaultValue="Return to 'Select Courses'" />
                                  <div className="reg_final_bubble" style={{display: 'none', clear: 'both', textAlign: 'right'}}>
                                    <div style={{display: 'inline-block'}}>
                                      <div className="bubble">
                                        <div className="tip_top"><i className="fa fa-caret-up" /></div>
                                        <img src="test_loggedin_files/step_arrow_north.png" alt="Up arrow for step instructions" className="pull-right phone step_arrow" />
                                        Click this button to view the latest state of your courses.<div className="tip_bottom" style={{display: 'none'}} id="post_checkout_tip"><i className="fa fa-caret-down" /></div>
                                        <div className="clearfix" />
                                      </div>
                                    </div>
                                  </div>
                                  <input className="big_button button_post_checkout" onclick="custButtonPostCheckout();" type="button" defaultValue="Proceed to Shopping Cart" />
                                </div>
                                <div id="legend_headers" className="noprint">
                                  <div className="course_legend_header">
                                    Class</div>
                                  <div className="course_action_header">
                                    <span className="title_act1">Action</span>
                                    <span className="title_act2">Result</span>
                                  </div>
                                  <div className="course_option_header">
                                    Options</div>
                                  <div className="course_result_header">
                                    Result</div>
                                </div>
                              </div></div>
                            <div style={{clear: 'both'}} />
                          </div>
                        </div>
                        <div id="no_results_message_div" aria-atomic="true">
                          <span role="alert" aria-live="assertive" aria-atomic="true" style={{fontSize: '20px', color: '#CC3333'}}>No Results</span><br />
                          <br />There are no schedule combination(s) with the selected courses. <br /><br />
                          <div className="noResultsIdea">
                            <table>
                              <tbody><tr>
                                  <td><img src="test_loggedin_files/lightbulb_yl.svg" height={48} width={48} alt="Light bulb icon" /></td>
                                  <td><strong>Tip:</strong> <span className="noResultsIdeaText">TEMP</span></td>
                                </tr>
                              </tbody></table>
                          </div>
                        </div>
                        <div id="no_cnfs_div">
                          <span role="alert" aria-atomic="true" style={{fontSize: '20px', color: '#CC3333'}}>No Courses Selected</span><br />
                          <br />Select at least one course to see potential schedules here.
                        </div>
                      </div>
                      <div className="reg_welcome">
                        <div className="welcome_holder"><div className="welcome_title">
                            Welcome</div>
                          <div className="welcome_subtext">
                            <span className="hi_greeting hide50">Hi, Ameya Gupta.</span>
                            <p>   MY TIMETABLE is a self-service tool that enables you to 
                              generate your schedule conflict free and enroll you directly into 
                              Mosaic. To learn about this tool please go to <br /><a href="http://registrar.mcmaster.ca/mytimetable/"><strong>http://registrar.mcmaster.ca/mytimetable/</strong></a></p>  <p> <font color="”#4B0082”<b">University Policy on Supplementary Fees:</font>
                              If, at any time during a fall/winter session, you enroll in 18 units or
                              more, you become an MSU student. You are then entitled to the services 
                              of an MSU student and are responsible for the MSU supplementary fees, 
                              even if you later drop back below 18 units in the same fall/winter 
                              session.  Please visit the <a href="http://www.msumcmaster.ca/"><strong>MSU website</strong></a> regarding any inquiries regarding part-time vs. full-time fees.</p></div>
                        </div>
                        <div className="welcome_cont_but mobileRegularOnly">
                          <input type="button" className="big_button" defaultValue="Continue" onclick="UU.caseWelcomeContinue();" />
                        </div>
                      </div>
                      <div className="reg_term" style={{display: 'block'}}>
                        <h2 className="visuallyhidden">This is the select term menu, please select your term from the options below.</h2>
                        <button className="mdl-button mdl-js-button welcome-back" onclick="UU.caseWelcomeBack();" data-upgraded=",MaterialButton" style={{display: 'none'}}>BACK</button>
                        <div className="welcome_holder"><div className="welcome_title">
                            Welcome</div>
                          <div className="welcome_subtext">
                            <span className="hi_greeting hide50">Hi, Ameya Gupta.</span>
                            <p>   MY TIMETABLE is a self-service tool that enables you to 
                              generate your schedule conflict free and enroll you directly into 
                              Mosaic. To learn about this tool please go to <br /><a href="http://registrar.mcmaster.ca/mytimetable/"><strong>http://registrar.mcmaster.ca/mytimetable/</strong></a></p>  <p> <font color="”#4B0082”<b">University Policy on Supplementary Fees:</font>
                              If, at any time during a fall/winter session, you enroll in 18 units or
                              more, you become an MSU student. You are then entitled to the services 
                              of an MSU student and are responsible for the MSU supplementary fees, 
                              even if you later drop back below 18 units in the same fall/winter 
                              session.  Please visit the <a href="http://www.msumcmaster.ca/"><strong>MSU website</strong></a> regarding any inquiries regarding part-time vs. full-time fees.</p></div>
                        </div>
                        <div className="welcome_title2" style={{display: 'none'}}>
                          Select Term</div>
                        <div className="welcome_term_input_notice" />
                        <div id="welcomeActions" />
                        <div className="welcome_term_subtext">
                          Select a term:</div>
                        <div className="sorry_msg sorry_no_terms" style={{display: 'none'}}>
                          <i className="fa fa-exclamation-triangle" /> Sorry, there are no terms available to you at this time.</div>
                        <div className="sorry_msg sorry_wrong_campus" style={{display: 'none'}}>
                          <i className="fa fa-exclamation-triangle" /> Sorry, your campus is not presently enabled for this system.</div>
                        <div className="sorry_msg sorry_blocked_user">
                          <i className="fa fa-exclamation-triangle" /> Your schedule is unavailable for viewing at this time.</div>
                        <div id="welcomeTerms"><div className="demo-card-wide mdl-card mdl-shadow--2dp term-card" data-term={3202520}><a className="term-card-title " href="javascript:UU.caseTermContinue(3202520);">2025 Spring/Summer</a></div><div className="demo-card-wide mdl-card mdl-shadow--2dp term-card" data-term={3202530}><a className="term-card-title " href="javascript:UU.caseTermContinue(3202530);">2025 Fall</a></div><div className="demo-card-wide mdl-card mdl-shadow--2dp term-card" data-term={3202610}><a className="term-card-title " href="javascript:UU.caseTermContinue(3202610);">2026 Winter</a></div></div>
                      </div>
                      <div className="reg_recommendation">
                        <button className="mdl-button mdl-js-button welcome-back" onclick="UU.caseWelcomeBack();" data-upgraded=",MaterialButton">BACK</button>
                        <h2 className="visuallyhidden" aria-label="You have a Recommendation/Plan/Assigned Blocks" />
                        <button className="mdl-button mdl-js-button welcome-back welcome-doubleback" onclick="UU.caseWelcomeDoubleBack();" style={{display: 'none'}} data-upgraded=",MaterialButton">BACK</button>
                        <div className="welcome_holder" />
                        <div className="welcome_title2">
                          You have a Recommendation/Plan/Assigned Blocks</div>
                        <div className="welcome_subtext courseCount" id="recommendedShow" style={{display: 'none'}}>Your advisor has <span id="recommendedCount">a</span> recommendation for you:</div>
                        <div id="suggestedResult" />
                        <div className="skip-rec-div">
                          <button className="mdl-button mdl-js-button" id="skip_rec" onclick="UU.caseWelcomeDone(false, true);" data-upgraded=",MaterialButton">
                            Skip
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td> {/* end of page_results */}
                <td id="page_favorites" role="region" aria-labelledby="page_favorites_label" className="vsb_page disable-get-schedule noprint" style={{width: '2.39095%'}}>
                  <div className="page_fader" style={{display: 'block', opacity: 1}} />
                  <div className="full_page_title title_font collapsed" id="page_favorites_label" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                    Favourites<span id="favCount">(0)</span>
                  </div>
                  <div className="full_page">
                    <div className="full_page_content invisible_widescreen" style={{position: 'absolute', width: '0px', opacity: 0}}>
                      <div id="tab_favorites">
                        <h2 className="visuallyhidden" aria-label="Favourites region. This region contains your saved favorite course schedules you can load." />
                        <p className="accessOnly" style={{marginBottom: '15px'}}>This is the Favourites region. If you select a favourite you can rename it, load it, or delete it.</p>
                        <h3 className="visuallyhidden">List of Favourites</h3>
                        <div className="thumbnail_window"><div className="no_favs_notice">None for any term</div></div>
                        <table style={{width: '100%', margin: '6px 0px'}}>
                          <tbody><tr>
                              <td className="tab-col">
                                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent load_button" aria-label="Load favourite into Select Courses region" onclick="UU.caseLoadFavorite();UU.caseViewResults();" disabled="disabled" data-upgraded=",MaterialButton">
                                  ◄ Load</button>
                              </td>
                              <td className="tab-col">
                                <div className="fav_title_edit" style={{display: 'none'}}>
                                  <div className="editable_text_div" id="editable_text">&nbsp;</div>
                                  <label htmlFor="text_editor" className="visuallyhidden">Title of Favorite</label>
                                  <input type="text" className="text_editor_div" id="text_editor" maxLength={20} style={{display: 'none'}} />
                                  <a href="javascript:void(0);" className="edit_pencil" id="pencil1" title="Click to edit title" />
                                  <div className="favorite_date_time" id="fav-date-time1">Feb. 20, 3:45</div>
                                </div>
                              </td>
                              <td className="tab-col">
                                <button className="mdl-button mdl-js-button mdl-button--raised white-background delete_button" style={{float: 'right'}} onclick="UU.caseDeleteFavorite();" title="Delete favourite" disabled="disabled" data-upgraded=",MaterialButton">
                                  Delete</button>
                                <div style={{clear: 'both'}} />
                              </td>
                            </tr>
                          </tbody></table>
                        <div className="preview_schedule" aria-hidden="true" style={{display: 'none'}}><h3 className="visuallyhidden" style={{paddingLeft: '62px'}}>Schedule</h3><div className="visuallyhidden">If
                            you are	using a screen reader, the contents of this heading will not be
                            useful. To read this favorite you must load it, then read the details 
                            under the legend heading found on the schedule result region.</div><div style={{position: 'relative'}} className="timetable_part" aria-hidden="true">	<div className="weekName">		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="timetable_title">&nbsp;</span>	</div>	<div className="timezoneAbbr">&nbsp;</div>	<div className="timetable table_container">		<div style={{position: 'relative'}}>			<div className="weekArea"><table cellPadding={0} cellSpacing={0}><tbody><tr className="header"><td>Mon<span className="day_2_date" /><div className="holl_2 holiday_label" /></td><td>Tue<span className="day_3_date" /><div className="holl_3 holiday_label" /></td><td>Wed<span className="day_4_date" /><div className="holl_4 holiday_label" /></td><td>Thu<span className="day_5_date" /><div className="holl_5 holiday_label" /></td><td>Fri<span className="day_6_date" /><div className="holl_6 holiday_label" /></td></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">9</div><div className="min_marker">am</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">10</div><div className="min_marker">am</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">11</div><div className="min_marker">am</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">12</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">1</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">2</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">3</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">4</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">5</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr></tbody></table></div>			<div className="currentBusyBlocks" style={{position: 'absolute', display: 'block', top: '0px', left: '0px', width: '100%', height: '100%'}}>				&nbsp;</div>			<div className="weekTimes" style={{position: 'absolute', display: 'block', top: '0px', left: '0px', width: '100%', height: '100%'}} title>			</div>		</div>	</div></div><div className="timetableMsg" /><div className="monthscalc" aria-hidden="true" style={{display: 'none'}}>	<div className="sliderdiv timetable_part" aria-hidden="true" style={{position: 'relative'}}>		<div style={{textAlign: 'center', padding: '4px 0 12px 0'}}>			<label>				<span className="disp_days">---</span></label>		</div>		<div className="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-begin={1} data-end={20} aria-disabled="false" style={{left: '31.0484%', width: '45.9677%'}}><div className="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min" style={{width: '0%'}} /><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{left: '0%', width: '5.64516%'}} tabIndex={-1}><span style={{height: '50px'}} /></a></div>		<button className="sliderleft disable-no-results" title="Previous Week" style={{right: '71.7742%'}}>			<i className="nav-prev results-week-nav" aria-hidden="true" />		</button>		<button className="sliderright disable-no-results" title="Next Week" style={{left: '79.8387%'}}>			<i className="nav-next results-week-nav" aria-hidden="true" />		</button>	</div>	<div className="dateGridHolder" style={{position: 'relative'}}>		<div className="dateGridTable"><table className="dateGrid larger" style={{borderSpacing: '0px', padding: '0px'}}><tbody><tr><td style={{width: '25%'}} className="mo">Oct</td><td style={{width: '25%'}} className="mo">Nov</td><td style={{width: '25%'}} className="mo">Dec</td><td style={{width: '25%'}} className="mo">Jan '08</td></tr></tbody></table></div>		<div className="dateGridBlocks" />		<div className="scheduleWarning" />	</div></div></div>
                        <div className="preview_message do_select saved_notice">
                          No Favourite Selected</div>
                      </div>
                      {/* Recommendations tab */}
                      <div id="tab_recommendations" style={{display: 'none', minHeight: '700px'}}>
                        <div id="page_rec_list">
                          <div className="rec_container">
                            <div className="rec_container">
                              <div className="sdl_input rec_search">
                                <label htmlFor="rec_search_input">Search for Recommendation</label>
                                <input type="text" id="rec_search_input" placeholder="Title, Description, Student ID..." title="Search by Recommendation ID, Student ID, Advisor, Title, Course..." />
                              </div>
                            </div>
                            <div className="switch-field">
                              <input type="radio" id="switch_left" name="switch_2" defaultValue="all" defaultChecked="checked" />
                              <label htmlFor="switch_left" tabIndex={0}>All</label>
                              <input type="radio" id="switch_center" name="switch_2" defaultValue="created" />
                              <label htmlFor="switch_center" tabIndex={0}>Created by me</label>
                              <input type="radio" id="switch_right" name="switch_2" defaultValue="modified" />
                              <label htmlFor="switch_right" tabIndex={0}>Modified by me</label>
                            </div>
                            <div className="rec-advising-warning">
                              Only displaying recommendations in <span className="active-term-label" />
                            </div>
                          </div>
                          <div className="rec_results_top" />
                          <div className="rec_results_noterm saved_notice">
                            No Term Selected
                          </div>
                          <div className="rec_results">
                            <div className="rec_result" style={{display: 'none'}} title="Edit Recommendation">
                              <div className="rec_icon">
                                <i className="fa fa-calendar" aria-hidden="true" />
                              </div>
                              <div className="rec_info">
                                <div className="rec_info_item recr-id">R-2124</div>
                                <div className="rec_info_item recr-created">Mar 31</div>
                              </div>
                              <div className="rec_result_details">
                                <div className="rec_detail_item recr-advisor">Advisor Name</div>
                                <div className="rec_detail_item recr-students">Assigned Students</div>
                                <div className="rec_detail_item recr-title">Title</div>
                              </div>
                              <div className="rec_search_highlight">
                                <div className="rec_search_highlight_title">
                                </div>
                                <div className="rec_search_highlight_text">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="rec_results_count">
                          </div>
                          <div className="rec-bot-tools">
                            <button className="small_button rec-but-new" title="Send current schedule as a recommendation to one or more students">Create Recommendation</button>
                            <button className="rec-import-csv small_button" title="Import Recommendations by CSV" style={{padding: '5px', height: '33px'}}>
                              <img src="test_loggedin_files/csv.gif" height={16} width={16} alt="Import from CSV" />
                            </button>
                          </div>
                        </div>
                        <div id="page_rec_edit" style={{display: 'none'}}>
                          <div className="rec-top-buttons">
                            <button className="rec-top-btn small_button rec-but-back" title="Back to list of recommendations">
                              <i className="fa fa-reply" aria-hidden="true" />
                            </button>
                            {/*
			  <div class='top-rt-btns'>
			    <button class='rec-top-btn small_button rec-but-prev'><i class="far fa-angle-left" aria-hidden="true" title="View previous recommendation"></i>
			    </button>
			    <button class='rec-top-btn small_button rec-but-next'><i class="far fa-angle-right" aria-hidden="true" title="View next recommendation"></i>
			    </button>
			  </div>
			   */}
                            <div className="top-rt-btns">
                              <h3 className="rec-header">
                                Recommendation
                              </h3>
                            </div>
                            <div style={{clear: 'both'}}>
                            </div>
                          </div>
                          <div id="page_rec_edit_form">
                            {/*
			<div class="rec-row">
			  <div class="rec-row-label">
			    ID
			  </div>
			  <div class="rec-row-desc rec-row-desc-wide">
			    <span class="recf-id">R-1001</span>
			  </div>
			</div>
			 */}
                            <div className="rec-row">
                              <div className="rec-row-label rec-label">
                                From
                                {/* <i class="fa fa-user" aria-hidden="true"></i> */}
                              </div>
                              <div className="rec-row-desc">
                                <span className="recf-creator">---</span>
                              </div>
                            </div>
                            <div className="rec-tbl-cont">
                              <div className="rec-row-label rec-label">
                                To
                              </div>
                              <div className="rec-row-desc fancy-input rec-scrol-div" style={{padding: 0}}>
                                <div className="rec-name-item">
                                  <label className="rec-student-tooltip" title>
                                    <input type="checkbox" />Jill Smith March 31</label>
                                </div>
                              </div>
                            </div>
                            <div className="rec-row rec-row-users">
                              <div className="rec-add">
                                <input type="text" className="rec-add-input" placeholder="Student ID" title="You may add multiple IDs" />
                              </div>
                              <div className="rec-add-button">
                                <button className="small_button" title="Add Student ID(s)">Add</button>
                              </div>
                              <div className="rec-grp-button">
                                <button className="small_button" title="Select from Student Group" style={{padding: '5px'}}>
                                  <i className="fas fa-users-class" />
                                </button>
                              </div>
                              <div className="rec-csv-button">
                                <button className="small_button" title="Import Student IDs from CSV" style={{padding: '5px'}}>
                                  <img src="test_loggedin_files/csv.gif" height={16} width={16} alt="Import from CSV" />
                                </button>
                              </div>
                            </div>
                            <div id="recAddWarning">
                            </div>
                            <div className="rec-row">
                              <div className="rec-row-desc">
                                <table className="rec-user-actions zero_padding_spacing">
                                  <tbody><tr>
                                      <td>
                                        <button className="small_button recb-select-all" title="Select/Deselect all students">Select All</button>
                                      </td>
                                      <td>
                                        <button className="small_button recb-remove" title="Remove selected students from list">Remove</button>
                                      </td>
                                      <td>
                                        <button className="small_button recb-splice" title="Duplicate this recommendation and move the selected students to the new recommendation">Splice to New</button>
                                      </td>
                                      {/*
			        <td>
			          <button class="small_button recb-advise">Advise</button>
			        </td>
			         */}
                                    </tr>
                                  </tbody></table>
                              </div>
                            </div>
                            <div className="rec-row-label rec-label">
                              Title
                            </div>
                            <div className="rec-row-desc">
                              <input className="rec-title fancy-input" type="text" aria-label="Recommendation" placeholder="Title of Recommendation" />
                            </div>
                            <div className="rec-row-label rec-label">
                              Message
                            </div>
                            <div className="rec-row-desc">
                              <textarea rows={4} className="rec-message fancy-input" maxLength={1000} aria-label="Message to the students..." placeholder="Message to the students..." defaultValue={""} />
                            </div>
                            <div className="rec-recent" style={{display: 'none'}}>
                              <table className="zero_padding_spacing">
                                <tbody><tr>
                                    <td className="rec-label-cell" style={{paddingLeft: '5px'}}>
                                      Recent
                                    </td>
                                    <td>
                                      <select role="listbox" aria-label="Recent">
                                        <option selected="selected">Once</option>
                                        <option>Twice</option>
                                      </select>
                                    </td>
                                  </tr>
                                </tbody></table>
                            </div>
                            <div className="rec-option" title="Force the students using this software to follow this recommendation">
                              <label>
                                <input type="checkbox" className="recf-compulsory" />Mandatory</label>
                            </div>
                            <div className="rec-option" title="Allow students to select courses beyond those in this recommendation">
                              <label>
                                <input type="checkbox" className="recf-lock-select" />Permit additional courses</label>
                            </div>
                            <div className="rec-tags">
                              <table className="zero_padding_spacing">
                                <tbody><tr>
                                    <td className="rec-label-cell rec-label" title="Add tags to help categorize or organize recommendations">
                                      Tags
                                    </td>
                                    <td>
                                      <input id="input-rec-tags-add" type="text" aria-label="Recommendation tag" className="recf-tags" />
                                    </td>
                                  </tr>
                                </tbody></table>
                            </div>
                            <div className="rec-tags rec-groups-row">
                              <table className="zero_padding_spacing">
                                <tbody><tr>
                                    <td className="rec-label-cell rec-label" title="Advisors must belong to at least one of the specified security groups to have permission to modify/delete this recommendation. Groups and their user assignments can be changed in VSB Settings.">
                                      Groups
                                    </td>
                                    <td>
                                      <input id="input-rec-groups-add" type="text" aria-label="Recommendation group" className="recf-groups" />
                                    </td>
                                  </tr>
                                </tbody></table>
                            </div>
                            <div className="rec-disabled-message">
                              You do not have permission to edit this recommendation.
                            </div>
                            <div className="rec-bottom">
                              <button className="small_button rec-but-save">Save</button>
                              <button className="small_button rec-but-duplicate">Duplicate</button>
                              <button className="small_button rec-but-delete">Delete</button>
                              <button className="small_button rec-but-cancel">Cancel</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="page_whiteout" />
                  <div className="fav-bottom" style={{position: 'absolute', top: '100%'}} />
                </td>
              </tr>
            </tbody></table>
          <div id="guidance_wrapper">
            <div id="guidance">
              <span className="guidanceText" />
            </div>
          </div>
          <div style={{clear: 'both'}} />
        </div> {/* end of under_header */}
      </div> {/* end of under_header_wrapper */}
      {/*<div>
<canvas id="thumbtest" width="100" height="100" style="border:0px solid #000000;display:none;">
</canvas>
</div> */}
    </div> {/* mainframe. Opened in the header */}
    <div className="custom_footer noprint">
      <div className="contentArea_bottom noprint" />
      <div className="mcm-footer">
        <div className="mcm-footer-banner" />
        <div className="mcm-footer-social">
          <div className="mcm-footer-address">
            <span>1280 Main Street West.</span>
            <span>Hamilton, Ontario L8S 4L8.</span>
            <span className="mcm-footer-phone">(905) 525-9140</span>
          </div>
          <div className="mcm-footer-copyright">
            © McMaster University
          </div>
        </div>
      </div></div>
    {/* Active sessions: 337 */}
  </div>
  {/* Added by prakash start for mobile sort */}
  <div className="centerparent">
    <div id="popupsort" className="popup-wrapper center hide" style={{maxWidth: '96%', maxHeight: '96%', overflowWrap: 'break-word', minWidth: '250px', height: 'auto', zIndex: 999}}>
      <div className="popup-content">
        <div className="popup-title">
          <button type="button" className="filteconfrim popup-close hide50">X</button>
          <h3>Sort by:</h3>
        </div>
        <div className="popup-body">
          <input type="radio" id="nonemobile" onclick="UU.caseChangeSort(this.value);" name="sb" defaultValue="none" defaultChecked="checked" /><label className="under" htmlFor="nonemobile">None</label>
          <input type="radio" id="daysoffmobile" onclick="UU.caseChangeSort(this.value);" name="sb" defaultValue="daysoff" /><label className="under" htmlFor="daysoffmobile">Most days off</label>
          <input type="radio" id="morningmobile" onclick="UU.caseChangeSort(this.value);" name="sb" defaultValue="morning" /><label className="under" htmlFor="morningmobile">Mornings</label>
          <input type="radio" id="middaymobile" onclick="UU.caseChangeSort(this.value);" name="sb" defaultValue="midday" /><label className="under" htmlFor="middaymobile">Mid-day classes</label>
          <input type="radio" id="eveningmobile" onclick="UU.caseChangeSort(this.value);" name="sb" defaultValue="evening" /><label className="under" htmlFor="eveningmobile">Evenings</label>
        </div>
      </div>
    </div>
    <div id="popuptips" className="popup-wrapper center hide" style={{maxWidth: '96%', maxHeight: '96%', overflowWrap: 'break-word', minWidth: '250px', height: 'auto', zIndex: 999}}>
      <div className="popup-content">
        <div className="tips-previous nomobile">
          <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" onclick="SLIDER.sliderChange(false);" aria-label="Previous Tip" data-upgraded=",MaterialButton,MaterialRipple">
            <i className="fa fa-arrow-left" />
            <span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
        </div>
        <div className="popup-body">
          <div className="tips-image">
            <img id="slider_tip_img" src="test_loggedin_files/tip_drag.png" alt="Tiny screenshot to accompany tip text" />
          </div>
          <div className="popup-title">
            Block out times
          </div>
          <div className="popup-subtitle">
            <span className="slider_tip_text">
              Loading...
            </span>
          </div>
          <div className="filter-popup-buttons">
            <button className="mdl-button mdl-js-button mdl-button--accent popup-close" data-upgraded=",MaterialButton">
              Close
            </button>
            <button className="mdl-button mdl-js-button mdl-button--accent popup-close" onclick="SLIDER.sliderChange(true);" data-upgraded=",MaterialButton">
              Next
            </button>
          </div>
          <div className="tips-carousel">
          </div>
        </div>
        <div className="tips-next nomobile">
          <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" onclick="SLIDER.sliderChange(true);" aria-label="Next Tip" data-upgraded=",MaterialButton,MaterialRipple">
            <i className="fa fa-arrow-right" />
            <span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
        </div>
      </div>
    </div>
    <div id="popupfilter" className="popup-wrapper center hide" style={{maxWidth: '96%', maxHeight: '96%', overflowWrap: 'break-word', minWidth: '250px', height: 'auto', zIndex: 999}}>
      <div className="popup-content">
        <h4 className="visuallyhidden">Filter options. Show me schedules containing:</h4>
        <div className="popup-title">
          <button type="button" className="filteconfrim xpopup-close hide50">X</button>
          Filters
        </div>
        <div className="popup-body">
          <div className="popup-subtitle">
            Show me schedules containing:</div>
          <div className="rowfilter">
            <div className="filteroption">
              <label htmlFor="hide_fullmobile" title="Allow schedule results containing full classes">Closed classes</label>
              <span className="hide50">
                (<img className="filterElement" src="test_loggedin_files/element_full_ps.gif" />)
              </span>
            </div>
            <div className="mdl-switch-nvda-fix">
              <label id="hide_fullmobile_label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded" htmlFor="hide_fullmobile" data-upgraded=",MaterialSwitch,MaterialRipple">
                <input id="hide_fullmobile" type="checkbox" className="mdl-switch__input focusable" defaultValue="hide" onclick="UU.caseChangeHideFull(this);" />
                <span className="mdl-switch__label visuallyhidden">Closed classes</span>
                <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
            </div>
          </div>
          <div className="rowfilter">
            <div className="filteroption">
              <label htmlFor="hide_waitlistablemobile" title="Allow schedule results containing classes that are full but can still be waitlisted">Wait Listed classes</label>
              <span className="hide50">
                (<img className="filterElement" src="test_loggedin_files/element_waitlist_ps.gif" />)
              </span>
            </div>
            <div className="mdl-switch-nvda-fix">
              <label id="hide_waitlistablemobile_label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked" htmlFor="hide_waitlistablemobile" data-upgraded=",MaterialSwitch,MaterialRipple">
                <input id="hide_waitlistablemobile" type="checkbox" className="mdl-switch__input focusable" defaultValue="hide" onclick="UU.caseChangeHideWaitlistable(this);" defaultChecked="checked" />
                <span className="mdl-switch__label visuallyhidden">Wait Listed classes</span>
                <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
            </div>
          </div>
          <div className="rowfilter">
            <div className="filteroption">
              <label htmlFor="hide_onlinemobile" title="Allow schedule results containing online classes">Online classes</label>
              <span>
                <i className="far fa-mouse" />
              </span>
            </div>
            <div className="mdl-switch-nvda-fix">
              <label id="hide_onlinemobile_label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked" htmlFor="hide_onlinemobile" data-upgraded=",MaterialSwitch,MaterialRipple">
                <input id="hide_onlinemobile" type="checkbox" className="mdl-switch__input focusable" defaultValue="hide" onclick="UU.caseChangeHideOnline(this);" defaultChecked="checked" />
                <span className="mdl-switch__label visuallyhidden">Online classes</span>
                <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
            </div>
          </div>
          <div className="rowfilter">
            <div className="filteroption">
              <label htmlFor="hide_on_campusmobile" title="Allow schedule results containing classes on campus">On-ca<span className="akl">m</span>pus classes</label>
            </div>
            <div className="mdl-switch-nvda-fix">
              <label id="hide_on_campusmobile_label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked" htmlFor="hide_on_campusmobile" data-upgraded=",MaterialSwitch,MaterialRipple">
                <input id="hide_on_campusmobile" type="checkbox" className="mdl-switch__input focusable" defaultValue="hide" onclick="UU.caseChangeHideOnCampus(this);" defaultChecked="checked" />
                <span className="mdl-switch__label visuallyhidden">On-ca<span className="akl">m</span>pus classes</span>
                <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
            </div>
          </div>
          <div className="filter-popup-buttons">
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent popup-close focusable" style={{minWidth: '60%'}} data-upgraded=",MaterialButton">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
    <div style={{clear: 'both'}} />
  </div>
  <div id="aarPopup" className="popup-wrapper center hide" style={{maxWidth: '96%', maxHeight: '96%', overflowWrap: 'break-word', minWidth: '250px', height: 'auto', zIndex: 999}}>
    <div className="popup-content">
      <div className="popup-title">
        <h3>Notice</h3>
      </div>
      <div className="popup-body">
        {/* Content will get put here */}
      </div>
      <div className="popupNoticeButtons" />
    </div>
  </div>
  <div id="sharePopup" className="popup-wrapper center hide" style={{position: 'absolute', zIndex: 999}}>
    <div className="popup-content">
      <div className="popup-title">
        <button type="button" className="filteconfrim popup-close hide50">X</button>
        <h3>Export to Calendar</h3>
      </div>
      <div className="popup-body">
        <div style={{padding: '0px 5px 5px 5px'}}>This will send all the events of the schedule your are currently viewing to your Calendar.<br /><br />
          <span style={{fontWeight: 500}}>Warning:</span> If you need to change or remove these events you will need to do it manually using your Calendar
        </div>
        <div id="notificationCal" style={{display: 'none'}}>Your schedule has been saved to the calendar.</div>
        <div id="calenderbutton" style={{textAlign: 'center', paddingTop: '10px'}}>
          <button id="googleShare" className="mdl-button mdl-js-button" onclick="vsbTimer.doLogin();" data-upgraded=",MaterialButton">Google Calendar</button>
          <button id="outLookShare" className="mdl-button mdl-js-button" onclick="vsbTimer.doLogin();" data-upgraded=",MaterialButton">Outlook Calendar</button>
          <button id="iCal" className="mdl-button mdl-js-button" onclick="vsbTimer.doLogin();" style={{textTransform: 'none'}} data-upgraded=",MaterialButton">iCal</button>
        </div>
      </div>
    </div>
  </div>
  <div style={{position: 'absolute', top: '0px', left: '0px', color: 'black', backgroundColor: 'white', display: 'none'}} id="console">Hello</div>
  <div style={{position: 'absolute', top: '40px', left: '0px', color: 'black', backgroundColor: 'white', display: 'none'}} id="console2">Hello</div>
  {/* SUGGESTION CONTAINER */}
  <div id="suggestion_box" className="accessible ak_o" role="listbox" aria-label="course search suggestion list" style={{top: '331.25px', left: '0px', minWidth: '248px'}}>
    <div id="suggestion_container" style={{maxHeight: '300px', overflowY: 'auto'}} className="sdl-scrollbars" />
  </div>
  {/* END SUGGESTION CONTAINER */}
  <div className="popupl-overlay" />
  <div className="check_media" style={{}} />
  {/* <canvas id="thumbtest" width="100" height="100" style="border:0px solid #000000;"> */}
</div>

			</>
			}
			{testNumber === 2 && 
			<>
      <div>
        <p id="alertJAWS" role="alert" style={{display: 'none'}} aria-atomic="true" />
        <div className="eeLoadingAnimation" style={{display: 'none'}}>
          <div className="mdl-spinner mdl-js-spinner is-active is-upgraded" data-upgraded=",MaterialSpinner"><div className="mdl-spinner__layer mdl-spinner__layer-1"><div className="mdl-spinner__circle-clipper mdl-spinner__left"><div className="mdl-spinner__circle" /></div><div className="mdl-spinner__gap-patch"><div className="mdl-spinner__circle" /></div><div className="mdl-spinner__circle-clipper mdl-spinner__right"><div className="mdl-spinner__circle" /></div></div><div className="mdl-spinner__layer mdl-spinner__layer-2"><div className="mdl-spinner__circle-clipper mdl-spinner__left"><div className="mdl-spinner__circle" /></div><div className="mdl-spinner__gap-patch"><div className="mdl-spinner__circle" /></div><div className="mdl-spinner__circle-clipper mdl-spinner__right"><div className="mdl-spinner__circle" /></div></div><div className="mdl-spinner__layer mdl-spinner__layer-3"><div className="mdl-spinner__circle-clipper mdl-spinner__left"><div className="mdl-spinner__circle" /></div><div className="mdl-spinner__gap-patch"><div className="mdl-spinner__circle" /></div><div className="mdl-spinner__circle-clipper mdl-spinner__right"><div className="mdl-spinner__circle" /></div></div><div className="mdl-spinner__layer mdl-spinner__layer-4"><div className="mdl-spinner__circle-clipper mdl-spinner__left"><div className="mdl-spinner__circle" /></div><div className="mdl-spinner__gap-patch"><div className="mdl-spinner__circle" /></div><div className="mdl-spinner__circle-clipper mdl-spinner__right"><div className="mdl-spinner__circle" /></div></div></div>
          {/* LOADING <div class="mdl-spinner mdl-js-spinner is-active"></div> */}
        </div>
        <div id="bodyContent" className="eeLoading eeLoadingDone">
          <div className="custom_header noprint" role="heading" aria-level={1}>
            <h3 style={{visibility: 'hidden', position: 'absolute', transition: 'none 0s ease 0s'}}>Register - Student Scheduling by VSB</h3>
            <div className="reg_header">
              <div className="reg_header_inner_wrapper header-row">
                <div className="header_left header-column">
                  <a href="https://brighterworld.mcmaster.ca/">
                    {/* <img style="height: 80px; margin: 10px;" src="cust/mcm/mcmaster-logo-blk.png" /> */}
                    <img className="logo" src="test_loggedin_semesterselected_files/mcm_logo_grey.svg" />
                  </a>
                </div>
                <div className="header-column header-middle mcm-mytimetable">
                  <span className="my">My</span><span className="timetable">Timetable</span>
                </div>
                <div className="header-column header-right" />
              </div>
            </div>
          </div>
          <div className="mainframe">
            <h1 className="visuallyhidden" aria-label="Welcome to the schedule builder, the industry leading solution for generating and optimizing student class schedules. Please navigate the page headers to access the application content." />
            <div className="header_invader header_invader_position noprint">
              <div className="autho_table">
                <span className="autho_logo_prot_cell header_invader_logo_width">
                  &nbsp;
                </span>
                <h2 className="visuallyhidden" aria-label="Header region." />
                <span className="autho_text_cell">
                  <span className="autho_text header_invader_text_top">
                    Ameya Gupta</span>
                  <span className="autho_text header_invader_text_top">
                  </span>
                  <span className="autho_text header_invader_text_top active-term-label" onClick="MENU.menuFunction()" style={{cursor: 'pointer'}} title="Change term">2025 Fall</span>
                </span>
                <span className="autho_button_cell">
                  <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent sign_in_button " onClick="vsbTimer.doLogin();" data-upgraded=",MaterialButton" style={{display: 'none'}}>
                    Sign In</button>
                  <input className="big_button sign_out_button" type="button" defaultValue="Sign Out" onClick="vsbTimer.doLogout('link');" />
                  <button className="nobuttonstyle main_menu_button" title="View menu" aria-label="Toggle Main Hamburger Menu">
                    <i className="fa fa-bars" />
                  </button>
                </span>
              </div>
              <div className="main_menu" style={{display: 'none'}}><a href="javascript:void(0)" className="menu_item select_term" onClick="UU.caseChangeTermIfOkay(3202520);$(&quot;.main_menu&quot;).hide();">2025 Spring/Summer<i className="fa fa-check" id="menu-term3202520-check" style={{display: 'none'}} /> </a><a href="javascript:void(0)" className="menu_item select_term" onClick="UU.caseChangeTermIfOkay(3202530);$(&quot;.main_menu&quot;).hide();">2025 Fall<i className="fa fa-check" id="menu-term3202530-check" style={{}} /> </a><a href="javascript:void(0)" className="menu_item select_term" onClick="UU.caseChangeTermIfOkay(3202610);$(&quot;.main_menu&quot;).hide();">2026 Winter<i className="fa fa-check" id="menu-term3202610-check" style={{display: 'none'}} /> </a>
                <div className="menu-item-separator" />
                <a href="https://mytimetable.mcmaster.ca/analytics/" className="mi_analytics analytics_link" style={{display: 'none'}}><i className="fa fa-lg fa-fw fa-chart-bar" style={{paddingRight: '10px'}} />Analytics</a>
                <a href="https://mytimetable.mcmaster.ca/analytics/#ajax/enrollment-rules.jsp" className="mi_scheduler analytics_link" style={{display: 'none'}}><i className="fa fa-lg fa-fw fa-wrench" style={{paddingRight: '10px'}} />Schedule Controls</a>
                <a href="https://mytimetable.mcmaster.ca/analytics/#ajax/settings.jsp?sets=roles" className="mi_settings analytics_link" style={{display: 'none'}}><i className="fa fa-lg fa-fw fa-cog" style={{paddingRight: '10px'}} />Settings</a>
                <div className="menu-item-separator" />
                <a href="https://mytimetable.mcmaster.ca/criteria.jsp?src=clear">Start Over</a>
                <div className="menu-item-separator" />
                <a href="javascript:void(0)" className="mi_behalf" style={{display: 'none'}}>Advise a Student...</a>
                <div className="menu_item mi_message_box" style={{display: 'none', paddingBottom: '0px'}}>
                </div>
                <div className="menu_item mi_behalf_start" style={{display: 'none'}}>
                  <input type="text" style={{width: '100%'}} className="behalf_userid" placeholder="Student ID" title="Student ID" />
                  <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent behalf_start_button" data-upgraded=",MaterialButton,MaterialRipple">
                    Start Advising<span className="loadingAdvising" style={{visibility: 'hidden'}}> <i className="fa fa-spinner fa-spin" /></span>
                    <span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                  <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent behalf_cancel_button" data-upgraded=",MaterialButton,MaterialRipple">
                    Cancel<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                </div>
                <div className="menu_item mi_behalf_change" style={{display: 'none'}}>
                  <div style={{margin: '0 0 10px 0'}}>Advising for: <span className="behalf_student">null</span></div>
                  <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent switch_student_button" title="Advise a different student" data-upgraded=",MaterialButton,MaterialRipple">
                    Switch
                    <span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                  <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent stop_advising_button" style={{marginLeft: '6px'}} title="Stop advising this student" data-upgraded=",MaterialButton,MaterialRipple">
                    Stop Advising
                    <span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                </div>
                <div id="extraLinks_menu" />
                <div className="menu-item-separator" />
                <div className="menu_item mi_sign_out">
                  <button style={{width: '100%'}} className="mdl-button mdl-js-button xmdl-button--raised white-background" onClick="vsbTimer.doLogout('link');" data-upgraded=",MaterialButton">
                    Sign Out</button>
                </div>
                <div className="menu_item mi_sign_in" style={{display: 'none'}}>
                  <input style={{width: '100%'}} className="big_button" type="button" defaultValue="Sign In" onClick="vsbTimer.doLogin();" />
                </div>
              </div>
            </div>
            <div className="navigation noprint"><div className="navigation_buttons">
                <div style={{width: '100%'}}>
                  <ul>
                    <li><a href="javascript:void(0)" className="accessible ak_c nav_link link_criteria title_font" onClick="UU.caseViewCriteria();" title="View the Select Courses region">Select <span className="akl">C</span>ourses</a></li>
                    <li><a href="javascript:void(0)" className="accessible ak_r nav_link link_results title_font navselected" onClick="UU.caseViewResults();" title="You are currently viewing the Results region">Schedule <span className="akl">R</span>esults</a></li>
                    <li><a href="javascript:void(0)" className="accessible ak_f nav_link link_favorites title_font" onClick="UU.caseViewFavorites();" title="View to Favourites region">Favourites</a></li>
                  </ul>
                </div></div>
              <div style={{clear: 'both'}} />
            </div>
            <div style={{clear: 'both'}} />
            <div id="under_header_wrapper">
              <div id="under_header">
                <table className="pages_table" role="presentation">
                  <tbody><tr>
                      <td id="page_criteria" role="region" aria-labelledby="page_criteria_label" className="vsb_page disable-get-schedule noprint" style={{width: '34.3826%'}}>
                        <div className="page_fader" style={{opacity: 0, display: 'none'}} />
                        <div className="full_page_title title_font first" id="page_criteria_label">
                          Select <span className="akl">C</span>ourses</div>
                        <div className="full_page">
                          <div className="full_page_content" id="tab_degree" style={{display: 'none', opacity: 1, width: 'auto', position: 'relative'}}>
                            <div>
                              <button className="mdl-button mdl-js-button mdl-js-ripple-effect search-back-button" onClick="RR.changeSelCourseTab('tab_selected');" data-upgraded=",MaterialButton,MaterialRipple">
                                Back
                                <span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                            </div>
                            <div className="select-course-title">
                              Degree Plan</div>
                            <div className="tab_container">
                              <div className="tab_content">
                                <div id="plan_import_container" style={{display: 'block'}} />
                              </div>
                            </div>
                          </div>
                          <div className="full_page_content" id="tab_selected" style={{opacity: 1, width: 'auto', position: 'relative'}}>
                            <h2 className="visuallyhidden" aria-label="Select Courses region; please adjust your section filters and search for courses to add to the list." />
                            <p className="visuallyhidden" style={{marginBottom: '15px'}} id="page_add_courses_desc">
                              Welcome to the Schedule Builder. This is the Select Courses region. To 
                              use this software, follow the steps described below. First add courses 
                              to the list of courses. This will cause the Results region to show you a
                              list of possible schedules.</p>
                            <div className="mobileRoom hide50" style={{display: 'none'}} />
                            <div className="accessOnly accessTermDisp"><h3>Step<span className="bubbleNb1">1</span>: Select Term</h3><div>Choose a term.</div></div>
                            <div id="term_region_alt" style={{display: 'none'}} />
                            <div className="accessOnly"><h3>Step<span className="bubbleNb2a">1</span>: Select Campuses</h3>Select your desired course locations.</div>
                            <div id="locationRegion" className="locationRegion-cont xhide50">
                              <h3 className="visuallyhidden" aria-label="Course Section Filters. Adjusting these filters will impact which sections of the courses are permitted in your generated schedules." />
                              <div id="collegeSelector"><div className="mstitle"><div className="msItemR mslistitemstart"><div className="msItemNb li"><div className="msItemTb criteria_filter_title">Colleges:</div></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">McMaster University</div><div className="msItemM" id="collegeSelectorList0" onClick="msSelect(&quot;collegeSelector&quot;,0,false);event.stopPropagation();" /></div></div><div className="msAll" style={{display: 'inline-block'}}><div className="msItemR"><div className="msItemNb li"><div className="msItemTb"><span className="textAll" style={{display: 'inline'}}>All</span><span className="textNone" style={{display: 'none'}}>None</span></div></div></div></div><div className="msItemR msSelectDot"><div className="msItemNb li"><button className="nobuttonstyle msItemTb a msActBoxShow ms_select_link disable-get-schedule" title="Expand colleges filter" aria-label="Expand colleges filter">Select...</button></div></div><div style={{clear: 'both'}} /></div><div className="msbox" role="group" aria-label="colleges options" style={{display: 'none'}}><div className="msBoxCont"><div className="msulwrapper wcol2"><ul className="boxcol col0" role="presentation"><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked" htmlFor="collegeSelectorBox0" id="collegeSelectorBox0-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="collegeSelectorBox0" className="mdl-checkbox__input" onchange="msSelect('collegeSelector', 0,this.checked);" defaultChecked="checked" /><span className="mdl-checkbox__label">McMaster University</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div></ul></div><div className="msulwrapper wcol2"><ul className="boxcol col1" role="presentation" /></div><div className="msulwrapper wcol2 textnonevisible" style={{display: 'none'}}><ul role="presentation"><li>None Visible</li></ul></div><div style={{clear: 'both'}} /></div><div className="msBoxButtons accessOffOnly"><div className="msSelectAllDiv"><button className="mdl-button mdl-js-button" onClick="msSelect(&quot;collegeSelector&quot;,undefined,true);" title="Select all colleges" aria-label="Select all colleges" data-upgraded=",MaterialButton">Select All</button> <button className="mdl-button mdl-js-button" onClick="msSelect(&quot;collegeSelector&quot;,undefined,false);" title="Deselect all colleges" aria-label="Deselect all colleges" data-upgraded=",MaterialButton">Select None</button></div><div className="msBoxClose accessOffOnly"><button className="mdl-button mdl-js-button msActBoxClose" title="Collapse colleges filter" data-upgraded=",MaterialButton">Close</button></div></div></div></div>
                              <div id="campusSelector"><div className="mstitle"><div className="msItemR mslistitemstart"><div className="msItemNb li"><div className="msItemTb criteria_filter_title">Campuses:</div></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Conestoga College</div><div className="msItemM" id="campusSelectorList0" onClick="msSelect(&quot;campusSelector&quot;,0,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">McMaster University</div><div className="msItemM" id="campusSelectorList1" onClick="msSelect(&quot;campusSelector&quot;,1,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Mohawk College</div><div className="msItemM" id="campusSelectorList2" onClick="msSelect(&quot;campusSelector&quot;,2,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Off Site</div><div className="msItemM" id="campusSelectorList3" onClick="msSelect(&quot;campusSelector&quot;,3,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Six Nations Polytechnic</div><div className="msItemM" id="campusSelectorList4" onClick="msSelect(&quot;campusSelector&quot;,4,false);event.stopPropagation();" /></div></div><div className="msAll" style={{display: 'inline-block'}}><div className="msItemR"><div className="msItemNb li"><div className="msItemTb"><span className="textAll">All (5)</span><span className="textNone" style={{display: 'none'}}>None</span></div></div></div></div><div className="msItemR msSelectDot"><div className="msItemNb li"><button className="nobuttonstyle msItemTb a msActBoxShow ms_select_link disable-get-schedule" title="Expand campuses filter" aria-label="Expand campuses filter">Select...</button></div></div><div style={{clear: 'both'}} /></div><div className="msbox" role="group" aria-label="campuses options" style={{display: 'none'}}><div className="msBoxCont"><div className="msulwrapper wcol2"><ul className="boxcol col0" role="presentation"><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="campusSelectorBox0" id="campusSelectorBox0-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="campusSelectorBox0" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('campusSelector', 0,this.checked);" /><span className="mdl-checkbox__label">Conestoga College</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="campusSelectorBox1" id="campusSelectorBox1-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="campusSelectorBox1" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('campusSelector', 1,this.checked);" /><span className="mdl-checkbox__label">McMaster University</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="campusSelectorBox2" id="campusSelectorBox2-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="campusSelectorBox2" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('campusSelector', 2,this.checked);" /><span className="mdl-checkbox__label">Mohawk College</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div></ul></div><div className="msulwrapper wcol2"><ul className="boxcol col1" role="presentation"><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="campusSelectorBox3" id="campusSelectorBox3-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="campusSelectorBox3" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('campusSelector', 3,this.checked);" /><span className="mdl-checkbox__label">Off Site</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="campusSelectorBox4" id="campusSelectorBox4-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="campusSelectorBox4" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('campusSelector', 4,this.checked);" /><span className="mdl-checkbox__label">Six Nations Polytechnic</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div></ul></div><div className="msulwrapper wcol2 textnonevisible" style={{display: 'none'}}><ul role="presentation"><li>A college must be selected first.</li></ul></div><div style={{clear: 'both'}} /></div><div className="msBoxButtons accessOffOnly"><div className="msSelectAllDiv"><button className="mdl-button mdl-js-button" onClick="msSelect(&quot;campusSelector&quot;,undefined,true);" title="Select all campuses" aria-label="Select all campuses" data-upgraded=",MaterialButton">Select All</button> <button className="mdl-button mdl-js-button" onClick="msSelect(&quot;campusSelector&quot;,undefined,false);" title="Deselect all campuses" aria-label="Deselect all campuses" data-upgraded=",MaterialButton">Select None</button></div><div className="msBoxClose accessOffOnly"><button className="mdl-button mdl-js-button msActBoxClose" title="Collapse campuses filter" data-upgraded=",MaterialButton">Close</button></div></div></div></div>
                              <div id="locationSelector"><div className="mstitle"><div className="msItemR mslistitemstart"><div className="msItemNb li"><div className="msItemTb criteria_filter_title">Locations:</div></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Automotive Resource Centre</div><div className="msItemM" id="locationSelectorList0" onClick="msSelect(&quot;locationSelector&quot;,0,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">CityLAB Hamilton</div><div className="msItemM" id="locationSelectorList1" onClick="msSelect(&quot;locationSelector&quot;,1,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Conestoga College</div><div className="msItemM" id="locationSelectorList2" onClick="msSelect(&quot;locationSelector&quot;,2,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Downtown Centre</div><div className="msItemM" id="locationSelectorList3" onClick="msSelect(&quot;locationSelector&quot;,3,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">General Hospital</div><div className="msItemM" id="locationSelectorList4" onClick="msSelect(&quot;locationSelector&quot;,4,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Global Knowledge - Toronto</div><div className="msItemM" id="locationSelectorList5" onClick="msSelect(&quot;locationSelector&quot;,5,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Juravinski Cancer Centre</div><div className="msItemM" id="locationSelectorList6" onClick="msSelect(&quot;locationSelector&quot;,6,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">McMaster University</div><div className="msItemM" id="locationSelectorList7" onClick="msSelect(&quot;locationSelector&quot;,7,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Mississauga</div><div className="msItemM" id="locationSelectorList8" onClick="msSelect(&quot;locationSelector&quot;,8,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Mississauga Training Centre</div><div className="msItemM" id="locationSelectorList9" onClick="msSelect(&quot;locationSelector&quot;,9,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Mohawk College</div><div className="msItemM" id="locationSelectorList10" onClick="msSelect(&quot;locationSelector&quot;,10,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Niagara</div><div className="msItemM" id="locationSelectorList11" onClick="msSelect(&quot;locationSelector&quot;,11,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">ONLINE</div><div className="msItemM" id="locationSelectorList12" onClick="msSelect(&quot;locationSelector&quot;,12,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">One James Street North</div><div className="msItemM" id="locationSelectorList13" onClick="msSelect(&quot;locationSelector&quot;,13,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Remit Payment to</div><div className="msItemM" id="locationSelectorList14" onClick="msSelect(&quot;locationSelector&quot;,14,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Ron Joyce Centre (Burlington)</div><div className="msItemM" id="locationSelectorList15" onClick="msSelect(&quot;locationSelector&quot;,15,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Six Nations Polytechnic</div><div className="msItemM" id="locationSelectorList16" onClick="msSelect(&quot;locationSelector&quot;,16,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">St. Joseph's Hospital</div><div className="msItemM" id="locationSelectorList17" onClick="msSelect(&quot;locationSelector&quot;,17,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Unspecified</div><div className="msItemM" id="locationSelectorList18" onClick="msSelect(&quot;locationSelector&quot;,18,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Waterloo</div><div className="msItemM" id="locationSelectorList19" onClick="msSelect(&quot;locationSelector&quot;,19,false);event.stopPropagation();" /></div></div><div className="msAll" style={{display: 'inline-block'}}><div className="msItemR"><div className="msItemNb li"><div className="msItemTb"><span className="textAll">All 20 within selected campuses</span><span className="textNone" style={{display: 'none'}}>20 of 20 selected</span></div></div></div></div><div className="msItemR msSelectDot"><div className="msItemNb li"><button className="nobuttonstyle msItemTb a msActBoxShow ms_select_link disable-get-schedule" title="Expand locations filter" aria-label="Expand locations filter">Select...</button></div></div><div style={{clear: 'both'}} /></div><div className="msbox" role="group" aria-label="locations options" style={{display: 'none'}}><div className="msBoxCont"><div className="msulwrapper wcol2"><ul className="boxcol col0" role="presentation"><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox0" id="locationSelectorBox0-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox0" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 0,this.checked);" /><span className="mdl-checkbox__label">Automotive Resource Centre</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox1" id="locationSelectorBox1-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox1" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 1,this.checked);" /><span className="mdl-checkbox__label">CityLAB Hamilton</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox2" id="locationSelectorBox2-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox2" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 2,this.checked);" /><span className="mdl-checkbox__label">Conestoga College</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox3" id="locationSelectorBox3-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox3" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 3,this.checked);" /><span className="mdl-checkbox__label">Downtown Centre</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox4" id="locationSelectorBox4-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox4" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 4,this.checked);" /><span className="mdl-checkbox__label">General Hospital</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox5" id="locationSelectorBox5-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox5" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 5,this.checked);" /><span className="mdl-checkbox__label">Global Knowledge - Toronto</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox6" id="locationSelectorBox6-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox6" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 6,this.checked);" /><span className="mdl-checkbox__label">Juravinski Cancer Centre</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox7" id="locationSelectorBox7-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox7" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 7,this.checked);" /><span className="mdl-checkbox__label">McMaster University</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox8" id="locationSelectorBox8-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox8" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 8,this.checked);" /><span className="mdl-checkbox__label">Mississauga</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox9" id="locationSelectorBox9-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox9" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 9,this.checked);" /><span className="mdl-checkbox__label">Mississauga Training Centre</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div></ul></div><div className="msulwrapper wcol2"><ul className="boxcol col1" role="presentation"><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox10" id="locationSelectorBox10-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox10" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 10,this.checked);" /><span className="mdl-checkbox__label">Mohawk College</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox11" id="locationSelectorBox11-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox11" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 11,this.checked);" /><span className="mdl-checkbox__label">Niagara</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox12" id="locationSelectorBox12-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox12" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 12,this.checked);" /><span className="mdl-checkbox__label">ONLINE</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox13" id="locationSelectorBox13-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox13" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 13,this.checked);" /><span className="mdl-checkbox__label">One James Street North</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox14" id="locationSelectorBox14-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox14" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 14,this.checked);" /><span className="mdl-checkbox__label">Remit Payment to</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox15" id="locationSelectorBox15-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox15" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 15,this.checked);" /><span className="mdl-checkbox__label">Ron Joyce Centre (Burlington)</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox16" id="locationSelectorBox16-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox16" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 16,this.checked);" /><span className="mdl-checkbox__label">Six Nations Polytechnic</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox17" id="locationSelectorBox17-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox17" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 17,this.checked);" /><span className="mdl-checkbox__label">St. Joseph's Hospital</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox18" id="locationSelectorBox18-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox18" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 18,this.checked);" /><span className="mdl-checkbox__label">Unspecified</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="locationSelectorBox19" id="locationSelectorBox19-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="locationSelectorBox19" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('locationSelector', 19,this.checked);" /><span className="mdl-checkbox__label">Waterloo</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div></ul></div><div className="msulwrapper wcol2 textnonevisible" style={{display: 'none'}}><ul role="presentation"><li>A campus must be selected first.</li></ul></div><div style={{clear: 'both'}} /></div><div className="msBoxButtons accessOffOnly"><div className="msSelectAllDiv"><button className="mdl-button mdl-js-button" onClick="msSelect(&quot;locationSelector&quot;,undefined,true);" title="Select all locations" aria-label="Select all locations" data-upgraded=",MaterialButton">Select All</button> <button className="mdl-button mdl-js-button" onClick="msSelect(&quot;locationSelector&quot;,undefined,false);" title="Deselect all locations" aria-label="Deselect all locations" data-upgraded=",MaterialButton">Select None</button></div><div className="msBoxClose accessOffOnly"><button className="mdl-button mdl-js-button msActBoxClose" title="Collapse locations filter" data-upgraded=",MaterialButton">Close</button></div></div></div></div>
                              <div id="instructSelector"><div className="mstitle"><div className="msItemR mslistitemstart"><div className="msItemNb li"><div className="msItemTb criteria_filter_title">Instruction Modes:</div></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Blended (In-Person/Online)</div><div className="msItemM" id="instructSelectorList0" onClick="msSelect(&quot;instructSelector&quot;,0,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Combined In Person/Online</div><div className="msItemM" id="instructSelectorList1" onClick="msSelect(&quot;instructSelector&quot;,1,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Combined In Person/Virtual</div><div className="msItemM" id="instructSelectorList2" onClick="msSelect(&quot;instructSelector&quot;,2,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Directed Studies</div><div className="msItemM" id="instructSelectorList3" onClick="msSelect(&quot;instructSelector&quot;,3,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Distance Learning</div><div className="msItemM" id="instructSelectorList4" onClick="msSelect(&quot;instructSelector&quot;,4,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Experiential/WIL</div><div className="msItemM" id="instructSelectorList5" onClick="msSelect(&quot;instructSelector&quot;,5,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">In Person</div><div className="msItemM" id="instructSelectorList6" onClick="msSelect(&quot;instructSelector&quot;,6,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">In Person Accelerated (CCE)</div><div className="msItemM" id="instructSelectorList7" onClick="msSelect(&quot;instructSelector&quot;,7,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">In Person Components Required</div><div className="msItemM" id="instructSelectorList8" onClick="msSelect(&quot;instructSelector&quot;,8,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Online</div><div className="msItemM" id="instructSelectorList9" onClick="msSelect(&quot;instructSelector&quot;,9,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Online (Self Study)</div><div className="msItemM" id="instructSelectorList10" onClick="msSelect(&quot;instructSelector&quot;,10,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Remote Option Available</div><div className="msItemM" id="instructSelectorList11" onClick="msSelect(&quot;instructSelector&quot;,11,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Research</div><div className="msItemM" id="instructSelectorList12" onClick="msSelect(&quot;instructSelector&quot;,12,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">To Be Announced</div><div className="msItemM" id="instructSelectorList13" onClick="msSelect(&quot;instructSelector&quot;,13,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Video Conferencing</div><div className="msItemM" id="instructSelectorList14" onClick="msSelect(&quot;instructSelector&quot;,14,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Virtual Classroom</div><div className="msItemM" id="instructSelectorList15" onClick="msSelect(&quot;instructSelector&quot;,15,false);event.stopPropagation();" /></div></div><div className="msAll" style={{display: 'inline-block'}}><div className="msItemR"><div className="msItemNb li"><div className="msItemTb"><span className="textAll">All</span><span className="textNone" style={{display: 'none'}}>16 of 16 selected</span></div></div></div></div><div className="msItemR msSelectDot"><div className="msItemNb li"><button className="nobuttonstyle msItemTb a msActBoxShow ms_select_link disable-get-schedule" title="Expand instruction modes filter" aria-label="Expand instruction modes filter">Select...</button></div></div><div style={{clear: 'both'}} /></div><div className="msbox" role="group" aria-label="instruction modes options" style={{display: 'none'}}><div className="msBoxCont"><div className="msulwrapper wcol2"><ul className="boxcol col0" role="presentation"><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="instructSelectorBox0" id="instructSelectorBox0-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="instructSelectorBox0" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('instructSelector', 0,this.checked);" /><span className="mdl-checkbox__label">Blended (In-Person/Online)</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="instructSelectorBox1" id="instructSelectorBox1-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="instructSelectorBox1" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('instructSelector', 1,this.checked);" /><span className="mdl-checkbox__label">Combined In Person/Online</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="instructSelectorBox2" id="instructSelectorBox2-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="instructSelectorBox2" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('instructSelector', 2,this.checked);" /><span className="mdl-checkbox__label">Combined In Person/Virtual</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="instructSelectorBox3" id="instructSelectorBox3-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="instructSelectorBox3" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('instructSelector', 3,this.checked);" /><span className="mdl-checkbox__label">Directed Studies</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="instructSelectorBox4" id="instructSelectorBox4-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="instructSelectorBox4" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('instructSelector', 4,this.checked);" /><span className="mdl-checkbox__label">Distance Learning</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="instructSelectorBox5" id="instructSelectorBox5-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="instructSelectorBox5" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('instructSelector', 5,this.checked);" /><span className="mdl-checkbox__label">Experiential/WIL</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="instructSelectorBox6" id="instructSelectorBox6-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="instructSelectorBox6" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('instructSelector', 6,this.checked);" /><span className="mdl-checkbox__label">In Person</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="instructSelectorBox7" id="instructSelectorBox7-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="instructSelectorBox7" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('instructSelector', 7,this.checked);" /><span className="mdl-checkbox__label">In Person Accelerated (CCE)</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div></ul></div><div className="msulwrapper wcol2"><ul className="boxcol col1" role="presentation"><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="instructSelectorBox8" id="instructSelectorBox8-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="instructSelectorBox8" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('instructSelector', 8,this.checked);" /><span className="mdl-checkbox__label">In Person Components Required</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="instructSelectorBox9" id="instructSelectorBox9-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="instructSelectorBox9" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('instructSelector', 9,this.checked);" /><span className="mdl-checkbox__label">Online</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="instructSelectorBox10" id="instructSelectorBox10-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="instructSelectorBox10" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('instructSelector', 10,this.checked);" /><span className="mdl-checkbox__label">Online (Self Study)</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="instructSelectorBox11" id="instructSelectorBox11-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="instructSelectorBox11" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('instructSelector', 11,this.checked);" /><span className="mdl-checkbox__label">Remote Option Available</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="instructSelectorBox12" id="instructSelectorBox12-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="instructSelectorBox12" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('instructSelector', 12,this.checked);" /><span className="mdl-checkbox__label">Research</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="instructSelectorBox13" id="instructSelectorBox13-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="instructSelectorBox13" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('instructSelector', 13,this.checked);" /><span className="mdl-checkbox__label">To Be Announced</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="instructSelectorBox14" id="instructSelectorBox14-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="instructSelectorBox14" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('instructSelector', 14,this.checked);" /><span className="mdl-checkbox__label">Video Conferencing</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="instructSelectorBox15" id="instructSelectorBox15-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="instructSelectorBox15" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('instructSelector', 15,this.checked);" /><span className="mdl-checkbox__label">Virtual Classroom</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div></ul></div><div className="msulwrapper wcol2 textnonevisible" style={{display: 'none'}}><ul role="presentation"><li>A college must be selected first.</li></ul></div><div style={{clear: 'both'}} /></div><div className="msBoxButtons accessOffOnly"><div className="msSelectAllDiv"><button className="mdl-button mdl-js-button" onClick="msSelect(&quot;instructSelector&quot;,undefined,true);" title="Select all instruction modes" aria-label="Select all instruction modes" data-upgraded=",MaterialButton">Select All</button> <button className="mdl-button mdl-js-button" onClick="msSelect(&quot;instructSelector&quot;,undefined,false);" title="Deselect all instruction modes" aria-label="Deselect all instruction modes" data-upgraded=",MaterialButton">Select None</button></div><div className="msBoxClose accessOffOnly"><button className="mdl-button mdl-js-button msActBoxClose" title="Collapse instruction modes filter" data-upgraded=",MaterialButton">Close</button></div></div></div></div>
                              <div id="sessionSelector"><div className="mstitle"><div className="msItemR mslistitemstart"><div className="msItemNb li"><div className="msItemTb criteria_filter_title">Session:</div></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Multi-term Part A</div><div className="msItemM" id="sessionSelectorList0" onClick="msSelect(&quot;sessionSelector&quot;,0,false);event.stopPropagation();" /></div></div><div className="hidden msItemR msitem" title style={{}}><div className="msItemN"><div className="msItemT">Regular Academic</div><div className="msItemM" id="sessionSelectorList1" onClick="msSelect(&quot;sessionSelector&quot;,1,false);event.stopPropagation();" /></div></div><div className="msAll" style={{display: 'inline-block'}}><div className="msItemR"><div className="msItemNb li"><div className="msItemTb"><span className="textAll">All</span><span className="textNone" style={{display: 'none'}}>None</span></div></div></div></div><div className="msItemR msSelectDot"><div className="msItemNb li"><button className="nobuttonstyle msItemTb a msActBoxShow ms_select_link" title="Expand session filter" aria-label="Expand session filter"><span className="accessOffOnly">Select...</span><span className="accessOnly">Show Session</span></button></div></div><div style={{clear: 'both'}} /></div><div className="msbox" role="group" aria-label="session options" style={{display: 'none'}}><div className="msBoxCont"><div className="msulwrapper wcol2"><ul className="boxcol col0" role="presentation"><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="sessionSelectorBox0" id="sessionSelectorBox0-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="sessionSelectorBox0" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('sessionSelector', 0,this.checked);" /><span className="mdl-checkbox__label">Multi-term Part A</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div></ul></div><div className="msulwrapper wcol2"><ul className="boxcol col1" role="presentation"><div className="msItemDiv"><li className="msitem" title><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="sessionSelectorBox1" id="sessionSelectorBox1-label" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" id="sessionSelectorBox1" defaultChecked="checked" className="mdl-checkbox__input" onchange="msSelect('sessionSelector', 1,this.checked);" /><span className="mdl-checkbox__label">Regular Academic</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></li></div></ul></div><div className="msulwrapper wcol2 textnonevisible" style={{display: 'none'}}><ul role="presentation"><li>None Visible</li></ul></div><div style={{clear: 'both'}} /></div><div className="msBoxButtons accessOffOnly"><div className="msSelectAllDiv"><button className="mdl-button mdl-js-button" onClick="msSelect(&quot;sessionSelector&quot;,undefined,true);" title="Select all session" aria-label="Select all session" data-upgraded=",MaterialButton">Select All</button> <button className="mdl-button mdl-js-button" onClick="msSelect(&quot;sessionSelector&quot;,undefined,false);" title="Deselect all session" aria-label="Deselect all session" data-upgraded=",MaterialButton">Select None</button></div><div className="msBoxClose accessOffOnly"><button className="mdl-button mdl-js-button msActBoxClose" title="Collapse session filter" data-upgraded=",MaterialButton">Close</button></div></div></div></div>
                            </div>
                            <div className="accessOnly">
                              <h3>Step<span className="bubbleNb2">2</span>: Select a Course</h3>
                              <div>
                                Begin typing a course code or name that you would like to take.<br /><br />Example: <strong>CHEM 1A03</strong>, or <strong>ARTHIST 2T03</strong></div>
                            </div>
                            <div id="sel_midrange" style={{minHeight: '30px'}}>
                              <div className="bubble" id="step2abubble">
                                <div className="tip_top"><i className="fa fa-caret-up" /></div>
                                <div className="bubbletitle hide50" style={{float: 'left'}}>Step<span className="bubbleNb2a">1</span></div>
                                <div>
                                  <img src="test_loggedin_semesterselected_files/step_arrow_north.png" style={{float: 'right'}} alt="Up arrow for step instructions" className="phone step_arrow" />
                                  <div style={{float: 'left', clear: 'left'}}>Select your desired course locations.</div>
                                  <div style={{clear: 'both'}} />
                                </div>
                                <div className="tip_bottom weakhide" />
                              </div>
                              <div id="message_area" aria-live="assertive" aria-atomic="true">
                              </div>
                              <div className="bubble" id="step2bubble">
                                <div className="bubbletitle hide50">Step<span className="bubbleNb2">2</span></div>
                                Begin typing a course code or name that you would like to take.<img src="test_loggedin_semesterselected_files/step_arrow_south.png" style={{marginTop: '17px'}} alt="Down arrow for step instructions" className="pull-right phone step_arrow" />
                                <br /><br />Example: <strong>CHEM 1A03</strong>, or <strong>ARTHIST 2T03</strong><div className="tip_bottom"><i className="fa fa-caret-down" /></div>
                                <div className="clearfix" />
                              </div>
                            </div>
                            <div className="plusBox">
                              <h3 className="visuallyhidden" aria-label="Select Course input. Please search for courses using the input element below." />
                              <div className="visuallyhidden">
                                <div id="autocomplete-results" aria-live="assertive" aria-atomic="true">
                                </div>
                              </div>
                              <div className="sdl_input plusInput" data-protonpass-form>
                                <label htmlFor="code_number" style={{color: 'black'}}>Select Course</label>
                                {/* Provide additional labelling for screen readers */}
                                <label id="accessibilityCourseSearchLabel" className="visuallyhidden">Search for courses by</label>
                                <input className="disable-welcome disable-get-schedule" aria-describedby="accessibilityCourseSearchLabel" type="text" placeholder="Class Number, Title, Instructor..." id="code_number" autoComplete="off" role="combobox" />
                                <button className="advSearchButton disable-welcome disable-get-schedule" onClick="AS.openCourseBrowser()" style={{pointerEvents: 'auto'}}>
                                  <div className="advSearchText" style={{color: 'black'}}>Advanced<br />Search</div>
                                  <div className="advSearchIcon"><i className="fa fa-search" /></div>
                                </button>
                              </div>
                              <div style={{clear: 'both'}} />
                              <div className="crnListWarning importOnlyPlan" style={{display: 'none'}}>
                                You cannot manually select courses because you must follow the assigned recommendation.</div>
                              <div className="crnListWarning crnListWarningInfo noSelectAlert" style={{display: 'none'}}>
                                You cannot manually select courses but you can import them from your 
                                Course Queue which you can fill in your My Academic Requirements<span className="noSelectAdvice" />
                              </div>
                              <div className="crnListWarning crnListWarningInfo noSelectAlertAdvisor" style={{display: 'none'}}>
                                Note that this student acting alone can only select courses from their
                                Academic Requirements by importing them via the Course Queue<span className="noSelectAdvice" />
                              </div>
                              <div className="crnListWarning crnListWarningInfo noSelectAlertGuest" style={{display: 'none'}}>
                                Schedule Builder is currently being piloted for only specific users. 
                                However, we anticipate this new tool will be available to you sometime 
                                in the future.<span className="noSelectAdvice" />
                              </div>
                              {/* Course browsing */}
                              <div className="browse-courses hide50">
                                <a className="popup-modal" href="javascript:AS.openCourseBrowser()">
                                  <img alt="Advanced Course Search" src="test_loggedin_semesterselected_files/search2.gif" style={{verticalAlign: 'bottom'}} />
                                  Advanced Course Search...
                                </a>
                              </div>
                            </div>
                            <div className="plusBoxBelow">
                            </div>
                            <div id="select-course-filters" className="hide50" style={{marginBottom: '10px'}}>
                              <div style={{textAlign: 'left', width: '100%'}}>
                              </div>
                              <div style={{textAlign: 'left'}}>
                                <div style={{display: 'flex', alignItems: 'center', height: '47px'}}>
                                  Locations
                                  <button className="mdl-button mdl-js-button" id="add-location-filter" onClick="
		$('#add-location-filter').hide();
		$('.select-course-filters-input-container').show()" style={{width: '20px', padding: '0 5px', marginLeft: '2px', minWidth: 0}} data-upgraded=",MaterialButton">+</button>
                                  <span className="select-course-filters-input-container" style={{display: 'none'}}>
                                    <input style={{width: '200px'}} type="text" id="select-course-filters-input" aria-label="Select Location" placeholder="Select Location" />
                                  </span>
                                </div>
                                <div className="selected-filters-chips">
                                  <span className="mdl-chip mdl-chip--deletable" id="selectCourseFilterChipTemplate" style={{display: 'none'}}>
                                    <span className="mdl-chip__text chip-text">Deletable Chip</span>
                                    <button type="button" className="mdl-chip__action">
                                      <i className="fa fa-times" aria-hidden="true" />
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="crnListWarning tooManyResults" style={{display: 'none'}}>
                              The generated schedule results are truncated because the input is too 
                              broad. To ensure all results are considered, pin down or toggle off some
                              of your preferred classes.</div>
                            <div id="requirements" style={{position: 'relative'}}>
                              <h3 className="visuallyhidden" aria-label="List of courses:" />
                              <div id="size-tester">Stay enrolled in LEC C01 - TUT T01</div>
                              <div className="loadingDiv flap_loading" id="flap_loading" style={{display: 'none'}}>Retrieving schedule...</div>
                              <div className="requirementDiv2 rbox" id="templateCourse2" style={{display: 'none'}}>
                                <h4 className="visuallyhidden" aria-label="Selected course" />
                                <div className="rbox-header" style={{display: 'none'}}>
                                  <div className="rbox-header-cont clearfix2">
                                    <span className="rbox-wheader">
                                      <span className="wildcard-title requirementTitle1">Subject or Title </span>
                                      <span className="wildcard-title requirementTitle2" style={{display: 'none'}}>Catalog Number: </span>
                                      <span className="wildcard-title requirementTitle3" style={{display: 'none'}}>Attribute: </span>
                                    </span>
                                    <div className="clearfix2" style={{float: 'right'}}>
                                      <div className="reqInfo">Choose a course from the following list:</div>
                                      <div className="optionsSelect" />
                                    </div>
                                  </div>
                                </div>
                                <div className="cbox-select-wildcard" style={{display: 'none'}}>
                                  <div className="cbox"> {/* Add 'roomy' to classes to stretch content, 'expanded' to pre-expand */}
                                    <table style={{width: '100%', padding: '0px', borderSpacing: '0px'}} className="cbox-expand-region">
                                      <tbody><tr>
                                          <td>
                                            <span className="select-title"><i className="fa fa-exclamation-triangle" /> Please select a course from the dropdown</span>
                                          </td>
                                          <td className="cbox-option" style={{width: '3%'}} onClick="event.stopPropagation();">
                                            <div className="cnf_trash_tip Dmdl-tooltip mdl-tooltip--top dynID" htmlFor="tipTrashWildX">Drop this course</div>
                                            <button aria-label="Remove class" className="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipTrashWildX" data-upgraded=",MaterialButton">
                                              <img className="cbox-trash-icon" src="test_loggedin_semesterselected_files/trash.svg" alt="trash can" />
                                              <img className="cbox-trash-icon-open" src="test_loggedin_semesterselected_files/trash_open.svg" alt="empty trash can" />
                                              <i className="fa fa-undo cbox-trash-icon-undo" />
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                  </div>
                                </div>
                                <div className="cbox-margin">
                                  <div className="cbox-toggle">
                                    <label className="Dmdl-checkbox Dmdl-js-checkbox Dmdl-js-ripple-effect dynID">
                                      <input type="checkbox" id="cnf_toggle" className="Dmdl-checkbox__input ignore_check dynID" defaultChecked="checked" />
                                    </label>
                                  </div>
                                  <div className="cbox"> {/* Add 'roomy' to classes to stretch content, 'expanded' to pre-expand */}
                                    <table style={{width: '100%', padding: '0px', borderSpacing: '0px'}} className="cbox-expand-region">
                                      <tbody><tr>
                                          <td className="cbox-codenumber">
                                            <div className="cbox-cn">
                                              COMM<br />217
                                            </div>
                                          </td>
                                          <td className="cbox-header">
                                            <div className="Dmdl-tooltip mdl-tooltip--right dynID" aria-hidden="true" htmlFor="tipCourseLinkX">Courses with this symbol must be taken together</div>
                                            <span className="block_piece_indicator_cont dynID" id="tipCourseLinkX"><span className="block_piece_indicator"><i className="fas fa-link" /></span></span>
                                            <span className="leftnclear cbox-title">Financial Accounting</span>
                                            <span className="cnf_req_state">Required or Recommended</span>
                                            <span className="course_state" />
                                            <span className="leftnclear cbox-subtitle">
                                              {/* <span class="cnf_consider dynID" id="tipConsiderX">Considering 3 of 5 Classes</span>&nbsp;&nbsp; */}
                                              <span className="cnf_campus_info">Walnut Creek Campus</span></span>
                                            <span className="cnf_dropdown cbox-dropdown-cont leftnclear" onkeydown="return avoidChange(event);" onkeypress="return avoidChange(event);" onkeyup="return avoidChange(event);" onClick="event.stopPropagation();">
                                              {/* <div class="dh_locker_hotspot" onClick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));">&nbsp;</div> */}
                                              {/* <img src="images/padlock.gif" style="vertical-align:middle;" class="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor"/> */}
                                              <select className="cbox-dropdown cbox-dropdown-normal dropdownSelect" aria-label="Please select a course section from this dropdown.  If selected, course schedules will only be generated containing the selected sections for a given course.">
                                                <option aria-label="Current selection " value="al" selected="selected">Try all classes</option>
                                                {/* <option value="ig">Ignore this course</option>  */}
                                                <option value="ss" className="cnf_specific_option">Try specific classes...</option></select>
                                              <img src="test_loggedin_semesterselected_files/pin.png" style={{verticalAlign: 'middle', cursor: 'pointer', margin: '-2px 0px'}} className="dropdownPinImg" alt="Push Pin" />
                                              <img src="test_loggedin_semesterselected_files/padlock.gif" style={{verticalAlign: 'middle', margin: '-2px 0px'}} className="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor" />
                                              <div className="cnf_class_lock_tip Dmdl-tooltip mdl-tooltip--top dynID" aria-hidden="true" htmlFor="tipClsLockX">Lock this class</div>
                                              <button aria-label="lock class" className="class_locker_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipClsLockX" onClick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));" style={{margin: '-6px 0 -6px 0'}} data-upgraded=",MaterialButton">
                                                <i className="class_unlocked fa fa-unlock-alt" />
                                                <i className="class_locked fa fa-lock" />
                                              </button>
                                            </span>
                                          </td>
                                          <td className="cbox-option cnf_lock" style={{width: '3%'}} onClick="event.stopPropagation();">
                                            <div className="cnf_locker_tip Dmdl-tooltip mdl-tooltip--top dynID" htmlFor="tipLockX">Lock this course</div>
                                            <button aria-label="lock course" className="cnf_locker_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipLockX" data-upgraded=",MaterialButton">
                                              <i className="cnf_unlocked fa fa-unlock-alt" />
                                              <i className="cnf_locked fa fa-lock" />
                                            </button>
                                          </td>
                                          <td className="cbox-option" style={{width: '3%'}} onClick="event.stopPropagation();">
                                            <div className="cnf_trash_tip Dmdl-tooltip mdl-tooltip--top dynID" htmlFor="tipTrashX">Drop this course</div>
                                            <button aria-label="Remove course" className="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipTrashX" data-upgraded=",MaterialButton">
                                              <img className="cbox-trash-icon" src="test_loggedin_semesterselected_files/trash.svg" alt="trash can" />
                                              <img className="cbox-trash-icon-open" src="test_loggedin_semesterselected_files/trash_open.svg" alt="empty trash can" />
                                              <i className="fa fa-undo cbox-trash-icon-undo" />
                                            </button>
                                          </td>
                                          <td className="cbox-option cbox-expander" style={{width: '3%'}}>
                                            <div className="Dmdl-tooltip mdl-tooltip--top dynID cnf_tip_expand" htmlFor="tipExpandX">Click to {'{'}{'}'} more options and information on {'{'}{'}'}</div>
                                            <button aria-label="Expand course detail" className="mdl-button mdl-js-button mdl-button--icon dynID" id="tipExpandX" data-upgraded=",MaterialButton">
                                              <i className="far fa-angle-down" />
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                    <div className="cbox-warnings">
                                      <i className="fa fa-exclamation-triangle" /> This course has no classes still open for enrollment
                                    </div>
                                    <div className="cbox-expansion" style={{display: 'none'}}>
                                      <div className="cbox-row clearfix2 cnf_desc">
                                        <span className="cbox-row-title">Description:</span>
                                        <span className="cbox-row-content cnf_desc_desc"> This course is designed to familiarize the students with the processes
                                          involved in the design, planning, and construction of dramatic motion picture sets. </span>
                                        <div style={{clear: 'both'}} />
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_reqs">
                                        <span className="cbox-row-title">Requirements:</span>
                                        <span className="cbox-row-content cnf_req"> ACT English 18-19 or COMPASS English 70-80. </span>
                                      </div>
                                      <div className="core_names_cont2 cbox-row clearfix2">
                                        <span className="cbox-row-title">Attributes:</span>
                                        <span className="core_names cbox-row-content">HON, CORE</span>
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_cross_listed">
                                        <span className="cbox-row-title">Cross Listed Courses:</span>
                                        <span className="cbox-row-content cnf_cross_listed_desc"> MATH 101, CHEM 303 </span>
                                      </div>
                                      <div className="cbox-row clearfix2 noselect selectAllNoneContainer">
                                        <span className="cbox-row-title">Campuses:</span>
                                        <div style={{clear: 'both'}} />
                                        <span className="campus_checkboxes clearfix2">
                                          <span className="cbox-selitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="checkbox-X1" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="checkbox-X1" className="mdl-checkbox__input" defaultChecked="checked" />
                                              <span className="cbox-selitem-label">Sir George Williams</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </span>
                                        </span>
                                        <div className="cbox-allnone cnf_campuses_allnone">
                                          <button className="Dmdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="Dmdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row noselect">
                                        <span className="cbox-row-title clearfix2">Session:</span>
                                        <div style={{clear: 'left'}} />
                                        <select className="cbox-select select_period" role="listbox" aria-label="Period">
                                          <option selected="selected">Period A</option>
                                          <option>Period B</option>
                                        </select>
                                      </div>
                                      <div className="cbox-row noselect">
                                        <span className="cbox-row-title clearfix2">Section:</span>
                                        <div style={{clear: 'left'}} />
                                        <select className="cbox-select select_usn" role="listbox" aria-label="USN">
                                          <option selected="selected">Item A</option>
                                          <option>Item B</option>
                                        </select>
                                      </div>
                                      <div className="cbox-row clearfix2 noselect selectAllNoneContainer cnf_modes">
                                        <span className="cbox-row-title">Include classes that are:</span>
                                        <div style={{clear: 'both'}} />
                                        <span className="mode_checkboxes">
                                          <span className="cbox-selitem">
                                            <label className="Dmdl-checkbox Dmdl-js-checkbox Dmdl-js-ripple-effect cbox-checkbox dynID" htmlFor="cb_online">
                                              <input type="checkbox" id="cb_online" className="Dmdl-checkbox__input dynID" defaultChecked="checked" />
                                              <span className="cbox-selitem-label">Online</span>
                                            </label>
                                          </span>
                                          <span className="cbox-selitem">
                                            <label className="Dmdl-checkbox Dmdl-js-checkbox Dmdl-js-ripple-effect cbox-checkbox dynID" htmlFor="cb_on_camp">
                                              <input type="checkbox" id="cb_on_camp" className="Dmdl-checkbox__input dynID" defaultChecked="checked" />
                                              <span className="cbox-selitem-label">On Campus</span>
                                            </label>
                                          </span>
                                          <span className="cbox-selitem">
                                            <label className="Dmdl-checkbox Dmdl-js-checkbox Dmdl-js-ripple-effect cbox-checkbox dynID" htmlFor="cb_lod">
                                              <input type="checkbox" id="cb_lod" className="Dmdl-checkbox__input dynID" defaultChecked="checked" />
                                              <span className="cbox-selitem-label">Learn on demand</span>
                                            </label>
                                          </span>
                                        </span>
                                        <div className="cbox-allnone">
                                          <button className="Dmdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="Dmdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row clearfix2 noselect cnf_classes selectAllNoneContainer">
                                        <span className="cbox-row-title">Classes:</span>
                                        <span className="visuallyhidden" aria-label="The following checkboxes allow you to specify which classes you want to allow as possible options for your generated schedule results. If you want to get the detail of each class now, try adding only this course to the list of courses (or deselect every course except this one). This will generate one schedule result for each unique timetable option of this course. By navigating the legend of each schedule result, you will be able to examine the detail of each class of this course." />
                                        <div style={{clear: 'both'}} />
                                        <span className="class_checkboxes">
                                          <span className="cbox-selitem cbox-classitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="checkbox-Y1" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="checkbox-Y1" className="mdl-checkbox__input class_chk" defaultChecked="checked" />
                                              <span className="cbox-selitem-label full">Lec A</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                            <div className="cbox-hover-pin">Pin</div>
                                          </span>
                                          <span className="cbox-selitem cbox-classitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="checkbox-Y2" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="checkbox-Y2" className="mdl-checkbox__input class_chk" defaultChecked="checked" />
                                              <span className="cbox-selitem-label waitlisted">Lec B</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                            <div className="cbox-hover-pin">Pin</div>
                                          </span>
                                        </span>
                                        <div className="cbox-allnone">
                                          <button className="Dmdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="Dmdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_subj_note">
                                        <span className="cbox-row-title">Subject Notes:</span>
                                        <span className="cbox-row-content cnf_subj_note_desc"> abc </span>
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_cattrs">
                                        <span className="cbox-row-title">Course Attributes:</span>
                                        <span className="cbox-row-content cnf_cattr">Value1, Value2</span>
                                      </div>
                                      <div className="cnf_custom_attrs">
                                        <div className="cbox-row clearfix2 cnf_attrs">
                                          <span className="cbox-row-title">Attribute1:</span>
                                          <span className="cbox-row-content cnf_attr">Value1</span>
                                        </div>
                                        <div className="cbox-row clearfix2 cnf_attrs">
                                          <span className="cbox-row-title">Attribute2:</span>
                                          <span className="cbox-row-content cnf_attr">Class1, Class3: Value1</span>
                                          <span className="cbox-row-content cnf_attr">Class2: Value2</span>
                                        </div>
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_class_notes">
                                        <span className="cbox-row-title">Class Remarks:</span>
                                        <span className="cbox-row-content cnf_class_notes_desc"> abc </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div><div className="requirementDiv2 rbox" style={{}}>
                                <h4 className="visuallyhidden" aria-label="Selected course" />
                                <div className="rbox-header" style={{display: 'none'}}>
                                  <div className="rbox-header-cont clearfix2">
                                    <span className="rbox-wheader">
                                      <span className="wildcard-title requirementTitle1">Subject or Title </span>
                                      <span className="wildcard-title requirementTitle2" style={{display: 'none'}}>Catalog Number: </span>
                                      <span className="wildcard-title requirementTitle3" style={{display: 'none'}}>Attribute: </span>
                                    </span>
                                    <div className="clearfix2" style={{float: 'right'}}>
                                      <div className="reqInfo">Choose a course from the following list:</div>
                                      <div className="optionsSelect" />
                                    </div>
                                  </div>
                                </div>
                                <div className="cbox-select-wildcard" style={{display: 'none'}}>
                                  <div className="cbox cbox-unlocked bd1"> {/* Add 'roomy' to classes to stretch content, 'expanded' to pre-expand */}
                                    <table style={{width: '100%', padding: '0px', borderSpacing: '0px'}} className="cbox-expand-region">
                                      <tbody><tr>
                                          <td>
                                            <span className="select-title"><i className="fa fa-exclamation-triangle" /> Please select a course from the dropdown</span>
                                          </td>
                                          <td className="cbox-option" style={{width: '3%'}} onClick="event.stopPropagation();">
                                            <div className="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID" htmlFor="tipTrashWildX_5" data-upgraded=",MaterialTooltip">Drop this course...</div>
                                            <button aria-label="Remove class" className="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipTrashWildX_5" data-upgraded=",MaterialButton" style={{cursor: 'default'}} tabIndex={0}>
                                              <img className="cbox-trash-icon" src="test_loggedin_semesterselected_files/trash.svg" alt="trash can" style={{display: 'inline'}} />
                                              <img className="cbox-trash-icon-open" src="test_loggedin_semesterselected_files/trash_open.svg" alt="empty trash can" style={{display: 'none'}} />
                                              <i className="fa fa-undo cbox-trash-icon-undo" style={{display: 'none'}} />
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                  </div>
                                </div>
                                <div className="cbox-margin" style={{display: 'block'}}>
                                  <div className="cbox-toggle">
                                    <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect dynID is-checked mdl-js-ripple-effect--ignore-events is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                      <input type="checkbox" id="cnf_toggle_5" className="mdl-checkbox__input ignore_check dynID" defaultChecked="checked" aria-label="COMPSCI 2C03 Data Structures and Algorithms" style={{display: 'inline-block'}} />
                                      <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                  </div>
                                  <div className="cbox cbox-unlocked bd1"> {/* Add 'roomy' to classes to stretch content, 'expanded' to pre-expand */}
                                    <table style={{width: '100%', padding: '0px', borderSpacing: '0px'}} className="cbox-expand-region">
                                      <tbody><tr>
                                          <td className="cbox-codenumber">
                                            <div className="cbox-cn bc1">COMPSCI<br />2C03</div>
                                          </td>
                                          <td className="cbox-header">
                                            <div className="mdl-tooltip mdl-tooltip--right dynID" aria-hidden="true" htmlFor="tipCourseLinkX_5" data-upgraded=",MaterialTooltip">Courses with this symbol must be taken together</div>
                                            <span className="block_piece_indicator_cont dynID" id="tipCourseLinkX_5" style={{display: 'none'}} tabIndex={0}><span className="block_piece_indicator"><i className="fas fa-link" /></span></span>
                                            <span className="leftnclear cbox-title">Data Structures and Algorithms</span>
                                            <span className="cnf_req_state" style={{display: 'none'}}>Recommended</span>
                                            <span className="course_state" style={{display: 'inline'}}>Enrolled</span>
                                            <span className="leftnclear cbox-subtitle">
                                              {/* <span class="cnf_consider dynID" id="tipConsiderX">Considering 3 of 5 Classes</span>&nbsp;&nbsp; */}
                                              <span className="cnf_campus_info"> &nbsp; </span></span>
                                            <span className="cnf_dropdown cbox-dropdown-cont leftnclear" onkeydown="return avoidChange(event);" onkeypress="return avoidChange(event);" onkeyup="return avoidChange(event);" onClick="event.stopPropagation();">
                                              {/* <div class="dh_locker_hotspot" onClick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));">&nbsp;</div> */}
                                              {/* <img src="images/padlock.gif" style="vertical-align:middle;" class="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor"/> */}
                                              <select className="cbox-dropdown cbox-dropdown-normal dropdownSelect" aria-label="Please select a course section from this dropdown.  If selected, course schedules will only be generated containing the selected sections for a given course." style={{maxWidth: '139px'}}>
                                                <option value="kp_MCMST--2259_3668-3779-">Stay enrolled in LEC C02 - TUT T05</option><option value="dp_MCMST--2259_3668-3779-">Drop Course</option><option aria-label="Current selection " value="al" selected="selected">Try all classes (6)</option>
                                                {/* <option value="ig">Ignore this course</option>  */}
                                                <option value="ss" className="cnf_specific_option">Try specific classes (6/6)</option><option value="us_MCMST--2259_3480-3481-">LEC C01 - TUT T01</option><option value="us_MCMST--2259_3480-3482-">LEC C01 - TUT T02</option><option value="us_MCMST--2259_3480-8958-">LEC C01 - TUT T03</option><option value="us_MCMST--2259_3668-3779-">LEC C02 - TUT T05 (Closed)</option><option value="us_MCMST--2259_3779-3780-">LEC C02 - TUT T06</option><option value="us_MCMST--2259_3779-3860-">LEC C02 - TUT T07</option></select>
                                              <img src="test_loggedin_semesterselected_files/pin.png" style={{verticalAlign: 'middle', cursor: 'pointer', margin: '-2px 0px', display: 'none'}} className="dropdownPinImg" alt="Push Pin" />
                                              <img src="test_loggedin_semesterselected_files/padlock.gif" style={{verticalAlign: 'middle', margin: '-2px 0px', display: 'none'}} className="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor" />
                                              <div className="cnf_class_lock_tip mdl-tooltip mdl-tooltip--top dynID" aria-hidden="true" htmlFor="tipClsLockX_5" data-upgraded=",MaterialTooltip">Click
                                                to lock this class so that if this schedule is recommended to a 
                                                student, it will force the student to take the selected class.</div>
                                              <button aria-label="lock class" className="class_locker_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipClsLockX_5" onClick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));" style={{margin: '-6px 0px', display: 'none'}} data-upgraded=",MaterialButton" tabIndex={0}>
                                                <i className="class_unlocked fa fa-unlock-alt" style={{display: 'inline'}} />
                                                <i className="class_locked fa fa-lock" style={{display: 'none'}} />
                                              </button>
                                            </span>
                                          </td>
                                          <td className="cbox-option cnf_lock" style={{width: '3%', display: 'none'}} onClick="event.stopPropagation();">
                                            <div className="cnf_locker_tip mdl-tooltip mdl-tooltip--top dynID" htmlFor="tipLockX_5" data-upgraded=",MaterialTooltip">Click
                                              to lock this course so that if this schedule is recommended to a 
                                              student, it will force the student to include this course.</div>
                                            <button aria-label="lock course" className="cnf_locker_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipLockX_5" data-upgraded=",MaterialButton" tabIndex={0}>
                                              <i className="cnf_unlocked fa fa-unlock-alt" style={{display: 'inline'}} />
                                              <i className="cnf_locked fa fa-lock" style={{display: 'none'}} />
                                            </button>
                                          </td>
                                          <td className="cbox-option" style={{width: '3%'}} onClick="event.stopPropagation();">
                                            <div className="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID" htmlFor="tipTrashX_5" data-upgraded=",MaterialTooltip">Drop this course...</div>
                                            <button aria-label="Remove course" className="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipTrashX_5" data-upgraded=",MaterialButton" style={{cursor: 'default'}} tabIndex={0}>
                                              <img className="cbox-trash-icon" src="test_loggedin_semesterselected_files/trash.svg" alt="trash can" style={{display: 'inline'}} />
                                              <img className="cbox-trash-icon-open" src="test_loggedin_semesterselected_files/trash_open.svg" alt="empty trash can" style={{display: 'none'}} />
                                              <i className="fa fa-undo cbox-trash-icon-undo" style={{display: 'none'}} />
                                            </button>
                                          </td>
                                          <td className="cbox-option cbox-expander" style={{width: '3%'}}>
                                            <div className="mdl-tooltip mdl-tooltip--top dynID cnf_tip_expand" htmlFor="tipExpandX_5" data-upgraded=",MaterialTooltip">Expand detail on COMPSCI 2C03</div>
                                            <button aria-label="Expand course detail" className="mdl-button mdl-js-button mdl-button--icon dynID" id="tipExpandX_5" data-upgraded=",MaterialButton" tabIndex={0}>
                                              <i className="far fa-angle-down" />
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                    <div className="cbox-expansion" style={{display: 'none'}}>
                                      <div className="cbox-row clearfix2 cnf_desc" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Description:</span>
                                        <span className="cbox-row-content cnf_desc_desc">Basic data 
                                          structures: stacks, queues, hash tables, and binary trees; searching and
                                          sorting; graph representations and algorithms, including minimum 
                                          spanning trees, traversals, shortest paths; introduction to algorithmic 
                                          design strategies; correctness and performance analysis.<br />Three lectures, one tutorial (one hour); first term; may be offered also in the first term<br />Prerequisite(s):
                                          COMPSCI 1DM3 or 2DM3; COMPSCI 1XC3 or 1XD3 or 1MD3 or MATH 1MP3, and 
                                          registration in any Computer Science program (see Department Note 3 in 
                                          the course listing) or in the Minor in Computer Science.<br />Antirequisite(s): SFWRENG 2C03, COMPENG 3SM4</span>
                                        <div style={{clear: 'both'}} />
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_reqs" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Requirements:</span>
                                        <span className="cbox-row-content cnf_req"><span className="cbox-row-content cnf_req">Refer to course Description</span></span> </div>
                                      <div className="core_names_cont2 cbox-row clearfix2" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Attributes:</span>
                                        <span className="core_names cbox-row-content" />
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_cross_listed" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Cross Listed Courses:</span>
                                        <span className="cbox-row-content cnf_cross_listed_desc" />
                                      </div>
                                      <div className="cbox-row clearfix2 noselect selectAllNoneContainer" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Campuses:</span>
                                        <div style={{clear: 'both'}} />
                                        <span className="campus_checkboxes clearfix2"><span className="cbox-selitem"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cam_0_020127231205661034" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cam="MCMSTiMCMST" id="cam_0_020127231205661034" className="mdl-checkbox__input cnf_cam_chk" defaultChecked="checked" /><span className="cbox-selitem-label">McMaster University</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></span></span>
                                        <div className="cbox-allnone cnf_campuses_allnone" style={{display: 'none'}}>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row noselect" style={{display: 'block'}}>
                                        <span className="cbox-row-title clearfix2">Session:</span>
                                        <div style={{clear: 'left'}} />
                                        <select className="cbox-select select_period" role="listbox" aria-label="Period"><option value selected="selected">All Sessions (1)</option><option value="2259-1">2025 Fall - Regular Academic</option></select>
                                      </div>
                                      <div className="cbox-row clearfix2 noselect selectAllNoneContainer cnf_modes" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Include classes that are:</span>
                                        <div style={{clear: 'both'}} />
                                        <span className="mode_checkboxes">
                                          <span className="cbox-selitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cb_online_5" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="cb_online_5" className="mdl-checkbox__input dynID" defaultChecked="checked" aria-label="COMPSCI 2C03 Data Structures and Algorithms" />
                                              <span className="cbox-selitem-label">Online</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </span>
                                          <span className="cbox-selitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cb_on_camp_5" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="cb_on_camp_5" className="mdl-checkbox__input dynID" defaultChecked="checked" aria-label="COMPSCI 2C03 Data Structures and Algorithms" />
                                              <span className="cbox-selitem-label">On Campus</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </span>
                                          <span className="cbox-selitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cb_lod_5" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="cb_lod_5" className="mdl-checkbox__input dynID" defaultChecked="checked" aria-label="COMPSCI 2C03 Data Structures and Algorithms" />
                                              <span className="cbox-selitem-label">Learn on demand</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </span>
                                        </span>
                                        <div className="cbox-allnone">
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row clearfix2 noselect cnf_classes selectAllNoneContainer" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Classes:</span>
                                        <span className="visuallyhidden" aria-label="The following checkboxes allow you to specify which classes you want to allow as possible options for your generated schedule results. If you want to get the detail of each class now, try adding only this course to the list of courses (or deselect every course except this one). This will generate one schedule result for each unique timetable option of this course. By navigating the legend of each schedule result, you will be able to examine the detail of each class of this course." />
                                        <div style={{clear: 'both'}} />
                                        <span className="class_checkboxes"><span className="cbox-selitem cbox-classitem"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="0-020127231205661034" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={0} id="0-020127231205661034" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T01</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down class">+</div></span><span className="cbox-selitem cbox-classitem"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="1-020127231205661034" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={1} id="1-020127231205661034" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T02</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down class">+</div></span><span className="cbox-selitem cbox-classitem"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="2-020127231205661034" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={2} id="2-020127231205661034" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T03</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down class">+</div></span><span className="cbox-selitem cbox-classitem"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="3-020127231205661034" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={3} id="3-020127231205661034" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C02 - TUT T05<span style={{color: '#CC0000'}}> (Closed)</span><span className="course_state" title>Enrolled</span></span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down class">+</div></span><span className="cbox-selitem cbox-classitem"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="4-020127231205661034" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={4} id="4-020127231205661034" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C02 - TUT T06</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down class">+</div></span><span className="cbox-selitem cbox-classitem"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="5-020127231205661034" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={5} id="5-020127231205661034" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C02 - TUT T07</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down class">+</div></span></span>
                                        <div className="cbox-allnone" style={{display: 'block'}}>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_subj_note" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Subject Notes:</span>
                                        <span className="cbox-row-content cnf_subj_note_desc" />
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_cattrs" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Course Attributes:</span>
                                        <span className="cbox-row-content cnf_cattr" />
                                      </div>
                                      <div className="cnf_custom_attrs" style={{display: 'none'}} />
                                      <div className="cbox-row clearfix2 cnf_class_notes" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Class Remarks:</span>
                                        <span className="cbox-row-content cnf_class_notes_desc" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div><div className="requirementDiv2 rbox" style={{}}>
                                <h4 className="visuallyhidden" aria-label="Selected course" />
                                <div className="rbox-header" style={{display: 'none'}}>
                                  <div className="rbox-header-cont clearfix2">
                                    <span className="rbox-wheader">
                                      <span className="wildcard-title requirementTitle1">Subject or Title </span>
                                      <span className="wildcard-title requirementTitle2" style={{display: 'none'}}>Catalog Number: </span>
                                      <span className="wildcard-title requirementTitle3" style={{display: 'none'}}>Attribute: </span>
                                    </span>
                                    <div className="clearfix2" style={{float: 'right'}}>
                                      <div className="reqInfo">Choose a course from the following list:</div>
                                      <div className="optionsSelect" />
                                    </div>
                                  </div>
                                </div>
                                <div className="cbox-select-wildcard" style={{display: 'none'}}>
                                  <div className="cbox cbox-unlocked bd2"> {/* Add 'roomy' to classes to stretch content, 'expanded' to pre-expand */}
                                    <table style={{width: '100%', padding: '0px', borderSpacing: '0px'}} className="cbox-expand-region">
                                      <tbody><tr>
                                          <td>
                                            <span className="select-title"><i className="fa fa-exclamation-triangle" /> Please select a course from the dropdown</span>
                                          </td>
                                          <td className="cbox-option" style={{width: '3%'}} onClick="event.stopPropagation();">
                                            <div className="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID" htmlFor="tipTrashWildX_1" data-upgraded=",MaterialTooltip">Drop this course...</div>
                                            <button aria-label="Remove class" className="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipTrashWildX_1" data-upgraded=",MaterialButton" style={{cursor: 'default'}} tabIndex={0}>
                                              <img className="cbox-trash-icon" src="test_loggedin_semesterselected_files/trash.svg" alt="trash can" style={{display: 'inline'}} />
                                              <img className="cbox-trash-icon-open" src="test_loggedin_semesterselected_files/trash_open.svg" alt="empty trash can" style={{display: 'none'}} />
                                              <i className="fa fa-undo cbox-trash-icon-undo" style={{display: 'none'}} />
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                  </div>
                                </div>
                                <div className="cbox-margin" style={{display: 'block'}}>
                                  <div className="cbox-toggle">
                                    <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect dynID is-checked mdl-js-ripple-effect--ignore-events is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                      <input type="checkbox" id="cnf_toggle_1" className="mdl-checkbox__input ignore_check dynID" defaultChecked="checked" aria-label="MATH 2LA3 Applications of Linear Algebra" style={{display: 'inline-block'}} />
                                      <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                  </div>
                                  <div className="cbox cbox-unlocked bd2"> {/* Add 'roomy' to classes to stretch content, 'expanded' to pre-expand */}
                                    <table style={{width: '100%', padding: '0px', borderSpacing: '0px'}} className="cbox-expand-region">
                                      <tbody><tr>
                                          <td className="cbox-codenumber">
                                            <div className="cbox-cn bc2">MATH<br />2LA3</div>
                                          </td>
                                          <td className="cbox-header">
                                            <div className="mdl-tooltip mdl-tooltip--right dynID" aria-hidden="true" htmlFor="tipCourseLinkX_1" data-upgraded=",MaterialTooltip">Courses with this symbol must be taken together</div>
                                            <span className="block_piece_indicator_cont dynID" id="tipCourseLinkX_1" style={{display: 'none'}} tabIndex={0}><span className="block_piece_indicator"><i className="fas fa-link" /></span></span>
                                            <span className="leftnclear cbox-title">Applications of Linear Algebra</span>
                                            <span className="cnf_req_state" style={{display: 'none'}}>Recommended</span>
                                            <span className="course_state" style={{display: 'inline'}}>Enrolled</span>
                                            <span className="leftnclear cbox-subtitle">
                                              {/* <span class="cnf_consider dynID" id="tipConsiderX">Considering 3 of 5 Classes</span>&nbsp;&nbsp; */}
                                              <span className="cnf_campus_info"> &nbsp; </span></span>
                                            <span className="cnf_dropdown cbox-dropdown-cont leftnclear" onkeydown="return avoidChange(event);" onkeypress="return avoidChange(event);" onkeyup="return avoidChange(event);" onClick="event.stopPropagation();">
                                              {/* <div class="dh_locker_hotspot" onClick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));">&nbsp;</div> */}
                                              {/* <img src="images/padlock.gif" style="vertical-align:middle;" class="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor"/> */}
                                              <select className="cbox-dropdown dropdownSelect cbox-dropdown-normal" aria-label="Please select a course section from this dropdown.  If selected, course schedules will only be generated containing the selected sections for a given course." style={{maxWidth: '201px'}}>
                                                <option value="kp_MCMST--2259_2105-2107-" selected="selected">Stay enrolled in LEC C01 - TUT T02</option><option value="dp_MCMST--2259_2105-2107-">Drop Course</option><option aria-label="Current selection " value="al">Try all classes (2)</option>
                                                {/* <option value="ig">Ignore this course</option>  */}
                                                <option value="ss" className="cnf_specific_option">Try specific classes (2/2)</option><option value="us_MCMST--2259_2105-2106-">LEC C01 - TUT T01</option><option value="us_MCMST--2259_2105-2107-">LEC C01 - TUT T02 (Closed)</option></select>
                                              <img src="test_loggedin_semesterselected_files/pin.png" style={{verticalAlign: 'middle', cursor: 'pointer', margin: '-2px 0px'}} className="dropdownPinImg" alt="Push Pin" title="Click to unpin course" />
                                              <img src="test_loggedin_semesterselected_files/padlock.gif" style={{verticalAlign: 'middle', margin: '-2px 0px', display: 'none'}} className="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor" />
                                              <div className="cnf_class_lock_tip mdl-tooltip mdl-tooltip--top dynID" aria-hidden="true" htmlFor="tipClsLockX_1" data-upgraded=",MaterialTooltip">Click
                                                to lock this class so that if this schedule is recommended to a 
                                                student, it will force the student to take the selected class.</div>
                                              <button aria-label="lock class" className="class_locker_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipClsLockX_1" onClick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));" style={{margin: '-6px 0px', display: 'none'}} data-upgraded=",MaterialButton" tabIndex={0}>
                                                <i className="class_unlocked fa fa-unlock-alt" style={{display: 'inline'}} />
                                                <i className="class_locked fa fa-lock" style={{display: 'none'}} />
                                              </button>
                                            </span>
                                          </td>
                                          <td className="cbox-option cnf_lock" style={{width: '3%', display: 'none'}} onClick="event.stopPropagation();">
                                            <div className="cnf_locker_tip mdl-tooltip mdl-tooltip--top dynID" htmlFor="tipLockX_1" data-upgraded=",MaterialTooltip">Click
                                              to lock this course so that if this schedule is recommended to a 
                                              student, it will force the student to include this course.</div>
                                            <button aria-label="lock course" className="cnf_locker_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipLockX_1" data-upgraded=",MaterialButton" tabIndex={0}>
                                              <i className="cnf_unlocked fa fa-unlock-alt" style={{display: 'inline'}} />
                                              <i className="cnf_locked fa fa-lock" style={{display: 'none'}} />
                                            </button>
                                          </td>
                                          <td className="cbox-option" style={{width: '3%'}} onClick="event.stopPropagation();">
                                            <div className="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID" htmlFor="tipTrashX_1" data-upgraded=",MaterialTooltip">Drop this course...</div>
                                            <button aria-label="Remove course" className="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipTrashX_1" data-upgraded=",MaterialButton" style={{cursor: 'default'}} tabIndex={0}>
                                              <img className="cbox-trash-icon" src="test_loggedin_semesterselected_files/trash.svg" alt="trash can" style={{display: 'inline'}} />
                                              <img className="cbox-trash-icon-open" src="test_loggedin_semesterselected_files/trash_open.svg" alt="empty trash can" style={{display: 'none'}} />
                                              <i className="fa fa-undo cbox-trash-icon-undo" style={{display: 'none'}} />
                                            </button>
                                          </td>
                                          <td className="cbox-option cbox-expander" style={{width: '3%'}}>
                                            <div className="mdl-tooltip mdl-tooltip--top dynID cnf_tip_expand" htmlFor="tipExpandX_1" data-upgraded=",MaterialTooltip">Expand detail on MATH 2LA3</div>
                                            <button aria-label="Expand course detail" className="mdl-button mdl-js-button mdl-button--icon dynID" id="tipExpandX_1" data-upgraded=",MaterialButton" tabIndex={0}>
                                              <i className="far fa-angle-down" />
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                    <div className="cbox-expansion" style={{display: 'none'}}>
                                      <div className="cbox-row clearfix2 cnf_desc" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Description:</span>
                                        <span className="cbox-row-content cnf_desc_desc">This course focuses 
                                          on applications of linear algebra. Topics include linear programming, 
                                          applications of matrix decomposition theorems, examples from data 
                                          science, singular value decomposition and applications to compression.<br />Three lectures, one tutorial; one term<br />Prerequisite(s): One of MATH 1AA3, 1LT3, 1NN3, 1XX3, 1ZB3, ARTSSCI 1D06 A/B, ISCI 1A24 A/B; and one of MATH 1B03, 1ZC3, 1ZZ5</span>
                                        <div style={{clear: 'both'}} />
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_reqs" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Requirements:</span>
                                        <span className="cbox-row-content cnf_req"><span className="cbox-row-content cnf_req">Refer to course Description</span></span> </div>
                                      <div className="core_names_cont2 cbox-row clearfix2" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Attributes:</span>
                                        <span className="core_names cbox-row-content" />
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_cross_listed" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Cross Listed Courses:</span>
                                        <span className="cbox-row-content cnf_cross_listed_desc" />
                                      </div>
                                      <div className="cbox-row clearfix2 noselect selectAllNoneContainer" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Campuses:</span>
                                        <div style={{clear: 'both'}} />
                                        <span className="campus_checkboxes clearfix2"><span className="cbox-selitem"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cam_0_008474021002909737" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cam="MCMSTiMCMST" id="cam_0_008474021002909737" className="mdl-checkbox__input cnf_cam_chk" defaultChecked="checked" /><span className="cbox-selitem-label">McMaster University</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></span></span>
                                        <div className="cbox-allnone cnf_campuses_allnone" style={{display: 'none'}}>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row noselect" style={{display: 'block'}}>
                                        <span className="cbox-row-title clearfix2">Session:</span>
                                        <div style={{clear: 'left'}} />
                                        <select className="cbox-select select_period" role="listbox" aria-label="Period"><option value selected="selected">All Sessions (1)</option><option value="2259-1">2025 Fall - Regular Academic</option></select>
                                      </div>
                                      <div className="cbox-row clearfix2 noselect selectAllNoneContainer cnf_modes" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Include classes that are:</span>
                                        <div style={{clear: 'both'}} />
                                        <span className="mode_checkboxes">
                                          <span className="cbox-selitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cb_online_1" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="cb_online_1" className="mdl-checkbox__input dynID" defaultChecked="checked" aria-label="MATH 2LA3 Applications of Linear Algebra" />
                                              <span className="cbox-selitem-label">Online</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </span>
                                          <span className="cbox-selitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cb_on_camp_1" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="cb_on_camp_1" className="mdl-checkbox__input dynID" defaultChecked="checked" aria-label="MATH 2LA3 Applications of Linear Algebra" />
                                              <span className="cbox-selitem-label">On Campus</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </span>
                                          <span className="cbox-selitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cb_lod_1" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="cb_lod_1" className="mdl-checkbox__input dynID" defaultChecked="checked" aria-label="MATH 2LA3 Applications of Linear Algebra" />
                                              <span className="cbox-selitem-label">Learn on demand</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </span>
                                        </span>
                                        <div className="cbox-allnone">
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row clearfix2 noselect cnf_classes selectAllNoneContainer" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Classes:</span>
                                        <span className="visuallyhidden" aria-label="The following checkboxes allow you to specify which classes you want to allow as possible options for your generated schedule results. If you want to get the detail of each class now, try adding only this course to the list of courses (or deselect every course except this one). This will generate one schedule result for each unique timetable option of this course. By navigating the legend of each schedule result, you will be able to examine the detail of each class of this course." />
                                        <div style={{clear: 'both'}} />
                                        <span className="class_checkboxes"><span className="cbox-selitem cbox-classitem cbox-faded"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="0-008474021002909737" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={0} id="0-008474021002909737" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T01</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down class instead">+</div></span><span className="cbox-selitem cbox-classitem"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="1-008474021002909737" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={1} id="1-008474021002909737" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T02<span style={{color: '#CC0000'}}> (Closed)</span><span className="course_state" title>Enrolled</span></span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Unpin class">-</div></span></span>
                                        <div className="cbox-allnone" style={{display: 'block'}}>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_subj_note" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Subject Notes:</span>
                                        <span className="cbox-row-content cnf_subj_note_desc" />
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_cattrs" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Course Attributes:</span>
                                        <span className="cbox-row-content cnf_cattr" />
                                      </div>
                                      <div className="cnf_custom_attrs" style={{display: 'none'}} />
                                      <div className="cbox-row clearfix2 cnf_class_notes" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Class Remarks:</span>
                                        <span className="cbox-row-content cnf_class_notes_desc" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div><div className="requirementDiv2 rbox" style={{}}>
                                <h4 className="visuallyhidden" aria-label="Selected course" />
                                <div className="rbox-header" style={{display: 'none'}}>
                                  <div className="rbox-header-cont clearfix2">
                                    <span className="rbox-wheader">
                                      <span className="wildcard-title requirementTitle1">Subject or Title </span>
                                      <span className="wildcard-title requirementTitle2" style={{display: 'none'}}>Catalog Number: </span>
                                      <span className="wildcard-title requirementTitle3" style={{display: 'none'}}>Attribute: </span>
                                    </span>
                                    <div className="clearfix2" style={{float: 'right'}}>
                                      <div className="reqInfo">Choose a course from the following list:</div>
                                      <div className="optionsSelect" />
                                    </div>
                                  </div>
                                </div>
                                <div className="cbox-select-wildcard" style={{display: 'none'}}>
                                  <div className="cbox cbox-unlocked bd3"> {/* Add 'roomy' to classes to stretch content, 'expanded' to pre-expand */}
                                    <table style={{width: '100%', padding: '0px', borderSpacing: '0px'}} className="cbox-expand-region">
                                      <tbody><tr>
                                          <td>
                                            <span className="select-title"><i className="fa fa-exclamation-triangle" /> Please select a course from the dropdown</span>
                                          </td>
                                          <td className="cbox-option" style={{width: '3%'}} onClick="event.stopPropagation();">
                                            <div className="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID" htmlFor="tipTrashWildX_2" data-upgraded=",MaterialTooltip">Drop this course...</div>
                                            <button aria-label="Remove class" className="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipTrashWildX_2" data-upgraded=",MaterialButton" style={{cursor: 'default'}} tabIndex={0}>
                                              <img className="cbox-trash-icon" src="test_loggedin_semesterselected_files/trash.svg" alt="trash can" style={{display: 'inline'}} />
                                              <img className="cbox-trash-icon-open" src="test_loggedin_semesterselected_files/trash_open.svg" alt="empty trash can" style={{display: 'none'}} />
                                              <i className="fa fa-undo cbox-trash-icon-undo" style={{display: 'none'}} />
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                  </div>
                                </div>
                                <div className="cbox-margin" style={{display: 'block'}}>
                                  <div className="cbox-toggle">
                                    <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect dynID is-checked mdl-js-ripple-effect--ignore-events is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                      <input type="checkbox" id="cnf_toggle_2" className="mdl-checkbox__input ignore_check dynID" defaultChecked="checked" aria-label="COMPSCI 2GA3 Computer Architecture" style={{display: 'inline-block'}} />
                                      <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                  </div>
                                  <div className="cbox cbox-unlocked bd3"> {/* Add 'roomy' to classes to stretch content, 'expanded' to pre-expand */}
                                    <table style={{width: '100%', padding: '0px', borderSpacing: '0px'}} className="cbox-expand-region">
                                      <tbody><tr>
                                          <td className="cbox-codenumber">
                                            <div className="cbox-cn bc3">COMPSCI<br />2GA3</div>
                                          </td>
                                          <td className="cbox-header">
                                            <div className="mdl-tooltip mdl-tooltip--right dynID" aria-hidden="true" htmlFor="tipCourseLinkX_2" data-upgraded=",MaterialTooltip">Courses with this symbol must be taken together</div>
                                            <span className="block_piece_indicator_cont dynID" id="tipCourseLinkX_2" style={{display: 'none'}} tabIndex={0}><span className="block_piece_indicator"><i className="fas fa-link" /></span></span>
                                            <span className="leftnclear cbox-title">Computer Architecture</span>
                                            <span className="cnf_req_state" style={{display: 'none'}}>Recommended</span>
                                            <span className="course_state" style={{display: 'inline'}}>Enrolled</span>
                                            <span className="leftnclear cbox-subtitle">
                                              {/* <span class="cnf_consider dynID" id="tipConsiderX">Considering 3 of 5 Classes</span>&nbsp;&nbsp; */}
                                              <span className="cnf_campus_info"> &nbsp; </span></span>
                                            <span className="cnf_dropdown cbox-dropdown-cont leftnclear" onkeydown="return avoidChange(event);" onkeypress="return avoidChange(event);" onkeyup="return avoidChange(event);" onClick="event.stopPropagation();">
                                              {/* <div class="dh_locker_hotspot" onClick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));">&nbsp;</div> */}
                                              {/* <img src="images/padlock.gif" style="vertical-align:middle;" class="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor"/> */}
                                              <select className="cbox-dropdown dropdownSelect cbox-dropdown-normal" aria-label="Please select a course section from this dropdown.  If selected, course schedules will only be generated containing the selected sections for a given course." style={{maxWidth: '180px'}}>
                                                <option value="kp_MCMST--2259_2951-2952-" selected="selected">Stay enrolled in LEC C01 - TUT T01</option><option value="dp_MCMST--2259_2951-2952-">Drop Course</option><option aria-label="Current selection " value="al">Try all classes (5)</option>
                                                {/* <option value="ig">Ignore this course</option>  */}
                                                <option value="ss" className="cnf_specific_option">Try specific classes (5/5)</option><option value="us_MCMST--2259_2951-2952-">LEC C01 - TUT T01 (Closed)</option><option value="us_MCMST--2259_2951-2953-">LEC C01 - TUT T02 or LEC C01 - TUT T04</option><option value="us_MCMST--2259_2951-2954-">LEC C01 - TUT T03</option><option value="us_MCMST--2259_2951-3781-">LEC C01 - TUT T05 (Closed)</option></select>
                                              <img src="test_loggedin_semesterselected_files/pin.png" style={{verticalAlign: 'middle', cursor: 'pointer', margin: '-2px 0px'}} className="dropdownPinImg" alt="Push Pin" title="Click to unpin course" />
                                              <img src="test_loggedin_semesterselected_files/padlock.gif" style={{verticalAlign: 'middle', margin: '-2px 0px', display: 'none'}} className="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor" />
                                              <div className="cnf_class_lock_tip mdl-tooltip mdl-tooltip--top dynID" aria-hidden="true" htmlFor="tipClsLockX_2" data-upgraded=",MaterialTooltip">Click
                                                to lock this class so that if this schedule is recommended to a 
                                                student, it will force the student to take the selected class.</div>
                                              <button aria-label="lock class" className="class_locker_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipClsLockX_2" onClick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));" style={{margin: '-6px 0px', display: 'none'}} data-upgraded=",MaterialButton" tabIndex={0}>
                                                <i className="class_unlocked fa fa-unlock-alt" style={{display: 'inline'}} />
                                                <i className="class_locked fa fa-lock" style={{display: 'none'}} />
                                              </button>
                                            </span>
                                          </td>
                                          <td className="cbox-option cnf_lock" style={{width: '3%', display: 'none'}} onClick="event.stopPropagation();">
                                            <div className="cnf_locker_tip mdl-tooltip mdl-tooltip--top dynID" htmlFor="tipLockX_2" data-upgraded=",MaterialTooltip">Click
                                              to lock this course so that if this schedule is recommended to a 
                                              student, it will force the student to include this course.</div>
                                            <button aria-label="lock course" className="cnf_locker_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipLockX_2" data-upgraded=",MaterialButton" tabIndex={0}>
                                              <i className="cnf_unlocked fa fa-unlock-alt" style={{display: 'inline'}} />
                                              <i className="cnf_locked fa fa-lock" style={{display: 'none'}} />
                                            </button>
                                          </td>
                                          <td className="cbox-option" style={{width: '3%'}} onClick="event.stopPropagation();">
                                            <div className="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID" htmlFor="tipTrashX_2" data-upgraded=",MaterialTooltip">Drop this course...</div>
                                            <button aria-label="Remove course" className="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipTrashX_2" data-upgraded=",MaterialButton" style={{cursor: 'default'}} tabIndex={0}>
                                              <img className="cbox-trash-icon" src="test_loggedin_semesterselected_files/trash.svg" alt="trash can" style={{display: 'inline'}} />
                                              <img className="cbox-trash-icon-open" src="test_loggedin_semesterselected_files/trash_open.svg" alt="empty trash can" style={{display: 'none'}} />
                                              <i className="fa fa-undo cbox-trash-icon-undo" style={{display: 'none'}} />
                                            </button>
                                          </td>
                                          <td className="cbox-option cbox-expander" style={{width: '3%'}}>
                                            <div className="mdl-tooltip mdl-tooltip--top dynID cnf_tip_expand" htmlFor="tipExpandX_2" data-upgraded=",MaterialTooltip">Expand detail on COMPSCI 2GA3</div>
                                            <button aria-label="Expand course detail" className="mdl-button mdl-js-button mdl-button--icon dynID" id="tipExpandX_2" data-upgraded=",MaterialButton" tabIndex={0}>
                                              <i className="far fa-angle-down" />
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                    <div className="cbox-expansion" style={{display: 'none'}}>
                                      <div className="cbox-row clearfix2 cnf_desc" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Description:</span>
                                        <span className="cbox-row-content cnf_desc_desc">Introduction to logic
                                          gates, computer arithmetic, instruction-set architecture, assembly 
                                          programming, translation of high-level languages into assembly. Computer
                                          system organization: datapath and control, pipelining, memory 
                                          hierarchies, I/O systems; measures of performance.<br />Three lectures, one tutorial, (one hour); first term; may be offered also in the second term<br />Prerequisite(s): One of the following:<br />
                                          • COMPSCI 1XC3 and 1DM3 and registration in any Computer Science 
                                          program (see Department Note 3 in the course listing) or in the Minor in
                                          Computer Science.<br />Antirequisite(s): COMPENG 3DR4, 4DM4, SFWRENG 2GA3, 3GA3</span>
                                        <div style={{clear: 'both'}} />
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_reqs" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Requirements:</span>
                                        <span className="cbox-row-content cnf_req"><span className="cbox-row-content cnf_req">Refer to course Description</span></span> </div>
                                      <div className="core_names_cont2 cbox-row clearfix2" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Attributes:</span>
                                        <span className="core_names cbox-row-content" />
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_cross_listed" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Cross Listed Courses:</span>
                                        <span className="cbox-row-content cnf_cross_listed_desc" />
                                      </div>
                                      <div className="cbox-row clearfix2 noselect selectAllNoneContainer" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Campuses:</span>
                                        <div style={{clear: 'both'}} />
                                        <span className="campus_checkboxes clearfix2"><span className="cbox-selitem"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cam_0_029278541719467566" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cam="MCMSTiMCMST" id="cam_0_029278541719467566" className="mdl-checkbox__input cnf_cam_chk" defaultChecked="checked" /><span className="cbox-selitem-label">McMaster University</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></span></span>
                                        <div className="cbox-allnone cnf_campuses_allnone" style={{display: 'none'}}>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row noselect" style={{display: 'block'}}>
                                        <span className="cbox-row-title clearfix2">Session:</span>
                                        <div style={{clear: 'left'}} />
                                        <select className="cbox-select select_period" role="listbox" aria-label="Period"><option value selected="selected">All Sessions (1)</option><option value="2259-1">2025 Fall - Regular Academic</option></select>
                                      </div>
                                      <div className="cbox-row clearfix2 noselect selectAllNoneContainer cnf_modes" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Include classes that are:</span>
                                        <div style={{clear: 'both'}} />
                                        <span className="mode_checkboxes">
                                          <span className="cbox-selitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cb_online_2" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="cb_online_2" className="mdl-checkbox__input dynID" defaultChecked="checked" aria-label="COMPSCI 2GA3 Computer Architecture" />
                                              <span className="cbox-selitem-label">Online</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </span>
                                          <span className="cbox-selitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cb_on_camp_2" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="cb_on_camp_2" className="mdl-checkbox__input dynID" defaultChecked="checked" aria-label="COMPSCI 2GA3 Computer Architecture" />
                                              <span className="cbox-selitem-label">On Campus</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </span>
                                          <span className="cbox-selitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cb_lod_2" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="cb_lod_2" className="mdl-checkbox__input dynID" defaultChecked="checked" aria-label="COMPSCI 2GA3 Computer Architecture" />
                                              <span className="cbox-selitem-label">Learn on demand</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </span>
                                        </span>
                                        <div className="cbox-allnone">
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row clearfix2 noselect cnf_classes selectAllNoneContainer" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Classes:</span>
                                        <span className="visuallyhidden" aria-label="The following checkboxes allow you to specify which classes you want to allow as possible options for your generated schedule results. If you want to get the detail of each class now, try adding only this course to the list of courses (or deselect every course except this one). This will generate one schedule result for each unique timetable option of this course. By navigating the legend of each schedule result, you will be able to examine the detail of each class of this course." />
                                        <div style={{clear: 'both'}} />
                                        <span className="class_checkboxes"><span className="cbox-selitem cbox-classitem"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="0-029278541719467566" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={0} id="0-029278541719467566" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T01<span style={{color: '#CC0000'}}> (Closed)</span><span className="course_state" title>Enrolled</span></span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Unpin class">-</div></span><span className="cbox-selitem cbox-classitem cbox-faded"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="1-029278541719467566" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={1} id="1-029278541719467566" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T02</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down class instead">+</div></span><span className="cbox-selitem cbox-classitem cbox-faded"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="3-029278541719467566" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={3} id="3-029278541719467566" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T03</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down class instead">+</div></span><span className="cbox-selitem cbox-classitem cbox-faded"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="2-029278541719467566" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={2} id="2-029278541719467566" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T04</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down class instead">+</div></span><span className="cbox-selitem cbox-classitem cbox-faded"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="4-029278541719467566" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={4} id="4-029278541719467566" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T05<span style={{color: '#CC0000'}}> (Closed)</span></span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down class instead">+</div></span></span>
                                        <div className="cbox-allnone" style={{display: 'block'}}>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_subj_note" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Subject Notes:</span>
                                        <span className="cbox-row-content cnf_subj_note_desc" />
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_cattrs" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Course Attributes:</span>
                                        <span className="cbox-row-content cnf_cattr" />
                                      </div>
                                      <div className="cnf_custom_attrs" style={{display: 'none'}} />
                                      <div className="cbox-row clearfix2 cnf_class_notes" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Class Remarks:</span>
                                        <span className="cbox-row-content cnf_class_notes_desc" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div><div className="requirementDiv2 rbox" style={{}}>
                                <h4 className="visuallyhidden" aria-label="Selected course" />
                                <div className="rbox-header" style={{display: 'none'}}>
                                  <div className="rbox-header-cont clearfix2">
                                    <span className="rbox-wheader">
                                      <span className="wildcard-title requirementTitle1">Subject or Title </span>
                                      <span className="wildcard-title requirementTitle2" style={{display: 'none'}}>Catalog Number: </span>
                                      <span className="wildcard-title requirementTitle3" style={{display: 'none'}}>Attribute: </span>
                                    </span>
                                    <div className="clearfix2" style={{float: 'right'}}>
                                      <div className="reqInfo">Choose a course from the following list:</div>
                                      <div className="optionsSelect" />
                                    </div>
                                  </div>
                                </div>
                                <div className="cbox-select-wildcard" style={{display: 'none'}}>
                                  <div className="cbox cbox-unlocked bd4"> {/* Add 'roomy' to classes to stretch content, 'expanded' to pre-expand */}
                                    <table style={{width: '100%', padding: '0px', borderSpacing: '0px'}} className="cbox-expand-region">
                                      <tbody><tr>
                                          <td>
                                            <span className="select-title"><i className="fa fa-exclamation-triangle" /> Please select a course from the dropdown</span>
                                          </td>
                                          <td className="cbox-option" style={{width: '3%'}} onClick="event.stopPropagation();">
                                            <div className="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID" htmlFor="tipTrashWildX_3" data-upgraded=",MaterialTooltip">Drop this course...</div>
                                            <button aria-label="Remove class" className="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipTrashWildX_3" data-upgraded=",MaterialButton" style={{cursor: 'default'}} tabIndex={0}>
                                              <img className="cbox-trash-icon" src="test_loggedin_semesterselected_files/trash.svg" alt="trash can" style={{display: 'inline'}} />
                                              <img className="cbox-trash-icon-open" src="test_loggedin_semesterselected_files/trash_open.svg" alt="empty trash can" style={{display: 'none'}} />
                                              <i className="fa fa-undo cbox-trash-icon-undo" style={{display: 'none'}} />
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                  </div>
                                </div>
                                <div className="cbox-margin" style={{display: 'block'}}>
                                  <div className="cbox-toggle">
                                    <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect dynID is-checked mdl-js-ripple-effect--ignore-events is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                      <input type="checkbox" id="cnf_toggle_3" className="mdl-checkbox__input ignore_check dynID" defaultChecked="checked" aria-label="COMPSCI 2LC3 Logical Reasoning for Computer Science" style={{display: 'inline-block'}} />
                                      <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                  </div>
                                  <div className="cbox cbox-unlocked bd4"> {/* Add 'roomy' to classes to stretch content, 'expanded' to pre-expand */}
                                    <table style={{width: '100%', padding: '0px', borderSpacing: '0px'}} className="cbox-expand-region">
                                      <tbody><tr>
                                          <td className="cbox-codenumber">
                                            <div className="cbox-cn bc4">COMPSCI<br />2LC3</div>
                                          </td>
                                          <td className="cbox-header">
                                            <div className="mdl-tooltip mdl-tooltip--right dynID" aria-hidden="true" htmlFor="tipCourseLinkX_3" data-upgraded=",MaterialTooltip">Courses with this symbol must be taken together</div>
                                            <span className="block_piece_indicator_cont dynID" id="tipCourseLinkX_3" style={{display: 'none'}} tabIndex={0}><span className="block_piece_indicator"><i className="fas fa-link" /></span></span>
                                            <span className="leftnclear cbox-title">Logical Reasoning for Computer Science</span>
                                            <span className="cnf_req_state" style={{display: 'none'}}>Recommended</span>
                                            <span className="course_state" style={{display: 'inline'}}>Enrolled</span>
                                            <span className="leftnclear cbox-subtitle">
                                              {/* <span class="cnf_consider dynID" id="tipConsiderX">Considering 3 of 5 Classes</span>&nbsp;&nbsp; */}
                                              <span className="cnf_campus_info"> &nbsp; </span></span>
                                            <span className="cnf_dropdown cbox-dropdown-cont leftnclear" onkeydown="return avoidChange(event);" onkeypress="return avoidChange(event);" onkeyup="return avoidChange(event);" onClick="event.stopPropagation();">
                                              {/* <div class="dh_locker_hotspot" onClick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));">&nbsp;</div> */}
                                              {/* <img src="images/padlock.gif" style="vertical-align:middle;" class="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor"/> */}
                                              <select className="cbox-dropdown dropdownSelect cbox-dropdown-normal" aria-label="Please select a course section from this dropdown.  If selected, course schedules will only be generated containing the selected sections for a given course." style={{maxWidth: '180px'}}>
                                                <option value="kp_MCMST--2259_3484-3485-" selected="selected">Stay enrolled in LEC C01 - TUT T01</option><option value="dp_MCMST--2259_3484-3485-">Drop Course</option><option aria-label="Current selection " value="al">Try all classes (7)</option>
                                                {/* <option value="ig">Ignore this course</option>  */}
                                                <option value="ss" className="cnf_specific_option">Try specific classes (7/7)</option><option value="us_MCMST--2259_3484-3485-">LEC C01 - TUT T01 or LEC C01 - TUT T03 (Closed)</option><option value="us_MCMST--2259_3484-3486-">LEC C01 - TUT T02</option><option value="us_MCMST--2259_3484-3488-">LEC C01 - TUT T04</option><option value="us_MCMST--2259_3484-3669-">LEC C01 - TUT T05 or L... LEC C01 - TUT T07</option></select>
                                              <img src="test_loggedin_semesterselected_files/pin.png" style={{verticalAlign: 'middle', cursor: 'pointer', margin: '-2px 0px'}} className="dropdownPinImg" alt="Push Pin" title="Click to unpin course" />
                                              <img src="test_loggedin_semesterselected_files/padlock.gif" style={{verticalAlign: 'middle', margin: '-2px 0px', display: 'none'}} className="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor" />
                                              <div className="cnf_class_lock_tip mdl-tooltip mdl-tooltip--top dynID" aria-hidden="true" htmlFor="tipClsLockX_3" data-upgraded=",MaterialTooltip">Click
                                                to lock this class so that if this schedule is recommended to a 
                                                student, it will force the student to take the selected class.</div>
                                              <button aria-label="lock class" className="class_locker_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipClsLockX_3" onClick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));" style={{margin: '-6px 0px', display: 'none'}} data-upgraded=",MaterialButton" tabIndex={0}>
                                                <i className="class_unlocked fa fa-unlock-alt" style={{display: 'inline'}} />
                                                <i className="class_locked fa fa-lock" style={{display: 'none'}} />
                                              </button>
                                            </span>
                                          </td>
                                          <td className="cbox-option cnf_lock" style={{width: '3%', display: 'none'}} onClick="event.stopPropagation();">
                                            <div className="cnf_locker_tip mdl-tooltip mdl-tooltip--top dynID" htmlFor="tipLockX_3" data-upgraded=",MaterialTooltip">Click
                                              to lock this course so that if this schedule is recommended to a 
                                              student, it will force the student to include this course.</div>
                                            <button aria-label="lock course" className="cnf_locker_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipLockX_3" data-upgraded=",MaterialButton" tabIndex={0}>
                                              <i className="cnf_unlocked fa fa-unlock-alt" style={{display: 'inline'}} />
                                              <i className="cnf_locked fa fa-lock" style={{display: 'none'}} />
                                            </button>
                                          </td>
                                          <td className="cbox-option" style={{width: '3%'}} onClick="event.stopPropagation();">
                                            <div className="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID" htmlFor="tipTrashX_3" data-upgraded=",MaterialTooltip">Drop this course...</div>
                                            <button aria-label="Remove course" className="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipTrashX_3" data-upgraded=",MaterialButton" style={{cursor: 'default'}} tabIndex={0}>
                                              <img className="cbox-trash-icon" src="test_loggedin_semesterselected_files/trash.svg" alt="trash can" style={{display: 'inline'}} />
                                              <img className="cbox-trash-icon-open" src="test_loggedin_semesterselected_files/trash_open.svg" alt="empty trash can" style={{display: 'none'}} />
                                              <i className="fa fa-undo cbox-trash-icon-undo" style={{display: 'none'}} />
                                            </button>
                                          </td>
                                          <td className="cbox-option cbox-expander" style={{width: '3%'}}>
                                            <div className="mdl-tooltip mdl-tooltip--top dynID cnf_tip_expand" htmlFor="tipExpandX_3" data-upgraded=",MaterialTooltip">Expand detail on COMPSCI 2LC3</div>
                                            <button aria-label="Expand course detail" className="mdl-button mdl-js-button mdl-button--icon dynID" id="tipExpandX_3" data-upgraded=",MaterialButton" tabIndex={0}>
                                              <i className="far fa-angle-down" />
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                    <div className="cbox-expansion" style={{display: 'none'}}>
                                      <div className="cbox-row clearfix2 cnf_desc" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Description:</span>
                                        <span className="cbox-row-content cnf_desc_desc">Introduction to logic
                                          and proof techniques for practical reasoning: propositional logic, 
                                          predicate logic, structural induction; rigorous proofs in discrete 
                                          mathematics and programming.<br />Three lectures, one tutorial (two hours); first term; may be offered also in the second term<br />Prerequisite(s):
                                          COMPSCI 1DM3, 1JC3; one of COMPSCI 1MD3, 1XC3, 1XD3, MATH 1MP3 and 
                                          registration in any Computer Science program (see Department Note 3 in 
                                          the course listing) or in the Minor in Computer Science.<br />Antirequisite(s): COMPSCI 2DM3, SFWRENG 2DM3</span>
                                        <div style={{clear: 'both'}} />
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_reqs" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Requirements:</span>
                                        <span className="cbox-row-content cnf_req"><span className="cbox-row-content cnf_req">Refer to course Description</span></span> </div>
                                      <div className="core_names_cont2 cbox-row clearfix2" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Attributes:</span>
                                        <span className="core_names cbox-row-content" />
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_cross_listed" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Cross Listed Courses:</span>
                                        <span className="cbox-row-content cnf_cross_listed_desc" />
                                      </div>
                                      <div className="cbox-row clearfix2 noselect selectAllNoneContainer" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Campuses:</span>
                                        <div style={{clear: 'both'}} />
                                        <span className="campus_checkboxes clearfix2"><span className="cbox-selitem"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cam_0_06062323597873929" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cam="MCMSTiMCMST" id="cam_0_06062323597873929" className="mdl-checkbox__input cnf_cam_chk" defaultChecked="checked" /><span className="cbox-selitem-label">McMaster University</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></span></span>
                                        <div className="cbox-allnone cnf_campuses_allnone" style={{display: 'none'}}>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row noselect" style={{display: 'block'}}>
                                        <span className="cbox-row-title clearfix2">Session:</span>
                                        <div style={{clear: 'left'}} />
                                        <select className="cbox-select select_period" role="listbox" aria-label="Period"><option value selected="selected">All Sessions (1)</option><option value="2259-1">2025 Fall - Regular Academic</option></select>
                                      </div>
                                      <div className="cbox-row clearfix2 noselect selectAllNoneContainer cnf_modes" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Include classes that are:</span>
                                        <div style={{clear: 'both'}} />
                                        <span className="mode_checkboxes">
                                          <span className="cbox-selitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cb_online_3" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="cb_online_3" className="mdl-checkbox__input dynID" defaultChecked="checked" aria-label="COMPSCI 2LC3 Logical Reasoning for Computer Science" />
                                              <span className="cbox-selitem-label">Online</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </span>
                                          <span className="cbox-selitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cb_on_camp_3" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="cb_on_camp_3" className="mdl-checkbox__input dynID" defaultChecked="checked" aria-label="COMPSCI 2LC3 Logical Reasoning for Computer Science" />
                                              <span className="cbox-selitem-label">On Campus</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </span>
                                          <span className="cbox-selitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cb_lod_3" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="cb_lod_3" className="mdl-checkbox__input dynID" defaultChecked="checked" aria-label="COMPSCI 2LC3 Logical Reasoning for Computer Science" />
                                              <span className="cbox-selitem-label">Learn on demand</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </span>
                                        </span>
                                        <div className="cbox-allnone">
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row clearfix2 noselect cnf_classes selectAllNoneContainer" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Classes:</span>
                                        <span className="visuallyhidden" aria-label="The following checkboxes allow you to specify which classes you want to allow as possible options for your generated schedule results. If you want to get the detail of each class now, try adding only this course to the list of courses (or deselect every course except this one). This will generate one schedule result for each unique timetable option of this course. By navigating the legend of each schedule result, you will be able to examine the detail of each class of this course." />
                                        <div style={{clear: 'both'}} />
                                        <span className="class_checkboxes"><span className="cbox-selitem cbox-classitem"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="0-06062323597873929" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={0} id="0-06062323597873929" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T01<span style={{color: '#CC0000'}}> (Closed)</span><span className="course_state" title>Enrolled</span></span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Unpin classes at this meeting time">-</div></span><span className="cbox-selitem cbox-classitem cbox-faded"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="2-06062323597873929" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={2} id="2-06062323597873929" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T02</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down classes at this meeting time instead">+</div></span><span className="cbox-selitem cbox-classitem cbox-faded"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="1-06062323597873929" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={1} id="1-06062323597873929" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T03<span style={{color: '#CC0000'}}> (Closed)</span></span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Unpin classes at this meeting time">-</div></span><span className="cbox-selitem cbox-classitem cbox-faded"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="3-06062323597873929" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={3} id="3-06062323597873929" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T04</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down classes at this meeting time instead">+</div></span><span className="cbox-selitem cbox-classitem cbox-faded"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="4-06062323597873929" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={4} id="4-06062323597873929" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T05</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down classes at this meeting time instead">+</div></span><span className="cbox-selitem cbox-classitem cbox-faded"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="5-06062323597873929" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={5} id="5-06062323597873929" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T06</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down classes at this meeting time instead">+</div></span><span className="cbox-selitem cbox-classitem cbox-faded"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="6-06062323597873929" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={6} id="6-06062323597873929" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T07</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down classes at this meeting time instead">+</div></span></span>
                                        <div className="cbox-allnone" style={{display: 'block'}}>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_subj_note" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Subject Notes:</span>
                                        <span className="cbox-row-content cnf_subj_note_desc" />
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_cattrs" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Course Attributes:</span>
                                        <span className="cbox-row-content cnf_cattr" />
                                      </div>
                                      <div className="cnf_custom_attrs" style={{display: 'none'}} />
                                      <div className="cbox-row clearfix2 cnf_class_notes" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Class Remarks:</span>
                                        <span className="cbox-row-content cnf_class_notes_desc" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div><div className="requirementDiv2 rbox" style={{}}>
                                <h4 className="visuallyhidden" aria-label="Selected course" />
                                <div className="rbox-header" style={{display: 'none'}}>
                                  <div className="rbox-header-cont clearfix2">
                                    <span className="rbox-wheader">
                                      <span className="wildcard-title requirementTitle1">Subject or Title </span>
                                      <span className="wildcard-title requirementTitle2" style={{display: 'none'}}>Catalog Number: </span>
                                      <span className="wildcard-title requirementTitle3" style={{display: 'none'}}>Attribute: </span>
                                    </span>
                                    <div className="clearfix2" style={{float: 'right'}}>
                                      <div className="reqInfo">Choose a course from the following list:</div>
                                      <div className="optionsSelect" />
                                    </div>
                                  </div>
                                </div>
                                <div className="cbox-select-wildcard" style={{display: 'none'}}>
                                  <div className="cbox cbox-unlocked bd5"> {/* Add 'roomy' to classes to stretch content, 'expanded' to pre-expand */}
                                    <table style={{width: '100%', padding: '0px', borderSpacing: '0px'}} className="cbox-expand-region">
                                      <tbody><tr>
                                          <td>
                                            <span className="select-title"><i className="fa fa-exclamation-triangle" /> Please select a course from the dropdown</span>
                                          </td>
                                          <td className="cbox-option" style={{width: '3%'}} onClick="event.stopPropagation();">
                                            <div className="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID" htmlFor="tipTrashWildX_4" data-upgraded=",MaterialTooltip">Drop this course...</div>
                                            <button aria-label="Remove class" className="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipTrashWildX_4" data-upgraded=",MaterialButton" style={{cursor: 'default'}} tabIndex={0}>
                                              <img className="cbox-trash-icon" src="test_loggedin_semesterselected_files/trash.svg" alt="trash can" style={{display: 'inline'}} />
                                              <img className="cbox-trash-icon-open" src="test_loggedin_semesterselected_files/trash_open.svg" alt="empty trash can" style={{display: 'none'}} />
                                              <i className="fa fa-undo cbox-trash-icon-undo" style={{display: 'none'}} />
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                  </div>
                                </div>
                                <div className="cbox-margin" style={{display: 'block'}}>
                                  <div className="cbox-toggle">
                                    <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect dynID is-checked mdl-js-ripple-effect--ignore-events is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                      <input type="checkbox" id="cnf_toggle_4" className="mdl-checkbox__input ignore_check dynID" defaultChecked="checked" aria-label="COMPSCI 2ME3 Introduction to Software Development" style={{display: 'inline-block'}} />
                                      <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                  </div>
                                  <div className="cbox cbox-unlocked bd5"> {/* Add 'roomy' to classes to stretch content, 'expanded' to pre-expand */}
                                    <table style={{width: '100%', padding: '0px', borderSpacing: '0px'}} className="cbox-expand-region">
                                      <tbody><tr>
                                          <td className="cbox-codenumber">
                                            <div className="cbox-cn bc5">COMPSCI<br />2ME3</div>
                                          </td>
                                          <td className="cbox-header">
                                            <div className="mdl-tooltip mdl-tooltip--right dynID" aria-hidden="true" htmlFor="tipCourseLinkX_4" data-upgraded=",MaterialTooltip">Courses with this symbol must be taken together</div>
                                            <span className="block_piece_indicator_cont dynID" id="tipCourseLinkX_4" style={{display: 'none'}} tabIndex={0}><span className="block_piece_indicator"><i className="fas fa-link" /></span></span>
                                            <span className="leftnclear cbox-title">Introduction to Software Development</span>
                                            <span className="cnf_req_state" style={{display: 'none'}}>Recommended</span>
                                            <span className="course_state" style={{display: 'inline'}}>Enrolled</span>
                                            <span className="leftnclear cbox-subtitle">
                                              {/* <span class="cnf_consider dynID" id="tipConsiderX">Considering 3 of 5 Classes</span>&nbsp;&nbsp; */}
                                              <span className="cnf_campus_info"> &nbsp; </span></span>
                                            <span className="cnf_dropdown cbox-dropdown-cont leftnclear" onkeydown="return avoidChange(event);" onkeypress="return avoidChange(event);" onkeyup="return avoidChange(event);" onClick="event.stopPropagation();">
                                              {/* <div class="dh_locker_hotspot" onClick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));">&nbsp;</div> */}
                                              {/* <img src="images/padlock.gif" style="vertical-align:middle;" class="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor"/> */}
                                              <select className="cbox-dropdown dropdownSelect cbox-dropdown-normal" aria-label="Please select a course section from this dropdown.  If selected, course schedules will only be generated containing the selected sections for a given course." style={{maxWidth: '180px'}}>
                                                <option value="kp_MCMST--2259_3489-3490-" selected="selected">Stay enrolled in LEC C01 - TUT T01</option><option value="dp_MCMST--2259_3489-3490-">Drop Course</option><option aria-label="Current selection " value="al">Try all classes (5)</option>
                                                {/* <option value="ig">Ignore this course</option>  */}
                                                <option value="ss" className="cnf_specific_option">Try specific classes (5/5)</option><option value="us_MCMST--2259_3489-3490-">LEC C01 - TUT T01 or LEC C01 - TUT T02</option><option value="us_MCMST--2259_3489-3670-">LEC C01 - TUT T03</option><option value="us_MCMST--2259_3489-3783-">LEC C01 - TUT T04 or LEC C01 - TUT T05</option></select>
                                              <img src="test_loggedin_semesterselected_files/pin.png" style={{verticalAlign: 'middle', cursor: 'pointer', margin: '-2px 0px'}} className="dropdownPinImg" alt="Push Pin" title="Click to unpin course" />
                                              <img src="test_loggedin_semesterselected_files/padlock.gif" style={{verticalAlign: 'middle', margin: '-2px 0px', display: 'none'}} className="dropdownLockImg" alt="Padlock" title="The specific class you are to take for this course has been assigned to you by an advisor" />
                                              <div className="cnf_class_lock_tip mdl-tooltip mdl-tooltip--top dynID" aria-hidden="true" htmlFor="tipClsLockX_4" data-upgraded=",MaterialTooltip">Click
                                                to lock this class so that if this schedule is recommended to a 
                                                student, it will force the student to take the selected class.</div>
                                              <button aria-label="lock class" className="class_locker_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipClsLockX_4" onClick="UU.caseToggleDropLock($(this).parents('.requirementDiv2').data('cnfid'));" style={{margin: '-6px 0px', display: 'none'}} data-upgraded=",MaterialButton" tabIndex={0}>
                                                <i className="class_unlocked fa fa-unlock-alt" style={{display: 'inline'}} />
                                                <i className="class_locked fa fa-lock" style={{display: 'none'}} />
                                              </button>
                                            </span>
                                          </td>
                                          <td className="cbox-option cnf_lock" style={{width: '3%', display: 'none'}} onClick="event.stopPropagation();">
                                            <div className="cnf_locker_tip mdl-tooltip mdl-tooltip--top dynID" htmlFor="tipLockX_4" data-upgraded=",MaterialTooltip">Click
                                              to lock this course so that if this schedule is recommended to a 
                                              student, it will force the student to include this course.</div>
                                            <button aria-label="lock course" className="cnf_locker_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipLockX_4" data-upgraded=",MaterialButton" tabIndex={0}>
                                              <i className="cnf_unlocked fa fa-unlock-alt" style={{display: 'inline'}} />
                                              <i className="cnf_locked fa fa-lock" style={{display: 'none'}} />
                                            </button>
                                          </td>
                                          <td className="cbox-option" style={{width: '3%'}} onClick="event.stopPropagation();">
                                            <div className="cnf_trash_tip mdl-tooltip mdl-tooltip--top dynID" htmlFor="tipTrashX_4" data-upgraded=",MaterialTooltip">Drop this course...</div>
                                            <button aria-label="Remove course" className="cnf_trash_button mdl-button mdl-js-button mdl-button--icon dynID" id="tipTrashX_4" data-upgraded=",MaterialButton" style={{cursor: 'default'}} tabIndex={0}>
                                              <img className="cbox-trash-icon" src="test_loggedin_semesterselected_files/trash.svg" alt="trash can" style={{display: 'inline'}} />
                                              <img className="cbox-trash-icon-open" src="test_loggedin_semesterselected_files/trash_open.svg" alt="empty trash can" style={{display: 'none'}} />
                                              <i className="fa fa-undo cbox-trash-icon-undo" style={{display: 'none'}} />
                                            </button>
                                          </td>
                                          <td className="cbox-option cbox-expander" style={{width: '3%'}}>
                                            <div className="mdl-tooltip mdl-tooltip--top dynID cnf_tip_expand" htmlFor="tipExpandX_4" data-upgraded=",MaterialTooltip">Expand detail on COMPSCI 2ME3</div>
                                            <button aria-label="Expand course detail" className="mdl-button mdl-js-button mdl-button--icon dynID" id="tipExpandX_4" data-upgraded=",MaterialButton" tabIndex={0}>
                                              <i className="far fa-angle-down" />
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                    <div className="cbox-expansion" style={{display: 'none'}}>
                                      <div className="cbox-row clearfix2 cnf_desc" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Description:</span>
                                        <span className="cbox-row-content cnf_desc_desc">Classes and 
                                          inheritance, class invariants, interface specifications; object-oriented
                                          design patterns; exception handling; tools for interface documentation,
                                          testing, program analysis; requirements documentation; quality 
                                          attributes; development models.<br />Three lectures one tutorial (two hours); first term; may be offered also in the second term<br />Prerequisite(s): <br />
                                          • COMPSCI 1XC3 or 1XD3, and registration in any Computer Science 
                                          program (see Department Note 3 in the course listing) or in the Minor in
                                          Computer Science<br />Co-requisite(s): COMPSCI 2LC3<br />Antirequisite(s): SFWRENG 2AA4, SFWRENG 3K04, MECHTRON 3K04</span>
                                        <div style={{clear: 'both'}} />
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_reqs" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Requirements:</span>
                                        <span className="cbox-row-content cnf_req"><span className="cbox-row-content cnf_req">Refer to course Description</span></span> </div>
                                      <div className="core_names_cont2 cbox-row clearfix2" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Attributes:</span>
                                        <span className="core_names cbox-row-content" />
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_cross_listed" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Cross Listed Courses:</span>
                                        <span className="cbox-row-content cnf_cross_listed_desc" />
                                      </div>
                                      <div className="cbox-row clearfix2 noselect selectAllNoneContainer" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Campuses:</span>
                                        <div style={{clear: 'both'}} />
                                        <span className="campus_checkboxes clearfix2"><span className="cbox-selitem"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cam_0_040005670398627335" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cam="MCMSTiMCMST" id="cam_0_040005670398627335" className="mdl-checkbox__input cnf_cam_chk" defaultChecked="checked" /><span className="cbox-selitem-label">McMaster University</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label></span></span>
                                        <div className="cbox-allnone cnf_campuses_allnone" style={{display: 'none'}}>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row noselect" style={{display: 'block'}}>
                                        <span className="cbox-row-title clearfix2">Session:</span>
                                        <div style={{clear: 'left'}} />
                                        <select className="cbox-select select_period" role="listbox" aria-label="Period"><option value selected="selected">All Sessions (1)</option><option value="2259-1">2025 Fall - Regular Academic</option></select>
                                      </div>
                                      <div className="cbox-row clearfix2 noselect selectAllNoneContainer cnf_modes" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Include classes that are:</span>
                                        <div style={{clear: 'both'}} />
                                        <span className="mode_checkboxes">
                                          <span className="cbox-selitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cb_online_4" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="cb_online_4" className="mdl-checkbox__input dynID" defaultChecked="checked" aria-label="COMPSCI 2ME3 Introduction to Software Development" />
                                              <span className="cbox-selitem-label">Online</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </span>
                                          <span className="cbox-selitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cb_on_camp_4" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="cb_on_camp_4" className="mdl-checkbox__input dynID" defaultChecked="checked" aria-label="COMPSCI 2ME3 Introduction to Software Development" />
                                              <span className="cbox-selitem-label">On Campus</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </span>
                                          <span className="cbox-selitem">
                                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox dynID mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="cb_lod_4" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                              <input type="checkbox" id="cb_lod_4" className="mdl-checkbox__input dynID" defaultChecked="checked" aria-label="COMPSCI 2ME3 Introduction to Software Development" />
                                              <span className="cbox-selitem-label">Learn on demand</span>
                                              <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                          </span>
                                        </span>
                                        <div className="cbox-allnone">
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row clearfix2 noselect cnf_classes selectAllNoneContainer" style={{display: 'block'}}>
                                        <span className="cbox-row-title">Classes:</span>
                                        <span className="visuallyhidden" aria-label="The following checkboxes allow you to specify which classes you want to allow as possible options for your generated schedule results. If you want to get the detail of each class now, try adding only this course to the list of courses (or deselect every course except this one). This will generate one schedule result for each unique timetable option of this course. By navigating the legend of each schedule result, you will be able to examine the detail of each class of this course." />
                                        <div style={{clear: 'both'}} />
                                        <span className="class_checkboxes"><span className="cbox-selitem cbox-classitem"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="0-040005670398627335" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={0} id="0-040005670398627335" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T01<span style={{color: '#CC0000'}}> (Closed)</span><span className="course_state" title>Enrolled</span></span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Unpin classes at this meeting time">-</div></span><span className="cbox-selitem cbox-classitem cbox-faded"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="1-040005670398627335" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={1} id="1-040005670398627335" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T02</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Unpin classes at this meeting time">-</div></span><span className="cbox-selitem cbox-classitem cbox-faded"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="2-040005670398627335" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={2} id="2-040005670398627335" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T03</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down classes at this meeting time instead">+</div></span><span className="cbox-selitem cbox-classitem cbox-faded"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="3-040005670398627335" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={3} id="3-040005670398627335" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T04</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down classes at this meeting time instead">+</div></span><span className="cbox-selitem cbox-classitem cbox-faded"><label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" htmlFor="4-040005670398627335" data-upgraded=",MaterialCheckbox,MaterialRipple"><input type="checkbox" data-cfsi={4} id="4-040005670398627335" className="mdl-checkbox__input class_chk" defaultChecked="checked" /><span className="cbox-selitem-label">LEC C01 - TUT T05</span><span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label><div className="cbox-hover-pin" title="Pin down classes at this meeting time instead">+</div></span></span>
                                        <div className="cbox-allnone" style={{display: 'block'}}>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectAll" data-upgraded=",MaterialButton,MaterialRipple">Select All<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                          <button className="mdl-button mdl-js-button mdl-js-ripple-effect selectNone" data-upgraded=",MaterialButton,MaterialRipple">Select None<span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                                        </div>
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_subj_note" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Subject Notes:</span>
                                        <span className="cbox-row-content cnf_subj_note_desc" />
                                      </div>
                                      <div className="cbox-row clearfix2 cnf_cattrs" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Course Attributes:</span>
                                        <span className="cbox-row-content cnf_cattr" />
                                      </div>
                                      <div className="cnf_custom_attrs" style={{display: 'none'}} />
                                      <div className="cbox-row clearfix2 cnf_class_notes" style={{display: 'none'}}>
                                        <span className="cbox-row-title">Class Remarks:</span>
                                        <span className="cbox-row-content cnf_class_notes_desc" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="reg_generate">
                              <input title className="big_button" type="button" name="do_search" defaultValue="Generate Schedules" onClick="UU.caseViewResults();" id="do_search" />
                              <div style={{marginTop: '9px', position: 'relative'}}>
                                <div className="bubble" id="step3bubble" style={{display: 'none'}}>
                                  <div className="tip_top"><i className="fa fa-caret-up" /></div>
                                  <img src="test_loggedin_semesterselected_files/step_arrow_north.png" alt="Up arrow for step instructions" className="pull-right phone step_arrow" />
                                  <div className="bubbletitle hide50">Step<span className="bubbleNb3">3</span></div>
                                  Once the desired courses are listed, click the 'Generate Schedules' button.<div className="clearfix" />
                                </div>
                              </div>
                            </div>
                            <div className="bottomAdvice noprint" />
                            <div className="enrollmentEncouragement noprint" style={{display: 'none'}} />
                            <div className="bottomLinks noprint">
                              <a href="javascript:void(0);" onClick="custReturnToStudentCentre();" id="linkReturnToStudentCentre" style={{display: 'none'}}>
                                <img id="return_icon" src="test_loggedin_semesterselected_files/return.gif" style={{verticalAlign: 'middle'}} alt="Return icon" /> Return to Student Center</a>
                              <a className="hideIfDisableCart disable-get-schedule" href="javascript:void(0);" onClick="custViewMyShoppingCart();" style={{display: 'none'}}>
                                <img id="schedule_icon" src="test_loggedin_semesterselected_files/cart.gif" style={{verticalAlign: 'middle'}} alt="Cart icon" /> View My Shopping Cart</a>
                            </div>
                            <div className="bottomLinks noprint hide50">
                              <a href="javascript:void(0)" onClick="clearSearch();" title="Reset the contents on this page">
                                <img src="test_loggedin_semesterselected_files/broom.png" style={{verticalAlign: 'middle'}} height={18} width={18} alt="Clear search icon" /> Start Over</a>
                            </div>
                            <div><span className="fullscreen-results-total-schedules">2 Schedule Results</span></div>
                            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent welcome-search-continue" onClick="PAGES.exitFullScreenSearch()" data-upgraded=",MaterialButton,MaterialRipple">
                              View Schedules
                              <span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                          </div>
                          <div className="full_page_content" id="tab_search" style={{display: 'none', opacity: 1, width: 'auto', position: 'relative'}}>
                            <div>
                              <button className="mdl-button mdl-js-button mdl-js-ripple-effect search-back-button" onClick="RR.changeSelCourseTab('tab_selected');" data-upgraded=",MaterialButton,MaterialRipple">
                                Back
                                <span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
                            </div>
                            <div className="select-course-title">
                              Advanced Course Search
                            </div>
                            <div className="tab_container">
                              <div className="tab_content">
                                <div id="advanced_search_html">
                                  <div className="course-browsing">
                                    <div className="course-browsing-search">
                                      <table role="presentation">
                                        <tbody>
                                          <tr>
                                            <td colSpan={2}>
                                              <div className="cb_filter_row clearfix2">
                                                <div className="cb_filter_text">
                                                  Courses available online only</div>
                                                <div className="cb_filter_switch mdl-switch-nvda-fix">
                                                  <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded" htmlFor="cb_online_only" data-upgraded=",MaterialSwitch,MaterialRipple">
                                                    <span className="mdl-switch__label visuallyhidden">Courses available online only</span>
                                                    <input id="cb_online_only" type="checkbox" className="mdl-switch__input" />
                                                    <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td colSpan={2}>
                                              <div className="cb_filter_row clearfix2">
                                                <div className="cb_filter_text">
                                                  Courses on-campus only</div>
                                                <div className="cb_filter_switch mdl-switch-nvda-fix">
                                                  <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded" htmlFor="cb_oncampus_only" data-upgraded=",MaterialSwitch,MaterialRipple">
                                                    <span className="mdl-switch__label visuallyhidden">Courses on-campus only</span>
                                                    <input id="cb_oncampus_only" type="checkbox" className="mdl-switch__input" />
                                                    <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr id="cb_acad_career_row">
                                            <th>Academic Career:</th>
                                            <td>
                                              <select id="cb_acad_career" role="listbox" aria-label="Academic career">
                                                <option value label selected="selected" />
                                                {/* Filled by writeObjectIntoSelect */}
                                              </select>
                                            </td>
                                          </tr>
                                          <tr id="cb_course_external_subject_row">
                                            <th>Course Subject:</th>
                                            <td>
                                              <select id="cb_course_external_subject" role="listbox" aria-label="Course Subject">
                                                <option value label selected="selected" />
                                                {/* Filled by writeObjectIntoSelect */}
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Academic Group:</th>
                                            <td>
                                              <select id="cb_academic_group" role="listbox" aria-label="Academic Group">
                                                <option value label selected="selected" />
                                                {/* Filled by writeObjectIntoSelect */}
                                              </select>
                                            </td>
                                          </tr>
                                          <tr id="cb_course_attribute_row">
                                            <th>Course Attribute:</th>
                                            <td>
                                              <select id="cb_course_attribute" role="listbox" required aria-label="Course Attribute">
                                                <option value selected="selected" />
                                                {/* Filled by writeObjectIntoSelect */}
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <th id="cb_course_attribute_label1">Course Attribute Value:</th>
                                            <td>
                                              <select id="cb_course_attribute_value" role="listbox" aria-label="Attribute Value">
                                                <option value label selected="selected" />
                                              </select>
                                            </td>
                                          </tr>
                                          <tr id="cb_requirement_designation_row">
                                            <th>Requirement Designation:</th>
                                            <td>
                                              <select id="cb_requirement_designation" role="listbox" aria-label="Requirement Designation">
                                                <option value selected="selected">All Requirement Designation</option>
                                                {/* Filled by writeObjectIntoSelect */}
                                              </select>
                                            </td>
                                          </tr>
                                          <tr id="cb_session_row">
                                            <th>Session:</th>
                                            <td>
                                              <select id="cb_session" role="listbox" aria-label="Period">
                                                <option value label selected="selected" />
                                                {/* Filled by writeObjectIntoSelect */}
                                              </select>
                                            </td>
                                          </tr>
                                          <tr id="cb_class_day_row" title="Indicate the days you're available. The course must contain at least one class that occurs within the given day(s).">
                                            <th>Days Permitted:</th>
                                            <td className="cb_day_checkboxes">
                                              <span className="cb_sel_item">
                                                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                                  <input className="mdl-checkbox__input class_chk" type="checkbox" name="classDay" defaultValue={1} defaultChecked="checked" /><span className="cbox-selitem-label">Sun</span>
                                                  <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                              </span>
                                              <span className="cb_sel_item">
                                                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                                  <input className="mdl-checkbox__input class_chk" type="checkbox" name="classDay" defaultValue={2} defaultChecked="checked" /><span className="cbox-selitem-label">Mon</span>
                                                  <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                              </span>
                                              <span className="cb_sel_item">
                                                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                                  <input className="mdl-checkbox__input class_chk" type="checkbox" name="classDay" defaultValue={3} defaultChecked="checked" /><span className="cbox-selitem-label">Tues</span>
                                                  <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                              </span>
                                              <span className="cb_sel_item">
                                                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                                  <input className="mdl-checkbox__input class_chk" type="checkbox" name="classDay" defaultValue={4} defaultChecked="checked" /><span className="cbox-selitem-label">Wed</span>
                                                  <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                              </span>
                                              <span className="cb_sel_item">
                                                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                                  <input className="mdl-checkbox__input class_chk" type="checkbox" name="classDay" defaultValue={5} defaultChecked="checked" /><span className="cbox-selitem-label">Thurs</span>
                                                  <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                              </span>
                                              <span className="cb_sel_item">
                                                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                                  <input className="mdl-checkbox__input class_chk" type="checkbox" name="classDay" defaultValue={6} defaultChecked="checked" /><span className="cbox-selitem-label">Fri</span>
                                                  <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                              </span>
                                              <span className="cb_sel_item">
                                                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect cbox-checkbox mdl-js-ripple-effect--ignore-events is-checked is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
                                                  <input className="mdl-checkbox__input class_chk" type="checkbox" name="classDay" defaultValue={7} defaultChecked="checked" /><span className="cbox-selitem-label">Sat</span>
                                                  <span className="mdl-checkbox__focus-helper" /><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline" /></span><span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                              </span>
                                            </td>
                                          </tr>
                                          <tr id="cb_class_time_row" title="Indicate the earliest time you're available. The course must contain at least one class that is not scheduled outside the given day(s) and start/end times.">
                                            <th>Start After Time:</th>
                                            <td>
                                              <span className="cb_sel_item">
                                                <select id="cb_startHour" role="listbox" aria-label="Start After Hour">
                                                  <option value label selected="selected" />
                                                  <option value={0} label={0} />
                                                  <option value={1} label={1} />
                                                  <option value={2} label={2} />
                                                  <option value={3} label={3} />
                                                  <option value={4} label={4} />
                                                  <option value={5} label={5} />
                                                  <option value={6} label={6} />
                                                  <option value={7} label={7} />
                                                  <option value={8} label={8} />
                                                  <option value={9} label={9} />
                                                  <option value={10} label={10} />
                                                  <option value={11} label={11} />
                                                  <option value={12} label={12} />
                                                  <option value={13} label={13} />
                                                  <option value={14} label={14} />
                                                  <option value={15} label={15} />
                                                  <option value={16} label={16} />
                                                  <option value={17} label={17} />
                                                  <option value={18} label={18} />
                                                  <option value={19} label={19} />
                                                  <option value={20} label={20} />
                                                  <option value={21} label={21} />
                                                  <option value={22} label={22} />
                                                  <option value={23} label={23} />
                                                </select>
                                              </span> :
                                              <span className="cb_sel_item">
                                                <select id="cb_startMin" role="listbox" aria-label="Start After Minute">
                                                  <option value={0} label={0} selected="selected" />
                                                  <option value={15} label={15} />
                                                  <option value={30} label={30} />
                                                  <option value={45} label={45} />
                                                </select>
                                              </span>
                                            </td>
                                          </tr>
                                          <tr id="cb_class_time_row" title="Indicate the latest time you're available. The course must contain at least one class that is not scheduled outside the given day(s) and start/end times.">
                                            <th>End Before Time:</th>
                                            <td>
                                              <span className="cb_sel_item">
                                                <select id="cb_endHour" role="listbox" aria-label="End Before Hour">
                                                  <option value label selected="selected" />
                                                  <option value={0} label={0} />
                                                  <option value={1} label={1} />
                                                  <option value={2} label={2} />
                                                  <option value={3} label={3} />
                                                  <option value={4} label={4} />
                                                  <option value={5} label={5} />
                                                  <option value={6} label={6} />
                                                  <option value={7} label={7} />
                                                  <option value={8} label={8} />
                                                  <option value={9} label={9} />
                                                  <option value={10} label={10} />
                                                  <option value={11} label={11} />
                                                  <option value={12} label={12} />
                                                  <option value={13} label={13} />
                                                  <option value={14} label={14} />
                                                  <option value={15} label={15} />
                                                  <option value={16} label={16} />
                                                  <option value={17} label={17} />
                                                  <option value={18} label={18} />
                                                  <option value={19} label={19} />
                                                  <option value={20} label={20} />
                                                  <option value={21} label={21} />
                                                  <option value={22} label={22} />
                                                  <option value={23} label={23} />
                                                </select>
                                              </span> :
                                              <span className="cb_sel_item">
                                                <select id="cb_endMin" role="listbox" aria-label="End Before Minute">
                                                  <option value={0} label={0} selected="selected" />
                                                  <option value={15} label={15} />
                                                  <option value={30} label={30} />
                                                  <option value={45} label={45} />
                                                </select>
                                              </span>
                                            </td>
                                          </tr>
                                          <tr>
                                            <th>Keywords:</th>
                                            <td>
                                              <input id="cb_search_term" type="text" className="fancy-input" aria-label="Course search" placeholder="Class Number, Title, Instructor..." />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td colSpan={2}>
                                              <button style={{width: '100%'}} id="course-browsing-search-btn" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" data-upgraded=",MaterialButton">
                                                SEARCH
                                              </button>
                                              <div style={{clear: 'both'}} />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="course-browsing-results">
                                      <div id="cb_search_results" className="course-browsing-results-listing sdl-scrollbars" aria-role="heading" aria-level={5} aria-label="Advanced Course Search Results">
                                        <table className="cb-results_table" id="cb-results_table">
                                          {/* Filled with cbSearchCourses2 function */}
                                        </table>
                                      </div>
                                      <div className="search-tab-footer">
                                        <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-disabled is-upgraded" htmlFor="cb_show_selected_only_cbx" data-upgraded=",MaterialSwitch,MaterialRipple">
                                          <input id="cb_show_selected_only_cbx" type="checkbox" className="mdl-switch__input" disabled="disabled" />
                                          <span className="mdl-switch__label cb_switch_text">View selected only</span>
                                          <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                      </div>
                                    </div>
                                    <div style={{clear: 'both'}} />
                                  </div>
                                </div></div>
                            </div>
                            <div>
                              <input type="button" className="big_button" id="cbSelectCourses" defaultValue="Select Courses" disabled="disabled" />
                            </div>
                          </div>
                        </div>
                        <div className="page_whiteout" />
                      </td> {/* end of page_criteria */}
                      <td id="page_results" role="region" aria-labelledby="page_results_label" className="vsb_page active_vsb_page" style={{width: '63.0764%'}}>
                        <div className="left_gradient nomobile" />
                        <div className="right_gradient nomobile" />
                        <div className="page_fader" style={{opacity: 0, display: 'none'}} />
                        <div className="full_page_title title_font">
                          <button id="page_criteria_expander" title="Collapse the Select Courses region" className="nobuttonstyle expander chevron_left disable-get-schedule" tabIndex={0} />
                          <button id="page_favorites_expander" title="Expand the Favorites region" className="nobuttonstyle expander chevron_right disable-get-schedule collapsed" tabIndex={0} />
                          <div className="left_gradient">
                          </div>
                          <div className="right_gradient">
                          </div>
                          <span className="results_page_title" id="page_results_label">Schedule <span className="akl">R</span>esults</span>
                        </div>
                        <div className="full_page">
                          <div className="full_page_content" style={{position: 'relative', opacity: 1, width: 'auto'}}>
                            <p id="alertJAWSresult" role="alert" style={{display: 'none'}} aria-atomic="true" />
                            <div id="flap_loading2" className="flap_loading" style={{display: 'none'}}>
                              &nbsp;
                              <span id="procStatus">Found 3 schedule results...</span>
                            </div>
                            <div id="flap_pause_results">
                              <div className="resultMax pause_max">0</div>
                              <div className="pause_found">schedule results</div>
                              <div className="pause_view_results" style={{}}>
                                <input type="button" className="big_button" defaultValue="View Results" onClick="UU.caseViewResults();if (fullOnViewResults) {$('.chevron_left').click();}" />
                              </div>
                              <div className="pause_results_tip" style={{display: 'none'}}>
                                <strong>Tip:</strong> <span>Select courses to generate schedule results.</span>
                                <div style={{clear: 'both'}} />
                              </div>
                            </div>
                            <div className="results-top noprint">
                              <h2 className="visuallyhidden" aria-label="Schedule Results region" />
                              <p className="visuallyhidden" id="page_results_desc">
                                <span>This is the Results region. Showing result</span>
                                <span className="results-current-schedule">1</span> <span>of</span> <span className="results-total-schedules">2</span>.
                                This shows you a list of all the possible schedules using your list of
                                courses in the 'Select Courses' region. Navigate through the results. 
                                You may sort and filter these results using the tools in this region. 
                                When you have found your preferred schedule, use the provided class 
                                numbers to enroll for the classes.</p>
                              <h3 className="visuallyhidden" aria-label="Schedule Results filter - use to limit the schedule results" />
                              <div className="results-legend">
                                <div className="results-legend-switch-container" title="View detailed information on each class by showing the timetable's legend">
                                  <label className="results-legend-switch-label" htmlFor="results-legend-switch" style={{cursor: 'pointer'}}>Course Legend</label>
                                  <div className="mdl-switch-nvda-fix">
                                    <label id="results-legend-switch-label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked" htmlFor="results-legend-switch" data-upgraded=",MaterialSwitch,MaterialRipple">
                                      <input id="results-legend-switch" type="checkbox" className="mdl-switch__input focusable disable-no-crf disable-get-schedule" onClick="UU.caseToggleLegend()" defaultChecked="checked" />
                                      <span className="mdl-switch__label visuallyhidden">Course Legend</span>
                                      <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                  </div>
                                </div>
                              </div>
                              <div className="tips-button" title="Display helpful tips" style={{position: 'relative'}}>
                                <button className="mdl-button mdl-js-button disable-no-crf disable-get-schedule" id="fortips" onClick="SLIDER.showTip();return false;" data-upgraded=",MaterialButton">
                                  Tips
                                </button>
                                <div className="tips_counter"><span className="tips_counter_nb">6</span></div>
                              </div>
                              <div className="results-sort-mobile mobileonly">
                                <button className="mdl-button mdl-js-button disable-no-crf disable-get-schedule" id="forsort" data-upgraded=",MaterialButton">
                                  Sort
                                </button>
                              </div>
                              <div className="results-sort not-mobileonly">
                                <div className="reg_sort">
                                  <h3 className="accessOnly">Sorting</h3>
                                  <span className="sorting-checkbox-container" title="Choose how to sort your schedule results">
                                    <label htmlFor="sort_by" className="label_font">Sort by:</label>&nbsp;&nbsp;
                                    <select className="disable-no-crf disable-get-schedule" id="sort_by" name="sort_by" onchange="UU.caseChangeSort(this.value);" onkeydown="return avoidChange(event);" onkeypress="return avoidChange(event);" onkeyup="return avoidChange(event);">
                                      <option value="none" selected="selected">Select...</option><option value="daysoff">Most days off</option><option value="morning">Mornings</option><option value="midday">Mid-day classes</option><option value="evening">Evenings</option></select>
                                  </span>
                                </div>
                              </div>
                              <div className="results-filter" title="Filter out schedules">
                                <button className="mdl-button mdl-js-button disable-no-crf disable-get-schedule" id="forfilter" onClick="SLIDER.showTip();return false;" data-upgraded=",MaterialButton">
                                  Filters <span id="filtersCount">(1)</span>
                                </button>
                              </div>
                              <div className="reg_filter" style={{justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                                <div className="rowfilter reg_filter" id="hide_full_tip">
                                  <div className="filteroption">
                                    <label htmlFor="hide_full">Closed classes</label>
                                    <span className="hide50">
                                      (<img className="filterElement" src="test_loggedin_semesterselected_files/element_full_ps.gif" />)
                                    </span>
                                  </div>
                                  <div className="mdl-switch-nvda-fix">
                                    <label id="hide_full_label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded" htmlFor="hide_full" data-upgraded=",MaterialSwitch,MaterialRipple">
                                      <input id="hide_full" type="checkbox" className="mdl-switch__input focusable" defaultValue="hide" onClick="UU.caseChangeHideFull(this);" />
                                      <span className="mdl-switch__label visuallyhidden">Closed classes</span>
                                      <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                  </div>
                                </div>
                                <div className="mdl-tooltip" data-mdl-for="hide_full_tip" data-upgraded=",MaterialTooltip">Allow schedule results containing full classes</div>
                                <div className="rowfilter reg_filter" id="hide_waitlistable_tip">
                                  <div className="filteroption">
                                    <label htmlFor="hide_waitlistable">Wait Listed classes</label>
                                    <span className="hide50">
                                      (<img className="filterElement" src="test_loggedin_semesterselected_files/element_waitlist_ps.gif" />)
                                    </span>
                                  </div>
                                  <div className="mdl-switch-nvda-fix">
                                    <label id="hide_waitlistable_label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked" htmlFor="hide_waitlistable" data-upgraded=",MaterialSwitch,MaterialRipple">
                                      <input id="hide_waitlistable" type="checkbox" className="mdl-switch__input focusable" defaultValue="hide" onClick="UU.caseChangeHideWaitlistable(this);" defaultChecked="checked" />
                                      <span className="mdl-switch__label visuallyhidden">Wait Listed classes</span>
                                      <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                  </div>
                                </div>
                                <div className="mdl-tooltip" data-mdl-for="hide_waitlistable_tip" data-upgraded=",MaterialTooltip">Allow schedule results containing classes that are full but can still be waitlisted</div>
                                <div className="rowfilter reg_filter" id="hide_online_tip">
                                  <div className="filteroption">
                                    <label htmlFor="hide_online">Online classes</label>
                                    <span>
                                      <i className="far fa-mouse" />
                                    </span>
                                  </div>
                                  <div className="mdl-switch-nvda-fix">
                                    <label id="hide_online_label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked" htmlFor="hide_online" data-upgraded=",MaterialSwitch,MaterialRipple">
                                      <input id="hide_online" type="checkbox" className="mdl-switch__input focusable" defaultValue="hide" onClick="UU.caseChangeHideOnline(this);" defaultChecked="checked" />
                                      <span className="mdl-switch__label visuallyhidden">Online classes</span>
                                      <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                  </div>
                                </div>
                                <div className="mdl-tooltip" data-mdl-for="hide_online_tip" data-upgraded=",MaterialTooltip">Allow schedule results containing online classes</div>
                                <div className="rowfilter reg_filter" id="hide_on_campus_tip">
                                  <div className="filteroption">
                                    <label htmlFor="hide_on_campus">On-ca<span className="akl">m</span>pus classes</label>
                                  </div>
                                  <div className="mdl-switch-nvda-fix">
                                    <label id="hide_on_campus_label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked" htmlFor="hide_on_campus" data-upgraded=",MaterialSwitch,MaterialRipple">
                                      <input id="hide_on_campus" type="checkbox" className="mdl-switch__input focusable" defaultValue="hide" onClick="UU.caseChangeHideOnCampus(this);" defaultChecked="checked" />
                                      <span className="mdl-switch__label visuallyhidden">On-ca<span className="akl">m</span>pus classes</span>
                                      <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                                  </div>
                                </div>
                                <div className="mdl-tooltip" data-mdl-for="hide_on_campus_tip" data-upgraded=",MaterialTooltip">Allow schedule results containing classes on campus</div>
                              </div>
                            </div>
                            <div className="reg_parent" style={{display: 'block'}}>
                              <div className="reg_row1_enroll noprint" style={{display: 'none'}}>
                                <h2 className="reg_title noprint" aria-label="Schedule review region. Please review the actions to apply to your course schedule.  Click the Do Actions button to submit.">
                                  <span className="title_act1">Getting Schedule</span>
                                  <span className="title_act2">Validating Your Shopping Cart</span>
                                </h2>
                              </div>
                              <div className="reg_row1 noprint noselect">
                                <button type="button" id="forfilter_desktop" className="btn btn-mid hide50">Filter</button>
                                <h3 className="visuallyhidden" aria-label="Schedule Result selection - use the navigation buttons to move between the different schedule results - each having a unique timetable." />
                                <div className="reg_flip">
                                  <table className="flip_table">
                                    <tbody><tr>
                                        <td>
                                          <a className="results-action-first results-nava-disabled" title="First Result">
                                            <i className="nav-first results-nav-btn results-nav-disabled" aria-hidden="true" />
                                          </a>
                                        </td>
                                        <td>
                                          <a className="results-action-previous results-nava-disabled" title="Previous Result">
                                            <i className="nav-prev results-nav-btn results-nav-disabled" aria-hidden="true" />
                                          </a>
                                        </td>
                                        <td className="results-nav">
                                          <div className="results-with-schedules">
                                            <div>
                                              Result</div>
                                            <div aria-live="assertive" aria-atomic="true">
                                              <span className="results-current-schedule">1</span>
                                              of <span className="results-total-schedules">2</span>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <a className="results-action-next" title="Next Result" href="javascript:void(0);" onClick="UU.caseNextResult()">
                                            <i className="nav-next results-nav-btn" aria-hidden="true" />
                                          </a>
                                        </td>
                                        <td>
                                          <a className="results-action-last" title="Last Result" href="javascript:void(0);" onClick="UU.caseLastResult()">
                                            <i className="nav-last results-nav-btn" aria-hidden="true" />
                                          </a>
                                        </td>
                                      </tr>
                                      <tr id="result_page_message" style={{display: 'none'}}>
                                        <td colSpan={5} style={{fontWeight: 'bold', color: '#00BB00'}}><div role="alert" tabIndex={0} id="favalert" aria-atomic="true">Saved to Favorites</div></td>
                                      </tr>
                                    </tbody></table>
                                  <span className="cohort_info" />
                                </div>
                              </div>
                              <div className="reg_flip_results">
                                <div className="reg_row2 printable" id="flip_area" style={{display: 'block'}}>
                                  <div className="reg_schedule half">
                                    <div className="reg_schedule1 noselect"><h3 className="visuallyhidden" style={{paddingLeft: '62px'}}>Schedule</h3><div className="visuallyhidden">If
                                        you are	using a screen reader, the contents of this heading will not be
                                        useful. Visual content represented here on the timetable is repeated 
                                        verbally under the Legend heading.</div><div style={{position: 'relative'}} className="timetable_part" aria-hidden="true">	<div className="weekName">		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="timetable_title">&nbsp;</span>	</div>	<div className="timezoneAbbr">&nbsp;</div>	<div className="timetable table_container">		<div style={{position: 'relative'}}>			<div className="weekArea"><table cellPadding={0} cellSpacing={0}><tbody><tr className="header tall"><td>Mon<span className="day_2_date"><br />Sep 8</span><div className="holl_2 holiday_label" style={{display: 'none'}} /></td><td>Tue<span className="day_3_date"><br />Sep 9</span><div className="holl_3 holiday_label" style={{display: 'none'}} /></td><td>Wed<span className="day_4_date"><br />Sep 10</span><div className="holl_4 holiday_label" style={{display: 'none'}} /></td><td>Thu<span className="day_5_date"><br />Sep 11</span><div className="holl_5 holiday_label" style={{display: 'none'}} /></td><td>Fri<span className="day_6_date"><br />Sep 12</span><div className="holl_6 holiday_label" style={{display: 'none'}} /></td></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">8</div><div className="min_marker">am</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">9</div><div className="min_marker">am</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">10</div><div className="min_marker">am</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">11</div><div className="min_marker">am</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">12</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">1</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">2</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">3</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">4</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">5</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">6</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr></tbody></table></div>			<div className="currentBusyBlocks" style={{position: 'absolute', display: 'block', top: '0px', left: '0px', width: '100%', height: '100%'}}>				&nbsp;</div>			<div className="weekTimes" style={{position: 'absolute', display: 'block', top: '0px', left: '0px', width: '100%', height: '100%'}} title="Click and drag to choose where you don't want classes">			<div className="time_block bc1 bd1 bh1 tb_fstate_green" classname="time_block bc1 bd1 bh1 tb_fstate_green" title="Click to pin down course section." onmouseover="RR.highlightClass(1,true)" onmouseout="RR.highlightClass(1,false)" style={{left: '20%', top: '265px', width: '19.7222%', height: '29px'}}><span className="mobile_nb">1</span><span className="nonmobile">COMPSCI 2C03<br />LEC</span></div><div className="time_block bc1 bd1 bh1 tb_fstate_green" classname="time_block bc1 bd1 bh1 tb_fstate_green" title="Click to pin down course section." onmouseover="RR.highlightClass(1,true)" onmouseout="RR.highlightClass(1,false)" style={{left: '60%', top: '265px', width: '19.7222%', height: '29px'}}><span className="mobile_nb">1</span><span className="nonmobile">COMPSCI 2C03<br />LEC</span></div><div className="time_block bc1 bd1 bh1 tb_fstate_green" classname="time_block bc1 bd1 bh1 tb_fstate_green" title="Click to pin down course section." onmouseover="RR.highlightClass(1,true)" onmouseout="RR.highlightClass(1,false)" style={{left: '80%', top: '265px', width: '19.7222%', height: '29px'}}><span className="mobile_nb">1</span><span className="nonmobile">COMPSCI 2C03<br />LEC</span></div><div className="time_block bc1 bd1 bh1 tb_fstate_green" classname="time_block bc1 bd1 bh1 tb_fstate_green" title="Click to pin down course section." onmouseover="RR.highlightClass(1,true)" onmouseout="RR.highlightClass(1,false)" style={{left: '0.277778%', top: '85px', width: '19.5%', height: '29px'}}><span className="mobile_nb">1</span><span className="nonmobile">COMPSCI 2C03<br />TUT</span></div><div className="time_block bc2 bd2 bh2 bcpin tb_fstate_green" classname="time_block bc2 bd2 bh2 bcpin tb_fstate_green" title="Click to unpin course" onmouseover="RR.highlightClass(2,true)" onmouseout="RR.highlightClass(2,false)" style={{left: '20%', top: '157px', width: '19.7222%', height: '29px'}}><span className="mobile_nb">2</span><span className="nonmobile">MATH 2LA3<br />LEC</span></div><div className="time_block bc2 bd2 bh2 bcpin tb_fstate_green" classname="time_block bc2 bd2 bh2 bcpin tb_fstate_green" title="Click to unpin course" onmouseover="RR.highlightClass(2,true)" onmouseout="RR.highlightClass(2,false)" style={{left: '60%', top: '157px', width: '19.7222%', height: '29px'}}><span className="mobile_nb">2</span><span className="nonmobile">MATH 2LA3<br />LEC</span></div><div className="time_block bc2 bd2 bh2 bcpin tb_fstate_green" classname="time_block bc2 bd2 bh2 bcpin tb_fstate_green" title="Click to unpin course" onmouseover="RR.highlightClass(2,true)" onmouseout="RR.highlightClass(2,false)" style={{left: '80%', top: '157px', width: '19.7222%', height: '29px'}}><span className="mobile_nb">2</span><span className="nonmobile">MATH 2LA3<br />LEC</span></div><div className="time_block bc2 bd2 bh2 bcpin tb_fstate_red" classname="time_block bc2 bd2 bh2 bcpin tb_fstate_red" title="Click to unpin course" onmouseover="RR.highlightClass(2,true)" onmouseout="RR.highlightClass(2,false)" style={{left: '60%', top: '193px', width: '19.7222%', height: '29px'}}><span className="mobile_nb">2</span><span className="nonmobile">MATH 2LA3<br />TUT</span></div><div className="time_block bc3 bd3 bh3 bcpin tb_fstate_green" classname="time_block bc3 bd3 bh3 bcpin tb_fstate_green" title="Click to unpin course" onmouseover="RR.highlightClass(3,true)" onmouseout="RR.highlightClass(3,false)" style={{left: '20%', top: '301px', width: '19.7222%', height: '29px'}}><span className="mobile_nb">3</span><span className="nonmobile">COMPSCI 2GA3<br />LEC</span></div><div className="time_block bc3 bd3 bh3 bcpin tb_fstate_green" classname="time_block bc3 bd3 bh3 bcpin tb_fstate_green" title="Click to unpin course" onmouseover="RR.highlightClass(3,true)" onmouseout="RR.highlightClass(3,false)" style={{left: '40%', top: '301px', width: '19.7222%', height: '29px'}}><span className="mobile_nb">3</span><span className="nonmobile">COMPSCI 2GA3<br />LEC</span></div><div className="time_block bc3 bd3 bh3 bcpin tb_fstate_green" classname="time_block bc3 bd3 bh3 bcpin tb_fstate_green" title="Click to unpin course" onmouseover="RR.highlightClass(3,true)" onmouseout="RR.highlightClass(3,false)" style={{left: '80%', top: '301px', width: '19.7222%', height: '29px'}}><span className="mobile_nb">3</span><span className="nonmobile">COMPSCI 2GA3<br />LEC</span></div><div className="time_block bc3 bd3 bh3 bcpin tb_fstate_red" classname="time_block bc3 bd3 bh3 bcpin tb_fstate_red" title="Click to unpin course" onmouseover="RR.highlightClass(3,true)" onmouseout="RR.highlightClass(3,false)" style={{left: '60%', top: '229px', width: '19.7222%', height: '29px'}}><span className="mobile_nb">3</span><span className="nonmobile">COMPSCI 2GA3<br />TUT</span></div><div className="time_block bc4 bd4 bh4 bcpin tb_fstate_green" classname="time_block bc4 bd4 bh4 bcpin tb_fstate_green" title="Click to unpin course" onmouseover="RR.highlightClass(4,true)" onmouseout="RR.highlightClass(4,false)" style={{left: '0.277778%', top: '301px', width: '19.5%', height: '29px'}}><span className="mobile_nb">4</span><span className="nonmobile">COMPSCI 2LC3<br />LEC</span></div><div className="time_block bc4 bd4 bh4 bcpin tb_fstate_green" classname="time_block bc4 bd4 bh4 bcpin tb_fstate_green" title="Click to unpin course" onmouseover="RR.highlightClass(4,true)" onmouseout="RR.highlightClass(4,false)" style={{left: '20%', top: '337px', width: '19.7222%', height: '29px'}}><span className="mobile_nb">4</span><span className="nonmobile">COMPSCI 2LC3<br />LEC</span></div><div className="time_block bc4 bd4 bh4 bcpin tb_fstate_green" classname="time_block bc4 bd4 bh4 bcpin tb_fstate_green" title="Click to unpin course" onmouseover="RR.highlightClass(4,true)" onmouseout="RR.highlightClass(4,false)" style={{left: '60%', top: '301px', width: '19.7222%', height: '29px'}}><span className="mobile_nb">4</span><span className="nonmobile">COMPSCI 2LC3<br />LEC</span></div><div className="time_block bc4 bd4 bh4 bcpin tb_fstate_red" classname="time_block bc4 bd4 bh4 bcpin tb_fstate_red" title="Click to unpin course" onmouseover="RR.highlightClass(4,true)" onmouseout="RR.highlightClass(4,false)" style={{left: '80%', top: '193px', width: '19.7222%', height: '65px'}}><span className="mobile_nb">4</span><span className="nonmobile">COMPSCI 2LC3<br />TUT</span></div><div className="time_block bc5 bd5 bh5 bcpin tb_fstate_green" classname="time_block bc5 bd5 bh5 bcpin tb_fstate_green" title="Click to unpin course" onmouseover="RR.highlightClass(5,true)" onmouseout="RR.highlightClass(5,false)" style={{left: '0.277778%', top: '265px', width: '19.5%', height: '29px'}}><span className="mobile_nb">5</span><span className="nonmobile">COMPSCI 2ME3<br />LEC</span></div><div className="time_block bc5 bd5 bh5 bcpin tb_fstate_green" classname="time_block bc5 bd5 bh5 bcpin tb_fstate_green" title="Click to unpin course" onmouseover="RR.highlightClass(5,true)" onmouseout="RR.highlightClass(5,false)" style={{left: '40%', top: '265px', width: '19.7222%', height: '29px'}}><span className="mobile_nb">5</span><span className="nonmobile">COMPSCI 2ME3<br />LEC</span></div><div className="time_block bc5 bd5 bh5 bcpin tb_fstate_green" classname="time_block bc5 bd5 bh5 bcpin tb_fstate_green" title="Click to unpin course" onmouseover="RR.highlightClass(5,true)" onmouseout="RR.highlightClass(5,false)" style={{left: '80%', top: '337px', width: '19.7222%', height: '29px'}}><span className="mobile_nb">5</span><span className="nonmobile">COMPSCI 2ME3<br />LEC</span></div><div className="time_block bc5 bd5 bh5 bcpin tb_fstate_red" classname="time_block bc5 bd5 bh5 bcpin tb_fstate_red" title="Click to unpin course" onmouseover="RR.highlightClass(5,true)" onmouseout="RR.highlightClass(5,false)" style={{left: '40%', top: '337px', width: '19.7222%', height: '65px'}}><span className="mobile_nb">5</span><span className="nonmobile">COMPSCI 2ME3<br />TUT</span></div></div>		</div>	</div></div><div className="timetableMsg" /><div className="monthscalc" aria-hidden="true">	<div className="sliderdiv timetable_part" aria-hidden="true" style={{position: 'relative'}}>		<div style={{textAlign: 'center', padding: '4px 0 12px 0'}}>			<label>				<span className="disp_days">September 7 - 13, 2025</span></label>		</div>		<div className="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-begin={1} data-end={20} aria-disabled="false" style={{left: '22.2581%', width: '60%'}}><div className="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min" style={{width: '7.69231%'}} /><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{left: '7.69231%', width: '4.51613%'}} tabIndex={-1}><span style={{height: '120px'}} /></a></div>		<button className="sliderleft disable-no-results" title="Previous Week" style={{right: '80%'}} aria-label="go to week August 31 - September 6, 2025">			<i className="nav-prev results-week-nav" aria-hidden="true" />		</button>		<button className="sliderright disable-no-results" title="Next Week" style={{left: '84.5161%'}} aria-label="go to week September 14 - 20, 2025">			<i className="nav-next results-week-nav" aria-hidden="true" />		</button>	</div>	<div className="dateGridHolder" style={{position: 'relative'}}>		<div className="dateGridTable"><table className="dateGrid " style={{borderSpacing: '0px', padding: '0px'}}><tbody><tr><td style={{width: '20%'}} className="mo">Aug</td><td style={{width: '20%'}} className="mo">Sep</td><td style={{width: '20%'}} className="mo">Oct</td><td style={{width: '20%'}} className="mo">Nov</td><td style={{width: '20%'}} className="mo">Dec</td></tr><tr><td className="sp-listing-1"><div className="schedule-period bc1 bd1 bh1" classname="schedule-period bc1 bd1 bh1" onmouseover="RR.highlightClass(1,true)" onmouseout="RR.highlightClass(1,false)" onClick="addPin(event,5,'MCMST--2259_3779-3860-',true,'no');" title="Click to pin down course section." style={{marginLeft: 'calc(106.452% + 1px)', width: 'calc(306.452% + 3px)'}}><span className="mobileNUmber">1-</span>Data Structures and Algorithms</div></td><td /><td /><td /><td /></tr><tr><td className="sp-listing-2"><div className="schedule-period bc2 bd2 bh2" classname="schedule-period bc2 bd2 bh2" onmouseover="RR.highlightClass(2,true)" onmouseout="RR.highlightClass(2,false)" onClick="addPin(event,1,'MCMST--2259_2105-2107-',false,'no');" title="Click to unpin course" style={{marginLeft: 'calc(106.452% + 1px)', width: 'calc(306.452% + 3px)'}}><span className="mobileNUmber">2-</span>Applications of Linear Algebra</div></td><td /><td /><td /><td /></tr><tr><td className="sp-listing-3"><div className="schedule-period bc3 bd3 bh3" classname="schedule-period bc3 bd3 bh3" onmouseover="RR.highlightClass(3,true)" onmouseout="RR.highlightClass(3,false)" onClick="addPin(event,2,'MCMST--2259_2951-2952-',false,'no');" title="Click to unpin course" style={{marginLeft: 'calc(106.452% + 1px)', width: 'calc(306.452% + 3px)'}}><span className="mobileNUmber">3-</span>Computer Architecture</div></td><td /><td /><td /><td /></tr><tr><td className="sp-listing-4"><div className="schedule-period bc4 bd4 bh4" classname="schedule-period bc4 bd4 bh4" onmouseover="RR.highlightClass(4,true)" onmouseout="RR.highlightClass(4,false)" onClick="addPin(event,3,'MCMST--2259_3484-3485-',false,'no');" title="Click to unpin course" style={{marginLeft: 'calc(106.452% + 1px)', width: 'calc(306.452% + 3px)'}}><span className="mobileNUmber">4-</span>Logical Reasoning for Computer Science</div></td><td /><td /><td /><td /></tr><tr><td className="sp-listing-5"><div className="schedule-period bc5 bd5 bh5" classname="schedule-period bc5 bd5 bh5" onmouseover="RR.highlightClass(5,true)" onmouseout="RR.highlightClass(5,false)" onClick="addPin(event,4,'MCMST--2259_3489-3490-',false,'no');" title="Click to unpin course" style={{marginLeft: 'calc(106.452% + 1px)', width: 'calc(306.452% + 3px)'}}><span className="mobileNUmber">5-</span>Introduction to Software Development</div></td><td /><td /><td /><td /></tr></tbody></table></div>		<div className="dateGridBlocks" />		<div className="scheduleWarning" />	</div></div><h3 className="bubbletitle visuallyhidden timetable_part">Add Personal Times</h3><div className="timesToAvoid noprint timetable_part"><div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>		<button className="mdl-button mdl-js-button manual-time-expand expand-button" aria-label="expand manual time input" data-upgraded=",MaterialButton">			Add Personal Times<i className="far fa-angle-down" />		</button></div>	<div className="timesToAvoidContent" style={{textAlign: 'left', display: 'none'}}> <div className="bubble" style={{width: 'auto'}}>Click
                                            and drag on the schedule above, or enter a time range here to add it 
                                            manually. Schedule results that avoid personal times will be 
                                            prioritized.</div>	<div style={{margin: '0 -5px', display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap'}}>	  <div style={{margin: '5px'}}>		<input type="text" aria-label="Personal Time Entry. For example, enter Friday 5 dash 7 PM and press enter." className="add_avoid_time" style={{width: '300px', fontSize: '120%'}} />	    <br />Examples: Friday 2-9pm, MW 8-10, Fri 15-17	</div>	  <input style={{margin: '5px'}} type="button" className="add_avoid_time_button big_button" defaultValue="Add Time" />	  <input style={{margin: '5px'}} type="button" className="big_button clearAvoidTimesButton" defaultValue="Clear all Personal Times" />	</div>	<div className="avoidNotice" role="alert" />	</div></div></div>
                                    <div className="reg_schedule2 noselect" style={{display: 'none'}}>
                                      {/* Filled by schedule.js */}
                                    </div>
                                    <div className="reg_legend-container mobile">
                                      <div className="mobile-legend">
                                        <button className="mdl-button mdl-js-button mobile-legend-button" onClick="RR.toggleLegend()" data-upgraded=",MaterialButton">
                                          <span>Course Legend</span>
                                          <span style={{display: 'flex'}}><i className="far fa-angle-down mobile-legend-icon expanded" /></span>
                                        </button>
                                      </div>
                                    </div>
                                    <div className="buttonsUnderTimetable">
                                      <h3 className="visuallyhidden" aria-label="Schedule actions. Select an action to perform on the currently selected course schedule." />
                                      <div className="reg_row2_2">
                                        <div className="reg-info" style={{marginBottom: '10px'}}>
                                          <div id="crnListWarnings" className="noprint"><div className="crnListWarning crnListWarningInfo not_already_have">You are not enrolled for this schedule.</div><div className="crnListWarning crnListWarningGood already_have" style={{display: 'none'}}>You are already enrolled for this schedule</div><div className="crnListWarning crnListWarningBad not_meet_compulsory" style={{display: 'none'}}>This schedule does not follow the mandatory plan assigned for this term. To proceed, <span className="more_than_permitted" style={{display: 'none'}}>toggle off courses that are not permitted, or </span> <a href="javascript:void(0)" onClick="clearSearch();" style={{textDecoration: 'underline'}}>start over</a> and select the plan.</div></div>
                                          <div id="crnListInfos" className="noprint"><div className="crnListInfo credits_block">Total Units: <span title="Units">15.0</span>/<span title="Academic Progress Units">15.0</span> </div></div>
                                          <div id="crnListCrns" />
                                          <div id="crnListHelp" className="noprint" />
                                        </div>
                                        <div className="bottom-buttons-2 noprint">
                                          <button className="mdl-button mdl-js-button mdl-button--raised white-background disable-no-results disable-no-crf" onClick="UU.caseFavoriteResult();" aria-label="Save as Favourite" data-upgraded=",MaterialButton">
                                            Save as Favourite</button>
                                          <div className="schedule-buttons"><div id="crnListButtons" className="noprint"><div style={{textAlign: 'center', position: 'relative'}}> <input className="button_validate_cart mdl-button mdl-js-button mdl-button--raised white-background" defaultValue="Validate Shopping Cart" type="button" onClick="getScheduleClick(true);" disabled="disabled" title="Your cart is empty" data-upgraded=",MaterialButton" /><button className="button_get_schedule mdl-button mdl-js-button mdl-button--raised mdl-button--accent" type="button" onClick="requestScheduleCheckPromissory();" title="Go to the confirmation page to review details" data-upgraded=",MaterialButton">Get this Schedule</button><div className="not_signed_in_message" style={{display: 'none'}}>You are not signed in</div></div></div></div>
                                        </div>
                                        <div className="bottom-buttons noprint">
                                          <div>
                                            <button className="mdl-button mdl-js-button disable-no-results disable-no-crf" onClick="clickPrint()" data-upgraded=",MaterialButton">
                                              Print
                                            </button>
                                            <span id="createShareLink">
                                              <button className="mdl-button mdl-js-button disable-no-results disable-no-crf" onClick="UU.caseShareLink();//ShareLinkController.createLink();" data-upgraded=",MaterialButton">
                                                Share</button>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="reg_legend-container desktop">
                                    <div className="reg_legend" style={{display: 'block'}}>
                                      <h3 className="visuallyhidden" aria-label="Legend - list of course sections in your currently selected schedule.">Course Legend</h3>
                                      <div className="printed_by printonly">Printed by: <span className="alt_autho_text">Ameya Gupta</span></div>
                                      <div className="legend_box /*mdc-elevation--z1*/" id="legend_box"><div className="course_box show-books block_animation show_extras be0" style={{}} data-atomicid="null"><div className="table legend_table computer-only" style={{padding: '0px', borderSpacing: '0px', border: '0px'}}><div className="tr"><div className="td course_cell_legend one_col"><div className="course_header bc1 bh1" role="checkbox" aria-checked="false" aria-label="Click to pin down course section. Pinning a section will filter the schedule results to only contain schedules containing the pinned section until the pin is removed." title="Click to pin down course section." tabIndex={0} onkeydown="if(event.keyCode == 32){addPin(event,5,'MCMST--2259_3779-3860-',true,'bc1');}" onClick="addPin(event,5,'MCMST--2259_3779-3860-',true,'bc1');" onmouseout="RR.highlightClass(1,false);" onmouseover="RR.highlightClass(1,true);"><div className="header_cell"><h4 style={{float: 'left'}} className="course_title" aria-label="COMPSCI 2C03 Data Structures and Algorithms running from Sep 2  to  Dec 4 on Tue, Thu, Fri from 2:30 PM to 3:20 PMMon : 9:30 AM to 10:20 AM<br></h4>. Given this timetable schedule result, there may be one or more sections that occur at this time below. Click to pin down course section.">COMPSCI 2C03</h4><div style={{float: 'right'}} title="Session Code: 1"><span className="term_label">2025 Fall: </span>Sep 2 - Dec 4</div><div style={{float: 'right', clear: 'right'}} className="session_label">Regular Academic &nbsp;&nbsp;</div><div style={{float: 'left', clear: 'left'}}><span className="mobileNUmber">1-</span><span>Data Structures and Algorithms</span></div><div style={{clear: 'both'}} /><div id="hoursInLegend">Tue, Thu, Fri : 2:30 PM to 3:20 PM<br />Mon : 9:30 AM to 10:20 AM<br /></div></div></div><label className="vsbselectionnew"><h5 className="visuallyhidden">LEC C02 - TUT T07</h5><div className="selection_row" data-cnfid={5} data-selkey="MCMST--2259_3779-3860-" data-inst="MCMST" data-ac="UGRD"><div className="selection_table"><table className="inner_legend_table" style={{padding: '0px', borderSpacing: '0px', width: '100%'}}><tbody><tr><td rowSpan={4} valign="middle" align="center" width={25} title="Class is open" className="legendSelect bg_green empty is-checked"><span className="sel_radio" data-cnfid={5} data-selkey="MCMST--2259_3779-3860-" data-crns="3779 (3860)" data-color="green" /></td><td><strong className="leftnclear type_block">LEC C02</strong><label htmlFor="rad_MCMST--2259_3779-3860-"><span className="leftnclear"><span className="crn_label">Class Number:&nbsp;</span></span><span className="crn_value" style={{float: 'left'}}>3779</span></label><table className="leftnclear nowrap full_table"><tbody><tr><td className="bg_green full_indic" /><td><span className="leftnclear seats_available nowrap">Seats: <span className="seatText">Available</span></span></td></tr></tbody></table></td><td align="right"><div title="Campus: McMaster University" className="campus_block rightnclear">McMaster University</div><div className="instructional_method_block rightnclear" title="Instruction Mode">In Person</div><div className="rightnclear"><span className="location_block" title="Building and Room Number">Michael G. DeGroote Cntr - MDCL_1105<br /></span></div><div className="rightnclear" title="Instructor(s)">Vincent Maccio</div><div className="credits_block rightnclear"><span title="Units">3.0</span>/<span title="Academic Progress Units">3.0</span> Units</div></td></tr><tr><td colSpan={2} className="notes"><div className="leftnclear" /><div className="leftnclear" /><div className="leftnclear">Refer to course Description.<br /></div></td></tr><tr><td><strong className="leftnclear type_block">TUT T07</strong><label htmlFor="rad_MCMST--2259_3779-3860-"><span className="leftnclear"><span className="crn_label">Class Number:&nbsp;</span></span><span className="crn_value" style={{float: 'left'}}>3860</span></label><table className="leftnclear nowrap full_table"><tbody><tr><td className="bg_green full_indic" /><td><span className="leftnclear seats_available nowrap">Seats: <span className="seatText">Available</span></span></td></tr></tbody></table></td><td align="right"><div title="Campus: McMaster University" className="campus_block rightnclear">McMaster University</div><div className="instructional_method_block rightnclear" title="Instruction Mode">In Person</div><div className="rightnclear"><span className="location_block" title="Building and Room Number">A.N. Bourns Bldg - ABB_166<br /></span></div><div className="rightnclear" title="Instructor(s)">Staff</div></td></tr><tr><td colSpan={2} className="notes"><div className="leftnclear" /><div className="leftnclear" /><div className="leftnclear" /></td></tr></tbody></table></div><div style={{clear: 'both'}} /></div></label></div></div></div></div><div className="course_box show-books block_animation show_extras be0" style={{}} data-atomicid="null"><div className="table legend_table computer-only" style={{padding: '0px', borderSpacing: '0px', border: '0px'}}><div className="tr"><div className="td course_cell_legend one_col"><div className="course_header bc2 bh2 bcpin" role="checkbox" aria-checked="false" aria-label title="Click to unpin course" tabIndex={0} onkeydown="if(event.keyCode == 32){addPin(event,1,'MCMST--2259_2105-2107-',false,'bc2');}" onClick="addPin(event,1,'MCMST--2259_2105-2107-',false,'bc2');" onmouseout="RR.highlightClass(2,false);" onmouseover="RR.highlightClass(2,true);"><div className="header_cell"><h4 style={{float: 'left'}} className="course_title" aria-label="MATH 2LA3 Applications of Linear Algebra running from Sep 2  to  Dec 4 on Tue, Thu, Fri from 11:30 AM to 12:20 PMThu : 12:30 PM to 1:20 PM<br></h4>. Given this timetable schedule result, there may be one or more sections that occur at this time below. Click to unpin course">MATH 2LA3</h4><div style={{float: 'right'}} title="Session Code: 1"><span className="term_label">2025 Fall: </span>Sep 2 - Dec 4</div><div style={{float: 'right', clear: 'right'}} className="session_label">Regular Academic &nbsp;&nbsp;</div><div style={{float: 'left', clear: 'left'}}><span className="mobileNUmber">2-</span><span>Applications of Linear Algebra</span></div><div style={{clear: 'both'}} /><div id="hoursInLegend">Tue, Thu, Fri : 11:30 AM to 12:20 PM<br />Thu : 12:30 PM to 1:20 PM<br /></div></div></div><label className="vsbselectionnew"><h5 className="visuallyhidden">LEC C01 - TUT T02</h5><div className="selection_row" data-cnfid={1} data-selkey="MCMST--2259_2105-2107-" data-inst="MCMST" data-ac="UGRD"><div className="selection_table"><table className="inner_legend_table" style={{padding: '0px', borderSpacing: '0px', width: '100%'}}><tbody><tr><td rowSpan={4} valign="middle" align="center" width={25} title="Class is closed" className="legendSelect bg_red empty is-checked"><span className="sel_radio" data-cnfid={1} data-selkey="MCMST--2259_2105-2107-" data-crns="2105 (2107)" data-color="red" /></td><td><strong className="leftnclear type_block">LEC C01</strong><span className="course_state" title>Enrolled</span><label htmlFor="rad_MCMST--2259_2105-2107-"><span className="leftnclear"><span className="crn_label">Class Number:&nbsp;</span></span><span className="crn_value" style={{float: 'left'}}>2105</span></label><table className="leftnclear nowrap full_table"><tbody><tr><td className="bg_green full_indic" /><td><span className="leftnclear seats_available nowrap">Seats: <span className="seatText">Available</span></span></td></tr></tbody></table></td><td align="right"><div title="Campus: McMaster University" className="campus_block rightnclear">McMaster University</div><div className="instructional_method_block rightnclear" title="Instruction Mode">In Person</div><div className="rightnclear"><span className="location_block" title="Building and Room Number">Togo Salmon Hall - TSH_B128<br /></span></div><div className="rightnclear" title="Instructor(s)">Brett Nasserden</div><div className="credits_block rightnclear"><span title="Units">3.0</span>/<span title="Academic Progress Units">3.0</span> Units</div></td></tr><tr><td colSpan={2} className="notes"><div className="leftnclear" /><div className="leftnclear" /><div className="leftnclear">Refer to course Description.<br /></div></td></tr><tr><td><strong className="leftnclear type_block">TUT T02</strong><span className="course_state" title>Enrolled</span><label htmlFor="rad_MCMST--2259_2105-2107-"><span className="leftnclear"><span className="crn_label">Class Number:&nbsp;</span></span><span className="crn_value" style={{float: 'left'}}>2107</span></label><table className="leftnclear nowrap full_table"><tbody><tr><td className="bg_red full_indic" /><td><span className="leftnclear nowrap" title="All 90 seats are taken">Seats: <span className="fullText">Full</span></span><span className="legend_waitlist leftnclear nowrap"><span title="There is no wait list for this class">Wait List: <span className="fullText">None</span></span></span></td></tr></tbody></table></td><td align="right"><div title="Campus: McMaster University" className="campus_block rightnclear">McMaster University</div><div className="instructional_method_block rightnclear" title="Instruction Mode">In Person</div><div className="rightnclear"><span className="location_block" title="Building and Room Number">Burke Science Bldg. - BSB_119<br /></span></div><div className="rightnclear" title="Instructor(s)">Staff</div></td></tr><tr><td colSpan={2} className="notes"><div className="leftnclear" /><div className="leftnclear" /><div className="leftnclear" /></td></tr></tbody></table></div><div style={{clear: 'both'}} /></div></label></div></div></div></div><div className="course_box show-books block_animation show_extras be0" style={{}} data-atomicid="null"><div className="table legend_table computer-only" style={{padding: '0px', borderSpacing: '0px', border: '0px'}}><div className="tr"><div className="td course_cell_legend one_col"><div className="course_header bc3 bh3 bcpin" role="checkbox" aria-checked="false" aria-label title="Click to unpin course" tabIndex={0} onkeydown="if(event.keyCode == 32){addPin(event,2,'MCMST--2259_2951-2952-',false,'bc3');}" onClick="addPin(event,2,'MCMST--2259_2951-2952-',false,'bc3');" onmouseout="RR.highlightClass(3,false);" onmouseover="RR.highlightClass(3,true);"><div className="header_cell"><h4 style={{float: 'left'}} className="course_title" aria-label="COMPSCI 2GA3 Computer Architecture running from Sep 2  to  Dec 4 on Tue, Wed, Fri from 3:30 PM to 4:20 PMThu : 1:30 PM to 2:20 PM<br></h4>. Given this timetable schedule result, there may be one or more sections that occur at this time below. Click to unpin course">COMPSCI 2GA3</h4><div style={{float: 'right'}} title="Session Code: 1"><span className="term_label">2025 Fall: </span>Sep 2 - Dec 4</div><div style={{float: 'right', clear: 'right'}} className="session_label">Regular Academic &nbsp;&nbsp;</div><div style={{float: 'left', clear: 'left'}}><span className="mobileNUmber">3-</span><span>Computer Architecture</span></div><div style={{clear: 'both'}} /><div id="hoursInLegend">Tue, Wed, Fri : 3:30 PM to 4:20 PM<br />Thu : 1:30 PM to 2:20 PM<br /></div></div></div><label className="vsbselectionnew"><h5 className="visuallyhidden">LEC C01 - TUT T01</h5><div className="selection_row" data-cnfid={2} data-selkey="MCMST--2259_2951-2952-" data-inst="MCMST" data-ac="UGRD"><div className="selection_table"><table className="inner_legend_table" style={{padding: '0px', borderSpacing: '0px', width: '100%'}}><tbody><tr><td rowSpan={4} valign="middle" align="center" width={25} title="Class is closed" className="legendSelect bg_red empty is-checked"><span className="sel_radio" data-cnfid={2} data-selkey="MCMST--2259_2951-2952-" data-crns="2951 (2952)" data-color="red" /></td><td><strong className="leftnclear type_block">LEC C01</strong><span className="course_state" title>Enrolled</span><label htmlFor="rad_MCMST--2259_2951-2952-"><span className="leftnclear"><span className="crn_label">Class Number:&nbsp;</span></span><span className="crn_value" style={{float: 'left'}}>2951</span></label><table className="leftnclear nowrap full_table"><tbody><tr><td className="bg_green full_indic" /><td><span className="leftnclear seats_available nowrap">Seats: <span className="seatText">Available</span></span></td></tr></tbody></table></td><td align="right"><div title="Campus: McMaster University" className="campus_block rightnclear">McMaster University</div><div className="instructional_method_block rightnclear" title="Instruction Mode">In Person</div><div className="rightnclear"><span className="location_block" title="Building and Room Number">John Hodgins Engineer Bldg - JHE_376<br /></span></div><div className="rightnclear" title="Instructor(s)">Staff</div><div className="credits_block rightnclear"><span title="Units">3.0</span>/<span title="Academic Progress Units">3.0</span> Units</div></td></tr><tr><td colSpan={2} className="notes"><div className="leftnclear" /><div className="leftnclear" /><div className="leftnclear">Refer to course Description.<br /></div></td></tr><tr><td><strong className="leftnclear type_block">TUT T01</strong><span className="course_state" title>Enrolled</span><label htmlFor="rad_MCMST--2259_2951-2952-"><span className="leftnclear"><span className="crn_label">Class Number:&nbsp;</span></span><span className="crn_value" style={{float: 'left'}}>2952</span></label><table className="leftnclear nowrap full_table"><tbody><tr><td className="bg_red full_indic" /><td><span className="leftnclear nowrap" title="All 50 seats are taken">Seats: <span className="fullText">Full</span></span><span className="legend_waitlist leftnclear nowrap"><span title="There is no wait list for this class">Wait List: <span className="fullText">None</span></span></span></td></tr></tbody></table></td><td align="right"><div title="Campus: McMaster University" className="campus_block rightnclear">McMaster University</div><div className="instructional_method_block rightnclear" title="Instruction Mode">In Person</div><div className="rightnclear"><span className="location_block" title="Building and Room Number">Building T13 - T13_106<br /></span></div><div className="rightnclear" title="Instructor(s)">Staff</div></td></tr><tr><td colSpan={2} className="notes"><div className="leftnclear" /><div className="leftnclear" /><div className="leftnclear" /></td></tr></tbody></table></div><div style={{clear: 'both'}} /></div></label></div></div></div></div><div className="course_box show-books block_animation show_extras be0" style={{}} data-atomicid="null"><div className="table legend_table computer-only" style={{padding: '0px', borderSpacing: '0px', border: '0px'}}><div className="tr"><div className="td course_cell_legend one_col"><div className="course_header bc4 bh4 bcpin" role="checkbox" aria-checked="false" aria-label title="Click to unpin course" tabIndex={0} onkeydown="if(event.keyCode == 32){addPin(event,3,'MCMST--2259_3484-3485-',false,'bc4');}" onClick="addPin(event,3,'MCMST--2259_3484-3485-',false,'bc4');" onmouseout="RR.highlightClass(4,false);" onmouseover="RR.highlightClass(4,true);"><div className="header_cell"><h4 style={{float: 'left'}} className="course_title" aria-label="COMPSCI 2LC3 Logical Reasoning for Computer Science running from Sep 2  to  Dec 4 on Mon, Thu from 3:30 PM to 4:20 PMTue : 4:30 PM to 5:20 PM<br></h4>Fri : 12:30 PM to 2:20 PM<br/>. Given this timetable schedule result, there may be one or more sections that occur at this time below. Click to unpin course">COMPSCI 2LC3</h4><div style={{float: 'right'}} title="Session Code: 1"><span className="term_label">2025 Fall: </span>Sep 2 - Dec 4</div><div style={{float: 'right', clear: 'right'}} className="session_label">Regular Academic &nbsp;&nbsp;</div><div style={{float: 'left', clear: 'left'}}><span className="mobileNUmber">4-</span><span>Logical Reasoning for Computer Science</span></div><div style={{clear: 'both'}} /><div id="hoursInLegend">Mon, Thu : 3:30 PM to 4:20 PM<br />Tue : 4:30 PM to 5:20 PM<br />Fri : 12:30 PM to 2:20 PM<br /></div></div></div><label className="vsbselectionnew"><h5 className="visuallyhidden">LEC C01 - TUT T01</h5><div className="selection_row" data-cnfid={3} data-selkey="MCMST--2259_3484-3485-" data-inst="MCMST" data-ac="UGRD"><div className="selection_table"><table className="inner_legend_table" style={{padding: '0px', borderSpacing: '0px', width: '100%'}}><tbody><tr><td rowSpan={4} valign="middle" align="center" width={25} title="Class is closed" className="legendSelect bg_red empty is-checked"><span className="sel_radio" data-cnfid={3} data-selkey="MCMST--2259_3484-3485-" data-crns="3484 (3485)" data-color="red" /></td><td><strong className="leftnclear type_block">LEC C01</strong><span className="course_state" title>Enrolled</span><label htmlFor="rad_MCMST--2259_3484-3485-"><span className="leftnclear"><span className="crn_label">Class Number:&nbsp;</span></span><span className="crn_value" style={{float: 'left'}}>3484</span></label><table className="leftnclear nowrap full_table"><tbody><tr><td className="bg_green full_indic" /><td><span className="leftnclear seats_available nowrap">Seats: <span className="seatText">Available</span></span></td></tr></tbody></table></td><td align="right"><div title="Campus: McMaster University" className="campus_block rightnclear">McMaster University</div><div className="instructional_method_block rightnclear" title="Instruction Mode">In Person</div><div className="rightnclear"><span className="location_block" title="Building and Room Number">John Hodgins Engineer Bldg - JHE_376<br /></span></div><div className="rightnclear" title="Instructor(s)">Wolfram Kahl</div><div className="credits_block rightnclear"><span title="Units">3.0</span>/<span title="Academic Progress Units">3.0</span> Units</div></td></tr><tr><td colSpan={2} className="notes"><div className="leftnclear" /><div className="leftnclear" /><div className="leftnclear">Refer to course Description.<br /></div></td></tr><tr><td><strong className="leftnclear type_block">TUT T01</strong><span className="course_state" title>Enrolled</span><label htmlFor="rad_MCMST--2259_3484-3485-"><span className="leftnclear"><span className="crn_label">Class Number:&nbsp;</span></span><span className="crn_value" style={{float: 'left'}}>3485</span></label><table className="leftnclear nowrap full_table"><tbody><tr><td className="bg_red full_indic" /><td><span className="leftnclear nowrap" title="All 40 seats are taken">Seats: <span className="fullText">Full</span></span><span className="legend_waitlist leftnclear nowrap"><span title="There is no wait list for this class">Wait List: <span className="fullText">None</span></span></span></td></tr></tbody></table></td><td align="right"><div title="Campus: McMaster University" className="campus_block rightnclear">McMaster University</div><div className="instructional_method_block rightnclear" title="Instruction Mode">In Person</div><div className="rightnclear"><span className="location_block" title="Building and Room Number">John Hodgins Engineer Bldg - JHE_210<br /></span></div><div className="rightnclear" title="Instructor(s)">Staff</div></td></tr><tr><td colSpan={2} className="notes"><div className="leftnclear" /><div className="leftnclear" /><div className="leftnclear" /></td></tr></tbody></table></div><div style={{clear: 'both'}} /></div></label></div></div></div></div><div className="course_box show-books block_animation show_extras be0" style={{}} data-atomicid="null"><div className="table legend_table computer-only" style={{padding: '0px', borderSpacing: '0px', border: '0px'}}><div className="tr"><div className="td course_cell_legend one_col"><div className="course_header bc5 bh5 bcpin" role="checkbox" aria-checked="false" aria-label title="Click to unpin course" tabIndex={0} onkeydown="if(event.keyCode == 32){addPin(event,4,'MCMST--2259_3489-3490-',false,'bc5');}" onClick="addPin(event,4,'MCMST--2259_3489-3490-',false,'bc5');" onmouseout="RR.highlightClass(5,false);" onmouseover="RR.highlightClass(5,true);"><div className="header_cell"><h4 style={{float: 'left'}} className="course_title" aria-label="COMPSCI 2ME3 Introduction to Software Development running from Sep 2  to  Dec 4 on Mon, Wed from 2:30 PM to 3:20 PMFri : 4:30 PM to 5:20 PM<br></h4>Wed : 4:30 PM to 6:20 PM<br/>. Given this timetable schedule result, there may be one or more sections that occur at this time below. Click to unpin course">COMPSCI 2ME3</h4><div style={{float: 'right'}} title="Session Code: 1"><span className="term_label">2025 Fall: </span>Sep 2 - Dec 4</div><div style={{float: 'right', clear: 'right'}} className="session_label">Regular Academic &nbsp;&nbsp;</div><div style={{float: 'left', clear: 'left'}}><span className="mobileNUmber">5-</span><span>Introduction to Software Development</span></div><div style={{clear: 'both'}} /><div id="hoursInLegend">Mon, Wed : 2:30 PM to 3:20 PM<br />Fri : 4:30 PM to 5:20 PM<br />Wed : 4:30 PM to 6:20 PM<br /></div></div></div><label className="vsbselectionnew"><h5 className="visuallyhidden">LEC C01 - TUT T01</h5><div className="selection_row" data-cnfid={4} data-selkey="MCMST--2259_3489-3490-" data-inst="MCMST" data-ac="UGRD"><div className="selection_table"><table className="inner_legend_table" style={{padding: '0px', borderSpacing: '0px', width: '100%'}}><tbody><tr><td rowSpan={4} valign="middle" align="center" width={25} title="Class is closed" className="legendSelect bg_red empty is-checked"><span className="sel_radio" data-cnfid={4} data-selkey="MCMST--2259_3489-3490-" data-crns="3489 (3490)" data-color="red" /></td><td><strong className="leftnclear type_block">LEC C01</strong><span className="course_state" title>Enrolled</span><label htmlFor="rad_MCMST--2259_3489-3490-"><span className="leftnclear"><span className="crn_label">Class Number:&nbsp;</span></span><span className="crn_value" style={{float: 'left'}}>3489</span></label><table className="leftnclear nowrap full_table"><tbody><tr><td className="bg_green full_indic" /><td><span className="leftnclear seats_available nowrap">Seats: <span className="seatText">Available</span></span></td></tr></tbody></table></td><td align="right"><div title="Campus: McMaster University" className="campus_block rightnclear">McMaster University</div><div className="instructional_method_block rightnclear" title="Instruction Mode">In Person</div><div className="rightnclear"><span className="location_block" title="Building and Room Number">Togo Salmon Hall - TSH_B128<br /></span></div><div className="rightnclear" title="Instructor(s)">Ye Yuan</div><div className="credits_block rightnclear"><span title="Units">3.0</span>/<span title="Academic Progress Units">3.0</span> Units</div></td></tr><tr><td colSpan={2} className="notes"><div className="leftnclear" /><div className="leftnclear" /><div className="leftnclear">Refer to course Description.<br /></div></td></tr><tr><td><strong className="leftnclear type_block">TUT T01</strong><span className="course_state" title>Enrolled</span><label htmlFor="rad_MCMST--2259_3489-3490-"><span className="leftnclear"><span className="crn_label">Class Number:&nbsp;</span></span><span className="crn_value" style={{float: 'left'}}>3490</span></label><table className="leftnclear nowrap full_table"><tbody><tr><td className="bg_red full_indic" /><td><span className="leftnclear nowrap" title="All 50 seats are taken">Seats: <span className="fullText">Full</span></span><span className="legend_waitlist leftnclear nowrap"><span title="There is no wait list for this class">Wait List: <span className="fullText">None</span></span></span></td></tr></tbody></table></td><td align="right"><div title="Campus: McMaster University" className="campus_block rightnclear">McMaster University</div><div className="instructional_method_block rightnclear" title="Instruction Mode">In Person</div><div className="rightnclear"><span className="location_block" title="Building and Room Number">Michael G. DeGroote Cntr - MDCL_1010<br /></span></div><div className="rightnclear" title="Instructor(s)">Staff</div></td></tr><tr><td colSpan={2} className="notes"><div className="leftnclear" /><div className="leftnclear" /><div className="leftnclear" /></td></tr></tbody></table></div><div style={{clear: 'both'}} /></div></label></div></div></div></div><div id="xcrnListInfos" className="hide50" /><div id="xcrnListWarnings" className="hide50" /></div>
                                      <div id="legend_checkout" className="clearfix2 noprint">
                                        <input className="big_button button_cancel_schedule" type="button" onClick="cancelScheduleClick();" defaultValue="◀ Cancel" />
                                        <input className="big_button button_enter_pin" type="button" onClick="userPinPopup();" defaultValue="Enter Pin" />
                                        <input className="big_button button_do_actions" type="button" onClick="if(validateCourseEnrollOptions()){confirmAction();}" title="Review actions before proceeding. Click to perform all the actions listed above" defaultValue="Do Actions" />
                                        <input className="big_button button_return" type="button" onClick="returnAfterEnroll();" defaultValue="Return to 'Select Courses'" />
                                        <div className="reg_final_bubble" style={{display: 'none', clear: 'both', textAlign: 'right'}}>
                                          <div style={{display: 'inline-block'}}>
                                            <div className="bubble">
                                              <div className="tip_top"><i className="fa fa-caret-up" /></div>
                                              <img src="test_loggedin_semesterselected_files/step_arrow_north.png" alt="Up arrow for step instructions" className="pull-right phone step_arrow" />
                                              Click this button to view the latest state of your courses.<div className="tip_bottom" style={{display: 'none'}} id="post_checkout_tip"><i className="fa fa-caret-down" /></div>
                                              <div className="clearfix" />
                                            </div>
                                          </div>
                                        </div>
                                        <input className="big_button button_post_checkout" onClick="custButtonPostCheckout();" type="button" defaultValue="Proceed to Shopping Cart" />
                                      </div>
                                      <div id="legend_headers" className="noprint">
                                        <div className="course_legend_header">
                                          Class</div>
                                        <div className="course_action_header">
                                          <span className="title_act1">Action</span>
                                          <span className="title_act2">Result</span>
                                        </div>
                                        <div className="course_option_header">
                                          Options</div>
                                        <div className="course_result_header">
                                          Result</div>
                                      </div>
                                    </div></div>
                                  <div style={{clear: 'both'}} />
                                </div>
                              </div>
                              <div id="no_results_message_div" aria-atomic="true">
                                <span role="alert" aria-live="assertive" aria-atomic="true" style={{fontSize: '20px', color: '#CC3333'}}>No Results</span><br />
                                <br />There are no schedule combination(s) with the selected courses. <br /><br />
                                <div className="noResultsIdea">
                                  <table>
                                    <tbody><tr>
                                        <td><img src="test_loggedin_semesterselected_files/lightbulb_yl.svg" height={48} width={48} alt="Light bulb icon" /></td>
                                        <td><strong>Tip:</strong> <span className="noResultsIdeaText">TEMP</span></td>
                                      </tr>
                                    </tbody></table>
                                </div>
                              </div>
                              <div id="no_cnfs_div">
                                <span role="alert" aria-atomic="true" style={{fontSize: '20px', color: '#CC3333'}}>No Courses Selected</span><br />
                                <br />Select at least one course to see potential schedules here.
                              </div>
                            </div>
                            <div className="reg_welcome">
                              <div className="welcome_holder"><div className="welcome_title">
                                  Welcome</div>
                                <div className="welcome_subtext">
                                  <span className="hi_greeting hide50">Hi, Ameya Gupta.</span>
                                  <p>   MY TIMETABLE is a self-service tool that enables you to 
                                    generate your schedule conflict free and enroll you directly into 
                                    Mosaic. To learn about this tool please go to <br /><a href="http://registrar.mcmaster.ca/mytimetable/"><strong>http://registrar.mcmaster.ca/mytimetable/</strong></a></p>  <p> <font color="”#4B0082”<b">University Policy on Supplementary Fees:</font>
                                    If, at any time during a fall/winter session, you enroll in 18 units or
                                    more, you become an MSU student. You are then entitled to the services 
                                    of an MSU student and are responsible for the MSU supplementary fees, 
                                    even if you later drop back below 18 units in the same fall/winter 
                                    session.  Please visit the <a href="http://www.msumcmaster.ca/"><strong>MSU website</strong></a> regarding any inquiries regarding part-time vs. full-time fees.</p></div>
                              </div>
                              <div className="welcome_cont_but mobileRegularOnly">
                                <input type="button" className="big_button" defaultValue="Continue" onClick="UU.caseWelcomeContinue();" />
                              </div>
                            </div>
                            <div className="reg_term">
                              <h2 className="visuallyhidden">This is the select term menu, please select your term from the options below.</h2>
                              <button className="mdl-button mdl-js-button welcome-back" onClick="UU.caseWelcomeBack();" data-upgraded=",MaterialButton" style={{display: 'none'}}>BACK</button>
                              <div className="welcome_holder"><div className="welcome_title">
                                  Welcome</div>
                                <div className="welcome_subtext">
                                  <span className="hi_greeting hide50">Hi, Ameya Gupta.</span>
                                  <p>   MY TIMETABLE is a self-service tool that enables you to 
                                    generate your schedule conflict free and enroll you directly into 
                                    Mosaic. To learn about this tool please go to <br /><a href="http://registrar.mcmaster.ca/mytimetable/"><strong>http://registrar.mcmaster.ca/mytimetable/</strong></a></p>  <p> <font color="”#4B0082”<b">University Policy on Supplementary Fees:</font>
                                    If, at any time during a fall/winter session, you enroll in 18 units or
                                    more, you become an MSU student. You are then entitled to the services 
                                    of an MSU student and are responsible for the MSU supplementary fees, 
                                    even if you later drop back below 18 units in the same fall/winter 
                                    session.  Please visit the <a href="http://www.msumcmaster.ca/"><strong>MSU website</strong></a> regarding any inquiries regarding part-time vs. full-time fees.</p></div>
                              </div>
                              <div className="welcome_title2" style={{display: 'none'}}>
                                Select Term</div>
                              <div className="welcome_term_input_notice" />
                              <div id="welcomeActions" />
                              <div className="welcome_term_subtext">
                                Select a term:</div>
                              <div className="sorry_msg sorry_no_terms" style={{display: 'none'}}>
                                <i className="fa fa-exclamation-triangle" /> Sorry, there are no terms available to you at this time.</div>
                              <div className="sorry_msg sorry_wrong_campus" style={{display: 'none'}}>
                                <i className="fa fa-exclamation-triangle" /> Sorry, your campus is not presently enabled for this system.</div>
                              <div className="sorry_msg sorry_blocked_user">
                                <i className="fa fa-exclamation-triangle" /> Your schedule is unavailable for viewing at this time.</div>
                              <div id="welcomeTerms"><div className="demo-card-wide mdl-card mdl-shadow--2dp term-card" data-term={3202520}><a className="term-card-title " href="javascript:UU.caseTermContinue(3202520);">2025 Spring/Summer</a></div><div className="demo-card-wide mdl-card mdl-shadow--2dp term-card" data-term={3202530}><a className="term-card-title " href="javascript:UU.caseTermContinue(3202530);">2025 Fall</a></div><div className="demo-card-wide mdl-card mdl-shadow--2dp term-card" data-term={3202610}><a className="term-card-title " href="javascript:UU.caseTermContinue(3202610);">2026 Winter</a></div></div>
                            </div>
                            <div className="reg_recommendation">
                              <button className="mdl-button mdl-js-button welcome-back" onClick="UU.caseWelcomeBack();" data-upgraded=",MaterialButton">BACK</button>
                              <h2 className="visuallyhidden" aria-label="You have a Recommendation/Plan/Assigned Blocks" />
                              <button className="mdl-button mdl-js-button welcome-back welcome-doubleback" onClick="UU.caseWelcomeDoubleBack();" style={{display: 'none'}} data-upgraded=",MaterialButton">BACK</button>
                              <div className="welcome_holder" />
                              <div className="welcome_title2">
                                You have a Recommendation/Plan/Assigned Blocks</div>
                              <div className="welcome_subtext courseCount" id="recommendedShow" style={{display: 'none'}}>Your advisor has <span id="recommendedCount">a</span> recommendation for you:</div>
                              <div id="suggestedResult" />
                              <div className="skip-rec-div">
                                <button className="mdl-button mdl-js-button" id="skip_rec" onClick="UU.caseWelcomeDone(false, true);" data-upgraded=",MaterialButton">
                                  Skip
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td> {/* end of page_results */}
                      <td id="page_favorites" role="region" aria-labelledby="page_favorites_label" className="vsb_page disable-get-schedule noprint" style={{width: '2.39095%'}}>
                        <div className="page_fader" style={{display: 'block', opacity: 1}} />
                        <div className="full_page_title title_font collapsed" id="page_favorites_label" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                          Favourites<span id="favCount">(2)</span>
                        </div>
                        <div className="full_page">
                          <div className="full_page_content invisible_widescreen" style={{position: 'absolute', width: '0px', opacity: 0}}>
                            <div id="tab_favorites">
                              <h2 className="visuallyhidden" aria-label="Favourites region. This region contains your saved favorite course schedules you can load." />
                              <p className="accessOnly" style={{marginBottom: '15px'}}>This is the Favourites region. If you select a favourite you can rename it, load it, or delete it.</p>
                              <h3 className="visuallyhidden">List of Favourites</h3>
                              <div className="thumbnail_window"><a href="javascript:void(0)" tabIndex={0} id="thumbtest1_0" title="Untitled 1 (favorite 1 of 2)" className="thumbContainer"><div className="thumbnail_mask" id="delete_btn0" /><canvas className="thumbnail" id="thumbtest_0" width={100} height={100} /></a><a href="javascript:void(0)" tabIndex={0} id="thumbtest1_1" title="Untitled 2 (favorite 2 of 2)" className="thumbContainer"><div className="thumbnail_mask" id="delete_btn1" /><canvas className="thumbnail" id="thumbtest_1" width={100} height={100} /></a></div>
                              <table style={{width: '100%', margin: '6px 0px'}}>
                                <tbody><tr>
                                    <td className="tab-col">
                                      <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent load_button" aria-label="Load favourite into Select Courses region" onClick="UU.caseLoadFavorite();UU.caseViewResults();" disabled="disabled" data-upgraded=",MaterialButton">
                                        ◄ Load</button>
                                    </td>
                                    <td className="tab-col">
                                      <div className="fav_title_edit" style={{display: 'none'}}>
                                        <div className="editable_text_div" id="editable_text">&nbsp;</div>
                                        <label htmlFor="text_editor" className="visuallyhidden">Title of Favorite</label>
                                        <input type="text" className="text_editor_div" id="text_editor" maxLength={20} style={{display: 'none'}} />
                                        <a href="javascript:void(0);" className="edit_pencil" id="pencil1" title="Click to edit title" />
                                        <div className="favorite_date_time" id="fav-date-time1">Feb. 20, 3:45</div>
                                      </div>
                                    </td>
                                    <td className="tab-col">
                                      <button className="mdl-button mdl-js-button mdl-button--raised white-background delete_button" style={{float: 'right'}} onClick="UU.caseDeleteFavorite();" title="Delete favourite" disabled="disabled" data-upgraded=",MaterialButton">
                                        Delete</button>
                                      <div style={{clear: 'both'}} />
                                    </td>
                                  </tr>
                                </tbody></table>
                              <div className="preview_schedule" aria-hidden="true" style={{display: 'none'}}><h3 className="visuallyhidden" style={{paddingLeft: '62px'}}>Schedule</h3><div className="visuallyhidden">If
                                  you are	using a screen reader, the contents of this heading will not be
                                  useful. To read this favorite you must load it, then read the details 
                                  under the legend heading found on the schedule result region.</div><div style={{position: 'relative'}} className="timetable_part" aria-hidden="true">	<div className="weekName">		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="timetable_title">&nbsp;</span>	</div>	<div className="timezoneAbbr">&nbsp;</div>	<div className="timetable table_container">		<div style={{position: 'relative'}}>			<div className="weekArea"><table cellPadding={0} cellSpacing={0}><tbody><tr className="header"><td>Mon<span className="day_2_date" /><div className="holl_2 holiday_label" /></td><td>Tue<span className="day_3_date" /><div className="holl_3 holiday_label" /></td><td>Wed<span className="day_4_date" /><div className="holl_4 holiday_label" /></td><td>Thu<span className="day_5_date" /><div className="holl_5 holiday_label" /></td><td>Fri<span className="day_6_date" /><div className="holl_6 holiday_label" /></td></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">9</div><div className="min_marker">am</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">10</div><div className="min_marker">am</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">11</div><div className="min_marker">am</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">12</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">1</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">2</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">3</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">4</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr><tr className="even"><td><div className="left_fade"><div className="hour_marker">5</div><div className="min_marker">pm</div></div></td><td /><td /><td /><td /></tr><tr className="odd"><td /><td /><td /><td /><td /></tr></tbody></table></div>			<div className="currentBusyBlocks" style={{position: 'absolute', display: 'block', top: '0px', left: '0px', width: '100%', height: '100%'}}>				&nbsp;</div>			<div className="weekTimes" style={{position: 'absolute', display: 'block', top: '0px', left: '0px', width: '100%', height: '100%'}} title>			</div>		</div>	</div></div><div className="timetableMsg" /><div className="monthscalc" aria-hidden="true" style={{display: 'none'}}>	<div className="sliderdiv timetable_part" aria-hidden="true" style={{position: 'relative'}}>		<div style={{textAlign: 'center', padding: '4px 0 12px 0'}}>			<label>				<span className="disp_days">---</span></label>		</div>		<div className="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-begin={1} data-end={20} aria-disabled="false" style={{left: '31.0484%', width: '45.9677%'}}><div className="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min" style={{width: '0%'}} /><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{left: '0%', width: '5.64516%'}} tabIndex={-1}><span style={{height: '50px'}} /></a></div>		<button className="sliderleft disable-no-results" title="Previous Week" style={{right: '71.7742%'}}>			<i className="nav-prev results-week-nav" aria-hidden="true" />		</button>		<button className="sliderright disable-no-results" title="Next Week" style={{left: '79.8387%'}}>			<i className="nav-next results-week-nav" aria-hidden="true" />		</button>	</div>	<div className="dateGridHolder" style={{position: 'relative'}}>		<div className="dateGridTable"><table className="dateGrid larger" style={{borderSpacing: '0px', padding: '0px'}}><tbody><tr><td style={{width: '25%'}} className="mo">Oct</td><td style={{width: '25%'}} className="mo">Nov</td><td style={{width: '25%'}} className="mo">Dec</td><td style={{width: '25%'}} className="mo">Jan '08</td></tr></tbody></table></div>		<div className="dateGridBlocks" />		<div className="scheduleWarning" />	</div></div></div>
                              <div className="preview_message do_select saved_notice">
                                No Favourite Selected</div>
                            </div>
                            {/* Recommendations tab */}
                            <div id="tab_recommendations" style={{display: 'none', minHeight: '700px'}}>
                              <div id="page_rec_list">
                                <div className="rec_container">
                                  <div className="rec_container">
                                    <div className="sdl_input rec_search">
                                      <label htmlFor="rec_search_input">Search for Recommendation</label>
                                      <input type="text" id="rec_search_input" placeholder="Title, Description, Student ID..." title="Search by Recommendation ID, Student ID, Advisor, Title, Course..." />
                                    </div>
                                  </div>
                                  <div className="switch-field">
                                    <input type="radio" id="switch_left" name="switch_2" defaultValue="all" defaultChecked="checked" />
                                    <label htmlFor="switch_left" tabIndex={0}>All</label>
                                    <input type="radio" id="switch_center" name="switch_2" defaultValue="created" />
                                    <label htmlFor="switch_center" tabIndex={0}>Created by me</label>
                                    <input type="radio" id="switch_right" name="switch_2" defaultValue="modified" />
                                    <label htmlFor="switch_right" tabIndex={0}>Modified by me</label>
                                  </div>
                                  <div className="rec-advising-warning">
                                    Only displaying recommendations in <span className="active-term-label">2025 Fall</span>
                                  </div>
                                </div>
                                <div className="rec_results_top" />
                                <div className="rec_results_noterm saved_notice">
                                  No Term Selected
                                </div>
                                <div className="rec_results">
                                  <div className="rec_result" style={{display: 'none'}} title="Edit Recommendation">
                                    <div className="rec_icon">
                                      <i className="fa fa-calendar" aria-hidden="true" />
                                    </div>
                                    <div className="rec_info">
                                      <div className="rec_info_item recr-id">R-2124</div>
                                      <div className="rec_info_item recr-created">Mar 31</div>
                                    </div>
                                    <div className="rec_result_details">
                                      <div className="rec_detail_item recr-advisor">Advisor Name</div>
                                      <div className="rec_detail_item recr-students">Assigned Students</div>
                                      <div className="rec_detail_item recr-title">Title</div>
                                    </div>
                                    <div className="rec_search_highlight">
                                      <div className="rec_search_highlight_title">
                                      </div>
                                      <div className="rec_search_highlight_text">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="rec_results_count">
                                </div>
                                <div className="rec-bot-tools">
                                  <button className="small_button rec-but-new" title="Send current schedule as a recommendation to one or more students">Create Recommendation</button>
                                  <button className="rec-import-csv small_button" title="Import Recommendations by CSV" style={{padding: '5px', height: '33px'}}>
                                    <img src="test_loggedin_semesterselected_files/csv.gif" height={16} width={16} alt="Import from CSV" />
                                  </button>
                                </div>
                              </div>
                              <div id="page_rec_edit" style={{display: 'none'}}>
                                <div className="rec-top-buttons">
                                  <button className="rec-top-btn small_button rec-but-back" title="Back to list of recommendations">
                                    <i className="fa fa-reply" aria-hidden="true" />
                                  </button>
                                  {/*
			  <div class='top-rt-btns'>
			    <button class='rec-top-btn small_button rec-but-prev'><i class="far fa-angle-left" aria-hidden="true" title="View previous recommendation"></i>
			    </button>
			    <button class='rec-top-btn small_button rec-but-next'><i class="far fa-angle-right" aria-hidden="true" title="View next recommendation"></i>
			    </button>
			  </div>
			   */}
                                  <div className="top-rt-btns">
                                    <h3 className="rec-header">
                                      Recommendation
                                    </h3>
                                  </div>
                                  <div style={{clear: 'both'}}>
                                  </div>
                                </div>
                                <div id="page_rec_edit_form">
                                  {/*
			<div class="rec-row">
			  <div class="rec-row-label">
			    ID
			  </div>
			  <div class="rec-row-desc rec-row-desc-wide">
			    <span class="recf-id">R-1001</span>
			  </div>
			</div>
			 */}
                                  <div className="rec-row">
                                    <div className="rec-row-label rec-label">
                                      From
                                      {/* <i class="fa fa-user" aria-hidden="true"></i> */}
                                    </div>
                                    <div className="rec-row-desc">
                                      <span className="recf-creator">---</span>
                                    </div>
                                  </div>
                                  <div className="rec-tbl-cont">
                                    <div className="rec-row-label rec-label">
                                      To
                                    </div>
                                    <div className="rec-row-desc fancy-input rec-scrol-div" style={{padding: 0}}>
                                      <div className="rec-name-item">
                                        <label className="rec-student-tooltip" title>
                                          <input type="checkbox" />Jill Smith March 31</label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="rec-row rec-row-users">
                                    <div className="rec-add">
                                      <input type="text" className="rec-add-input" placeholder="Student ID" title="You may add multiple IDs" />
                                    </div>
                                    <div className="rec-add-button">
                                      <button className="small_button" title="Add Student ID(s)">Add</button>
                                    </div>
                                    <div className="rec-grp-button">
                                      <button className="small_button" title="Select from Student Group" style={{padding: '5px'}}>
                                        <i className="fas fa-users-class" />
                                      </button>
                                    </div>
                                    <div className="rec-csv-button">
                                      <button className="small_button" title="Import Student IDs from CSV" style={{padding: '5px'}}>
                                        <img src="test_loggedin_semesterselected_files/csv.gif" height={16} width={16} alt="Import from CSV" />
                                      </button>
                                    </div>
                                  </div>
                                  <div id="recAddWarning">
                                  </div>
                                  <div className="rec-row">
                                    <div className="rec-row-desc">
                                      <table className="rec-user-actions zero_padding_spacing">
                                        <tbody><tr>
                                            <td>
                                              <button className="small_button recb-select-all" title="Select/Deselect all students">Select All</button>
                                            </td>
                                            <td>
                                              <button className="small_button recb-remove" title="Remove selected students from list">Remove</button>
                                            </td>
                                            <td>
                                              <button className="small_button recb-splice" title="Duplicate this recommendation and move the selected students to the new recommendation">Splice to New</button>
                                            </td>
                                            {/*
			        <td>
			          <button class="small_button recb-advise">Advise</button>
			        </td>
			         */}
                                          </tr>
                                        </tbody></table>
                                    </div>
                                  </div>
                                  <div className="rec-row-label rec-label">
                                    Title
                                  </div>
                                  <div className="rec-row-desc">
                                    <input className="rec-title fancy-input" type="text" aria-label="Recommendation" placeholder="Title of Recommendation" />
                                  </div>
                                  <div className="rec-row-label rec-label">
                                    Message
                                  </div>
                                  <div className="rec-row-desc">
                                    <textarea rows={4} className="rec-message fancy-input" maxLength={1000} aria-label="Message to the students..." placeholder="Message to the students..." defaultValue={""} />
                                  </div>
                                  <div className="rec-recent" style={{display: 'none'}}>
                                    <table className="zero_padding_spacing">
                                      <tbody><tr>
                                          <td className="rec-label-cell" style={{paddingLeft: '5px'}}>
                                            Recent
                                          </td>
                                          <td>
                                            <select role="listbox" aria-label="Recent">
                                              <option selected="selected">Once</option>
                                              <option>Twice</option>
                                            </select>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                  </div>
                                  <div className="rec-option" title="Force the students using this software to follow this recommendation">
                                    <label>
                                      <input type="checkbox" className="recf-compulsory" />Mandatory</label>
                                  </div>
                                  <div className="rec-option" title="Allow students to select courses beyond those in this recommendation">
                                    <label>
                                      <input type="checkbox" className="recf-lock-select" />Permit additional courses</label>
                                  </div>
                                  <div className="rec-tags">
                                    <table className="zero_padding_spacing">
                                      <tbody><tr>
                                          <td className="rec-label-cell rec-label" title="Add tags to help categorize or organize recommendations">
                                            Tags
                                          </td>
                                          <td>
                                            <input id="input-rec-tags-add" type="text" aria-label="Recommendation tag" className="recf-tags" />
                                          </td>
                                        </tr>
                                      </tbody></table>
                                  </div>
                                  <div className="rec-tags rec-groups-row">
                                    <table className="zero_padding_spacing">
                                      <tbody><tr>
                                          <td className="rec-label-cell rec-label" title="Advisors must belong to at least one of the specified security groups to have permission to modify/delete this recommendation. Groups and their user assignments can be changed in VSB Settings.">
                                            Groups
                                          </td>
                                          <td>
                                            <input id="input-rec-groups-add" type="text" aria-label="Recommendation group" className="recf-groups" />
                                          </td>
                                        </tr>
                                      </tbody></table>
                                  </div>
                                  <div className="rec-disabled-message">
                                    You do not have permission to edit this recommendation.
                                  </div>
                                  <div className="rec-bottom">
                                    <button className="small_button rec-but-save">Save</button>
                                    <button className="small_button rec-but-duplicate">Duplicate</button>
                                    <button className="small_button rec-but-delete">Delete</button>
                                    <button className="small_button rec-but-cancel">Cancel</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="page_whiteout" />
                        <div className="fav-bottom" style={{position: 'absolute', top: '100%'}} />
                      </td>
                    </tr>
                  </tbody></table>
                <div id="guidance_wrapper">
                  <div id="guidance">
                    <span className="guidanceText" />
                  </div>
                </div>
                <div style={{clear: 'both'}} />
              </div> {/* end of under_header */}
            </div> {/* end of under_header_wrapper */}
            {/*<div>
<canvas id="thumbtest" width="100" height="100" style="border:0px solid #000000;display:none;">
</canvas>
</div> */}
          </div> {/* mainframe. Opened in the header */}
          <div className="custom_footer noprint">
            <div className="contentArea_bottom noprint" />
            <div className="mcm-footer">
              <div className="mcm-footer-banner" />
              <div className="mcm-footer-social">
                <div className="mcm-footer-address">
                  <span>1280 Main Street West.</span>
                  <span>Hamilton, Ontario L8S 4L8.</span>
                  <span className="mcm-footer-phone">(905) 525-9140</span>
                </div>
                <div className="mcm-footer-copyright">
                  © McMaster University
                </div>
              </div>
            </div></div>
          {/* Active sessions: 326 */}
        </div>
        {/* Added by prakash start for mobile sort */}
        <div className="centerparent">
          <div id="popupsort" className="popup-wrapper center hide" style={{maxWidth: '96%', maxHeight: '96%', overflowWrap: 'break-word', minWidth: '250px', height: 'auto', zIndex: 999}}>
            <div className="popup-content">
              <div className="popup-title">
                <button type="button" className="filteconfrim popup-close hide50">X</button>
                <h3>Sort by:</h3>
              </div>
              <div className="popup-body">
                <input type="radio" id="nonemobile" onClick="UU.caseChangeSort(this.value);" name="sb" defaultValue="none" defaultChecked="checked" /><label className="under" htmlFor="nonemobile">None</label>
                <input type="radio" id="daysoffmobile" onClick="UU.caseChangeSort(this.value);" name="sb" defaultValue="daysoff" /><label className="under" htmlFor="daysoffmobile">Most days off</label>
                <input type="radio" id="morningmobile" onClick="UU.caseChangeSort(this.value);" name="sb" defaultValue="morning" /><label className="under" htmlFor="morningmobile">Mornings</label>
                <input type="radio" id="middaymobile" onClick="UU.caseChangeSort(this.value);" name="sb" defaultValue="midday" /><label className="under" htmlFor="middaymobile">Mid-day classes</label>
                <input type="radio" id="eveningmobile" onClick="UU.caseChangeSort(this.value);" name="sb" defaultValue="evening" /><label className="under" htmlFor="eveningmobile">Evenings</label>
              </div>
            </div>
          </div>
          <div id="popuptips" className="popup-wrapper center hide" style={{maxWidth: '96%', maxHeight: '96%', overflowWrap: 'break-word', minWidth: '250px', height: 'auto', zIndex: 999}}>
            <div className="popup-content">
              <div className="tips-previous nomobile">
                <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" onClick="SLIDER.sliderChange(false);" aria-label="Previous Tip" data-upgraded=",MaterialButton,MaterialRipple">
                  <i className="fa fa-arrow-left" />
                  <span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
              </div>
              <div className="popup-body">
                <div className="tips-image">
                  <img id="slider_tip_img" src="test_loggedin_semesterselected_files/tip_drag.png" alt="Tiny screenshot to accompany tip text" />
                </div>
                <div className="popup-title">
                  Block out times
                </div>
                <div className="popup-subtitle">
                  <span className="slider_tip_text">
                    Loading...
                  </span>
                </div>
                <div className="filter-popup-buttons">
                  <button className="mdl-button mdl-js-button mdl-button--accent popup-close" data-upgraded=",MaterialButton">
                    Close
                  </button>
                  <button className="mdl-button mdl-js-button mdl-button--accent popup-close" onClick="SLIDER.sliderChange(true);" data-upgraded=",MaterialButton">
                    Next
                  </button>
                </div>
                <div className="tips-carousel">
                </div>
              </div>
              <div className="tips-next nomobile">
                <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" onClick="SLIDER.sliderChange(true);" aria-label="Next Tip" data-upgraded=",MaterialButton,MaterialRipple">
                  <i className="fa fa-arrow-right" />
                  <span className="mdl-button__ripple-container"><span className="mdl-ripple" /></span></button>
              </div>
            </div>
          </div>
          <div id="popupfilter" className="popup-wrapper center hide" style={{maxWidth: '96%', maxHeight: '96%', overflowWrap: 'break-word', minWidth: '250px', height: 'auto', zIndex: 999}}>
            <div className="popup-content">
              <h4 className="visuallyhidden">Filter options. Show me schedules containing:</h4>
              <div className="popup-title">
                <button type="button" className="filteconfrim xpopup-close hide50">X</button>
                Filters
              </div>
              <div className="popup-body">
                <div className="popup-subtitle">
                  Show me schedules containing:</div>
                <div className="rowfilter">
                  <div className="filteroption">
                    <label htmlFor="hide_fullmobile" title="Allow schedule results containing full classes">Closed classes</label>
                    <span className="hide50">
                      (<img className="filterElement" src="test_loggedin_semesterselected_files/element_full_ps.gif" />)
                    </span>
                  </div>
                  <div className="mdl-switch-nvda-fix">
                    <label id="hide_fullmobile_label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded" htmlFor="hide_fullmobile" data-upgraded=",MaterialSwitch,MaterialRipple">
                      <input id="hide_fullmobile" type="checkbox" className="mdl-switch__input focusable" defaultValue="hide" onClick="UU.caseChangeHideFull(this);" />
                      <span className="mdl-switch__label visuallyhidden">Closed classes</span>
                      <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                  </div>
                </div>
                <div className="rowfilter">
                  <div className="filteroption">
                    <label htmlFor="hide_waitlistablemobile" title="Allow schedule results containing classes that are full but can still be waitlisted">Wait Listed classes</label>
                    <span className="hide50">
                      (<img className="filterElement" src="test_loggedin_semesterselected_files/element_waitlist_ps.gif" />)
                    </span>
                  </div>
                  <div className="mdl-switch-nvda-fix">
                    <label id="hide_waitlistablemobile_label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked" htmlFor="hide_waitlistablemobile" data-upgraded=",MaterialSwitch,MaterialRipple">
                      <input id="hide_waitlistablemobile" type="checkbox" className="mdl-switch__input focusable" defaultValue="hide" onClick="UU.caseChangeHideWaitlistable(this);" defaultChecked="checked" />
                      <span className="mdl-switch__label visuallyhidden">Wait Listed classes</span>
                      <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                  </div>
                </div>
                <div className="rowfilter">
                  <div className="filteroption">
                    <label htmlFor="hide_onlinemobile" title="Allow schedule results containing online classes">Online classes</label>
                    <span>
                      <i className="far fa-mouse" />
                    </span>
                  </div>
                  <div className="mdl-switch-nvda-fix">
                    <label id="hide_onlinemobile_label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked" htmlFor="hide_onlinemobile" data-upgraded=",MaterialSwitch,MaterialRipple">
                      <input id="hide_onlinemobile" type="checkbox" className="mdl-switch__input focusable" defaultValue="hide" onClick="UU.caseChangeHideOnline(this);" defaultChecked="checked" />
                      <span className="mdl-switch__label visuallyhidden">Online classes</span>
                      <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                  </div>
                </div>
                <div className="rowfilter">
                  <div className="filteroption">
                    <label htmlFor="hide_on_campusmobile" title="Allow schedule results containing classes on campus">On-ca<span className="akl">m</span>pus classes</label>
                  </div>
                  <div className="mdl-switch-nvda-fix">
                    <label id="hide_on_campusmobile_label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded is-checked" htmlFor="hide_on_campusmobile" data-upgraded=",MaterialSwitch,MaterialRipple">
                      <input id="hide_on_campusmobile" type="checkbox" className="mdl-switch__input focusable" defaultValue="hide" onClick="UU.caseChangeHideOnCampus(this);" defaultChecked="checked" />
                      <span className="mdl-switch__label visuallyhidden">On-ca<span className="akl">m</span>pus classes</span>
                      <div className="mdl-switch__track" /><div className="mdl-switch__thumb"><span className="mdl-switch__focus-helper" /></div><span className="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple"><span className="mdl-ripple" /></span></label>
                  </div>
                </div>
                <div className="filter-popup-buttons">
                  <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent popup-close focusable" style={{minWidth: '60%'}} data-upgraded=",MaterialButton">
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div style={{clear: 'both'}} />
        </div>
        <div id="aarPopup" className="popup-wrapper center hide" style={{maxWidth: '96%', maxHeight: '96%', overflowWrap: 'break-word', minWidth: '250px', height: 'auto', zIndex: 999}}>
          <div className="popup-content">
            <div className="popup-title">
              <h3>Notice</h3>
            </div>
            <div className="popup-body">
              {/* Content will get put here */}
            </div>
            <div className="popupNoticeButtons" />
          </div>
        </div>
        <div id="sharePopup" className="popup-wrapper center hide" style={{position: 'absolute', zIndex: 999}}>
          <div className="popup-content">
            <div className="popup-title">
              <button type="button" className="filteconfrim popup-close hide50">X</button>
              <h3>Export to Calendar</h3>
            </div>
            <div className="popup-body">
              <div style={{padding: '0px 5px 5px 5px'}}>This will send all the events of the schedule your are currently viewing to your Calendar.<br /><br />
                <span style={{fontWeight: 500}}>Warning:</span> If you need to change or remove these events you will need to do it manually using your Calendar
              </div>
              <div id="notificationCal" style={{display: 'none'}}>Your schedule has been saved to the calendar.</div>
              <div id="calenderbutton" style={{textAlign: 'center', paddingTop: '10px'}}>
                <button id="googleShare" className="mdl-button mdl-js-button" onClick="vsbTimer.doLogin();" data-upgraded=",MaterialButton">Google Calendar</button>
                <button id="outLookShare" className="mdl-button mdl-js-button" onClick="vsbTimer.doLogin();" data-upgraded=",MaterialButton">Outlook Calendar</button>
                <button id="iCal" className="mdl-button mdl-js-button" onClick="vsbTimer.doLogin();" style={{textTransform: 'none'}} data-upgraded=",MaterialButton">iCal</button>
              </div>
            </div>
          </div>
        </div>
        <div style={{position: 'absolute', top: '0px', left: '0px', color: 'black', backgroundColor: 'white', display: 'none'}} id="console">Hello</div>
        <div style={{position: 'absolute', top: '40px', left: '0px', color: 'black', backgroundColor: 'white', display: 'none'}} id="console2">Hello</div>
        {/* SUGGESTION CONTAINER */}
        <div id="suggestion_box" className="accessible ak_o" role="listbox" aria-label="course search suggestion list" style={{top: '331.25px', left: '0px', minWidth: '248px'}}>
          <div id="suggestion_container" style={{maxHeight: '300px', overflowY: 'auto'}} className="sdl-scrollbars" />
        </div>
        {/* END SUGGESTION CONTAINER */}
        <div className="popupl-overlay" />
        <div className="check_media" style={{}} />
        {/* <canvas id="thumbtest" width="100" height="100" style="border:0px solid #000000;"> */}
        <protonpass-root-6769 data-protonpass-role="root" data-protonpass-theme="dark" />
      </div>
			</>
			}
		</div>
	);
}
