const calculateAvgRating = (reviews) => {
  const satisfaction = reviews?.reduce((acc, item) => acc + item.rating, 0);
  const ratings =
    satisfaction === 0
      ? ""
      : satisfaction === 1
      ? satisfaction
      : (satisfaction / reviews?.length).toFixed(1);

  return {
    satisfaction,
    ratings,
  };
};

export default calculateAvgRating;
