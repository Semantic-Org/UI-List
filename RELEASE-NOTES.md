### Version 2.4.0 - Sep 17, 2018

- **List** - Fixed issue where list `content` would not take up 100% width when used alongside `img` or `icon`

### Version 2.3.0 - Feb 20, 2018

- **Icons** - Icon documentation now lists publicly all icon aliases

### Version 2.2.14 - Jan 29, 2018

- **Menu / Popup** - Fixed issue where `inverted menu` rules would cause popup inside a menu to have incorrect link styling in `link list` **Thanks @banandrew** [#5585](https://github.com/Semantic-Org/Semantic-UI/issues/5585) [#5603](https://github.com/Semantic-Org/Semantic-UI/issues/5603)

### Version 2.2.12 - Aug 07, 2017

- **Dropdown** - Dropdown can now have `values` specified in javascript when initializing.This should simplify cases where dropdown contents are contingent on other fields, for example listing sub categories. You can see some [examples here](https://jsfiddle.net/Lb7c5dkz/) and in the [usage section of dropdown docs](https://www.semantic-ui.com/modules/dropdown.html#initializing-with-javascript-only)
- **Header/List** - Fixes issue where icons appear slightly offset with text due to line-height offset fixes no longer being necessary in modern browsers.

### Version 2.2.11 - July 11, 2017

- **Dropdown** - Fixed issue where `search selection dropdown` would reset list to top after selection when re-opening dropdown [#4506](https://github.com/Semantic-Org/Semantic-UI/issues/4506)
- **Form Validation** - Added undocumented `add prompt` to list of behaviors

### Version 2.2.0 - June 26, 2016

- **List** - `relaxed` and `very relaxed` lists included unnecessary padding on the first and last items [#3710](https://github.com/Semantic-Org/Semantic-UI/issues/3710)
- **List** - Bullets would be affected by font weight, or whether the list item was a link [#3715](https://github.com/Semantic-Org/Semantic-UI/issues/3715) [#3721](https://github.com/Semantic-Org/Semantic-UI/issues/3721)
- **List** - Divided lists had unnecessary padding on first and last items, in both horizontal and vertical layouts [#3710](https://github.com/Semantic-Org/Semantic-UI/issues/3710)

### Version 2.1.7 - Dec 19, 2015
[Closed Issues List](https://github.com/Semantic-Org/Semantic-UI/issues?q=is%3Aissue+milestone%3A2.1.7+is%3Aclosed)

### Version 2.1.5 - Nov 1, 2015

- **Form Validation** - Fixes error on `blur` or `change` when using a blank validation object [#3131](https://github.com/Semantic-Org/Semantic-UI/issues/3131) **Thanks @listepo**

### Version 2.1.4 - Sep 13, 2015

- **Message** - `ui list` used inside `ui message` now aligns properly in all conditions [#2958](https://github.com/Semantic-Org/Semantic-UI/issues/2958)

#### Bugs

- **List** - Lists can now be `right floated` or `left floated`

### Version 2.0.6 - July 22, 2015

- **List**- Fixed issue where using an image variation like `ui image label` as a direct child of an `item` would remove right padding [#2691](https://github.com/Semantic-Org/Semantic-UI/issues/2691)

### Version 2.0.0 - June 30, 2015

- **Dropdown** - Keyboard shortcuts have been added for selecting dropdown choices, for example "N" will scroll to "New York" in a state selection list, similar to native `<select>` behavior.
- **List** - Any content inside a `ui list` can now be vertically aligned
- **Dropdown** - Fixed issue with `search selection` not changing text when reselecting same value from list
- **List** - `horizontal list` are now aligned `middle` by default, while vertical lists are aligned `top`.
- **List** - Fixes numbers not appearing when using `inverted ordered list` **Thanks @pcj**
- **List** - `a` elements inside a `ui list` will no longer apply styles on `ui` elements like `button` **Thanks @ahtinurme**
- **List** - Fixed `divided bulleted list` child lists getting wrong indent
- **List** - Bullets and numbers are no longer selectable in `bulleted list` and `ordered list`
- **List** - Fixed `inverted bulleted list` bullet color
- **List** - Fix first element touches border on `ui horizontal celled list`
- **List** - Added many new variables for link stylings inside list, added separate variables and defaults for child-list spacing

### Version 1.8.0 - January 23, 2015

- **List** - `relaxed list` and `very relaxed list` no longer add padding to child menu items

### Version 1.7.3 - January 16, 2015

- **Installer** - Fix issue with component list in `semantic.json` not correctly overriding default components

### Version 1.7.0 - January 14, 2015

- **List** - Fix some styling issues with `ui list` inside `ui menu`

### Version 1.6.4 - January 12, 2015

- **Build** - Fix CSS property typo in list icon, and label causing issues with some custom build tools

### Version 1.6.3 - January 12, 2015

- **Build** - Fix CSS property typo in list icon, and label causing issues with some custom build tools

### Version 1.5.0 - December 30, 2014

- **List** - Fixed bug when using ``ui icon button`` or ``ui icon header`` causing element to receive icon formatting

### Version 1.3.0 - December 17, 2014

- Updates to reflect all new changes to UI listed above

### Version 1.0.0 - November 24, 2014

- **List** - List item selectors are now more strict, list items must be immediate children of ``ui list`` or ``ui list list``
- **Item** - 0.x.x's UI card has been adjusted heavily. Vertically listed content should use ``ui item`` while floated grouped content should continue to use ``ui card``. Some 'card' view content has been slightly adjusted. Please refer to documentation
- **Dropdown** - New dropdown type, searchable selection for large lists of choices
- **Item** - Items now have a horizontal list view for content lists
- **List** - Child lists can now be formatted to sit inside text content
- **List** - List images can now specify vertical alignment
- **List** - List spacing defaults have been adjusted to be more consistent

### Version 0.19.0 - July 3, 2014

- **Accordion** - Fixes incompatibilities with ``ui list`` when used inside a ``ui accordion``, fixes issues with menu accordion display in some circumstances

### Version 0.14.0 - Mar 03, 2014

- **List** - Bulleted and horizontal lists now appear correctly in IE10-11

### Version 0.9.0 - Nov 5, 2013

- **List** - Adds animated list variation
- **List** - Updated some list styles for greater flexibility

### Version 0.7.0 - Oct 22, 2013

- **List** - Adds documentation for module format
- **List** - Adds onTabInit for local tabs on first load
- **List** - Popups can now have a different target than itself
- **List** - Celled tables now have celled table headers
- **List** - Horizontal padding on icon list slightly increased, fixes to icon position
- **List** - Increased padding on attached labels
- **List** - Leading on bulleted and ordered list slightly increased

### Version 0.3.3 - Oct 2, 2013

- Headers and lists with icons now do not break with multiline content

### Version 0.3.2 - Oct 2, 2013

- Right floated list content now receives left margin
- List items display issues with icons + content
- Lists items now auto clear floats

### Version 0.1.0 - Sep 25, 2013

- Added relaxed and very relaxed list type with increased padding
- Updated list docs