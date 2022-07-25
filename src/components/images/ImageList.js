import Image from "./Image";
import { Alert, Row } from "reactstrap";
import Spinner from "../Spinner";

function ImageList(props) {
  const { images, loading } = props;

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {!images || !images.length === 0 ? (
            <Alert color="primary">There are no images!</Alert>
          ) : (
            <Row>
              {images.map((image) => (
                <Image
                  key={image._id}
                  image={image}
                  handleFeatured={props.handleFeatured}
                />
              ))}
            </Row>
          )}
        </>
      )}
    </div>
  );
}

export default ImageList;
