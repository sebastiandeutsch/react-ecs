import { Component } from '../framework'

export default class BookState extends Component{
  static displayName = 'BookState'
  constructor( {title, isbn} ) {
    super()
    this.title = title;
    this.isbn = isbn;
  }
  
}
