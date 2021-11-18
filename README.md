# Newsium

Newsium is one stop place to get latest news like Archives, Articles, Top Stories and Most Popular feed (based on emailed and viewed) from around the world 🌎 using the help of **New York Times**.

## About

This web component works based on open-source api's provided by **New York Times**. Built using **Node.js**.

## Usage
1. Install the package to your project using the following command

~~~~ {.html}
npm install newsium
~~~~

2. Import the package in your project

~~~~ {.html}
import news from 'newsium'
~~~~

3. Get an api key from https://developer.nytimes.com/get-started

* `news.getArchiveInfo("month","year","your-api-key")` returns an array of NYT articles for a given **month** and **year**, going back to 1851.

* `news.getArticleInfo("query","your-api-key")` returns articles for a given **query** e.g. for **query** we can give *election*, *cricket*, *meta* etc. 

* `news.getTopStories("topic","your-api-key")` returns an array of top articles currently on the specified **topic**. The possible **topic** values are: arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, and world.

* `news.getMostPopular("shared via","popular in the last day","your-api-key")` provides service for getting the most popular articles on NYTimes.com based on emails or views. Example: 

  *  `news.getMostPopular("emailed","1","your-api-key")`->Get most emailed articles for the last day.
  *  `news.getMostPopular("viewed","1","your-api-key")`->Get most viewed articles for the last seven days.

> </> with ❤️ by Sathwik 
