const button = document.querySelector("button")
const body = document.querySelector("body")

button.addEventListener("click", () => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;


    body.style[`backgroundColor`] = `rgb(${r}, ${g}, ${b})`
})

// Installation prompt
const prompt = document.querySelector(`article`)


let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    prompt.style['display'] = 'block';
});

window.addEventListener('appinstalled', () => {
    prompt.style['display'] = 'none';
    deferredPrompt = null;
});

prompt.addEventListener('click', function (event) {
    if (event.target.dataset.id == 'install-yes' && deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(result => {
            console.log("result of user prompt", result);
            prompt.style['display'] = 'none';
            deferredPrompt = null;
        });
    } else {
        prompt.style['display'] = 'none';
    }
});
