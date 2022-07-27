import Featured from "./Featured";
import React from "react";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import ImagesContext, {
  useImagesContext,
} from "../../lib/context/ImagesContext";

export default function Image(props) {
  const { image } = props;

  const imagesContext = useImagesContext();

  const handleOnToggleFeatured = () => {
    imagesContext.toggleFeatured(image._id);
  };

  const handleOnDelete = () => {
    imagesContext.deleteImage(image._id);
  };

  return (
    <Col xs={12} md={4} lg={3}>
      <Card className="p-2">
        <Featured featured={image.featured} onClick={handleOnToggleFeatured} />
        <CardImg
          top
          style={{ objectFit: "contain", marginTop: 10 }}
          width="100px"
          height={200}
          src={image.img}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{image.title}</CardTitle>
          <CardText>{image.description}</CardText>
          <Button color="primary" style={{ marginRight: 10 }}>
            Edit
          </Button>
          <Button color="danger" onClick={handleOnDelete}>
            Delete
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
}
