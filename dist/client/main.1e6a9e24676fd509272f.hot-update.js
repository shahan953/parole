webpackHotUpdate("main",{

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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _Sidebar = __webpack_require__(/*! ../Components/Sidebar */ "./src/client/Components/Sidebar.js");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Single = __webpack_require__(/*! ../Components/Content/Single.Social */ "./src/client/Components/Content/Single.Social.js");

var _Single2 = _interopRequireDefault(_Single);

var _Grid = __webpack_require__(/*! ../Components/Grids/Grid */ "./src/client/Components/Grids/Grid.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _SearchBar = __webpack_require__(/*! ../Components/SearchBar */ "./src/client/Components/SearchBar.js");

var _SearchBar2 = _interopRequireDefault(_SearchBar);

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
      this.props.getFromBlog();
      this.setState({
        single: true
      });
      console.log('pre');
    } else {
      console.log('post');
      Axios.get(`http://localhost:5000/siu/blog/${this.props.match.params.id}`).then(res => {
        // console.log(res);
        this.props.getOneBlog(res.data);
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
        _react2.default.createElement(
          'div',
          { className: 'title' },
          _react2.default.createElement(
            'h3',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
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
                'Author'
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
        _react2.default.createElement(_Single2.default, null),
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
        ),
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
          _react2.default.createElement(
            'div',
            { className: 'grids' },
            _react2.default.createElement(_Grid2.default, null),
            _react2.default.createElement(_Grid2.default, null),
            _react2.default.createElement(_Grid2.default, null)
          )
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
  setOneContent: data => dispatch(setSingleContent(data)),
  getFromContent: () => dispatch(getSingle(props.match.params.id)),
  singleContent: () => getState().content.all
});

exports.default = connect()(Single);

/***/ })

})
//# sourceMappingURL=main.1e6a9e24676fd509272f.hot-update.js.map