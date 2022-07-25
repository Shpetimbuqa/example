import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Container } from "reactstrap";
import ImageList from "./components/images/ImageList";
import { fetchData } from "./data";

function App() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchData()
      .then((response) => {
        setLoading(false);
        setImages(response);
      })
      .catch((error) => {});
  }, []);

  const handleFeatured = (imageId) => {
    setImages(
      images.map((image) => {
        if (image._id === imageId) {
          return {
            ...image,
            featured: !image.featured,
          };
        }

        return image;
      })
    );
  };

  return (
    <Container className="App">
      <Header />
      <div className="mt-3">
        <ImageList
          loading={loading}
          images={images}
          handleFeatured={handleFeatured}
        />
      </div>
    </Container>
  );
}

export default App;
