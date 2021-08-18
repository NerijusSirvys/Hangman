import { agent } from "../../api/agent";
import { Player } from "../../interfaces/Player";
import { player_loadPlayer, player_removeStars } from "../state/playerSlice";
import store from "../store";

const loadPlayer = (player: Player) => {
  store.dispatch(player_loadPlayer(player));
};

const removeStars = async (stars: number) => {
  await agent.playerService.removeStarsAsync(stars).then(() => {
    store.dispatch(player_removeStars(stars));
  });
};

const playerService = {
  loadPlayer,
  removeStars,
};

export { playerService };
