import {useState} from 'react';
// 1. Fjern class og constructor
// 2. Sæt props og state med useState() (Husk import af useSdtate)
// 3. Fjern 'this' referencer og brug i stedet usestate objektet.

const Cars2 = (props) => {
    const [cars, setCars] = useState(props.cars);

        return (
            <div className="clock">
                <p>Hello! This is a class component clock.</p>
                <ul>
                {cars.map((car)=><li key={car.id}>{car.make}</li>)}
                </ul>
            </div>
        )
    // }
}

export default Cars2;