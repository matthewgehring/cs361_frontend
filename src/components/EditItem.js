import React from 'react';
import { Link } from 'react-router-dom';
import {FaPencilAlt} from 'react-icons/fa'

function EditItem({lick}) {
    console.log('lick', lick)
    return (
        <Link to={{ pathname: `/edit/${lick._id}` }}><FaPencilAlt /></Link>
    )
}

export default EditItem;