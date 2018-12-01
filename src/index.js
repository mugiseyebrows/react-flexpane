
import React from "react"

import classNames from "classnames"

// nodemon -w src --exec npm run repack

/** <FlexPaneBar><FlexPaneButtons/><FlexPaneTitle/></FlexPaneBar>
 * 
 */
export const FlexPaneBar = (props) => {
    let paneProps = props.paneProps
    let children = React.Children.map(props.children,(child) => {
        if (child.type) {
            if (child.type.name === 'FlexPaneButtons' || child.type.name === 'FlexPaneTitle') {
                let buttons = React.cloneElement(child,{paneProps})
                return buttons
            }
        }
        return child
    })
    return <div className="flexpane-bar">{children}</div>
}

export const FlexPaneButtons = (props) => {

    let paneProps = props.paneProps

    let mode = paneProps.index !== undefined ? paneProps.modes[paneProps.index] : "normal"
    let classNames1 = classNames("flexpane-resize","flexpane-maximize",{"flexpane-button-active":mode !== "maximized"})
    let classNames2 = classNames("flexpane-resize","flexpane-normalize",{"flexpane-button-active":mode !== "normal"})
    let classNames3 = classNames("flexpane-resize","flexpane-hide",{"flexpane-button-active":mode !== "hidden"})

    return  <ul className="flexpane-buttons"> 
                <li key="0"><button className={classNames1} onClick={() => {paneProps.onButtonClick(paneProps.index,"maximized")}}><svg enableBackground="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z" fill="#515151"/></svg></button></li>
                <li key="1"><button className={classNames2} onClick={() => {paneProps.onButtonClick(paneProps.index,"normal")}}><svg enableBackground="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z" fill="#515151"/></svg></button></li>
                <li key="2"><button className={classNames3} onClick={() => {paneProps.onButtonClick(paneProps.index,"hidden")}}><svg enableBackground="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M14.77,23.795L5.185,14.21c-0.879-0.879-0.879-2.317,0-3.195l0.8-0.801c0.877-0.878,2.316-0.878,3.194,0  l7.315,7.315l7.316-7.315c0.878-0.878,2.317-0.878,3.194,0l0.8,0.801c0.879,0.878,0.879,2.316,0,3.195l-9.587,9.585  c-0.471,0.472-1.104,0.682-1.723,0.647C15.875,24.477,15.243,24.267,14.77,23.795z" fill="#515151"/></svg></button></li>
            </ul>
}

export const FlexPaneTitle = (props) => {
    let paneProps = props.paneProps
    return <div className="flexpane-title">{paneProps.title}</div>
}

/**  <FlexPane> content </FlexPane>
 *   <FlexPane><FlexPaneBar/> content </FlexPane>
 */
export class FlexPane extends React.Component {

    constructor(props) {
        super(props)
        this.refPane = React.createRef()
    }

    render() {

        let paneProps = this.props.paneProps
        paneProps['title'] = this.props.title

        let mode = paneProps.modes[paneProps.index]

        let classNames_ = {
            "flexpane-pane-normal" : mode === "normal",
            "flexpane-pane-maximum": mode === "maximized",
            "flexpane-pane-hidden": mode === "hidden"
        }

        if (this.props.className !== undefined) {
            classNames_[this.props.className] = true
        }
        
        let refPane = this.props.refPane || this.refPane

        let children = React.Children.toArray(this.props.children)

        let flexPaneBar

        if (children[0] && children[0].type && children[0].type.name === 'FlexPaneBar') {
            flexPaneBar = React.cloneElement(children[0], {paneProps})
            children = children.slice(1)
        } else {
            flexPaneBar = <FlexPaneBar paneProps={paneProps}><FlexPaneButtons/><FlexPaneTitle/></FlexPaneBar>
        }

        return <React.Fragment>
            {flexPaneBar}
            <div key={this.props.index} className={classNames("flexpane-pane",classNames_)} ref={refPane} >{children}</div>
            </React.Fragment>
    }
}

/**  <FlexPaneContainer><FlexPane/><FlexPane/><FlexPane/></FlexPaneContainer>
 * 
 */
export class FlexPaneContainer extends React.Component {

    constructor(props) {
        super(props)
        
        let modes = React.Children.map(this.props.children, (child,index) => {
            return child.props.mode || "normal";
        })

        this.state = {
            modes: modes
        }

        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleButtonClick(index, mode) {
        let modes = this.state.modes.slice()
        if (mode === "maximized") {
            modes = modes.map( mode => mode === "maximized" ? "normal" : mode )
        }
        modes[index] = mode
        this.setState({modes:modes})
    }

    render() {
        let children = React.Children.map(this.props.children, (child,index) => {
            let paneProps = {modes:this.state.modes, index:index, onButtonClick: this.handleButtonClick}
            return React.cloneElement(child,{paneProps});
        })
        return (<div className="flexpane-container">{children}</div>)
    }
}

