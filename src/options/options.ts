import { ConfigProvider } from "../config";

const daytonaUrlInput = document.getElementById("daytona-url-input")! as HTMLInputElement;
const daytonaRewriteKeybind = document.getElementById("daytona-replace-keybind")! as HTMLInputElement;
const daytonaPopupInput = document.getElementById("daytona-open-as-popup")! as HTMLInputElement;
const messageElement = document.getElementById("message")! as HTMLDivElement;


const init = async () => {
    const configProvider = await ConfigProvider.create();

    // Initialize UI
    const initialConfig = configProvider.getConfig();
    daytonaUrlInput.value = initialConfig.daytonaURL;
    daytonaPopupInput.checked = initialConfig.openAsPopup;
    daytonaRewriteKeybind.checked = initialConfig.rewritePeriodKeybind;

    let timeout: number | undefined = undefined;

    // Save config before close
    const save = () => {
        // Update config (propagated internally)
        configProvider.setConfig({
            daytonaURL: daytonaUrlInput.value || undefined,
            openAsPopup: daytonaPopupInput.checked,
            rewritePeriodKeybind: daytonaRewriteKeybind.checked
        });
        if (timeout) {
            window.clearTimeout(timeout);
            timeout = undefined;
        }
        messageElement.innerText = "Saved.";
        timeout = window.setTimeout(() => { messageElement.innerText = ""; timeout = undefined }, 3000);
    };
    daytonaUrlInput.addEventListener("keyup", (event: KeyboardEvent) => {
        if (event.isComposing || event.keyCode === 229) {
            return;
        }
        save() 
    });
    [daytonaPopupInput, daytonaRewriteKeybind].forEach((el) => el.addEventListener('change', save))
};

init().catch(err => console.error(err));
