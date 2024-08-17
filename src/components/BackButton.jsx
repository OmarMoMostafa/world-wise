import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      style="back"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        navigate("/app/cities");
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
