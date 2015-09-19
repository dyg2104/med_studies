const helpers = {
	storeValue(keys, value, tree) {
		let key = keys.shift();
		let leaf = tree[key];
		
		if (!leaf) {
			console.log('No leaf in the tree for key:' + key);
			return;
		}
		
		if (leaf.type === 'string' || leaf.type === 'number') {
			leaf.value = value;
		}
		
		if (leaf.type === 'array' && !leaf.value) {
			let jsonString = JSON.stringify(leaf.default);
			let fallback = JSON.parse(jsonString);
			leaf.value = [fallback];
			this.storeValue(keys, value, leaf.value);
		} else if (leaf.type === 'array') {
			this.storeValue(keys, value, leaf.value);
		}
		
		if (leaf.type === 'object' && !leaf.value) {
			let jsonString = JSON.stringify(leaf.default);
			let fallback = JSON.parse(jsonString);
			leaf.value = fallback;
			this.storeValue(keys, value, leaf.value);
		} else if (leaf.type === 'object') {
			this.storeValue(keys, value, leaf.value);
		}
	}
};

export default helpers;