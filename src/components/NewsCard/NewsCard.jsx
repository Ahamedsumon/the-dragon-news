import { FaRegBookmark, FaStar } from "react-icons/fa";
import { IoEye, IoShareSocialOutline } from "react-icons/io5";

const NewsCard = ({ card }) => {
  const { author, thumbnail_url, details, total_view, rating } = card;

  const formatedDate = new Date(author.published_date)
    .toISOString()
    .split("T")[0];

  const starByRating = (
    <>
      <span>
        <FaStar fill="#FF8C47"></FaStar>
      </span>
    </>
  );
  let showStar;
  if (rating.number === 1) {
    showStar = (
      <>
        <span>{starByRating}</span>
      </>
    );
  } else if (rating.number === 2) {
    showStar = (
      <>
        <span>{starByRating}</span>
        <span>{starByRating}</span>
      </>
    );
  } else if (rating.number === 3) {
    showStar = (
      <>
        <span>{starByRating}</span>
        <span>{starByRating}</span>
        <span>{starByRating}</span>
      </>
    );
  } else if (rating.number === 4) {
    showStar = (
      <>
        <span>{starByRating}</span>
        <span>{starByRating}</span>
        <span>{starByRating}</span>
        <span>{starByRating}</span>
      </>
    );
  } else if (rating.number === 5) {
    showStar = (
      <>
        <span>{starByRating}</span>
        <span>{starByRating}</span>
        <span>{starByRating}</span>
        <span>{starByRating}</span>
        <span>{starByRating}</span>
      </>
    );
  }
  return (
    <div key={card.id} className="card-child shadow-md rounded-md mb-6">
      {/* Card Header */}
      <div className="flex justify-between bg-base-200 py-4 px-3 rounded-t-md">
        <div className="flex w-full gap-2 items-center">
          {/* <img src={userImage} alt="" /> */}
          <div className="w-12 h-12">
            <img className="rounded-full" src={author?.img} alt="" />
          </div>
          <div className="">
            <p>{formatedDate}</p>
            <p>{author?.name}</p>
          </div>
        </div>
        <div className="flex gap-3 items-center ">
          <span>
            <FaRegBookmark></FaRegBookmark>
          </span>
          <span>
            <IoShareSocialOutline />
          </span>
        </div>
      </div>
      {/* Card Body */}
      <div className=" py-4 px-3">
        <p className="font-bold text-md lg:text-4xl">{card?.title}</p>

        <img className="w-full my-4" src={thumbnail_url} alt="" />

        <div className="border-b border-b-[#E7E7E7] pb-4">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <span className="text-[#FF8C47] font-semibold cursor-pointer hover:underline">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </div>
      </div>
      {/* Card Footer */}
      <div className="pb-4 px-3 flex items-center justify-between">
        <div className="flex items-center">
          <span className="flex items-center">{showStar}</span>{" "}
          <span className="ml-2 text-accent">{rating.number}</span>
        </div>
        {/* Eye icon */}
        <p className="flex items-center gap-2">
          <span className="text-xl">
            <IoEye fill="#706F6F"></IoEye>
          </span>
          <span>{total_view}</span>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
