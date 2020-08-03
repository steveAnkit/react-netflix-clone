import React, {useState} from 'react'

const Row = (props) => {

    const [movie, setMoview] = useState([]);

    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Row
