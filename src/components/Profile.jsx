import React, { Component } from 'react';
import {
  isSignInPending,
  loadUserData,
  Person,
  getFile,
  putFile,
  lookupProfile
} from 'blockstack';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default class Profile extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  person: {
  	  	name() {
          return 'Anonymous';
        },
  	  	avatarUrl() {
  	  	  return avatarFallbackImage;
  	  	},
  	  },
      username: "",
      newStatus: "",
      statuses: [],
      statusIndex: 0,
      isLoading: false
  	};
  }

  render() {
    const { handleSignOut } = this.props;
    const { person } = this.state;
    const { username } = this.state;
    return (
      !isSignInPending() && person ?
      <div className="container">
       <div className="row">
         <div className="col-md-offset-3 col-md-6">
           <div className="col-md-12">
             <div className="avatar-section">
               <img
                 src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage }
                 className="img-rounded avatar"
                 id="avatar-image"
               />
               <div className="username">
                 <h1>
                   <span id="heading-name">{ person.name() ? person.name()
                     : 'Nameless Person' }</span>
                   </h1>
                 <span>{username}</span>
                 <span>
                   &nbsp;|&nbsp;
                   <a onClick={ handleSignOut.bind(this) }>(Logout)</a>
                 </span>
               </div>
             </div>
           </div>

           <div className="new-status">
             <div className="col-md-12">
               <textarea className="input-status"
                 value={this.state.newStatus}
                 onChange={e => this.handleNewStatusChange(e)}
                 placeholder="Enter a status"
               />
             </div>
             <div className="col-md-12">
               <button
                 className="btn btn-primary btn-lg"
                 onClick={e => this.handleNewStatusSubmit(e)}
               >
                 Submit
               </button>
             </div>
           </div>

         </div>
       </div>
      </div> : null
    );
  }

  componentWillMount() {
    this.setState({
      person: new Person(loadUserData().profile),
      username: loadUserData().username
    });
  }
}
