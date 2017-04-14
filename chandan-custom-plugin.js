function ChandanCustomPlugin() {
    return function install() {
        console.log("Chandan Custom Plugin is installed!");
		//Adds root to OpenMCT tree
		openmct.addRoot({
			namespace: "custom-namespace",
			key: "custom-key"
		});
    }
};


