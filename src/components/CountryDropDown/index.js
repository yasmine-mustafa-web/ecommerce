import React, { useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog'
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from 'react';
import Slide from '@mui/material/Slide';
import governorates from "../../data/governorates.json";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
})


const CountryDropDown = () => {
    const [selectedLocation, setSelectedLocation] = useState("");
    const [isOpenModal, setisOpenModal] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const [search, setSearch] = useState("");

const filteredGovernorates = governorates.filter((gov) =>
  gov.name.toLowerCase().includes(search.toLowerCase())
);

    return (
        <>
            <Button className='countryDrop' onClick={() => setisOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>{selectedLocation|| "Choose Location"}</span> 

                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>
           <Dialog
    TransitionComponent={Transition}
    open={isOpenModal}
    onClose={() => setisOpenModal(false)}
    className="locationModal"
>

    <h5>Choose your delivery location</h5>

    <p>
        Enter your address and we will specify the offer for your area.
    </p>

    <Button
        className="close_"
        onClick={() => {   
    setisOpenModal(false);}}
    >
        <MdClose />
    </Button>

    <div className="headerSearchBar w-100">

        <Button>
            <IoIosSearch />
        </Button>

        <input
            type="text"
            placeholder="Search your area"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

    </div>

    <ul className="countryList mt-3">

        {filteredGovernorates.map((gov, index) => (

            <li key={gov.id}>

                <Button
                    className={selectedTab === index ? "active" : ""}
                    onClick={() => {
                        setSelectedTab(index);
                        setisOpenModal(false);
                        setSelectedLocation(gov.name);
                    }}
                >
                    {gov.name}
                </Button>

            </li>

        ))}

    </ul>

</Dialog>
        </>
    )
}


export default CountryDropDown