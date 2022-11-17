# Usage

It's pretty easy, type the keyword `v` into the address bar, hit space, then use one of the keywords below to quickly navigate to a VISFO repo.

| Shorthand | Repo Name |
|-----------|-----------|
| `gateway` | `dmt-gateway` |  
| `insights` | `insights-api` |  
| `veeva` | `veeva-api` |  
| `author` | `author-api` |  
| `curator` | `curator` |  
| `warehouse` | `warehouse-3` |


# Installation

You'll first want to clone this repo to somewhere you don't plan to move it from.

To use this handy dandy extension you'll need to be a little bit naughty.


## Chrome

First, head to `chrome://extensions` and turn on Developer Mode in the top right corner.

Then click `Load unpacked` near the top left, navigate to where you cloned this repo, and select the `visrepo/chrome` directory. 

You should now see `visrepo` amongst all your other chrome extensions, with a small orange icon on it stating that it's an unpackaged extension. 


## Firefox

`visrepo` can be installed as a 3rd party extension on Firefox Developer Edition and Nightly builds.

1. Go to `about:config`, click to proceed if shown a warning
2. Search for `xpinstall.signatures.required` and switch this to `false`
3. In your terminal, go to the `visrepo/firefox` directory and run `zip -r -FS ../my-extension.zip * --exclude '*.git*'`
4. Go to `about:addons`
5. Click the settings/cog button in the top right, choose `Install Add-on from file`
6. Select the zip file you just created
7. Go back to `addon:config` and switch `xpinstall.signatures.required` back to `true`

Alternatively...use Chrome.


# Contributing

I've only included the repos that I use at the moment, instead of forking and adding your own, why not submit a quick PR adding your commonly used repo with a shorthand to be used with the extension, which I will painstakingly scrutinise before promptly merging and then shouting at the top of my lungs to everyone on Slack that more amazing repos have been added.


# FAQs

- Why is this thing `unpacked`/`unsigned`/`unofficial`?
    - Because it seems like a weird thing to submit to the official extension stores.

note: none of the above are _actually_ "frequently" asked. There's a good chance no ones ever asked me, I just thought you should know.
