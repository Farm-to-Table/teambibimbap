const schoolData = [
  {
    id: 1,
    name: "Waimauku School",
    address: "2 Muriwai Road, Waimauku 0812 New Zealand",
    locationX: "-36.7638239551317",
    locationY: "174.49132859819076",
    slot: { "15th/Oct": 7, "17th/Oct": 22, "20th/Oct": 30 },
  },
  {
    id: 2,
    name: "Hobsonville Point Primary School",
    address:
      "Hobsonville Point Road, 18 De Havilland Road, Auckland 0616 New Zealand",
    locationX: "-36.79254745229914",
    locationY: "174.66250684980702",
    slot: { "15th/Oct": 7, "17th/Oct": 22, "20th/Oct": 30 },
  },
  {
    id: 3,
    name: "Te Hihi School",
    address: "Linwood Road, Hingaia 2580 New Zealand",
    locationX: "-37.11371293131749",
    locationY: "174.83342748866286",
    slot: { "15th/Oct": 7, "17th/Oct": 22, "20th/Oct": 30 },
  },
  {
    id: 4,
    name: "Silverdale School",
    address: "Longmore Lane, Silverdale 0992 New Zealand",
    locationX: "-36.60586704848763",
    locationY: "174.67862824966758",
    slot: { "15th/Oct": 7, "17th/Oct": 22, "20th/Oct": 30 },
  },
];

export const saveSelectedSchool = (school) => {
  localStorage.setItem("selectedSchool", JSON.stringify(school));
};

export const getSelectedSchool = () => {
  const savedSchool = localStorage.getItem("selectedSchool");
  return savedSchool ? JSON.parse(savedSchool) : null;
};

export default schoolData;
