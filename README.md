# p5
https://p5js.org/

## Running
Start a Python SimpleHTTPServer at the top level directory
```
py -m http.server
```
Visit `localhost:8000/index.html`

## Rendering
- run the script with CCapture code enabled
- hit `save` after at least 3 seconds are recorded to download all the frames
- run `create_canvas.sh`

### `create_canvas.sh`
Usage: `./create_canvas.sh [canvas_name] [frames_dir] [output_dir]`

The script does a few things:
1. turn frames into an mp4
2. cut the clip to the first 3s
3. concat a reversed version of that clip to the end (6s total)
4. prepares one mp4 for canvas upload and one for twitter upload

## Spotify Canvas Requirements
- 3-8s
- 9:16 aspect ratio
- MP4 format

## TODO
- [ ] dynamic way to turn on the capture, so it's not running in the background
- [ ] use node.js http server
