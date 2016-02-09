import React , { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

  render(){

    if (! this.props.book){
      return (<div> Please select the book ...</div>)
    }

    return (<div>
              <h3>Book Details:</h3>
              <div><strong>Name:</strong> {this.props.book.title}</div>
              <div><strong>Description:</strong> The Book has {this.props.book.pages} pages</div>
          </div>);
  }

}


function mapStateToProps(state){
  return {
    book: state.activeBook
  }
}



export default connect(mapStateToProps)(BookDetail)
