import { useLoaderData, useParams } from "react-router";

import NewsCard from "../../../components/NewsCard/NewsCard";

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
      <h3 className="font-bold mb-5">
        Total <span className="text-secondary">{categoryNews.length} </span>{" "}
        news found
      </h3>
      <div className="card-parent">
        {categoryNews.map((card) => (
          <NewsCard key={card.id} card={card}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
