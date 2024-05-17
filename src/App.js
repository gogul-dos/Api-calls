import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [urlsToDisplay, setUrlsToDisplay] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Link to Unsplash Search API Documentation: https://unsplash.com/documentation#search-photos
  async function getUnsplashPhotos() {
    try {
      //IMPORTANT! Update the below variable with your own api key!!
      const apiKey = "";

      //making unsplash api call to search for photos based on search query
      let resp = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${searchQuery}&per_page=15`
      );
      console.log(21, resp.data.results);
      //store the array of results into urlsToDisplay variable
      setUrlsToDisplay(resp.data.results);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="fullscreen">
        <div className="center">
          <input
            placeholder="Enter Search Query"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button onClick={getUnsplashPhotos}>Submit</button>
        </div>
        <div class="row">
          {urlsToDisplay.map((image) => {
            return (
              <div>
                <img src={image.urls.small} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
