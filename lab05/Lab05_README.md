# GEOG 458 Lab 05: Millions of Data, Flow Map
## Margaret Yang

## Study Area and Dates
I selected the Southern California coastline, primarily focusing on Long Beach, Balboa Island, Dana Point and Santa Catalina Island. I chose this region because this is where I grew up, and I was curious about vessel movements in this area that I am personally familiar with, since I have taken boat trips around this region several times before.    

I downloaded vessel tracking data from [AccessAIS](https://marinecadastre.gov/accessais/), covering 12/24/2025 at 16:00 to 12/26/2025 at 16:59 PST, with my analysis primarily focusing on Christmas Eve and Christmas Day. I selected this period because I wanted to explore maritime traffic during the Christmas holiday. I limited the geographic extent to focus on the Southern California coastline with a short time period in order to keep the dataset manageable.    

Before examing the map, I expected to see a high concentration of cargo and tanker vessels around the Port of Long Beach, along with some passenger vessel movements near the Orange County coastlineand between mainland and Santa Catalina Island. I am very interested if the passenger vessel movements would increase during the holiday season, while cargo and tanker vessel activity decreases or remians relatively consistent.

## Interpretation
After exploring the flow map, I noticed that different vessel types show quite different patterns. Cargo and tanker vessels are primarily concentrated around Port of Los Angeles and Port of Long Beach. Tankers appear around both ports, while cargo vessels seem to be more concentrated near the Port of Los Angeles, with some routes extending farther into the Pacific Ocean. This pattern matches the fact that the port's top trading partners are all located in Asia.    

Surprisingly, the passenger vessel category only contains 22 selected paths, with most movements appearing near the coastline rather than between the mainland and Santa Catalina Island. In comparison, the "Other vessels" category contains 591 selected paths and shows a much wider variety of routes, including connections from Long Beach, Newport, and Dana Point to Avalon, as well as movements between Two Harbors and Avalon. Some vessel movements are also visible near Santa Monica, Venice Beach and Redondo Beach.    

These patterns suggest that different vessel types serve different transportation purposes in this region. While cargo and tanker vessels are more cloasely connected with major port activities, the "Other vessels" category may include smaller recreational or passenger vessels traveling between coastal destination. Interestingly, some of the routes to Santa Catalina Island appear to match those operated by Catalina Express. However, these routes are displayed under "Other vessels" rather than "Passenger", which raises questions about how vessel types are classified in the dataset.    

This short period alone is not enough to determine whether these patterns are related to the holiday. These findings are simply observations of vessel movements during the selected time period, which can't be treated as evidence to seasonal trends.

## Feature proposal for a potential user
If I am planning a visualization service, I would identify tourists, ferry passengers traveling around the Southern California coastline , or simply people interested in the region as potential users. They might be interested in identifying information of specific vessels. Through the deck.gl interactivity guide and inspired by tracking platforms like Flightradar24, I would add an interactive tooltip that allows users to click on individual vessel flows to view additional information, such as vessel names, types, routes, and timestamps.

This feature would be useful by allowing users to explore individual vessels instead of only observing their movements. For example, users interested in traveling to Santa Catalina Island could identify vessels following familiar ferry routes and examine their classifications. This would help users better understand the transportation network along the Southern California coastline.