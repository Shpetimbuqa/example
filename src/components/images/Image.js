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

export default function Image(props) {
  const { image, handleFeatured } = props;

  const handleOnClick = () => {
    handleFeatured(image._id);
  };

  return (
    <Col xs={12} md={4} lg={3}>
      <Card className="p-2">
        <Featured featured={image.featured} onClick={handleOnClick} />
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
          <Button color="danger">Delete</Button>
        </CardBody>
      </Card>
    </Col>
  );
}
