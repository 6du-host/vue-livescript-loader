# vue-livescript-loader

## Usage

``` javascript
{
    module: {
        loaders: [
            { test: /\.vue$/, loader: "vue-livescript-loader" },
            { test: /\.ls$/, loader: "vue-livescript-loader" }
        ]
    }
}
```

# Why another Livescript loader?
The original [livescript-loader](https://github.com/appedemic/livescript-loader) doesn't support .vue files
This is an improved/forked/inspired version of [coffee-loader](https://github.com/webpack/coffee-loader)

## License
MIT (http://www.opensource.org/licenses/mit-license.php)
