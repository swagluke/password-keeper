// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAp3Q242SFZEH4TkKoBl0Nif5dNaT0YKoI",
    authDomain: "zhangl-password-keeper.firebaseapp.com",
    databaseURL: "https://zhangl-password-keeper.firebaseio.com",
    storageBucket: "zhangl-password-keeper.appspot.com",
    messagingSenderId: "272636241167"
  }
};
