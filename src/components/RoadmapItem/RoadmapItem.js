const RoadmapItem = ({ text }) => {
  return (
    <div className="item">
      <img src="/assets/roadmap-arrow.svg" alt="roadmap-arrow" />
      <div className="text">{text}</div>
    </div>
  );
};

export default RoadmapItem;
