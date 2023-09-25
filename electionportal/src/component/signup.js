import React, { useState } from "react";
import "../style/navbar.css";
import toast from "react-hot-toast";

const Signup = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [statesAndDistricts] = useState({
    
        "Andhra Pradesh": [
            "Select a district",
            "Anantapur",
            "Chittoor",
            "East Godavari",
            "Guntur",
            "Kadapa",
            "Krishna",
            "Kurnool",
            "Nellore",
            "Prakasam",
            "Srikakulam",
            "Visakhapatnam",
            "Vizianagaram",
            "West Godavari"
        ],
        "Arunachal Pradesh": [
            "Select a district",
            "Anjaw",
            "Changlang",
            "East Kameng",
            "East Siang",
            "Kamle",
            "Kra Daadi",
            "Kurung Kumey",
            "Lepa Rada",
            "Lohit",
            "Longding",
            "Lower Dibang Valley",
            "Lower Subansiri",
            "Namsai",
            "Pakke-Kessang",
            "Papum Pare",
            "Shi Yomi",
            "Siang",
            "Tawang",
            "Tirap",
            "Upper Dibang Valley",
            "Upper Siang",
            "Upper Subansiri",
            "West Kameng",
            "West Siang"
        ],
        "Assam": [
            "Select a district",
            "Baksa",
            "Barpeta",
            "Biswanath",
            "Bongaigaon",
            "Cachar",
            "Charaideo",
            "Chirang",
            "Darrang",
            "Dhemaji",
            "Dhubri",
            "Dibrugarh",
            "Dima Hasao",
            "Goalpara",
            "Golaghat",
            "Hailakandi",
            "Hojai",
            "Jorhat",
            "Kamrup Metropolitan",
            "Kamrup Rural",
            "Karbi Anglong",
            "Karimganj",
            "Kokrajhar",
            "Lakhimpur",
            "Majuli",
            "Morigaon",
            "Nagaon",
            "Nalbari",
            "Sivasagar",
            "Sonitpur",
            "South Salmara-Mankachar",
            "Tinsukia",
            "Udalguri",
            "West Karbi Anglong"
        ],
        "Bihar": [
            "Select a district",
            "Araria",
            "Arwal",
            "Aurangabad",
            "Banka",
            "Begusarai",
            "Bhagalpur",
            "Bhojpur",
            "Buxar",
            "Darbhanga",
            "East Champaran",
            "Gaya",
            "Gopalganj",
            "Jamui",
            "Jehanabad",
            "Kaimur",
            "Katihar",
            "Khagaria",
            "Kishanganj",
            "Lakhisarai",
            "Madhepura",
            "Madhubani",
            "Munger",
            "Muzaffarpur",
            "Nalanda",
            "Nawada",
            "Patna",
            "Purnia",
            "Rohtas",
            "Saharsa",
            "Samastipur",
            "Saran",
            "Sheikhpura",
            "Sheohar",
            "Sitamarhi",
            "Siwan",
            "Supaul",
            "Vaishali",
            "West Champaran"
        ],
        "Chhattisgarh": [
            "Select a district",
            "Balod",
            "Baloda Bazar",
            "Balrampur",
            "Bastar",
            "Bemetara",
            "Bijapur",
            "Bilaspur",
            "Dantewada",
            "Dhamtari",
            "Durg",
            "Gariaband",
            "Janjgir-Champa",
            "Jashpur",
            "Kanker",
            "Kondagaon",
            "Korba",
            "Koriya",
            "Mahasamund",
            "Mungeli",
            "Narayanpur",
            "Raigarh",
            "Raipur",
            "Rajnandgaon",
            "Sukma",
            "Surajpur",
            "Surguja"
        ],
        "Goa": [
            "Select a district",
            "North Goa",
            "South Goa"
        ],
        "Gujarat": [
            "Select a district",
            "Ahmedabad",
            "Amreli",
            "Anand",
            "Aravalli",
            "Banaskantha",
            "Bharuch",
            "Bhavnagar",
            "Botad",
            "Chhota Udaipur",
            "Dahod",
            "Dang",
            "Devbhoomi Dwarka",
            "Gandhinagar",
            "Gir Somnath",
            "Jamnagar",
            "Junagadh",
            "Kheda",
            "Kutch",
            "Mahisagar",
            "Mehsana",
            "Morbi",
            "Narmada",
            "Navsari",
            "Panchmahal",
            "Patan",
            "Porbandar",
            "Rajkot",
            "Sabarkantha",
            "Surat",
            "Surendranagar",
            "Tapi",
            "Vadodara",
            "Valsad"
        ],
        "Haryana": [
            "Select a district",
            "Ambala",
            "Bhiwani",
            "Charkhi Dadri",
            "Faridabad",
            "Fatehabad",
            "Gurugram",
            "Hisar",
            "Jhajjar",
            "Jind",
            "Kaithal",
            "Karnal",
            "Kurukshetra",
            "Mahendragarh",
            "Nuh",
            "Palwal",
            "Panchkula",
            "Panipat",
            "Rewari",
            "Rohtak",
            "Sirsa",
            "Sonipat",
            "Yamunanagar"
        ],
        "Himachal Pradesh": [
            "Select a district",
            "Bilaspur",
            "Chamba",
            "Hamirpur",
            "Kangra",
            "Kinnaur",
            "Kullu",
            "Lahaul and Spiti",
            "Mandi",
            "Shimla",
            "Sirmaur",
            "Solan",
            "Una"
        ],
        "Jharkhand": [
            "Select a district",
            "Bokaro",
            "Chatra",
            "Deoghar",
            "Dhanbad",
            "Dumka",
            "East Singhbhum",
            "Garhwa",
            "Giridih",
            "Godda",
            "Gumla",
            "Hazaribagh",
            "Jamtara",
            "Khunti",
            "Koderma",
            "Latehar",
            "Lohardaga",
            "Pakur",
            "Palamu",
            "Ramgarh",
            "Ranchi",
            "Sahebganj",
            "Seraikela-Kharsawan",
            "Simdega",
            "West Singhbhum"
        ],
        "Karnataka": [
            "Select a district",
            "Bagalkot",
            "Ballari",
            "Belagavi",
            "Bengaluru Rural",
            "Bengaluru Urban",
            "Bidar",
            "Chamarajanagar",
            "Chikkaballapur",
            "Chikkamagaluru",
            "Chitradurga",
            "Dakshina Kannada",
            "Davanagere",
            "Dharwad",
            "Gadag",
            "Hassan",
            "Haveri",
            "Kalaburagi",
            "Kodagu",
            "Kolar",
            "Koppal",
            "Mandya",
            "Mysuru",
            "Raichur",
            "Ramanagara",
            "Shivamogga",
            "Tumakuru",
            "Udupi",
            "Uttara Kannada",
            "Vijayapura",
            "Yadgir"
        ],
        "Kerala": [
            "Select a district",
            "Alappuzha",
            "Ernakulam",
            "Idukki",
            "Kannur",
            "Kasaragod",
            "Kollam",
            "Kottayam",
            "Kozhikode",
            "Malappuram",
            "Palakkad",
            "Pathanamthitta",
            "Thiruvananthapuram",
            "Thrissur",
            "Wayanad"
        ],
        "Madhya Pradesh": [
            "Select a district",
            "Agar Malwa",
            "Alirajpur",
            "Anuppur",
            "Ashoknagar",
            "Balaghat",
            "Barwani",
            "Betul",
            "Bhind",
            "Bhopal",
            "Burhanpur",
            "Chhatarpur",
            "Chhindwara",
            "Damoh",
            "Datia",
            "Dewas",
            "Dhar",
            "Dindori",
            "Guna",
            "Gwalior",
            "Harda",
            "Hoshangabad",
            "Indore",
            "Jabalpur",
            "Jhabua",
            "Katni",
            "Khandwa",
            "Khargone",
            "Mandla",
            "Mandsaur",
            "Morena",
            "Narsinghpur",
            "Neemuch",
            "Panna",
            "Raisen",
            "Rajgarh",
            "Ratlam",
            "Rewa",
            "Sagar",
            "Satna",
            "Sehore",
            "Seoni",
            "Shahdol",
            "Shajapur",
            "Sheopur",
            "Shivpuri",
            "Sidhi",
            "Singrauli",
            "Tikamgarh",
            "Ujjain",
            "Umaria",
            "Vidisha"
        ],
        "Maharashtra": [
            "Select a district",
            "Ahmednagar",
            "Akola",
            "Amravati",
            "Aurangabad",
            "Beed",
            "Bhandara",
            "Buldhana",
            "Chandrapur",
            "Dhule",
            "Gadchiroli",
            "Gondia",
            "Hingoli",
            "Jalgaon",
            "Jalna",
            "Kolhapur",
            "Latur",
            "Mumbai City",
            "Mumbai Suburban",
            "Nagpur",
            "Nanded",
            "Nandurbar",
            "Nashik",
            "Osmanabad",
            "Palghar",
            "Parbhani",
            "Pune",
            "Raigad",
            "Ratnagiri",
            "Sangli",
            "Satara",
            "Sindhudurg",
            "Solapur",
            "Thane",
            "Wardha",
            "Washim",
            "Yavatmal"
        ],
        "Manipur": [
            "Select a district",
            "Bishnupur",
            "Chandel",
            "Churachandpur",
            "Imphal East",
            "Imphal West",
            "Jiribam",
            "Kakching",
            "Kamjong",
            "Kangpokpi",
            "Noney",
            "Pherzawl",
            "Senapati",
            "Tamenglong",
            "Tengnoupal",
            "Thoubal",
            "Ukhrul"
        ],
        "Meghalaya": [
            "Select a district",
            "East Garo Hills",
            "East Jaintia Hills",
            "East Khasi Hills",
            "North Garo Hills",
            "Ri Bhoi",
            "South Garo Hills",
            "South West Garo Hills",
            "South West Khasi Hills",
            "West Garo Hills",
            "West Jaintia Hills",
            "West Khasi Hills"
        ],
        "Mizoram": [
            "Select a district",
            "Aizawl",
            "Champhai",
            "Hnahthial",
            "Khawzawl",
            "Kolasib",
            "Lawngtlai",
            "Lunglei",
            "Mamit",
            "Saiha",
            "Saitual",
            "Serchhip"
        ],
        "Nagaland": [
            "Select a district",
            "Dimapur",
            "Kiphire",
            "Kohima",
            "Longleng",
            "Mokokchung",
            "Mon",
            "Peren",
            "Phek",
            "Tuensang",
            "Wokha",
            "Zunheboto"
        ],
        "Odisha": [
            "Select a district",
            "Angul",
            "Balangir",
            "Balasore",
            "Bargarh",
            "Bhadrak",
            "Boudh",
            "Cuttack",
            "Deogarh",
            "Dhenkanal",
            "Gajapati",
            "Ganjam",
            "Jagatsinghpur",
            "Jajpur",
            "Jharsuguda",
            "Kalahandi",
            "Kandhamal",
            "Kendrapara",
            "Kendujhar",
            "Khurda",
            "Koraput",
            "Malkangiri",
            "Mayurbhanj",
            "Nabarangpur",
            "Nayagarh",
            "Nuapada",
            "Puri",
            "Rayagada",
            "Sambalpur",
            "Subarnapur",
            "Sundargarh"
        ],
        "Punjab": [
            "Select a district",
            "Amritsar",
            "Barnala",
            "Bathinda",
            "Faridkot",
            "Fatehgarh Sahib",
            "Fazilka",
            "Ferozepur",
            "Gurdaspur",
            "Hoshiarpur",
            "Jalandhar",
            "Kapurthala",
            "Ludhiana",
            "Mansa",
            "Moga",
            "Muktsar",
            "Pathankot",
            "Patiala",
            "Rupnagar",
            "Sahibzada Ajit Singh Nagar (Mohali)",
            "Sangrur",
            "Shahid Bhagat Singh Nagar (Nawanshahr)",
            "Sri Muktsar Sahib",
            "Tarn Taran"
        ],
        "Rajasthan": [
            "Select a district",
            "Ajmer",
            "Alwar",
            "Banswara",
            "Baran",
            "Barmer",
            "Bharatpur",
            "Bhilwara",
            "Bikaner",
            "Bundi",
            "Chittorgarh",
            "Churu",
            "Dausa",
            "Dholpur",
            "Dungarpur",
            "Hanumangarh",
            "Jaipur",
            "Jaisalmer",
            "Jalore",
            "Jhalawar",
            "Jhunjhunu",
            "Jodhpur",
            "Karauli",
            "Kota",
            "Nagaur",
            "Pali",
            "Pratapgarh",
            "Rajsamand",
            "Sawai Madhopur",
            "Sikar",
            "Sirohi",
            "Sri Ganganagar",
            "Tonk",
            "Udaipur"
        ],
        "Sikkim": [
            "Select a district",
            "East Sikkim",
            "North Sikkim",
            "South Sikkim",
            "West Sikkim"
        ],
        "Tamil Nadu": [
            "Select a district",
            "Ariyalur",
            "Chengalpattu",
            "Chennai",
            "Coimbatore",
            "Cuddalore",
            "Dharmapuri",
            "Dindigul",
            "Erode",
            "Kallakurichi",
            "Kanchipuram",
            "Kanyakumari",
            "Karur",
            "Krishnagiri",
            "Madurai",
            "Nagapattinam",
            "Namakkal",
            "Nilgiris",
            "Perambalur",
            "Pudukkottai",
            "Ramanathapuram",
            "Ranipet",
            "Salem",
            "Sivaganga",
            "Tenkasi",
            "Thanjavur",
            "Theni",
            "Thoothukudi",
            "Tiruchirappalli",
            "Tirunelveli",
            "Tirupathur",
            "Tiruppur",
            "Tiruvallur",
            "Tiruvannamalai",
            "Tiruvarur",
            "Vellore",
            "Viluppuram",
            "Virudhunagar"
        ],
        "Telangana": [
            "Select a district",
            "Adilabad",
            "Bhadradri Kothagudem",
            "Hyderabad",
            "Jagtial",
            "Jangaon",
            "Jayashankar Bhupalapally",
            "Jogulamba Gadwal",
            "Kamareddy",
            "Karimnagar",
            "Khammam",
            "Komaram Bheem Asifabad",
            "Mahabubabad",
            "Mahabubnagar",
            "Mancherial",
            "Medak",
            "Medchal–Malkajgiri",
            "Mulugu",
            "Nagarkurnool",
            "Nalgonda",
            "Nirmal",
            "Nizamabad",
            "Peddapalli",
            "Rajanna Sircilla",
            "Ranga Reddy",
            "Sangareddy",
            "Siddipet",
            "Suryapet",
            "Vikarabad",
            "Wanaparthy",
            "Warangal Rural",
            "Warangal Urban",
            "Yadadri Bhuvanagiri"
        ],
        "Tripura": [
            "Select a district",
            "Dhalai",
            "Gomati",
            "Khowai",
            "North Tripura",
            "Sepahijala",
            "South Tripura",
            "Unakoti",
            "West Tripura"
        ],
        "Uttar Pradesh": [
            "Select a district",
            "Agra",
            "Aligarh",
            "Ambedkar Nagar",
            "Amethi",
            "Amroha",
            "Auraiya",
            "Ayodhya",
            "Azamgarh",
            "Badaun",
            "Baghpat",
            "Bahraich",
            "Ballia",
            "Balrampur",
            "Banda",
            "Barabanki",
            "Bareilly",
            "Basti",
            "Bhadohi",
            "Bijnor",
            "Budaun",
            "Bulandshahr",
            "Chandauli",
            "Chitrakoot",
            "Deoria",
            "Etah",
            "Etawah",
            "Faizabad",
            "Farrukhabad",
            "Fatehpur",
            "Firozabad",
            "Gautam Buddha Nagar",
            "Ghaziabad",
            "Ghazipur",
            "Gonda",
            "Gorakhpur",
            "Hamirpur",
            "Hapur",
            "Hardoi",
            "Hathras",
            "Jalaun",
            "Jaunpur",
            "Jhansi",
            "Kannauj",
            "Kanpur Dehat",
            "Kanpur Nagar",
            "Kasganj",
            "Kaushambi",
            "Kheri",
            "Kushinagar",
            "Lalitpur",
            "Lucknow",
            "Maharajganj",
            "Mahoba",
            "Mainpuri",
            "Mathura",
            "Mau",
            "Meerut",
            "Mirzapur",
            "Moradabad",
            "Muzaffarnagar",
            "Pilibhit",
            "Pratapgarh",
            "Prayagraj",
            "Raebareli",
            "Rampur",
            "Saharanpur",
            "Sambhal",
            "Sant Kabir Nagar",
            "Shahjahanpur",
            "Shamli",
            "Shrawasti",
            "Siddharthnagar",
            "Sitapur",
            "Sonbhadra",
            "Sultanpur",
            "Unnao",
            "Varanasi"
        ],
        "Uttarakhand": [
            "Select a district",
            "Almora",
            "Bageshwar",
            "Chamoli",
            "Champawat",
            "Dehradun",
            "Haridwar",
            "Nainital",
            "Pauri Garhwal",
            "Pithoragarh",
            "Rudraprayag",
            "Tehri Garhwal",
            "Udham Singh Nagar",
            "Uttarkashi"
        ],
        "West Bengal": [
            "Select a district",
            "Alipurduar",
            "Bankura",
            "Birbhum",
            "Cooch Behar",
            "Dakshin Dinajpur",
            "Darjeeling",
            "Hooghly",
            "Howrah",
            "Jalpaiguri",
            "Jhargram",
            "Kalimpong",
            "Kolkata",
            "Malda",
            "Murshidabad",
            "Nadia",
            "North 24 Parganas",
            "Paschim Bardhaman",
            "Paschim Medinipur",
            "Purba Bardhaman",
            "Purba Medinipur",
            "Purulia",
            "South 24 Parganas",
            "Uttar Dinajpur"
        ]
    
    // ... (your state and district data)
  });

  // Function to populate the district dropdown based on the selected state
  const populateDistricts = (selectedState) => {
    setSelectedState(selectedState);
    setSelectedDistrict(""); // Clear the selected district when the state changes
  };

  return (
    <main className="signup_form bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="form-heading">
        <p>Personal Information</p>
      </div>
      <div className="reg-form">
      <div class="form-rows">
                <div class="first-name optional-fld">
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" required />
                </div>
                <div class="last-name  optional-fld">
                    <label for="lastName">Last Name:</label>
                    <input type="text" id="lastName" required />
                </div>
            </div>
            <div class="form-rows">
                <div class="father-name optional-fld">
                    <label for="fathersName">Father's Name:</label>
                    <input type="text" id="fathersName" required />
                </div>
                <div class="mother-name optional-fld">
                    <label for="mothersName">Mother's Name:</label>
                    <input type="text" id="mothersName" required />
                </div>
            </div>
            <div class="form-rows">
                <div class="dob optional-fld">
                    <label for="dob">Date of Birth:</label>
                    <input type="date" id="dob" required />
                </div>
                <div class="gender optional-fld">
                    <label for="gender">Gender:</label>
                    <select id="gender" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div class="form-rows">
                <div class="mobile optional-fld">
                    <label for="mobileNumber">Mobile Number:</label>
                    <input type="tel" id="mobileNumber" required />
                </div>
                <div class="email optional-fld">
                    <label for="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
            </div>
            <div class="form-rows">
                <div class="pincode  optional-fld">
                    <label for="pincode">Pincode:</label>
                    <input type="text" id="pincode" name="pincode" required />
                </div>
                <div class="id-proof optional-fld">
                    <div class="id-type">
                        <label for="idType">ID Type:</label>
                        <select id="idType" name="idType">
                            <option value="aadhar">Aadhar Card</option>
                            <option value="pan">PAN Card</option>
                            <option value="dl">Driving License</option>
                            <option value="passport">Passport</option>
                            <option value="voter">Voter ID</option>
                        </select>
                    </div>
                    <div class="id-number">
                        <label for="idNumber">ID Number:</label>
                        <input type="text" id="idNumber" name="idNumber" required />
                    </div>
                </div>
            </div>
            <div class="form-rows">
                <div class="res-address optional-fld">
                    <label for="residentialAddress">Residential Address:</label>
                    <input type="text" id="residentialAddress" required />
                </div>
                <div class="par-address optional-fld">
                    <label for="permanentAddress">Permanent Address:</label>
                    <input type="text" id="permanentAddress" required />
                </div>
            </div>

        <div className="form-rows">
          <div className="state optional-fld">
            <label htmlFor="stateSelect">Select State:</label>
            <select
              id="stateSelect"
              name="state"
              value={selectedState}
              onChange={(e) => populateDistricts(e.target.value)}
            >
              <option value="">Select a state</option>
              {Object.keys(statesAndDistricts).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div className="district optional-fld">
            <label htmlFor="districtSelect">Select District:</label>
            <select
              id="districtSelect"
              name="district"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="">Select a district</option>
              {selectedState &&
                statesAndDistricts[selectedState]?.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
