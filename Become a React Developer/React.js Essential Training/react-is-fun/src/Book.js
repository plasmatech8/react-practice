import React, {Component} from 'react';


class Book extends Component{
  render(){
    const {title="No title found", author="No author found",
            pages="N/A", freeBookmark="N/A"} = this.props;
    return (
      <section>
        <h3>{title}</h3>
        <p>By {author}</p>
        <p>{pages} pages</p>
        <p>{freeBookmark ? 'Free bookmark - Yes!' : 'No free bookmark.'}</p>
      </section>
    )
  }
}

export default Book;