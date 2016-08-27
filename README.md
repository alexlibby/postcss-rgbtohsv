<b> Note: this plugin is still in active development!</b>

# RGB to HSV Plugin for PostCSS
A PostCSS plugin to convert RGB colors to their HSV equivalent colors

If you want to alter the makeup of an existing color - say for example, change the level of saturation - then a great route is to use the HSV (or hue, saturation, value) version of your color. It should be a cinch to change the appropriate value - trouble is, what if you only have the RGB equivalent of your color? Not so easy, right?

Wrong - with this plugin, we can change the RGB value to its HSV equivalent; we're then free to do as we will with the resulting color!

#Installation

Enter this command into a Node.js command prompt:

```
Code to follow
```

#Usage

The plugin can be referenced in Gulp using this example code:

```
Code to follow
```

#Input

Add a rule to your code that contains the Color CC url, such as this example:

```
#test {
  color: rgb(154, 57, 31);
}
```

#Output

```
#test {
  color: hsv(12.7, 79.9, 60.4);
}
```

#To do:

Add an option to keep or hide the original RGB value


If you would like to see a feature added, please let me know via the Issues section; pull requests always welcome!
