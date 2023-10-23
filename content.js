function removeElements() {
    var titleBar = document.querySelector('.ytp-title');
    if (titleBar) {
        titleBar.remove();
    }
    
    var gradientTop = document.querySelector('.ytp-gradient-top[data-layer="1"]');
    if (gradientTop) {
        gradientTop.remove();
    }
}

// Run the initial check when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeElements);
} else {
    removeElements();
}

// Observe changes in the DOM
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        removeElements();
    });
});

var observerConfig = { childList: true, subtree: true };

observer.observe(document.body, observerConfig);
