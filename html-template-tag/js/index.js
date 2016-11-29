let awesomeCaseyVideos = [{
  gif: 'https://www.youtube.com/gif_embed?v=qRv7G7WpOoU&g=9SO1nimo3Xw',
  videoURL: 'https://www.youtube.com/embed/keFBEoBy0zY',
  title: 'Snowboarding in New York City',
}, {
  gif: 'https://www.youtube.com/gif?v=DQmlsaME2-4&g=L4lnHjIdGko',
  videoURL: 'https://www.youtube.com/watch?v=DQmlsaME2-4',
  title: 'Swimming in the clearest blue lagoon!',
}, {
  gif: 'https://www.youtube.com/gif?v=hQa4GouJYA4&g=BjwRvC0UB9Q',
  videoURL: 'https://www.youtube.com/watch?v=hQa4GouJYA4',
  title: 'The Vietnam Notebook',
}, {
  gif: 'https://www.youtube.com/gif?v=L13644A5z2w&g=Ayy7Tu-YRcw',
  videoURL: 'https://www.youtube.com/watch?v=L13644A5z2w',
  title: 'My Kid and Me',
}, ];


let sectionToReveal = '.videos';

if ('content' in document.createElement('template')) {
  let $vlogTemplate = document.querySelector('#vlog-template').content;
  let deepCopy = true;
  let $vlogs = document.querySelector('.vlogs');

  awesomeCaseyVideos.forEach(function(vlog) {

    $vlogEntry = $vlogTemplate.cloneNode(deepCopy); // cloneNode is much quicker than importNode when I wrote this!

    $vlogEntry.querySelector('iframe').src = vlog.gif;

    $videoLink = $vlogEntry.querySelector('a');
    $videoLink.href = vlog.videoURL;
    $videoLink.textContent = vlog.title;

    $vlogs.appendChild($vlogEntry);
  });

} else {
  sectionToReveal = '.not-supported';
}

document.querySelector(sectionToReveal).classList.remove('hidden');