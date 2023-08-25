import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./step5.css";
const Step5 = () => {
  return (
    <div className="step-5">
      <img className="union-icon" alt="" src="/union.svg" />
      <div className="click-on-step-container">
        <p className="click-on-step">
          Click on step one to begin your pre-boarding process. As you complete
          each activity along your onboarding journey, you'll earn valuable
          synergy points. These points represent the collective energy and
          collaboration we foster here.
        </p>
        <p className="click-on-step">I’m so excited for you! Best of luck.</p>
      </div>
      <Button className="button" variant="primary">
        Let’s Go
      </Button>
      <img className="group-icon" alt="" src="/group.svg" />
    </div>
  );
};

export default Step5;
