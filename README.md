# clear-city

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




### DOCKER
1 Спулить
2 в терминале npm run build
3 docker build -t dockervue .
4 docker run -p 8080:80 -it --name dockervue dockervue
