<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Streaming</title>
</head>
<body>
    <h1>Live Streaming</h1>
    <div id="liveStreamContainer"></div>

    <script>
        // ID atau URL live streaming
        const liveStreamURL = "https://teagandbps.climbwealthehz3u.shop/id/volleyball/pln-mobile-proliga-2025-1836714/putri-gresik-petrokimia-pupuk-indonesia-vs--yogya-falcons.html";

        // Element di mana streaming akan ditampilkan
        const container = document.getElementById('liveStreamContainer');

        // Membuat iframe secara dinamis
        const iframe = document.createElement('iframe');
        iframe.src = liveStreamURL;
        iframe.width = "560";
        iframe.height = "200";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        // Menambahkan iframe ke dalam container
        container.appendChild(iframe);
    </script>
</body>
</html>
