import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Image</th>
                <th>Make</th>
                <th>Model</th>
                <th>Price</th>
                <th>Details</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td><img src={row.imageurl} alt='' width={125} height={125}></img></td>
                <td>{row.make.toUpperCase()}</td>
                <td>{row.model.toUpperCase()}</td> 
                <td>{row.price}</td>
                <td><button type="submit" onClick={() => props.removeCharacter(index)}>Details</button></td>
                <td><button type="submit" onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter } = props;
        return (
            <div className='container'>
                <table>
                    <TableHeader />
                    <TableBody characterData={characterData} removeCharacter={removeCharacter} />
                </table>
            </div>
        );
}

export default Table;