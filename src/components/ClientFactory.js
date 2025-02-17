// src/components/ClientFactory.js
class ClientFactory {
    static createClient(clientType, clientProps) {
        switch (clientType) {
            case 'Client':
                return <Client {...clientProps} />;
            // Add more cases if there are different types of clients
            default:
                throw new Error(`Unknown client type: ${clientType}`);
        }
    }
}

export default ClientFactory;
