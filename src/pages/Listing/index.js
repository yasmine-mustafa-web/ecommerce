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


const Listing = () => {
    const products = [
        {
            images: ["https://m.media-amazon.com/images/I/61dzGbM7EnL._AC_SX569_.jpg",
                "https://m.media-amazon.com/images/I/61eHITpNFtL._AC_SX569_.jpg",
                "https://m.media-amazon.com/images/I/61SVz8DtYBL._AC_SX569_.jpg",
            ],
            title: "La Roche-Posay Effaclar Ultra Concentrated Serum 30ml (12)",
            price: '1,900',
            realprice: '1900',
            discountprice: '1600',
            discount: 28,
            description: 'dark spots coeerction',
            brand: 'La Roche-Posay',
            state: 'out of stock',
            type: 'Serum',
            MFG: '21-jul-26',
            life: '2 years',
            category: 'skin'
        },
        {
            images: ["https://m.media-amazon.com/images/I/51e8Zkj0rLL._AC_SY879_.jpg",
                "https://m.media-amazon.com/images/I/61gSV6Os1ZL._AC_SX569_.jpg",
                "https://m.media-amazon.com/images/I/71wzyI0iXVL._AC_SX569_.jpg"],

            title: "L’Oréal Paris L'Oréal Paris elvive extra ordinary oil replacement 300 ml",
            price: '134',
            realprice: '134',
            discountprice: '',
            discription: 'The L&#39;Oréal Paris Elvive extraordinary oil replacement features a rich, creamy formula that softens the hair texture for silky-smooth tresses. This formula is also lightweight and can be applied on a regular basis to sustain your hairs good health.',
            discount: '',
            brand: 'L&#39;Oréal Paris elvive ',
            state: 'in stock',
            type: 'leave-in',
            MFG: '21-jul-26',
            life: '2 years',
            category: 'hair'
        },
        {
            images: ["https://anwar.store/cdn/shop/files/515S4DlxKOL._AC_SY879.jpg?v=1762068946",
                "https://anwar.store/cdn/shop/products/HAYAH-Sebaclar-Hydra-Cream-50ml-Anwar-Store-307.webp?v=1762068946",
                "https://stuhm.com/wp-content/uploads/2025/07/hayahlaboratories_3612809247613356624-copy.webp"],
            title: "HAYAH Sebaclar Active Gel - 50ml",
            realprice: 311,
            price: 311,
            discount: 26,
            discountprice: 232,
            description: 'Deep moisturizing of oily skin affected by acne treatments, which may cause severe dryness such as vitamin A derivatives and exfoliating products , Soothing acne-causing inflammation. How to use: Use morning and evening action by Niacinamide & (B3) Murumura Butter &Squalane &Skin Repair Bio and Vitamin E for Oily and acne prone skin subject to drying treatment .',
            brand: ' HAYAH LABORATORIES',
            state: 'in stock',
            type: 'Moisturizer',
            MFG: '21-jul-26',
            life: '2 years',
            category: ['esraa']

        },
        {
            images: ['https://m.media-amazon.com/images/I/41MhGGhLBAL._AC_SY879_.jpg'],
            title: "Telofill Milk & Honey Body Lotion 250ML",
            price: 180,
            realprice: "",
            discountprice: "",
            discount: "",
            description: 'Contains ingredients that help lighten dark spots and even skin tone, contributing to a brighter, more radiant complexion.Designed to absorb quickly without leaving a sticky residue, making it ideal for daily use.Suitable for use on all body areas, including elbows, knees, and other dry patches that may need extra care.Has nourishing and moisturizing properties, providing deep hydration and promoting skin softness.Milk & Honey Scented',
            brand: 'Telofill',
            type: 'cream',
            category: ['medicine'],
            MFG: '1 july 2026',
            life: '3 years',
            state: 'in stock'

        },
        {
            images: ['https://m.media-amazon.com/images/I/613RWYUd5QL._AC_SY741_.jpg'],
            title: "Telofill Lightening Serum 30 ML",
            price: 315,
            realprice: "",
            discount: "",
            state: 'in stock',

            description: 'Reduces Melasma Symptoms.Reduces hyperpigmentation Lightens Dark Spots & Dark Skin Unifies Skin Tone Eliminates acne scars',
            brand: 'Telofill',
            type: 'serum',
            life: '2 years',
            MFG: '20 july 2026',
            category: ['body']
        },
        {
            images: ["https://m.media-amazon.com/images/I/41uQgoOkmvL._AC_SY879_.jpg"],
            title: "Telofill Facial Moisturizing Gel Cream 50 GM",
            price: 230,
            realprice: "",
            discountprice: "",
            discount: "",
            description: 'Hydrates skin texture Reduces fine lines prevents the appearance of dryness Reduces the sign of irritated skinControls oil production',
            brand: 'Telofill',
            category: 'curly hair',
            life: '2 years',
            MFG: '5 july 2026',
            type: 'cream',
            state: 'in stock'

        }, {
            images: ['https://anwar.store/cdn/shop/files/caremore-facial-toner-makeup-remover-with-aloevera-150ml-8781976.jpg?v=1783933926'
            ],
            title: 'Care&More Aloe Vera Facial Tоner for Oily Skin 150 ml',
            brand: 'Care&More',
            price: 89,
            realprice: "",
            discountprice: "",
            discount: "",
            description: 'The benefits of micellar water and aloe vera extract Moisturizes while maintaining the skins natural moisture balance Targets excess oil, particularly in the t-zone, to reduce shine Leave your complexion fresh and matte throughout the day Designed specifically for oily skin',
            life: '3 years',
            MFG: '24 july 2026',
            type: 'Toner',
            category: ['foot' , 'skin' , 'curly hair'],
            state: 'in stock'


        }, {
            images: ['https://m.media-amazon.com/images/I/71bmnqOQ+PL._AC_SY741_.jpg',

            ],
            title: 'Aloe Eva Strengthening Hair Oil With Aloe Vera 255 Ml',
            brand: 'Aloe Eva',
            price: 89.30,
            realprice: 89.30,
            discountprice: 73,
            discount: "18",
            description: 'Provides essential nutritionhelps repair highly textured, long & strong hair'
            , life: '3 years',
            MFG: '24 july 2026',
            type: 'oil',
            category: ['hair'],
            state: 'in stock'


        }, {
            images: ['https://m.media-amazon.com/images/I/71bmnqOQ+PL._AC_SY741_.jpg',

            ],
            title: 'Aloe Eva Strengthening Hair Oil With Aloe Vera  & Amla Extract 255 Ml',
            brand: 'Aloe Eva',
            price: 89.30,
            realprice: 89.30,
            discountprice: 73,
            discount: "18",
            description: 'Provides essential nutritionhelps repair highly textured, long & strong hair'
            , life: '3 years',
            MFG: '24 july 2026',
            type: 'oil',
            category: ['hair'],
            state: 'in stock'


        },
        {
            images: [
                'https://m.media-amazon.com/images/I/71339RJcfTL._AC_SY879_.jpg',
                'https://m.media-amazon.com/images/I/710fWnbZ4HL._AC_SY879_.jpg',
                'https://m.media-amazon.com/images/I/31Z8N2-NSsL._AC_.jpg'
            ],
            title: 'Mood 8 Hawaiian Hand Scented Shea Shower Gel 750ml',
            brand: 'MOOD',
            price: "",
            discountprice: 79,
            realprice: 89,
            type: 'shower gel',
            life: '2 years',
            MFG: '28 july 2026',
            category: ['skin'],
            state: 'out of stock',
            description: 'Relaxes your body and soothes your skin Unique formula provides a gentle scrubbing action Leaves your skin feeling velvety smooth for a brilliant beauty experience'
        },
        {
            images: [
                'https://m.media-amazon.com/images/I/510s7YrzHEL._AC_SY450_.jpg'
                , 'https://m.media-amazon.com/images/I/61yTx7vnthL._AC_SY879_.jpg',
                'https://m.media-amazon.com/images/I/61JV4yZ4+dL._AC_SY879_.jpg'
            ],
            title: 'OROVEX Peppermint Mouthwash 250ml – Fresh Breath & Advanced Oral Care',
            price: 135,
            realprice: '',
            discountprice: '',
            type: 'mouth wash',
            category: ['oral'],
            MFG: "21-Jul-2026",
            life: "2 Years",
            state: "In Stock",
            brand: 'Orovex',
            description: 'OROVEX Peppermint Mouthwash is specially formulated to provide complete oral hygiene and long-lasting freshness. Its powerful yet gentle formula helps eliminate harmful bacteria, reduce plaque buildup, and protect against bad breath.Infused with refreshing peppermint flavor, it leaves your mouth feeling clean, cool, and revitalized after every use. Suitable for daily use, OROVEX mouthwash supports healthy gums and teeth while delivering a refreshing confidence boost throughout the day.'
        },
        {
            images: [
                'https://m.media-amazon.com/images/I/41vz53z6cQL._AC_.jpg',
                'https://m.media-amazon.com/images/I/41cJ8pYE0kL._AC_SX450_.jpg',
                'https://m.media-amazon.com/images/I/41+1zSgyEVL._AC_SX450_.jpg'
            ],
            title: 'Nail File Large Emery Boards for Nails,180 Grit Nail Files for Natural Nails, Thin Emory Nail File Pack Manicure Tool for Home Use 10PCS-12cm- MULTICOLOR',
            brand: 'GOOD STUFF',
            price: 75.,
            discountprice: "",
            realprice: "",
            type: 'nail file',
            life: '2 years',
            MFG: '28 july 2026',
            category: 'nails',
            state: 'out of stock',
            description: 'High quality: Sturdy wooden core with durable sandpaper on both sides for precise and delicate filing.Ideal size: 18 cm long and 2 cm thick, perfect for handling and working on different sizes of nails.Versatility: Suitable for shaping, shortening and smoothing natural nails, gels, acrylics and extensions.Durable use: Durable design ensures multiple uses before replacement.Perfect for professionals and beginners: ideal for both professional manicurists and personal use for salon results at home.'
        },
        {
            images: [
                'https://m.media-amazon.com/images/I/61+dkbadKNL._AC_SY879_.jpg'
            ],
            title: 'Beauty of Korean Revive Eye Serum with Ginseng & Retinal (30m) | Anti-Aging, Wrinkle Care, Korean Eye Cream for Dark Circles & Fine Lines',
            brand: 'ELLENTRACY',
            category:
                'korean products'
            ,
            price: "",
            realprice: 1400,
            discountprice: 830,
            discount: '41%',
            type: 'serum',
            life: '1 year',
            MFG: '8 june 2026',
            state: 'in stock',
            description: 'Ginseng and Retinol serum for improving eye care, measures 30ml and is suitable for all ages. Contains high-quality ingredients to ensure the highest quality and durability. Comes in a single size.Includes one serum for endless eye care possibilities. Perfect for reducing dark circles and encouraging anti-aging development. Suitable for all skin types and ages.Features a unique blend of ginseng and retinol to improve skin texture and elasticity. Ideal for anti-aging and improving overall eye health.Made with high-quality ingredients to provide intense hydration and nourishment. Suitable for all skin conditions, perfect for dry and sensitive skin. Offers anti-aging benefits to all skin types.to solve common eye concerns. Perfect for daily use and travel.Reduces the appearance of fine lines, wrinkles, and dark circles. Offers hydration, nourishment, and protection to the delicate skin around the eyes.'
        }, {
            images: ['https://m.media-amazon.com/images/I/71i25DwdOEL._AC_SX569_.jpg',
                'https://m.media-amazon.com/images/I/71UaQsju6+L._AC_SX569_.jpg',
                'https://m.media-amazon.com/images/I/81SsQBQV-XL._AC_SX569_.jpg'
            ],
            title: 'Beauty of Joseon Ground Rice and Honey Glow Mask 150ml',
            price: "",
            realprice: 1595,
            discount: 6,
            discountprice: 1500,
            brand: 'Beauty of Joseon',
            type: 'Mask',
            life: '2 years',
            MFG: '16 june 2026',
            category: 'korean products',
            state: 'in stock',
            description: 'K-Beauty cream mask for exfoliating and hydrating effects.The Ground Rice and Honey Glow Mask by Beauty of Joseon utilises the power of makgeolli residue from traditional Korean rice wine to provide the skin with super-intensive care.Enriched with plant-based rice husk powder and 5% honey, the mask provides deep hydration and improves skin texture, even on irritated areas of the face.The treatment brightens the complexion and absorbs excess sebum thanks to kaolin clay.The pores are cleansed without causing feelings of tightness. Your skin looks fresh, clean and wonderfully nourished.The mask can also be used as an accompanying treatment for acne.'
        }
    ];


    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedState, setSelectedState] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 3000]);
    const [sortBy, setSortBy] = useState('latest');

    const categoriesList = useMemo(() => {
        const counts = {};
        products.forEach((product) => {
            if (product.category  && Array.isArray(product.category)){
                 product.category.forEach((cat) => {
                counts[cat] = (counts[cat] || 0) + 1;
                 })
            } 
        });
        return Object.entries(counts).map(([name, count]) => ({ name, count }));
    }, [products]);
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
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
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
        <>

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
             <div>
  <img className="rounded-4 w-100 object-fit-cover" src="https://i.ytimg.com/vi/VFzcPwyT8RU/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGFIgZShgMA8=&rs=AOn4CLCu0g88-ssSpWvh5QUNCEwrMc7rqA" />
  <div className="showBy w-100 d-flex rounded-4 mt-3">
      <div className="btnWrapper">
          <Button onClick={() => setGridColoumns(1)} className={`text-dark ${gridColoumns === 1 ? "active-view" : ""}`}><IoMdMenu /></Button>
          <Button onClick={() => setGridColoumns(2)} className={`text-dark ${gridColoumns === 2 ? "active-view" : ""}`}><RxDragHandleDots2 /></Button>
          <Button onClick={() => setGridColoumns(3)} className={`text-dark ${gridColoumns === 3 ? "active-view" : ""}`}><CgMenuGridO /></Button>
          <Button onClick={() => setGridColoumns(4)} className={`text-dark ${gridColoumns === 4 ? "active-view" : ""}`}><TfiLayoutGrid4 /></Button>
      </div>
      <div className="ms-auto">
          <div className="btn-grp">
              <Button className="dropdown-toggle text-dark" type="button" aria-expanded="false" data-bs-toggle="dropdown">
   {sortBy === 'latest' && 'Sort by latest'}
   {sortBy === 'popularity' && 'Sort by popularity'}
   {sortBy === 'cheapest' && 'Sort by price: low to high'}
   {sortBy === 'expensive' && 'Sort by price: high to low'}
              </Button>
              <ul className="dropdown-menu align-items-center p-1">
   <li className="mb-1">
       <button className="dropdown-item" onClick={() => setSortBy('latest')}>
           Sort by latest
       </button>
   </li>
   <li className="mb-1">
       <button className="dropdown-item" onClick={() => setSortBy('popularity')}>
           Sort by popularity
       </button>
   </li>
   <li className="mb-1">
       <button className="dropdown-item" onClick={() => setSortBy('cheapest')}>
           Sort by price: low to high
       </button>
   </li>
   <li className="mb-1">
       <button className="dropdown-item" onClick={() => setSortBy('expensive')}>
           Sort by price: high to low
       </button>
   </li>
   <li className="mb-1">
       <button className="dropdown-item" onClick={() => setSortBy('expensive')}>
           Sort by price: high to low
       </button>
          </li>
        </ul>
                  </div>
              </div>
              <div className="ml-auto showByFilter align-items-center">
          <div className="d-flex gap-0 align-items-center"><span className="text-secondary show">Show</span>   <Button className="text-dark align-items-center ms-0 px-0" onClick={handleClick}> 9 <FaAngleDown className="ms-1"/> </Button></div>   
                <Menu 
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby':'basic-button',
                }}
                >
                <MenuItem onClick={handleClose}>12</MenuItem>
                <MenuItem onClick={handleClose}>24</MenuItem>
                <MenuItem onClick={handleClose}>36</MenuItem>
                <MenuItem onClick={handleClose}>48</MenuItem>
                </Menu>
              </div>
          </div>
      </div>


      <div className={`productRow w-100 mt-4 d-flex grid-cols-${gridColoumns}`} style={{ flexWrap: 'wrap' }}>
          {paginatedProducts.map((product, index) => (
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
index === 0 ? "card-right" : index === paginatedProducts.length - 1 ? "card-left" : "card-middle"
                  }
              />
          ))}

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
        </>
    )
}

export default Listing;