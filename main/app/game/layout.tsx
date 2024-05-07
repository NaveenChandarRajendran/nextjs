export default function GameLayout(props: any) {
    return <div id="gameslayout">
        {/* Game Page content */}
        {props.children}
        {/* Team Page */}
        {props.team}
        {/* Analytics Page */}
        {props.anaylitics}
    </div>
}