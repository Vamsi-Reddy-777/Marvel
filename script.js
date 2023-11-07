const API_KEY = 'YOUR_API_KEY_HERE';
const CHANNEL_ID = 'UCvC4D8onUfXzvjTOM-dBfEA';
const VIDEO_CONTAINER = document.getElementById('video-container');

fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`)
  .then(response => response.json())
  .then(data => {
    data.items.forEach(item => {
      const videoId = item.id.videoId;
      const title = item.snippet.title;
      const thumbnail = item.snippet.thumbnails.medium.url;
      const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

      const videoElement = document.createElement('div');
      videoElement.innerHTML = `
        <a href="${videoUrl}" target="_blank">
          <img src="${thumbnail}">
          <h2>${title}</h2>
        </a>
      `;
      VIDEO_CONTAINER.appendChild(videoElement);
    });
  })
  .catch(error => console.error(error));
