import SideBar from "../../components/SideBar";
import { Button } from "@mui/material";
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { RxDragHandleDots2 } from "react-icons/rx";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useState , useMemo } from "react";
import ProductItem from "../../components/ProductItem";
const Listing=()=>{
         const products = [
    {
            images:[        "https://m.media-amazon.com/images/I/61dzGbM7EnL._AC_SX569_.jpg",
       "https://m.media-amazon.com/images/I/61eHITpNFtL._AC_SX569_.jpg",
        "https://m.media-amazon.com/images/I/61SVz8DtYBL._AC_SX569_.jpg",
],
      title: "La Roche-Posay Effaclar Ultra Concentrated Serum 30ml (12)",
      price: '1,900',
      realprice:'1900',
      discountprice:'1600',
      discount: 28,
      description:'dark spots coeerction',
       brand:'La Roche-Posay',
          state:'out of stock',
          type:'Serum',
          MFG:'21-jul-26',
          life:'2 years'
    },
    {
            images:[        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
      "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg"
],
      title: "Chicken Burger",
      price: 220,
      discount: 15,
         description:'dark spots coeerction',
          brand:'zara'
    },
    {
            images:[        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
],
    title: "Double Burger",
      price: 250,
      discount: 10,
         description:'dark spots coeerction',
          brand:'zara'
    },
    {
      images:[        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
     "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
],
      title: "Beef Burger",
      price: 210,
      discount: 20,
         description:'dark spots coeerction',
          brand:'zara'
    },
    {
            images:[        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
        "https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/585174_1739978869_9e400a3e-93d6-44fa-b9fd-847a4ceea88d.jpeg",
],
      title: "Classic Burger",
      price: 180,
      discountprice:80,
      discount: 12,
         description:'dark spots coeerction',
          brand:'zara'
    }
  ];


        const [selectedBrands, setSelectedBrands] = useState([]);
        const [selectedStatus, setSelectedStatus] = useState([]);
        const [priceRange, setPriceRange] = useState([0, 1500]);

         const brandsList = useMemo(()=>{
            const counts = {};
            products.forEach((product) =>{
                if (product.brand) counts[product.brand ]= (counts[product.brand] || 0) + 1;
            });
            return Object.entries(counts).map(([name,count]) => ({name , count}))
         }, [products]);


         const toggleBrand = (brand) =>{
            setSelectedBrands((prev) =>
            prev.includes(brand)
            ? prev.filter((b) => b !== brand)
            : [...prev , brand] 
            );
         };


        const toggleStatus = (status) => {
        setSelectedStatus((prev) =>
        prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
  );
};

        const filteredProducts = products.filter((product) =>{
            const matchesBrand = selectedBrands.length===0 ||selectedBrands.includes(product.brand);
            const matchesStatus = selectedStatus.length===0 ||selectedStatus.includes(product.state);
            const priceValue = Number(
              String(product.discountprice || product.price).replace(/,/g, "")
             );
             const matchesPrice =
             priceValue >= priceRange[0] && priceValue <= priceRange[1];
           
             return matchesBrand && matchesStatus && matchesPrice;
        });

    return(
        <>
       
            <section className="productsListing">
                <div className="container">
                    <div className="productListing d-flex">
                        <SideBar
                             brandsList={brandsList}
                             selectedBrands={selectedBrands}
                             toggleBrand={toggleBrand}
                             selectedStatus={selectedStatus}
                             toggleStatus={toggleStatus}
                             priceRange={priceRange}
                             setPriceRange={setPriceRange}
                        
                        />

                        <div className="content-right">
                            <div>
                                <img className="rounded-4 w-100 object-fit-cover" src="https://i.ytimg.com/vi/VFzcPwyT8RU/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGFIgZShgMA8=&rs=AOn4CLCu0g88-ssSpWvh5QUNCEwrMc7rqA"/>
                                <div className="showBy w-100 d-flex rounded-4 mt-3">
                                    <div className="btnWrapper">
                                    <Button><IoMdMenu/></Button>
                                    <Button><RxDragHandleDots2/></Button>
                                    <Button><CgMenuGridO/></Button>
                                    <Button><TfiLayoutGrid4/></Button>
                                </div>
                                <div className="ms-auto">
                                    <div className="btn-group">
  <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Sort by latest
  </button>
  <ul className="dropdown-menu align-items-center p-1" >
    <li className="mb-1"><Link to='#'>Sort by latest</Link> </li>
     <li className="mb-1"> Sort by popularity</li>
      <li className="mb-1"> Sort by average rating</li>
  </ul>
</div>
                                </div>
                                </div>
                            </div>
                        
                  
                <div className="productRow w-100 mt-3 d-flex">
                    {filteredProducts.map((product,index) =>(
                        <ProductItem
                                key={index}
                                images={product.images}
                                title={product.title}
                                price={product.price}
                                discountprice={product.discountprice}
                                realprice={product.realprice}
                                discount={product.discount}
                                brand={product.brand}
                                description={product.description}
                                state={product.state}
                                 type={product.type}
                                MFG={product.MFG}
                                life={product.life}
                                className={
                                  index===0 ?"card-right" :index===filteredProducts.length-1 ?"card-left" :"card-middle"
                                }
                              />
                                 ))}
                                   </div>
                </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Listing;