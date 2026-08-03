import { useState } from "react";

const ProductImageUpload = ({ onImagesChange }) => {

   
    const [images, setImages] = useState([]);

    const handleImages = (e) => {

        const files = [...e.target.files];

        const preview = files.map(file => ({

            file,

            url: URL.createObjectURL(file)

        }));

        setImages(preview);

    };

    return (

        <>

            <label className="mb-3">

                Product Images

            </label>

            <input

                type="file"

                multiple

                className="form-control"

                onChange={handleImages}

            />

            <div className="row mt-4">

                {

                    images.map((img,index)=>(

                        <div
                            className="col-md-2"
                            key={index}
                        >

                            <img

                                src={img.url}

                                alt=""

                                className="img-fluid rounded"

                            />

                        </div>

                    ))

                }

            </div>

        </>

    );

};

export default ProductImageUpload;



