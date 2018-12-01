
import React from "react"

import classNames from "classnames"

// nodemon -w src --exec npm run repack


export const FlexPaneBar = (props) => {
    let buttonProps = props.buttonProps
    let children = React.Children.map(props.children,(child) => {
        if (child.type.name == 'FlexPaneButtons') {
            let buttons = React.cloneElement(child,{buttonProps})
            return buttons
        }
        return child
    })
    return <div className="flexpane-bar">{children}</div>
}

export const FlexPaneTitle = (props) => {
    return <span>FlexPaneTitle test</span>
}

/* 
<li key="3" className="flexpane-title">{buttonProps.title}</li>
*/

export const FlexPaneButtons = (props) => {

    
    let buttonProps = props.buttonProps

    var mode = buttonProps.index !== undefined ? buttonProps.modes[buttonProps.index] : "normal"
    var classNames1 = classNames("flexpane-resize","flexpane-maximize",{"flexpane-button-active":mode !== "maximized"})
    var classNames2 = classNames("flexpane-resize","flexpane-normalize",{"flexpane-button-active":mode !== "normal"})
    var classNames3 = classNames("flexpane-resize","flexpane-hide",{"flexpane-button-active":mode !== "hidden"})

    //var buttonsBefore = (this.props.buttonsBefore || []).map( (button,i) => <li key={'b' + i}>{button}</li>)
    //var buttonsAfter = (this.props.buttonsAfter || []).map( (button,i) => <li key={'a' + i}>{button}</li>)

    return  <ul className="flexpane-buttons"> 
                <li key="0"><button className={classNames1} onClick={() => {buttonProps.onButtonClick(buttonProps.index,"maximized")}}><svg enableBackground="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z" fill="#515151"/></svg></button></li>
                <li key="1"><button className={classNames2} onClick={() => {buttonProps.onButtonClick(buttonProps.index,"normal")}}><svg enableBackground="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z" fill="#515151"/></svg></button></li>
                <li key="2"><button className={classNames3} onClick={() => {buttonProps.onButtonClick(buttonProps.index,"hidden")}}><svg enableBackground="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M14.77,23.795L5.185,14.21c-0.879-0.879-0.879-2.317,0-3.195l0.8-0.801c0.877-0.878,2.316-0.878,3.194,0  l7.315,7.315l7.316-7.315c0.878-0.878,2.317-0.878,3.194,0l0.8,0.801c0.879,0.878,0.879,2.316,0,3.195l-9.587,9.585  c-0.471,0.472-1.104,0.682-1.723,0.647C15.875,24.477,15.243,24.267,14.77,23.795z" fill="#515151"/></svg></button></li>
            </ul>
}

export class FlexPane extends React.Component {

    constructor(props) {
        super(props)
        this.refPane = React.createRef()
        //console.log('FlexPane.constructor',props)
    }

    render() {

        let buttonProps = this.props.buttonProps

        console.log('FlexPane.render buttonProps',buttonProps)
    
        var mode = buttonProps.modes[buttonProps.index]

        var classNames_ = {
            "flexpane-pane-normal" : mode === "normal",
            "flexpane-pane-maximum": mode === "maximized",
            "flexpane-pane-hidden": mode === "hidden"
        }

        if (this.props.className != null) {
            classNames_[this.props.className] = true
        }
        
        var refPane = this.props.refPane || this.refPane

        //console.log('this.props',this.props)

        var children = React.Children.toArray(this.props.children)

        let bar

        if (children[0].type.name === 'FlexPaneBar') {
            bar = React.cloneElement(children[0], {buttonProps})
            children = children.slice(1)
        } else {
            bar = null
        }

        return <React.Fragment>
            {bar}
            <div key={this.props.index} className={classNames("flexpane-pane",classNames_)} ref={refPane} >{children}</div>
            </React.Fragment>
    }
}

export class FlexPaneContainer extends React.Component {

    constructor(props) {
        super(props)
        
        var modes = React.Children.map(this.props.children, (child,index) => {
            return child.props.mode || "normal";
        })

        this.state = {
            modes: modes
        }

        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleButtonClick(index, mode) {
        var modes = this.state.modes.slice()
        if (mode === "maximized") {
            modes = modes.map( mode => mode === "maximized" ? "normal" : mode )
        }
        modes[index] = mode
        this.setState({modes:modes})
    }

    render() {
        var children = React.Children.map(this.props.children, (child,index) => {
            var buttonProps = {key:index, modes:this.state.modes, index:index, onButtonClick: this.handleButtonClick}
            return React.cloneElement(child,{buttonProps});
        })
        return (<div className="flexpane-container">{children}</div>)
    }
}

