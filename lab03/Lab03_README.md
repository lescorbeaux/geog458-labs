# GEOG458 Lab 03: Basemap Design and Tile Generation
## Margaret Yang
## Project Overview
This lab explores how thematic raster and interactive vector data can be combined to create web maps using QGIS, Mapbox Studio, and MapLibre GL JS. Two maps were created: a guided map visualizing PM2.5 concentrations in the Puget Sound region, and an independent map examining tree canopy coverage in Seattle. Both maps using different customized basemaps, thematic raster layers and interactive vector data.    
## Lab03-1: Puget Sound PM2.5
This guided map visualizes PM2.5 concentrations across the Puget Sound region using observations from the U.S. Environmental Protection Agency (EPA) AirData collected on July 5, 2025. The station observations were imported into QGIS and reprojected to EPSG:32610 for IDW interpolation. The resulting raster estimated PM2.5 concentrations between monitoring stations, while geojson circle layer displays individual station location and their measured values.
This map has a customized Mapbox basemap, hiding POIs and emphasizing highways, a separately exported interpolation raster, and interactive station circles. Users can toggle the raster, vector layers, and click individual stations to view their names, measured concentrations in µg/m³, observation dates, and station IDs. 
The IDW estimated concentrations between monitor stations, and should not be interpreted as AQI values.
## Lab03-2: Seattle Tree Canopy Coverage (2021)
### Study Area, Purpose, Possible Audience
The independent map