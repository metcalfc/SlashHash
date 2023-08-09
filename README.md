# Daytona Browser extension

This is the browser extension for Daytona. It supports Chrome, Firefox and Edge, and adds a **Daytona** button to the configured GitLab, GitHub and Bitbucket installations (defaults to `gitlab.com`, `github.com`, `bitbucket.org`, and `gitlab.cn`) which immediately creates a Daytona workspace for the current Git context.

## Contributing

Contributions to this project are welcome!

### Development

#### Build

```
yarn install
yarn build
yarn package
```

### Testing

You can test the extension without publishing to the store. Before uploading the bundle to the browser, make sure to [build](#build) the code, then follow these steps:

For Chrome:

1. Open Chrome
1. Click Settings -> Extensions -> Load unpacked
1. Select this folder

For Firefox

1. Open Firefox
1. Go to `about:debugging#/runtime/this-firefox`
1. Click Load Temporary Add-on -> Select the `daytona.xpi` file

For Safari (Experimental 🧪)

1. Open `Daytona/Daytona.xcodeproj`
1. Run the project with `cmd` + `r`. ⚠️ _Safari must have [**Allow Unsigned Extensions**](https://developer.apple.com/documentation/safariservices/safari_app_extensions/building_a_safari_app_extension) enabled._

## Release

We will publish the extension for **Chrome** and **Firefox**.

To release a new version, follow these steps:

1. Bump up the version value inside `manifest.json`
1. Push your changes to `master`
1. Create a tag `vX.Y.Z`
1. Compose a list of changes using the list of commits that were pushed since last version
1. [Create a new release](https://github.com/daytona-io/SlashHash/releases/new), listing changes:

    ```yaml
    ### Changes

    - Change/Fix A
    - Change/Fix B
    - Change/Fix C

    ### Credits

    Thanks to @{EXTERNAL_CONTRIBUTOR_USERNAME} for helping! 🤘
    ```

### Safari

#### ⚠️ A machine running macOS and [Xcode 12+](https://developer.apple.com/xcode/) installed is required!

First, run the following to install dependencies and build the web extension:

```
yarn install && yarn build && yarn package
```

Then run the `build:safari` command to build the Safari extension around the web extension:

```
yarn build:safari
```

![Confirm Safari](./docs/safari-confirm.png "Confirm Safari")

Hit `enter` when presented with this screen.

`Xcode` will open the `Daytona.xcodeproj` automatically if it's installed.
