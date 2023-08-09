import { browser } from "webextension-polyfill-ts";
import { ConfigProvider } from "./config";

async function slashhashCurrentTab() {
    try {
        // add a dummy div element to indicate that slashhash.bundle.js was injected by a user click on the daytona icon
        browser.tabs.executeScript({ code: "document.body.innerHTML += '<div style=\"display: none;\" id=\"daytona-extension-icon-clicked\"></div>'" })
        browser.tabs.executeScript({ file: "/dist/bundles/slashhash.bundle.js" });
    } catch {
        try {
            const configProvider = await ConfigProvider.create();
            const config = configProvider.getConfig();
            window.open(config.daytonaURL);
        } catch {
            window.open("https://daytona.io");
        }
    }
}

browser.browserAction.onClicked.addListener(slashhashCurrentTab)

//browser.runtime.onInstalled.addListener((details) => {
//    if (details.reason === "install") {
//        window.open("https://www.daytona.io/extension-activation?track=true");
//    }
//});
//browser.runtime.setUninstallURL("https://www.daytona.io/extension-uninstall?track=true");
