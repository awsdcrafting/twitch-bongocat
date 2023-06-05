
/**
 * Description placeholder
 * @date 6/3/2023 - 1:38:30 PM
 *
 * @param {HTMLElement} root
 */
function setupBaseGui(root) {

    let container = document.createElement("div")
    container.classList.add("guiContainer")

    root.appendChild(container)
    
    //settings
    let guiol = document.createElement("div")
    guiol.id = "gui-settings"
    guiol.classList.add("guiSettings", "rectangle")
    container.appendChild(guiol)
    
    //keys
    let guior = document.createElement("div")
    guior.id = "gui-keys"
    guior.classList.add("guiKeys", "rectangle")
    container.appendChild(guior)

    
    let guiul = document.createElement("div")
    guiul.classList.add("guiCat", "rectangle")
    guiul.id = "gui-cat"
    container.appendChild(guiul)

    let guiur = document.createElement("div")
    guiur.classList.add("guiSong", "rectangle")
    guiur.id = "gui-song"
    container.appendChild(guiur)
}



export {setupBaseGui};