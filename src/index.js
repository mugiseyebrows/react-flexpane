
import React from "react"

import classNames from "classnames"

export let FlexPaneBar = (props) => {

    console.log('FlexPaneBar.props',props)

    var children = React.Children.map(props.children,(child)=>{
        if (child.type.name == 'FlexPaneButtons') {

            ////console.log('FlexPaneBar React.Children.map', props)

            return React.cloneElement(child,props)
        }
        return child
    })

    //console.log('children',children)

    return <React.Fragment>{children}</React.Fragment>
}

export let FlexPaneTitle = (props) => {
    return <div>FlexPaneTitle test</div>
}

export let FlexPaneButtons = (props) => {
    
        //console.log('FlexPaneButtons.props',props)

        var mode = props.modes[props.index]
        var classNames1 = classNames("flexpane-resize","flexpane-maximize",{"flexpane-button-active":mode !== "maximized"})
        var classNames2 = classNames("flexpane-resize","flexpane-normalize",{"flexpane-button-active":mode !== "normal"})
        var classNames3 = classNames("flexpane-resize","flexpane-hide",{"flexpane-button-active":mode !== "hidden"})

        //var buttonsBefore = (this.props.buttonsBefore || []).map( (button,i) => <li key={'b' + i}>{button}</li>)
        //var buttonsAfter = (this.props.buttonsAfter || []).map( (button,i) => <li key={'a' + i}>{button}</li>)

        return  <ul className="flexpane-buttons"> 
                    <li key="0"><button className={classNames1} onClick={() => {props.onButtonClick(props.index,"maximized")}}><svg enableBackground="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z" fill="#515151"/></svg></button></li>
                    <li key="1"><button className={classNames2} onClick={() => {props.onButtonClick(props.index,"normal")}}><svg enableBackground="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z" fill="#515151"/></svg></button></li>
                    <li key="2"><button className={classNames3} onClick={() => {props.onButtonClick(props.index,"hidden")}}><svg enableBackground="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M14.77,23.795L5.185,14.21c-0.879-0.879-0.879-2.317,0-3.195l0.8-0.801c0.877-0.878,2.316-0.878,3.194,0  l7.315,7.315l7.316-7.315c0.878-0.878,2.317-0.878,3.194,0l0.8,0.801c0.879,0.878,0.879,2.316,0,3.195l-9.587,9.585  c-0.471,0.472-1.104,0.682-1.723,0.647C15.875,24.477,15.243,24.267,14.77,23.795z" fill="#515151"/></svg></button></li>
                    <li key="3" className="flexpane-title">{props.title}</li>
                </ul>
}

export class FlexPane extends React.Component {

    constructor(props) {
        super(props)
        this.refPane = React.createRef()
        //console.log('FlexPane.constructor',props)
    }

    render() {
        var mode = this.props.modes[this.props.index]

        var classNames_ = {
            "flexpane-pane-normal" : mode === "normal",
            "flexpane-pane-maximum": mode === "maximized",
            "flexpane-pane-hidden": mode === "hidden"
        }

        if (this.props.className != null) {
            classNames_[this.props.className] = true
        }
        
        var refPane = this.props.refPane || this.refPane

        var bar = null

        console.log('this.props',this.props)

        var children = React.Children.map(this.props.children, (child) => {
            if (child.type.name == 'FlexPaneBar') {

                //console.log('barProps',barProps)
                bar = React.cloneElement(child, this.props)
                console.log('bar',bar)
                return null
            }
            return child
        })

        if (bar === null) {
            //console.log('bar === null')
            bar = <FlexPaneBar {...barProps}><FlexPaneButtons/><FlexPaneTitle/></FlexPaneBar>
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
            return React.cloneElement(child,{key:index, modes:this.state.modes, index:index, onButtonClick: this.handleButtonClick});
        })
        return (<div className="flexpane-container">{children}</div>)
    }
}

