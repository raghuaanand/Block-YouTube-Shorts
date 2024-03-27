const addNoShorts = () => {
    let noShortsHeading = document.createElement("h1");
    noShortsHeading.classList.add("noShorts")
    noShortsHeading.textContent = "Focus on your work instead.";
    document.body.appendChild(noShortsHeading);
}

addNoShorts();