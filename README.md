# rn-typescript-starter

A starter react-native project that comes pre-integrated with Typescript, Tslint and prettier. Npm scripts for manual linting and code beautifying are also included.

## Usage

1. Clone the repository.
2. Run `npm install/Yarn`
3. For iOS, run `Pod install`
4. Change project-name and target names as per your requirement.

## Setting up TSLint in your own project

1. Run `npx react-native init <Project-Name>`
2. Migrate to Typescript by executing the steps below

### Migrating to Typescript

1. run `npm i --save typescript react-native-typescript-transformer`
2. add following lines to `rn-cli.config.js`

```javascript
module.exports = {
    getTransformModulePath() {
        return require.resolve('react-native-typescript-transformer')
    },
    getSourceExts() {
        return ['ts', 'tsx']
    },
}
```

3. run `npm i --save @types/react @types/react-native`
4. run `./node_modules/.bin/tsc --init` to generate a tsconfig.json file.
5. modify `tsconfig.json` as follows:
    - uncomment `noImplicitAny: true`
    - uncomment `alwaysStrict: true`
    - uncomment `outDir: “./“`
    - uncomment `sourceMap: true`
    - set `jsx: ‘react’`
6. run `npm i --save tslint tslint-config-prettier tslint-config-standard tslint-react`
7. run `npx tslint --init`. This will generate a `tslint.json` file.
8. Paste following snippet inside `tslint.json`:
    ```javascript
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended",
        "tslint-config-standard",
        "tslint-react",
        "tslint-config-prettier"
    ],
    "jsRules": {},
    "rules": {
        "ordered-imports" : false,
        "object-literal-sort-keys" : false,
        "member-ordering" : false,
        "jsx-no-lambda" : false,
        "jsx-boolean-value" : false
    },
    "rulesDirectory": []
    ```
9. install TSLint extension for VSCode if you need realtime auto linting. (optional)
10. add a script in `package.json` to manually run tslint for all ts and tsx source files. (optional)

```javascript
"lint": "tslint './**/*.{tsx, ts}'"
```

## Setting up Prettier in your own project

1. run `npm i —save prettier`.
2. Press `cmd+,` to navigate to workspace settings and set `Editor: format on Save` to be true.
3. Disable javascript formatter by checking `Javascript: format: Enable` off in workspace settings.
4. Install `Prettier` vscode extension.
5. `Touch .prettierrc`
6. Paste following json in `.prettierrc`:
   {"trailingComma": "es5",
   "tabWidth": 4,
   "semi": false,
   "singleQuote": true}
7. add `"prettier": "prettier --write '**/*.{ts,tsx,js}'"` under scripts.
8. run `npm run prettier` to manually format source files.
