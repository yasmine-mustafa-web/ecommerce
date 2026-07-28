import { Image } from "@chakra-ui/react";
import { useRef, useState } from "react";
import ProductModal from "../ProductModal";


const ZoomImage = ({ src }) => {
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      imgRef.current.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y });
  };

  return (
    <div
      className="zoom-wrapper"
      ref={imgRef}
      onMouseEnter={() => setShowZoom(true)}
      onMouseLeave={() => setShowZoom(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        className="zoom-base-img"
        src={src}
        w="100%"
        h="100%"
        objectFit="cover"
      />

      {showZoom && (
        <div
          className="zoom-preview"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
          }}
        />
      )}
    </div>
  );
};

export default ZoomImage;