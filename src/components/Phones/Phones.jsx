import axios from "axios";
import { useEffect, useState } from "react";

const Phones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesData = data.data.data;
                const phoneWithObj = phonesData.map(phone =>{
                    const obj = {
                        name: phone.phone_name,
                        price: phone.slug.split('-')[1]
                    }
                    return obj;
                })
                setPhones(phoneWithObj);
            })
    }, [])
    return (
        <div>
            <h1 className="text-3xl font-bold">Phones Quantity: {phones.length}</h1>
        </div>
    );
};

export default Phones;