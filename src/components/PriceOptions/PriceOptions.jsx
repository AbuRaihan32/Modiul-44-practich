import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const price_options = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 50,
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Limited group fitness classes"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 100,
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Unlimited group fitness classes",
                "Access to sauna and steam room"
            ]
        },
        {
            "id": 3,
            "name": "VIP Membership",
            "price": 150,
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Unlimited group fitness classes",
                "Access to sauna and steam room",
                "Personal trainer sessions twice a week"
            ]
        }
    ]

    return (
        <div>
            <h1 className="text-3xl"> best price in the town</h1>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    price_options.map(option => <PriceOption
                        option={option}
                        key={option.id}>
                    </PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;