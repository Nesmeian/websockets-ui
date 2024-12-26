import { data } from "../../dataBase/db";
import terminalMessage from '../../utils/consoleLogMessageCollor';
import sendWsToAllUsers from '../../utils/sendWsToAllUsers';
export default function updateWinners(): void {
  const winnersData = {
    type: 'update_winners',
    data: JSON.stringify([]),
    id: data.id,
  };
  console.log(
    `${terminalMessage.blue}`,
    `update winner ${JSON.stringify(winnersData)}`,
  );
  sendWsToAllUsers(JSON.stringify(winnersData));
}
