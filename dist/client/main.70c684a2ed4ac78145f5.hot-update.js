webpackHotUpdate("main",{

/***/ "./src/client/Components/Content/Single.Content.js":
/*!*********************************************************!*\
  !*** ./src/client/Components/Content/Single.Content.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SingleContent = ({ single }) => _react2.default.createElement(
  'section',
  null,
  _react2.default.createElement(
    'div',
    { className: 'title' },
    _react2.default.createElement(
      'h3',
      null,
      single.title ? single.title : 'Untitled'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h4',
          null,
          'By:'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          single.author ? single.author.username : 'Admin'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          _react2.default.createElement('img', { src: '/images/sub.png', title: 'subscribe' }),
          'subscribe'
        )
      )
    )
  ),
  _react2.default.createElement(
    'div',
    { className: 'video-inner' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '#' },
      _react2.default.createElement('img', { src: '/images/b11.png', title: 'videoname' }),
      _react2.default.createElement(
        'span',
        null,
        '10:00'
      )
    )
  ),
  _react2.default.createElement(Social, null),
  _react2.default.createElement(
    'div',
    { className: 'clear' },
    ' '
  ),
  _react2.default.createElement(
    'div',
    { className: 'video-details' },
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Uploaded on ',
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '#' },
            'June 21, 2013'
          ),
          ' by ',
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '#' },
            'Lorem'
          )
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'span',
          null,
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        )
      )
    ),
    _react2.default.createElement(
      'ul',
      { className: 'other-links' },
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          'youtube.com/videos-tube'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          'facebook.com/videos-tube'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          'Twitter.com/videos-tube'
        )
      )
    )
  ),
  _react2.default.createElement(
    'div',
    { className: 'clear' },
    ' '
  ),
  _react2.default.createElement(
    'div',
    { className: 'tags' },
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Tags:'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          'Games'
        ),
        ' ,'
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          'HD-Videos'
        )
      )
    )
  )
);

exports.default = SingleContent;

/***/ }),

/***/ "./src/client/Views/Single.js":
/*!************************************!*\
  !*** ./src/client/Views/Single.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Sidebar = __webpack_require__(/*! ../Components/Sidebar */ "./src/client/Components/Sidebar.js");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Single = __webpack_require__(/*! ../Components/Content/Single.Social */ "./src/client/Components/Content/Single.Social.js");

var _Single2 = _interopRequireDefault(_Single);

var _Grid = __webpack_require__(/*! ../Components/Grids/Grid */ "./src/client/Components/Grids/Grid.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _SearchBar = __webpack_require__(/*! ../Components/SearchBar */ "./src/client/Components/SearchBar.js");

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _content = __webpack_require__(/*! ../Actions/content */ "./src/client/Actions/content.js");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Single3 = __webpack_require__(/*! ../Components/Content/Single.Content */ "./src/client/Components/Content/Single.Content.js");

var _Single4 = _interopRequireDefault(_Single3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Single extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      single: false
    }, _temp;
  }

  componentDidMount() {
    if (this.props.blogAll) {
      this.props.setSingleRedux();
      this.setState({
        single: true
      });
      console.log('pre');
    } else {
      console.log('post');
      _axios2.default.get(`/api/content/${this.props.match.params.id}`).then(res => {
        // console.log(res);
        this.props.setOneContent(res.data);
        this.setState({
          single: true
        });
      }).catch(e => {
        console.log('Error getting message', e);
        throw e;
      });
    }
  }

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'content' },
      _react2.default.createElement(
        'div',
        { className: 'inner-page' },
        _react2.default.createElement(_SearchBar2.default, null),
        _react2.default.createElement(_Single4.default, { single: this.props.single }),
        _react2.default.createElement(
          'div',
          { className: 'clear' },
          ' '
        ),
        _react2.default.createElement(
          'div',
          { className: 'related-videos' },
          _react2.default.createElement(
            'h6',
            null,
            'Related-Videos'
          ),
          _react2.default.createElement('div', { className: 'grids' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'clear' },
          ' '
        )
      ),
      _react2.default.createElement(_Sidebar2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'clear' },
        ' '
      )
    );
  }
}

const mapStateToProps = state => ({
  allContent: state.content.all,
  single: state.content.single
});

const mapDispatchToProps = (dispatch, props, getState) => ({
  setOneContent: data => dispatch((0, _content.setSingleContent)(data)),
  setSingleRedux: () => dispatch((0, _content.getSingle)(props.match.params.id))
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Single);

/***/ })

})
//# sourceMappingURL=main.70c684a2ed4ac78145f5.hot-update.js.map