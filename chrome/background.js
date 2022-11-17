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

const navigate = url => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.update(tabs[0].id, {url: url})
    })
}

chrome.omnibox.setDefaultSuggestion({
    description: `Available: ${Object.keys(repos)}`
})

chrome.omnibox.onInputEntered.addListener(repo => {
    navigate(base + repos[repo])
})
