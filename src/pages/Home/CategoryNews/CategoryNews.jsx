import { useLoaderData, useParams } from "react-router";

import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";

const CategoryNews = () => {
  const { id } = useParams();
  const datas = useLoaderData();
  let categoryNews;

  if (Number(id) === 0) {
    categoryNews = datas;
  } else if (Number(id) === 1) {
    categoryNews = datas.filter((news) => news.others.is_today_pick);
  } else {
    categoryNews = datas.filter((data) => data.category_id === +id);
  }

  return (
    <div>
      <h3>Category news {categoryNews.length}</h3>
      <div className="card-parent">
        {categoryNews.map((card) => (
          <div key={card.id} className="card-child shadow-md rounded-md mb-3">
            {/* Card Header */}
            <div className="flex justify-between bg-base-200 py-4 px-3 rounded-t-md">
              <div className="flex w-full gap-2 items-center">
                {/* <img src={userImage} alt="" /> */}
                <div className="w-12 h-12">
                  <img className="rounded-full" src={card.author?.img} alt="" />
                </div>
                <div className="">
                  <p>{card.author.published_date}</p>
                  <p>{card.author?.name}</p>
                </div>
              </div>
              <div className="flex gap-3 items-center ">
                <span>
                  <CiBookmark></CiBookmark>
                </span>
                <span>
                  <IoShareSocialOutline />
                </span>
              </div>
            </div>
            {/* Card Body */}
            <div className=" py-4 px-3">
              <p className="font-bold text-md lg:text-4xl">{card?.title}</p>

              <img className="w-full my-4" src={card?.thumbnail_url} alt="" />

              <p className="text-accent">
                {card.details}
                <span className="text-[#FF8C47]">Read More</span>
              </p>
            </div>
            {/* Card Footer */}
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
