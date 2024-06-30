# Add captions to videos

This app allows you to add captions to videos at specific timestamp. You can then view the video and note that the caption will be displayed right below the video player.

## Libraries used:
- React
- Tailwind
- Typescript
- ReactPlayer

## Functionalities:

- Add url
- Add multiple captions
- Delete captions
- Play/Pause video
- Validating input url using Reg-ex

### Why I used React Player:

Ideally, I wanted to create my own player using React, useRef instead of using a npm module as that allows more flexibilty in terms of displaying the caption as an overlay on the video
but that would have required  more time and a lot of basic utilities were readily available out-of-the-box in ReactPlayer. 
Given more time, I'd love to explore how to build a custom video player that supports videos hosted on different platforms. Currently, only the video hosted on platforms supported by ReactPlayer will be displayed like Youtube, Facebook,Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, DailyMotion and Kaltura.

### Things I'd like to add:

- I also wanted to add useContext and useReducer for handling the adding and removing of captions for better code readability and abstraction. I faced issues with implementing useReducer Hook with Typescript which is why you don't see it implemented here. I would like to tackle it.



### Screenshots

![image](https://github.com/Med1020/spyne-video-caption/assets/94384027/edb24b4f-0f39-4840-bb14-859f459532f7)
