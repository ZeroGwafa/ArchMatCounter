# ArchMatCounter

Tracks Archaeology Materials gained and goals via the chat window.

Retains data until you hit the "Clear" button.

## Installation:
Install by copying this either copy pasting the following link in your browser. 

alt1://addapp/https://zerogwafa.github.io/ArchMatCounter/appconfig.json

Or, by going to the following link in the Alt1 Browser

https://zerogwafa.github.io/ArchMatCounter/

## Instructions:
    1. Open app with RuneScape window visible.

    2. Ensure that the chat filter is off on the chat window you want to track materials on.  

        2a. Ensure timestamps are on!  Otherwise, the tracker may miss a material!
    
    3. Gather materials.  This will catch all material messages.

The app will automatically start tracking as soon as it is opened.

Click "Stop" to stop tracking.

![unfiltered](/images/unfiltered.png)

### Material Information
If you mouse over any material name, it will show a small popup showing the level that it can be accessed at, the faction it is affiliated with, and locations for that material.

![info.png](/images/info.png)

### Column sort
You can now sort by each Column.

Comps will sort by level requirement, ascending.

Qty and Goal will sort those columns by amount, descending.

## Menu

![menu](/images/menu.png)

### Filter Mats

Enabling this option will hide all materials whose Qty or Goal is 0, as well as any materials whose "hide" checkbox is checked (more on this below).

![filter](/images/filter.gif)

### Edit Mode

Enabling this will enable a couple editable options.

First, the "Hide" column will become visible.  This will allow the user to hide specific columns, regardless of Qty.

Next, the Qty and Goal boxes for each material can be edited.  Useful for tracking your current material count, or setting goals for certain materials.

When setting a goal, once the Qty amount is greater than, or equal to the goal, the material row will highlight in green.

![editMode](/images/editMode.png)

### Enable Goals
Checking this option will show the Goals column.

### Select Chat
When opening the app, it will detect all visible chat windows.  You can use this option to have the app target a specific window (The default is the window closest to the top-left of the screen).  When selecting a different window, a white box will surround the selected chat window briefly to show which chat you have selected.

![chatSelect](/images/chatSelect.gif)

### Artifact Calculator

This will open a new window with a list of Artifacts in the game.  Enter the number of artifacts that you have/want to repair, then click the Import button in the top right of the window.  Your Goals column will automatically populate with the amount of Materials that you will need for the Artifacts entered.

The Artifact list is stored, and will populate when the window opens again.  

![atrifactCalc](/images/artifactCalc.gif)

### Export Data as CSV
- Clicking this will generate a CSV file with your current material stats.  
