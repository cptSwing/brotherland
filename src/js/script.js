import SimpleLightbox from "simplelightbox";

exhibitGalleryOnLoad();

/** use me in body.onload */
function setParentElementHeight( childElementClass ) {
    const childElementsCollection = document.getElementsByClassName( childElementClass );

    const childElementsArr = [ ...childElementsCollection ];

    childElementsArr.forEach( ( childElem ) => {
        const parentElement = childElem.parentElement;

        // @ts-ignore
        const childElementHeight = childElem.offsetHeight;

        parentElement && parentElement.setAttribute( "style", `height: ${ childElementHeight }px` );
    } );
}

function imageHref( imageClass ) {
    const imageElementsCollection = document.getElementsByClassName( imageClass );

    const imageElementsArr = [ ...imageElementsCollection ];

    imageElementsArr.forEach( ( image ) => {
        image.addEventListener( "click", ( ev ) => {
            // @ts-ignore
            ev.target && window.open( ev.target.src, "_blank" );
        } );
    } );
}

function exhibitGalleryOnLoad() {
    let gallery = new this.SimpleLightbox( ".gallery a", { uniqueImages: false } );

    const data = gallery.getLighboxData()
    console.log(data);

    gallery.on( "click", () => {
        console.log( "click" );
        gallery.open()
    } );

    gallery.on( 'show.simplelightbox', function () {
        console.log( 'show.simplelightbox' );
    } );


    gallery.on( 'error.simplelightbox', function ( e ) {
        console.log( e ); // some usefull information
    } );
}
