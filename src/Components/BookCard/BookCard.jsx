import { Link } from "react-router-dom";
import styled from "styled-components";
// import "./bookcard.css"
export const BookCard = ({ id, imageUrl, title,section,price ,isbnNumber,description,reviews}) => {


  return (
    <Link to={`/books/${id}`} > <div className="book_card"> 
    <img src={imageUrl} alt="" />
    <h2 className="title "><b>Title: </b>{title}</h2>
    <p className="section"><b>Section: </b>{section}</p>
    <p className="price"><b>Price: </b>{price}</p>
    <p className="isbnNumber"><b>isbnNumber: </b>{isbnNumber}</p>
    <p className="description"><b>description: </b>{description}</p>
    <p className="reviews"><b>reviews: </b>{reviews}</p>
    </div></Link>
    
  )
  // Bookcard is a card looking component, that is also a 'Link' for react-router
  //  it's basically shows one books information.
  // You can style custom tags with styled components in following way:
  // styled(Link)`
  //   color: xyz;
  // `
  //  now this container is a link that is also a card.
  //  card will have following 'children':
  //  div with className 'bookCard'
  //  Image of the book
  //  title of the book. h2 with classname 'title'
  //  price of book with class 'price'
  //
  // rough example:
  // <YourStyledLink to={}>
  //    title, image price etc here
  // </YourStyledLink>
};