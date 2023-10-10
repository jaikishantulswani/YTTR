function removeTitle() {
    var titleBar = document.querySelector('.ytp-title');
    if (titleBar) {
        titleBar.remove();
    }
}

// Run the initial check when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeTitle);
} else {
    removeTitle();
}

// Observe changes in the DOM
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        removeTitle();
    });
});

var observerConfig = { childList: true, subtree: true };

observer.observe(document.body, observerConfig);
