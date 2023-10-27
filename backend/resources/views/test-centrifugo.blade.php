<html>

<head>
    <title>Centrifugo quick start</title>
</head>

<body>
<div id="counter">-</div>
<script src="https://unpkg.com/centrifuge@3.1.0/dist/centrifuge.js"></script>
<script type="text/javascript">
    const container = document.getElementById('counter');

    const centrifuge = new Centrifuge("ws://localhost:8000/connection/websocket", {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjk4MzgzNDE0fQ.7MCyggUJ9jNKSInR2U5FVtvvJkGXguhEXWBFOO9hLxM"
    });

    centrifuge.on('connecting', function (ctx) {
        console.log(`connecting: ${ctx.code}, ${ctx.reason}`);
    }).on('connected', function (ctx) {
        console.log(`connected over ${ctx.transport}`);
    }).on('disconnected', function (ctx) {
        console.log(`disconnected: ${ctx.code}, ${ctx.reason}`);
    }).connect();

    const sub = centrifuge.newSubscription("chat");

    sub.on('publication', function (ctx) {
        container.innerHTML = ctx.data.text;
        document.title = ctx.data.text;
    }).on('subscribing', function (ctx) {
        console.log(`subscribing: ${ctx.code}, ${ctx.reason}`);
    }).on('subscribed', function (ctx) {
        console.log('subscribed', ctx);
    }).on('unsubscribed', function (ctx) {
        console.log(`unsubscribed: ${ctx.code}, ${ctx.reason}`);
    }).subscribe();
</script>
</body>

</html>
