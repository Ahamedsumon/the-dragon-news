import Marquee from "../Marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary py-2 px-3">Latest</p>
      <Marquee>
        <p className="font-bold">
          {" "}
          I can be a React component, multiple React components, or just some
          text.
        </p>
        <p className="font-bold">
          {" "}
          I can be a React component, multiple React components, or just some
          text.
        </p>
        <p className="font-bold">
          {" "}
          I can be a React component, multiple React components, or just some
          text.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
