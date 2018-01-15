SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "baseURL": "/",
    "bundles": {
      "build.js": [
        "app.js",
        "npm:lodash@4.17.4/forEach.js",
        "npm:lodash@4.17.4.json",
        "custom/isArray.js",
        "npm:lodash@4.17.4/_castFunction.js",
        "npm:lodash@4.17.4/identity.js",
        "npm:lodash@4.17.4/_baseEach.js",
        "npm:lodash@4.17.4/_createBaseEach.js",
        "npm:lodash@4.17.4/isArrayLike.js",
        "npm:lodash@4.17.4/isLength.js",
        "npm:lodash@4.17.4/isFunction.js",
        "npm:lodash@4.17.4/isObject.js",
        "npm:lodash@4.17.4/_baseGetTag.js",
        "npm:lodash@4.17.4/_objectToString.js",
        "npm:lodash@4.17.4/_getRawTag.js",
        "npm:lodash@4.17.4/_Symbol.js",
        "npm:lodash@4.17.4/_root.js",
        "npm:lodash@4.17.4/_freeGlobal.js",
        "npm:lodash@4.17.4/_baseForOwn.js",
        "npm:lodash@4.17.4/keys.js",
        "npm:lodash@4.17.4/_baseKeys.js",
        "npm:lodash@4.17.4/_nativeKeys.js",
        "npm:lodash@4.17.4/_overArg.js",
        "npm:lodash@4.17.4/_isPrototype.js",
        "npm:lodash@4.17.4/_arrayLikeKeys.js",
        "npm:lodash@4.17.4/isTypedArray.js",
        "npm:lodash@4.17.4/_nodeUtil.js",
        "npm:lodash@4.17.4/_baseUnary.js",
        "npm:lodash@4.17.4/_baseIsTypedArray.js",
        "npm:lodash@4.17.4/isObjectLike.js",
        "npm:lodash@4.17.4/_isIndex.js",
        "npm:lodash@4.17.4/isBuffer.js",
        "npm:lodash@4.17.4/stubFalse.js",
        "npm:lodash@4.17.4/isArguments.js",
        "npm:lodash@4.17.4/_baseIsArguments.js",
        "npm:lodash@4.17.4/_baseTimes.js",
        "npm:lodash@4.17.4/_baseFor.js",
        "npm:lodash@4.17.4/_createBaseFor.js",
        "npm:lodash@4.17.4/_arrayEach.js"
      ]
    }
  },
  devConfig: {
    "map": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.7",
      "process": "npm:jspm-nodelibs-process@0.2.1",
      "path": "npm:jspm-nodelibs-path@0.2.3",
      "fs": "npm:jspm-nodelibs-fs@0.2.1",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25"
    },
    "packages": {
      "npm:babel-runtime@5.8.38": {
        "map": {}
      },
      "npm:core-js@1.2.7": {
        "map": {
          "systemjs-json": "github:systemjs/plugin-json@0.1.2"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  map: {
    "babel": "npm:babel-core@5.8.38"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "lodash": "npm:lodash@4.17.4"
  },
  packages: {
    "npm:lodash@4.17.4": {
      "map": {
        "./isArray.js": "custom/isArray.js"
      }
    }
  }
});
