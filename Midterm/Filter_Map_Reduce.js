const reviews = [
    {
      name: "Amit",
      rating: 8,
      liked: true
    },
    {
      name: "Mei",
      rating: 6,
      liked: false
    },
    {
      name: "Priya",
      rating: 9,
      liked: true
    },
    {
      name: "Wei",
      rating: 7,
      liked: true
    }
  ];


  function processReviews(reviews) {
    // 1. Filter reviews to include only those where liked is true
    const filteredReviews = reviews.filter(review => review.liked === true);
  
    // 2. Map to extract names of people who liked the movie
    const namesOfPeopleWhoLiked = filteredReviews.map(review => review.name);
  
    // 3. Calculate the average rating of the filtered reviews
    const totalRating = filteredReviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = filteredReviews.length > 0 ? totalRating / filteredReviews.length : 0;
  
    // Return the results as an object
    return {
      names: namesOfPeopleWhoLiked,
      averageRating: averageRating
    };
  }
  
  