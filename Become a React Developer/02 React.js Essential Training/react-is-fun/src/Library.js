import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import FavouriteColorForm from './FavouriteColorForm';


class Library extends Component{
  static defaultProps = {
    books: [
      {title: "Tahoe Tales", author: "Chet Whitley", pages: 100}
    ]
  }

  state = {
    open: false,
    freeBookmark: false,
    data: [],
    loading: false
  }

  componentDidMount(){
    console.log("The component is now mounted!");
    this.setState({loading: true});
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => this.setState({data, loading: false}))
  }

  componentDidUpdate(){
    console.log("The component was updated!");
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open : !prevState.open
    }))
  }

  render(){
    const {books} = this.props;
    return (
      <div>
        <h1>Welcome to the Library</h1>
        <section>
          <h2>Books (array map)</h2>
          {books.map((book, i) => <Book key={i}
                                        title={book.title}
                                        author={book.author}
                                        pages={book.pages}
                                        freeBookmark={this.state.freeBookmark}/>)}
        </section>
        <section>
          <h2>Library Opened & Free Bookmark (status)</h2>
          <p>The library is {this.state.open ? 'open' : 'closed'}.</p>
          <button onClick={this.toggleOpenClosed}>Change</button>
          <p>Free bookmark today: {this.state.freeBookmark ? 'Yes' : 'No'}.</p>
        </section>
        <section>
          <h2>Product of the week (API call)</h2>
          {
            this.state.loading ? "loading..." : (
              this.state.data.map(product =>
                <div key={product.id}>
                  <p>Product of the week: {product.name}</p>
                  <img src={product.image} height={100} alt={product.name}/>
                </div>
              )
            )
          }
        </section>
        <h2>Favourite Color (form input)</h2>
        <section>
          <FavouriteColorForm/>
        </section>
        <br/><br/><br/><br/><br/><br/>
      </div>
    )
  }
}

Library.propTypes = {
  books: PropTypes.array
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool
}

export default Library;
