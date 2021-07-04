import { likeComponent } from "./like.component";

let component = new likeComponent(10, true)
component.onClick()
console.log(`likesCount: ${component._likesCount}, isSelected: ${component._isSelected}`)