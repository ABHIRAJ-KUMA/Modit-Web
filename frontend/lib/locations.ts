export const delhiNCRLocations = [
  { id: 1, area: "Noida Sector 62", city: "Noida", pincode: "201309", region: "NCR" },
  { id: 2, area: "Gurugram", city: "Gurugram", pincode: "122001", region: "NCR" },
  { id: 3, area: "Delhi - Dwarka", city: "Delhi", pincode: "110075", region: "Delhi" },
  { id: 4, area: "Delhi - Rohini", city: "Delhi", pincode: "110085", region: "Delhi" },
  { id: 5, area: "Delhi - South Delhi", city: "Delhi", pincode: "110016", region: "Delhi" },
  { id: 6, area: "Noida City Center", city: "Noida", pincode: "201301", region: "NCR" },
  { id: 7, area: "Greater Noida", city: "Greater Noida", pincode: "201308", region: "NCR" },
  { id: 8, area: "Faridabad", city: "Faridabad", pincode: "121001", region: "NCR" },
  { id: 9, area: "Ghaziabad", city: "Ghaziabad", pincode: "201001", region: "NCR" },
  { id: 10, area: "Delhi - East Delhi", city: "Delhi", pincode: "110092", region: "Delhi" },
  { id: 11, area: "Delhi - West Delhi", city: "Delhi", pincode: "110005", region: "Delhi" },
  { id: 12, area: "Delhi - North Delhi", city: "Delhi", pincode: "110006", region: "Delhi" },
  { id: 13, area: "Noida Sector 50", city: "Noida", pincode: "201301", region: "NCR" },
  { id: 14, area: "Noida Sector 37", city: "Noida", pincode: "201303", region: "NCR" },
  { id: 15, area: "Gurugram Golf Course Road", city: "Gurugram", pincode: "122003", region: "NCR" },
  { id: 16, area: "Gurugram Cyber City", city: "Gurugram", pincode: "122002", region: "NCR" },
  { id: 17, area: "Faridabad - Sector 50", city: "Faridabad", pincode: "121002", region: "NCR" },
  { id: 18, area: "Ghaziabad - Indirapuram", city: "Ghaziabad", pincode: "201014", region: "NCR" },
  { id: 19, area: "Delhi - Karol Bagh", city: "Delhi", pincode: "110005", region: "Delhi" },
  { id: 20, area: "Delhi - Connaught Place", city: "Delhi", pincode: "110001", region: "Delhi" },
];

export const getLocationByPincode = (pincode: string) => {
  return delhiNCRLocations.find(loc => loc.pincode === pincode);
};

export const getLocationsByCity = (city: string) => {
  return delhiNCRLocations.filter(loc => loc.city === city);
};

export const getLocationsByRegion = (region: string) => {
  return delhiNCRLocations.filter(loc => loc.region === region);
};

export const getAllCities = () => {
  return Array.from(new Set(delhiNCRLocations.map(loc => loc.city)));
};
