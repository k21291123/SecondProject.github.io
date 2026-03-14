document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let query = document.getElementById('queryInput').value.trim();
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (urlPattern.test(query)) {
        if (!query.startsWith('http')) {
            query = 'https://' + query;
        }
        window.open(query, '_blank');
    } else {
        window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
    }
});