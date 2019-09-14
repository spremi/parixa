# Parixa

Parixa (परीक्षा in _Sanskrit_) means 'test'.

This application is test and playground for creating custom themes for angular applications. The color combinations are not limited to the Material Palette.

## A quick primer on the themes

Theming an Angular Material application is describe [here](https://material.angular.io/guide/theming).

### Palettes

* Colors are defined in palettes.
* A palette defines:
  * Shades of a specific color - main & accent.
  * Contrast color for each of these shades.
* 3 distinct color palettes are required for the theme - primary, accent and warn.
* Palettes can have any name.
  * You can use palettes from [2014 Material Design color palettes](https://material.io/design/color/the-color-system.html#)
  * Or create your own at [Material Design Palette Generator](https://github.com/mbitson/mcg)

A theme object is created by functions ``mat-light-theme`` or ``mat-dark-theme``.
The output of these functions is passed to to ``angular-material-theme`` mixin,
which _styles_ the components based on the theme object.

### Theme variables

To build **good** custom themes, we need to more!

The theme object passed to ``angular-material-theme`` mixin, can be augmented
with 2 additional objects for fine grained control on the styles.

With experiments - in making this application - and bit of browsing through
the code, here is my understanding.

#### Background colors

The ``background`` map defines these colors:
* ``status-bar``
    * Fill color of status bar.
* ``app-bar``
    * Fill color of default toolbar.
* ``background``
    * Default fill color.
    * check-mark in checkbox.
* ``hover``
    * Fill color on hovering menu.
    * Selection options.
    * Stepper title.
* ``card``
    * Fill color of card.
* ``dialog``
    * Fill color of dialog.
* ``disabled-button``
    * Fill color of disabled button.
* ``raised-button``
    * Fill color of raised button.
* ``focused-button``
    * Fill color of focused button.
* ``selected-button``
    * Fill color of selected toggle button.
* ``selected-disabled-button``
    * Fill color of selected, but disabled toggle button.
* ``disabled-button-toggle``
    * Fill color of disabled toggle button.
* ``unselected-chip``
    * Fill color of a chip.
* ``disabled-list-option``
    * Fill color of disabled list option.

#### Foreground colors

The ``foreground`` map defines these colors:
* ``base``
    * On hover, focus and ripple effects.
* ``divider``
    * Dividers in lists.
    * Form fields.
    * stepper guides.
    * button toggle borders.
* ``dividers``
    * ?
* ``disabled``
    * Disabled radio buttons.
    * 'off' color on slide toggle.
* ``disabled-button``
    * Text and icons on disabled buttons, icons, button-toggles.
* ``disabled-text``
    * ?
* ``elevation``
    * Base color for elevation shadow.
* ``hint-text``
    * Doesn't appear to be used so far...
* ``secondary-text``
    * Persistent hint text in form fields.
    * List subheader.
    * Card subtitle.
    * Label for disabled controls.
    * Border color for unselected checkboxes & radio buttons.
    * Panel description.
    * Icon fill color for remaining steps in stepper.
* ``icon``
    * Color for icons e.g. in datepicker.
* ``icons``
    * ?
* ``text``
    * Default text color for all controls.
* ``slider-min``
    * Color of slider at minimum position.
* ``slider-off``
    * Color of slider from current position till end.
* ``slider-off-active``
    * Color of slider from current position till end, while slider is in focus.

## Using themes in this repository

Until, I setup workflow to individually package themes, the themes must be copied manually.

1. The themes are available in the folder **themes**
1. Here, each sub-folder is a theme.
1. Grab the folder(s) of desired theme(s) along with ``_common.scss``.
1. Under the ``app`` folder of your project, create a sub-folder ``themes``.
1. Here, create file ``index.scss`` with contents below
    ```scss
    @import '~@angular/material/theming';
    @include mat-core();
    ```
1. Include each theme as below:
    ```scss
    @import './theme-name/_theme.scss';
    ```
1. If you plan to use only one theme, add the class to 'root' and 'overlay' components.
1. Else, you may need a switcher. Code in this repo can be reused for the purpose.
  i. Will create a directive soon...

## Acknowledgements

1. [Material Design Palette Generator](https://github.com/mbitson/mcg)
1. [Angular Material Kitchen Sink](https://github.com/angular/components/tree/master/src/universal-app/kitchen-sink)

## License

BSD-3-Clause Copyright [Sanjeev Premi](https://github.com/spremi)
