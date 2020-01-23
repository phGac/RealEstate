export default function(width, height) {
    const content = document.querySelector('#content-search');
    if (content) {
        if(width < 768) { // tablet
            content.querySelector('.search-container').classList.remove('show');
            content.querySelector('.search-container').classList.add('disable');
        } else {
            content.querySelector('.search-container').classList.remove('disable');
            content.querySelector('.search-container').classList.add('show'); 
        }
    }
}
