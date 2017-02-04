import React from 'react';
import UserListItem from './user_list_item';

const UserList = (props) => {
	const userItems = props.users.map((user) => {
		return <UserListItem key={user.email} user={user}/>
	});
	return (
		<ul className="col-md-4 list-group">
			{userItems}
		</ul>
	);
};

export default UserList;