let timeSince = document.querySelector('.lastvisit');
let lVisit = Number(window.localStorage.getItem('lVisit'));
let nVisit = Number(window.localStorage.getItem('tVisits'));

const visitNow = Date.now() - lVisit;

const tsDays = visitNow / (1000*60*60*24);

if (nVisit !== 0) {
    timeSince.textContent = `You've visited us ${nVisit} times. Last time was ${Math.round(tsDays)} days ago.`;

}else {
    timeSince.textContent = `Welcome new visitor! Enjoy your first visit to Gravity Falls`;
}

nVisit++;

localStorage.setItem('lVisit', Date.now());
localStorage.setItem('tVisits', nVisit);