import { levelService } from "../../app/services/levelService";
import { playerService } from "../../app/services/playerService";

export const ShowHint = (id: string, price: number) => {
  levelService.showHint(id).then(() => {
    playerService.removeStars(price);
  });
};
