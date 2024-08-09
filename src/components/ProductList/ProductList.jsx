import PilotCard from "../PilotCard/PilotCard";
import css from "./ProductList.module.css"

export default function PilotList({ pilots }) {
    return (
        <ul className={css.list}>
            {pilots.map(item => {
                return (
                    <li key={item.id}>
                        <PilotCard pilot={item} />
                    </li>
                );
            })}
        </ul>
    );
}