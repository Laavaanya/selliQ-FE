import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./index.scss";

import axios from "axios";

const data = {
  investors: [
    {
      name: "Critical Ventures",
      domain: "DevOps",
      location: "Parque Industrial Do Taveiro, Lt. 48, Taveiro, Coimbra",
      description:
        "Critical Ventures is a VC that invests Worldwide in game-changing software companies with the power to transform the way the world uses technology in the areas of IoT, Automatisation and Digitalisation, Cyber Security, AI/ML / Decentralised Tech, UxD / Interfaces, Mobility and Medical Software.",
      target_countries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia-H",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo (Congo-Brazzaville)",
        "Costa Rica",
        "Côte d'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "DRC Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        'Eswatini (fmr. "Swaziland")',
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Holy See",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Lybia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Korea",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sant Kitts and Nevis",
        "Sant Lucia",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "UAE",
        "Uganda",
        "Ukraine",
        "Uruguay",
        "USA",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
      ],
      stages: ["4. Scaling 3. Early Revenue 2. Prototype 1. Idea Or Patent"],
      fund_stages: [
        "4. Scaling",
        "3. Early Revenue",
        "2. Prototype",
        "1. Idea Or Patent",
      ],
      linkedin: "https://www.linkedin.com/company/critical-ventures-inc/",
      website: "https://www.critical-ventures.com/",
      score: 7,
      reason:
        "targets India & Canada (company operates there); supports similar funding stages: early revenue, prototype, scaling; aligned with domain 'DevOps'",
      id: 1,
    },
    {
      name: "Team8",
      domain: "DevOps",
      location: "Totseret ha-Arets St 7, Tel Aviv-Yafo, 6789104",
      description:
        "Team8 is a global venture group that builds and invests in companies across cybersecurity, data, AI, enterprise software, fintech, and health-tech. Founded by leaders from Israel’s Unit 8200, we blend deep technical expertise with hands-on company building.",
      target_countries: ["Israel"],
      stages: [
        "I Invest In Native Ai Early Stage Startups And Strong Founders Team In The Ideation Phase.",
      ],
      fund_stages: [
        "1. Idea Or Patent",
        "2. Prototype",
        "3. Early Revenue",
        "4. Scaling",
      ],
      linkedin: "https://www.linkedin.com/company/team8group/mycompany/",
      website: "https://team8.vc/",
      score: 3.5,
      reason:
        "supports similar funding stages: early revenue, prototype, scaling; aligned with domain 'DevOps'",
      id: 2,
    },
    {
      name: "Eagle Venture Fund",
      domain: "DevOps",
      location: "550 Bailey Ave Suite 310 Fort Worth, Texas 76107",
      description: "We are an impact venture capital fund.",
      target_countries: [
        "USA",
        "Germany",
        "Switzerland",
        "Austria",
        "Singapore",
      ],
      stages: ["3. Early Revenue 2. Prototype"],
      fund_stages: ["3. Early Revenue", "2. Prototype"],
      linkedin: "https://www.linkedin.com/company/eagle-venture-fund/",
      website: "https://www.eagleventurefund.com/",
      score: 3.5,
      reason:
        "supports similar funding stages: early revenue, prototype; aligned with domain 'DevOps'",
      id: 3,
    },
    {
      name: "ENA Venture Capital",
      domain: "Cloud Computing",
      location: "Keizersgracht 482, Amsterdam Netherlands",
      description:
        "We are passionate about investing in visionary founders who are on a mission to change the world by building the technology stack of the future.",
      target_countries: ["Netherlands", "Spain", "Turkey", "UAE"],
      stages: ["3. Early Revenue 2. Prototype 4. Scaling 1. Idea Or Patent"],
      fund_stages: [
        "3. Early Revenue",
        "2. Prototype",
        "4. Scaling",
        "1. Idea Or Patent",
      ],
      linkedin: "https://www.linkedin.com/company/enavc",
      website: "https://ena.vc",
      score: 3.5,
      reason:
        "supports similar funding stages: early revenue, prototype, scaling; aligned with domain 'Cloud Computing'",
      id: 4,
    },
  ],
};

const data2 = {
  investors: [
    {
      name: "Critical Ventures",
      domain: "DevOps",
      location: "Parque Industrial Do Taveiro, Lt. 48, Taveiro, Coimbra",
      description:
        "Critical Ventures is a VC that invests Worldwide in game-changing software companies with the power to transform the way the world uses technology in the areas of IoT, Automatisation and Digitalisation, Cyber Security, AI/ML / Decentralised Tech, UxD / Interfaces, Mobility and Medical Software.",
      target_countries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia-H",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo (Congo-Brazzaville)",
        "Costa Rica",
        "Côte d'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "DRC Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        'Eswatini (fmr. "Swaziland")',
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Holy See",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Lybia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Korea",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sant Kitts and Nevis",
        "Sant Lucia",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "UAE",
        "Uganda",
        "Ukraine",
        "Uruguay",
        "USA",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
      ],
      stages: ["4. Scaling 3. Early Revenue 2. Prototype 1. Idea Or Patent"],
      fund_stages: [
        "4. Scaling",
        "3. Early Revenue",
        "2. Prototype",
        "1. Idea Or Patent",
      ],
      linkedin: "https://www.linkedin.com/company/critical-ventures-inc/",
      website: "https://www.critical-ventures.com/",
      score: 0.7,
      reason:
        "targets India & Canada (company operates there); supports similar funding stages: early revenue, prototype, scaling; aligned with domain 'DevOps'",
      id: 1,
    },
    {
      name: "Team8",
      domain: "DevOps",
      location: "Totseret ha-Arets St 7, Tel Aviv-Yafo, 6789104",
      description:
        "Team8 is a global venture group that builds and invests in companies across cybersecurity, data, AI, enterprise software, fintech, and health-tech. Founded by leaders from Israel’s Unit 8200, we blend deep technical expertise with hands-on company building.",
      target_countries: ["Israel"],
      stages: [
        "I Invest In Native Ai Early Stage Startups And Strong Founders Team In The Ideation Phase.",
      ],
      fund_stages: [
        "1. Idea Or Patent",
        "2. Prototype",
        "3. Early Revenue",
        "4. Scaling",
      ],
      linkedin: "https://www.linkedin.com/company/team8group/mycompany/",
      website: "https://team8.vc/",
      score: 0.35,
      reason:
        "supports similar funding stages: early revenue, prototype, scaling; aligned with domain 'DevOps'",
      id: 2,
    },
    {
      name: "Autonom Ventures",
      domain: "DevOps",
      location:
        "Bucharest, Calea Floreasca 131-137, Nusco Building, floor 7, Romania",
      description:
        "Autonom Ventures represents a new investment division of the Ștefan family, created with the aim of supporting and accelerating the development of small and medium-sized Romanian entrepreneurial initiatives. By building synergies between ideas and people and supplying them with the necessary resources, we believe that we can have a positive impact in the local economy by growing entrepreneurs and their businesses.",
      target_countries: ["Romania"],
      stages: ["5. Growth 4. Scaling 3. Early Revenue 2. Prototype"],
      fund_stages: [
        "5. Growth",
        "4. Scaling",
        "3. Early Revenue",
        "2. Prototype",
      ],
      linkedin: "https://www.linkedin.com/company/autonom-group/",
      website: "https://holding.ro/",
      score: 0.35,
      reason:
        "supports similar funding stages: growth, early revenue, prototype, scaling; aligned with domain 'DevOps'",
      id: 3,
    },
    {
      name: "TLV Partners",
      domain: "Cloud Computing",
      location: "21 HaArbaa Street, Tel Aviv, IL",
      description: "",
      target_countries: ["Israel", "USA"],
      stages: ["3. Early Revenue 4. Scaling 5. Growth"],
      fund_stages: ["3. Early Revenue", "4. Scaling", "5. Growth"],
      linkedin: "https://www.linkedin.com/company/tlv-partners",
      website: "http://www.tlv.partners",
      score: 0.35,
      reason:
        "supports similar funding stages: growth, early revenue, scaling; aligned with domain 'Cloud Computing'",
      id: 4,
    },
  ],
};
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) { 
    const { name, score, reason } = payload[0].payload;
    return (
      <div className="tooltip">
        <p>
          <strong>{name}</strong>
        </p>
        <p>Probability: {(score * 100).toFixed(0)}%</p>
        <p>Reason:{reason}</p>
      </div>
    );
  }
  return null;
};

const Investor = () => {
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [investors, setInvestors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/investors")
      .then((response) => {
        setInvestors(response.data?.investors);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching investors:", error);
        setInvestors(data?.investors);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="Investor">
        <p>Loading investor suggestions...</p>
      </div>
    );
  }
  const sorted = [...investors]
    .sort((a, b) => b.score - a.score)
    .map((d) => ({
      ...d,
      score: d.score / 10,
    }));
  const top3 = sorted.slice(0, 3);
  const rest = sorted.slice(3, 5);

  return (
    <div className="Investor">
      <h2>
        Here are investor suggestions for{" "}
        <span className="highlight">Revolte</span>!
      </h2>
      <div className="content">
        {/* LEFT PANEL - CARDS */}
        <div className="right-panel">
          <h3>Top 3 Investors</h3>
          <div className="top-cards">
            {top3.map((item) => (
              <div
                key={item?.id}
                className={`investor-card ${
                  selectedInvestor?.id === item?.id ? "active" : ""
                }`}
                onClick={() => setSelectedInvestor(item)}
              >
                <h4>{item?.name}</h4>
                <p>{(item?.score * 100).toFixed(0)}% match</p>
              </div>
            ))}
          </div>

          <h3>Other Investors</h3>
          <div className="horizontal-cards">
            {rest.map((item) => (
              <div
                key={item.id}
                className={`h-card ${
                  selectedInvestor?.id === item?.id ? "active" : ""
                }`}
                onClick={() => setSelectedInvestor(item)}
              >
                <div>
                  <h5>{item?.name}</h5>
                  <p>{(item?.score * 100).toFixed(0)}%</p>
                </div>
              </div>
            ))}
          </div>

          {selectedInvestor && (
            <div
              className="popup-overlay"
              onClick={() => setSelectedInvestor(null)}
            >
              <div className="popup-card" onClick={(e) => e.stopPropagation()}>
                <button
                  className="close-btn"
                  onClick={() => setSelectedInvestor(null)}
                >
                  ×
                </button>
                <h3>{selectedInvestor.name}</h3>
                <p>
                  <strong>Description:</strong>{" "}
                  {selectedInvestor?.description ??
                    `We have invested in ${selectedInvestor?.domain}`}
                </p>
                <p>
                  <strong>Reason:</strong> {selectedInvestor?.reason}
                </p>
                <p>
                  <strong>Fund Stages:</strong>{" "}
                  {selectedInvestor?.fund_stages.join(", ")}
                </p>
                <p>
                  <strong>LinkedIn:</strong>{" "}
                  {selectedInvestor?.linkedin ? (
                    <a
                      href={selectedInvestor?.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {selectedInvestor?.linkedin?.slice(0,40)}...
                    </a>
                  ) : (
                    "Not available"
                  )}
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  {selectedInvestor?.website ? (
                    <a
                      href={selectedInvestor?.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {selectedInvestor?.website?.slice(0,40)}...
                    </a>
                  ) : (
                    "Not available"
                  )}
                </p>
                <p>
                  <strong>Target Locations:</strong>{" "}
                  {selectedInvestor?.target_countries?.join(", ")}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="chart">
          <ResponsiveContainer>
            <BarChart
              data={sorted}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tickFormatter={(value) =>
                  value.length > 6 ? `${value.substring(0, 6)}…` : value
                }
              />
              <YAxis tickFormatter={(value) => `${value * 100}%`} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="score" fill="#cc5500" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Investor;
