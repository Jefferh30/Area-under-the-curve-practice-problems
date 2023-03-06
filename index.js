const injectApp = () => {
    const params = {"material_id":"qm5hudcg", "borderColor":"#FFFFFF",};
    const ggbApplet = new GGBApplet(params, true);
    ggbApplet.setHTML5Codebase("https://www.geogebra.org/apps/5.0.498.0/web3d");
    ggbApplet.inject('ggb-element');
}