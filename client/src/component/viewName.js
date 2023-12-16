import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deletePost, fetchPosts} from "../action/action";
import {Link} from 'react-router-dom';

const ViewName = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
            .catch((error) => {
                console.error('Error fetching posts:', error.message);
                // Optionally, you can update the Redux state with the error
                // dispatch(someErrorAction(error));
            });
    }, []);

    const handleDeleteName = async (id) => {
        try {
            // Dispatch the deletePost action and wait for it to complete
            await dispatch(deletePost(id));

            // Manually dispatch the deletePost.fulfilled action with additional data
            dispatch(deletePost.fulfilled({postId: id}));

            // Optionally, you can perform additional actions after the deletion
            console.log(`Successfully deleted post with ID: ${id}`);
        } catch (error) {
            console.error('Error deleting post:', error.message);
        }
    };


    return (
        <div>
            <h2>List of Users</h2>
            {user.loading && <div>Loading...</div>}
            {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
            {!user.loading && user.users.length ? (
                <ul>
                    {user.users.map(user => (
                        <li key={user.id}>{user.name}
                            <Link to={`/update/${user.id}`}>
                                <button>Update</button>
                            </Link>
                            <button onClick={() => handleDeleteName(user.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : null}


        </div>
    );
};

export default ViewName;
