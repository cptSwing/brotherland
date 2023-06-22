/** use me in body.onload */ function setParentElementHeight(childElementClass) {
    const childElementsCollection = document.getElementsByClassName(childElementClass);
    const childElementsArr = [
        ...childElementsCollection
    ];
    childElementsArr.forEach((childElem)=>{
        const parentElement = childElem.parentElement;
        // @ts-ignore
        const childElementHeight = childElem.offsetHeight;
        parentElement && parentElement.setAttribute("style", `height: ${childElementHeight}px`);
    });
}
function imageHref(imageClass) {
    const imageElementsCollection = document.getElementsByClassName(imageClass);
    const imageElementsArr = [
        ...imageElementsCollection
    ];
    imageElementsArr.forEach((image)=>{
        image.addEventListener("click", (ev)=>{
            // @ts-ignore
            ev.target && window.open(ev.target.src, "_blank");
        });
    });
}

//# sourceMappingURL=interview1.09c24910.js.map
