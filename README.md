## About
This is a very basic Firefox extension that modifies the canvas_session cookie set by the [Canvas LMS](https://www.instructure.com/canvas) to not be a session cookie any more. The end result is that Canvas will stay logged in across browser sessions.

## Requirements
The extension expects that your Canvas instance is at a URL that begins with https://canvas.

## Installation
Download the .xpi file from Github releases (it's just a zip of the repository contents). Because it's not signed by Mozilla you'll need to set `xpinstall.signatures.required` to `false` in `about:config`. It's not clear to me if all Firefox variants even have this option, though.

## Security
The Canvas mobile app already stays logged in forever, so this surely can't be too bad.
