import React from 'react';
import './MatchesTable.css';

const MatchesTable = ({heder, tabledata}) => (
        <table className="table table-hover match-table table-lg" >
            <thead >
                <tr className="match-tableheader ">
                    <th>{heder.id}</th>
                    <th>{heder.MatchName}</th>
                    <th>{heder.Team1}</th>
                    <th>{heder.Team2}</th>
                    <th>{heder.Date}</th>
                    <th>{heder.actions}</th>
                </tr>
            </thead>
            <tbody>
                {tabledata.map(val => (
                    <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.MatchName}</td>
                        <td>{val.Team1}</td>
                        <td>{val.Team2}</td>
                        <td>{val.Date}</td>
                        <td><button className="buttoncss" type="button" ><img className="editimage" src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e7d7999d-2ee8-4057-a2d5-957032f5cd84;revision=0?component_id=6a77f6c0-d51e-40a5-a544-c1482cf0135f&api_key=CometServer1&access_token=1624637006_urn%3Aaaid%3Asc%3AUS%3Ae7d7999d-2ee8-4057-a2d5-957032f5cd84%3Bpublic_3af4d1342cba7da660703a99d9208e6bfebd41e1" alt="" />{val.actions.action1}</button>
                        <button className="buttoncss" type="button"><i class="fa fa-star"></i>  {val.actions.action2}</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

export default MatchesTable;