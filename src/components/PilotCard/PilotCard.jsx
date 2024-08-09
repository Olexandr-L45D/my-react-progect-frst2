import css from "./PilotCard.module.css"
export default function PilotCard({
    pilot: { avatar, name, rank, spec, active },
}) {
    const containerClsc = [css.container];
    if (active) {
        containerClsc.push(css.isActive);
    } else {
        containerClsc.push(css.isRetared);
    }

    return (
        <div className={containerClsc.join(" ")}>
            <img className={css.images} src={avatar} alt={name} />
            <p>Name: {name}</p>
            <p>Rank: {rank}</p>
            {active && <p>Spec: {spec}</p>}
            <p>Status: {active ? "active" : "retired"}</p>
        </div>
    );
}