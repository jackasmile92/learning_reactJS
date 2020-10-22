import React from 'react';
import Preloader from '../../Preloader/Preloader';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        //this.forceUpdate();
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        //this.forceUpdate();
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        console.log(e.currentTarget.value)
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (<>

            { !this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>
                </div>
            }
            { this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                </div>
            }
        </>
        );
    }
}

export default ProfileStatus;