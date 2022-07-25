import { Button } from "reactstrap";
import { Star } from "react-feather";

function Featured(props) {
  const { featured, onClick } = props;
  return (
    <div>
      <Button color="default" onClick={onClick}>
        <Star style={{ fill: featured ? "yellow" : " " }} />
      </Button>
    </div>
  );
}

export default Featured;
