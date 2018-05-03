webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/client/Styles/style.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/client/Styles/style.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader!./login.scss */ "./node_modules/css-loader/index.js!./src/client/Styles/login.scss"), "");

// module
exports.push([module.i, "/* reset */\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, dl, dt, dd, ol, nav ul, nav li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nol, ul {\n  list-style: none;\n  margin: 0px;\n  padding: 0px; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/* start editing from here */\na {\n  text-decoration: none; }\n\n.txt-rt {\n  text-align: right; }\n\n/* text align right */\n.txt-lt {\n  text-align: left; }\n\n/* text align left */\n.txt-center {\n  text-align: center; }\n\n/* text align center */\n.float-rt {\n  float: right; }\n\n/* float right */\n.float-lt {\n  float: left; }\n\n/* float left */\n.clear {\n  clear: both; }\n\n/* clear float */\n.pos-relative {\n  position: relative; }\n\n/* Position Relative */\n.pos-absolute {\n  position: absolute; }\n\n/* Position Absolute */\n.vertical-base {\n  vertical-align: baseline; }\n\n/* vertical align baseline */\n.vertical-top {\n  vertical-align: top; }\n\n/* vertical align top */\n.underline {\n  padding-bottom: 5px;\n  border-bottom: 1px solid #eee;\n  margin: 0 0 20px 0; }\n\n/* Add 5px bottom padding and a underline */\nnav.vertical ul li {\n  display: block; }\n\n/* vertical menu */\nnav.horizontal ul li {\n  display: inline-block; }\n\n/* horizontal menu */\nimg {\n  max-width: 100%; }\n\n/*end reset*/\n.wrap {\n  width: 70%;\n  margin: 0 auto; }\n\n.header {\n  margin-bottom: 8px; }\n\n.header .auth {\n  display: block;\n  width: 100%;\n  text-align: right; }\n\n.header .auth a {\n  padding: 5px 10px;\n  display: inline-block;\n  background: #1e5dad;\n  margin: 5px 0px 5px 10px;\n  color: #fff; }\n\n.logo {\n  float: left;\n  padding: 8px 6px 0px 15px; }\n\n.top-nav {\n  float: right; }\n\n.top-nav ul li {\n  display: inline-block;\n  float: left;\n  width: 105px;\n  background: #1e5dad;\n  color: #dad8d8;\n  border-left: 1px solid #2f4b7c;\n  padding: 22px 12px;\n  text-align: center;\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 0.9em; }\n\n.top-nav ul li:first-child {\n  border: none; }\n\n.top-nav ul li a {\n  color: #FFF;\n  font-size: 1.5em;\n  font-family: 'Ropa Sans', sans-serif;\n  text-transform: uppercase;\n  font-size: 1.2em; }\n\n.top-nav ul li p {\n  font-size: 1em;\n  font-family: 'Ropa Sans', sans-serif;\n  padding-top: 4px; }\n\n/*----content-----*/\n/*---search-bar----*/\n.left-content {\n  width: 70%;\n  float: left; }\n\n.search-left {\n  float: left; }\n\n.search-right {\n  float: right;\n  background: #fff; }\n\n.search-right input[type=\"text\"], .search-right input[type=\"submit\"] {\n  border: none;\n  outline: none; }\n\n.search-right input[type=\"text\"] {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.8em;\n  color: #9b9b9b; }\n\n.search-left p {\n  font-size: 1em;\n  font-family: 'Ropa Sans', sans-serif;\n  padding-top: 4px;\n  color: #fff; }\n\n.searchbar {\n  background: #1e5dad;\n  padding: 12px; }\n\n.search-right input[type=\"submit\"] {\n  width: 22px;\n  cursor: pointer; }\n\n.video-share ul li {\n  display: inline-block; }\n\n.video-share ul li img {\n  padding: 0px 2px; }\n\n.video-share {\n  float: left; }\n\n.video-watch {\n  float: right;\n  padding-top: 2.5px; }\n\n.video-watch img {\n  vertical-align: middle;\n  padding: 5px 5px 7px 5px; }\n\n.grids {\n  margin-top: 14px; }\n\n.grids2 {\n  margin-top: 10px; }\n\n.grid {\n  width: 29.6%;\n  padding: 7px;\n  border: 1px solid #e6e6e6;\n  float: left;\n  margin-bottom: 15px; }\n\n.grid2 {\n  width: 29.7%; }\n\n.grid h3, .video-watch a, .grid1 h3 {\n  font-size: 0.89em;\n  font-family: 'Ropa Sans', sans-serif;\n  padding-top: 4px;\n  padding-bottom: 4px; }\n\n.grid h3 {\n  margin-bottom: 5px;\n  font-size: 0.9em; }\n\n.video-watch a, .lables p a {\n  color: #1e5dad; }\n\n.lables a {\n  padding-left: 4px; }\n\n.lables p {\n  font-size: 0.89em;\n  font-family: 'Ropa Sans', sans-serif;\n  color: #BBBBBB; }\n\n.lables p a:hover {\n  color: #555; }\n\n.grid:nth-child(2), .grid:nth-child(5), .grid:nth-child(8) {\n  margin: 0px 14.5px; }\n\n/*-----right-content-----*/\n.right-content {\n  float: right;\n  width: 29%; }\n\n.popular h3 {\n  text-align: left;\n  font-size: 1em;\n  font-family: 'Ropa Sans', sans-serif;\n  padding-top: 4px;\n  color: #fff;\n  float: left; }\n\n.popular p {\n  float: right;\n  font-size: 1em;\n  font-family: 'Ropa Sans', sans-serif;\n  color: #fff;\n  margin-top: -1px; }\n\n.popular {\n  background: #1e5dad;\n  padding: 15.5px;\n  padding: 12.4px; }\n\n.popular p img {\n  vertical-align: text-bottom; }\n\n.grid1 {\n  border: 1px solid #e6e6e6;\n  border-top: none;\n  padding: 10px; }\n\n/*----video1----*/\n.video1 img {\n  float: left;\n  width: 30%; }\n\n.video1 p {\n  float: right;\n  width: 67%; }\n\n.video1 span {\n  font-size: 1em;\n  font-family: 'Ropa Sans', sans-serif;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  float: right;\n  width: 67%; }\n\n.video1 p {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.8em;\n  color: #9b9b9b;\n  line-height: 1.8em; }\n\n.video1 {\n  margin-top: 10px;\n  border: 1px solid #e6e6e6;\n  padding: 10px; }\n\n.video1 img {\n  cursor: pointer; }\n\n.Recent-Vodeos h3 {\n  font-size: 1em;\n  font-family: 'Ropa Sans', sans-serif;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  background: #1e5dad;\n  color: #fff;\n  padding: 10px;\n  margin-top: 10px; }\n\n.r-all a {\n  font-size: 0.9em;\n  font-family: 'Ropa Sans', sans-serif;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  color: #1e5dad; }\n\n.r-all {\n  float: right;\n  margin-top: 10px; }\n\n.r-all a:hover {\n  color: #555; }\n\n.content {\n  padding-bottom: 30px; }\n\n.time {\n  position: absolute;\n  bottom: 50px;\n  right: 7px;\n  color: #fff;\n  background: rgba(85, 85, 85, 0.61);\n  padding: 5px 10px;\n  font-family: 'Ropa Sans', sans-serif; }\n\n.grid {\n  position: relative; }\n\n.time1 {\n  position: absolute;\n  bottom: 52px;\n  right: 10px;\n  color: #fff;\n  background: rgba(85, 85, 85, 0.61);\n  padding: 7px 16px;\n  font-family: 'Ropa Sans', sans-serif; }\n\n.grid1 {\n  position: relative; }\n\n/*---page-not-found----*/\n.error-page {\n  text-align: center;\n  padding-top: 116px; }\n\n.error-page h3, .error-page p {\n  font-size: 5em;\n  font-family: 'Ropa Sans', sans-serif;\n  color: #1e5dad; }\n\n.error-page h3 {\n  font-size: 10em; }\n\n/*---single-page-----*/\n.inner-page {\n  width: 70%;\n  float: left; }\n\n.title ul li {\n  display: inline-block; }\n\n.title h3, .title h4 {\n  font-size: 1.2em;\n  font-family: 'Ropa Sans', sans-serif;\n  padding: 10px 0px 6px 0px;\n  color: #9b9b9b; }\n\n.title h4 {\n  font-size: 1em; }\n\n.title ul {\n  padding-bottom: 10px; }\n\n.title ul li a {\n  color: #9b9b9b;\n  font-family: 'Ropa Sans', sans-serif;\n  font-size: 0.9em;\n  padding: 0px 3px; }\n\n.title ul li img {\n  vertical-align: middle;\n  margin: 0px 3px; }\n\n.title ul li a:hover {\n  color: #1e5dad; }\n\n.view-links {\n  float: left; }\n\n.view-links ul li {\n  display: inline-block; }\n\n.views-count {\n  float: right; }\n\n.view-links h4, .views-count p {\n  color: #9b9b9b;\n  font-family: 'Ropa Sans', sans-serif;\n  font-size: 0.9em; }\n\n.views-count p span {\n  color: #1e5dad;\n  font-size: 1.5em;\n  text-transform: uppercase; }\n\n.view-links ul li img {\n  vertical-align: middle;\n  padding: 0 5px; }\n\n.view-links h4 {\n  text-transform: uppercase; }\n\n.view-links ul {\n  float: left; }\n\n.comment1 li a {\n  color: #fff;\n  font-family: 'Ropa Sans', sans-serif;\n  font-size: 0.9em; }\n\n.comment1 li a:hover, .comment1 li a span {\n  color: #9b9b9b; }\n\n.comment1 {\n  margin-left: 15px; }\n\n.comment1 li:first-child {\n  background: #fff;\n  padding: 2px 5px;\n  background: #1e5dad;\n  color: #fff;\n  border-radius: 0.3em;\n  margin-right: 10px; }\n\n.comment1 li a span:hover {\n  text-decoration: underline; }\n\n.video-details p, .video-details span {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 0.8em;\n  color: #9b9b9b;\n  line-height: 1.8em; }\n\n.video-details p {\n  padding: 7px 0px; }\n\n.video-details ul {\n  padding: 10px 0px; }\n\n.video-details p a {\n  color: #1e5dad;\n  font-family: 'Ropa Sans', sans-serif; }\n\n.other-links li a, .tags li a {\n  font-size: 0.9em;\n  color: #1e5dad;\n  font-family: 'Ropa Sans', sans-serif; }\n\n.other-links li {\n  padding: 2px 0; }\n\n.other-links li a:hover, .tags li a:hover {\n  text-decoration: underline; }\n\n.tags ul li {\n  display: inline-block; }\n\n.tags h3 {\n  color: #9b9b9b;\n  font-family: 'Ropa Sans', sans-serif;\n  font-size: 0.9em;\n  text-transform: uppercase; }\n\n.other-links ul li {\n  line-height: 1.8em; }\n\n.related-videos h6 {\n  font-size: 1em;\n  font-family: 'Ropa Sans', sans-serif;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  color: #9b9b9b;\n  padding: 15px 0px 10px 0px;\n  border-bottom: 1px dashed #c9c9c9; }\n\n.video-inner span {\n  position: absolute;\n  right: -10px;\n  bottom: 15px;\n  background: rgba(58, 58, 58, 0.61);\n  padding: 7px 20px;\n  font-family: 'Ropa Sans', sans-serif;\n  color: #fff; }\n\n.viwes {\n  padding: 11px 0px; }\n\n.video-inner img {\n  background: #fff;\n  padding: 10px;\n  box-shadow: 0px 0px 10px #e4e4e4; }\n\n.video-inner {\n  position: relative;\n  width: 97.3%; }\n\n/*---categories----*/\n/*----sidebar----*/\n.content-sidebar {\n  float: left;\n  width: 21.6%;\n  font-family: 'Ropa Sans', sans-serif; }\n\n.content-sidebar h4, .recent-videos h5 {\n  background: #1e5dad;\n  color: #fff;\n  padding: 10px;\n  text-transform: uppercase;\n  font-family: 'Ropa Sans', sans-serif; }\n\n.recent-videos h5 img {\n  margin-right: 3px; }\n\n.recent-videos h5 {\n  padding: 9.5px 10px; }\n\n.content-sidebar h4 img {\n  vertical-align: middle;\n  padding-right: 5px; }\n\n.content-sidebar li a {\n  font-family: 'Ropa Sans', sans-serif;\n  font-size: 0.89em;\n  color: #746e6e;\n  display: block;\n  padding: 12px 0px;\n  padding-left: 5px; }\n\n.content-sidebar li a:hover {\n  background-color: #eee;\n  color: #1e5dad; }\n\n/*--recent-videos--*/\n.recent-videos {\n  float: right;\n  width: 77%;\n  margin: 0px 0px 13px 0px; }\n\n/*---footer----*/\n.box1 {\n  float: left;\n  width: 16%;\n  margin: 0 4% 0 0; }\n\n.box1 h4 {\n  font-family: 'Ropa Sans', sans-serif;\n  font-size: 1em;\n  color: #fff;\n  border-bottom: 1px dashed silver;\n  padding: 6px 0;\n  margin-bottom: 4px; }\n\n.box1 ul li {\n  display: inherit; }\n\n.box1 ul li a {\n  font-family: 'Ropa Sans', sans-serif;\n  font-size: 0.8em;\n  color: #99c0f1;\n  line-height: 2em; }\n\n.box1 ul li a:hover {\n  color: #fff; }\n\n.footer {\n  padding: 10px 0px 20px 0px;\n  font-family: 'Titillium Web', sans-serif;\n  background: #1e5dad;\n  margin-top: 10px; }\n\n.social li img {\n  display: inline;\n  cursor: pointer;\n  vertical-align: middle;\n  padding-right: 10px;\n  margin: 5px 0px;\n  opacity: 0.8; }\n\n.footer1 {\n  padding: 10px;\n  background: #2a2a2a;\n  /* Old browsers */\n  background: -moz-linear-gradient(top, #2a2a2a 0%, #2a2a2a 100%);\n  /* FF3.6+ */\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #2a2a2a), color-stop(100%, #2a2a2a));\n  /* Chrome,Safari4+ */\n  background: -webkit-linear-gradient(top, #2a2a2a 0%, #2a2a2a 100%);\n  /* Chrome10+,Safari5.1+ */\n  background: -o-linear-gradient(top, #2a2a2a 0%, #2a2a2a 100%);\n  /* Opera 11.10+ */\n  background: -ms-linear-gradient(top, #2a2a2a 0%, #2a2a2a 100%);\n  /* IE10+ */\n  background: linear-gradient(to bottom, #2a2a2a 0%, #2a2a2a 100%);\n  /* W3C */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2a2a2a', endColorstr='#2a2a2a',GradientType=0 );\n  /* IE6-9 */\n  border-top: 1px ridge #6B3B7A;\n  font-family: 'Titillium Web', sans-serif;\n  text-align: center; }\n\n.footer1 p.link {\n  color: #eee;\n  font-size: 13px; }\n\n.footer1 p.link a {\n  color: #eee;\n  text-decoration: none;\n  font-size: 13px; }\n\n/*---page-nations-----*/\n/*-----pageing----*/\nul.dc_pagination {\n  font: 12px 'Tahoma';\n  height: 100%;\n  list-style-type: none;\n  overflow: hidden;\n  padding: 0px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 12px;\n  margin: 21px 0px 0px 0px; }\n\nul.dc_pagination li:first-child {\n  margin-left: 0px; }\n\nul.dc_paginationA03 li a {\n  background: #FFFFFF;\n  border: solid 1px #DCDCDC;\n  border-radius: 3px;\n  color: #707070 !important;\n  -moz-border-radius: 3px;\n  padding: 6px 9px 6px 9px;\n  -webkit-border-radius: 3px;\n  color: #000000 !important;\n  display: block;\n  padding: 7px 10px 7px 10px;\n  text-decoration: none;\n  font-family: 'Ropa Sans', sans-serif;\n  font-size: 1.25em; }\n\nul.dc_pagination li {\n  float: left;\n  margin: 0px;\n  margin-left: 5px;\n  padding: 0px; }\n\nul.dc_paginationA03 li a:hover, ul.dc_paginationA03 li a.current {\n  background: #1e5dad;\n  color: #fff !important; }\n\n/*  Contact Form  ============================================================================= */\n.section {\n  clear: both;\n  padding: 0px;\n  margin: 0px; }\n\n.group:before,\n.group:after {\n  content: \"\";\n  display: table; }\n\n.group:after {\n  clear: both; }\n\n.group {\n  zoom: 1; }\n\n.col {\n  display: block;\n  float: left;\n  margin: 1% 0 1% 1.6%; }\n\n.col:first-child {\n  margin-left: 0; }\n\n.span_2_of_3 {\n  width: 63.1%;\n  padding: 1.5%; }\n\n.span_1_of_3 {\n  width: 29.2%;\n  padding: 1.5%; }\n\n.span_2_of_3 h3,\n.span_1_of_3 h3 {\n  color: #1e5dad;\n  margin-bottom: 0.5em;\n  font-size: 1.5em;\n  line-height: 1.2;\n  font-family: 'Ropa Sans', sans-serif;\n  font-weight: normal;\n  margin-top: 0px;\n  letter-spacing: -1px; }\n\n.contact-form {\n  position: relative;\n  padding-bottom: 30px; }\n\n.contact-form div {\n  padding: 5px 0; }\n\n.contact-form span {\n  display: block;\n  font-size: 0.8125em;\n  color: #9b9b9b;\n  padding-bottom: 5px;\n  font-family: 'Ropa Sans', sans-serif; }\n\n.contact-form input[type=\"text\"], .contact-form textarea {\n  padding: 8px;\n  display: block;\n  width: 98%;\n  background: #fcfcfc;\n  border: none;\n  outline: none;\n  font-family: Arial, Helvetica, sans-serif;\n  box-shadow: inset 0px 0px 3px #999;\n  -webkit-box-shadow: inset 0px 0px 3px #999;\n  -moz-box-shadow: inset 0px 0px 3px #999;\n  -o-box-shadow: inset 0px 0px 3px #999;\n  -webkit-appearance: none;\n  font-size: 1em;\n  color: #9b9b9b; }\n\n.contact-form textarea {\n  resize: none;\n  height: 120px; }\n\n.contact-form input[type=\"submit\"] {\n  -webkit-transition: all .9s;\n  -moz-transition: all .9s;\n  -o-transition: all .9s;\n  -ms-transition: all .9s;\n  transition: all .9s;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n  color: #FFFFFF !important;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1;\n  overflow: visible;\n  padding: 10px 25px;\n  position: relative;\n  text-decoration: none;\n  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.25);\n  width: auto;\n  text-align: center; }\n\n.contact-form input[type=\"submit\"]:hover {\n  background: #264284; }\n\n.contact-form input[type=\"submit\"]:active {\n  background: #264284; }\n\n.company_address {\n  padding-top: 26px; }\n\n.company_address p {\n  font-size: 0.8125em;\n  color: #9b9b9b;\n  line-height: 1.8em;\n  font-family: verdana, arial, helvetica, helve, sans-serif; }\n\n.company_address p span {\n  text-decoration: underline;\n  color: #1e5dad;\n  cursor: pointer; }\n\n.company_address p span:hover {\n  color: #378fff; }\n\n.map {\n  border: 1px solid #C7C7C7;\n  margin-bottom: 15px; }\n\n.copy-right {\n  text-align: center;\n  background: #01306b;\n  padding: 7px 0px; }\n\n.copy-right p {\n  font-family: 'Ropa Sans', sans-serif;\n  font-size: 1em;\n  color: #fff;\n  line-height: 1.5em; }\n\n.copy-right p a {\n  color: #99c0f1; }\n\n.copy-right p a:hover {\n  color: #fff; }\n\n/***** Media Quries *****/\n@media only screen and (max-width: 1024px) {\n  .wrap {\n    width: 95%; } }\n\n/*  GO FULL WIDTH AT LESS THAN 800 PIXELS */\n@media only screen and (max-width: 800px) {\n  .wrap {\n    width: 95%; }\n  .span_2_of_3 {\n    width: 94%;\n    padding: 3%; }\n  .col {\n    margin: 1% 0 1% 0%; }\n  .span_1_of_3 {\n    width: 94%;\n    padding: 3%; } }\n\n/*  GO FULL WIDTH AT LESS THAN 640 PIXELS */\n@media only screen and (max-width: 640px) and (min-width: 480px) {\n  .wrap {\n    width: 95%; }\n  .span_2_of_3 {\n    width: 94%;\n    padding: 3%; }\n  .col {\n    margin: 1% 0 1% 0%; }\n  .span_1_of_3 {\n    width: 94%;\n    padding: 3%; }\n  .contact-form input[type=\"text\"], .contact-form textarea {\n    width: 97%; } }\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n@media only screen and (max-width: 480px) {\n  .wrap {\n    width: 95%; }\n  .span_2_of_3 {\n    width: 90%;\n    padding: 5%; }\n  .col {\n    margin: 1% 0 1% 0%; }\n  .span_1_of_3 {\n    width: 90%;\n    padding: 5%; }\n  .contact-form input[type=\"text\"], .contact-form textarea {\n    width: 92%; } }\n\n/*----responsive-design----*/\n@media screen and (max-width: 1366px) {\n  .wrap {\n    width: 90%; } }\n\n@media screen and (max-width: 1280px) {\n  .wrap {\n    width: 90%; } }\n\n@media screen and (max-width: 1024px) {\n  .wrap {\n    width: 90%; }\n  .top-nav ul li:nth-child(4), .top-nav ul li:nth-child(5) {\n    display: none; }\n  .grid {\n    width: 29.24%; } }\n\n@media screen and (max-width: 768px) {\n  .wrap {\n    width: 90%; }\n  .top-nav ul li {\n    width: 106px;\n    padding: 22px 2px;\n    font-size: 0.8em; }\n  .grid {\n    width: 27.83%; }\n  .video2 {\n    display: none; }\n  .video-inner img {\n    padding: 6px; }\n  .video-inner span {\n    right: -6px;\n    bottom: 11px; }\n  .popular h3 {\n    font-size: 0.9em; } }\n\n@media screen and (max-width: 640px) {\n  .wrap {\n    width: 95%; }\n  .top-nav ul li:nth-child(2), .lables {\n    display: none; }\n  .grid:nth-child(2), .grid:nth-child(5), .grid:nth-child(8) {\n    margin: 0px 10px; }\n  .grid:nth-child(odd+3) {\n    margin: 0px 10px; }\n  .time {\n    bottom: 54px; }\n  .box1 h4 {\n    font-size: 0.9em; }\n  .time1 {\n    bottom: 37px; }\n  .popular p {\n    font-size: 0.7em; }\n  .comment1 li:first-child {\n    margin-right: 0px; }\n  .view-links ul li img {\n    padding: 0px 3px; } }\n\n@media screen and (max-width: 991px) {\n  .grid {\n    width: 28.24%; } }\n\n@media screen and (max-width: 800px) {\n  .top-nav ul li {\n    width: 101px; }\n  .grid {\n    width: 28%; } }\n\n@media screen and (max-width: 768px) {\n  .left-content {\n    width: 100%;\n    float: none; }\n  .right-content {\n    float: none;\n    width: 50%;\n    margin-top: 2em; } }\n\n@media screen and (max-width: 667px) {\n  .logo {\n    width: 24%; }\n  .recent-videos .grid {\n    width: 43%; } }\n\n@media screen and (max-width: 568px) {\n  .recent-videos {\n    width: 100%; }\n  .recent-videos .grid {\n    width: 44%; }\n  .content-sidebar {\n    float: none;\n    width: 100%; }\n  .box1 {\n    width: 17%;\n    margin: 0 3% 0 0; } }\n\n@media screen and (max-width: 480px) {\n  .logo {\n    width: 23%; }\n  .grid {\n    width: 44%; }\n  .box1 {\n    width: 30%;\n    margin: 0 3% 6% 0; } }\n\n@media screen and (max-width: 414px) {\n  .top-nav {\n    float: right;\n    width: 100%; }\n  .top-nav ul li {\n    width: 121px; }\n  .logo {\n    width: 33%;\n    margin-bottom: .5em; }\n  .grid {\n    width: 80%;\n    margin: 1em auto;\n    float: none; }\n  .grid:nth-child(2), .grid:nth-child(5), .grid:nth-child(8) {\n    margin: 1em auto; }\n  .right-content {\n    float: none;\n    width: 90%;\n    margin: 2em auto 0; }\n  .recent-videos .grid {\n    width: 90%; } }\n\n@media screen and (max-width: 384px) {\n  .top-nav ul li {\n    width: 110px; }\n  .search-left {\n    float: none;\n    width: 100%; }\n  .search-right {\n    float: none;\n    width: 100%; }\n  .search-right input[type=\"text\"] {\n    width: 92%; }\n  .box1 {\n    width: 47%; } }\n\n@media screen and (max-width: 375px) {\n  .top-nav ul li {\n    width: 108px; } }\n\n@media screen and (max-width: 320px) {\n  .top-nav ul li {\n    width: 91px; }\n  .box1 {\n    width: 94%;\n    margin: 4% 5%; }\n  .copy-right {\n    padding: 10px; }\n  .search-right input[type=\"text\"] {\n    width: 91%; }\n  .contact-form {\n    padding-bottom: 0px; } }\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=main.04925104ec603ec1eacb.hot-update.js.map