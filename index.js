const params = {"material_id":"uupndnkk", "borderColor":"#FFFFFF",};
const ggbApplet = new GGBApplet(params, true);
window.addEventListener("load", function() {     ggbApplet.setHTML5Codebase("https://www.geogebra.org/apps/5.0.498.0/web3d");
        ggbApplet.inject('ggb-element');
    });