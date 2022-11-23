export class List {
    name: string;
    // date: Date;
    price: number;
    // rate: number;
    coordinates: Coordinates;
    images: string[];
    guests: number;
    bedrooms: number;
    beds: number;
    bath: number;
    address: string;
    offers: Offers;


    constructor(name: string,
        // date: Date,
        price: number,
        // rate: number,
        coordinates: Coordinates,
        images: string[],
        guests: number,
        bedrooms: number,
        beds: number,
        bath: number,
        address: string,
        offers: Offers
    ) {
        this.name = name;
        // this.date = date;
        this.price = price;
        // this.rate = rate;
        this.coordinates = coordinates;
        this.images = images;
        this.guests = guests;
        this.bedrooms = bedrooms;
        this.beds = beds;
        this.bath = bath;
        this.address = address;
        this.offers = offers
    }
}

class Coordinates {
    lat: number;
    lng: number;
}
class Offers{
    wifi: boolean;
    parking: boolean;
    tv: boolean;
    ac: boolean;
    smoke: boolean;
    electricity: boolean;
}