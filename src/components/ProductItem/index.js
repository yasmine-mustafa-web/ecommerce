import { RatingGroup } from "@chakra-ui/react";
import { SlSizeFullscreen } from "react-icons/sl";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";

const ProductItem = ({ image, title, price, discount , className }) => {

  return (
    <div className={`card ${className}`} style={{ width: "13rem" }}>
      <img src={image} className="card-img-top" alt={title} />

      <span className="badge bg-red">{discount}%</span>

      <div className="actions">
        <Button className="shadow">
          <SlSizeFullscreen />
        </Button>
        <Button>< FaRegHeart style={{fontSize:'20px'}}/></Button>
      </div>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item text-green">In Stock</li>

        <li className="list-group-item">
          <RatingGroup.Root
            count={5}
            defaultValue={3}
            size="sm"
            colorPalette="yellow"
          >
            <RatingGroup.HiddenInput />
            <RatingGroup.Control />
          </RatingGroup.Root>
        </li>

        <li className="list-group-item text-secondary">
          {price} LE
        </li>
      </ul>

      <div className="card-body">
        <a href="#" className="btn btn-card w-100">
          Read More
        </a>
      </div>
    </div>
  );
};

export default ProductItem;