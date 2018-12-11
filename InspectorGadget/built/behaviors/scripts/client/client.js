var clientSystem = client.registerSystem(0, 0);

// Setup which events to listen for
clientSystem.initialize = function () {
    // set up your listenToEvents and register client-side components here.
    clientSystem.listenForEvent("minecraft:client_entered_world", onClientEnterWorld)
}

// per-tick updates
clientSystem.update = function() {
    // Any logic that needs to happen every tick on the client.
}

function onClientEnterWorld(eventData) {
    const player = eventData.player;
    clientSystem.broadcastEvent("minecraft:display_chat_event", `Hi there player with the ID: ${player.id}`);
}