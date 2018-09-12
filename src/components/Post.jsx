import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: "",
      categories: []
    };
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.submit = this.Submit.bind(this);
    this.getCat = this.getCat.bind(this);
  }

  getCat() {
    fetch("/api/category/getcategory")
      .then(response => response.json())
      .then(categories => {
        console.log(JSON.stringify(categories));
        this.setState({
          categories: categories
        });
      });
  }
  componentDidMount() {
    this.getCat();
  }

  Submit() {
    var name = document.getElementById("title").value;
    var description = document.getElementById("desc").value;
    var type = document.getElementById("select").value;
    var pic = document.getElementById("pic").value;
    var formBody = [];
    formBody.push("name=" + encodeURIComponent(name));
    formBody.push("description=" + encodeURIComponent(description));
    formBody.push("type=" + encodeURIComponent(type));
    formBody.push("pic=" + encodeURIComponent(pic));
    formBody = formBody.join("&");

    console.log(JSON.stringify(formBody) + "status");
    fetch("/api/register", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formBody
    })
      .then(response => response.json())
      .then(status => {
        if (status.name != "") {
          window.location.href = "/";
          alert("Your add has been posted");
        } else {
          alert("Failed to submit" + JSON.stringify(status));
        }
      })
      .catch(err => {
        alert("Error to submit: " + JSON.stringify(err));
      });
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
    data.append("filename", this.fileName.value);

    fetch("http://localhost:8000/upload", {
      method: "POST",
      body: data
    }).then(response => {
      response.json().then(body => {
        this.setState({ imageURL: `http://localhost:8000/${body.file}` });
        var pic = JSON.stringify(body.file);
        console.log(pic);
      });
    });
  }

  render() {
    return (
      <div className="container hm">
        <div className="heading">
          <h2>Post your Ad here</h2>
        </div>
        <div className="col-md-12 content">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-9">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3>Submit your Free Ad</h3>
                </div>
                <div className="panel-body">
                  <form className="form-horizontal" role="form">
                    <div className="form-group">
                      <label className="col-sm-3 ">Ad Title</label>
                      <div className="col-sm-9">
                        <input
                          type="addTitle"
                          className="form-control"
                          id="title"
                          placeholder="Title"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-3 ">Description</label>
                      <div className="col-sm-9">
                        <textarea
                          type="description"
                          className="form-control"
                          id="desc"
                          rows="5"
                          placeholder="Description"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-3">Category</label>
                      <div className="col-sm-9">
                        <select className="form-control" id="select">
                          {this.state.categories.map(category => (
                            <option value={category.category}>
                              {category.category}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-3 ">Upload Pic</label>
                      <div className="col-md-8">
                        <form onSubmit={this.handleUploadImage}>
                          <div className="col-md-12 fle">
                            <div
                              className="col-md-5 pad"
                              style={{ color: "black" }}
                            >
                              <input
                                ref={ref => {
                                  this.uploadInput = ref;
                                }}
                                type="file"
                              />
                              <br />
                              <input
                                ref={ref => {
                                  this.fileName = ref;
                                }}
                                type="text"
                                placeholder="Desired name"
                              />
                              <button className="btn btn-default">
                                Upload
                              </button>
                            </div>

                            <div className="col-md-7 ">
                              <img
                                className="upl "
                                src={this.state.imageURL}
                                alt=""
                              />
                            </div>

                            <br />
                            <br />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-9">
                        <input
                          type="hidden"
                          className="form-control"
                          id="pic"
                          placeholder="pic"
                          value={this.state.imageURL.substring(29)}
                        />
                      </div>
                    </div>
                  </form>
                  <button
                    className="btn btn-primary"
                    onClick={this.submit}
                    type="submit"
                    id="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
