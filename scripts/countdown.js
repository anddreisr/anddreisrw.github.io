const endDate = new Date('Oct 31, 2020 18:00:00').getTime() / 1000;

const t = setInterval(() => {
    const now = new Date().getTime() / 1000;
    const left = endDate - now;

    const days = Math.floor(left / (60 * 60 * 24));
    const hours = Math.floor((left % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((left % (60 * 60)) / 60);
    const seconds = Math.floor(left % 60);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (left < 0) {
        clearInterval(t);
        document.getElementById('countdown').innerHTML = '<a href="https://twitch.tv/cellbit">twitch.tv/cellbit</a>';
    }
}, 1000);