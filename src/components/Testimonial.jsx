import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Review from "./Review";
import Slider from "react-slick";
const Testimonial = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="py-6">
      <div className="my-4">
        <h2 className="font-semibold text-3xl lg:text-4xl text-center mb-4">
          What student’s say
        </h2>
        <p className="text-sm text-gray-400 text-center">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-2">
        <Slider {...settings}>
          {review.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
