# About
Basic layout manager based on flexbox

# Install 

`npm install react-flexpane --save`

# Usage

## Basic

```javascript

import {FlexPane, FlexPaneContainer,FlexPaneBar,FlexPaneButtons, FlexPaneTitle} from 'react-flexpane'
import 'react-flexpane/dist/styles.css'

var App = () => <FlexPaneContainer>
    <FlexPane title="first pane">
        ...
    </FlexPane>
    <FlexPane title="second pane">
        ...
    </FlexPane>
    <FlexPane title="third pane">
        ...
    </FlexPane>
    </FlexPaneContainer>
```

## Adding elements to pane bar

Each pane contains `<FlexPaneBar/>` as a first child, if it is not specified, default one is added (which contains `<FlexPaneButtons/>` and `<FlexPaneTitle/>`).
```javascript
<FlexPane> 
    content 
</FlexPane>
```
is the same as 
```javascript
<FlexPane>
    <FlexPaneBar>
        <FlexPaneButtons/>
        <FlexPaneTitle/>
    </FlexPaneBar> 
    content 
</FlexPane>
```
If you need custom elements in bar or you want to hide buttons or title for some reason, use latter form.

# Demo
https://codepen.io/mugiseyebrows/pen/MzXxXo