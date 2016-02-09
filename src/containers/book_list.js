import React, { Component } from 'react';

import { connect } from 'react-redux';
import { selectBook } from "../actions/index";
import { bindActionCreators} from 'redux';

class BookList extends Component{



  render(){
    console.dir(this)
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )

  }

  renderList(){

    return( this.props.books.map( (book) => {
      return (<li
              onClick={()=> this.props.selectedBook(book)}
              key={book.title}
              className="list-group-item">
              {book.title}
            </li>);
    })
  )
  }

}
function mapStateToProps(state){
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch){

  return bindActionCreators({ selectedBook: selectBook} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps )(BookList);
