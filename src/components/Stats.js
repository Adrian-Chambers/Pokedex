import React from 'react';
import './Components.css'

const Stats = ({stats}) => {
    return (
        <table className="w-50 stats"><tbody>
            <tr>
                <td>
                    <p><span className="fl"><strong>HP:</strong></span> <span className="fr">{stats[0].base_stat}</span></p>
                </td>
                <td>
                    <div class="statbar" style={{ '--num': stats[0].base_stat }}></div>
                </td>
            </tr>
            <tr>
                <td>
                    <p><span className="fl"><strong>Strength:</strong></span> <span className="fr">{stats[1].base_stat}</span></p>
                </td>
                <td>
                    <div class="statbar" style={{ '--num': stats[1].base_stat }}></div>
                </td>
            </tr>
            <tr>
                <td>
                    <p><span className="fl"><strong>Defense:</strong></span> <span className="fr">{stats[2].base_stat}</span></p>
                </td>
                <td>
                    <div class="statbar" style={{ '--num': stats[2].base_stat }}></div>
                </td>
            </tr>
            <tr>
                <td>
                    <p><span className="fl"><strong>Sp. Attack:</strong></span> <span className="fr">{stats[3].base_stat}</span></p>
                </td>
                <td>
                    <div class="statbar" style={{ '--num': stats[3].base_stat }}></div>
                </td>
            </tr>
            <tr>
                <td>
                    <p><span className="fl"><strong>Sp. Defense: </strong></span> <span className="fr">{stats[4].base_stat}</span></p>
                </td>
                <td>
                    <div class="statbar" style={{ '--num': stats[4].base_stat }}></div>
                </td>
            </tr>
            <tr>
                <td>
                    <p><span className="fl"><strong>Speed:</strong></span> <span className="fr">{stats[5].base_stat}</span></p>
                </td>
                <td>
                    <div class="statbar" style={{ '--num': stats[5].base_stat }}></div>
                </td>
            </tr>
        </tbody></table>
    )
}

export default Stats;