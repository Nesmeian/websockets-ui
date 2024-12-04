import WebSocket from 'ws';
export default function updateWinners(ws: WebSocket) {
  const winnersData = {
    type: 'update_winners',
    data: JSON.stringify([]),
    id: 0,
  };
  //   const winners = ;
  //   ws.send();
}
