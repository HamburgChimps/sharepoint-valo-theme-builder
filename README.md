# Sharepoint Valo Theme Builder

Extracts the `navigationCss` and `officeTheme.themeJson` properties into their own files for easier editing. After editing the files to your liking, you can use this tool to then inject the contents of those files into the valo theme json file to be uploaded to Lightsaber.

## Usage

This module places a command called `vt` in `node_modules/bin/` called `vt`, short for valo theme.

`vt extract [path/to/theme.json]`j: Extract the `navigationCss`and `officeTheme.themeJson` properties into their own files.

`vt build [path/to/theme.json]`: Inject the contents of the extracted files back into the json theme file.
