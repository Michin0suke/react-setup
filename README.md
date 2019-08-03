# Overview
This is a Tool for setting up a react project.

React-Setup contains React, TypeScript and Webpack etc...

As I think, React-Setup is more useful than React-Create-App!

# Usage
1. Move Any Directory and Clone this project with run following code.
  ```bash
  git clone https://github.com/Michin0suke/react-setup.git
  ```

2. Run following code. Change to the cloned directory in place of `/path/to/ClonedDirectory`.
   
  ```bash
  cat << \EOF >> ~/.bash_profile

  templatesDir=/path/to/ClonedDirectory
  function react-setup(){ \
    mkdir $1 && \
    cp -r ${templatesDir}/react/ ./$1/ && \
    cd $1 && \
    npm i && \
    npm start \
  ;}

  EOF
  source ~/.bash_profile
  ```

3. Go to the directory where you want to create project and run following code. Change to your project name in place of `SomeProjects`.
   
``` bash
react-setup SomeProjects
```

4. If it works properly, Chrome will open automatically and display as "Congratulations"

You can launch webpack-dev-server with run `npm start` anytime.

## LISENCE
Copyright (c) 2019 Michinosuke
Released under the MIT license
https://opensource.org/licenses/mit-license.php