function main() {
    cartodb.createVis('map', 'https://brianavecchione.cartodb.com/api/v2/viz/a2037d6c-2a81-11e6-a318-0e8c56e2ffdb/viz.json', {
            shareable: true,
            title: true,
            description: true,
            search: true,
            tiles_loader: true,
            center: [40.7128,-74.0059], //40.7128° N, 74.0059° W
            zoom: 11
        })
        .done(function(vis, layers) {
            // layer 0 is the base layer, layer 1 is cartodb layer
            // setInteraction is disabled by default
            layers[1].setInteraction(true);
            layers[1].on('featureOver', function(e, latlng, pos, data) {
                cartodb.log.log(e, latlng, pos, data);
            });
            // you can get the native map to work with it
            var map = vis.getNativeMap();
            // now, perform any operations you need
            // map.setZoom(3);
            // map.panTo([50.5, 30.5]);
        })
        .error(function(err) {
            console.log(err);
        });
}
window.onload = main;
