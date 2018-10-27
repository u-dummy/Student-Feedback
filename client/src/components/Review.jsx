import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <div>Username: {this.state.featuredReview.user.username}</div> */}
        {/* <div>Picture: {this.props.featuredReview.user.userPic}</div> */}
        <div>Rating: {this.props.featuredReview.rating}</div>
        <div>Review: {this.props.featuredReview.review}</div>
        <div>Date: {this.props.featuredReview.date}</div>
        <div>Upvotes: {this.props.featuredReview.upvotes}</div>
        <div>Downvotes: {this.props.featuredReview.downvotes}</div>
        {/* <div>Username: {this.state.featuredReview.user.username}</div> */}
      </div>
    );
  }
}

export default Review;

// { reviewId: 1232,
//   userId: 135,
//   courseId: 99,
//   rating: 2,
//   review: 'Tenetur voluptatem eaque expedita doloribus ut consequuntur. Velit laudantium quia voluptates et porro velit a dolorem sit. Libero a animi autem voluptas et vel cupiditate impedit aut. Minus unde voluptatem sunt omnis iure distinctio nisi magnam ullam. Ut voluptate consectetur veniam.',
//   date: 2018-01-16T16:11:31.000Z,
//   upvotes: 94,
//   downvotes: 6,
//   reported: 0,
//   createdAt: '2018-10-26',
//   updatedAt: '2018-10-26',
//   user: 
//    { userId: 135,
//      username: 'Nikolas Lang',
//      userPic: 'NL',
//      courseCount: 30,
//      reviewCount: 18,
//      createdAt: '2018-10-26',
//      updatedAt: '2018-10-26' } }