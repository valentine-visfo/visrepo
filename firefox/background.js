const base = "https://www.github.com/visformatics/"

// key = shorthand that you want to use in the browser, value = repo name in gh
const repos = {
    "gateway": "dmt-gateway",
    "insights": "insights-api",
    "curator": "curator",
    "warehouse": "warehouse-3",
    "author": "author-api",
    "veeva": "veeva-api"
}

browser.omnibox.setDefaultSuggestion({
    description: `Available: ${Object.keys(repos)}`
})

browser.omnibox.onInputEntered.addListener((repo, disposition) => {
    const url = base + repos[repo]
    switch (disposition) {
        case "currentTab":
            browser.tabs.update({url: url})
    }
})
