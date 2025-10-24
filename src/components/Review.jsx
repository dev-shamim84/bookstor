const Review = ({ review }) => {
  return (
    <div className="bg-white shadow rounded-xl px-4 py-2 h-full flex flex-col mr-4 ">
      <p className="text-gray-400 text-sm">{review.reviewText.slice(0, 110)}</p>
      <div className="flex gap-3 items-center my-4">
        <div>
          <img src={review.img} alt="" />
        </div>
        <div>
          <h5 className="font-semibold">{review.name}</h5>
          <h6 className="text-gray-400 text-sm">{review.job}</h6>
        </div>
      </div>
    </div>
  );
};

export default Review;
