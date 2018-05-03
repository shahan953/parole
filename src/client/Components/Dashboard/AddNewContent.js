import React from 'react';
import '../../Styles/dashboard.scss';
import Axios from 'axios';
import storage from '../../Firebase/firebase';

class AddNewContent extends React.Component{
  state = {
    categoryList: false,
    title: '',
    category: '',
    description: '',
    parmalink: '',
    thumbnail: '',
    uploadStatus: null
  }
  componentDidMount() {
    Axios.get(`/api/category`).then((res) => {
      this.setState({
        categoryList: res.data
      })
    }).catch((e) => {
      console.log(e)
    })
  }

  handleFileUpload = (e) => {
    this.setState({
        uploadStatus: 'Please Wait...',            
    })
    const file = e.target.files[0];        
    const storageRef = storage.ref('projects/'+ file.name);
    const task = storageRef.put(file).then((res) => {
      this.setState({
        uploadStatus: 'Uploaded Successfully!',
        //Getting the uploaded file URL
        parmalink: res.metadata.downloadURLs[0]
      })
    }).catch((e)=>{
      console.log("Error", e)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('processing')
    const body = {
        title: this.state.title,
        category: this.state.category,
        description: this.state.description,
        parmalink: this.state.parmalink
    };
    Axios({
        method: 'post',
        url: `/api/content`,
        data: body,
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('auth')
        }
    }).then((res) => {
        console.log(res.data)
        this.props.history.push('/dashboard/mycontent')
    }).catch((e) => {
        console.log(e)
    })
  }

  render() {
    return (
    <div className="right-content-dashboard" id="regLoginForm">
      <form role="form" onSubmit={this.handleSubmit} >
          <div className="row">
              <div className="col-md-6">
                  <div className="form-group has-success has-feedback">
                      <label className="control-label" htmlFor="inputSuccess3">Title</label>
                      <input type="text" className="form-control" id="inputSuccess3" required="required" onChange={(e)=> {
                          this.setState({
                              title: e.target.value
                          });
                      }}/>
                      {/* <i className="fa fa-check form-control-feedback"></i> */}
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group has-warning has-feedback">
                      <label className="control-label" htmlFor="inputWarning3">Category</label><br/>
                      <select className="form-control" required="required" onChange={(e) => {
                          this.setState({
                              category: e.target.value
                          })
                      }}>
                        <option value="-1">Select a category</option>
                        {this.state.categoryList ? 
                        this.state.categoryList.map((category) => {
                          return <option key={category._id} value={category._id}>{category.name}</option>
                        })
                        : <option value="-1">Loading...</option>}
                      </select>
                  </div>
              </div>
              <div className="col-md-12">
                  <div className="form-group has-warning has-feedback">
                      <label className="control-label" htmlFor="inputError3">Description</label>
                      <textarea type="text" className="form-control" id="inputError3" onChange={(e) => {
                          this.setState({
                              description: e.target.value
                          })
                      }}></textarea>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-md-12">
                  <div className="form-group">
                      <label className="control-label" htmlFor="inputError3">Upload File</label><br/>
                      
                      <input type="file" id="exampleInputFile" onChange={this.handleFileUpload}/><br/>
                      <p className="help-block">{this.state.uploadStatus ? this.state.uploadStatus : 'Upload your file'}</p>
                      {this.state.msg && <h3 className="help-block">{this.state.msg}</h3>}
                  </div>
              </div>
          </div><br/>
          {/* <div className="row">
              <div className="col-md-12">
                  <div className="form-group">
                      <label className="control-label" htmlFor="inputError3">Upload Thumbnail</label><br/>
                      <input type="file" id="exampleInputFile" onChange={this.handleFileUpload}/><br/>
                      <p className="help-block">{this.state.uploadStatus ? this.state.uploadStatus : 'Upload your file'}</p>
                      {this.state.msg && <h3 className="help-block">{this.state.msg}</h3>}
                  </div>
              </div>
          </div> */}
          <input type="submit" className="btn btn-primary" defaultValue="Save & Publish"/>
      </form>
    </div>
    )
  }
}

export default AddNewContent;