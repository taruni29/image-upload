import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCategory } from "../redux_search";
import store from "../store";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      img: "",
      categoryType: ""
    };

    this.cat = this.cat.bind(this);
  }

  cat() {
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
    this.cat();
  }

  click(e) {
    localStorage.setItem("type", e);
    this.props.selectCategory({ type: this.setState({ categoryType: e }) });
    console.log(JSON.stringify(store.getState()) + "kiran");
    console.log(this.state.categoryType);
    window.location.href = "/type";
  }
  render() {
    return (
      <div className="order-xl-1 order-lg-1 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div className="sidebar-item-box">
          <div className="gradient-wrapper">
            <ul className="list-group list-unstyled">
              <a href="/" className="list-group-item active">
                All Categories
              </a>
              {this.state.categories.map(categorys => (
                <div>
                  <a
                    className="list-group-item"
                    onClick={this.click.bind(this, categorys.category)}
                  >
                    <img
                      src={"../images/categories/" + categorys.img}
                      alt="images"
                      className="img-fluid"
                    />
                    <span>{categorys.category}</span>
                  </a>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categoryType: state.search.categoryType.type
  };
};

const mapDispatchToProps = {
  selectCategory
};

const category = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
export default category;
