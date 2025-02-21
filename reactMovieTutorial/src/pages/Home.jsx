import HouseCard from "../components/HouseCard"
import Navbar from "../components/Navbar"
import {useState} from "react"
function Home(){
    const [searchQuery, setSearchQuery] = useState("");


    const houseData = [ // Array of house objects
        {
          image: "https://via.placeholder.com/300x200", // Replace with real image URLs
          title: "Charming Family Home",
          price: "250,000",
          bedrooms: 3,
          bathrooms: 2,
          description: "This beautiful home features a spacious living area, a modern kitchen, and a large backyard. Located in a quiet neighborhood, it's perfect for families.",
          squareFootage: 2000, // Example of additional data
          lotSize: "0.5 acres",
        },
        {
          image: "https://via.placeholder.com/300x200",
          title: "Modern Townhouse",
          price: "180,000",
          bedrooms: 2,
          bathrooms: 2,
          description: "Enjoy city living in this stylish townhouse.  Features include an open-concept design and a private balcony.",
          squareFootage: 1500,
          lotSize: null, // Or "N/A", etc.
        },
            {
          image: "https://via.placeholder.com/300x200",
          title: "Cozy Cottage",
          price: "120,000",
          bedrooms: 1,
          bathrooms: 1,
          description: "Perfect for first-time homebuyers or those seeking a simpler lifestyle.  This cozy cottage offers a peaceful retreat.",
          squareFootage: 800,
          lotSize: "0.25 acres",
        },
            {
          image: "https://via.placeholder.com/300x200",
          title: "Luxury Villa",
          price: "750,000",
          bedrooms: 5,
          bathrooms: 4,
          description: "Experience the ultimate in luxury living. This stunning villa boasts breathtaking views, a private pool, and high-end finishes.",
          squareFootage: 4000,
          lotSize: "1 acre",
        },
    
        // Add more house data objects here...
      ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }
      
    return <div className="home">
        <Navbar />
        <h1>Real Estate Listings</h1>
        <div className="house-card-container">
            {houseData.map((house, index) => (
                <HouseCard key={index} {...house} /> // Spread operator to pass props
            ))}
      </div>
    </div>
}

export default Home