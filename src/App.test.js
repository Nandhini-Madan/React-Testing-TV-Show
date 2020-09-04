import React from "react";
import App from "./App";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
jest.mock("./api/fetchShow");
test("App fetches Season data from api and render", async () => {
    //Arrange
    mockFetchShow.mockResolvedValueOnce(showData);
    const { findByText, getByText, getAllByTestId } = render(<App />);
    //Act 
    await findByText(/Fetching data.../i);
    waitFor(() => {
        //Assert
        //Using The text I am able to get dropdown Menu.
        //getByrole method is not working 
        const selectSeasonButton = getByText(/Select a season/i)
        //Click the select a season 
        fireEvent.click(selectSeasonButton)
        //Get the season 1 data by text "Season 1 in menu" and then click 
        fireEvent.click(getByText(/season 1/i))
        //current given 1 data in mock up data so the length of data will be 1
        expect(getAllByTestId(/episode/i)).toHaveLength(1);
    })
});

const showData = {
    data:
    {
        "id": 2993,
        "url": "http://www.tvmaze.com/shows/2993/stranger-things",
        "name": "Stranger Things",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Fantasy",
            "Science-Fiction"
        ],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-07-15",
        "officialSite": "https://www.netflix.com/title/80057281",
        "schedule": {
            "time": "",
            "days": [
                "Thursday"
            ]
        },
        "rating": {
            "average": 8.7
        },
        "weight": 98,
        "network": null,
        "webChannel": {
            "id": 1,
            "name": "Netflix",
            "country": null
        },
        "externals": {
            "tvrage": 48493,
            "thetvdb": 305288,
            "imdb": "tt4574334"
        },
        "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
        },
        "summary": "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
        "updated": 1597745578,
        "_links": {
            "self": {
                "href": "http://api.tvmaze.com/shows/2993"
            },
            "previousepisode": {
                "href": "http://api.tvmaze.com/episodes/1576476"
            }
        },

        _embedded: {
            episodes: [
                {
                    "id": 553946,
                    "url": "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
                    "name": "Chapter One: The Vanishing of Will Byers",
                    "season": 1,
                    "number": 1,
                    "airdate": "2016-07-15",
                    "airtime": "",
                    "airstamp": "2016-07-15T12:00:00+00:00",
                    "runtime": 60,
                    "image": {
                        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
                        "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
                    },
                    "summary": "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
                    "_links": {
                        "self": {
                            "href": "http://api.tvmaze.com/episodes/553946"
                        }
                    }
                }
            ]
        }
    }
};
