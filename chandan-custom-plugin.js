function ChandanCustomPlugin() {
    return function install() {
        console.log("Chandan Custom Plugin is installed!");
		//Adds root to OpenMCT tree (Roots contain namespace: key)
		openmct.objects.addRoot({
			namespace: "second.taxanomy",
			key: "custom-key"
		});
		//Adds provider for second.taxonomy: custom key object Root
		openmct.objects.addProvider("second.taxonomy", objectProvider);
    }
};

var objectProvider = {
	get: function(identifier){ //get is called with given identifier to resolve to an object
		return getDictionary().then(function(dictionary){
			if(identifier.key === "custom-key"){
				return{
					identifier: identifier,
					name: dictionary.name,
					type: "folder",
					location: "ROOT"
				};
			}
		});
	}
};

function getDictionary(){
	return http.get("dictionary.json").then(function(result){ //.then is a callback which calls a function that returns
		return result.data; //dictionary data
	});
}
