import React from 'react';
import Preloader from '../../Preloader/Preloader';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
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
    }
    render() {
        return (<>

            { !this.state.editMode &&
                <div>
                    <span onClick={ this.activateEditMode }>{this.props.status}</span>
                </div>
            }
            { this.state.editMode &&
                <div>
                    <input autoFocus ={true} onBlur={this.deactivateEditMode } value={this.props.status} />
                </div>
            }
        </>
        );
    }
}

export default ProfileStatus;