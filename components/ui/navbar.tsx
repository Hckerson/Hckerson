import { useEffect, useState } from "react";

const createConnection = (serverUrl: string, roomId: string) => {
    return {
        disconnect: () => {},
        connect: () => {},
    };
};

function ChatRoom() {
    const [roomId, setRoomId] = useState("1");
    const [serverUrl, setServerUrl] = useState("https://localhost:1234");

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, []); // 🔴 React Hook useEffect has missing dependencies: 'roomId' and 'serverUrl'
    // ...
}
