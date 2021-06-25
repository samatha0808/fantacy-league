import React from 'react';
import './Table.css';

const Table = ({heder, tabledata}) => {
    console.log(tabledata)
    return(
        <table className="table table-hover tableex" >
            <thead >
                <tr className="tableheader ">
                    <th>{heder.id}</th>
                    <th>{heder.actionName}</th>
                    <th>{heder.category}</th>
                    <th>{heder.type}</th>
                    <th>{heder.status}</th>
                    <th>{heder.startTime}</th>
                    <th>{heder.actions}</th>
                </tr>
            </thead>
            <tbody>
                {tabledata.map(val => (
                    <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.actionName}</td>
                        <td>{val.category}</td>
                        <td>{val.type}</td>
                        <td>{val.status}</td>
                        <td>{val.startTime}</td>
                        <td><button className="actionbutton" type="button" ><img className="editimage" src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e7d7999d-2ee8-4057-a2d5-957032f5cd84;revision=0?component_id=6a77f6c0-d51e-40a5-a544-c1482cf0135f&api_key=CometServer1&access_token=1624637006_urn%3Aaaid%3Asc%3AUS%3Ae7d7999d-2ee8-4057-a2d5-957032f5cd84%3Bpublic_3af4d1342cba7da660703a99d9208e6bfebd41e1" alt="" />{val.actions}</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;