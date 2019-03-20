import React from 'react';
import './TourList/TourList.scss';
export const tourData = [
  {
    id: 1,
    city: "huairou/Beijing",
    img: "./img/china.jpg",
    name: "great wall of china tour",
    info:
     <div> 
      The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of  China to protect the Chinese states...  
      <a href="https://en.wikipedia.org/wiki/Great_Wall_of_China" className="readMore" target="_blank" >Wikipedia</a>
      <br></br><br></br>
      Plan Your Perfect Trip! Read the Latest Reviews, Search for the Lowest Prices & Save Money on TripAdvisor...
      <a href="https://www.tripadvisor.de/Attraction_Review-g294212-d1856069-Reviews-The_Great_Wall_of_Gubeikou-Beijing.html" className="readMore" target="_blank" >TripAdvisor</a>
      </div>

  },
  {
    id: 2,
    city: "agra/india",
    img: "./img/tajmahal.jpeg",
    name: "agra tajmahal tour",
    info: 
     <div>
      The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his favourite wife, Mumtaz Mahal...
      <a href="https://en.wikipedia.org/wiki/Taj_Mahal" className="readMore" target="_blank" >Wikipedia</a>
      <br></br><br></br>
      Plan Your Perfect Trip! Read the Latest Reviews, Search for the Lowest Prices & Save Money on TripAdvisor...
      <a href="https://www.tripadvisor.com/Attraction_Review-g297683-d14475284-Reviews-Tajmahal_Tour_Holidays-Agra_Agra_District_Uttar_Pradesh.html" className="readMore" target="_blank" >TripAdvisor</a>    
     </div>

  },
  {
    id: 3,
    city: "athens",
    img: "./img/athens.jpeg",
    name: "athens acropolis tour ",
    info: 
     <div>
      The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens and contains the remains of several ancient buildings of great architectural and historic significance, the most famous being...
      <a href="https://en.wikipedia.org/wiki/Acropolis_of_Athens" className="readMore" target="_blank" >Wikipedia</a>
      <br></br><br></br>
      Plan Your Perfect Trip! Read the Latest Reviews, Search for the Lowest Prices & Save Money on TripAdvisor...
      <a href="https://www.tripadvisor.com/Attraction_Review-g189400-d198706-Reviews-Acropolis-Athens_Attica.html" className="readMore" target="_blank" >TripAdvisor</a>  
     </div>

  },
  {
    id: 4,
    city: "rome",
    img: "./img/rome.jpeg",
    name: "rome pantheon tour",
    info:
     <div>
      The Pantheon is a former Roman temple, now a church, in Rome, Italy, on the site of an earlier temple commissioned by Marcus Agrippa during the reign of Augustus. It was completed by the emperor Hadrian and probably... 
      <a href="https://en.wikipedia.org/wiki/Pantheon,_Rome" className="readMore" target="_blank" >Wikipedia</a>
      <br></br><br></br>
      Plan Your Perfect Trip! Read the Latest Reviews, Search for the Lowest Prices & Save Money on TripAdvisor...
      <a href="https://www.tripadvisor.com/Attraction_Review-g187791-d197714-Reviews-Pantheon-Rome_Lazio.html" className="readMore" target="_blank" >TripAdvisor</a>  
     </div>
  },
  {
    id: 5,
    city: "berlin",
    img: "./img/berlin.jpeg",
    name: "berlin brandenburger tor tour ",
    info:
     <div>
      is an 18th-century neoclassical monument in Berlin, built on the orders of Prussian king Frederick William II after the (temporarily) successful restoration of order during the early Batavian Revolution...
      <a href="https://en.wikipedia.org/wiki/Brandenburg_Gate" className="readMore" target="_blank" >Wikipedia</a>
      <br></br><br></br>
      Plan Your Perfect Trip! Read the Latest Reviews, Search for the Lowest Prices & Save Money on TripAdvisor...
      <a href="https://www.tripadvisor.com/Attraction_Review-g187323-d190518-Reviews-Brandenburger_Tor-Berlin.html" className="readMore" target="_blank" >TripAdvisor</a>  
     </div>
  },
  {
    id: 6,
    city: "rio de  janeiro",
    img: "./img/riodejaneiro.jpeg",
    name: "rio de janeiro christ the redeemer tour ",
    info: 
     <div>
      Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot...   
      <a href="https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)" className="readMore" target="_blank" >Wikipedia</a>
      <br></br><br></br>
      Plan Your Perfect Trip! Read the Latest Reviews, Search for the Lowest Prices & Save Money on TripAdvisor...
      <a href="https://www.tripadvisor.com/Attraction_Review-g303506-d7292031-Reviews-Rio_de_Janeiro_City_Tour-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html" className="readMore" target="_blank" >TripAdvisor</a>  
     </div>
  },
  {
    id: 7,
    city: "barcelona",
    img: "./img/barcelona.jpeg",
    name: "barcelona la sagrada familia tour",
    info: 
     <div>
      The Basílica i Temple Expiatori de la Sagrada Família is a large unfinished Roman Catholic church in Barcelona, designed by Catalan architect Antoni Gaudí Gaudí's work on the building is part of a UNESCO World Heritage Site, and... 
      <a href="https://en.wikipedia.org/wiki/Sagrada_Fam%C3%ADlia" className="readMore" target="_blank" >Wikipedia</a>
      <br></br><br></br>
      Plan Your Perfect Trip! Read the Latest Reviews, Search for the Lowest Prices & Save Money on TripAdvisor...
      <a href="https://www.tripadvisor.de/Attraction_Review-g187497-d9858953-Reviews-Barcelona_Tours-Barcelona_Catalonia.html" className="readMore" target="_blank" >TripAdvisor</a>  
     </div>
  },
  {
    id: 8,
    city: "singapore",
    img: "./img/singapore.jpeg",
    name: "singapore gardens by the bay tour",
    info: 
     <div>
      Gardens by the Bay is a nature park spanning 101 hectares of reclaimed land in the Central Region of Singapore, adjacent to the Marina Reservoir. The park consists of three waterfront gardens: Bay South Garden, Bay East Garden ...
      <a href="https://en.wikipedia.org/wiki/Gardens_by_the_Bay" className="readMore" target="_blank" >Wikipedia</a>
      <br></br><br></br>
      Plan Your Perfect Trip! Read the Latest Reviews, Search for the Lowest Prices & Save Money on TripAdvisor...
      <a href="https://www.tripadvisor.com/Attraction_Review-g294265-d3608690-Reviews-Free_Singapore_Tour-Singapore.html" className="readMore" target="_blank" >TripAdvisor</a>
     </div>
  },
  {
    id: 9,
    city: "dubai",
    img: "./img/dubai.jpeg",
    name: "dubai Burj Khalifa tour",
    info: 
     <div>
      The Burj Khalifa, known as the Burj Dubai prior to its inauguration in 2010, is a skyscraper in Dubai, United Arab Emirates. With a total height of 829.8 m and a roof height of 828 m, the Burj Khalifa has been the tallest structure ...
      <a href="https://en.wikipedia.org/wiki/Burj_Khalifa" className="readMore" target="_blank" >Wikipedia</a>
      <br></br><br></br>
      Plan Your Perfect Trip! Read the Latest Reviews, Search for the Lowest Prices & Save Money on TripAdvisor...
      <a href="https://www.tripadvisor.com/Attraction_Review-g295424-d12849149-Reviews-Burj_Khalifa-Dubai_Emirate_of_Dubai.html" className="readMore" target="_blank" >TripAdvisor</a>
     </div>
  },
  {
    id: 10,
    city: "paris",
    img: "./img/paris.jpeg",
    name: "paris eiffel tower tour",
    info: 
     <div>
      The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower Constructed from 1887–1889 as the entrance...
      <a href="https://en.wikipedia.org/wiki/Eiffel_Tower" className="readMore" target="_blank" >Wikipedia</a>
      <br></br><br></br>
      Plan Your Perfect Trip! Read the Latest Reviews, Search for the Lowest Prices & Save Money on TripAdvisor...
      <a href="https://www.tripadvisor.com/Attraction_Review-g187147-d188151-Reviews-Eiffel_Tower-Paris_Ile_de_France.html" className="readMore" target="_blank" >TripAdvisor</a>
     </div>
  },
  {
    id: 11,
    city: "giza",
    img: "./img/giza.jpeg",
    name: "giza pyramids of egypt tour",
    info:
     <div>
      The Great Pyramid of Giza is the oldest and largest of the three pyramids in the Giza pyramid complex bordering present-day El Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain...
      <a href="https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza" className="readMore" target="_blank" >Wikipedia</a>
      <br></br><br></br>
      Plan Your Perfect Trip! Read the Latest Reviews, Search for the Lowest Prices & Save Money on TripAdvisor...
      <a href="https://www.tripadvisor.com/Attraction_Review-g294202-d317746-Reviews-Pyramids_of_Giza-Giza_Giza_Governorate.html" className="readMore" target="_blank" >TripAdvisor</a>
     </div>
  },
  {
    id: 12,
    city: "tokyo",
    img: "./img/tokyo.jpeg",
    name: "tokyo mount fuji tour",
    info: 
     <div>
      Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains...
      <a href="https://en.wikipedia.org/wiki/Mount_Fuji" className="readMore" target="_blank" >Wikipedia</a>
      <br></br><br></br>
      Plan Your Perfect Trip! Read the Latest Reviews, Search for the Lowest Prices & Save Money on TripAdvisor...
      <a href="https://www.tripadvisor.com/Attraction_Review-g298102-d321024-Reviews-Mount_Fuji-Chubu.html" className="readMore" target="_blank" >TripAdvisor</a>
     </div>
  },
  {
    id: 13,
    city: "new york",
    img: "./img/newyork.jpeg",
    name: "new york bridge tour",
    info:
     <div>
      New York City is home to over 2,000 bridges and tunnels. Several agencies manage this network of crossings, including the New York City Department of Transportation, Metropolitan Transportation Authority, Port Authority of New York...
      <a href="https://en.wikipedia.org/wiki/List_of_bridges_and_tunnels_in_New_York_City" className="readMore" target="_blank" >Wikipedia</a>
      <br></br><br></br>
      Plan Your Perfect Trip! Read the Latest Reviews, Search for the Lowest Prices & Save Money on TripAdvisor... 
      <a href="https://www.tripadvisor.com/Attractions-g60763-Activities-New_York_City_New_York.html" className="readMore" target="_blank" >TripAdvisor</a>
     </div>
  },
  {
    id: 14,
    city: "toronto",
    img: "./img/toronto.jpeg",
    name: "toronto cn tower tour",
    info:
     <div>
      The CN Tower is a 553.3 m-high concrete communications and observation tower located in Downtown Toronto, Ontario, Canada. Built on the former Railway Lands, it was completed in 1976. Its name "CN" originally referred to Canadian National...
      <a href="https://en.wikipedia.org/wiki/CN_Tower" className="readMore" target="_blank" >Wikipedia</a>
      <br></br><br></br>
      Plan Your Perfect Trip! Read the Latest Reviews, Search for the Lowest Prices & Save Money on TripAdvisor... 
      <a href="https://www.tripadvisor.com/Attractions-g155019-Activities-Toronto_Ontario.html" className="readMore" target="_blank" >TripAdvisor</a>
     </div>
  },
  {
    id: 15,
    city: "london",
    img: "./img/london.jpeg",
    name: "london buckingham palace ",
    info:
     <div>
     Buckingham Palace is the London residence and administrative headquarters of the monarch of the United Kingdom. Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality. It has been...
      <a href="https://en.wikipedia.org/wiki/Buckingham_Palace" className="readMore" target="_blank" >Wikipedia</a>
      <br></br><br></br>
      Plan Your Perfect Trip! Read the Latest Reviews, Search for the Lowest Prices & Save Money on TripAdvisor...
      <a href="https://www.tripadvisor.de/Attraction_Review-g186338-d187549-Reviews-Buckingham_Palace-London_England.html" className="readMore" target="_blank" >TripAdvisor</a>
     </div>
  },
  {
    id: 16,
    city: "sydney",
    img: "./img/sydney.jpeg",
    name: "sydney opera house tour",
    info:
     <div>
      The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour in Sydney, New South Wales, Australia. It is one of the 20th century's most famous and distinctive buildings.Designed by Danish architect Jørn Utzon, the building was formally opened...
      <a href="https://en.wikipedia.org/wiki/Sydney_Opera_House" className="readMore" target="_blank" >Wikipedia</a>
      <br></br><br></br>
      Plan Your Perfect Trip! Read the Latest Reviews, Search for the Lowest Prices & Save Money on TripAdvisor...
      <a href="https://www.tripadvisor.de/Attraction_Review-g255060-d257278-Reviews-Sydney_Opera_House-Sydney_New_South_Wales.html" className="readMore" target="_blank" >TripAdvisor</a>
     </div>
  }
];
