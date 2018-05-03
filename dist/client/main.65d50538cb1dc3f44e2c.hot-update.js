webpackHotUpdate("main",{

/***/ "./src/client/Views/Category.js":
/*!**************************************!*\
  !*** ./src/client/Views/Category.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Grid = __webpack_require__(/*! ../Components/Grids/Grid */ "./src/client/Components/Grids/Grid.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _CategoryList = __webpack_require__(/*! ../Components/Categories/CategoryList */ "./src/client/Components/Categories/CategoryList.js");

var _CategoryList2 = _interopRequireDefault(_CategoryList);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Category extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      content: false
    }, _temp;
  }

  componentDidMount() {
    Axios.get('/api/content/category/').then(res => {
      this.props.setContent(res.data);
      this.setState({
        content: true
      });
    }).catch(e => {
      console.log('error found in ./api/content/', e);
    });
  }

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'content' },
      _react2.default.createElement(
        'div',
        { className: 'categories' },
        _react2.default.createElement(_CategoryList2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'categories-types' },
          _react2.default.createElement(
            'div',
            { className: 'recent-videos' },
            _react2.default.createElement(
              'h5',
              null,
              _react2.default.createElement('img', { src: '/images/recent.png', alt: '' }),
              'Recent-videos'
            ),
            _react2.default.createElement(
              'div',
              { className: 'grids grids2' },
              props.allContent.map((content, key) => {
                return _react2.default.createElement(_Grid2.default, { content: content, key: content._id });
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'recent-videos' },
            _react2.default.createElement(
              'h5',
              null,
              _react2.default.createElement('img', { src: '/images/recent.png', alt: '' }),
              'Most-View-videos'
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'clear' },
        ' '
      )
    );
  }
}
const mapStateToProps = state => ({
  allContent: state.content.all
});

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Category);

/***/ })

})
//# sourceMappingURL=main.65d50538cb1dc3f44e2c.hot-update.js.map