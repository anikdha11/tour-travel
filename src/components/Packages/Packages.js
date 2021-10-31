import React, { useEffect, useState } from 'react';
import Package from './package/Package';



const Packages = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://sheltered-chamber-16108.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-2">
            <div id="top-link" className="mb-3">
                <h1 className="text-danger ">Top <span className="text-info">Tour Packages</span></h1>
            </div>
            <div className="">
                {
                    services.map(service => <Package key={service._id} service={service}></Package>)
                }
            </div>
        </div>
    );
};

export default Packages;