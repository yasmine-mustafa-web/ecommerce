import SideBar from "../../components/SideBar";
import { Button } from "@mui/material";
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { RxDragHandleDots2 } from "react-icons/rx";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import ProductItem from "../../components/ProductItem";
import { FaAngleDown } from 'react-icons/fa6';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {getProducts} from "../../Services/productApi";
import { useParams } from "react-router-dom";
const Listing = () => {
    const {id} = useParams();

    const [products, setProducts] = useState([]);
     const [selectedBrands, setSelectedBrands] = useState([]);
     const [selectedState, setSelectedState] = useState([]);
     const [selectedCategories, setSelectedCategories] = useState([]);
     const [priceRange, setPriceRange] = useState([0, 3000]);
     const [sortBy, setSortBy] = useState('latest');
    const[productView,setProductView] = useState('four');
    const [productsPerPage, setProductsPerPage] = useState(8);
    const [gridColoumns, setGridColoumns] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    const [anchorEl, setAnchorEl] = useState(null);
    const categoriesList = useMemo(() => {
        const counts = {};
        products.forEach((product) => {
            if (product.category  && Array.isArray(product.category)){
                 product.category.forEach((cat) => {
                counts[cat.name] = (counts[cat.name] || 0) + 1;
                 })
            } 
        });

        return Object.entries(counts).map(([name, count]) => ({ name, count }));
    }, [products]);

    useEffect(() => {
    getProducts()
        .then((res) => {
            const mapped = res.data.map((p) => ({
                _id: p._id,
                images: p.images,
                title: p.name,
                price: p.price,
                brand: p.brand,
                description: p.description,
                rating: p.rating,
                category: p.category?.map((c) => ({
                    _id:c._id,
                    name:c.name 
                }))  || [],
                type:p.type,
                MFG:p.MFG,
                life:p.life,
                countInStock:p.countInStock,
                isFeatured:p.isFeatured,
            
            }));
            setProducts(mapped);
        })
        .catch((err) => console.log(err));
}, []);

    useEffect(() => {

    if (!id || products.length === 0) return;

    const categoryFromUrl = products
        .flatMap(product => product.category || [])
        .find(category => category._id === id);

    if (categoryFromUrl) {
        setSelectedCategories([categoryFromUrl.name]);
    }

    }, [id, products]);

    useEffect(()=>{
        if(id && products.length > 0){
            const selectedCategory = products
            .flatMap(product => product.category || [])
            .find(category => {
                return category._id === id;
            });
            if(selectedCategories){
                setSelectedCategories([selectedCategory.name]);
            }
        }
    },[id , products])


    const brandsList = useMemo(() => {
        const counts = {};
        products.forEach((product) => {
            if (product.brand) counts[product.brand] = (counts[product.brand] || 0) + 1;
        });
        return Object.entries(counts).map(([name, count]) => ({ name, count }))
    }, [products]);

    const toggleCategory = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };
    const toggleBrand = (brand) => {
        setSelectedBrands((prev) =>
            prev.includes(brand)
                ? prev.filter((b) => b !== brand)
                : [...prev, brand]
        );
    };


    const toggleState = (state) => {
        setSelectedState((prev) =>
            prev.includes(state)
                ? prev.filter((s) => s !== state)
                : [...prev, state]
        );
    };

    const filteredProducts = products.filter((product) => {
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const matchesState = selectedState.length === 0 || selectedState.includes(product.state);
        const matchesCategory = selectedCategories.length === 0 || (Array.isArray(product.category) && product.category.some((cat) => selectedCategories.includes(cat.name)));
        const priceValue = Number(
            String(product.discountprice || product.price).replace(/,/g, "")
        );
        const matchesPrice =
            priceValue >= priceRange[0] && priceValue <= priceRange[1];

        return matchesBrand && matchesState && matchesPrice && matchesCategory;
    });
    const sortedProducts = useMemo(() => {
        const sorted = [...filteredProducts];

        switch (sortBy) {
            case 'cheapest':
                return sorted.sort((a, b) => {
                    const priceA = Number(String(a.discountprice || a.price).replace(/,/g, "")) || 0;
                    const priceB = Number(String(b.discountprice || b.price).replace(/,/g, "")) || 0;
                    return priceA - priceB;
                });

            case 'expensive':
                return sorted.sort((a, b) => {
                    const priceA = Number(String(a.discountprice || a.price).replace(/,/g, "")) || 0;
                    const priceB = Number(String(b.discountprice || b.price).replace(/,/g, "")) || 0;
                    return priceB - priceA;
                });

            case 'popularity':
                return sorted;
            case 'latest':
            default:
                return sorted;
        }
    }, [filteredProducts, sortBy]);

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(8);
    const [gridColoumns, setGridColoumns] = useState(4);

    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

    const paginatedProducts = sortedProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    const goToPage = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedBrands, selectedState, priceRange, selectedCategories, productsPerPage, sortBy]);

    const [anchorEl , setAnchorEl]=useState(null);
    const open=Boolean(anchorEl);
    const handleClick=(event)=>{
        setAnchorEl(event.currentTarget);
    }
     const handleClose=(event)=>{
        setAnchorEl(null);
    }
    return (
            <section className="productsListing">
                <div className="container">
                    <div className="productListing d-flex">
  <SideBar
      brandsList={brandsList}
      selectedBrands={selectedBrands}
      toggleBrand={toggleBrand}
      selectedState={selectedState}
      toggleState={toggleState}
      priceRange={priceRange}
      setPriceRange={setPriceRange}
      categoriesList={categoriesList}
      selectedCategories={selectedCategories}
      toggleCategory={toggleCategory}
  />

         <div className="content-right">
            <img className="rounded-4 w-100 object-fit-cover" src="https://i.ytimg.com/vi/VFzcPwyT8RU/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGFIgZShgMA8=&rs=AOn4CLCu0g88-ssSpWvh5QUNCEwrMc7rqA" />
            <div className="showBy w-100 d-flex rounded-4 mt-3">
            <div className="btnWrapper">
            <Button onClick={() => setProductView('one')}><IoMdMenu /></Button>
            <Button onClick={() =>setProductView('two') }>< RxDragHandleDots2/></Button>
            <Button onClick={() => setProductView('three')}><CgMenuGridO /></Button>
            <Button onClick={() => setProductView('four')}><TfiLayoutGrid4 /></Button>
            </div>
              <div className="ms-auto showByFilter align-items-center">
                <span className="text-secondary show">Show</span> 
                <Button className="text-dark align-items-center ms-0 px-0" onClick={e => setAnchorEl(e.currentTarget)}> {productsPerPage} <FaAngleDown className="ms-1"/> </Button> 
                <Menu 
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                MenuListProps={{
                    'aria-labelledby':'basic-button',
                }}
                >
                {[8,12,24,36,48].map(n => <MenuItem key={n} onClick={() => {setProductsPerPage(n);setAnchorEl(null)}}>{n}</MenuItem>)}
                </Menu>
              </div>
      </div>


      <div className='productListing productRow w-100 mt-4 d-fle' style={{ flexWrap: 'wrap' }}>
          {paginatedProducts.length? paginatedProducts.map((product, index) => (
              <ProductItem
                  key={product._id ||index}
                  itemView={productView}
                  images={product.images}
                  title={product.title}
                  price={product.price}
                  discount={product.discount}
                  brand={product.brand}
                  description={product.description}
                  countInStock={product.countInStock}
                  type={product.type}
                  MFG={product.MFG}
                  life={product.life}
                  isFeatured={product.isFeatured}
                  className={
                index === 0 ? "card-right" : index === paginatedProducts.length - 1 ? "card-left" : "card-middle"
                  }
              />
          )): <div className="w-100 py-5 text-center"><h5>No products found</h5></div>
        }

      </div>
      {totalPages > 1 && (
          <div className="pagination d-flex justify-content-center align-items-center gap-2 mt-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`page-btn ${currentPage === page ? "active" : ""}`}
                  >
                    {page}
                  </button>
              ))}

              <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="page-btn next-btn"
              >
                  →
              </button>
          </div>
      )}
  </div>
</div>
</div>
</section>
    )
}

export default Listing;