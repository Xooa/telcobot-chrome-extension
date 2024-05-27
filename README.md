## Chrome Telcobot ChatBot


### Method : Load in Developer Mode Locally

- Go to Chrome browser extension management, you can directly access [chrome://extensions/](chrome://extensions/)
- Enable "Developer mode" and click "Load unpacked extension"

- Then open the root directory of the extension source file
    - third-party
        - chrome plug-in
            - content.js          Floating button JS script
            - favicon.png         Extension icon
            - manifest.json       Extension description file
            - options.css         Extension configuration page style file
            - options.html        Extension configuration static HTML page
            - options.js          Extension configuration JS script

### After importing the extension, subsequent configurations are the same
- Create telcobot application configuration, click on "Embed" in the application overview, switch to the Chrome browser extension installation view, click the copy button to get the ChatBot URL, as shown in the figure:

- Click "Save" and confirm the prompt to successfully configure
- Restart the browser to ensure that all pages are refreshed successfully
- telcobot chatbot floating bar can be loaded normally on any page in Chrome, if you need to change the chatbot, just change the ChatBot URL

