# GEOG 458 Lab 07: Geo-Narrative: Build a Storymap
## Margaret Yang

## 1. How **chapter**, **index**, **chapter.id**, and **data-index** connect the configuration to HTML section
In the *forEach()* loop, **chapter** represents the current chapter object in *config.chapters*, while **index** represents its position in the array, starting from 0. **chapter.id** provides a unique ID for each HTML section, and **data-index** stores its corresponding position in the array. This allows JavaScript to identify each section and connect it to the correct chapter information in *config.js*.

## 2. The different responsibilities of *activateChapter()* and *observeChapters()*, and why first chapter can be activated before observation starts
The *activateChapter()* function updates the current chapter, highlights the active HTML section and its corresponding navigation link. The function also calls *moveMap()* to move the map camera to the chapter's specified location, using settings like center, zoom, pitch and bearing. Meanwhile, *observeChapters()* and uses *IntersectionObserver* to detect which sections enter the middle detection bands as users scroll. This function determines which chapter should be active and passes its index to *activateChapter()*.     
The first chapter can be activated before observation begins because *activateChapter()* can run directly without waiting for *IntersectionObserver*. This allows the introduction and its map view to be presented immediately, while the observer handles chapter changes as users scroll.

## 3. Explain how the central detection band is constructed and why it is not a 50% overlap test. 
The *IntersectionObserver* uses negative *rootMargin* values of 45% to remove both top and bottom portions, only leaving middle 10% as the middle detection band. As users scroll, the observer detects which sections enter or leave this areas, and selects the section whose center is closest to middle detection band.    
This is not a 50% overlap test because the observer focuses on where a section appears on the screen, not requiring half of the section to be visible.

## 4. Identify one camera or layout choice that helps communicate your geographical question.
For my virtual tourist guide to Père Lachaise Cemetery, I chose to use different zoom levels and camera angles to guide visitors from the overall cemetery to indiviudal graves. The introduction uses a zoom level of 14 to show the birdview of cemetery and its surrounding area, while the following chapters uses a zoom level of around 18, with different pitch and bearing settings to provide closer, angled views of specific graves. For the conclusion, the map zooms back out to 12.8, providing a broader overview of the cemetery. This transition from an overview to individual locations and back to general view helps visitors understand how the graves they explored fit into the larger geographical setting of Père Lachaise Cemetery.