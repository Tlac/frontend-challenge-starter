import React from 'react';

const UserListItem = ({user}) => {
	const avatarURL = user.picture;

	return(
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={avatarURL}/>
				</div>

				<div className="media-body">
					<div className="media-heading">Name: {user.name}</div>
					<div className="media-heading">Email: {user.email}</div>
					<div className="media-heading">Company: {user.company}</div>
					<div className="media-heading">Phone: {user.phone}</div>
				</div>
			</div>
		</li>
	);



	//console.log(user);
	//const user = props.user;
	//return <li>{user.name}</li>
};

export default UserListItem;