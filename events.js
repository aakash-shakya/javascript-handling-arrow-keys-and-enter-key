function handleEvent(event) {
    // handles events for "enter"/ "up"/ "down"/ "left"/ "right" arrow keys
    
    if (event.which == 13) {
        //prevents the default action of the event from happening
        event.preventDefault();

        if (event.target.nextSibling != null) {
            // go to next cell
            event.target.nextSibling.focus()
        }
        else {
            // go to next row's first cell
            event.target.parentElement.nextSibling.firstChild.focus()
        }
    }

    if (event.which == 39) {
        // go to next cell
        event.target.nextSibling.focus()
    }

    if (event.which == 37) {
        // go to previous cell
        event.target.previousSibling.focus()
    }

    if (event.which == 38) {
        // go to previous row's same cell
        event.target.parentElement.previousSibling.childNodes[event.target.cellIndex].focus()
    }

    if (event.which == 40) {
        // go to next row's same cell
        event.target.parentElement.nextSibling.childNodes[event.target.cellIndex].focus()
    }
}

