!function(wndw){var jadify=function(jade,_t,_h){var yudify=function template(locals){var buf=[],jade_mixins={},jade_interp,locals_for_with=locals||{};return function(_t,course,user,config,coursera_enable_new_help_center,$just_fixed_profile){if(buf.push('<div class="hidden">'+jade.escape(null==(jade_interp=_t("This page features MathJax technology to render mathematical formulae."))?"":jade_interp)+"\n"+(null==(jade_interp=_t('If you are using a screen reader, please visit <a href="http://www.dessci.com/en/products/mathplayer/">MathPlayer</a> to download the plugin for your browser. Please note that this is an Internet Explorer-only plugin at this time.'))?"":jade_interp)+'</div><h1 class="hidden">'+jade.escape(null==(jade_interp=_t(course.get("name")))?"":jade_interp)+"</h1><!-- UNTIL dashboard announcement expires 2014-12-01 (then delete this code)-->"),user.canAccessAdmin()||user.can("bulk_data_low_risk")){if(buf.push('<div data-readme="data-item-metrics-announcement" data-readme-show-count="1" data-readme-show-until-closed="data-readme-show-until-closed" data-readme-expires="Dec 1, 2014"><div><span>'+jade.escape(null==(jade_interp=_t("You can now see detailed information on your assessments with our new assessment dashboards."))?"":jade_interp)+"\n"+(null==(jade_interp=_t('Click on any assessment in <a href="" data-readme-close="data-readme-close">this tab</a> to try them out.'))?"":jade_interp)+'</span></div><div data-readme-close="data-readme-close" class="readme-close-icon"><span class="icon-remove"></span></div></div><div role="navigation" class="course-topbar container-fluid"><div style="min-width:940px" class="row-fluid"><span><a'+jade.attr("href",config.url.base,!0,!1)+' style="float:left;margin-right:10px;" class="course-topbar-logo"><img'+jade.attr("src",config.url.assets+"/pages/home/template/logo-light.png",!0,!1)+' alt="Coursera Home Page" class="accessible-text-for-reader"/></a><ul style="float:left;" role="navigation" class="course-topbar-nav-list"><li style="padding-left:0px;" class="course-topbar-nav-list-item">|</li>'),user.canAccessAdmin())buf.push('<li role="button" aria-haspopup="true" aria-expanded="false" aria-owns="course-topbar-content" data-popup-offset-y="5" data-popup="#course-topbar-content" data-popup-bind-open="mouseenter" data-popup-direction="s" data-popup-item="a.course-topbar-sublist-item" tabindex="1" class="course-topbar-nav-list-item"><a>'+jade.escape(null==(jade_interp=_t("Content"))?"":jade_interp)+'</a></li><li role="button" tabindex="2" class="course-topbar-nav-list-item"><a'+jade.attr("href","/"+course.get("sessionName")+"/admin/email",!0,!1)+">"+jade.escape(null==(jade_interp=_t("Send Emails"))?"":jade_interp)+'</a></li><li role="button" aria-haspopup="true" aria-expanded="false" aria-owns="course-topbar-setup" data-popup-offset-y="3" data-popup="#course-topbar-setup" data-popup-bind-open="mouseenter" data-popup-direction="s" data-popup-item="a.course-topbar-sublist-item" tabindex="3" class="course-topbar-nav-list-item"><a>'+jade.escape(null==(jade_interp=_t("Setup"))?"":jade_interp)+'</a></li><li role="button" aria-haspopup="true" aria-expanded="false" aria-owns="course-topbar-grading" data-popup-offset-y="3" data-popup="#course-topbar-grading" data-popup-bind-open="mouseenter" data-popup-direction="s" data-popup-item="a.course-topbar-sublist-item" tabindex="4" class="course-topbar-nav-list-item"><a>'+jade.escape(null==(jade_interp=_t("Grading"))?"":jade_interp)+'</a></li><li role="button" aria-haspopup="true" aria-expanded="false" aria-owns="course-topbar-advanced" data-popup-offset-y="3" data-popup="#course-topbar-advanced" data-popup-bind-open="mouseenter" data-popup-direction="s" data-popup-item="a.course-topbar-sublist-item" tabindex="6" class="course-topbar-nav-list-item"><a>'+jade.escape(null==(jade_interp=_t("Advanced"))?"":jade_interp)+'</a></li><li style="padding-left:0px;" class="course-topbar-nav-list-item">|</li>');if(buf.push('<li role="button" class="course-topbar-nav-list-item"><a id="course-topbar-data"'+jade.attr("href","/"+course.get("sessionName")+"/data/dashboard",!0,!1)+">"+jade.escape(null==(jade_interp=_t("Analytics"))?"":jade_interp)+"</a></li>"),buf.push('<li role="button" class="course-topbar-nav-list-item stories-nav-button"><a id="course-topbar-data"'+jade.attr("href","/"+course.get("sessionName")+"/data/learner_stories",!0,!1)+' class="stories-link hide">'+jade.escape(null==(jade_interp=_t("Stories"))?"":jade_interp)+'</a></li></ul></span><span style="float:right;" class="course-topbar-nav-container"><ul class="course-topbar-nav-list"><li class="access-group course-topbar-nav-list-item">'+jade.escape(null==(jade_interp=_t(user.get("group")))?"":jade_interp)+'</li><li tabindex="0" role="button" aria-haspopup="true" aria-expanded="false" aria-owns="course-topbar-my" data-popup-offset-y="3" data-popup="#course-topbar-my" data-popup-bind-open="mouseenter" style="cursor:pointer;" data-popup-direction="se" data-popup-item="a.course-topbar-sublist-item" class="course-topbar-nav-list-item"><a'+jade.attr("data-user-id",user.get("id"),!0,!1)+">"+jade.escape(null==(jade_interp=_t(user.get("full_name")))?"":jade_interp)+"</a></li></ul></span></div>"),user.canAccessAdmin()){if(buf.push('<div id="course-topbar-content" class="course-topbar-sublist"><div class="course-topbar-sublist-arrow"></div><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Section Manager"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/assets",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Asset Administration"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/lecture/recode_status",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Video Status"))?"":jade_interp)+"</a>"),course.get("cheggID"))buf.push('<a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/textbook",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Textbooks"))?"":jade_interp)+"</a>");if(buf.push('</div><div id="course-topbar-setup" class="course-topbar-sublist"><div class="course-topbar-sublist-arrow"></div><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/courseadmin/announcement",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Upcoming Items Display"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/courseadmin",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Course Settings"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/navbar",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Navigation Bar"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/forum",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Forum Administration"))?"":jade_interp)+'</a></div><div id="course-topbar-grading" class="course-topbar-sublist"><div class="course-topbar-sublist-arrow"></div><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/grading_policy",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Grading Policy"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/course_grade/formula",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Set Grading Criteria"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/course_grade/export_grades",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Calculate Student Grades"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/course_grade/create_certificate",!0,!1)+' class="course-topbar-sublist-item">'+(null==(jade_interp=_t("Create &amp; Grant Statements and Certificates"))?"":jade_interp)+'</a></div><div id="course-topbar-advanced" class="course-topbar-sublist"><div class="course-topbar-sublist-arrow"></div><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/user",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("User Administration"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/quiz/regrade",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Regrade Quizzes"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/assignment/regrade",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Regrade Assignments"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/human_grading/regrade",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Regrade Peer Assessments"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/log",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Log Viewer"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/queue",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Queue Administration"))?"":jade_interp)+"</a>"),course.get("hasLTI"))buf.push('<a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/admin/learning_tool",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("LTI Management"))?"":jade_interp)+"</a>");buf.push("</div>")}if(buf.push('<div id="course-topbar-my" style="width:170px;" class="course-topbar-sublist"><div class="course-topbar-sublist-arrow right"></div><a data-popup-close="data-popup-close"'+jade.attr("href",course.get("externalBaseURL")+"admin/data/sessions/"+course.get("id"),!0,!1)+' target="_new" class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Session Admin"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href",course.get("externalBaseURL"),!0,!1)+' target="_new" class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("My Courses"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href",course.get("externalBaseURL")+"account/profile",!0,!1)+' target="_new" class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Profile"))?"":jade_interp)+"</a>"),!course.get("isPrivate"))buf.push('<a data-popup-close="data-popup-close"'+jade.attr("href",course.get("externalBaseURL")+"account/records",!0,!1)+' target="_new" class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Course Records"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href",course.get("externalBaseURL")+"account/settings",!0,!1)+' target="_new" class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Settings"))?"":jade_interp)+"</a>");buf.push('<a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/class/preferences",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Course Preferences"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href","/"+course.get("sessionName")+"/auth/logout",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Sign Out"))?"":jade_interp)+"</a></div></div>")}else{if(coursera_enable_new_help_center)buf.push('<div class="helpcenter-announcement"><div data-readme="helpcenter-announcement" data-readme-show-count="1" data-readme-show-until-closed="data-readme-show-until-closed" data-readme-expires="Mar 31, 2015"><div>'+jade.escape(null==(jade_interp=_t("Need technical help? Visit our new"))?"":jade_interp)+' <a href="https://courserahelp.zendesk.com/" data-readme-close="data-readme-close">'+jade.escape(null==(jade_interp=_t("Learner Help Center!"))?"":jade_interp)+'</a></div><div data-readme-close="data-readme-close" class="readme-close-icon"><span class="icon-remove"></span></div></div></div>');if(buf.push('<div role="banner" class="course-topbar container-fluid"><div class="row-fluid"><div class="span3"><a'+jade.attr("href",config.url.base,!0,!1)+' data-if-linkable="add-referrer" class="course-topbar-logo"></a></div><div style="float:right;" class="course-topbar-nav-container span9"><h2 class="hidden">'+jade.escape(null==(jade_interp=_t("Top Navigation Bar"))?"":jade_interp)+'</h2><ul class="course-topbar-nav-list"><li class="course-topbar-nav-list-item"><a'+jade.attr("href",course.get("externalBaseURL")+"courses",!0,!1)+' data-if-linkable="add-referrer">'+jade.escape(null==(jade_interp=_t("Courses"))?"":jade_interp)+"</a></li>"),!user.isAnonymous()){if(buf.push('<li tabindex="0" role="button" aria-haspopup="true" aria-expanded="false" aria-owns="course-topbar-my" data-popup="#course-topbar-my" data-popup-bind-open="mouseenter" data-popup-close="data-popup-close" style="cursor:pointer;" data-popup-direction="se" class="course-topbar-nav-list-item">'),course.get("badgevilleDomain"))buf.push('<a id="course-topbar-badgeville-byline" href=""></a>');buf.push("<a"+jade.attr("data-user-id",user.get("id"),!0,!1)+">"+jade.escape(null==(jade_interp=_t(user.get("full_name")))?"":jade_interp)+'<i class="icon-caret-down"></i></a></li>')}else if(user.isAnonymous()&&course.get("linkable"))buf.push('<li tabindex="0" class="course-topbar-nav-list-item"><a'+jade.attr("href",config.url.base+"login",!0,!1)+' data-if-linkable="add-referrer">'+jade.escape(null==(jade_interp=_t("Sign In"))?"":jade_interp)+'</a></li><li tabindex="0" style="display:none;" class="course-topbar-nav-list-item course-is-locked-can-sign-up"><a'+jade.attr("href",config.url.base+"signup",!0,!1)+' data-if-linkable="add-referrer">'+jade.escape(null==(jade_interp=_t("Sign Up"))?"":jade_interp)+'</a></li><li tabindex="0" style="display:none;" class="course-topbar-nav-list-item course-is-locked-cant-sign-up"><a'+jade.attr("href",config.url.base+"signupcantenroll",!0,!1)+' data-if-linkable="add-referrer">'+jade.escape(null==(jade_interp=_t("Sign Up"))?"":jade_interp)+"</a></li>");if(buf.push('</ul></div></div><div id="course-topbar-aboutus" class="course-topbar-sublist"><a'+jade.attr("href",config.url.base+"/about/",!0,!1)+' target="_new" data-if-linkable="add-referrer" class="internal-about course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("About Us"))?"":jade_interp)+"</a><a"+jade.attr("href",config.url.base+"/about/careers",!0,!1)+' target="_new" data-if-linkable="add-referrer" class="internal-about course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Careers"))?"":jade_interp)+"</a><a"+jade.attr("href",config.url.base+"/about/people",!0,!1)+' target="_new" data-if-linkable="add-referrer" class="internal-about course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("People"))?"":jade_interp)+"</a><a"+jade.attr("href",config.url.base+"/about/contact",!0,!1)+' target="_new" data-if-linkable="add-referrer" class="internal-about course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Contact Us"))?"":jade_interp)+'</a></div><div id="course-topbar-my" class="course-topbar-sublist"><a data-popup-close="data-popup-close"'+jade.attr("href",course.get("externalBaseURL"),!0,!1)+' target="_new" class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("My Courses"))?"":jade_interp)+'</a><a data-popup-close="data-popup-close"'+jade.attr("href",course.get("externalBaseURL")+"account/profile",!0,!1)+' target="_new" class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Profile"))?"":jade_interp)+"</a>"),!course.get("isPrivate"))buf.push('<a data-popup-close="data-popup-close"'+jade.attr("href",course.get("externalBaseURL")+"account/records",!0,!1)+' target="_new" class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Course Records"))?"":jade_interp)+"</a><a"+jade.attr("href",config.url.base+"account/settings",!0,!1)+' target="_new" class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Settings"))?"":jade_interp)+"</a>");if(user.inSignatureTrack())buf.push('<a data-popup-close="data-popup-close"'+jade.attr("href",config.url.base+"account/settings/signature",!0,!1)+' target="_new" class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Signature Track"))?"":jade_interp)+"</a>");buf.push("<a"+jade.attr("href","/"+course.get("sessionName")+"/class/preferences",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Course Preferences"))?"":jade_interp)+"</a><a"+jade.attr("href","/"+course.get("sessionName")+"/auth/logout",!0,!1)+' class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("Sign Out"))?"":jade_interp)+"</a></div></div>")}if(buf.push('<div class="course-topbanner-wrapper"><div class="course-topbanner"><div class="course-topbanner-university-logo"><a'+jade.attr("href",config.url.base+course.get("universityShortname"),!0,!1)+' target="_blank" data-if-linkable="add-referrer"'+jade.attr("title",config.url.base+course.get("universityShortname"),!0,!1)+' class="coursera-university-color"><img'+jade.attr("src",config.url.base+config.url.maestro+"course/"+course.get("id")+"/university_logo",!0,!1)+jade.attr("alt",course.get("universityShortname"),!0,!1)+"/></a></div>"),course.get("in_flexjoin")&&(0===user.get("flexjoin_state")||-1===user.get("flexjoin_state")))buf.push("<!-- explicitly do nothing if disabled-->");else if(course.get("in_flexjoin")&&1===user.get("flexjoin_state")&&!user.get("flexjoin_introduced")){buf.push('<div style="margin-top: 0; margin-right: 0" class="course-signaturetrack"><div class="course-signaturetrack-topbanner-side-join"><div class="course-signaturetrack-bannerbox"><div class="course-signaturetrack-bannerbox-join"><a'+jade.attr("href",config.url.base+"signature/course/"+course.get("shortname")+"/"+course.get("id")+"?utm_source=spark&utm_medium=bannerbox",!0,!1)+' target="_blank">'+jade.escape(null==(jade_interp=_t("Join Signature Track"))?"":jade_interp)+"</a></div>");var days_left=course.get("signatureTrackStatus").signature_track_duration_left;buf.push('<div class="course-signaturetrack-bannerbox-daysleft">'+jade.escape(null==(jade_interp=_t("#{days_left} left",{days_left:days_left}))?"":jade_interp)+"</div></div></div></div>")}else if(course.get("in_flexjoin")&&1===user.get("flexjoin_state")&&user.get("flexjoin_introduced")){buf.push('<div style="margin-top: 0; margin-right: 0" class="course-signaturetrack"><div class="course-signaturetrack-topbanner-side-join"><a style="color: black;"'+jade.attr("href",course.get("externalBaseURL")+"signature/course/"+course.get("shortname")+"/"+course.get("id"),!0,!1)+' target="_blank">');var background_color=course.get("signatureTrackStatus").flexjoin_last_chance_dialog?"background-color: #F3CC57; border: 1px solid red":"background-color: #F3CC57",button_text=course.get("signatureTrackStatus").flexjoin_last_chance_dialog?"Secure Your Verified Certificate":"Signature Track Trial";buf.push("<div"+jade.attr("style",background_color,!0,!1)+' role="button" aria-haspopup="true" aria-expanded="false" aria-owns="signature-track-photo-id-status" data-popup-offset-y="15" data-popup-offset-x="0" data-popup="#signature-track-photo-id-status" data-popup-bind-open="mouseenter" data-popup-direction="w" class="course-signaturetrack-bannerbox"><div class="coursera-signaturetrack-topbanner">'+jade.escape(null==(jade_interp=_t(button_text))?"":jade_interp)+"</div>");var duration_left=course.get("signatureTrackStatus").signature_track_duration_left;if(0!==duration_left)buf.push('<div class="course-signaturetrack-bannerbox-daysleft">'+(null==(jade_interp=_t("#{duration_left} left to <u>Checkout</u>",{duration_left:duration_left}))?"":jade_interp)+"</div>");buf.push('</div></a><div id="signature-track-photo-id-status" style="width: 160px;" class="course-topbar-sublist"><div style="border-color: white" class="course-signaturetrack-sublist-arrow"><a style="text-decoration: none;"'+jade.attr("href",course.get("externalBaseURL")+"signature/course/"+course.get("shortname")+"/"+course.get("id")+"?riskfree=1",!0,!1)+' target="_blank"><div target="_blank" class="course-topbar-sublist-item"> '+jade.escape(null==(jade_interp=_t("Click to learn more"))?"":jade_interp)+"</div></a></div></div></div></div>")}else if(6==user.get("signature_track_state"))buf.push('<div class="course-signaturetrack"><div class="course-signaturetrack-topbanner-side-signaturetrack"><div class="course-signaturetrack-bannerbox-enrolled"><div role="button" aria-haspopup="true" aria-expanded="false" aria-owns="signature-track-photo-id-status" data-popup-offset-y="-7" data-popup-offset-x="-27" data-popup="#signature-track-photo-id-status" data-popup-bind-open="mouseenter" data-popup-direction="w" class="coursera-signaturetrack-topbanner"><i style="margin-right: 5px; color: #c43b3b;" class="icon-warning-sign"></i> '+jade.escape(null==(jade_interp=_t("Signature Track"))?"":jade_interp)+'</div></div><div id="signature-track-photo-id-status" style="width: 420px;" class="course-topbar-sublist"><div style="border-color: white" class="course-signaturetrack-sublist-arrow"></div><div target="_blank" class="course-topbar-sublist-item">'+(null==(jade_interp=_t("Your Signature Track profile is incomplete.&nbsp;"))?"":jade_interp)+"<a"+jade.attr("href",config.url.base+"signature/phrase/"+course.get("shortname")+"/"+course.get("id"),!0,!1)+' target="_blank">'+jade.escape(null==(jade_interp=_t("Complete it now."))?"":jade_interp)+"</a></div></div></div></div>");else if(3==user.get("signature_track_state"))buf.push('<div class="course-signaturetrack"><div class="course-signaturetrack-topbanner-side-signaturetrack"><div class="course-signaturetrack-bannerbox-enrolled"><div role="button" aria-haspopup="true" aria-expanded="false" aria-owns="signature-track-photo-id-status" data-popup-offset-y="-7" data-popup-offset-x="-27" data-popup="#signature-track-photo-id-status" data-popup-bind-open="mouseenter" data-popup-direction="w" class="coursera-signaturetrack-topbanner"><i style="margin-right: 5px; color: #c43b3b;" class="icon-warning-sign"></i> '+jade.escape(null==(jade_interp=_t("Signature Track"))?"":jade_interp)+'</div></div><div id="signature-track-photo-id-status" style="width: 550px;" class="course-topbar-sublist"><div style="border-color: white" class="course-signaturetrack-sublist-arrow"></div><div target="_blank" class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("There is a"))?"":jade_interp)+"<a"+jade.attr("href",config.url.base+"signature/guidebook/joining",!0,!1)+' target="_blank">'+jade.escape(null==(jade_interp=_t("problem"))?"":jade_interp)+"</a>"+(null==(jade_interp=_t("with your photo verification.&nbsp;"))?"":jade_interp)+"<a"+jade.attr("href",config.url.base+"signature/photo/"+course.get("shortname")+"/"+course.get("id"),!0,!1)+' target="_blank">'+jade.escape(null==(jade_interp=_t("Click to resubmit your photo."))?"":jade_interp)+"</a></div></div></div></div>");else if(4==user.get("signature_track_state")){if($just_fixed_profile)var banner_width="430px",banner_text="Your profile is complete!",banner_expanded="true";else var banner_width="340px",banner_text="Welcome!",banner_expanded="false";buf.push('<div class="course-signaturetrack"><div class="course-signaturetrack-topbanner-side-signaturetrack"><div class="course-signaturetrack-bannerbox-enrolled"><div role="button" aria-haspopup="false"'+jade.attr("aria-expanded",banner_expanded,!0,!1)+' aria-owns="signature-track-photo-id-status" data-popup-offset-y="-7" data-popup-offset-x="-27" data-popup="#signature-track-photo-id-status" data-popup-bind-open="mouseenter" data-popup-direction="w" class="coursera-signaturetrack-topbanner">'+jade.escape(null==(jade_interp=_t("Signature Track"))?"":jade_interp)+'</div></div><div id="signature-track-photo-id-status"'+jade.attr("style","width:"+banner_width,!0,!1)+' class="course-topbar-sublist"><div style="border-color: white" class="course-signaturetrack-sublist-arrow"></div><div target="_blank" class="course-topbar-sublist-item">'+jade.escape(null==(jade_interp=_t("#{banner_text} Have questions? Visit the",{banner_text:banner_text}))?"":jade_interp)+"<a"+jade.attr("href",config.url.base+"signature/guidebook",!0,!1)+' target="_blank">'+jade.escape(null==(jade_interp=_t("guidebook"))?"":jade_interp)+"</a>.</div></div></div></div>")}else if(2==user.get("signature_track_state"))buf.push('<div style="margin-top: 0; margin-right: 0" class="course-signaturetrack"><div class="course-signaturetrack-topbanner-side-join"><div class="course-signaturetrack-bannerbox"><div class="course-signaturetrack-bannerbox-join"><a'+jade.attr("href",config.url.base+"signature/course/"+course.get("shortname")+"/"+course.get("id")+"?utm_source=spark&utm_medium=bannerbox",!0,!1)+' target="_blank">'+jade.escape(null==(jade_interp=_t("Join Signature Track"))?"":jade_interp)+'</a></div><div class="course-signaturetrack-bannerbox-daysleft">'+jade.escape(null==(jade_interp=_t("#{course.get('signatureTrackStatus')['signature_track_duration_left']} left",{"course.get('signatureTrackStatus')['signature_track_duration_left']":course.get("signatureTrackStatus").signature_track_duration_left}))?"":jade_interp)+"</div></div></div></div>");else if(5==user.get("signature_track_state"))buf.push('<div style="display:none;" class="course-is-locked-can-sign-up course-is-locked-topbanner"><a'+jade.attr("href",course.get("courseURLs").sign_up_link,!0,!1)+' data-if-linkable="add-referrer" class="btn btn-success"><span>'+jade.escape(null==(jade_interp=_t("Sign up to view the full course"))?"":jade_interp)+'</span></a></div><div style="display:none;" class="course-is-locked-cant-sign-up course-is-locked-topbanner"><a'+jade.attr("href",course.get("courseURLs").view_course_info_link,!0,!1)+' data-if-linkable="add-referrer" class="btn btn-success"><span>'+(null==(jade_interp=_t("View course details &#187;"))?"":jade_interp)+"</span></a></div>");buf.push('<h1 class="course-topbanner-header"><a'+jade.attr("href","/"+course.get("sessionName")+"/",!0,!1)+' data-if-linkable="modal-lock" class="course-topbanner-name coursera-university-color">'+jade.escape(null==(jade_interp=_t(course.get("name")))?"":jade_interp)+"</a><br/><span"+jade.attr("style",course.get("instructor").length>120?"font-size:11px;":"",!0,!1)+' class="course-topbanner-instructor">');var instructor=course.get("instructor");buf.push(""+jade.escape(null==(jade_interp=_t("by #{instructor}",{instructor:instructor}))?"":jade_interp)+"</span></h1></div></div>")}.call(this,"_t"in locals_for_with?locals_for_with._t:"undefined"!=typeof _t?_t:void 0,"course"in locals_for_with?locals_for_with.course:"undefined"!=typeof course?course:void 0,"user"in locals_for_with?locals_for_with.user:"undefined"!=typeof user?user:void 0,"config"in locals_for_with?locals_for_with.config:"undefined"!=typeof config?config:void 0,"coursera_enable_new_help_center"in locals_for_with?locals_for_with.coursera_enable_new_help_center:"undefined"!=typeof coursera_enable_new_help_center?coursera_enable_new_help_center:void 0,"$just_fixed_profile"in locals_for_with?locals_for_with.$just_fixed_profile:"undefined"!=typeof $just_fixed_profile?$just_fixed_profile:void 0),buf.join("")};return function(locals){if(locals)if(locals._t)_t=locals._t.merge(_t);return yudify(locals)}};if("function"==typeof define&&define.amd)define(["js/vendor/jade","i18n!pages/spark/views/template/nls/header"],function(jade,_t){var _h;return jadify(jade,_t,_h)});else wndw.jade.templates["pages.spark.views.template.header"]=jadify(wndw.jade.helpers)}(window);