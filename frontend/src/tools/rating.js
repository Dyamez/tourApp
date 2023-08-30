export default function total(reviews) {
  const satisfaction = reviews?.reduce((acc, item) => acc + item.rating, 0);
  const rating =
    satisfaction === 0
      ? ""
      : satisfaction === 1
      ? satisfaction
      : (satisfaction / reviews?.length).toFixed(1);

  return {
    satisfaction,
    rating,
  };
}
