webpackHotUpdate("main",{

/***/ "./src/client/Components/Dashboard/AddNewContent.js":
/*!**********************************************************!*\
  !*** ./src/client/Components/Dashboard/AddNewContent.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ../../Styles/dashboard.scss */ "./src/client/Styles/dashboard.scss");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AddNewContent extends _react2.default.Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.state = {
            categoryList: false,
            title: '',
            category: '',
            description: ''
        }, _temp;
    }

    componentDidMount() {
        _axios2.default.get(`/api/category`).then(res => {
            console.log(res.data);
            this.setState({
                categoryList: res.data
            });
        }).catch(e => {
            console.log(e);
        });
    }
    render() {
        return _react2.default.createElement(
            'div',
            { className: 'right-content-dashboard', id: 'regLoginForm' },
            _react2.default.createElement(
                'form',
                { role: 'form', onSubmit: this.handlePayment },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group has-success has-feedback' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label', 'for': 'inputSuccess3' },
                                'Course Name'
                            ),
                            _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'inputSuccess3', required: 'required', onChange: e => {
                                    this.setState({
                                        title: e.target.value
                                    });
                                } }),
                            _react2.default.createElement('i', { className: 'fa fa-check form-control-feedback' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group has-warning has-feedback' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label', 'for': 'inputWarning3' },
                                'Course Category'
                            ),
                            _react2.default.createElement(
                                'select',
                                { className: 'form-control', required: 'required', onChange: e => {
                                        this.setState({
                                            catagory: e.target.value
                                        });
                                    } },
                                _react2.default.createElement(
                                    'option',
                                    { value: '-1' },
                                    'Select a category'
                                ),
                                this.state.categoryList ? this.state.categoryList.map(category => {
                                    return _react2.default.createElement(
                                        'option',
                                        { key: category._id, value: category._id },
                                        category.name
                                    );
                                }) : _react2.default.createElement(
                                    'option',
                                    { value: '-1' },
                                    'Loading...'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-4' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group has-warning has-feedback' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label', 'for': 'inputError3' },
                                'Course Price'
                            ),
                            _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'inputError3', required: 'required', onChange: e => {
                                    this.setState({
                                        price: parseInt(e.target.value)
                                    });
                                } })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement('input', { type: 'file', id: 'exampleInputFile', onChange: this.handleFileUpload }),
                            _react2.default.createElement(
                                'p',
                                { className: 'help-block' },
                                this.state.uploadStatus ? this.state.uploadStatus : 'Upoad Your Course Documents Here.'
                            ),
                            this.state.msg && _react2.default.createElement(
                                'h3',
                                { className: 'help-block' },
                                this.state.msg
                            )
                        )
                    )
                ),
                _react2.default.createElement('input', { type: 'submit', className: 'btn btn-default', defaultValue: 'Pay & Upload' })
            )
        );
    }
}

exports.default = AddNewContent;

/***/ })

})
//# sourceMappingURL=main.c55cf2b8c62eed340226.hot-update.js.map