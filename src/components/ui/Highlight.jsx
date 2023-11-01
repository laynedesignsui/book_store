//? this component is used to create visually appealing highlights

const Highlight = ({ icon, title, para }) => (
  <div className="highlight">
    <div className="highlight__img">{icon}</div>
    <h3 className="highlight__subtitle">{title}</h3>
    <p className="highlight__para">{para}</p>
  </div>
);

export default Highlight;
