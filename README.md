# getting started

 - install node packages from [package.json](./package.json)
 - try out example script using `node example.js`


 # tasks 

> NB: 
> - do not place multiple tasks into same commit.
> - tasks can be made in any order

- **create branch** this repo and send your changes back as pull request (write your student number in tahvel into PR title)

- add [eslint](https://eslint.org/) to project
- configure eslint using [airbnb rulset](https://github.com/airbnb/javascript)
- enforce and use rule based of your student number in tahvel, rules need to be setup globally and can disabled using line or file based override settings.
    - first number:
        - do not use semicolon in the end of lines
    - 2nd number:
        - `0`: use singel quotes 
        - `2`: disable camelcase usage
        - `6`: set max line lenght to 98
    - Other than that, you are free to modify lint settings as you see fit.
- use CI to run eslint- **NOT ALLOWED TO USE GITHUB ACTIONS**
- add [jest](https://jestjs.io/) to project and write at-least one test for [`sum.js`](./sum.js).
    - use your student number in tahvel as input, for example when number would be 81 then `8+1=9`
    - add test that checks that exception to thrown when input is not number (example: string)
- use CI to run test ([jest](https://jestjs.io/)) - **NOT ALLOWED TO USE GITHUB ACTIONS**
- make sure [`sum.js`](./sum.js) code coverage is 100%, if need add extra tests
- add CODEOWNERS file:
    - set [`@eritikass`](https://github.com/eritikass) as codeowner for all the code
    - set yourself as codeowner for any new code you added (test file) and **ignore eritikass from it**
