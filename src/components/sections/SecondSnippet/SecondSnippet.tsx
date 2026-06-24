import "./SecondSnippet.scss";
import brush from "../../../assets/brush.png";

export default function SecondSnippet() {
  return (
    <div className="wrapperSecondSnippet">
      <img src={brush} alt="brush"/>
      <h2>Can’t wait to see <span className="blue">your work</span>! </h2>
    </div>
  );
}