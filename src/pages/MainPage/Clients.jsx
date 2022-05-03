import React from "react";

const Clients = ({ children, clients, crypto }) => {

    return (
        <div className="clients">
            <h2 className="title">Clientes</h2>
            {children}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>RG</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clients.map((client) => (
                            <tr key={client._id}>
                                <td>{client._id}</td>
                                <td>{crypto ? client.name : client.dName}</td>
                                <td>{crypto ? client.cpf : client.dCpf}</td>
                                <td>{crypto ?client.rg : client.dRg}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Clients