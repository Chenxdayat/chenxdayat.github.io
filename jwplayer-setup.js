document.addEventListener("DOMContentLoaded", function () {
    var playerContainer = document.createElement("div");
    playerContainer.id = "jwplayerDiv";
    document.body.appendChild(playerContainer);

    jwplayer("jwplayerDiv").setup({
        file: "https://streaming.indihometv.com/atm/hlsv3/sctv/playlist.m3u8",  // Ganti dengan URL streaming TV
        width: "100%",
        aspectratio: "16:9",
        autostart: false,
        controls: true
    });

    window.addEventListener("resize", function () {
        var player = jwplayer("jwplayerDiv");
        player.resize("100%", "100%");
    });
});
