## Yarn Resolve And Fetch

Node API for Yarn v1 resolution and fetching code.

Yarn v1 comes as a bundle of many features. While most of these features are desirable, some others may not be a good fit for your needs.
This package extracts the resolution and fetching logic of yarn. This enables you to use the great work of the Yarn team without compromizing on your specific needs.

In addition some optimizations have been made leading it to be twice and fast and twice as resilient in large repositories.

This package resolves your dependencies, update the yarn.lock file if needed and download all the dependencies to cache. Leaving the rest of the instalation process up to you.

## Using Yraf

```js
const { resolveAndFetch } = require("yraf");

resolveAndFetch()
  .then( ({ resolutionMap, locationMap }) => {
    // Do your own installation

    // `resolutionMap` gives you the pined version for a given dependency.
    // `locationMap` gives you the location on disk for a given dependency.

  });

```


## Prior art

Yraf wouldn't exist if it wasn't for excellent prior art. Yarn has been inspired by the following projects:

 - [yarn](https://github.com/yarnpkg/yarn)
 - [npm](https://github.com/npm/cli)
