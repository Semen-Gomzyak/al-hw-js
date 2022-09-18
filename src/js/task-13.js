import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(saveTimeInlocalStorage, 1000));

   

function saveTimeInlocalStorage({seconds}) {
    localStorage.setItem("videoplayer-current-time", seconds);
    }

    if (localStorage.getItem("videoplayer-current-time")) {
        player.setCurrentTime(Number(localStorage.getItem("videoplayer-current-time")));
    console.log(localStorage.getItem('videoplayer-current-time'))
    
}
  